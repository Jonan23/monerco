<script lang="ts">
	import { site } from '$lib/site.js';

	interface Props {
		class?: string;
	}
	let { class: className = '' }: Props = $props();
</script>

<a href="/" class="flex items-center gap-1.5 group sm:gap-2.5 {className}" aria-label="{site.fullName} home">
	<span class="flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground sm:size-11" aria-hidden="true">
		<svg viewBox="0 0 24 24" class="size-5 sm:size-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
			<path d="m6 13 6-6 6 6" />
			<path d="m6 19 6-6 6 6" />
		</svg>
	</span>
	<span class="flex flex-col leading-none">
		<span class="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">{site.name}</span>
		<span class="text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">Elevators</span>
	</span>
</a>
