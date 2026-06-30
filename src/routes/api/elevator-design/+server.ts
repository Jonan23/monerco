import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
	const body = await request.json();
	await new Promise(r => setTimeout(r, 1000));
	return Response.json({ success: true, id: crypto.randomUUID(), message: 'Your elevator design has been submitted successfully!' });
}
