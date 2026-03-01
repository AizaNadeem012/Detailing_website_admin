import { Car } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorValetingManchester: ServicePageData = {
  slug: 'exterior-valeting',
  name: 'Exterior Valeting Manchester',
  seo: {
    title: 'Exterior Valeting Manchester | Professional Hand Wash | SRV Detailing',
    description: 'Professional exterior car valeting in Manchester. Safe hand wash, wheel cleaning, tyre dressing and wax protection. Scratch-free methods.',
    keywords: ['exterior valeting manchester', 'hand car wash manchester', 'exterior car clean manchester', 'mobile exterior valet'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/exterior-valeting',
  },
  icon: Car,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Exterior Valeting', href: '/manchester/car-valeting/exterior-valeting' },
  ],
  heroTitle: 'Exterior Valeting in Manchester',
  heroDescription: 'Safe, scratch-free exterior cleaning with hand wash, wheel care, tyre dressing and wax protection. Professional results without the risk of automated washes.',
  contentSections: [
    {
      type: 'text',
      heading: 'Safe Exterior Cleaning',
      body: 'Our exterior valet uses the two-bucket wash method with pH-neutral shampoo and premium microfibre mitts. This is the safest way to clean your car without introducing swirl marks — unlike automated car washes with dirty brushes. Every panel is washed, rinsed and dried by hand with care.',
    },
    {
      type: 'list',
      heading: 'What\'s Included',
      items: [
        'Snow foam pre-wash to loosen dirt safely',
        'Two-bucket hand wash with pH-neutral shampoo',
        'Wheel and tyre cleaning with dedicated products',
        'Tyre dressing for a satin or gloss finish',
        'Hand drying with plush microfibre towels',
        'Spray wax or sealant for protection and shine',
        'Window and mirror cleaning',
      ],
    },
  ],
  faqs: [
    { question: 'How is this different from a car wash?', answer: 'We use the two-bucket method, clean mitts and pH-neutral products. Automated car washes use dirty brushes that scratch your paint. Our method is the safest way to clean a vehicle.' },
    { question: 'How long does an exterior valet take?', answer: 'Typically 1–1.5 hours depending on vehicle size and condition.' },
    { question: 'Do you apply wax or sealant?', answer: 'Yes. Every exterior valet includes a spray wax or sealant to protect the paint and add gloss. For longer-lasting protection, consider our ceramic coating service.' },
  ],
  relatedLinks: [
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
    { label: 'Mini Valet', href: '/manchester/car-valeting/mini-valet' },
    { label: 'Exterior Detailing', href: '/manchester/car-detailing/exterior-detailing' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting' },
  ],
  schemaPrice: '65',
};
