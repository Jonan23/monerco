<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageHeader from '$lib/sections/PageHeader.svelte';
	import Button from '$lib/components/Button.svelte';
	import CabinPreview from '$lib/configurator/CabinPreview.svelte';
	import { steps, getOption, defaultSelection, summarizeSelection, validateSelection, type DesignSelection } from '$lib/customizer.js';

	let step = $state(0);
	let selection = $state<DesignSelection>({ ...defaultSelection });
	let saved = $state(false);

	const current = $derived(steps[step]);
	const isValid = $derived(validateSelection(selection));
	const summary = $derived(summarizeSelection(selection));

	function next() { if (step < steps.length - 1) step++; }
	function prev() { if (step > 0) step--; }
	function goTo(i: number) { step = i; }
	function select(optId: string) {
		selection = { ...selection, [current.key]: optId };
	}
	function saveDesign() {
		saved = true;
	}
	function resetAll() {
		selection = { ...defaultSelection };
		step = 0;
		saved = false;
	}
</script>

<SEO title="Design Studio" description="Design your custom elevator cabin with MONERCO's interactive configurator. Choose walls, floor, ceiling, doors, and accents." />

<PageHeader eyebrow="Design Studio" title="Design your cabin" description="Choose every detail of your elevator cabin with our interactive configurator. See changes live as you make them." />

<section class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:px-8">
	<div class="lg:basis-2/5">
		<div class="lg:sticky lg:top-24">
			<CabinPreview {selection} />

			<div class="mt-4 text-sm text-muted-foreground">
				<p class="font-medium text-foreground">Your selections</p>
				<ul class="mt-1 space-y-0.5">
					{#each Object.entries(summary) as [label, value]}
						<li><span class="text-muted-foreground">{label}:</span> <span class="font-medium text-foreground">{value}</span></li>
					{/each}
				</ul>
			</div>

			{#if saved}
				<div class="mt-4 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground">
					Design saved! <a href="/quote?design={encodeURIComponent(JSON.stringify(selection))}" class="underline font-medium">Request a quote</a> with this specification.
					<button type="button" onclick={resetAll} class="ml-2 text-xs underline text-muted-foreground">Start fresh</button>
				</div>
			{/if}
		</div>
	</div>

	<div class="min-w-0">
		<!-- Step indicators -->
		<nav class="flex flex-wrap gap-2" aria-label="Design steps">
			{#each steps as s, i}
				<button
					type="button"
					onclick={() => goTo(i)}
					aria-current={i === step ? 'step' : undefined}
					class="flex items-center gap-2 rounded-full border px-3 py-2.5 text-sm font-medium transition-colors {i === step ? 'border-accent bg-accent text-accent-foreground' : 'border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground'}"
				>
					<span class="flex size-6 items-center justify-center rounded-full text-xs {i === step ? 'bg-accent-foreground text-accent' : 'bg-muted-foreground/20 text-muted-foreground'}">
						{i + 1}
					</span>
					{s.label}
				</button>
			{/each}
		</nav>

		<!-- Current step options -->
		<div class="mt-8">
			<h2 class="text-xl font-semibold leading-tight text-foreground">{current.label}</h2>
			<p class="mt-1 text-sm text-muted-foreground">{current.description}</p>

			<div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
				{#each current.options as opt}
					<button
						type="button"
						class="relative rounded-xl border p-3 text-left transition-all break-words sm:p-4 {selection[current.key] === opt.id ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-border bg-card hover:border-accent/30 hover:bg-accent/[0.02]'}"
						onclick={() => select(opt.id)}
					>
						<div class="mb-2 h-10 w-10 rounded-md border" style="background: {opt.color ?? 'oklch(0.62 0.14 48)'}"></div>
						<p class="text-sm font-medium text-foreground">{opt.label}</p>
						<p class="mt-0.5 text-xs leading-tight text-muted-foreground">{opt.description}</p>
						{#if selection[current.key] === opt.id}
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="absolute right-3 top-3 text-accent"><polyline points="20 6 9 17 4 12"/></svg>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<!-- Navigation buttons -->
		<div class="mt-10 flex items-center justify-between border-t border-border pt-6">
			<button
				type="button"
				onclick={prev}
				disabled={step === 0}
				class="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
				Previous
			</button>

			{#if step < steps.length - 1}
				<button
					type="button"
					onclick={next}
					class="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
				>
					Next
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
				</button>
			{:else}
				<Button onclick={saveDesign} disabled={!isValid} size="lg">
					Save design
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
				</Button>
			{/if}
		</div>
	</div>
</section>

<section class="bg-card py-10 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-center text-2xl font-bold text-foreground">What happens next?</h2>
		<div class="mt-8 grid gap-6 sm:grid-cols-3">
			<div class="flex flex-col items-center text-center rounded-xl border border-border bg-background p-6">
				<span class="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent font-heading text-lg font-bold">1</span>
				<h3 class="mt-4 font-semibold text-foreground">Save your design</h3>
				<p class="mt-2 text-sm leading-relaxed text-muted-foreground">Finalize your choices and save the configuration.</p>
			</div>
			<div class="flex flex-col items-center text-center rounded-xl border border-border bg-background p-6">
				<span class="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent font-heading text-lg font-bold">2</span>
				<h3 class="mt-4 font-semibold text-foreground">Request a quote</h3>
				<p class="mt-2 text-sm leading-relaxed text-muted-foreground">Your design is automatically attached to the quote request.</p>
			</div>
			<div class="flex flex-col items-center text-center rounded-xl border border-border bg-background p-6">
				<span class="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent font-heading text-lg font-bold">3</span>
				<h3 class="mt-4 font-semibold text-foreground">Engineer review</h3>
				<p class="mt-2 text-sm leading-relaxed text-muted-foreground">Our team assesses feasibility and responds with a detailed proposal.</p>
			</div>
		</div>
	</div>
</section>
