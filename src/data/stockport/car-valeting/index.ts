import { Star, Droplets, MapPin, Scissors, Wind, Armchair } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const stockportCarValetingPillar: PillarPageData = {
  slug: 'car-valeting',
  name: 'Car Valeting in Stockport',
  seo: {
    title: 'Car Valeting Stockport | Mobile Valet | SRV Detailing',
    description:
      'Expert mobile car valeting in Stockport. Hand-safe wash, paint decontamination & protective finish. All SK postcodes covered. 22+ years experience.',
    keywords: [
      'car valeting stockport',
      'mobile car valeting stockport',
      'full valet stockport',
      'mini valet stockport',
      'car wash stockport',
      'mobile valet stockport',
      'car valeting sk postcodes',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
  ],
  heroTitle: 'Car Valeting Stockport — Expert Mobile Valet at Your Door',
  heroDescription:
    "Stockport's locally based mobile valeting specialist. We protect your paintwork from Greater Manchester's road salt, rain and urban grime — using safe hand-wash techniques and professional products. Covering all SK postcodes, 7 days a week.",
  introText:
    "Greater Manchester's wet winters and salt-treated roads are relentless on vehicle paintwork. SRV Detailing brings professional car valeting directly to your driveway across all Stockport SK postcodes — Bramhall, Cheadle, Marple, Hazel Grove, Heaton Moor and beyond. Every valet begins with a snow foam decontamination stage that safely lifts road salt, brake dust and bonded contamination before any contact with your clear coat — eliminating the swirl marks caused by automatic car washes. We use pH-neutral, paint-safe products and the two-bucket hand-wash method, finishing with a wax or sealant layer to protect your vehicle's finish between cleans.",
  services: [
    {
      slug: 'full-valet',
      name: 'Full Valet',
      description: 'Complete interior and exterior valet. 3–4 hours of meticulous care.',
      icon: Star,
      href: '/stockport/car-valeting/full-valet',
    },
    {
      slug: 'mini-valet',
      name: 'Mini Valet',
      description: 'Quick maintenance clean in 60–90 minutes. Perfect between full valets.',
      icon: Droplets,
      href: '/stockport/car-valeting/mini-valet',
    },
    {
      slug: 'mobile-valeting',
      name: 'Mobile Valeting',
      description: 'We come to your home, office or workplace anywhere in Stockport.',
      icon: MapPin,
      href: '/stockport/car-valeting/mobile-valeting',
    },
    {
      slug: 'pet-hair-removal',
      name: 'Pet Hair Removal',
      description: 'Specialist extraction of embedded pet hair from seats, carpets and crevices.',
      icon: Scissors,
      href: '/stockport/car-valeting/pet-hair-removal',
    },
    {
      slug: 'odour-removal',
      name: 'Odour Removal',
      description: 'Permanently eliminate smoke, pet, food and damp smells with deep cleaning and ozone treatment.',
      icon: Wind,
      href: '/stockport/car-valeting/odour-removal',
    },
    {
      slug: 'upholstery-cleaning',
      name: 'Upholstery Cleaning',
      description: 'Hot water extraction for fabric seats, carpets and mats — deep stain removal and sanitisation.',
      icon: Armchair,
      href: '/stockport/car-valeting/upholstery-cleaning',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Professional Car Valeting Involves',
      bodyParagraphs: [
        "Car valeting is systematic, trained cleaning that protects your paint rather than simply making it look clean. Our process starts with decontamination: a snow foam pre-soak that encapsulates road salt, brake dust and organic matter before we touch the paint. We hand wash using the two-bucket method to prevent cross-contamination, treat the surface with a clay bar where bonded contamination is present, and apply a protective wax or sealant to the clear coat.",
        "Interior work covers thorough vacuuming, steam treatment of trim and vents, upholstery care and glass polish. Every product we use is pH-neutral and safe for factory paint, paint protection film (PPF) and ceramic-coated vehicles.",
      ],
    },
    {
      type: 'list',
      heading: 'Why Stockport Cars Need Regular Valeting',
      items: [
        'Road salt from winter gritting on the A6, M60 and local estates chemically attacks bare paintwork',
        'Greater Manchester rainfall washes industrial fallout and airborne contaminants onto horizontal surfaces',
        'Brake dust from urban stop-start driving bonds to alloy wheels and lower panels within days',
        'UV exposure in summer degrades unprotected clear coat and causes oxidation',
        'Bird lime, tree sap and water spots etch into paint quickly if left untreated',
        'Regular valeting removes contaminants before they cause irreversible paint damage',
      ],
    },
    {
      type: 'process',
      heading: 'Our Valeting Process — Step by Step',
      items: [
        'Pre-rinse and snow foam decontamination to encapsulate surface contamination safely',
        'Two-bucket hand wash with pH-neutral shampoo and clean wash mitts',
        'Clay bar decontamination on any bonded fallout, iron or tar deposits',
        'Machine polish on request to remove swirl marks or light paint defects',
        'Wax or sealant applied to protect the clear coat between services',
        'Interior: vacuum, steam clean, trim and dash dressing, glass polish',
      ],
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing for Valeting in Stockport',
      items: [
        'Locally based in Stockport — faster response times and flexible rescheduling',
        '22+ years hands-on experience with all vehicle types and paint finishes',
        'Safe hand-wash only: no brushes, no automated systems, no swirl risk',
        "pH-neutral products that won't strip existing wax, sealant or ceramic coatings",
        'Fully insured with motor trade and public liability coverage',
        'Available 7 days a week, evenings by arrangement',
        'Standing appointments and priority scheduling for regular customers',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a car valet cost in Stockport?',
      answer:
        'Mini valets from £50, full valets from £120. Price varies by vehicle size and condition. Contact us for a transparent quote — no hidden charges.',
    },
    {
      question: 'Do you cover all areas of Stockport?',
      answer:
        'Yes — every SK postcode including Bramhall, Cheadle, Cheadle Hulme, Hazel Grove, Marple, Romiley, Heaton Moor and Heaton Chapel.',
    },
    {
      question: 'Do I need to provide water or power for the valet?',
      answer:
        'We bring professional-grade equipment and water supply for most services. For a full valet, access to an outdoor tap is helpful but not always essential — just let us know when booking.',
    },
    {
      question: 'Will your wash process cause swirl marks?',
      answer:
        'No. We use the two-bucket hand-wash method with dedicated wash mitts specifically to prevent swirl marks. We never use brushes or automated equipment that drags grit across paintwork.',
    },
    {
      question: 'How often should I get my car valeted in Greater Manchester?',
      answer:
        'For daily drivers on Stockport roads, a mini valet every 4–6 weeks and a full valet every 3–4 months is ideal. Winter months with heavy road salt benefit from more frequent decontamination washes.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Stockport', href: '/stockport/car-valeting/full-valet', description: 'Complete interior & exterior valet' },
    { label: 'Mini Valet Stockport', href: '/stockport/car-valeting/mini-valet', description: 'Quick maintenance clean' },
    { label: 'Mobile Valeting Stockport', href: '/stockport/car-valeting/mobile-valeting', description: 'We come to your door' },
    { label: 'Car Detailing Stockport', href: '/stockport/car-detailing', description: 'Restoration-grade paint services' },
    { label: 'Paint Correction Stockport', href: '/stockport/car-detailing/paint-correction', description: 'Remove swirl marks & scratches' },
    { label: 'Car Valeting Prices', href: '/pricing/car-valeting', description: 'Transparent pricing guide' },
  ],
};
