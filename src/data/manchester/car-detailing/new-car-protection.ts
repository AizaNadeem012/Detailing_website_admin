import { Car } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const newCarProtectionManchester: ServicePageData = {
  slug: 'new-car-protection',
  name: 'New Car Protection Manchester',
  seo: {
    title: 'New Car Protection Manchester | Ceramic Coating for New Cars | SRV Detailing',
    description:
      'Professional new car protection in Manchester. Ceramic coating, paint protection and interior safeguarding for brand new vehicles. Protect your investment from day one.',
    keywords: [
      'new car protection manchester',
      'new car ceramic coating manchester',
      'new car paint protection manchester',
      'new car detailing manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/new-car-protection',
  },
  icon: Car,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'New Car Protection', href: '/manchester/car-detailing/new-car-protection' },
  ],
  heroTitle: 'New Car Protection in Manchester',
  heroDescription:
    'Protect your brand new vehicle from day one. Ceramic coating, paint protection and interior safeguarding — before Manchester\'s roads, weather and car parks take their toll.',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Protect Your New Car Immediately?',
      body: 'A new car\'s paintwork is at its most vulnerable during the first weeks on the road. Dealer pre-delivery washes often cause swirl marks, and unprotected paint begins accumulating environmental damage from the first drive. Manchester\'s rain, road salt, industrial fallout and UV radiation start degrading unprotected surfaces immediately. Professional new car protection creates a barrier before any damage occurs.',
    },
    {
      type: 'list',
      heading: 'Our New Car Protection Package Includes',
      items: [
        'Full decontamination wash to remove dealer prep residue and transport film adhesive',
        'Light paint correction to remove dealer wash marks (common on 90% of new cars)',
        'Ceramic coating application for 2–7+ years of paint protection',
        'Wheel face ceramic coating for brake dust resistance',
        'Glass coating for hydrophobic windscreen protection',
        'Interior fabric or leather protection against stains and UV damage',
        'Trim and plastic coating to prevent fading and greying',
        'Full aftercare kit and maintenance guidance',
      ],
    },
    {
      type: 'text',
      heading: 'Dealer Protection vs Professional Ceramic Coating',
      body: 'Many dealerships offer paint protection packages at £500–£1,500+, but these are often basic sealants applied by general valeting staff — not trained detailers. Our ceramic coatings are professionally applied by a specialist with 22+ years of experience, using professional-grade products that outperform dealer offerings significantly. We also correct any dealer wash damage before coating, something dealerships never do.',
    },
  ],
  faqs: [
    {
      question: 'When should I get new car protection done?',
      answer: 'Ideally within the first 1–2 weeks of ownership, before the car accumulates road damage. The sooner protection is applied, the less correction work is needed. We can arrange collection from the dealership if preferred.',
    },
    {
      question: 'Do new cars have swirl marks?',
      answer: 'Yes — approximately 90% of new cars arrive from the dealer with wash-induced swirl marks. Dealer pre-delivery washes use quick methods that scratch the clear coat. We correct these before applying ceramic coating.',
    },
    {
      question: 'How much does new car protection cost?',
      answer: 'Our new car protection packages start from £400 for light correction and entry-level ceramic coating. Premium packages with multi-year coatings and full interior protection range from £800–£1,500 depending on vehicle size.',
    },
    {
      question: 'Is dealer paint protection worth it?',
      answer: 'Generally, no. Dealer protection products are often basic sealants applied by untrained staff at inflated prices. A professional ceramic coating from a specialist detailer provides superior protection at a comparable or lower cost.',
    },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating', description: 'Our coating options explained' },
    { label: 'Paint Correction', href: '/manchester/car-detailing/paint-correction', description: 'For older vehicles needing correction first' },
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing', description: 'All detailing services' },
    { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View all pricing' },
  ],
  schemaPrice: '400',
};
