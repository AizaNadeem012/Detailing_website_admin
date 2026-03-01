import { Star } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const fullValetManchester: ServicePageData = {
  slug: 'full-valet',
  name: 'Full Valet Manchester',
  seo: {
    title: 'Full Valet Manchester | Complete Car Valeting Service | SRV Detailing',
    description:
      'Professional full valet service in Manchester. Complete interior and exterior cleaning, 3-4 hours of meticulous care. 22+ years experience. Mobile service.',
    keywords: ['full valet manchester', 'full car valet manchester', 'complete car valet manchester', 'car cleaning manchester'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/full-valet',
  },
  icon: Star,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
  ],
  heroTitle: 'Full Valet in Manchester',
  heroDescription:
    'Our most comprehensive valeting package. 3 to 4 hours of meticulous cleaning covering every interior and exterior surface. Mobile service across Greater Manchester.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is a Full Valet?',
      body: 'A full valet is our most thorough cleaning package. It combines a complete exterior decontamination wash with a deep interior clean, covering every surface of your vehicle. From snow foam pre-wash to final wax protection, from deep carpet extraction to dashboard detailing — nothing is overlooked. It takes 3 to 4 hours and leaves your car looking, feeling and smelling like new.',
    },
    {
      type: 'list',
      heading: 'Full Valet Includes',
      items: [
        'Snow foam pre-wash to loosen dirt and grime safely',
        'Two-bucket hand wash with pH-neutral shampoo',
        'Wheel and tyre deep clean with fallout remover and tyre dressing',
        'Clay bar decontamination to remove bonded contaminants',
        'Full interior vacuum — seats, carpets, boot, crevices',
        'Upholstery cleaning and stain treatment (fabric or leather)',
        'Dashboard, console and trim deep clean and dressing',
        'Door shuts and jamb cleaning',
        'All glass cleaned inside and out',
        'Wax or sealant protection on all exterior paintwork',
        'Final inspection and quality check',
      ],
    },
    {
      type: 'text',
      heading: 'When to Book a Full Valet',
      body: 'A full valet is ideal as a regular maintenance service every 4–6 weeks, a pre-sale preparation to maximise your vehicle\'s value, or a seasonal deep clean after winter or summer. It\'s also the perfect reset before or after a long road trip, or simply when your car needs more than a quick wash.',
    },
  ],
  faqs: [
    {
      question: 'How long does a full valet take?',
      answer: 'A full valet takes 3 to 4 hours depending on vehicle size and condition. Heavily soiled vehicles may take slightly longer. We\'ll give you a time estimate when we assess your car.',
    },
    {
      question: 'How much does a full valet cost in Manchester?',
      answer: 'Full valets start from £120 for a standard car. Prices increase for larger vehicles (SUVs, vans). Contact us for an exact quote for your vehicle.',
    },
    {
      question: 'Is a full valet different from car detailing?',
      answer: 'Yes. A full valet is professional cleaning — it makes your car clean and fresh. Car detailing goes further with paint correction (removing scratches) and ceramic coating (long-term protection). A valet maintains; a detail restores.',
    },
    {
      question: 'How often should I get a full valet?',
      answer: 'Every 4–6 weeks for most vehicles. If you have a ceramic coating, every 6–8 weeks with a maintenance wash between visits. Monthly mini valets between full valets keep things fresh.',
    },
  ],
  relatedLinks: [
    { label: 'Mini Valet', href: '/manchester/car-valeting/mini-valet', description: 'Quick maintenance clean' },
    { label: 'Interior Valeting', href: '/manchester/car-valeting/interior-valeting', description: 'Interior-only deep clean' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting', description: 'All valeting packages' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View all pricing' },
  ],
  schemaPrice: '120',
};
