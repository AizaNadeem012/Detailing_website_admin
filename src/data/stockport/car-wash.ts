import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const carWashStockport: ServicePageData = {
  slug: 'car-wash',
  name: 'Car Wash Stockport',
  seo: {
    title: 'Car Wash Stockport | Mobile Hand Car Wash | SRV Detailing',
    description:
      'Professional mobile hand car wash in Stockport. We come to your home or workplace across all SK postcodes — no queues, no brushes. Hand wash, rinse and dry from £30.',
    keywords: [
      'car wash stockport',
      'hand car wash stockport',
      'mobile car wash stockport',
      'car wash near me stockport',
      'mobile hand car wash stockport',
      'car wash at home stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-wash',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Wash', href: '/stockport/car-wash' },
  ],
  heroTitle: 'Mobile Car Wash in Stockport',
  heroDescription:
    'Based in Dukinfield, we are just minutes from every Stockport postcode. Our mobile hand car wash comes to your driveway or workplace — fully self-contained, no water or electricity needed from you.',
  contentSections: [
    {
      type: 'text',
      heading: 'Hand Car Wash vs Automated Car Wash in Stockport',
      body: 'Automated car washes with rotating brushes are convenient but damaging. The brushes trap grit and drag it across your paintwork, creating swirl marks that dull the finish over time. Our mobile hand car wash uses the professional two-bucket method — a wash bucket with pH-neutral shampoo and a separate rinse bucket — so dirt is lifted away safely. Every panel is washed by hand and dried with soft microfibre towels. The result is a consistently cleaner, safer wash every time.',
    },
    {
      type: 'list',
      heading: "What's Included",
      items: [
        'Snow foam pre-wash to break down road grime and brake dust before contact',
        'Safe two-bucket hand wash with pH-neutral shampoo',
        'Thorough rinse and hand dry with premium microfibre drying towels',
        'Wheel face and barrel clean, tyre cleaning and tyre shine',
        'Wheel arch blowout to remove trapped mud and debris',
        'Door shuts, fuel cap and jambs wiped down',
        'Quick detailer sprayed over all painted surfaces for gloss and light protection',
      ],
    },
    {
      type: 'text',
      heading: 'Stockport Coverage — All SK Postcodes',
      body: 'We cover every SK postcode from our Dukinfield base, typically arriving within 20–30 minutes. This includes SK1–SK3 (Stockport town centre, Edgeley), SK4 (Heaton Moor, Heaton Mersey, Heaton Chapel), SK5 (Reddish), SK6 (Marple, Bredbury, Romiley, Woodley), SK7 (Bramhall, Hazel Grove, Stepping Hill), SK8 (Cheadle, Cheadle Hulme, Heald Green, Gatley), and SK12 (Poynton). No travel surcharge applies within standard SK postcode coverage.',
    },
    {
      type: 'process',
      heading: 'How It Works',
      items: [
        'Book online or call — pick a date and time to suit your schedule',
        'We arrive at your Stockport address with all water, equipment and products',
        'Snow foam pre-soak applied across the full vehicle',
        'Full hand wash, rinse and microfibre dry — wheels and tyres included',
        'Door shuts, jambs and tyre shine applied to finish',
        'Quick detailer applied for a glossy, protected result',
      ],
    },
    {
      type: 'text',
      heading: 'Upgrade to a Valet or Full Detail',
      body: 'A car wash keeps the exterior clean. If your vehicle needs a deeper clean or longer-term protection, our Stockport car valeting and detailing services take it further. Our mini valet adds a full interior clean, dashboard wipe and glass clean. Our full valet covers the complete vehicle inside and out. For paintwork restoration or ceramic coating protection, explore our full car detailing range.',
    },
  ],
  faqs: [
    {
      question: 'How much does a mobile car wash in Stockport cost?',
      answer: 'Our hand car wash starts from £30 for small hatchbacks, £40 for medium saloon or estates, and £50 for large SUVs or vans. The price includes snow foam, hand wash, rinse, dry, wheels, tyres and quick detailer. No hidden charges for travel within SK postcodes.',
    },
    {
      question: 'Do you need access to a hosepipe or power supply?',
      answer: 'No — our mobile van carries its own water tank and generator. We are completely self-contained. All we need is safe access to park next to your vehicle.',
    },
    {
      question: 'Which Stockport areas do you cover?',
      answer: 'We cover all SK postcodes including Bramhall, Cheadle, Cheadle Hulme, Hazel Grove, Marple, Heaton Moor, Edgeley, Reddish, Bredbury, Romiley, Woodley, Heald Green, Gatley, Poynton, and Stockport town centre. We are based in Dukinfield (SK16) so can reach most Stockport addresses within 20–30 minutes.',
    },
    {
      question: 'How long does a mobile car wash take?',
      answer: 'Roughly 45–60 minutes for a hatchback, 60–75 minutes for a saloon or estate, and up to 90 minutes for a large SUV or van. Interior add-ons extend the time accordingly.',
    },
    {
      question: 'Can I arrange a regular car wash in Stockport?',
      answer: 'Yes — many of our Stockport customers book fortnightly or monthly. Regular booking customers receive a consistent time slot and priority diary access. Get in touch to discuss a regular schedule.',
    },
  ],
  relatedLinks: [
    { label: 'Mini Valet Stockport', href: '/stockport/car-valeting/mini-valet' },
    { label: 'Full Valet Stockport', href: '/stockport/car-valeting/full-valet' },
    { label: 'Exterior Valeting Stockport', href: '/stockport/car-valeting/exterior-valeting' },
    { label: 'Car Detailing Stockport', href: '/stockport/car-detailing' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '30',
};
