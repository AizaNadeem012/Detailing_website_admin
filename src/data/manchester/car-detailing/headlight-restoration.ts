import { Sun } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const headlightRestorationManchester: ServicePageData = {
  slug: 'headlight-restoration',
  name: 'Headlight Restoration Manchester',
  seo: {
    title: 'Headlight Restoration Manchester | Foggy Headlight Repair | SRV Detailing',
    description: 'Professional headlight restoration in Manchester. Restore clarity to oxidised, yellowed and foggy headlights. Improve safety and pass your MOT.',
    keywords: ['headlight restoration manchester', 'foggy headlight repair manchester', 'headlight polishing manchester', 'oxidised headlights'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/headlight-restoration',
  },
  icon: Sun,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'Headlight Restoration', href: '/manchester/car-detailing/headlight-restoration' },
  ],
  heroTitle: 'Headlight Restoration in Manchester',
  heroDescription: 'Restore clarity and brightness to oxidised, yellowed and foggy headlights. Improve night-time visibility and your vehicle\'s appearance.',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Do Headlights Go Foggy?',
      body: 'Modern headlight lenses are made from polycarbonate plastic with a UV-protective clear coat. Over time, UV exposure, road salt, and chemical exposure break down this coating, causing the lens to oxidise, yellow and become hazy. This reduces light output by up to 80% — a safety hazard and a common MOT failure point.',
    },
    {
      type: 'process',
      heading: 'Our Restoration Process',
      items: [
        'Mask surrounding paintwork to protect against sanding marks',
        'Wet sand the lens through progressive grits (800–3000) to remove oxidation',
        'Machine polish with cutting compound to restore full clarity',
        'Apply UV sealant or ceramic coating to protect against future oxidation',
      ],
    },
  ],
  faqs: [
    { question: 'How long does headlight restoration last?', answer: 'With UV sealant, restored headlights typically stay clear for 2–3 years. With ceramic coating protection, even longer.' },
    { question: 'Can you restore all types of headlights?', answer: 'Yes — we restore polycarbonate and acrylic lenses. If the damage is internal (moisture inside the unit), we will advise you accordingly.' },
    { question: 'Will headlight restoration help me pass my MOT?', answer: 'Yes. Cloudy headlights reduce light output and are a common reason for MOT advisories or failures. Restoration brings light output back to safe levels.' },
  ],
  relatedLinks: [
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
    { label: 'Exterior Detailing', href: '/manchester/car-detailing/exterior-detailing' },
    { label: 'Paint Correction', href: '/manchester/car-detailing/paint-correction' },
    { label: 'Detailing Prices', href: '/manchester/car-detailing/prices' },
  ],
  schemaPrice: '60',
};
