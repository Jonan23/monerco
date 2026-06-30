<script lang="ts">
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';
	import PageHeader from '$lib/sections/PageHeader.svelte';
	import Label from '$lib/components/forms/Label.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import Textarea from '$lib/components/forms/Textarea.svelte';
	import Select from '$lib/components/forms/Select.svelte';
	import Button from '$lib/components/Button.svelte';
	import { productsData, servicesData } from '$lib/data.js';

	let submitted = $state(false);
	let sending = $state(false);
	let error = $state('');
	let ref = $state('');
	let service = $state('');
	let product = $state('');
	let design = $state('');
	let name = $state('');
	let company = $state('');
	let email = $state('');
	let phone = $state('');
	let floors = $state('');
	let building = $state('');
	let message = $state('');

	$effect(() => {
		const s = $page.url.searchParams.get('service');
		const p = $page.url.searchParams.get('product');
		const d = $page.url.searchParams.get('design');
		if (s) service = s;
		if (p) product = p;
		if (d) design = d;
	});

	async function handleSubmit(e: Event) {
		e.preventDefault();
		sending = true;
		error = '';
		try {
			const res = await fetch('/api/quote', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, company, email, phone, service, product, floors, building, message, designRef: design })
			});
			if (!res.ok) throw new Error('Failed to submit');
			ref = `MNC-${Date.now().toString().slice(-6)}`;
			submitted = true;
		} catch {
			error = 'Something went wrong. Please try again or contact us directly.';
		} finally {
			sending = false;
		}
	}
</script>

<SEO title="Request a Quote" description="Request a free, no-obligation quote for elevator installation, maintenance, modernization, or spare parts from MONERCO Elevators." />

<PageHeader eyebrow="Get Started" title="Request a Quote" description="Tell us about your project and our engineers will get back to you with a tailored proposal." />

<section class="border-b border-border bg-background py-10 md:py-24">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		{#if submitted}
			<div class="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center sm:p-10">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
				<h3 class="mt-4 text-2xl font-semibold text-foreground">Quote request submitted</h3>
				<p class="mt-2 max-w-md text-muted-foreground">
					Thank you. Your request has been logged with reference <span class="font-semibold text-foreground">{ref}</span>. One of our engineers will contact you within one business day with a tailored proposal.
				</p>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="rounded-xl border border-border bg-card p-6 sm:p-8">
				{#if design}
					<div class="mb-6 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground">
						A saved design specification <span class="font-semibold">{design}</span> will be attached to this request.
					</div>
				{/if}

				<fieldset>
					<legend class="text-lg font-semibold text-foreground">Your details</legend>
					<div class="mt-4 grid gap-5 sm:grid-cols-2">
						<div>
							<Label for="name" required>Full name</Label>
							<Input id="name" name="name" required placeholder="Jane Doe" bind:value={name} />
						</div>
						<div>
							<Label for="company">Company</Label>
							<Input id="company" name="company" placeholder="Acme Properties" bind:value={company} />
						</div>
						<div>
							<Label for="email" required>Email</Label>
							<Input id="email" name="email" type="email" required placeholder="jane@company.com" bind:value={email} />
						</div>
						<div>
							<Label for="phone" required>Phone</Label>
							<Input id="phone" name="phone" type="tel" required placeholder="+1 800 555 0142" bind:value={phone} />
						</div>
					</div>
				</fieldset>

				<fieldset class="mt-8">
					<legend class="text-lg font-semibold text-foreground">Project details</legend>
					<div class="mt-4 grid gap-5 sm:grid-cols-2">
						<div>
							<Label for="service">Service needed</Label>
							<Select id="service" name="service" bind:value={service}>
								<option value="">Select a service</option>
								{#each servicesData as s}
									<option value={s.id}>{s.title}</option>
								{/each}
							</Select>
						</div>
						<div>
							<Label for="product">Elevator type</Label>
							<Select id="product" name="product" bind:value={product}>
								<option value="">Select a model</option>
								{#each productsData as p}
									<option value={p.id}>{p.name}</option>
								{/each}
							</Select>
						</div>
						<div>
							<Label for="floors">Number of floors</Label>
							<Input id="floors" name="floors" type="number" min={2} placeholder="e.g. 8" bind:value={floors} />
						</div>
						<div>
							<Label for="building">Building type</Label>
							<Select id="building" name="building">
								<option value="">Select type</option>
								<option value="residential">Residential</option>
								<option value="commercial">Commercial</option>
								<option value="healthcare">Healthcare</option>
								<option value="industrial">Industrial</option>
								<option value="hospitality">Hospitality</option>
							</Select>
						</div>
					</div>
					<div class="mt-5">
						<Label for="message">Project description</Label>
							<Textarea id="message" name="message" placeholder="Tell us about your building, timeline and any specific requirements…" bind:value={message} />
					</div>
				</fieldset>

				{#if error}
					<p class="mt-4 text-sm text-destructive">{error}</p>
				{/if}
				<Button type="submit" size="lg" class="mt-4 w-full" disabled={sending}>
					{sending ? 'Submitting…' : 'Submit quote request'}
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</Button>
			</form>
		{/if}
	</div>
</section>
