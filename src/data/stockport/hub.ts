import { Car, Sparkles, Droplets } from 'lucide-react';
import type { LocationHubData } from '@/data/types';

export const stockportHub: LocationHubData = {
  slug: 'stockport',
  name: 'Stockport',
  seo: {
    title: 'Car Detailing & Valeting Stockport | Mobile Service | SRV Detailing',
    description:
      'Professional mobile car detailing and valeting in Stockport. Ceramic coating, paint correction, swirl removal, full valets and interior restoration. Locally based — all SK postcodes. 22+ years experience.',
    keywords: [
      'car detailing stockport',
      'car valeting stockport',
      'mobile car detailing stockport',
      'ceramic coating stockport',
      'paint correction stockport',
      'car cleaning stockport',
      'mobile valeting stockport',
      'car detailing greater manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
  ],
  heroTitle: 'Professional Car Detailing & Valeting in Stockport',
  heroDescription:
    "SRV Detailing is Stockport's locally based mobile car care specialist. Ceramic coatings, paint correction, full valets, interior restoration — 22+ years of professional expertise delivered to your door across all SK postcodes.",
  introText:
    "Greater Manchester's road salt, persistent rainfall, and urban traffic film create demanding conditions for vehicle paintwork and interiors year-round. SRV Detailing is based in Dukinfield — at the heart of the Stockport and Tameside area — covering every SK postcode including Bramhall, Cheadle, Cheadle Hulme, Marple, Hazel Grove, Heaton Moor, Edgeley, Reddish, and the town centre. Our mobile unit carries professional-grade equipment for all services: machine polishers, ceramic coating products, steam cleaners, and hot water extraction systems — brought directly to your home or workplace, fully self-contained.",
  pillars: [
    {
      name: 'Car Detailing',
      description: 'Restoration-grade paint correction, ceramic SiO2 coating, swirl mark removal, and deep interior detailing.',
      href: '/stockport/car-detailing',
      icon: Sparkles,
    },
    {
      name: 'Car Valeting',
      description: 'Professional maintenance cleaning — full valets, mini valets, interior and exterior packages delivered to your door.',
      href: '/stockport/car-valeting',
      icon: Car,
    },
    {
      name: 'Car Wash',
      description: 'Mobile hand car wash using safe two-bucket method. No automated brushes — no swirl marks. We come to your Stockport driveway.',
      href: '/stockport/car-wash',
      icon: Droplets,
    },
  ],
  areas: [
    { name: 'Bramhall', slug: 'bramhall', href: '/stockport/areas/bramhall' },
    { name: 'Cheadle', slug: 'cheadle', href: '/stockport/areas/cheadle' },
    { name: 'Marple', slug: 'marple', href: '/stockport/areas/marple' },
    { name: 'Hazel Grove', slug: 'hazel-grove', href: '/stockport/areas/hazel-grove' },
    { name: 'Heaton Moor', slug: 'heaton-moor', href: '/stockport/areas/heaton-moor' },
    { name: 'Edgeley', slug: 'edgeley', href: '/stockport/areas/edgeley' },
    { name: 'Reddish', slug: 'reddish', href: '/stockport/areas/reddish' },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'Your Local Stockport Car Care Specialist',
      bodyParagraphs: [
        "SRV Detailing is based at Globe House, Globe Lane, Dukinfield, SK16 4RG — genuinely local to all of Stockport and Tameside. Being locally based means we understand the specific conditions Stockport vehicles face: road salt from the winter gritting programme on the A6, A34, A560, and M60 corridor; iron fallout from the motorway and rail crossings in the area; tree sap from the residential canopies of Bramhall and Marple; and the persistent rainfall that keeps contamination active on paintwork throughout the year.",
        "Our mobile unit is fully self-contained — we carry our own water supply, power generator, professional equipment, and all chemicals. You need to provide nothing except access to your vehicle. Every SK postcode is covered without a call-out charge.",
      ],
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing in Stockport',
      items: [
        'Locally based in Dukinfield — minimal travel time, flexible scheduling, and no call-out charges for SK postcodes',
        '22+ years professional experience across all vehicle types, paint systems, and interior materials',
        'Fully self-contained mobile unit — own water supply, generator, and all professional equipment',
        'Safe hand-wash techniques and paint depth gauges — no rushed work, no shortcuts',
        'Fully insured with specialist motor trade and vehicle-in-care coverage',
        'Available 7 days a week including evenings by arrangement',
        'Regular customer priority scheduling and standing appointments across Stockport',
      ],
    },
    {
      type: 'list',
      heading: 'Why Stockport Vehicles Need Regular Professional Care',
      items: [
        'Winter road salt applied to all principal SK routes from October to March attacks alloy lacquer, clear coat, and brake components',
        'Iron fallout from the M60/M56 motorway corridor and local rail crossings embeds into paint and causes invisible oxidative damage',
        "Greater Manchester's 800mm+ annual rainfall keeps contamination chemically active on surfaces and promotes bacterial growth in vehicle interiors",
        'Tree sap from Bramhall, Cheadle Hulme, and Marple residential canopies etches clear coat through seasonal wet-dry cycles',
        'High use of automated car washes across Stockport introduces swirl marks that machine polishing and detailing correct',
      ],
    },
  ],
  faqs: [
    {
      question: 'Where are you based in Stockport?',
      answer:
        "We're based at Globe House, Globe Lane, Dukinfield, SK16 4RG — centrally located between Stockport and Tameside. We're a mobile service, so we come to you, but being Stockport-based means we're always close by and can often accommodate same-day or next-day bookings.",
    },
    {
      question: 'Which Stockport areas do you cover?',
      answer:
        'We cover all of Stockport Borough including Bramhall, Cheadle, Cheadle Hulme, Marple, Hazel Grove, Heaton Moor, Heaton Chapel, Heaton Norris, Edgeley, Reddish, Bredbury, Woodley, Offerton, Heaviley, and Stockport town centre — across SK1 through SK12.',
    },
    {
      question: 'Do you also cover Manchester and Greater Manchester?',
      answer:
        'Yes. We serve all of Greater Manchester as well as Stockport, including south Manchester, Didsbury, Chorlton, Tameside, and Trafford. Visit our Manchester page for details on services across the wider region.',
    },
    {
      question: 'How do I book a service in Stockport?',
      answer:
        "Call us on 07375 759686 or use our online contact form. Being locally based, we can often accommodate same-day or next-day bookings for Stockport customers. We'll confirm the service, time, and location and come to you.",
    },
    {
      question: 'Do you need water or electricity at my property?',
      answer:
        'No. Our mobile unit is fully self-contained with its own fresh water supply and power generator. We need only safe access to your vehicle and a parking space alongside it — nothing from your property.',
    },
  ],
};
