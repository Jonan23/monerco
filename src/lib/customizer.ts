export type OptionItem = {
	id: string;
	label: string;
	color: string;
	accent?: string;
	description?: string;
	model?: string;
};

export type StepKey = 'type' | 'walls' | 'floor' | 'ceiling' | 'doors' | 'accents';

export type CustomizerStep = {
	key: StepKey;
	title: string;
	description: string;
	options: OptionItem[];
};

export const customizerSteps: CustomizerStep[] = [
	{
		key: 'type', title: 'Elevator Type', description: 'Choose the model that fits your building.',
		options: [
			{ id: 'passenger', label: 'Passenger', color: '#8a8f98', accent: '#b9bec7', model: 'passenger', description: 'Everyday vertical transport for offices and homes.' },
			{ id: 'panoramic', label: 'Panoramic', color: '#7fa8c9', accent: '#cfe3f0', model: 'panoramic', description: 'Glass cabin with sweeping views.' },
			{ id: 'home', label: 'Home Lift', color: '#a98a63', accent: '#d8c3a0', model: 'home', description: 'Compact, elegant residential lift.' },
			{ id: 'freight', label: 'Freight', color: '#6b6f76', accent: '#9aa0a8', model: 'freight', description: 'Heavy-duty cargo handling.' },
		],
	},
	{
		key: 'walls', title: 'Wall Finish', description: 'The defining surface of your cabin.',
		options: [
			{ id: 'brushed-steel', label: 'Brushed Steel', color: '#b8bcc2', accent: '#dde0e4' },
			{ id: 'champagne-gold', label: 'Champagne Gold', color: '#c8a86b', accent: '#e7d4a8' },
			{ id: 'matte-black', label: 'Matte Black', color: '#2b2d31', accent: '#3d4046' },
			{ id: 'walnut-wood', label: 'Walnut Wood', color: '#5c4326', accent: '#7d5e3a' },
			{ id: 'mirror', label: 'Mirror Glass', color: '#aeb7bd', accent: '#e8eef1' },
			{ id: 'copper-patina', label: 'Copper Patina', color: '#8e5e3c', accent: '#c4875a' },
			{ id: 'white-oak', label: 'White Oak', color: '#d4c5a9', accent: '#efe6d3' },
			{ id: 'rose-gold', label: 'Rose Gold', color: '#c47a7a', accent: '#e8b4b4' },
			{ id: 'satin-nickel', label: 'Satin Nickel', color: '#9ea2a8', accent: '#c8cbcf' },
			{ id: 'copper', label: 'Copper', color: '#b87333', accent: '#daa06a' },
			{ id: 'black-slate', label: 'Black Slate', color: '#1e2126', accent: '#3a3f47' },
			{ id: 'ivory-marble', label: 'Ivory Marble', color: '#e8e0d2', accent: '#f5efe3' },
		],
	},
	{
		key: 'floor', title: 'Flooring', description: 'Underfoot durability and style.',
		options: [
			{ id: 'marble-white', label: 'White Marble', color: '#e6e3dc', accent: '#cbc7bd' },
			{ id: 'granite-black', label: 'Black Granite', color: '#26282b', accent: '#3a3d42' },
			{ id: 'oak', label: 'Oak Timber', color: '#9c7b4e', accent: '#b89669' },
			{ id: 'graphite', label: 'Graphite Vinyl', color: '#4a4d52', accent: '#5e6268' },
			{ id: 'terrazzo', label: 'Terrazzo', color: '#c9c1b3', accent: '#e3dbcc' },
			{ id: 'carpet', label: 'Bouclé Carpet', color: '#6b7a8a', accent: '#8da0b5' },
			{ id: 'travertine', label: 'Travertine', color: '#d6cbae', accent: '#f0e8d5' },
			{ id: 'slate', label: 'Slate', color: '#43464a', accent: '#5e6268' },
			{ id: 'bamboo', label: 'Bamboo', color: '#c4a96a', accent: '#dec68e' },
			{ id: 'herringbone-oak', label: 'Herringbone Oak', color: '#8e6f3e', accent: '#b89664' },
		],
	},
	{
		key: 'ceiling', title: 'Ceiling & Lighting', description: 'Set the mood with the right illumination.',
		options: [
			{ id: 'warm-led', label: 'Warm LED Halo', color: '#f3e2bd', accent: '#ffeec2' },
			{ id: 'cool-led', label: 'Cool LED Panel', color: '#dcecf5', accent: '#f0f8ff' },
			{ id: 'spot', label: 'Recessed Spots', color: '#e7e3d5', accent: '#fff7e0' },
			{ id: 'starlight', label: 'Starlight Ceiling', color: '#1d2330', accent: '#9fb8ff' },
			{ id: 'skylight', label: 'Skylight Effect', color: '#b8d4e8', accent: '#e3f0fa' },
			{ id: 'coffer', label: 'Coffered Panels', color: '#d9d4c8', accent: '#f0eadb' },
			{ id: 'rgb-mood', label: 'RGB Mood', color: '#2a1a3a', accent: '#c084fc' },
			{ id: 'minimal-flat', label: 'Minimal Flat', color: '#e8e8ea', accent: '#f0f0f2' },
			{ id: 'mirror-dome', label: 'Mirror Dome', color: '#c8ccd0', accent: '#e2e6ea' },
		],
	},
	{
		key: 'doors', title: 'Doors', description: 'How your cabin opens to each floor.',
		options: [
			{ id: 'center-steel', label: 'Center Steel', color: '#aeb3b9', accent: '#d3d7db' },
			{ id: 'side-gold', label: 'Side Gold', color: '#c8a86b', accent: '#e7d4a8' },
			{ id: 'glass', label: 'Glass Vision', color: '#9cc0d6', accent: '#dcecf5' },
			{ id: 'black', label: 'Matte Black', color: '#2b2d31', accent: '#41444a' },
			{ id: 'wood-finished', label: 'Wood Finished', color: '#6b4e2e', accent: '#8e6b3f' },
			{ id: 'stainless', label: 'Stainless Steel', color: '#8e9299', accent: '#b8bcc2' },
			{ id: 'antique-brass', label: 'Antique Brass', color: '#7a602f', accent: '#b8963c' },
			{ id: 'frosted-glass', label: 'Frosted Glass', color: '#bccbd4', accent: '#d8e3ec' },
		],
	},
	{
		key: 'accents', title: 'Handrail & Controls', description: 'The finishing touches.',
		options: [
			{ id: 'steel-rail', label: 'Steel Handrail', color: '#c2c6cc', accent: '#e2e5e8' },
			{ id: 'gold-rail', label: 'Gold Handrail', color: '#c8a86b', accent: '#e7d4a8' },
			{ id: 'brass-rail', label: 'Brass Handrail', color: '#7a602f', accent: '#b8963c' },
			{ id: 'black-rail', label: 'Black Handrail', color: '#2b2d31', accent: '#41444a' },
			{ id: 'rose-gold-rail', label: 'Rose Gold Rail', color: '#c47a7a', accent: '#e8b4b4' },
			{ id: 'no-rail', label: 'Minimal (No Rail)', color: '#8a8f98', accent: '#aeb3b9' },
		],
	},
];

