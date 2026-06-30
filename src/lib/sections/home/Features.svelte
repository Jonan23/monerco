<script lang="ts">
	const features = [
		{
			icon: 'shield', title: 'Certified safety first',
			description: 'Every installation and service meets international safety codes, with full documentation and compliance reporting.',
		},
		{
			icon: 'clock', title: '24/7 emergency response',
			description: 'Round-the-clock support and remote monitoring keep your elevators running and your people moving.',
		},
		{
			icon: 'leaf', title: 'Energy efficient',
			description: 'Regenerative drives and smart dispatch reduce energy consumption and operating costs.',
		},
		{
			icon: 'star', title: 'Premium craftsmanship',
			description: 'Bespoke cabin interiors and finishes engineered to elevate the experience of every ride.',
		},
	];
</script>

<section class="border-y border-border bg-card">
	<div class="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:py-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
		<div class="relative order-last aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-first">
			<img src="/images/feature-elevator.svg" alt="MONERCO elevator feature" class="size-full object-cover" loading="lazy" />
		</div>

		<div class="text-center">
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why MONERCO</p>
			<h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Engineering you can trust, design you will love</h2>
			<div class="mt-8 grid gap-6 sm:grid-cols-2">
				{#each features as f}
					<div class="group flex flex-col items-center text-center gap-4 rounded-lg p-3 transition-all hover:bg-secondary/50">
						<span class="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
							{#if f.icon === 'shield'}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
							{:else if f.icon === 'clock'}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
							{:else if f.icon === 'leaf'}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
							{/if}
						</span>
						<div>
							<h3 class="font-semibold text-foreground">{f.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
