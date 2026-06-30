<script lang="ts">
	import { stats } from '$lib/data.js';
</script>

<section class="border-b border-border bg-card">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:gap-8 sm:px-6 lg:grid-cols-4 lg:px-8">
		{#each stats as s}
			<div class="text-center">
				<p class="font-heading text-4xl font-bold text-accent">{s.value}</p>
				<p class="mt-1 text-sm text-muted-foreground">{s.label}</p>
			</div>
		{/each}
	</div>
</section>
