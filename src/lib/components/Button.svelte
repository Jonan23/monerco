<script lang="ts">
	import { cn } from '$lib/utils.js';

	interface Props {
		children?: import('svelte').Snippet;
		variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
		size?: 'default' | 'sm' | 'lg' | 'icon';
		disabled?: boolean;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		onclick?: (e: MouseEvent) => void;
	}
	let {
		children,
		variant = 'default',
		size = 'default',
		disabled = false,
		href,
		type = 'button',
		class: className = '',
		onclick
	}: Props = $props();

	const base = 'inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent text-sm font-medium transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 gap-1.5';

	const variants: Record<string, string> = {
		default: 'bg-accent text-accent-foreground hover:bg-accent/90',
		outline: 'border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		ghost: 'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50',
		link: 'text-accent underline-offset-4 hover:underline',
		destructive: 'bg-destructive/10 text-destructive hover:bg-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30',
	};

	const sizes: Record<string, string> = {
		default: 'h-11 px-4',
		sm: 'h-10 px-3 text-xs',
		lg: 'h-12 px-5',
		icon: 'size-11',
	};
</script>

{#if href}
	<a href={href} class={cn(base, variants[variant], sizes[size], className)}>
		{@render children?.()}
	</a>
{:else}
	<button {type} {disabled} {onclick} class={cn(base, variants[variant], sizes[size], className)}>
		{@render children?.()}
	</button>
{/if}
