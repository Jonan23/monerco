<script lang="ts">
	import { browser } from '$app/environment';
	import { useThrelte } from '@threlte/core';
	import * as THREE from 'three';

	const { scene, renderer } = useThrelte();

	$effect(() => {
		const isDark = browser && document.documentElement.classList.contains('dark');
		const pmremGenerator = new THREE.PMREMGenerator(renderer);

		const canvas = document.createElement('canvas');
		canvas.width = 1;
		canvas.height = 512;
		const c = canvas.getContext('2d')!;
		const grad = c.createLinearGradient(0, 0, 0, 512);
		if (isDark) {
			grad.addColorStop(0, '#f0e8d8');
			grad.addColorStop(0.2, '#d0c8b8');
			grad.addColorStop(0.5, '#8a8a8e');
			grad.addColorStop(0.8, '#4a4a4e');
			grad.addColorStop(1, '#1a1c20');
		} else {
			grad.addColorStop(0, '#ffffff');
			grad.addColorStop(0.2, '#e8e8e8');
			grad.addColorStop(0.5, '#c0c0c0');
			grad.addColorStop(0.8, '#909090');
			grad.addColorStop(1, '#606060');
		}
		c.fillStyle = grad;
		c.fillRect(0, 0, 1, 512);

		const tex = new THREE.CanvasTexture(canvas);
		tex.magFilter = THREE.LinearFilter;

		const sphere = new THREE.Mesh(
			new THREE.SphereGeometry(100, 32, 32),
			new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })
		);

		const envScene = new THREE.Scene();
		envScene.add(sphere);

		const envTexture = pmremGenerator.fromScene(envScene).texture;
		scene.environment = envTexture;
		scene.background = new THREE.Color(isDark ? '#15171a' : '#d4d4d8');

		return () => {
			pmremGenerator.dispose();
			envTexture.dispose();
		};
	});
</script>
