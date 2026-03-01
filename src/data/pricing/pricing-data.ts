import type { PricingPageData } from '@/data/types';

export const detailingPricing: PricingPageData = {
  slug: 'car-detailing',
  title: 'Car Detailing Prices',
  seo: {
    title: 'Car Detailing Prices Manchester & Stockport | SRV Detailing',
    description:
      'Car detailing prices for Manchester and Stockport. Ceramic coating from £300, paint correction from £250, full details from £500. Transparent pricing, no hidden costs.',
    keywords: ['car detailing prices', 'ceramic coating cost', 'paint correction price', 'detailing prices manchester'],
    canonical: 'https://www.srvdetailing.co.uk/pricing/car-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Car Detailing', href: '/pricing/car-detailing' },
  ],
  heroTitle: 'Car Detailing Prices',
  heroDescription:
    'Transparent pricing for all our detailing services. No hidden costs, no surprises — just honest pricing for professional work.',
  introText:
    'All prices are starting prices for standard-sized vehicles (hatchbacks and saloons). Larger vehicles (SUVs, estates, vans) are priced higher. Final quotes are provided after assessing your vehicle\'s size and condition. All packages include mobile service to your location.',
  tiers: [
    {
      name: 'Single-Stage Correction',
      price: 'From £250',
      description: 'Light swirl mark removal and gloss enhancement. Ideal for well-maintained vehicles.',
      features: [
        'Full decontamination wash',
        'Clay bar treatment',
        'Single-stage machine polish',
        'Sealant or wax protection',
        'Interior wipe-down',
      ],
      vehicleSizes: [
        { size: 'Small (Hatchback)', price: '£250' },
        { size: 'Medium (Saloon/Estate)', price: '£300' },
        { size: 'Large (SUV/Van)', price: '£380' },
      ],
    },
    {
      name: 'Two-Stage Correction + Coating',
      price: 'From £500',
      description: 'Comprehensive correction and ceramic coating. Our most popular detailing package.',
      features: [
        'Full decontamination wash',
        'Clay bar treatment',
        'Two-stage machine polish (cutting + refining)',
        '2-year ceramic coating',
        'Wheel face coating',
        'Glass coating',
        'Interior deep clean',
        'Aftercare kit included',
      ],
      popular: true,
      vehicleSizes: [
        { size: 'Small (Hatchback)', price: '£500' },
        { size: 'Medium (Saloon/Estate)', price: '£650' },
        { size: 'Large (SUV/Van)', price: '£800' },
      ],
    },
    {
      name: 'Premium Detail + 5yr Coating',
      price: 'From £900',
      description: 'Multi-stage correction with premium 5+ year ceramic coating. The ultimate protection.',
      features: [
        'Full decontamination wash',
        'Clay bar treatment',
        'Multi-stage machine polish',
        '5+ year premium ceramic coating',
        'Wheel face ceramic coating',
        'Glass hydrophobic coating',
        'Trim and plastic coating',
        'Full interior detail and leather conditioning',
        'IR lamp curing',
        'Aftercare kit + annual check-up',
      ],
      vehicleSizes: [
        { size: 'Small (Hatchback)', price: '£900' },
        { size: 'Medium (Saloon/Estate)', price: '£1,100' },
        { size: 'Large (SUV/Van)', price: '£1,400' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Why do prices vary by vehicle size?',
      answer: 'Larger vehicles have more surface area, which means more time for polishing, more product for coating, and more interior to clean. An SUV can take twice as long as a hatchback for the same service.',
    },
    {
      question: 'Are there any hidden costs?',
      answer: 'No. We quote a fixed price based on your vehicle size and chosen package. The only variable is if additional correction is needed beyond the standard package — we\'ll always discuss this with you first.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'For premium packages over £500, we can discuss payment arrangements. Contact us to discuss options.',
    },
    {
      question: 'Is mobile service included in the price?',
      answer: 'Yes. All prices include mobile service to your location within Greater Manchester and Stockport. No extra travel charges.',
    },
  ],
  relatedLinks: [
    { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View valeting packages' },
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing', description: 'Our detailing services' },
    { label: 'Book Now', href: '/booking', description: 'Get a quote today' },
  ],
};

export const valetingPricing: PricingPageData = {
  slug: 'car-valeting',
  title: 'Car Valeting Prices',
  seo: {
    title: 'Car Valeting Prices Manchester & Stockport | SRV Detailing',
    description:
      'Car valeting prices for Manchester and Stockport. Mini valet from £50, full valet from £120. Transparent pricing, mobile service included.',
    keywords: ['car valeting prices', 'full valet cost', 'mini valet price', 'valeting prices manchester'],
    canonical: 'https://www.srvdetailing.co.uk/pricing/car-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Car Valeting', href: '/pricing/car-valeting' },
  ],
  heroTitle: 'Car Valeting Prices',
  heroDescription:
    'Transparent pricing for all our valeting packages. Mobile service included — we come to your location at no extra charge.',
  introText:
    'All prices are starting prices for standard-sized vehicles. Larger vehicles (SUVs, estates, vans) are priced higher. Every package includes mobile service to your location across Manchester and Stockport.',
  tiers: [
    {
      name: 'Mini Valet',
      price: 'From £50',
      description: 'Quick maintenance clean in 60–90 minutes. Perfect between full valets.',
      features: [
        'Exterior wash (snow foam + hand wash)',
        'Wheel face clean',
        'Interior vacuum',
        'Dashboard wipe',
        'Glass clean inside and out',
      ],
      vehicleSizes: [
        { size: 'Small (Hatchback)', price: '£50' },
        { size: 'Medium (Saloon/Estate)', price: '£65' },
        { size: 'Large (SUV/Van)', price: '£80' },
      ],
    },
    {
      name: 'Full Valet',
      price: 'From £120',
      description: 'Comprehensive interior and exterior clean. Our most popular valeting package.',
      features: [
        'Snow foam pre-wash + two-bucket hand wash',
        'Clay bar decontamination',
        'Wheel and tyre deep clean + dressing',
        'Full interior vacuum and deep clean',
        'Upholstery treatment (fabric or leather)',
        'Dashboard and trim dressing',
        'Glass clean inside and out',
        'Wax or sealant protection',
        'Door shut cleaning',
      ],
      popular: true,
      vehicleSizes: [
        { size: 'Small (Hatchback)', price: '£120' },
        { size: 'Medium (Saloon/Estate)', price: '£150' },
        { size: 'Large (SUV/Van)', price: '£190' },
      ],
    },
    {
      name: 'Premium Valet',
      price: 'From £180',
      description: 'Our most thorough valet with extra interior attention and extended protection.',
      features: [
        'Everything in Full Valet',
        'Engine bay clean',
        'Leather deep clean and conditioning',
        'Carpet and upholstery extraction',
        'Odour removal treatment',
        'Extended sealant protection (3+ months)',
        'Tyre and arch dressing',
        'Final detail inspection',
      ],
      vehicleSizes: [
        { size: 'Small (Hatchback)', price: '£180' },
        { size: 'Medium (Saloon/Estate)', price: '£220' },
        { size: 'Large (SUV/Van)', price: '£280' },
      ],
    },
  ],
  faqs: [
    {
      question: 'How often should I get my car valeted?',
      answer: 'A full valet every 4–6 weeks is ideal. Between full valets, a monthly mini valet keeps things fresh. If your car has a ceramic coating, quarterly valeting is usually sufficient.',
    },
    {
      question: 'Do you offer regular booking discounts?',
      answer: 'Yes. Customers who book standing fortnightly or monthly appointments receive priority scheduling and loyalty pricing. Contact us for details.',
    },
    {
      question: 'Is the mobile service included?',
      answer: 'Yes. All prices include mobile service to your location within Greater Manchester and Stockport. No travel surcharges.',
    },
  ],
  relatedLinks: [
    { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View detailing packages' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting', description: 'Our valeting services' },
    { label: 'Book Now', href: '/booking', description: 'Get a quote today' },
  ],
};
