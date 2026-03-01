import { CircleDot } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorDetailingManchester: ServicePageData = {
  slug: 'interior-detailing',
  name: 'Interior Detailing Manchester',
  seo: {
    title: 'Interior Detailing Manchester | Deep Interior Restoration | SRV Detailing',
    description:
      'Professional interior detailing in Manchester. Steam cleaning, leather conditioning, stain removal and UV sanitisation. 22+ years experience. Mobile service.',
    keywords: [
      'interior detailing manchester',
      'car interior cleaning manchester',
      'leather conditioning manchester',
      'steam cleaning car interior manchester',
      'interior restoration manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/interior-detailing',
  },
  icon: CircleDot,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'Interior Detailing', href: '/manchester/car-detailing/interior-detailing' },
  ],
  heroTitle: 'Interior Detailing in Manchester',
  heroDescription:
    'Deep interior restoration that transforms your cabin. Steam cleaning, leather conditioning, stain removal, odour elimination and UV sanitisation — all delivered to your door.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Interior Detailing?',
      body: 'Interior detailing is a thorough, professional-grade restoration of every surface inside your vehicle. It goes far beyond vacuuming and wiping — we use steam cleaners to sanitise fabrics, hot water extractors to remove deep-set stains, specialist leather conditioners to restore and protect hide, and UV-C sanitisation to eliminate bacteria and allergens. The result is a cabin that looks, feels and smells like new.',
    },
    {
      type: 'list',
      heading: 'What\'s Included in Our Interior Detail',
      items: [
        'Full vacuum of all carpets, seats, boot and crevices',
        'Steam cleaning of all fabric surfaces — seats, carpets, headlining, door cards',
        'Hot water extraction for deep-set stains in upholstery and carpets',
        'Leather cleaning, conditioning and UV protection on all hide surfaces',
        'Dashboard, console and trim deep clean and dressing',
        'Air vent cleaning and cabin filter sanitisation',
        'Glass and mirror cleaning inside',
        'Odour elimination using enzyme-based treatments',
        'UV-C sanitisation for bacteria and allergen removal',
      ],
    },
    {
      type: 'text',
      heading: 'Why Manchester Interiors Need Professional Attention',
      body: 'Manchester\'s wet climate means moisture is constantly tracked into vehicles — muddy footwells, damp seat fabric, and condensation that breeds bacteria and musty odours. Urban commuting adds food and drink spills, pet hair, and general wear. Professional interior detailing addresses all of these issues with commercial-grade equipment that household products simply cannot match.',
    },
  ],
  faqs: [
    {
      question: 'How long does interior detailing take?',
      answer: 'A full interior detail typically takes 3–5 hours depending on vehicle size and condition. Heavily soiled interiors or those requiring stain removal may take longer. We\'ll give you a time estimate when we assess your vehicle.',
    },
    {
      question: 'Can you remove pet hair from my car?',
      answer: 'Yes. We use compressed air, specialist detailing brushes and professional vacuums to remove embedded pet hair from all fabrics. It\'s one of our most requested services in Manchester.',
    },
    {
      question: 'Will interior detailing remove stains from my seats?',
      answer: 'Most stains can be significantly reduced or completely removed using hot water extraction and specialist cleaning agents. We treat each stain individually and can tackle coffee, food, ink, and most liquid spills effectively.',
    },
    {
      question: 'How much does interior detailing cost?',
      answer: 'Interior detailing starts from £150 for a standard vehicle. Price depends on vehicle size, interior material type (fabric vs leather), and overall condition. Contact us for an exact quote.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction', href: '/manchester/car-detailing/paint-correction', description: 'Complete your exterior too' },
    { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating', description: 'Long-term exterior protection' },
    { label: 'Interior Valeting', href: '/manchester/car-valeting/interior-valeting', description: 'Regular maintenance clean' },
    { label: 'Pet Hair Removal', href: '/manchester/car-valeting/pet-hair-removal', description: 'Specialist pet hair service' },
  ],
  schemaPrice: '150',
};
