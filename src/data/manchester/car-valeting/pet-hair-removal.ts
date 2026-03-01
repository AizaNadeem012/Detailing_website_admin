import { Scissors } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const petHairRemovalManchester: ServicePageData = {
  slug: 'pet-hair-removal',
  name: 'Pet Hair Removal Manchester',
  seo: {
    title: 'Pet Hair Removal Manchester | Car Pet Hair Cleaning | SRV Detailing',
    description: 'Specialist pet hair removal from car interiors in Manchester. Compressed air, detailing brushes and extraction to remove every strand. Mobile service.',
    keywords: ['pet hair removal car manchester', 'dog hair car cleaning manchester', 'pet hair car interior', 'mobile pet hair removal'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/pet-hair-removal',
  },
  icon: Scissors,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Pet Hair Removal', href: '/manchester/car-valeting/pet-hair-removal' },
  ],
  heroTitle: 'Pet Hair Removal in Manchester',
  heroDescription: 'Specialist extraction of pet hair from car seats, carpets and every crevice. We use compressed air, rubber brushes and professional techniques to get every strand.',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Pet Hair Is So Difficult to Remove',
      body: 'Pet hair embeds itself into fabric weave, wedges into seat stitching and clings to carpet fibres through static charge. Standard vacuuming only removes surface hair — the deeper strands require specialist techniques. Our pet hair removal process uses compressed air to lift embedded hair, rubber detailing brushes to pull it from fabric, and professional extraction to finish.',
    },
    {
      type: 'process',
      heading: 'Our Pet Hair Removal Process',
      items: [
        'Compressed air blast to loosen embedded hair from fabric weave and crevices',
        'Rubber brush agitation to pull stubborn hair from seats and carpets',
        'High-powered vacuum extraction of all loosened hair',
        'Lint roller finishing pass on all fabric surfaces',
        'Optional odour neutralisation for pet smells',
      ],
    },
  ],
  faqs: [
    { question: 'Can you get all pet hair out?', answer: 'We remove 95–99% of visible pet hair. Some deeply embedded strands in worn fabric may remain, but the difference is dramatic.' },
    { question: 'Do you also remove pet odours?', answer: 'We can add odour neutralisation to any pet hair removal service. See our dedicated odour removal page for details.' },
    { question: 'How long does pet hair removal take?', answer: 'Typically 1–2 hours depending on severity. Heavy cases (long-haired breeds, multiple pets) may take longer.' },
  ],
  relatedLinks: [
    { label: 'Interior Valeting', href: '/manchester/car-valeting/interior-valeting' },
    { label: 'Odour Removal', href: '/manchester/car-valeting/odour-removal' },
    { label: 'Upholstery Cleaning', href: '/manchester/car-valeting/upholstery-cleaning' },
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
  ],
  schemaPrice: '60',
};
