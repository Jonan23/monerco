import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
	const body = await request.json();
	await new Promise(r => setTimeout(r, 600));
	return Response.json({ success: true, message: 'Your message has been received. We will get back to you shortly.' });
}
