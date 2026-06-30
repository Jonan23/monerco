<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageHeader from '$lib/sections/PageHeader.svelte';
	import CtaBand from '$lib/sections/CtaBand.svelte';
	import { servicesData, faqData, serviceIcons } from '$lib/data.js';

	let openFaq = $state<number | null>(null);
</script>

<SEO title="Services" description="Elevator installation, maintenance, modernization, spare parts, control systems and more from MONERCO Elevators." />

<PageHeader eyebrow="Services" title="Complete elevator services under one roof" description="From new installations to round-the-clock maintenance and smart control systems, we cover the full lifecycle of your vertical transportation." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
	<div class="space-y-px overflow-hidden rounded-xl border border-border bg-border">
		{#each servicesData as service, i}
			<section id={service.id} class="scroll-mt-24 bg-card">
				<div class="grid gap-6 p-5 sm:gap-8 sm:p-10 lg:grid-cols-12 lg:items-center">
					<div class="lg:col-span-5">
						<div class="flex items-center gap-4">
							<span class="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
								{@html serviceIcons[service.icon] || ''}
							</span>
							<span class="font-heading text-3xl font-bold text-muted-foreground">0{i + 1}</span>
						</div>
						<h2 class="mt-5 text-2xl font-bold tracking-tight text-foreground">{service.title}</h2>
						<p class="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
					</div>
					<div class="lg:col-span-5 lg:col-start-7">
						<ul class="space-y-3">
							{#each service.points as point}
								<li class="flex items-start gap-3">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-0.5 shrink-0 text-accent"><polyline points="20 6 9 17 4 12"/></svg>
									<span class="text-foreground">{point}</span>
								</li>
							{/each}
						</ul>
					</div>
					<div class="lg:col-span-2 lg:text-right">
						<a href="/quote?service={service.id}" class="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors w-full lg:w-auto gap-1.5">
							Enquire
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
						</a>
					</div>
				</div>
				<div class="mt-7 grid gap-4 border-t border-border px-4 pb-6 pt-7 sm:px-10 sm:pb-8 sm:grid-cols-3">
					{#each service.steps as step, si}
						<div class="flex gap-4">
							<span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">{si + 1}</span>
							<div>
								<h4 class="text-sm font-semibold text-foreground">{step.title}</h4>
								<p class="mt-1 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

<section class="border-t border-border bg-background">
	<div class="mx-auto max-w-3xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
		<h2 class="text-balance text-center text-3xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
		<p class="mt-3 text-center leading-relaxed text-muted-foreground">Quick answers to common questions about our services.</p>
		<div class="mt-10 space-y-2">
			{#each faqData as item, i}
				<div class="overflow-hidden rounded-lg border border-border">
					<button
						type="button"
						onclick={() => openFaq = openFaq === i ? null : i}
						aria-expanded={openFaq === i}
						class="flex w-full items-center justify-between gap-4 bg-card px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
					>
						<span>{item.question}</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-muted-foreground transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}"><polyline points="6 9 12 15 18 9"/></svg>
					</button>
					{#if openFaq === i}
						<div class="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
							{item.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBand />
