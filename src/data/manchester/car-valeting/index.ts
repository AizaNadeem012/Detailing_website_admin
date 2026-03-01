import { Star, Droplets, CheckCircle, Car, MapPin } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const manchesterCarValetingPillar: PillarPageData = {
  slug: 'car-valeting',
  name: 'Car Valeting in Manchester',
  seo: {
    title: 'Car Valeting Manchester | Mobile Valeting Service | SRV Detailing',
    description:
      'Professional mobile car valeting in Manchester. Full valets, mini valets, interior and exterior packages. 22+ years experience. We come to you across Greater Manchester.',
    keywords: [
      'car valeting manchester',
      'mobile car valeting manchester',
      'full valet manchester',
      'car wash manchester',
      'professional valeting manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
  ],
  heroTitle: 'Professional Car Valeting in Manchester',
  heroDescription:
    'Regular professional cleaning that keeps your car looking fresh, comfortable and well-maintained. Hand-wash only, premium products, delivered to your door anywhere across Greater Manchester.',
  introText:
    'Car valeting is professional-grade cleaning and maintenance for your vehicle. Unlike a quick car wash, our valeting service uses safe hand-wash techniques, pH-neutral products, and meticulous attention to every surface. We offer packages from a quick 60-minute mini valet to a comprehensive 3–4 hour full valet — all delivered to your location by our fully equipped mobile unit.',
  services: [
    {
      slug: 'full-valet',
      name: 'Full Valet',
      description: 'Complete interior and exterior valet — our most thorough cleaning package. 3 to 4 hours of meticulous care.',
      icon: Star,
      href: '/manchester/car-valeting/full-valet',
    },
    {
      slug: 'mini-valet',
      name: 'Mini Valet',
      description: 'Quick maintenance clean in 60 to 90 minutes. Perfect between full valets to keep your car fresh.',
      icon: Droplets,
      href: '/manchester/car-valeting/mini-valet',
    },
    {
      slug: 'mobile-valeting',
      name: 'Mobile Valeting',
      description: 'We come to your home, office or workplace anywhere in Manchester. Fully equipped mobile unit.',
      icon: MapPin,
      href: '/manchester/car-valeting/mobile-valeting',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Car Valeting?',
      body: 'Car valeting is professional vehicle cleaning and maintenance. It covers thorough interior and exterior washing, upholstery treatment, dashboard cleaning, wheel detailing and wax protection. Think of it as the highest-quality version of what a car wash should be — using safe techniques, premium products and genuine care for your vehicle\'s surfaces.',
    },
    {
      type: 'list',
      heading: 'Why Choose Professional Valeting Over a Car Wash',
      items: [
        'Safe hand-wash technique — no spinning brushes that scratch your paint',
        'pH-neutral snow foam and shampoos that clean without stripping protection',
        'Two-bucket method to prevent cross-contamination and swirl marks',
        'Microfiber drying — no chamois that drags dirt across the paint',
        'Proper wheel cleaning with fallout removers, not just a rinse',
        'Interior deep clean, not just a quick vacuum and air freshener',
        'Mobile convenience — we come to your home, office or any location',
      ],
    },
    {
      type: 'process',
      heading: 'How Our Valeting Service Works',
      items: [
        'Book your preferred service and location — we\'ll confirm a convenient time slot',
        'Our fully equipped mobile unit arrives at your location with everything needed',
        'We assess your vehicle and begin with a thorough pre-wash and snow foam',
        'Systematic cleaning of exterior and interior surfaces using safe, professional techniques',
        'Final inspection, protection application and walkthrough with you',
      ],
    },
  ],
  faqs: [
    {
      question: 'How often should I get my car valeted?',
      answer: 'For most vehicles, a full valet every 4–6 weeks keeps your car in excellent condition. Between full valets, a monthly mini valet maintains the finish. If your car is ceramic coated, quarterly valeting with a maintenance wash is sufficient.',
    },
    {
      question: 'What is the difference between a full valet and a mini valet?',
      answer: 'A full valet (3–4 hours) includes complete interior deep clean, exterior decontamination wash, clay bar, wax protection and wheel detailing. A mini valet (60–90 minutes) is a maintenance service covering exterior wash, interior vacuum, dashboard wipe and glass cleaning.',
    },
    {
      question: 'Do you valet at my home or workplace?',
      answer: 'Yes. Our mobile unit travels to any location across Greater Manchester. We carry our own water and power — we just need access to your vehicle and enough space to work around it.',
    },
    {
      question: 'How much does a car valet cost in Manchester?',
      answer: 'Mini valets start from £50, full valets from £120. Prices vary by vehicle size. Check our pricing page or call us for an exact quote for your vehicle.',
    },
  ],
  relatedLinks: [
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing', description: 'Restoration-grade services' },
    { label: 'Detailing vs Valeting', href: '/compare/car-detailing-vs-car-valeting', description: 'Understand the difference' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View our valeting packages' },
    { label: 'What Is Car Valeting?', href: '/guides/what-is-car-valeting', description: 'Complete guide' },
    { label: 'Stockport Car Valeting', href: '/stockport/car-valeting', description: 'Services in Stockport' },
  ],
};
