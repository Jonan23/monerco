<script lang="ts">
	import { T, Canvas } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import ModelLoader from './ModelLoader.svelte';
	import CabinEnvironment from './CabinEnvironment.svelte';
	import type { DesignSelection } from '$lib/customizer.js';

	interface Props {
		selection: DesignSelection;
	}
	let { selection }: Props = $props();

	let view = $state<'outside' | 'inside'>('inside');

	const cameraPos = $derived.by((): [number, number, number] => {
		if (view === 'outside') return [2.0, 1.5, 2.0];
		return [0, 1.3, 0];
	});

	const cameraTarget = $derived.by((): [number, number, number] => {
		if (view === 'outside') return [0, 1.0, 0];
		return [0, 1.3, 0.1];
	});

	const orbitMinDist = $derived(view === 'outside' ? 0.8 : 0.05);
	const orbitMaxDist = $derived(view === 'outside' ? 4.0 : 0.8);
	const orbitMinPolar = $derived(view === 'outside' ? 0.15 : 0);
	const orbitMaxPolar = $derived(view === 'outside' ? Math.PI / 2.0 : Math.PI);

	const ambientIntensity = $derived(view === 'outside' ? 1.2 : 0.8);

	const keyPos = $derived<[number, number, number]>(view === 'outside' ? [8, 12, 10] : [5, 8, 6]);
	const keyIntensity = $derived(view === 'outside' ? 2.0 : 1.2);
	const keyColor = $derived(view === 'outside' ? '#ffffff' : '#ffffff');

	const fillPos = $derived<[number, number, number]>(view === 'outside' ? [-5, 3, 6] : [-3, 4, -4]);
	const fillIntensity = $derived(view === 'outside' ? 0.8 : 0.5);
	const fillColor = $derived(view === 'outside' ? '#ddeeff' : '#aabbcc');

	const rimPos = $derived<[number, number, number]>(view === 'outside' ? [0, 5, -8] : [0, -1, 0]);
	const rimIntensity = $derived(view === 'outside' ? 0.6 : 0.3);
	const rimColor = $derived(view === 'outside' ? '#ccddff' : '#8899aa');

	function toggleView() {
		view = view === 'outside' ? 'inside' : 'outside';
	}
</script>

<div class="relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-[#e8e8ea] dark:bg-[#15171a] sm:aspect-[4/5]">
	<Canvas dpr={[1, 1.5]}>
		<CabinEnvironment />
		<ModelLoader {selection} />

		<T.PerspectiveCamera makeDefault fov={45} position={cameraPos}>
			<OrbitControls
				enableDamping
				dampingFactor={0.08}
				minDistance={orbitMinDist}
				maxDistance={orbitMaxDist}
				minPolarAngle={orbitMinPolar}
				maxPolarAngle={orbitMaxPolar}
				target={cameraTarget}
			/>
		</T.PerspectiveCamera>

		<T.AmbientLight intensity={ambientIntensity} />
		<T.DirectionalLight position={keyPos} intensity={keyIntensity} color={keyColor} />
		<T.DirectionalLight position={fillPos} intensity={fillIntensity} color={fillColor} />
		<T.DirectionalLight position={rimPos} intensity={rimIntensity} color={rimColor} />
	</Canvas>

	<button
		onclick={toggleView}
		class="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/90 px-4 py-3 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-muted"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
			<circle cx="12" cy="12" r="3"/>
		</svg>
		{view === 'outside' ? 'Inside View' : 'Outside View'}
	</button>
</div>
