import { CheckCircle } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorValetingManchester: ServicePageData = {
  slug: 'interior-valeting',
  name: 'Interior Valeting Manchester',
  seo: {
    title: 'Interior Valeting Manchester | Deep Interior Clean | SRV Detailing',
    description: 'Professional interior car valeting in Manchester. Deep vacuuming, upholstery cleaning, dashboard detailing and odour removal. Mobile service.',
    keywords: ['interior valeting manchester', 'car interior cleaning manchester', 'interior car clean manchester', 'mobile interior valet'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/interior-valeting',
  },
  icon: CheckCircle,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Interior Valeting', href: '/manchester/car-valeting/interior-valeting' },
  ],
  heroTitle: 'Interior Valeting in Manchester',
  heroDescription: 'Transform your car\'s cabin with a professional deep interior clean. Vacuuming, upholstery treatment, dashboard detailing and freshening — delivered to your door.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Interior Valeting?',
      body: 'Interior valeting is a thorough, professional clean of every surface inside your vehicle. It goes far beyond a quick vacuum — we clean seats, carpets, door cards, dashboard, centre console, air vents, boot and every crevice. Stains are treated, odours neutralised and surfaces dressed to restore that new-car feel.',
    },
    {
      type: 'list',
      heading: 'What\'s Included',
      items: [
        'Full vacuum of seats, carpets, mats and boot',
        'Fabric upholstery shampoo or leather wipe-down',
        'Dashboard, centre console and trim cleaning',
        'Air vent cleaning with detailing brushes',
        'Door card and sill plate cleaning',
        'Window and mirror cleaning inside',
        'Air freshener application',
      ],
    },
  ],
  faqs: [
    { question: 'How long does an interior valet take?', answer: 'Typically 1.5–2.5 hours depending on vehicle size and condition.' },
    { question: 'Can you remove stains from fabric seats?', answer: 'Yes. We use hot water extraction and specialist stain removers for fabric upholstery. Most stains including coffee, food and drink come out completely.' },
    { question: 'Do you clean leather interiors?', answer: 'Yes. We clean and condition leather as part of our interior valet. For deeper leather restoration, see our dedicated leather conditioning service.' },
  ],
  relatedLinks: [
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
    { label: 'Upholstery Cleaning', href: '/manchester/car-valeting/upholstery-cleaning' },
    { label: 'Odour Removal', href: '/manchester/car-valeting/odour-removal' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting' },
  ],
  schemaPrice: '80',
};
