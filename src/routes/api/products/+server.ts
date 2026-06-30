import { productsData } from '$lib/data.js';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET({ url }: RequestEvent) {
	await new Promise(r => setTimeout(r, 200));
	const category = url.searchParams.get('category');
	let result = productsData;
	if (category) result = productsData.filter(p => p.category.toLowerCase() === category.toLowerCase());
	return Response.json(result);
}
