import { MapPin } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const mobileValetingManchester: ServicePageData = {
  slug: 'mobile-valeting',
  name: 'Mobile Valeting Manchester',
  seo: {
    title: 'Mobile Valeting Manchester | We Come to You | SRV Detailing',
    description:
      'Professional mobile car valeting across Manchester. Fully equipped mobile unit comes to your home, office or any location. 22+ years experience. Book today.',
    keywords: ['mobile valeting manchester', 'mobile car wash manchester', 'mobile car valet manchester', 'car valet at home manchester'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/mobile-valeting',
  },
  icon: MapPin,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Mobile Valeting', href: '/manchester/car-valeting/mobile-valeting' },
  ],
  heroTitle: 'Mobile Valeting in Manchester',
  heroDescription:
    'Professional car valeting delivered to your door. Our fully equipped mobile unit comes to your home, office or any location across Greater Manchester — no need to drive anywhere.',
  contentSections: [
    {
      type: 'text',
      heading: 'How Our Mobile Service Works',
      body: 'Our custom-built mobile unit carries everything needed for a complete valeting service — water tank, power generator, professional equipment, premium products and proper lighting. We don\'t need your water or electricity (though we\'ll use them if offered). We arrive at your chosen location, set up, and deliver the same quality you\'d get in a dedicated studio.',
    },
    {
      type: 'list',
      heading: 'Where We Can Valet Your Car',
      items: [
        'Your driveway at home — the most popular option',
        'Your workplace car park — get your car cleaned while you work',
        'Office complexes and business parks across Manchester',
        'Apartment building car parks (with management permission)',
        'Hotel car parks for visiting clients',
        'Any accessible location across Greater Manchester',
      ],
    },
    {
      type: 'process',
      heading: 'Booking Process',
      items: [
        'Call us on 07375 759686 or use our online form to request a booking',
        'Tell us your vehicle type, location and which service you need',
        'We confirm a convenient date and time slot',
        'Our mobile unit arrives fully equipped at your chosen location',
        'We complete the service and walk you through the results',
      ],
    },
    {
      type: 'list',
      heading: 'What Our Mobile Unit Carries',
      items: [
        '200-litre water tank with pressure washer and snow foam lance',
        'Portable power generator for all equipment',
        'Professional vacuum and hot water extractor',
        'Full range of pH-neutral shampoos, fallout removers and dressings',
        'Microfiber towels, clay bars, applicators and brushes',
        'Professional LED inspection lighting',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you need access to my water or electricity?',
      answer: 'No. Our mobile unit carries its own water supply (200 litres) and power generator. We\'re completely self-contained. If you do have an outside tap or power socket available, we\'re happy to use them to save our reserves.',
    },
    {
      question: 'How much space do you need?',
      answer: 'We need enough room to open the doors fully and walk around the vehicle. A standard driveway or single parking bay with space on at least one side works perfectly.',
    },
    {
      question: 'What areas of Manchester do you cover?',
      answer: 'We cover all of Greater Manchester including the city centre, Didsbury, Chorlton, Salford, Trafford, Sale, Altrincham, Oldham, Rochdale, Bury, Bolton, Wigan and Tameside — plus all Stockport postcodes.',
    },
    {
      question: 'Can I book a regular mobile valeting slot?',
      answer: 'Yes. Many of our Manchester customers book a recurring fortnightly or monthly slot. Regular customers get priority scheduling and we can set up a standing appointment that works with your routine.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet', description: 'Our most thorough package' },
    { label: 'Mini Valet', href: '/manchester/car-valeting/mini-valet', description: 'Quick maintenance clean' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting', description: 'All valeting packages' },
    { label: 'Manchester Areas', href: '/manchester/areas', description: 'Find your local area' },
  ],
  schemaPrice: '50',
};
