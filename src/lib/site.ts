export const site = {
	name: 'MONERCO',
	fullName: 'MONERCO Elevators',
	slogan: 'Elevating Your World',
	phone: '+1 (800) 555-0142',
	whatsapp: '18005550142',
	email: 'info@monerco.com',
	address: '120 Vertical Avenue, Metro City',
};

export const nav = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Services', href: '/services' },
	{ label: 'Products', href: '/products' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Design Studio', href: '/design' },
	{ label: 'Contact', href: '/contact' },
];

export function whatsappLink(message?: string) {
	const base = `https://wa.me/${site.whatsapp}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
