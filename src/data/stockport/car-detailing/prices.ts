import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const stockportDetailingPrices: ServicePageData = {
  slug: 'prices',
  name: 'Car Detailing Prices Stockport',
  seo: {
    title: 'Car Detailing Prices Stockport | SRV Detailing',
    description: 'Car detailing prices for Stockport. Ceramic coating from £300, paint correction from £250. Locally based, transparent pricing.',
    keywords: ['car detailing prices stockport', 'ceramic coating cost stockport', 'paint correction price stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Prices', href: '/stockport/car-detailing/prices' },
  ],
  heroTitle: 'Car Detailing Prices in Stockport',
  heroDescription: 'Transparent pricing for all detailing services in Stockport. No hidden costs, no call-out fees for local customers.',
  contentSections: [
    {
      type: 'list',
      heading: 'Stockport Detailing Price Guide',
      items: [
        'Ceramic Coating: from £300 (2-year) to £1,200+ (7+ year)',
        'Paint Correction: from £250 (single-stage) to £500+ (multi-stage)',
        'New Car Protection: from £300 (coating) to £800+ (full package)',
        'Headlight Restoration: from £60 per pair',
      ],
    },
  ],
  faqs: [
    { question: 'Do Stockport customers get better prices?', answer: 'Our prices are the same across our service area. However, Stockport customers benefit from no travel time costs and maximum scheduling flexibility since we are locally based.' },
  ],
  relatedLinks: [
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Ceramic Coating', href: '/stockport/car-detailing/ceramic-coating' },
    { label: 'Valeting Prices', href: '/stockport/car-valeting/prices' },
    { label: 'Pricing Hub', href: '/pricing' },
  ],
};
