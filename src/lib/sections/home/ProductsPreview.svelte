<script lang="ts">
	import { productsData } from '$lib/data.js';

	const categoryColors: Record<string, string> = {
		Observation: 'bg-accent/10 text-accent',
		Residential: 'bg-primary/10 text-primary',
		Healthcare: 'bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
		Industrial: 'bg-muted text-muted-foreground',
	};
</script>

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
	<div class="flex flex-col items-center gap-6 text-center">
		<div class="max-w-2xl">
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our catalog</p>
			<h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Elevators for every space</h2>
		</div>
		<a href="/products" class="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
			View full catalog
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
		</a>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-2">
		{#each productsData as product}
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
					<div class="mt-auto pt-5">
						<a href="/quote?product={product.id}" class="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
							Request this model
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
