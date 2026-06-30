import { projectsData } from '$lib/data.js';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET({ url }: RequestEvent) {
	await new Promise(r => setTimeout(r, 200));
	const cat = url.searchParams.get('category');
	let result = projectsData;
	if (cat) result = projectsData.filter(p => p.category.toLowerCase() === cat.toLowerCase());
	return Response.json(result);
}
