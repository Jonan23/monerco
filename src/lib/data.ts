export interface Service {
	id: string;
	icon: string;
	title: string;
	short: string;
	description: string;
	points: string[];
	steps: { title: string; description: string }[];
}

export const servicesData: Service[] = [
	{
		id: 'installation', icon: 'hard-hat', title: 'Elevator Installation',
		short: 'New passenger, panoramic and freight elevator installations.',
		description: 'Turnkey installation of passenger, panoramic, home, hospital and freight elevators engineered to your building and certified to international safety standards.',
		points: ['Site survey and shaft engineering', 'Machine-room-less (MRL) and traction systems', 'Code-compliant commissioning and handover'],
		steps: [
			{ title: 'Consultation & Survey', description: 'Our engineers visit the site to assess shaft dimensions, building structure, power supply and traffic requirements.' },
			{ title: 'Engineering & Fabrication', description: 'We design a custom elevator solution and fabricate the cabin, rails, doors and control system to specification.' },
			{ title: 'Installation & Commissioning', description: 'Our certified team installs and commissions the elevator, performs load tests, and hands over with full documentation.' },
		],
	},
	{
		id: 'maintenance', icon: 'wrench', title: 'Maintenance & Servicing',
		short: 'Preventive maintenance plans with 24/7 emergency response.',
		description: 'Keep your elevators safe and reliable with scheduled preventive maintenance, remote monitoring and rapid emergency callout backed by genuine parts.',
		points: ['Tailored preventive maintenance contracts', '24/7 emergency breakdown response', 'Digital inspection reports and compliance logs'],
		steps: [
			{ title: 'Assessment & Plan', description: 'We audit your elevator fleet and recommend a maintenance plan that matches usage, age and regulatory requirements.' },
			{ title: 'Scheduled Servicing', description: 'Our technicians perform routine inspections, lubrication, adjustments and part replacements on a fixed schedule.' },
			{ title: 'Monitoring & Support', description: 'Round-the-clock remote monitoring and emergency callout ensure minimal downtime and full compliance.' },
		],
	},
	{
		id: 'modernization', icon: 'refresh', title: 'Modernization',
		short: 'Upgrade aging elevators for safety, speed and efficiency.',
		description: 'Extend the life of existing elevators with modern drives, controllers, cabins and doors that improve ride quality, energy use and accessibility.',
		points: ['Drive and controller upgrades', 'Energy-efficient regenerative systems', 'Cabin refurbishment and new interiors'],
		steps: [
			{ title: 'Audit & Recommendations', description: 'We evaluate your existing elevator system, identify performance gaps and propose a tailored upgrade roadmap.' },
			{ title: 'Component Upgrade', description: 'Our team installs modern drives, controllers, cabin interiors and safety systems with minimal disruption.' },
			{ title: 'Testing & Handover', description: 'We thoroughly test ride quality, energy efficiency and safety compliance before handing over your modernized elevator.' },
		],
	},
	{
		id: 'parts', icon: 'cog', title: 'Spare Parts Supply',
		short: 'Genuine and compatible spare parts for every major brand.',
		description: 'A comprehensive inventory of genuine and compatible components for all major elevator brands, delivered fast to minimize downtime.',
		points: ['Doors, rollers, drives and controllers', 'Multi-brand compatibility', 'Fast, tracked nationwide delivery'],
		steps: [
			{ title: 'Identify & Quote', description: 'Provide the part number or description and we identify the correct genuine or compatible component and provide a quote.' },
			{ title: 'Order & Dispatch', description: 'Once confirmed, we dispatch from our warehouse with real-time tracking information.' },
			{ title: 'Delivery & Support', description: 'Parts arrive at your site with installation guidance available from our technical team.' },
		],
	},
	{
		id: 'controls', icon: 'cpu', title: 'Control Systems',
		short: 'Smart elevator control and dispatch systems.',
		description: 'Intelligent control and destination dispatch systems that improve traffic flow, integrate with building management and add touchless access.',
		points: ['Destination dispatch optimization', 'Touchless and access-controlled calls', 'Building management system integration'],
		steps: [
			{ title: 'Traffic Analysis', description: 'We study your building traffic patterns to design the optimal dispatch algorithm and control layout.' },
			{ title: 'System Integration', description: 'Our team installs controllers, integrates with BMS and configures access control and touchless features.' },
			{ title: 'Optimization & Training', description: 'We fine-tune performance and train your facility team on the new control interface.' },
		],
	},
	{
		id: 'security', icon: 'shield', title: 'CCTV & Access (Soon)',
		short: 'Integrated CCTV and access control — coming soon.',
		description: 'Our upcoming security division will integrate elevator access control, CCTV and intercom for a complete, connected building experience.',
		points: ['Cabin and lobby CCTV', 'Floor-level access control', 'Two-way intercom integration'],
		steps: [
			{ title: 'Security Assessment', description: 'We evaluate your building security requirements and design a tailored access and surveillance solution.' },
			{ title: 'Installation & Setup', description: 'Our team installs cameras, access readers and intercoms integrated with the elevator control system.' },
			{ title: 'Testing & Handover', description: 'We test all systems, train your security team and provide ongoing monitoring and support.' },
		],
	},
];

