<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import SEO from '$lib/components/SEO.svelte';
	import CtaBand from '$lib/sections/CtaBand.svelte';
	import { projectsData } from '$lib/data.js';

	const id = $derived($page.params.id);
	const project = $derived(projectsData.find(p => p.id === id));

	if (!project) {
		error(404, { message: 'Project not found' });
	}
</script>

<SEO title={project.title} description={project.summary} />

<section class="mx-auto max-w-4xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
	<a href="/projects" class="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
		Back to projects
	</a>

	<span class="mt-6 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">{project.category}</span>
	<h1 class="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">{project.title}</h1>

	<div class="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
		<span class="flex items-center gap-1.5">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
			{project.location}
		</span>
		<span class="font-medium text-accent">{project.stat}</span>
	</div>

	<div class="mt-8 aspect-video overflow-hidden rounded-xl">
		<img src={project.image} alt={project.title} class="size-full object-cover" loading="lazy" />
	</div>

	<div class="mt-8 space-y-5 leading-relaxed text-muted-foreground">
		<p>{project.details || project.summary}</p>
	</div>

	{#if project.testimonial}
		<div class="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-accent/40"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
			<blockquote class="mt-2 text-lg leading-relaxed italic text-foreground">&ldquo;{project.testimonial.quote}&rdquo;</blockquote>
			<p class="mt-3 text-sm font-medium text-muted-foreground">— {project.testimonial.client}, {project.testimonial.role}</p>
		</div>
	{/if}

	<div class="mt-10 border-t border-border pt-8">
		<a href="/quote?project={project.id}" class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
			Request Similar Quote
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
		</a>
	</div>
</section>

<CtaBand />
