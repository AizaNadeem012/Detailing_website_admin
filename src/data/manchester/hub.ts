import { Car, Sparkles, Shield, MapPin, Droplets } from 'lucide-react';
import type { LocationHubData } from '@/data/types';

export const manchesterHub: LocationHubData = {
  slug: 'manchester',
  name: 'Manchester',
  seo: {
    title: 'Car Detailing & Valeting Manchester | Mobile Service | SRV Detailing',
    description:
      'Professional mobile car detailing and valeting across Manchester. Ceramic coating, paint correction, full valets and more. 22+ years experience. We come to you.',
    keywords: [
      'car detailing manchester',
      'car valeting manchester',
      'mobile car detailing manchester',
      'ceramic coating manchester',
      'paint correction manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/manchester',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
  ],
  heroTitle: 'Professional Car Detailing & Valeting in Manchester',
  heroDescription:
    'SRV Detailing is Manchester\'s trusted mobile car care specialist. From advanced paint correction and ceramic coatings to thorough full valets and interior deep cleans — over 22 years of professional experience directly to your door.',
  introText:
    'We treat car detailing and car valeting as distinct disciplines — because they are. Detailing is restoration-grade work: paint correction, ceramic coating, and deep protection. Valeting is professional maintenance cleaning: full valets, interior deep cleans, and regular upkeep. We offer dedicated service packages for each, anywhere across Greater Manchester.',
  pillars: [
    {
      name: 'Car Detailing',
      description:
        'Restoration-grade paint correction, ceramic coatings, and deep protection for enthusiasts and luxury vehicles.',
      href: '/manchester/car-detailing',
      icon: Sparkles,
    },
    {
      name: 'Car Valeting',
      description:
        'Professional maintenance cleaning — full valets, mini valets, interior and exterior packages.',
      href: '/manchester/car-valeting',
      icon: Car,
    },
    {
      name: 'Car Wash',
      description:
        'Mobile hand car wash using the safe two-bucket method. No queues, no automated brushes — we come to your Manchester location.',
      href: '/manchester/car-wash',
      icon: Droplets,
    },
  ],
  areas: [
    { name: 'City Centre', slug: 'city-centre', href: '/manchester/areas/city-centre' },
    { name: 'Didsbury', slug: 'didsbury', href: '/manchester/areas/didsbury' },
    { name: 'Chorlton', slug: 'chorlton', href: '/manchester/areas/chorlton' },
    { name: 'Salford', slug: 'salford', href: '/manchester/areas/salford' },
    { name: 'Trafford', slug: 'trafford', href: '/manchester/areas/trafford' },
    { name: 'Sale', slug: 'sale', href: '/manchester/areas/sale' },
    { name: 'Altrincham', slug: 'altrincham', href: '/manchester/areas/altrincham' },
    { name: 'Oldham', slug: 'oldham', href: '/manchester/areas/oldham' },
    { name: 'Rochdale', slug: 'rochdale', href: '/manchester/areas/rochdale' },
    { name: 'Bury', slug: 'bury', href: '/manchester/areas/bury' },
    { name: 'Bolton', slug: 'bolton', href: '/manchester/areas/bolton' },
    { name: 'Wigan', slug: 'wigan', href: '/manchester/areas/wigan' },
    { name: 'Tameside', slug: 'tameside', href: '/manchester/areas/tameside' },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'Why Manchester Cars Need Professional Care',
      body: 'Manchester\'s climate presents unique challenges for vehicle paintwork. Over 140 rain days per year, winter road salt, industrial fallout from the M60 corridor, and urban pollution all attack unprotected surfaces. Professional detailing and valeting addresses these specific environmental threats with products and techniques designed for local conditions.',
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing in Manchester',
      items: [
        '22+ years of hands-on experience across Greater Manchester',
        'Fully mobile service — we bring everything to your location',
        'Self-contained van with own water supply and power generator',
        'Professional-grade equipment and premium products',
        'Fully insured with specialist vehicle-in-care coverage',
        'Available 7 days a week across all Manchester postcodes',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you cover all of Greater Manchester?',
      answer:
        'Yes. We serve every area of Greater Manchester including the city centre, Didsbury, Chorlton, Salford, Trafford, Sale, Altrincham, Oldham, Rochdale, Bury, Bolton, Wigan and Tameside. We also cover Stockport and surrounding SK postcodes.',
    },
    {
      question: 'What is the difference between car detailing and car valeting?',
      answer:
        'Car detailing is restoration-grade work — paint correction, ceramic coating, deep interior restoration. It\'s a higher-investment service typically done annually. Car valeting is professional cleaning and maintenance — full valets, interior cleans, exterior washes. It\'s a regular service done monthly or quarterly.',
    },
    {
      question: 'Do you need access to water or electricity?',
      answer:
        'No. Our mobile unit carries its own water supply and power generator. We\'re completely self-contained and can work anywhere — your driveway, office car park, or any convenient location.',
    },
    {
      question: 'How do I book a service in Manchester?',
      answer:
        'Call us on 07375 759686 or use our online contact form. Let us know your vehicle type, location, and what service you need. We\'ll arrange a time that suits you.',
    },
  ],
};
