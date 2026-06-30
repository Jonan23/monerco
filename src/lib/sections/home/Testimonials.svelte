<script lang="ts">
	const testimonials = [
		{
			quote: 'MONERCO modernized twelve elevators across our headquarters with zero disruption to daily operations. Ride quality and reliability are night and day.',
			name: 'Daniel Reyes', role: 'Facilities Director, Skyline Tower',
		},
		{
			quote: 'Their maintenance team responds fast and the digital reports keep us fully compliant. A genuine partner, not just a vendor.',
			name: 'Aisha Karim', role: 'Operations Manager, City General Hospital',
		},
		{
			quote: 'The design studio let us preview the cabin finishes before committing. The final panoramic lifts are the centerpiece of our lobby.',
			name: 'Marco Bellini', role: 'GM, The Grand Meridian Hotel',
		},
	];
</script>

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Client stories</p>
		<h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why clients keep coming back</h2>
	</div>

	<div class="mt-12 grid gap-6 lg:grid-cols-3">
		{#each testimonials as t}
			<figure class="flex flex-col items-center text-center gap-5 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_0_24px_-8px_color-mix(in_oklab,var(--color-accent)_10%,_transparent)]">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-accent/60"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
				<blockquote class="text-pretty leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
				<figcaption class="mt-auto border-t border-border pt-4">
					<p class="font-semibold text-foreground">{t.name}</p>
					<p class="text-sm text-muted-foreground">{t.role}</p>
				</figcaption>
			</figure>
		{/each}
	</div>
</section>
