<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageHeader from '$lib/sections/PageHeader.svelte';
	import CtaBand from '$lib/sections/CtaBand.svelte';
	import { stats, teamMembers, certifications, timeline } from '$lib/data.js';
	import { cn } from '$lib/utils.js';
</script>

<SEO title="About" description="MONERCO Elevators is an independent elevator consulting, installation & maintenance firm with over 25 years of industry experience." />

<PageHeader eyebrow="About Us" title="Engineering movement since 1998" description="An independent firm delivering elevator consulting, installation, maintenance and modernization across Europe and the Middle East." />

<!-- Timeline -->
<section class="border-b border-border bg-card py-10 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-center text-2xl font-bold text-foreground">Our journey</h2>
		<div class="relative mt-10">
			<div class="absolute left-4 top-0 h-full w-px bg-border"></div>
			<ul class="space-y-10">
				{#each timeline as event, i}
					<li class="relative pl-12">
						<div class="absolute left-2.5 top-1.5 size-3 rounded-full border-2 {i === 0 ? 'border-accent bg-accent' : 'border-accent bg-background'}"></div>
						<div class={cn(i === 0 && 'rounded-xl border border-accent/20 bg-accent/5 p-5')}>
							<span class="font-heading text-sm font-bold text-accent">{event.year}</span>
							<h3 class="mt-0.5 font-semibold text-foreground">{event.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- Stats -->
<section class="border-b border-border bg-background py-10 sm:py-16">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
		{#each stats as s}
			<div class="text-center">
				<p class="font-heading text-4xl font-bold text-accent">{s.value}</p>
				<p class="mt-1 text-sm text-muted-foreground">{s.label}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Team -->
<section class="border-b border-border bg-card px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<h2 class="text-center text-2xl font-bold text-foreground">Leadership team</h2>
		<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each teamMembers as member}
				<div class="rounded-xl border border-border bg-background p-6">
					<div class="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent font-heading text-xl font-bold">
						{member.name.split(' ').map(n => n[0]).join('')}
					</div>
					<h3 class="mt-4 font-semibold text-foreground">{member.name}</h3>
					<p class="text-sm text-accent">{member.role}</p>
					<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Certifications -->
<section class="bg-background px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<h2 class="text-center text-2xl font-bold text-foreground">Certifications & memberships</h2>
		<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each certifications as cert}
				<div class="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="shrink-0 text-accent"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
					<div>
						<p class="font-medium text-foreground">{cert.name}</p>
						<p class="text-sm text-muted-foreground">{cert.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBand />
