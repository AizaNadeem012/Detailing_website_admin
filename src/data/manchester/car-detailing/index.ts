import { Shield, Sparkles, Paintbrush, Car, Wrench, CircleDot } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const manchesterCarDetailingPillar: PillarPageData = {
  slug: 'car-detailing',
  name: 'Car Detailing in Manchester',
  seo: {
    title: 'Car Detailing Manchester | Paint Correction & Ceramic Coating | SRV Detailing',
    description:
      'Professional car detailing in Manchester. Paint correction, ceramic coating, interior detailing and new car protection. 22+ years experience. Mobile service across Greater Manchester.',
    keywords: [
      'car detailing manchester',
      'paint correction manchester',
      'ceramic coating manchester',
      'interior detailing manchester',
      'mobile car detailing manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
  ],
  heroTitle: 'Professional Car Detailing in Manchester',
  heroDescription:
    'Restoration-grade car detailing across Greater Manchester. Paint correction, ceramic coatings, interior restoration and new car protection — delivered to your door by a specialist with 22+ years experience.',
  introText:
    'Car detailing goes far beyond a standard car wash. It\'s a professional-grade restoration and protection process that corrects paint imperfections, applies long-term ceramic protection, and deep-cleans every interior surface. At SRV Detailing, we bring studio-quality detailing to your location anywhere across Manchester using professional equipment and premium products.',
  services: [
    {
      slug: 'ceramic-coating',
      name: 'Ceramic Coating',
      description: 'Long-lasting paint protection against Manchester\'s rain, road salt and industrial fallout. 2 to 7+ year packages.',
      icon: Shield,
      href: '/manchester/car-detailing/ceramic-coating',
    },
    {
      slug: 'paint-correction',
      name: 'Paint Correction',
      description: 'Multi-stage machine polishing to remove swirl marks, scratches and oxidation. Restore showroom gloss.',
      icon: Sparkles,
      href: '/manchester/car-detailing/paint-correction',
    },
    {
      slug: 'interior-detailing',
      name: 'Interior Detailing',
      description: 'Deep interior restoration including steam cleaning, leather conditioning and UV sanitisation.',
      icon: CircleDot,
      href: '/manchester/car-detailing/interior-detailing',
    },
    {
      slug: 'new-car-protection',
      name: 'New Car Protection',
      description: 'Protect your new car from day one with ceramic coating, paint protection and interior safeguarding.',
      icon: Car,
      href: '/manchester/car-detailing/new-car-protection',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Car Detailing?',
      body: 'Car detailing is a professional-grade process that restores and protects your vehicle\'s surfaces to the highest standard. Unlike a standard car wash or valet, detailing involves machine polishing to correct paint defects (swirl marks, scratches, oxidation), application of ceramic coatings for years of protection, and deep restoration of interior surfaces. It\'s the higher-investment service that delivers transformative, lasting results.',
    },
    {
      type: 'list',
      heading: 'Why Manchester Vehicles Need Professional Detailing',
      items: [
        'Over 140 rain days per year cause water spots and mineral deposits on unprotected paint',
        'Winter road salt accelerates corrosion on wheel arches, sills and undercarriages',
        'Industrial fallout from the M60 corridor and Trafford Park embeds as iron contamination',
        'Urban pollution and brake dust create a film that dulls paintwork over time',
        'Tree sap and bird droppings in leafy suburbs like Didsbury etch into clear coat within 48 hours',
        'UV radiation — even through Manchester\'s overcast skies — fades unprotected paint and plastics',
      ],
    },
    {
      type: 'process',
      heading: 'Our Detailing Process',
      items: [
        'Full decontamination wash — snow foam, two-bucket method, iron fallout removal and clay bar treatment',
        'Paint inspection under professional lighting to map every defect and plan the correction strategy',
        'Multi-stage machine polishing with cutting and finishing compounds to remove swirl marks and scratches',
        'Paint protection application — ceramic coating, wax or sealant depending on your chosen package',
        'Interior deep clean — steam cleaning, leather conditioning, plastics restoration and UV protection',
        'Final inspection, quality check and aftercare guidance',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does a full car detail take?',
      answer: 'A comprehensive detail typically takes 6 to 10 hours depending on vehicle size and condition. Paint correction alone can take 4 to 8 hours. We never rush the process — every panel gets the attention it needs.',
    },
    {
      question: 'How often should I get my car detailed?',
      answer: 'For most vehicles, a full detail once or twice a year is ideal. If you have a ceramic coating, annual maintenance detailing keeps the coating performing at its best. Between details, regular valeting maintains the finish.',
    },
    {
      question: 'What is the difference between detailing and valeting?',
      answer: 'Detailing is restoration and protection — paint correction, ceramic coating, deep surface restoration. Valeting is professional cleaning — washing, vacuuming, polishing. Think of detailing as the annual service and valeting as regular maintenance.',
    },
    {
      question: 'Can you detail my car at my home in Manchester?',
      answer: 'Yes. Our fully equipped mobile unit carries its own water, power and professional lighting. We can detail your vehicle on your driveway, at your workplace, or any convenient location across Greater Manchester.',
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting', description: 'Regular maintenance cleaning packages' },
    { label: 'Detailing vs Valeting', href: '/compare/car-detailing-vs-car-valeting', description: 'Understand the difference' },
    { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View our detailing packages and prices' },
    { label: 'What Is Car Detailing?', href: '/guides/what-is-car-detailing', description: 'Complete beginner\'s guide' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing', description: 'Services in the Stockport area' },
  ],
};