export interface Product {
	id: string;
	name: string;
	category: string;
	image: string;
	description: string;
	specs: { label: string; value: string }[];
	extendedSpecs?: { label: string; value: string }[];
	brochure?: string;
}

export const productsData: Product[] = [
	{ id: 'panoramic', name: 'Panoramic Elevator', category: 'Observation', image: '/images/product-panoramic.svg', description: 'Glass observation cabins that turn vertical travel into a view. Ideal for malls, hotels and signature lobbies.', specs: [{ label: 'Capacity', value: '8–21 persons' }, { label: 'Speed', value: 'up to 2.5 m/s' }, { label: 'Travel', value: 'up to 75 m' }], extendedSpecs: [{ label: 'Cabin width', value: '1400–2000 mm' }, { label: 'Cabin depth', value: '1400–2000 mm' }, { label: 'Door width', value: '800–1100 mm' }, { label: 'Machine type', value: 'MRL gearless traction' }, { label: 'Power supply', value: '3-phase, 380 V / 50 Hz' }, { label: 'Operation', value: 'Microprocessor-based VVVF' }] },
	{ id: 'home', name: 'Home Elevator', category: 'Residential', image: '/images/product-home.svg', description: 'Compact, quiet and elegant lifts designed for villas and private residences with minimal shaft requirements.', specs: [{ label: 'Capacity', value: '3–6 persons' }, { label: 'Speed', value: 'up to 0.3 m/s' }, { label: 'Travel', value: 'up to 5 floors' }], extendedSpecs: [{ label: 'Cabin width', value: '800–1000 mm' }, { label: 'Cabin depth', value: '900–1200 mm' }, { label: 'Door width', value: '700–800 mm' }, { label: 'Machine type', value: 'Screw-driven / hydraulic' }, { label: 'Power supply', value: 'Single-phase, 230 V / 50 Hz' }, { label: 'Pit depth', value: '100–200 mm' }] },
	{ id: 'hospital', name: 'Hospital Elevator', category: 'Healthcare', image: '/images/product-hospital.svg', description: 'Spacious bed and stretcher elevators with smooth ride quality and hygienic, durable interiors.', specs: [{ label: 'Capacity', value: 'up to 2500 kg' }, { label: 'Speed', value: 'up to 1.75 m/s' }, { label: 'Door', value: 'Wide center-opening' }], extendedSpecs: [{ label: 'Cabin width', value: '1400–1800 mm' }, { label: 'Cabin depth', value: '2400–3000 mm' }, { label: 'Door width', value: '1100–1300 mm' }, { label: 'Machine type', value: 'MRL traction / geared' }, { label: 'Finish', value: 'Antibacterial laminate / stainless steel' }, { label: 'Emergency', value: 'Battery lowering & backup' }] },
	{ id: 'freight', name: 'Freight Elevator', category: 'Industrial', image: '/images/product-freight.svg', description: 'Heavy-duty goods elevators built for warehouses, factories and logistics with rugged interiors.', specs: [{ label: 'Capacity', value: 'up to 5000 kg' }, { label: 'Speed', value: 'up to 1.0 m/s' }, { label: 'Build', value: 'Reinforced steel' }], extendedSpecs: [{ label: 'Cabin width', value: '1500–3000 mm' }, { label: 'Cabin depth', value: '2000–4000 mm' }, { label: 'Door width', value: '1200–2000 mm' }, { label: 'Machine type', value: 'Geared traction / hydraulic' }, { label: 'Control', value: 'Two-speed AC / VVVF' }, { label: 'Protection', value: 'IP54 rated components' }] },
];

