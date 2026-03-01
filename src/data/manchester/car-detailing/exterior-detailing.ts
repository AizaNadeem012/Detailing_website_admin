import { Paintbrush } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorDetailingManchester: ServicePageData = {
  slug: 'exterior-detailing',
  name: 'Exterior Detailing Manchester',
  seo: {
    title: 'Exterior Detailing Manchester | Full Exterior Restoration | SRV Detailing',
    description: 'Professional exterior detailing in Manchester. Decontamination, clay bar, machine polish and protection. Restore your paintwork to showroom condition.',
    keywords: ['exterior detailing manchester', 'car exterior restoration manchester', 'paint decontamination manchester', 'machine polish manchester'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/exterior-detailing',
  },
  icon: Paintbrush,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'Exterior Detailing', href: '/manchester/car-detailing/exterior-detailing' },
  ],
  heroTitle: 'Exterior Detailing in Manchester',
  heroDescription: 'Complete exterior restoration — decontamination, clay bar, machine polishing and protective sealant. Your paintwork restored to its absolute best.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Exterior Detailing?',
      body: 'Exterior detailing is a comprehensive process that goes far beyond washing. It includes full decontamination to remove bonded iron particles and tar, clay bar treatment to smooth the surface, machine polishing to correct paint defects, and application of a protective sealant, wax or ceramic coating. The result is paintwork that looks and feels like new.',
    },
    {
      type: 'list',
      heading: 'What\'s Included',
      items: [
        'Full snow foam pre-wash and two-bucket contact wash',
        'Iron fallout removal and tar spot dissolution',
        'Clay bar decontamination to remove bonded contaminants',
        'Single or multi-stage machine polish depending on paint condition',
        'Sealant, wax or ceramic coating application for protection',
        'Wheel cleaning, tyre dressing and trim restoration',
        'Glass polishing and rain repellent application',
      ],
    },
  ],
  faqs: [
    { question: 'How long does exterior detailing take?', answer: 'Typically 4–8 hours depending on vehicle size and paint condition. Multi-stage paint correction adds more time.' },
    { question: 'What is the difference between exterior detailing and an exterior valet?', answer: 'Exterior valeting is professional cleaning — wash, dry, wax. Exterior detailing adds decontamination, clay bar, machine polishing and longer-lasting protection. Detailing corrects defects; valeting maintains cleanliness.' },
  ],
  relatedLinks: [
    { label: 'Paint Correction', href: '/manchester/car-detailing/paint-correction' },
    { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating' },
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
    { label: 'Exterior Valeting', href: '/manchester/car-valeting/exterior-valeting' },
  ],
  schemaPrice: '200',
};
