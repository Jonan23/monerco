<script lang="ts">
	import { T } from '@threlte/core';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import * as THREE from 'three';
	import { untrack } from 'svelte';
	import type { DesignSelection } from '$lib/customizer.js';
	import { getOption, getModelPath } from '$lib/customizer.js';

	interface Props {
		selection: DesignSelection;
		onready?: (info: { width: number; height: number; depth: number; doorZ: number }) => void;
	}
	let { selection, onready }: Props = $props();

	const modelPath = $derived(getModelPath(selection.type));

	type Zone = 'walls' | 'floor' | 'ceiling' | 'doors' | 'accents' | 'exterior' | 'glass' | 'decoration';

	function getZone(name: string): Zone {
		if (/^SM_(Int_Wall_Lift|Left_Wall|Right_Wall|Back_Wall)/.test(name)) return 'walls';
		if (/^SM_(Floor|Threashold)/.test(name)) return 'floor';
		if (/^SM_Ceiling/.test(name)) return 'ceiling';
		if (/^SM_Lift_(door|EntryWall|Button_Board)/.test(name)) return 'doors';
		if (/[Hh]andle/.test(name)) return 'accents';
		if (/^SM_Glass/.test(name)) return 'glass';
		if (/^SM_LIft_Outer_Wall/.test(name)) return 'exterior';
		return 'decoration';
	}

	type MatInfo = { material: THREE.Material; sourceName: string };

	let renderScene = $state<THREE.Group | undefined>();
	let renderZones = $state<Map<Zone, MatInfo[]> | undefined>();

	// Reactive model loading — runs when modelPath changes
	$effect(() => {
		const path = modelPath;

		// Dispose old scene without tracking renderScene as dependency
		const oldScene = untrack(() => renderScene);
		if (oldScene) disposeScene(oldScene);

		renderScene = undefined;
		renderZones = undefined;

		let cancelled = false;
		const loader = new GLTFLoader();
		loader.load(
			path,
			(gltf) => {
				if (cancelled) return;
				const result = processGLTF(gltf, selection);
				renderScene = result.scene;
				renderZones = result.zones;
				onready?.(result.info);
			},
			undefined,
			(err) => {
				if (cancelled) return;
				console.error('GLB load error:', err);
			},
		);

		return () => { cancelled = true; };
	});

	// Reactive material updates — runs when selection or zones change
	$effect(() => {
		const zones = renderZones;
		if (!zones) return;
		applySelection(selection, zones);
	});

	function disposeScene(group: THREE.Group) {
		group.traverse((child: THREE.Object3D) => {
			if (!(child instanceof THREE.Mesh)) return;
			child.geometry?.dispose();
			const mats = Array.isArray(child.material) ? child.material : [child.material];
			for (const m of mats) {
				m.dispose();
				for (const key of ['map', 'bumpMap', 'normalMap', 'roughnessMap', 'metalnessMap', 'emissiveMap', 'alphaMap', 'aoMap', 'lightMap'] as const) {
					const tex = (m as any)[key];
					if (tex instanceof THREE.Texture) tex.dispose();
				}
			}
		});
	}

	function processGLTF(
		gltf: { scene: THREE.Group },
		sel: DesignSelection,
	): {
		scene: THREE.Group;
		zones: Map<Zone, MatInfo[]>;
		info: { width: number; height: number; depth: number; doorZ: number };
	} {
		const s = gltf.scene.clone(true);

		const box = new THREE.Box3().setFromObject(s);
		const center = box.getCenter(new THREE.Vector3());
		const size = box.getSize(new THREE.Vector3());
		const maxDim = Math.max(size.x, size.y, size.z);
		const targetSize = 2.5;
		const scale = targetSize / maxDim;

		s.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);
		s.scale.set(scale, scale, scale);
		s.updateMatrixWorld(true);

		const zones = new Map<Zone, MatInfo[]>();
		const allZones: Zone[] = ['walls', 'floor', 'ceiling', 'doors', 'accents', 'exterior', 'glass', 'decoration'];
		for (const z of allZones) zones.set(z, []);

		let doorZ = 0;
		const tmpVec = new THREE.Vector3();

		s.traverse((child: THREE.Object3D) => {
			if (!(child instanceof THREE.Mesh)) return;
			const zone = getZone(child.name);

			if (zone === 'doors') {
				child.getWorldPosition(tmpVec);
				doorZ = tmpVec.z;
			}

			const srcMat = child.material;
			const mats = Array.isArray(srcMat) ? srcMat : [srcMat];
			const cloned = mats.map((m) => {
				const clone = m.clone();
				return { material: clone, sourceName: (m.name || '') };
			});
			child.material = Array.isArray(srcMat)
				? cloned.map((c) => c.material)
				: cloned[0].material;

			for (const info of cloned) {
				zones.get(zone)?.push(info);
			}
		});

		// Exterior — perforated metal mesh
		{
			const size_ = 256;
			const canvas = document.createElement('canvas');
			canvas.width = size_;
			canvas.height = size_;
			const ctx = canvas.getContext('2d')!;

			ctx.fillStyle = '#1a1c20';
			ctx.fillRect(0, 0, size_, size_);

			const spacing = 28;
			const holeSize = 12;
			const inset = (spacing - holeSize) / 2;

			for (let row = 0; row < 9; row++) {
				for (let col = 0; col < 9; col++) {
					const cx = col * spacing + spacing / 2;
					const cy = row * spacing + spacing / 2;
					const offset = (row % 2) * (spacing / 2);

					// Bright rim
					ctx.fillStyle = '#6a6e74';
					ctx.beginPath();
					ctx.ellipse(cx + offset, cy, holeSize / 2 + 1.5, holeSize / 2 + 1.5, 0, 0, Math.PI * 2);
					ctx.fill();

					// Dark hole
					ctx.fillStyle = '#0a0c10';
					ctx.beginPath();
					ctx.ellipse(cx + offset, cy, holeSize / 2 - 1, holeSize / 2 - 1, 0, 0, Math.PI * 2);
					ctx.fill();
				}
			}

			const texture = new THREE.CanvasTexture(canvas);
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set(2, 2);
			texture.anisotropy = 4;

			const bumpCanvas = document.createElement('canvas');
			bumpCanvas.width = size_;
			bumpCanvas.height = size_;
			const bctx = bumpCanvas.getContext('2d')!;

			bctx.fillStyle = '#808080';
			bctx.fillRect(0, 0, size_, size_);
			for (let row = 0; row < 9; row++) {
				for (let col = 0; col < 9; col++) {
					const cx = col * spacing + spacing / 2;
					const cy = row * spacing + spacing / 2;
					const offset = (row % 2) * (spacing / 2);

					bctx.fillStyle = '#000000';
					bctx.beginPath();
					bctx.ellipse(cx + offset, cy, holeSize / 2 - 1, holeSize / 2 - 1, 0, 0, Math.PI * 2);
					bctx.fill();
				}
			}
			const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
			bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
			bumpTexture.repeat.set(2, 2);

			for (const { material } of zones.get('exterior') ?? []) {
				if (!('color' in material)) continue;
				const m = material as THREE.MeshStandardMaterial;
				m.color.set('#2b2d31');
				m.map = texture;
				m.bumpMap = bumpTexture;
				m.bumpScale = 0.4;
				m.roughness = 0.3;
				m.metalness = 0.8;
				m.needsUpdate = true;
			}
		}

		// Glass — base tint
		for (const { material } of zones.get('glass') ?? []) {
			if (!('color' in material)) continue;
			(material as THREE.MeshStandardMaterial).color.set('#aeb7bd');
		}

		// Apply initial selection so materials are correct from first frame
		applySelection(sel, zones);

		return {
			scene: s,
			zones,
			info: {
				width: size.x * scale,
				height: size.y * scale,
				depth: size.z * scale,
				doorZ,
			},
		};
	}

	function applySelection(sel: DesignSelection, zones: Map<Zone, MatInfo[]>) {
		const wallOpt = getOption('walls', sel.walls);
		if (wallOpt) {
			for (const { material, sourceName } of zones.get('walls') ?? []) {
				if (!('color' in material)) continue;
				const m = material as THREE.MeshStandardMaterial;
				if (sourceName === 'M_Steel_Inst1') {
					m.color.set(wallOpt.color);
				} else if (sourceName === 'WorldGridMaterial' || sourceName === 'M_side_Lower' || sourceName === 'M_door_backplate') {
					m.color.set(wallOpt.accent ?? wallOpt.color);
				} else if (sourceName === 'M_White_Glass') {
					m.color.set(wallOpt.accent ?? wallOpt.color);
					m.opacity = 0.55;
					m.transparent = true;
				}
			}
		}

		const floorOpt = getOption('floor', sel.floor);
		if (floorOpt) {
			for (const { material } of zones.get('floor') ?? []) {
				if (!('color' in material)) continue;
				(material as THREE.MeshStandardMaterial).color.set(floorOpt.color);
			}
		}

		const ceilOpt = getOption('ceiling', sel.ceiling);
		if (ceilOpt) {
			for (const { material, sourceName } of zones.get('ceiling') ?? []) {
				if (!('color' in material)) continue;
				const m = material as THREE.MeshStandardMaterial;
				if (sourceName === 'M_Steel_Inst1') {
					m.color.set(ceilOpt.color);
				} else if (sourceName === 'M_Glow') {
					m.color.set(ceilOpt.accent ?? ceilOpt.color);
					if (m.emissive) m.emissive.set(ceilOpt.accent ?? ceilOpt.color);
				} else if (sourceName === 'M_Light_chrome') {
					m.color.set(ceilOpt.accent ?? ceilOpt.color);
				} else if (sourceName === 'M_mirror') {
					m.color.set(ceilOpt.accent ?? ceilOpt.color);
				}
			}
		}

		const doorOpt = getOption('doors', sel.doors);
		if (doorOpt) {
			for (const { material, sourceName } of zones.get('doors') ?? []) {
				if (!('color' in material)) continue;
				const m = material as THREE.MeshStandardMaterial;
				if (sourceName === 'M_Steel1') {
					m.color.set(doorOpt.color);
				} else if (sourceName === 'Door') {
					m.color.set(doorOpt.accent ?? doorOpt.color);
				}
			}
		}

		const accOpt = getOption('accents', sel.accents);
		if (accOpt) {
			const hide = accOpt.id === 'no-rail';
			for (const { material, sourceName } of zones.get('accents') ?? []) {
				if (!('color' in material)) continue;
				const m = material as THREE.MeshStandardMaterial;
				m.visible = !hide;
				if (!hide) m.color.set(accOpt.color);
			}
			for (const { material, sourceName } of zones.get('decoration') ?? []) {
				if (!('color' in material)) continue;
				const m = material as THREE.MeshStandardMaterial;
				if (sourceName === 'M_Buttons_01') {
					m.color.set(accOpt.accent ?? accOpt.color);
				} else if (sourceName === 'M_Glow2') {
					m.color.set(accOpt.accent ?? accOpt.color);
					if (m.emissive) m.emissive.set(accOpt.accent ?? accOpt.color);
				}
			}
		}

		if (doorOpt) {
			for (const { material } of zones.get('glass') ?? []) {
				if (!('color' in material)) continue;
				(material as THREE.MeshStandardMaterial).color.set(doorOpt.accent ?? doorOpt.color);
			}
		}
	}
</script>

{#if renderScene}
	<T is={renderScene} />
{/if}