export interface Project {
	id: string;
	title: string;
	location: string;
	category: string;
	image: string;
	summary: string;
	stat: string;
	testimonial?: { quote: string; client: string; role: string };
	details?: string;
}

export const projectsData: Project[] = [
	{ id: 'skyline-tower', title: 'Skyline Corporate Tower', location: 'Metro City', category: 'Commercial', image: '/images/project-skyline-tower.svg', summary: 'Twelve high-speed traction elevators with destination dispatch serving a 42-floor headquarters.', stat: '12 units · 42 floors', testimonial: { quote: 'MONERCO delivered on time and on budget. The destination dispatch system has reduced lobby wait times by 40%.', client: 'Margaret Adebayo', role: 'Facilities Director, Skyline Towers' }, details: 'A full fleet of 12 high-speed MRL traction elevators with destination dispatch, traffic management analytics and 10-year full-service maintenance contract.' },
	{ id: 'grand-hotel', title: 'The Grand Meridian Hotel', location: 'Harbor District', category: 'Hospitality', image: '/images/project-grand-hotel.svg', summary: 'Six panoramic and service elevators with custom cabin interiors for a five-star hotel.', stat: '6 units · panoramic', testimonial: { quote: 'The panoramic cabins have become a signature feature of our lobby. Guests consistently compliment the ride experience.', client: 'Victor Lang', role: 'General Manager, Grand Meridian' }, details: 'Four panoramic passenger elevators with custom brass-and-glass interiors, plus two service elevators with dedicated goods access and staff control.' },
	{ id: 'city-hospital', title: 'City General Hospital', location: 'Westside', category: 'Healthcare', image: '/images/project-city-hospital.svg', summary: 'Eight bed elevators with hygienic interiors and priority dispatch for critical care wings.', stat: '8 units · medical', testimonial: { quote: 'Reliability is non-negotiable in a hospital. MONERCO\'s priority dispatch has been a game-changer for our emergency response times.', client: 'Dr. Fatima Nkosi', role: 'Chief of Facilities, City General' }, details: 'Eight bed-size elevators with antibacterial finishes, priority dispatch integration with hospital emergency systems, and battery lowering for power outage operation.' },
	{ id: 'park-residences', title: 'Parkview Residences', location: 'Greenbelt', category: 'Residential', image: '/images/project-park-residences.svg', summary: 'Energy-efficient MRL elevators modernized across three residential towers.', stat: '9 units · modernized', testimonial: { quote: 'The modernization was completed with minimal disruption to residents. Energy savings have exceeded our expectations.', client: 'Amina Yusuf', role: 'Property Manager, Parkview' }, details: 'Full modernization of nine aging hydraulic elevators to energy-efficient MRL traction drives, including new cabin interiors, access control and emergency communication systems.' },
];

export const stats = [
	{ value: '25+', label: 'Years of experience' },
	{ value: '3,200+', label: 'Elevators serviced' },
	{ value: '24/7', label: 'Emergency support' },
	{ value: '99.9%', label: 'Uptime reliability' },
];

export interface TeamMember {
	name: string;
	role: string;
	bio: string;
	image?: string;
}

export const teamMembers: TeamMember[] = [
	{ name: 'James Okonkwo', role: 'CEO & Founder', bio: 'Over 30 years of experience in vertical transportation engineering. Founded MONERCO with a vision to combine precision engineering with elegant design.' },
	{ name: 'Sarah Chen', role: 'Chief Engineer', bio: 'Leads our engineering team with deep expertise in smart control systems, destination dispatch and regenerative drive technology.' },
	{ name: 'David Okafor', role: 'Director of Operations', bio: 'Ensures every installation, maintenance visit and modernization project meets our rigorous safety and quality standards.' },
	{ name: 'Amara Eze', role: 'Head of Design', bio: 'Brings together aesthetics and functionality in every cabin design, from material selection to lighting and finish coordination.' },
];

