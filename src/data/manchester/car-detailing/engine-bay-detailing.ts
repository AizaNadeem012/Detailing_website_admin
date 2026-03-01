import { Wrench } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const engineBayDetailingManchester: ServicePageData = {
  slug: 'engine-bay-detailing',
  name: 'Engine Bay Detailing Manchester',
  seo: {
    title: 'Engine Bay Detailing Manchester | Professional Engine Clean | SRV Detailing',
    description: 'Professional engine bay detailing in Manchester. Safe, thorough engine cleaning that restores your engine bay to showroom condition. Mobile service.',
    keywords: ['engine bay detailing manchester', 'engine clean manchester', 'engine bay cleaning manchester', 'mobile engine clean'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/engine-bay-detailing',
  },
  icon: Wrench,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'Engine Bay Detailing', href: '/manchester/car-detailing/engine-bay-detailing' },
  ],
  heroTitle: 'Engine Bay Detailing in Manchester',
  heroDescription: 'Professional engine bay cleaning and detailing across Greater Manchester. We safely degrease, clean and dress your engine bay to showroom condition.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Engine Bay Detailing?',
      body: 'Engine bay detailing is the professional cleaning and restoration of your vehicle\'s engine compartment. Over time, oil mist, road grime, salt and dust coat every surface under the bonnet. Our process safely removes this buildup without risking damage to electrical components, then dresses plastics and hoses to restore a factory-fresh appearance.',
    },
    {
      type: 'process',
      heading: 'Our Engine Bay Cleaning Process',
      items: [
        'Cover sensitive electrical components, air intake and exposed filters',
        'Apply specialist engine degreaser and agitate with detailing brushes',
        'Low-pressure rinse to safely remove all degreaser and loosened grime',
        'Dry the engine bay thoroughly with compressed air and microfibre towels',
        'Dress all plastics, hoses and covers with UV-protective dressing',
      ],
    },
  ],
  faqs: [
    { question: 'Is engine bay cleaning safe for my car?', answer: 'Yes. We cover all sensitive electrical components and use low-pressure rinsing — never a pressure washer directly on electrics. We have cleaned hundreds of engine bays without issue.' },
    { question: 'How long does engine bay detailing take?', answer: 'Typically 45–90 minutes depending on the level of contamination and engine complexity.' },
    { question: 'Why should I clean my engine bay?', answer: 'A clean engine bay makes it easier to spot leaks, improves resale value, and prevents corrosion from salt and grime buildup. It also looks fantastic for car shows or pre-sale inspections.' },
  ],
  relatedLinks: [
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
    { label: 'Exterior Detailing', href: '/manchester/car-detailing/exterior-detailing' },
    { label: 'New Car Protection', href: '/manchester/car-detailing/new-car-protection' },
    { label: 'Detailing Prices', href: '/manchester/car-detailing/prices' },
  ],
  schemaPrice: '80',
};
