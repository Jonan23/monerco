<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		description?: string;
	}
	let { eyebrow, title, description }: Props = $props();
</script>

<section class="border-b border-border bg-card">
	<div class="mx-auto max-w-7xl px-4 py-10 text-center sm:py-16 sm:px-6 lg:px-8 lg:py-20 animate-[fade-up_0.5s_ease-out]">
		{#if eyebrow}
			<p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
		{/if}
		<h1 class="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h1>
		{#if description}
			<p class="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
		{/if}
	</div>
</section>