export const capacityOptions = [
	{ id: '6', label: '6 persons / 450 kg' },
	{ id: '8', label: '8 persons / 630 kg' },
	{ id: '13', label: '13 persons / 1000 kg' },
	{ id: '21', label: '21 persons / 1600 kg' },
];

export type DesignSelection = Record<StepKey, string> & { capacity: string };

export const defaultSelection: DesignSelection = {
	type: 'passenger',
	walls: 'brushed-steel',
	floor: 'marble-white',
	ceiling: 'warm-led',
	doors: 'center-steel',
	accents: 'steel-rail',
	capacity: '8',
};

export function getOption(key: StepKey, id: string): OptionItem | undefined {
	return customizerSteps.find((s) => s.key === key)?.options.find((o) => o.id === id);
}

export function getModelPath(typeId: string): string {
	const opt = getOption('type', typeId);
	return `/models/${opt?.model ?? 'passenger'}.glb`;
}

export const steps = customizerSteps.map(s => ({
	...s,
	label: s.title,
}));

export function validateSelection(sel: DesignSelection): boolean {
	for (const step of customizerSteps) {
		if (!sel[step.key]) return false;
	}
	return true;
}

export function summarizeSelection(sel: DesignSelection): Record<string, string> {
	const map: Record<string, string> = {};
	for (const step of customizerSteps) {
		const opt = getOption(step.key, sel[step.key]);
		map[step.title] = opt?.label ?? '-';
	}
	return map;
}

export function summarizeDesign(sel: DesignSelection): string {
	const parts = customizerSteps.map((s) => {
		const opt = getOption(s.key, sel[s.key]);
		return `${s.title}: ${opt?.label ?? '-'}`;
	});
	const cap = capacityOptions.find((c) => c.id === sel.capacity)?.label;
	parts.push(`Capacity: ${cap ?? '-'}`);
	return parts.join(' | ');
}
