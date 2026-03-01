import { Wrench } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const engineBayDetailingStockport: ServicePageData = {
  slug: 'engine-bay-detailing',
  name: 'Engine Bay Detailing Stockport',
  seo: {
    title: 'Engine Bay Detailing Stockport | Safe Engine Clean | SRV Detailing',
    description:
      'Professional engine bay detailing in Stockport. Safe degreasing, low-pressure rinse and plastic dressing — removes road salt and grime without risk to electrics. All SK postcodes.',
    keywords: [
      'engine bay detailing stockport',
      'engine clean stockport',
      'engine bay cleaning stockport',
      'mobile engine clean stockport',
      'engine bay dressing stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/engine-bay-detailing',
  },
  icon: Wrench,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Engine Bay Detailing', href: '/stockport/car-detailing/engine-bay-detailing' },
  ],
  heroTitle: 'Engine Bay Detailing Stockport — Safe, Thorough Engine Cleaning',
  heroDescription:
    'Professional engine bay cleaning and dressing across all Stockport SK postcodes. Safe degreasing and low-pressure rinsing removes accumulated road salt, oil mist and grime — without risk to electrical components.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Engine Bay Detailing?',
      bodyParagraphs: [
        "Engine bay detailing is the professional cleaning and restoration of the under-bonnet environment. Over years of use, oil mist from the engine, road grime thrown up through the wheel arches, brake dust, and — critically in Stockport — winter road salt all accumulate on every surface in the engine compartment. This buildup is not purely aesthetic: salt and moisture trapped in the bay accelerates corrosion on metal components, wiring, and brackets. A regularly detailed engine bay is a bay where corrosion, leaks, and developing issues are visible before they become expensive.",
        "The fear many people have about engine bay cleaning is damaging electronics. This is understandable — pressure washing an engine bay carelessly is genuinely risky. Our process eliminates this risk through careful preparation: sensitive components including ECU housings, fuse boxes, alternators, and exposed connectors are individually covered before any liquid is applied. We use low-pressure rinsing — not a pressure washer at full power — at controlled angles that direct water away from covered areas. This is the same approach used by professional detailing studios, applied by a mobile unit with 22+ years of experience.",
      ],
    },
    {
      type: 'process',
      heading: 'Our Engine Bay Cleaning Process',
      items: [
        'Cool-down check — engine must be cold or at ambient temperature before work begins; a hot engine causes degreaser to evaporate too quickly',
        'Component masking — ECU housing, fuse box, alternator, exposed wiring connectors, air filter and intake covered with plastic wrap and tape',
        'Degreaser application — specialist engine degreaser applied across all engine bay surfaces; left to dwell and break down oil and grease residue',
        'Agitation — soft detailing brushes used to work degreaser into all surfaces including plastic covers, hoses, pipes, and brackets',
        'Low-pressure rinse — all degreaser and loosened contamination rinsed away; rinse directed carefully away from masked components',
        'Compressed air drying — compressed air used to displace water from voids, connectors, and hard-to-reach areas before towel drying',
        'Plastic and rubber dressing — UV-protective dressing applied to all plastic covers, rubber hoses, and trim pieces; restores black colour and prevents future cracking',
        'Metal surface treatment — exposed metal surfaces treated where appropriate; remaining moisture removed',
        'Final inspection — component covers removed; bay inspected for completeness and any drips from the rinse stage tidied',
      ],
    },
    {
      type: 'list',
      heading: 'Why Engine Bay Detailing Matters for Stockport Vehicles',
      items: [
        'Winter road salt migrates into the engine bay through wheel arch openings — sodium chloride accelerates corrosion on brackets, wiring clips, and exposed metal',
        'A clean engine bay makes oil leaks, coolant weeps, and developing mechanical issues immediately visible — critical for early detection',
        'Accumulated oil and grime can be a fire risk if it contacts hot exhaust components — a clean bay is a safer bay',
        'Pre-sale preparation — a detailed engine bay signals that a vehicle has been well maintained and consistently adds to perceived value at inspection',
        'Rubber and plastic components in the bay degrade faster without regular dressing — UV protective treatment extends their service life',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is engine bay cleaning safe for my car?',
      answer:
        'Yes — when done correctly. We cover all sensitive electrical components before applying any liquid, and use low-pressure rinsing at careful angles. We have cleaned hundreds of engine bays across all vehicle types without electrical issues. The risk comes from careless pressure washing directly at uncovered connectors — not from our controlled process.',
    },
    {
      question: 'How long does engine bay detailing take?',
      answer:
        'Typically 45–90 minutes depending on the level of contamination and engine bay complexity. Heavily soiled bays with significant oil or salt buildup take longer to degrease effectively.',
    },
    {
      question: 'How much does engine bay detailing cost in Stockport?',
      answer:
        'Engine bay detailing starts from £80 for a standard vehicle. Price varies with bay size and contamination level. It is often combined with an exterior detail or full valet for a comprehensive same-visit service.',
    },
    {
      question: 'Why should I clean my engine bay?',
      answer:
        'A clean engine bay makes leaks and developing issues easy to spot, reduces corrosion from salt and moisture accumulation, improves appearance for pre-sale inspections, and extends the life of rubber and plastic components through regular dressing. For Stockport vehicles exposed to winter salting, it is a practical preventative measure.',
    },
    {
      question: 'Can you combine engine bay detailing with other services?',
      answer:
        'Yes — and it makes sense to do so. Engine bay detailing is most commonly combined with an exterior detail or full valet on the same visit, maximising the value of travel time. Contact us and we will build a combined service around your needs.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Stockport', href: '/stockport/car-detailing/exterior-detailing', description: 'Full exterior decontamination, polish and protection' },
    { label: 'New Car Protection Stockport', href: '/stockport/car-detailing/new-car-protection', description: 'Protect new vehicles from the first drive' },
    { label: 'Full Valet Stockport', href: '/stockport/car-valeting/full-valet', description: 'Comprehensive interior and exterior clean' },
    { label: 'Car Detailing Stockport', href: '/stockport/car-detailing', description: 'All detailing services across SK postcodes' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices', description: 'Full pricing guide' },
  ],
  schemaPrice: '80',
};
