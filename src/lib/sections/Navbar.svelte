<script lang="ts">
	import { page } from '$app/stores';
	import { nav } from '$lib/site.js';
	import { cn } from '$lib/utils.js';
	import Logo from './Logo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Button from '$lib/components/Button.svelte';

	let open = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 8;
	}

	$effect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	$effect(() => {
		if ($page.url.pathname) open = false;
	});
</script>

<header class="sticky top-0 z-50 w-full border-b transition-colors {scrolled ? 'border-border bg-background/85 backdrop-blur-md' : 'border-transparent bg-background'}">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
		<Logo />

		<nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
			{#each nav as item}
				{@const active = item.href === '/' ? $page.url.pathname === '/' : $page.url.pathname.startsWith(item.href)}
				<a
					href={item.href}
					class={cn(
						'rounded-md px-3 py-2 text-sm font-medium transition-colors',
						active ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
					)}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-1.5">
			<ThemeToggle />
			<Button href="/quote" class="hidden md:inline-flex">Request a Quote</Button>
			<button
				onclick={() => open = !open}
				class="lg:hidden p-3.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
				aria-label="Toggle menu"
				aria-expanded={open}
			>
				{#if open}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
				{/if}
			</button>
		</div>
	</div>

	{#if open}
		<div class="fixed inset-0 z-40 bg-black/20 lg:hidden" onclick={() => open = false}></div>
		<div class="relative z-50 border-t border-border bg-background lg:hidden animate-[slide-down_0.2s_ease-out]">
			<nav class="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
				{#each nav as item}
					{@const active = item.href === '/' ? $page.url.pathname === '/' : $page.url.pathname.startsWith(item.href)}
					<a
						href={item.href}
						class={cn(
							'rounded-md px-4 py-3.5 text-base font-medium',
							active ? 'bg-secondary text-accent' : 'text-foreground hover:bg-secondary'
						)}
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
