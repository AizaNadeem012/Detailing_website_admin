import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const carWashManchester: ServicePageData = {
  slug: 'car-wash',
  name: 'Car Wash Manchester',
  seo: {
    title: 'Car Wash Manchester | Mobile Hand Car Wash | SRV Detailing',
    description:
      'Professional mobile car wash in Manchester. We come to your home or workplace — no queues, no automated brushes. Hand wash, rinse and dry from £30. All Greater Manchester areas covered.',
    keywords: [
      'car wash manchester',
      'hand car wash manchester',
      'mobile car wash manchester',
      'car wash near me manchester',
      'mobile hand car wash manchester',
      'car wash at home manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-wash',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Wash', href: '/manchester/car-wash' },
  ],
  heroTitle: 'Mobile Car Wash in Manchester',
  heroDescription:
    'Skip the queues — we come to your Manchester driveway, workplace or car park and hand wash your vehicle to a professional standard. Our fully self-contained mobile unit needs no water or electricity from you.',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Choose a Mobile Car Wash in Manchester?',
      body: 'Automated car washes use rotating brushes that cause swirl marks and fine scratches over time. Our mobile hand car wash uses the safe two-bucket method — a dedicated wash bucket and a rinse bucket — to lift and remove dirt without dragging it across your paintwork. Every wash is carried out by a trained detailer, not a machine. We cover the whole of Greater Manchester, from the city centre to Sale, Altrincham, Didsbury, Trafford, Salford, and beyond.',
    },
    {
      type: 'list',
      heading: "What's Included in Our Car Wash Service",
      items: [
        'Snow foam pre-wash to loosen heavy soiling before any contact',
        'Safe two-bucket hand wash using pH-neutral shampoo',
        'Thorough rinse and streak-free hand dry with plush microfibre towels',
        'Wheel and tyre clean including wheel arch blowout',
        'Tyre shine application for a clean, finished look',
        'Door shuts, fuel cap and jambs wiped clean',
        'Quick detailer sprayed over paintwork for an extra gloss and light protection',
      ],
    },
    {
      type: 'text',
      heading: 'Fully Self-Contained Mobile Unit',
      body: 'Our mobile car wash van carries its own water supply and power generator. We need nothing from you — no hosepipe connection, no extension lead. Just let us know where to park and we handle everything else. Available seven days a week across all Greater Manchester postcodes including M1–M4 (city centre), M16/M32/M41 (Trafford), M20 (Didsbury), M21 (Chorlton), M33 (Sale), WA14/WA15 (Altrincham), and all surrounding areas.',
    },
    {
      type: 'process',
      heading: 'How Our Mobile Car Wash Works',
      items: [
        'Book online or call — choose a date and time that suits you',
        'We arrive at your chosen Manchester location with all equipment',
        'Snow foam pre-wash applied to loosen road grime',
        'Hand wash, rinse and dry carried out using the safe two-bucket method',
        'Wheels, tyres and door shuts detailed to finish',
        'Quick detailer applied — your car left spotless and gleaming',
      ],
    },
    {
      type: 'text',
      heading: 'More Than Just a Car Wash',
      body: 'If your car needs more than a regular wash, we offer a range of upgrade services. Our mini valet adds a full interior vacuum, dashboard wipe-down and glass clean. Our full valet is a comprehensive clean inside and out. For paintwork correction or long-term protection, explore our car detailing services including machine polishing and ceramic coatings.',
    },
  ],
  faqs: [
    {
      question: 'How much does a mobile car wash in Manchester cost?',
      answer: 'Our standard hand car wash starts from £30 for a small hatchback, £40 for a medium saloon or estate, and £50 for a large SUV or van. Prices include snow foam pre-wash, hand wash, rinse, dry, wheels, tyres and quick detailer.',
    },
    {
      question: 'Do you need water or electricity from my property?',
      answer: 'No. Our mobile unit is fully self-contained with its own water tank and power generator. We need only a safe place to park alongside your vehicle.',
    },
    {
      question: 'Do you cover my area of Manchester?',
      answer: 'We cover the whole of Greater Manchester including the city centre (M1–M4), Didsbury (M20), Chorlton (M21), Salford (M5–M7), Trafford (M16, M32, M41), Sale (M33), Altrincham (WA14, WA15), Oldham, Rochdale, Bury, Bolton, Wigan, and Tameside. If you are unsure, just get in touch.',
    },
    {
      question: 'How long does a mobile car wash take?',
      answer: 'A standard hand car wash takes approximately 45–60 minutes for a hatchback, 60–75 minutes for a saloon or estate, and up to 90 minutes for a large SUV or van. Add-on interior services will extend this time.',
    },
    {
      question: 'Can I book a regular weekly or fortnightly car wash?',
      answer: 'Yes — many of our Manchester customers book us on a fortnightly or monthly schedule. Regular customers receive priority booking and can request the same time slot each visit.',
    },
  ],
  relatedLinks: [
    { label: 'Mini Valet Manchester', href: '/manchester/car-valeting/mini-valet' },
    { label: 'Full Valet Manchester', href: '/manchester/car-valeting/full-valet' },
    { label: 'Exterior Valeting Manchester', href: '/manchester/car-valeting/exterior-valeting' },
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '30',
};
