<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		title: string;
		description?: string;
		image?: string;
	}
	let {
		title,
		description = 'MONERCO Elevators — Elevating Your World. Professional elevator installation, maintenance, and modernization services.',
		image = '/images/hero-cabin.svg'
	}: Props = $props();

	const url = $derived(`https://monerco.com${$page.url.pathname}`);
</script>

<svelte:head>
	<title>{title} | MONERCO Elevators</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:title" content="{title} | MONERCO Elevators" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={`https://monerco.com${image}`} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={`https://monerco.com${image}`} />
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "MONERCO Elevators",
			"url": "https://monerco.com",
			"logo": "https://monerco.com/favicon.svg",
			"description": "Professional elevator installation, maintenance, and modernization services.",
			"address": { "@type": "PostalAddress", "addressCountry": "NG" },
			"contactPoint": { "@type": "ContactPoint", "telephone": "+234-800-MONERCO", "contactType": "customer service" }
		})}
	</script>
</svelte:head>
