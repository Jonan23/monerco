<script lang="ts">
	import { cn } from '$lib/utils.js';
	let { class: className = '', for: htmlFor, children, required = false, ...rest } = $props();
</script>

<label for={htmlFor} class={cn('mb-1.5 block text-sm font-medium text-foreground', className)} {...rest}>
	{@render children()}
	{#if required}<span class="ml-0.5 text-accent">*</span>{/if}
</label>
