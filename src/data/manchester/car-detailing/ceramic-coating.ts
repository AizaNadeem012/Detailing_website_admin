import { Shield } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const ceramicCoatingManchester: ServicePageData = {
  slug: 'ceramic-coating',
  name: 'Ceramic Coating Manchester',
  seo: {
    title: 'Ceramic Coating Manchester | Long-Term Paint Protection | SRV Detailing',
    description:
      'Professional ceramic coating in Manchester. 2 to 7+ year paint protection against rain, road salt and UV damage. Accredited application. Mobile service across Greater Manchester.',
    keywords: [
      'ceramic coating manchester',
      'car ceramic coating manchester',
      'ceramic paint protection manchester',
      'ceramic coating near me',
      'best ceramic coating manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-detailing/ceramic-coating',
  },
  icon: Shield,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Detailing', href: '/manchester/car-detailing' },
    { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating' },
  ],
  heroTitle: 'Ceramic Coating in Manchester',
  heroDescription:
    'Long-lasting paint protection against Manchester\'s rain, road salt and industrial fallout. Professional application with 2 to 7+ year durability. We come to you anywhere across Greater Manchester.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Ceramic Coating?',
      body: 'Ceramic coating is a liquid polymer that chemically bonds with your vehicle\'s paintwork to create a semi-permanent protective layer. Unlike traditional waxes that last weeks, or sealants that last months, a professionally applied ceramic coating lasts 2 to 7+ years. It creates a hydrophobic surface that repels water, dirt and contaminants while providing a deep, glossy finish.',
    },
    {
      type: 'list',
      heading: 'Why Manchester Cars Need Ceramic Coating',
      items: [
        'Hydrophobic protection against Manchester\'s 140+ rain days per year',
        'Chemical resistance to road salt spread across Greater Manchester each winter',
        'UV protection even through overcast Manchester skies that still transmit harmful radiation',
        'Defence against industrial fallout from the M60 corridor and Trafford Park',
        'Resistance to bird droppings and tree sap common in leafy suburbs like Didsbury and Chorlton',
        'Easier washing — dirt and grime slide off the coated surface',
      ],
    },
    {
      type: 'process',
      heading: 'Our Ceramic Coating Process',
      items: [
        'Full decontamination wash — snow foam pre-wash, two-bucket contact wash, iron fallout removal and clay bar',
        'Paint correction — machine polishing to remove swirl marks, scratches and oxidation before coating',
        'IPA wipe-down to remove all polishing oils and ensure a perfectly clean surface for bonding',
        'Ceramic coating application — applied panel by panel in controlled conditions, levelled and buffed',
        'IR curing — we use infrared lamps to accelerate the initial cure for maximum hardness',
        'Final inspection under professional lighting and aftercare walkthrough with the owner',
      ],
    },
    {
      type: 'text',
      heading: 'Ceramic Coating Packages',
      body: 'We offer three tiers of ceramic coating to suit different budgets and protection needs. Entry-level packages (£300–£400) provide 2-year protection with good hydrophobic properties. Mid-range packages (£500–£700) deliver 3–4 year protection with excellent chemical resistance. Premium packages (£800–£1,200+) provide 5–7+ years of maximum protection with the deepest gloss and hardest coating available.',
    },
  ],
  faqs: [
    {
      question: 'How long does ceramic coating last?',
      answer: 'Depending on the package chosen, ceramic coatings last between 2 and 7+ years. Durability depends on the product tier, maintenance routine, and environmental exposure. We provide full aftercare guidance to maximise longevity.',
    },
    {
      question: 'Is paint correction necessary before ceramic coating?',
      answer: 'Yes. Ceramic coating locks in whatever is underneath — including swirl marks and scratches. We always correct the paint first so the coating seals a flawless finish. This is included in all our ceramic coating packages.',
    },
    {
      question: 'Can you apply ceramic coating at my home?',
      answer: 'Yes. Our mobile unit is equipped with professional lighting, IR curing lamps, and a controlled environment setup. We can apply ceramic coatings on your driveway or in a covered space anywhere across Manchester.',
    },
    {
      question: 'How much does ceramic coating cost in Manchester?',
      answer: 'Our ceramic coating packages start from £300 for entry-level 2-year protection, rising to £800–£1,200+ for premium 5–7+ year coatings. The final price depends on vehicle size and paint condition. Contact us for an exact quote.',
    },
    {
      question: 'Do you need to maintain a ceramic coating?',
      answer: 'Yes, but maintenance is simple. We recommend washing with a pH-neutral shampoo every 1–2 weeks and applying a ceramic boost spray every 3–6 months. We provide full aftercare products and guidance with every coating.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction', href: '/manchester/car-detailing/paint-correction', description: 'Remove swirl marks before coating' },
    { label: 'New Car Protection', href: '/manchester/car-detailing/new-car-protection', description: 'Protect your new car from day one' },
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing', description: 'All detailing services' },
    { label: 'Ceramic Coating Prices', href: '/pricing/car-detailing', description: 'View all pricing' },
    { label: 'What Is Ceramic Coating?', href: '/guides/what-is-ceramic-coating', description: 'Complete guide' },
  ],
  schemaPrice: '300',
};
