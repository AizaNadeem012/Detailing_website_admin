import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const miniValetManchester: ServicePageData = {
  slug: 'mini-valet',
  name: 'Mini Valet Manchester',
  seo: {
    title: 'Mini Valet Manchester | Quick Car Clean | SRV Detailing',
    description:
      'Quick mini valet service in Manchester. 60-90 minute maintenance clean — exterior wash, interior vacuum and dash wipe. Mobile service across Greater Manchester.',
    keywords: ['mini valet manchester', 'quick car wash manchester', 'car clean manchester', 'maintenance valet manchester'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/mini-valet',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Mini Valet', href: '/manchester/car-valeting/mini-valet' },
  ],
  heroTitle: 'Mini Valet in Manchester',
  heroDescription:
    'A quick professional clean in just 60 to 90 minutes. Perfect for regular maintenance between full valets. Mobile service across Greater Manchester.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is a Mini Valet?',
      body: 'A mini valet is a focused maintenance clean designed to keep your car looking presentable between full valets. In 60 to 90 minutes, we wash the exterior safely, vacuum the interior, wipe down surfaces and clean the glass. It\'s not a deep clean — it\'s a professional-grade refresh that\'s miles above any car wash.',
    },
    {
      type: 'list',
      heading: 'Mini Valet Includes',
      items: [
        'Snow foam pre-wash and safe hand wash',
        'Wheel faces cleaned and tyres dressed',
        'Full interior vacuum — seats, carpets, boot',
        'Dashboard and console wipe-down',
        'All glass cleaned inside and out',
        'Door shuts wiped',
        'Air freshener applied',
      ],
    },
    {
      type: 'text',
      heading: 'When to Book a Mini Valet',
      body: 'Book a mini valet when your car needs a quick refresh but doesn\'t need a deep clean. Ideal as a fortnightly or monthly maintenance service, before picking up clients, or after a muddy weekend. It takes just 60–90 minutes and keeps your car consistently clean without the time commitment of a full valet.',
    },
  ],
  faqs: [
    {
      question: 'How much does a mini valet cost?',
      answer: 'Mini valets start from £50 for a standard car. Price varies by vehicle size. Contact us for your exact price.',
    },
    {
      question: 'How long does a mini valet take?',
      answer: '60 to 90 minutes depending on vehicle size and condition.',
    },
    {
      question: 'What\'s the difference between a mini valet and a full valet?',
      answer: 'A mini valet is a quick maintenance clean (60–90 mins) covering the basics. A full valet (3–4 hours) is a comprehensive deep clean with clay bar, wax protection, upholstery treatment and more.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet', description: 'Our most thorough package' },
    { label: 'Mobile Valeting', href: '/manchester/car-valeting/mobile-valeting', description: 'We come to you' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting', description: 'All valeting packages' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View all pricing' },
  ],
  schemaPrice: '50',
};
