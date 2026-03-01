import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const miniValetStockport: ServicePageData = {
  slug: 'mini-valet',
  name: 'Mini Valet Stockport',
  seo: {
    title: 'Mini Valet Stockport | Quick Car Clean in 60–90 Minutes | SRV Detailing',
    description: 'Fast mini valet in Stockport. Exterior hand wash, wheel clean, interior vacuum and dashboard wipe in 60–90 minutes. Mobile service to all SK postcodes — no queuing, no driving anywhere.',
    keywords: ['mini valet stockport', 'quick car clean stockport', 'car wash stockport', 'mobile mini valet', 'maintenance valet stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/mini-valet',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Mini Valet', href: '/stockport/car-valeting/mini-valet' },
  ],
  heroTitle: 'Mini Valet in Stockport',
  heroDescription: 'A focused 60–90 minute professional clean — exterior hand wash, wheel care, interior vacuum and dashboard wipe. The right service for regular maintenance between full valets, delivered to your Stockport door.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is a Mini Valet?',
      bodyParagraphs: [
        'A mini valet is a streamlined professional cleaning service covering the most important maintenance areas of both the exterior and interior of your vehicle in a focused 60 to 90 minute session. It is not a quick drive-through wash — it is a professional hand wash using the correct techniques and chemicals, combined with an interior vacuum and surface wipe, carried out at your home or workplace by SRV Detailing.',
        'The mini valet is designed for regular maintenance: keeping a reasonably clean car looking its best between full valets rather than restoring a heavily soiled one. It is the service most Stockport customers use on a monthly or fortnightly schedule, booking a full valet every two to three months when a deeper interior clean is needed. Together, these form a practical, cost-effective care routine for any vehicle.',
        'Unlike a car wash, a mini valet includes tyre dressing, window cleaning, and a dashboard wipe — giving you the level of finish a professional car wash would provide, but with hand-wash safety for your paintwork and the convenience of a doorstep service. No queuing, no driving to a car wash site, and no automated brushes scratching your clear coat.',
      ],
    },
    {
      type: 'process',
      heading: 'What Happens During a Mini Valet',
      items: [
        'Snow foam pre-wash: traffic film remover applied with a foam lance across all exterior panels, allowed to dwell and dissolve road grime before contact',
        'Pressure rinse: snow foam and loosened contamination flushed from the vehicle',
        'Two-bucket hand wash: microfibre wash mitt used panel by panel with pH-neutral shampoo; grit-guard rinse bucket prevents contamination of the wash solution',
        'Wheel and tyre clean: wheel faces and tyres scrubbed and rinsed; tyre dressing applied for a satin finish',
        'Microfibre drying: all panels dried with large plush microfibre drying towels — no chamois, no drag marks',
        'Interior vacuum: seats, carpets, and boot vacuumed; loose debris removed from door pockets',
        'Dashboard and console wipe: dashboard, centre console, and steering wheel wiped with interior cleaner',
        'Interior glass: windscreen and side windows cleaned streak-free from inside',
        'Quick detailer: spray detailer applied to all painted exterior surfaces for gloss and light protection',
      ],
    },
    {
      type: 'list',
      heading: 'Everything Included in a Mini Valet',
      items: [
        'Snow foam pre-wash and two-bucket hand wash with pH-neutral shampoo',
        'Wheel face and tyre cleaning with tyre dressing applied to finish',
        'Microfibre hand drying of all panels — no streaks or drag marks',
        'Interior vacuum of all seats, carpets, and boot area',
        'Dashboard and console wipe with interior cleaner',
        'Interior glass clean — windscreen and windows streak-free',
        'Quick detailer spray on exterior painted surfaces for gloss and light protection',
      ],
    },
    {
      type: 'checklist',
      heading: 'Why Regular Mini Valets Matter in Stockport',
      items: [
        'Road salt from Stockport\'s winter gritting programme accumulates on body panels and wheels between washes — removing it every 2 to 4 weeks prevents progressive lacquer and metal damage',
        'Traffic film from the A6, M60, and A560 commuter routes deposits a grey contamination layer that dulls paintwork within days of washing',
        'Bird droppings and tree sap from Stockport\'s residential tree canopies (Bramhall, Cheadle Hulme, Marple) should be removed promptly before acid damage sets in',
        'Interior dust, crumbs, and weekly-use debris builds up quickly in family and commuter vehicles — a regular vacuum and wipe prevents deep soiling',
        'Quick detailer applied at each mini valet maintains a fresh wax layer on the paint, improving water beading and contamination resistance',
      ],
    },
    {
      type: 'text',
      heading: 'Mini Valet vs Full Valet: Choosing the Right Service',
      body: 'A mini valet is the correct choice when your vehicle needs a routine clean and refresh — the exterior is lightly soiled, the interior is generally tidy, and you want a professional result quickly. A full valet is the right choice when the interior needs comprehensive attention: upholstery treatment, stain removal, a deep dashboard clean, or when the car has not been properly cleaned for several months. Most SRV Detailing customers in Stockport use both services in rotation — a mini valet monthly for maintenance and a full valet quarterly for a thorough reset.',
    },
    {
      type: 'checklist',
      heading: 'Who Mini Valeting Is Ideal For',
      items: [
        'Regular maintenance customers who want their car kept clean without waiting for it to get heavily soiled',
        'Busy commuters and professionals who need a quick, efficient service that fits around their schedule',
        'Customers between full valets who want to maintain appearance without the time and cost of a complete service',
        'Drivers whose interiors are generally tidy but whose exteriors need regular cleaning from road use',
        'Anyone who prefers professional hand-wash results over automated car washes on a regular basis',
        'Pre-weekend or pre-occasion cleaning for drivers who want their car looking good at a specific time',
        'Fleet and business vehicle maintenance where a regular presentable standard needs to be maintained',
      ],
    },
    {
      type: 'comparison',
      heading: 'Mini Valet vs Full Valet: Side by Side',
      comparison: {
        headers: ['Service element', 'Mini Valet', 'Full Valet'],
        rows: [
          ['Exterior wash', 'Snow foam, hand wash, dry, quick detailer', 'Snow foam, hand wash, tar/iron decontamination, dry, wax'],
          ['Wheel cleaning', 'Wheel face and tyre clean, tyre dressing', 'Iron fallout removal, barrel/spoke/caliper brushes, tyre dressing'],
          ['Interior vacuum', 'Seats, carpets, boot', 'Deep vacuum including crevices, seat rails, all door pockets'],
          ['Dashboard and trim', 'Quick wipe of dashboard and console', 'Full clean and protectant treatment on all interior surfaces'],
          ['Upholstery', 'Not included (surface only)', 'Spot cleaning of stains, leather conditioning where applicable'],
          ['Interior glass', 'Windscreen and side windows', 'All glass including rear window and wing mirrors'],
          ['Time', '60–90 minutes', '3–4 hours'],
          ['Price from', '£50', '£120'],
        ],
      },
    },
    {
      type: 'text',
      heading: 'Mini Valet Service Across All Stockport Postcodes',
      body: 'SRV Detailing delivers mini valets across the full SK postcode area from our Dukinfield base. We cover Stockport town centre (SK1–SK3), Heaton Moor (SK4), Reddish (SK5), Marple and Romiley (SK6), Bramhall and Hazel Grove (SK7), Cheadle and Cheadle Hulme (SK8), and across SK10 to SK12. Our mobile unit is fully self-contained — no hosepipe or electricity needed from your property. Available 7 days a week with early morning slots for commuters.',
    },
  ],
  faqs: [
    {
      question: 'How long does a mini valet take in Stockport?',
      answer: '60 to 90 minutes for a standard hatchback or saloon. Larger vehicles — estates, SUVs — take 90 minutes to 2 hours. If you need the car back quickly, let us know when booking and we will prioritise accordingly.',
    },
    {
      question: 'How often should I get a mini valet?',
      answer: 'Most Stockport customers find fortnightly or monthly mini valets ideal for regular maintenance. Vehicles used daily on the A6 or M60, parked under trees, or with children and pets on board benefit from more frequent cleaning — every 2 to 3 weeks keeps contamination manageable and prevents build-up.',
    },
    {
      question: 'Is a mini valet enough or do I need a full valet?',
      answer: 'A mini valet is right when your car is in reasonable condition and needs a professional clean and refresh. If the interior has significant staining, a strong odour, or has not been properly cleaned for several months, a full valet will give you better results. If you are unsure, describe your vehicle\'s condition when booking and we will advise.',
    },
    {
      question: 'What is not included in a mini valet?',
      answer: 'The mini valet does not include upholstery shampoo or stain removal, leather conditioning, deep crevice cleaning, tar or iron decontamination on the bodywork, or wax protection (a quick detailer is applied instead). These are covered in the full valet or specialist add-on services.',
    },
    {
      question: 'How much does a mini valet cost in Stockport?',
      answer: 'Mini valets start from £50 for a standard hatchback or saloon. Larger vehicles start from £60 to £65. There are no call-out fees for customers within SK postcodes — we are locally based.',
    },
    {
      question: 'Do you need anything from my property for a mini valet?',
      answer: 'Nothing at all. We carry our own water supply and generator. We need safe access to your vehicle and a parking space to work alongside it — nothing else.',
    },
    {
      question: 'Can I set up a regular mini valet schedule in Stockport?',
      answer: 'Yes — regular booking customers are a significant part of our Stockport business. We can arrange fortnightly or monthly slots at a consistent time, with priority rescheduling if needed. Contact us to discuss a regular arrangement.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Stockport', href: '/stockport/car-valeting/full-valet', description: 'Comprehensive interior and exterior clean every 2–3 months' },
    { label: 'Exterior Valeting Stockport', href: '/stockport/car-valeting/exterior-valeting', description: 'Exterior-only service when the interior is fine' },
    { label: 'Car Valeting Prices Stockport', href: '/stockport/car-valeting/prices', description: 'Full pricing guide for all valeting services' },
    { label: 'Mobile Car Valeting Stockport', href: '/stockport/car-valeting/mobile-valeting', description: 'Self-contained mobile service across all SK postcodes' },
    { label: 'Car Wash Stockport', href: '/stockport/car-wash', description: 'Quick hand car wash service' },
    { label: 'Car Valeting Stockport', href: '/stockport/car-valeting', description: 'All valeting services for Stockport' },
    { label: 'How Often Should You Valet?', href: '/guides/how-often-should-you-valet-your-car', description: 'Setting the right cleaning schedule for your vehicle' },
  ],
  schemaPrice: '50',
};
