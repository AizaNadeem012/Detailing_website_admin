import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const upholsteryCleaningManchester: ServicePageData = {
  slug: 'upholstery-cleaning',
  name: 'Upholstery Cleaning Manchester',
  seo: {
    title: 'Car Upholstery Cleaning Manchester | Seat & Carpet Cleaning | SRV Detailing',
    description: 'Professional car upholstery cleaning in Manchester. Hot water extraction for fabric seats and carpets. Stain removal and deep sanitisation.',
    keywords: ['upholstery cleaning car manchester', 'car seat cleaning manchester', 'carpet cleaning car manchester', 'fabric seat stain removal'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/upholstery-cleaning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Upholstery Cleaning', href: '/manchester/car-valeting/upholstery-cleaning' },
  ],
  heroTitle: 'Car Upholstery Cleaning in Manchester',
  heroDescription: 'Deep cleaning for fabric seats, carpets and mats. Hot water extraction removes embedded dirt, stains and bacteria for a fresh, hygienic interior.',
  contentSections: [
    {
      type: 'text',
      heading: 'Professional Hot Water Extraction',
      body: 'Our upholstery cleaning uses a professional hot water extraction machine — the same technology used by carpet cleaning companies but adapted for vehicle interiors. Hot water and cleaning solution is injected deep into fabric fibres, then immediately extracted along with dissolved dirt, stains and bacteria. The result is dramatically cleaner, fresher fabric that dries within a few hours.',
    },
    {
      type: 'list',
      heading: 'What We Clean',
      items: [
        'Fabric seats — front and rear',
        'Floor carpets and mats',
        'Boot carpet and lining',
        'Door card fabric inserts',
        'Headliner spot cleaning (where needed)',
      ],
    },
  ],
  faqs: [
    { question: 'How long do seats take to dry?', answer: 'Typically 2–4 hours in warm weather, 4–8 hours in winter. We extract as much moisture as possible and can use air movers to speed drying.' },
    { question: 'Can you remove old stains?', answer: 'Most stains respond well to hot water extraction. Old or set-in stains like permanent ink or dye may not come out completely, but we will always be honest about what to expect.' },
    { question: 'Is this safe for all fabric types?', answer: 'Yes. We adjust water temperature and pressure for different fabric types including Alcantara and suede. We always test in a hidden area first.' },
  ],
  relatedLinks: [
    { label: 'Interior Valeting', href: '/manchester/car-valeting/interior-valeting' },
    { label: 'Pet Hair Removal', href: '/manchester/car-valeting/pet-hair-removal' },
    { label: 'Leather Conditioning', href: '/manchester/car-detailing/leather-conditioning' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting' },
  ],
  schemaPrice: '80',
};
