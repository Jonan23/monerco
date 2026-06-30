<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { whatsappLink } from '$lib/site.js';
</script>

<section class="bg-primary text-primary-foreground">
	<div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:py-16 sm:px-6 lg:px-8 animate-[fade-up_0.5s_ease-out]">
		<h2 class="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">Ready to elevate your building?</h2>
		<p class="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/70">
			Tell us about your project and our engineers will prepare a tailored proposal — from a single home lift to a full high-rise fleet.
		</p>
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button href="/quote" size="lg">
				Request a quote
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
			</Button>
			<a
				href={whatsappLink('Hello MONERCO, I have a project I would like to discuss.')}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-transparent px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
			>
				Chat on WhatsApp
			</a>
		</div>
	</div>
</section>
