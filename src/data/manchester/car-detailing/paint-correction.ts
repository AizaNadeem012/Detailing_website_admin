import { Sparkles } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const paintCorrectionManchester: ServicePageData = {
  slug: 'paint-correction',
  name: 'Paint Correction Manchester',
  seo: {
    title: 'Paint Correction Manchester | Swirl Mark Removal | SRV Detailing',
    description:
      'Professional paint correction in Manchester. Multi-stage machine polishing to remove swirl marks, scratches and oxidation. 22+ years experience. Mobile service.',
    keywords: [
      'paint correction manchester',
      'swirl mark removal manchester',
      'machine polishing manchester',
      'scratch removal manchester',
      'paint restoration manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/paint-correction',
  },
  icon: Sparkles,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'Paint Correction', href: '/manchester/car-detailing/paint-correction' },
  ],
  heroTitle: 'Paint Correction in Manchester',
  heroDescription:
    'Multi-stage machine polishing to remove swirl marks, scratches, oxidation and water spots. Restore your vehicle\'s showroom gloss with 22+ years of professional experience.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Paint Correction?',
      body: 'Paint correction is the process of removing surface imperfections from your vehicle\'s clear coat using machine polishing with specialised compounds. Swirl marks from automated car washes, light scratches from poor washing technique, oxidation from UV exposure, and water spots from mineral deposits are all correctable. The result is a flawless, mirror-like finish with maximum depth and gloss.',
    },
    {
      type: 'list',
      heading: 'Common Paint Defects We Correct',
      items: [
        'Swirl marks from automated car washes and improper washing technique',
        'Light to moderate scratches from keys, rings and accidental contact',
        'Oxidation and fading from UV exposure and environmental damage',
        'Water spots and mineral etching from hard water and rain',
        'Bird dropping and tree sap etch marks',
        'Hologram marks from previous poor polishing attempts',
        'Industrial fallout and iron contamination staining',
      ],
    },
    {
      type: 'process',
      heading: 'Our Paint Correction Process',
      items: [
        'Full decontamination wash and clay bar treatment to remove bonded contaminants',
        'Paint depth measurement with a thickness gauge to ensure safe correction margins',
        'Defect mapping under professional lighting to plan the correction strategy for each panel',
        'Cutting stage — aggressive compound with cutting pad to remove deeper defects',
        'Finishing stage — fine polish with finishing pad to refine the surface and maximise gloss',
        'IPA wipe-down to remove polishing oils and reveal the true corrected finish',
        'Optional ceramic coating or sealant application to protect the corrected paint',
      ],
    },
    {
      type: 'text',
      heading: 'Paint Correction Stages Explained',
      body: 'We offer single-stage, two-stage and multi-stage correction depending on your paint\'s condition. Single-stage correction (from £250) removes light swirl marks and enhances gloss — ideal for well-maintained vehicles. Two-stage correction (from £400) tackles moderate swirls and light scratches. Multi-stage correction (from £600) addresses severe defects, heavy oxidation and deep marring for a complete paint transformation.',
    },
  ],
  faqs: [
    {
      question: 'How long does paint correction take?',
      answer: 'Single-stage correction typically takes 4–6 hours. Two-stage correction takes 6–8 hours. Multi-stage correction can take 8–12 hours. We never rush — every panel receives the time it needs for a flawless result.',
    },
    {
      question: 'Will paint correction damage my clear coat?',
      answer: 'No. We measure paint thickness before starting and use the least aggressive approach needed. Professional-grade compounds remove microns of clear coat — far less than the 40–60 microns typically available. Your paint remains safe and protected.',
    },
    {
      question: 'Should I get ceramic coating after paint correction?',
      answer: 'We strongly recommend it. Paint correction creates a flawless surface, and ceramic coating locks that finish in place for years. Without protection, the corrected paint will accumulate new swirl marks over time.',
    },
    {
      question: 'How much does paint correction cost in Manchester?',
      answer: 'Prices start from £250 for single-stage correction on a small car. Two-stage correction starts from £400, and multi-stage from £600. Final pricing depends on vehicle size, paint condition and correction level required.',
    },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating', description: 'Protect your corrected paint' },
    { label: 'Interior Detailing', href: '/manchester/car-detailing/interior-detailing', description: 'Complete the detail inside' },
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing', description: 'All detailing services' },
    { label: 'What Is Paint Correction?', href: '/guides/what-is-paint-correction', description: 'Full guide' },
  ],
  schemaPrice: '250',
};
