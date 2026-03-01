import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const stockportValetingPrices: ServicePageData = {
  slug: 'prices',
  name: 'Car Valeting Prices Stockport',
  seo: {
    title: 'Car Valeting Prices Stockport | SRV Detailing',
    description: 'Car valeting prices for Stockport. Full valet from £120, mini valet from £50. Locally based, transparent pricing, no call-out fees.',
    keywords: ['car valeting prices stockport', 'full valet cost stockport', 'mini valet price stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Prices', href: '/stockport/car-valeting/prices' },
  ],
  heroTitle: 'Car Valeting Prices in Stockport',
  heroDescription: 'Transparent valeting prices for all Stockport customers. No hidden costs, no call-out fees — we are locally based.',
  contentSections: [
    {
      type: 'list',
      heading: 'Stockport Valeting Price Guide',
      items: [
        'Full Valet: from £120 (3–4 hours)',
        'Mini Valet: from £50 (60–90 minutes)',
        'Interior Valeting: from £80',
        'Exterior Valeting: from £65',
        'Mobile Valeting: from £50 (no call-out fee)',
      ],
    },
  ],
  faqs: [
    { question: 'Are your Stockport prices the same as Manchester?', answer: 'Yes. Our pricing is consistent across our service area. Stockport customers simply benefit from our local proximity.' },
  ],
  relatedLinks: [
    { label: 'Stockport Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Full Valet', href: '/stockport/car-valeting/full-valet' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices' },
    { label: 'Pricing Hub', href: '/pricing' },
  ],
};
