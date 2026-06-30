<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import SEO from '$lib/components/SEO.svelte';
	import CtaBand from '$lib/sections/CtaBand.svelte';
	import { productsData } from '$lib/data.js';

	const id = $derived($page.params.id);
	const product = $derived(productsData.find(p => p.id === id));

	if (!product) {
		error(404, { message: 'Product not found' });
	}
</script>

<SEO title={product.name} description={product.description} />

<section class="mx-auto max-w-5xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
	<a href="/products" class="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
		Back to catalog
	</a>

	<div class="mt-8 grid gap-8 sm:gap-10 lg:grid-cols-5">
		<div class="aspect-[4/3] overflow-hidden rounded-xl lg:col-span-2">
			<img src={product.image} alt={product.name} class="size-full object-cover" loading="lazy" />
		</div>

		<div class="lg:col-span-3">
			<span class="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">{product.category}</span>
			<h1 class="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{product.name}</h1>
			<p class="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

			<dl class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
				{#each product.specs as spec}
					<div class="rounded-lg border border-border bg-card p-4">
						<dt class="text-xs text-muted-foreground">{spec.label}</dt>
						<dd class="mt-1 text-lg font-semibold text-foreground">{spec.value}</dd>
					</div>
				{/each}
			</dl>

			{#if product.extendedSpecs}
				<h2 class="mt-10 text-lg font-semibold text-foreground">Technical specifications</h2>
				<dl class="mt-3 grid grid-cols-2 gap-3">
					{#each product.extendedSpecs as spec}
						<div class="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-3 text-sm">
							<dt class="text-muted-foreground">{spec.label}</dt>
							<dd class="font-medium text-foreground">{spec.value}</dd>
						</div>
					{/each}
				</dl>
			{/if}

			<div class="mt-10 flex flex-wrap gap-3">
				<a href="/quote?product={product.id}" class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
					Request a quote
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</a>
				<a href="/design?product={product.id}" class="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
					Design this cabin
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
				</a>
			</div>
		</div>
	</div>
</section>

<CtaBand />
