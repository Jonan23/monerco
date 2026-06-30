<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageHeader from '$lib/sections/PageHeader.svelte';
	import CtaBand from '$lib/sections/CtaBand.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { projectsData, stats } from '$lib/data.js';
	import { cn } from '$lib/utils.js';
	import type { Project } from '$lib/data.js';

	let activeCategory = $state('All');
	let modalProject = $state<Project | null>(null);

	const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];
	const filtered = $derived(activeCategory === 'All' ? projectsData : projectsData.filter(p => p.category === activeCategory));
</script>

<SEO title="Projects" description="View MONERCO Elevators portfolio of completed elevator installation and modernization projects worldwide." />

<PageHeader eyebrow="Portfolio" title="Projects that move cities" description="A selection of installations, modernizations and fleet contracts delivered across sectors and skylines." />

<section class="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
	<div class="flex flex-wrap gap-2">
		{#each categories as cat}
			<button
				type="button"
				onclick={() => activeCategory = cat}
				class={cn(
					'rounded-full border px-4 py-2.5 text-sm font-medium transition-colors',
					activeCategory === cat
						? 'border-accent bg-accent text-accent-foreground'
						: 'border-border bg-card text-muted-foreground hover:text-foreground',
				)}
			>
				{cat}
			</button>
		{/each}
	</div>

	<div class="mt-8 grid gap-6 sm:gap-8 lg:grid-cols-2">
		{#each filtered as project}
			<article class="group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-[0_0_24px_-8px_color-mix(in_oklab,var(--color-accent)_12%,_transparent)]">
				<div class="relative aspect-[16/10] overflow-hidden">
					<img src={project.image} alt={project.title} class="size-full object-cover" loading="lazy" />
					<span class="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur">{project.category}</span>
					<button
						type="button"
						onclick={() => modalProject = project}
						class="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-background/80 text-foreground opacity-100 sm:opacity-0 backdrop-blur transition-opacity sm:group-hover:opacity-100"
						aria-label="View project details"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
					</button>
				</div>
				<div class="p-5 sm:p-6">
					<div class="flex items-center justify-between gap-4">
						<h2 class="text-xl font-semibold text-foreground break-words">{project.title}</h2>
						<span class="shrink-0 text-sm font-medium text-accent">{project.stat}</span>
					</div>
					<p class="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
						{project.location}
					</p>
					<p class="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>

					{#if project.testimonial}
						<div class="mt-4 rounded-lg border border-border/60 bg-secondary/30 p-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-accent/50"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
							<p class="mt-1 text-sm italic leading-relaxed text-muted-foreground">&ldquo;{project.testimonial.quote}&rdquo;</p>
							<p class="mt-2 text-xs font-medium text-foreground">— {project.testimonial.client}</p>
						</div>
					{/if}

					<button type="button" onclick={() => modalProject = project} class="mt-4 inline-block py-2 text-sm font-medium text-accent transition-colors hover:underline">
						View full details →
					</button>
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="border-t border-border bg-card">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
		{#each stats as s}
			<div class="text-center">
				<p class="font-heading text-4xl font-bold text-accent">{s.value}</p>
				<p class="mt-1 text-sm text-muted-foreground">{s.label}</p>
			</div>
		{/each}
	</div>
</section>

<CtaBand />

<Modal open={!!modalProject} title={modalProject?.title} onclose={() => modalProject = null}>
	{#if modalProject}
		<div class="space-y-4">
			<div class="aspect-video overflow-hidden rounded-lg">
				<img src={modalProject.image} alt={modalProject.title} class="size-full object-cover" loading="lazy" />
			</div>
			<div class="flex items-center gap-2 text-sm text-muted-foreground">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
				{modalProject.location}
				<span class="ml-auto text-accent font-medium">{modalProject.stat}</span>
			</div>
			<p class="text-muted-foreground leading-relaxed">{modalProject.details || modalProject.summary}</p>
			{#if modalProject.testimonial}
				<div class="rounded-lg border border-border/60 bg-secondary/30 p-4">
					<p class="text-sm italic leading-relaxed text-muted-foreground">&ldquo;{modalProject.testimonial.quote}&rdquo;</p>
					<p class="mt-2 text-xs font-medium text-foreground">— {modalProject.testimonial.client}, {modalProject.testimonial.role}</p>
				</div>
			{/if}
			<a href="/quote?project={modalProject.id}" class="inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground px-4 py-3 text-sm font-medium w-full transition-colors hover:bg-accent/90 gap-1.5">
				Request Similar Quote
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
			</a>
		</div>
	{/if}
</Modal>
