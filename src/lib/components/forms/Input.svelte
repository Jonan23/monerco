<script lang="ts">
	import { cn } from '$lib/utils.js';

	const fieldBase = 'w-full rounded-md border bg-background px-3.5 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50';
	const fieldNormal = 'border-input focus:border-accent focus:ring-accent/30';
	const fieldError = 'border-destructive focus:border-destructive focus:ring-destructive/30';

	let { class: className = '', value = $bindable(), error = '', ...rest } = $props();
</script>

<input class={cn(fieldBase, error ? fieldError : fieldNormal, className || '')} aria-invalid={!!error || undefined} aria-describedby={error && rest.id ? `${rest.id}-error` : undefined} {...rest} />
{#if error && rest.id}
	<p id={`${rest.id}-error`} class="mt-1 text-xs text-destructive">{error}</p>
{/if}
