<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageHeader from '$lib/sections/PageHeader.svelte';
	import CtaBand from '$lib/sections/CtaBand.svelte';
	import { productsData } from '$lib/data.js';
	import { cn } from '$lib/utils.js';

	let categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))];
	let activeCategory = $state('All');
	let expanded = $state<Record<string, boolean>>({});

	function toggleSpecs(id: string) {
		expanded = { ...expanded, [id]: !expanded[id] };
	}
</script>

<SEO title="Products & Catalog" description="Browse the MONERCO elevator catalog — panoramic, home, hospital and freight elevators engineered for every space." />

<PageHeader eyebrow="Products" title="The MONERCO elevator catalog" description="Explore our range of elevators, from panoramic observation cabins to heavy-duty freight lifts. Filter by category and request a quote for any model." />

<section class="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
	<div class="flex flex-wrap justify-center gap-2">
		{#each categories as cat}
			<button
				type="button"
				onclick={() => activeCategory = cat}
				class={cn(
					'rounded-full border px-4 py-3 text-sm font-medium transition-colors',
					activeCategory === cat
						? 'border-accent bg-accent text-accent-foreground'
						: 'border-border bg-card text-muted-foreground hover:text-foreground'
				)}
			>
				{cat}
			</button>
		{/each}
	</div>

	<div class="mt-10 grid gap-6 sm:grid-cols-2">
		{#each productsData.filter(p => activeCategory === 'All' || p.category === activeCategory) as product}
			<article class="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-[0_0_24px_-8px_color-mix(in_oklab,var(--color-accent)_12%,_transparent)]">
				<div class="relative aspect-[4/3] overflow-hidden">
					<img src={product.image} alt={product.name} class="size-full object-cover" loading="lazy" />
					<span class="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur">{product.category}</span>
				</div>
				<div class="flex flex-1 flex-col items-center text-center p-5 sm:p-6">
					<h3 class="text-xl font-semibold text-foreground">{product.name}</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
					<dl class="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5 text-left sm:grid-cols-3">
						{#each product.specs as spec}
							<div>
								<dt class="text-xs text-muted-foreground">{spec.label}</dt>
								<dd class="mt-0.5 text-sm font-semibold text-foreground">{spec.value}</dd>
							</div>
						{/each}
					</dl>

					{#if product.extendedSpecs}
						<button
							type="button"
							onclick={() => toggleSpecs(product.id)}
							class="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200 {expanded[product.id] ? 'rotate-180' : ''}"><polyline points="6 9 12 15 18 9"/></svg>
							{expanded[product.id] ? 'Hide' : 'Show'} technical specifications
						</button>
						{#if expanded[product.id]}
							<dl class="mt-3 grid grid-cols-2 gap-2 rounded-lg bg-secondary/50 p-4 text-sm">
								{#each product.extendedSpecs as spec}
									<div>
										<dt class="text-xs text-muted-foreground">{spec.label}</dt>
										<dd class="text-foreground">{spec.value}</dd>
									</div>
								{/each}
							</dl>
						{/if}
					{/if}

					<div class="mt-auto flex items-center justify-center gap-3 pt-5">
						<a href="/quote?product={product.id}" class="inline-flex items-center gap-1.5 py-2 text-sm font-medium text-accent hover:underline">
							Request this model
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<CtaBand />
