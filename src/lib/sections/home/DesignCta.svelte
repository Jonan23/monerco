<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	const steps = [
		{ label: 'Cabin & walls', icon: 'layers' },
		{ label: 'Finishes & doors', icon: 'palette' },
		{ label: 'Lighting & mood', icon: 'lightbulb' },
		{ label: 'Controls & access', icon: 'gauge' },
	];
</script>

<section class="mx-auto max-w-7xl px-4 pb-12 sm:pb-20 sm:px-6 lg:px-8">
	<div class="overflow-hidden rounded-xl border border-border bg-secondary">
		<div class="grid items-center gap-6 p-6 sm:gap-10 sm:p-12 lg:grid-cols-2 lg:p-16">
			<div class="text-center">
				<p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Design Studio</p>
				<h2 class="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Design your elevator in minutes</h2>
				<p class="mt-4 mx-auto max-w-lg text-pretty leading-relaxed text-muted-foreground">
					Use our interactive configurator to choose cabin materials, lighting, doors, controls and accessories — with a live preview — then send the spec straight to our team for a quote.
				</p>
				<Button href="/design" size="lg" class="mt-8">
					Open the Design Studio
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</Button>
			</div>

			<div class="grid grid-cols-2 gap-4">
				{#each steps as step, i}
					<div class="flex flex-col items-center text-center gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_0_20px_-8px_color-mix(in_oklab,var(--color-accent)_12%,_transparent)]">
						<div class="flex flex-col items-center gap-1.5">
							<span class="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
								{#if step.icon === 'layers'}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
								{:else if step.icon === 'palette'}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c5 0 6-4.5 6-8C22 4.5 17.5 2 12 2z"/></svg>
								{:else if step.icon === 'lightbulb'}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>
								{:else}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z"/></svg>
								{/if}
							</span>
							<span class="font-heading text-2xl font-bold text-muted-foreground">0{i + 1}</span>
						</div>
						<p class="text-sm font-medium text-foreground">{step.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
