import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const leatherConditioningManchester: ServicePageData = {
  slug: 'leather-conditioning',
  name: 'Leather Conditioning Manchester',
  seo: {
    title: 'Leather Conditioning Manchester | Interior Leather Care | SRV Detailing',
    description: 'Professional leather conditioning and restoration in Manchester. Clean, nourish and protect your vehicle\'s leather interior. Mobile service.',
    keywords: ['leather conditioning manchester', 'car leather care manchester', 'leather restoration manchester', 'leather cleaning car'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/leather-conditioning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'Leather Conditioning', href: '/manchester/car-detailing/leather-conditioning' },
  ],
  heroTitle: 'Leather Conditioning in Manchester',
  heroDescription: 'Professional leather cleaning, conditioning and protection for your vehicle\'s interior. Restore suppleness, prevent cracking and maintain that premium feel.',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Your Leather Needs Professional Care',
      body: 'Leather is a natural material that dries out and degrades without proper care. UV exposure through windows, body oils from contact, dye transfer from clothing, and Manchester\'s damp climate all affect leather over time. Professional conditioning replenishes the oils and protectants that keep leather soft, supple and resistant to cracking.',
    },
    {
      type: 'process',
      heading: 'Our Leather Care Process',
      items: [
        'Vacuum seats and crevices to remove loose debris',
        'Apply pH-balanced leather cleaner and agitate with soft brushes',
        'Wipe clean and inspect for stains, dye transfer or damage',
        'Apply professional leather conditioner to nourish and restore suppleness',
        'Apply leather protectant with UV inhibitors for ongoing defence',
      ],
    },
  ],
  faqs: [
    { question: 'How often should leather be conditioned?', answer: 'Every 3–6 months is ideal. Vehicles in direct sunlight or heavy use benefit from quarterly conditioning.' },
    { question: 'Can you remove dye transfer from jeans?', answer: 'In most cases, yes. Dye transfer from denim is one of the most common leather issues we treat. Fresh stains are easier to remove than old, set-in ones.' },
    { question: 'Do you work on all leather colours?', answer: 'Yes. We use colour-safe products suitable for all leather types and colours, from light cream to dark black.' },
  ],
  relatedLinks: [
    { label: 'Interior Detailing', href: '/manchester/car-detailing/interior-detailing' },
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
    { label: 'Upholstery Cleaning', href: '/manchester/car-valeting/upholstery-cleaning' },
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
  ],
  schemaPrice: '80',
};
