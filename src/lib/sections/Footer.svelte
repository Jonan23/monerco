<script lang="ts">
	import { nav, site } from '$lib/site.js';
	import Logo from './Logo.svelte';

	const services = [
		{ label: 'Installation', href: '/services#installation' },
		{ label: 'Maintenance', href: '/services#maintenance' },
		{ label: 'Modernization', href: '/services#modernization' },
		{ label: 'Spare Parts', href: '/services#parts' },
		{ label: 'Control Systems', href: '/services#controls' },
	];
</script>

<footer class="border-t border-border bg-card">
	<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
			<div class="space-y-4">
				<Logo />
				<p class="max-w-xs text-sm leading-relaxed text-muted-foreground">
					{site.slogan}. Precision engineering, certified safety and elegant design for vertical transportation.
				</p>
			</div>

			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
				<ul class="mt-4 space-y-2.5">
					{#each nav as item}
						<li><a href={item.href} class="inline-block py-2 text-sm text-muted-foreground transition-colors hover:text-accent">{item.label}</a></li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h3>
				<ul class="mt-4 space-y-0">
					{#each services as s}
						<li><a href={s.href} class="inline-block py-2 text-sm text-muted-foreground transition-colors hover:text-accent">{s.label}</a></li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
				<ul class="mt-4 space-y-3 text-sm text-muted-foreground">
					<li class="flex items-start gap-2.5">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-0.5 shrink-0 text-accent"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
						<a href="tel:{site.phone}" class="inline-block py-2 hover:text-accent">{site.phone}</a>
					</li>
					<li class="flex items-start gap-2.5">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-0.5 shrink-0 text-accent"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
						<a href="mailto:{site.email}" class="inline-block py-2 hover:text-accent">{site.email}</a>
					</li>
					<li class="flex items-start gap-2.5">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-0.5 shrink-0 text-accent"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
						<span>{site.address}</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
			<p>&copy; {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
			<p class="font-heading italic text-accent">{site.slogan}</p>
		</div>
	</div>
</footer>
