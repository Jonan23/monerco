<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import PageHeader from '$lib/sections/PageHeader.svelte';
	import Label from '$lib/components/forms/Label.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import Textarea from '$lib/components/forms/Textarea.svelte';
	import Select from '$lib/components/forms/Select.svelte';
	import Button from '$lib/components/Button.svelte';
	import { site, whatsappLink } from '$lib/site.js';

	let submitted = $state(false);
	let sending = $state(false);
	let error = $state('');
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let topic = $state('general');
	let message = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		sending = true;
		error = '';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, phone, topic, message })
			});
			if (!res.ok) throw new Error('Failed to submit');
			submitted = true;
		} catch {
			error = 'Something went wrong. Please try again or call us directly.';
		} finally {
			sending = false;
		}
	}
</script>

<SEO title="Contact" description="Get in touch with MONERCO Elevators for installations, maintenance, modernization and parts. Available 24/7 for emergencies." />

<PageHeader eyebrow="Contact" title="Let's talk about your project" description="Reach out for a consultation, a maintenance contract or emergency support. Our team is ready to help." />

<section class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:py-16 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
	<div class="lg:col-span-2 text-center">
		<h2 class="text-2xl font-bold tracking-tight text-foreground">Contact details</h2>
		<ul class="mt-6 space-y-5">
			<li>
				<a href="tel:{site.phone}" class="block hover:opacity-80">
					<div class="flex items-start gap-4">
						<span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
						</span>
						<div>
							<p class="text-sm text-muted-foreground">Phone</p>
							<p class="font-medium text-foreground">{site.phone}</p>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a href="mailto:{site.email}" class="block hover:opacity-80">
					<div class="flex items-start gap-4">
						<span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
						</span>
						<div>
							<p class="text-sm text-muted-foreground">Email</p>
							<p class="font-medium text-foreground">{site.email}</p>
						</div>
					</div>
				</a>
			</li>
			<li>
				<div class="flex items-start gap-4">
					<span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
					</span>
					<div>
						<p class="text-sm text-muted-foreground">Office</p>
						<p class="font-medium text-foreground">{site.address}</p>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-start gap-4">
					<span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
					</span>
					<div>
						<p class="text-sm text-muted-foreground">Support</p>
						<p class="font-medium text-foreground">24/7 emergency response</p>
					</div>
				</div>
			</li>
		</ul>

		<a
			href={whatsappLink('Hello MONERCO, I would like to get in touch.')}
			target="_blank"
			rel="noopener noreferrer"
			class="mt-8 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:brightness-90"
		>
			<svg viewBox="0 0 24 24" class="size-5" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.512 5.26l-.999 3.648 3.736-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
			Message us on WhatsApp
		</a>
	</div>

	<div class="lg:col-span-3">
		{#if submitted}
			<div class="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center sm:p-10">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
				<h3 class="mt-4 text-xl font-semibold text-foreground">Thank you — message received</h3>
				<p class="mt-2 max-w-sm text-muted-foreground">Our team will get back to you within one business day. For urgent matters, please call us directly.</p>
				<button onclick={() => submitted = false} class="mt-6 inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">Send another message</button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="rounded-xl border border-border bg-card p-6 sm:p-8">
				<div class="grid gap-5 sm:grid-cols-2">
					<div>
						<Label for="name" required>Full name</Label>
						<Input id="name" name="name" required placeholder="Jane Doe" bind:value={name} />
					</div>
					<div>
						<Label for="email" required>Email</Label>
						<Input id="email" name="email" type="email" required placeholder="jane@company.com" bind:value={email} />
					</div>
					<div>
						<Label for="phone">Phone</Label>
						<Input id="phone" name="phone" type="tel" placeholder="+1 800 555 0142" bind:value={phone} />
					</div>
					<div>
						<Label for="topic">Topic</Label>
						<Select id="topic" name="topic" bind:value={topic}>
							<option value="general">General enquiry</option>
							<option value="installation">New installation</option>
							<option value="maintenance">Maintenance contract</option>
							<option value="modernization">Modernization</option>
							<option value="parts">Spare parts</option>
						</Select>
					</div>
				</div>
				<div class="mt-5">
					<Label for="message" required>Message</Label>
					<Textarea id="message" name="message" required placeholder="Tell us how we can help…" bind:value={message} />
				</div>
				{#if error}
					<p class="mb-4 text-sm text-destructive">{error}</p>
				{/if}
				<Button type="submit" size="lg" class="w-full sm:w-auto" disabled={sending}>
					{sending ? 'Sending…' : 'Send message'}
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
				</Button>
			</form>
		{/if}
	</div>
</section>
