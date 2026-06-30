<script lang="ts">
	import { servicesData, serviceIcons } from '$lib/data.js';
</script>

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
	<div class="flex flex-col items-center gap-6 text-center">
		<div class="max-w-2xl">
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What we do</p>
			<h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Complete elevator solutions, end to end</h2>
		</div>
		<a href="/services" class="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
			All services
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
		</a>
	</div>

	<div class="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
		{#each servicesData as service}
			<a
				href="/services#{service.id}"
				class="group flex flex-col items-center gap-4 bg-card p-6 text-center sm:p-8 transition-all hover:bg-secondary hover:ring-1 hover:ring-inset hover:ring-accent/15"
			>
				<span class="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
					{@html serviceIcons[service.icon] || ''}
				</span>
				<div>
					<h3 class="font-heading text-lg font-semibold text-foreground">{service.title}</h3>
					<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