export interface Certification {
	name: string;
	issuer: string;
	description: string;
}

export const certifications: Certification[] = [
	{ name: 'ISO 9001:2015', issuer: 'International Standards Organization', description: 'Quality management systems certification for elevator design, installation and service processes.' },
	{ name: 'ISO 14001:2015', issuer: 'International Standards Organization', description: 'Environmental management certification ensuring sustainable operations and reduced ecological footprint.' },
	{ name: 'CE Marking', issuer: 'European Union', description: 'Compliance with EU health, safety and environmental standards for all elevator products.' },
	{ name: 'ASME A17.1', issuer: 'American Society of Mechanical Engineers', description: 'Full compliance with the safety code for elevators and escalators.' },
	{ name: 'EN 81-20/50', issuer: 'European Committee for Standardization', description: 'European safety standards for elevator construction and installation.' },
	{ name: 'SAFE Approved', issuer: 'National Safety Association', description: 'Certified safety protocols with regular third-party audits and continuous compliance monitoring.' },
];

export interface FaqItem {
	question: string;
	answer: string;
}

export const timeline = [
	{ year: '1998', title: 'Founded in Lagos', description: 'MONERCO Elevators was founded by James Okonkwo with a focus on elevator installation and maintenance.' },
	{ year: '2002', title: 'First International Contract', description: 'Secured our first elevator modernization project in Accra, Ghana, expanding operations beyond Nigeria.' },
	{ year: '2006', title: 'ISO 9001 Certified', description: 'Achieved ISO 9001:2000 certification, formalizing our quality management systems across all operations.' },
	{ year: '2011', title: 'Panoramic Elevator Launch', description: 'Introduced panoramic glass elevators, opening new markets in hospitality and retail sectors.' },
	{ year: '2015', title: 'Regional Expansion', description: 'Opened offices in Nairobi and Dubai, serving East Africa and the Middle East markets.' },
	{ year: '2018', title: 'Smart Controls Division', description: 'Launched our destination dispatch and IoT monitoring division, bringing smart technology to vertical transport.' },
	{ year: '2021', title: '3,000th Elevator Milestone', description: 'Reached 3,000 active elevators under service contracts across 12 countries.' },
	{ year: '2024', title: 'Net Zero Roadmap', description: 'Committed to net-zero operations by 2035, with regenerative drive systems reducing energy usage by 40%.' },
];

export const serviceIcons: Record<string, string> = {
	'hard-hat': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 18v-2a10 10 0 0 1 20 0v2"/><path d="M6 18a4 4 0 0 0 8 0H6Z"/><path d="M8 18V8a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v10"/></svg>',
	wrench: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
	refresh: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
	cog: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
	cpu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></svg>',
	shield: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
};

export const faqData: FaqItem[] = [
	{ question: 'How long does an elevator installation take?', answer: 'Typical installation takes 4–8 weeks from site survey to handover, depending on shaft readiness, building type and elevator complexity. We provide a precise timeline after the initial assessment.' },
	{ question: 'What maintenance plans do you offer?', answer: 'We offer tiered plans — basic (periodic inspection and lubrication), standard (includes parts replacement) and premium (24/7 emergency response and remote monitoring). Our team will recommend the right plan for your usage.' },
	{ question: 'Can you modernize an elevator from another brand?', answer: 'Yes. We modernize elevators from all major manufacturers. Our engineers assess the existing system and design compatible upgrades for drives, controllers, cabins and safety systems.' },
	{ question: 'How much does an elevator cost?', answer: 'Costs vary widely based on type, capacity, travel height, materials and shaft readiness. Contact us for a free, no-obligation site survey and customized quote.' },
	{ question: 'Do you provide spare parts for older models?', answer: 'Yes, we maintain a comprehensive inventory of parts for both current and legacy models across multiple brands. If a part is not in stock, we can source it typically within 48 hours.' },
	{ question: 'What safety certifications do your elevators meet?', answer: 'All our installations comply with ASME A17.1, EN 81-20/50 and local building codes. We are ISO 9001:2015 certified and our technicians undergo annual safety training.' },
];
