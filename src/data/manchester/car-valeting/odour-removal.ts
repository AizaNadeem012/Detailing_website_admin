import { Wind } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const odourRemovalManchester: ServicePageData = {
  slug: 'odour-removal',
  name: 'Car Odour Removal Manchester',
  seo: {
    title: 'Car Odour Removal Manchester | Smell Elimination | SRV Detailing',
    description: 'Professional car odour removal in Manchester. Eliminate smoke, pet, food and damp smells permanently. Ozone treatment and deep cleaning.',
    keywords: ['car odour removal manchester', 'smoke smell car manchester', 'car smell removal', 'ozone treatment car manchester'],
    canonical: 'https://www.srvdetailing.co.uk/manchester/car-valeting/odour-removal',
  },
  icon: Wind,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Car Valeting', href: '/manchester/car-valeting' },
    { label: 'Odour Removal', href: '/manchester/car-valeting/odour-removal' },
  ],
  heroTitle: 'Car Odour Removal in Manchester',
  heroDescription: 'Permanently eliminate stubborn smells from your vehicle — smoke, pet odours, food, damp and more. Professional deep cleaning and ozone treatment.',
  contentSections: [
    {
      type: 'text',
      heading: 'How We Eliminate Car Odours',
      body: 'Masking a smell with air freshener does not work — the odour source remains and returns within days. Our approach is to identify and eliminate the source. We deep clean all surfaces where odour-causing bacteria hide — seats, carpets, headliner, air vents and hidden areas. For severe cases, we use ozone generators that chemically neutralise odour molecules.',
    },
    {
      type: 'list',
      heading: 'Common Odours We Treat',
      items: [
        'Cigarette and vape smoke — deeply embedded in headliner, seats and air system',
        'Pet odours — from hair, saliva, dander and accidents',
        'Food and drink spills — coffee, milk, takeaway',
        'Damp and musty smells — from wet carpets, blocked drains or leak damage',
        'Vomit and biological — deep sanitisation and enzyme treatment',
      ],
    },
  ],
  faqs: [
    { question: 'Can you remove cigarette smoke smell completely?', answer: 'In most cases, yes. Smoke is one of the hardest odours because it permeates every surface including the headliner and air conditioning system. We use a combination of deep cleaning, enzyme treatment and ozone to tackle it from every angle.' },
    { question: 'What is ozone treatment?', answer: 'Ozone (O3) is a powerful oxidising agent that breaks down odour-causing molecules at a chemical level. We run an ozone generator inside the sealed vehicle for 30–60 minutes. It leaves no residue and is completely safe once ventilated.' },
    { question: 'How long does odour removal take?', answer: '2–4 hours including deep clean and ozone treatment. Severe cases may require a second session.' },
  ],
  relatedLinks: [
    { label: 'Interior Valeting', href: '/manchester/car-valeting/interior-valeting' },
    { label: 'Pet Hair Removal', href: '/manchester/car-valeting/pet-hair-removal' },
    { label: 'Upholstery Cleaning', href: '/manchester/car-valeting/upholstery-cleaning' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting' },
  ],
  schemaPrice: '70',
};
