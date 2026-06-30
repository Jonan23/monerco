import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
	const body = await request.json();
	await new Promise(r => setTimeout(r, 800));
	return Response.json({ success: true, id: crypto.randomUUID(), message: 'Your quote request has been submitted successfully. Our team will contact you within 24 hours.' });
}
