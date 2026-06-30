<script lang="ts">
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';
	import Navbar from '$lib/sections/Navbar.svelte';
	import Footer from '$lib/sections/Footer.svelte';

	const status = $derived($page.status);
	const message = $derived(status === 404 ? 'Page not found' : 'Something went wrong');
	const detail = $derived(status === 404
		? 'The page you are looking for does not exist or has been moved.'
		: 'An unexpected error occurred. Please try again or contact us.');
</script>

<SEO title={message} />
<Navbar />
<main class="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
	<span class="font-heading text-6xl font-bold text-accent/30 sm:text-7xl lg:text-8xl">{status}</span>
	<h1 class="mt-4 text-2xl font-bold text-foreground sm:text-3xl">{message}</h1>
	<p class="mt-3 max-w-md text-muted-foreground">{detail}</p>
	<div class="mt-8 flex flex-col gap-4 sm:flex-row">
		<a href="/" class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
			Go home
		</a>
		<a href="/contact" class="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
			Contact us
		</a>
	</div>
</main>
<Footer />