<script lang="ts">
	import { browser } from '$app/environment';
	import type { Component } from 'svelte';
	import type { DesignSelection } from '$lib/customizer.js';

	interface Props {
		selection: DesignSelection;
	}
	let { selection }: Props = $props();

	let Scene = $state<Component<any, any, any> | null>(null);

	if (browser) {
		import('./CabinScene3D.svelte').then((mod) => {
			Scene = mod.default;
		}).catch((err) => {
			console.error('Failed to load 3D cabin scene:', err);
		});
	}
</script>

{#if Scene}
	<Scene {selection} />
{:else}
	<div class="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-xl bg-secondary">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="text-accent/60">
			<path d="M16 5 L27 16 L16 27 L5 16 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
			<path d="M11 16 L16 11 L21 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		<p class="text-sm text-muted-foreground/60 animate-pulse">Loading 3D preview…</p>
	</div>
{/if}
