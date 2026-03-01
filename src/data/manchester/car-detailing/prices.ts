import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const detailingPricesManchester: ServicePageData = {
  slug: 'prices',
  name: 'Car Detailing Prices Manchester',
  seo: {
    title: 'Car Detailing Prices Manchester | SRV Detailing',
    description: 'Car detailing prices for Manchester. Ceramic coating from £300, paint correction from £250, interior detailing from £150. Transparent pricing.',
    keywords: ['car detailing prices manchester', 'ceramic coating cost manchester', 'paint correction price', 'detailing price list'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'Prices', href: '/manchester/car-detailing/prices' },
  ],
  heroTitle: 'Car Detailing Prices in Manchester',
  heroDescription: 'Transparent pricing for all our car detailing services across Greater Manchester. No hidden costs — the price we quote is the price you pay.',
  contentSections: [
    {
      type: 'list',
      heading: 'Our Detailing Price Guide',
      items: [
        'Ceramic Coating: from £300 (entry-level 2-year) to £1,200+ (premium 7+ year)',
        'Paint Correction: from £250 (single-stage) to £500+ (multi-stage)',
        'Interior Detailing: from £150 (standard) to £300+ (full restoration)',
        'Exterior Detailing: from £200 (decontamination + polish) to £400+ (full correction)',
        'New Car Protection: from £300 (coating only) to £800+ (full PPF + coating)',
        'Engine Bay Detailing: from £80',
        'Headlight Restoration: from £60 per pair',
        'Leather Conditioning: from £80',
        'Swirl Mark Removal: from £150',
      ],
    },
    {
      type: 'text',
      heading: 'What Affects the Price?',
      body: 'Final pricing depends on vehicle size (a MINI vs a Range Rover), paint condition (light swirls vs heavy defects), and the level of protection chosen. We provide an accurate quote after discussing your vehicle and requirements — no surprises on the day.',
    },
  ],
  faqs: [
    { question: 'Do you charge extra for larger vehicles?', answer: 'Yes, vehicle size affects pricing. SUVs and 4x4s typically cost 20–30% more than standard saloons due to the additional surface area and time required.' },
    { question: 'Is there a call-out fee for Manchester?', answer: 'No. We do not charge call-out fees for any address within Greater Manchester. The quoted price includes travel.' },
    { question: 'Do you offer package deals?', answer: 'Yes. Combining services (e.g. paint correction + ceramic coating) is cheaper than booking them separately. We also offer maintenance plans for regular customers.' },
  ],
  relatedLinks: [
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
    { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating' },
    { label: 'Paint Correction', href: '/manchester/car-detailing/paint-correction' },
    { label: 'Valeting Prices', href: '/manchester/car-valeting/prices' },
    { label: 'Pricing Hub', href: '/pricing' },
  ],
};
