<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { site } from '$lib/site.js';
</script>

<section class="relative overflow-hidden border-b border-border">
	<div class="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
		<div class="animate-[fade-up_0.6s_ease-out]">
			<p class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
				{site.slogan}
			</p>
			<h1 class="mt-6 text-balance text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
				Vertical transportation, engineered to elevate.
			</h1>
			<p class="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
				{site.fullName} designs, installs, maintains and modernizes elevators for homes, towers, hospitals and industry — combining precision engineering with elegant, custom interiors.
			</p>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<Button href="/design" size="lg">
					Design your elevator
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</Button>
				<a href="tel:{site.phone}" class="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors" role="button">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					{site.phone}
				</a>
			</div>
		</div>

		<div class="relative animate-[fade-up_0.6s_ease-out_0.15s_forwards]">
			<div class="relative aspect-[4/5] overflow-hidden rounded-xl border border-border shadow-2xl shadow-black/10 dark:shadow-black/30">
				<img src="/images/hero-cabin.svg" alt="MONERCO elevator cabin" class="size-full object-cover" />
			</div>
			<div class="absolute -bottom-5 left-0 rounded-xl border border-border bg-card p-4 shadow-xl sm:-left-5 sm:p-5">
				<p class="font-heading text-2xl font-bold text-foreground sm:text-3xl">25+</p>
				<p class="text-xs text-muted-foreground sm:text-sm">years elevating cities</p>
			</div>
		</div>
	</div>
</section>
