<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/sections/Navbar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import WhatsAppButton from '$lib/sections/WhatsAppButton.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" rel="stylesheet" />
</svelte:head>

<Navbar />
<main class="min-h-screen pb-20">
	{@render children()}
</main>
<Footer />
<WhatsAppButton />
