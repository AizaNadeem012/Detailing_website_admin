import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const valetingPricesManchester: ServicePageData = {
  slug: 'prices',
  name: 'Car Valeting Prices Manchester',
  seo: {
    title: 'Car Valeting Prices Manchester | SRV Detailing',
    description: 'Car valeting prices for Manchester. Full valet from £120, mini valet from £50, interior valet from £80. Transparent pricing, no hidden costs.',
    keywords: ['car valeting prices manchester', 'full valet cost manchester', 'mini valet price', 'valeting price list manchester'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Prices', href: '/manchester/car-valeting/prices' },
  ],
  heroTitle: 'Car Valeting Prices in Manchester',
  heroDescription: 'Transparent pricing for all our valeting services across Greater Manchester. No hidden costs — the price we quote is the price you pay.',
  contentSections: [
    {
      type: 'list',
      heading: 'Our Valeting Price Guide',
      items: [
        'Full Valet: from £120 (3–4 hours, complete interior and exterior)',
        'Mini Valet: from £50 (60–90 minutes, maintenance clean)',
        'Interior Valeting: from £80 (deep interior clean only)',
        'Exterior Valeting: from £65 (professional hand wash and protect)',
        'Mobile Valeting: from £50 (we come to your location — no extra charge)',
        'Pet Hair Removal: from £60 (specialist extraction)',
        'Odour Removal: from £70 (including ozone treatment)',
        'Upholstery Cleaning: from £80 (hot water extraction)',
      ],
    },
    {
      type: 'text',
      heading: 'What Affects the Price?',
      body: 'Prices vary based on vehicle size and interior condition. A heavily soiled family SUV will cost more than a lightly used hatchback. We provide accurate quotes upfront and never add surprise charges on the day. Regular customers benefit from discounted maintenance plans.',
    },
  ],
  faqs: [
    { question: 'Do you charge extra for larger vehicles?', answer: 'Yes. SUVs, 4x4s and MPVs typically cost 15–25% more than standard hatchbacks or saloons due to the additional interior space and exterior surface area.' },
    { question: 'Is there a call-out fee?', answer: 'No. All prices include travel to your location anywhere within Greater Manchester.' },
    { question: 'Do you offer regular maintenance plans?', answer: 'Yes. Weekly, fortnightly or monthly valet subscriptions are available at reduced rates. Contact us for details.' },
  ],
  relatedLinks: [
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting' },
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
    { label: 'Mini Valet', href: '/manchester/car-valeting/mini-valet' },
    { label: 'Detailing Prices', href: '/manchester/car-detailing/prices' },
    { label: 'Pricing Hub', href: '/pricing' },
  ],
};
