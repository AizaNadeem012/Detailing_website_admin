import type { AreaPageData } from '@/data/types';

export const manchesterAreas: AreaPageData[] = [
  {
    slug: 'city-centre',
    name: 'Manchester City Centre',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Manchester City Centre | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Manchester City Centre. We come to your office, apartment or car park. Ceramic coating, paint correction, full valets. M1–M4 postcodes.',
      keywords: ['car detailing manchester city centre', 'car valeting manchester city centre', 'mobile valeting city centre manchester'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/city-centre',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'City Centre', href: '/manchester/areas/city-centre' },
    ],
    heroTitle: 'Car Detailing & Valeting in Manchester City Centre',
    heroDescription:
      'Professional mobile car care in the heart of Manchester. We bring our fully equipped unit to your office car park, apartment parking area or any city centre location.',
    postcodeAreas: ['M1', 'M2', 'M3', 'M4'],
    coordinates: { latitude: '53.4808', longitude: '-2.2426' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151986.118181911!2d-2.388271290309619!3d53.47233644547979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!5e0!3m2!1sen!2s!4v1771783750556!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Manchester City Centre',
        body: 'Manchester City Centre presents unique challenges for car owners — limited parking, no access to water, and vehicles exposed to urban pollution, construction dust and tight car park scratches. Our fully self-contained mobile unit needs no water or electricity from your location. We bring everything to your office car park, apartment block or any accessible space in the M1–M4 area.',
      },
      {
        type: 'list',
        heading: 'Why City Centre Cars Need Extra Care',
        items: [
          'Urban pollution and brake dust from heavy traffic coats paintwork daily',
          'Multi-storey car park scratches, door dings and concrete pillar marks',
          'Construction dust from ongoing development projects across the city',
          'Bird droppings from pigeon populations around Piccadilly and the Northern Quarter',
          'Road salt spray from gritted city streets in winter months',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you work in underground car parks?',
        answer: 'Yes. Our mobile unit is self-contained with its own power and lighting. We regularly work in underground and multi-storey car parks across the city centre, including those at Deansgate, Spinningfields and Piccadilly.',
      },
      {
        question: 'Do you need a parking space next to my car?',
        answer: 'Ideally yes — one adjacent space for our equipment. If that is not possible, we can carry equipment a short distance. We are flexible and will make it work.',
      },
    ],
    relatedLinks: [
      { label: 'Manchester Car Detailing', href: '/manchester/car-detailing' },
      { label: 'Manchester Car Valeting', href: '/manchester/car-valeting' },
      { label: 'Salford', href: '/manchester/areas/salford' },
      { label: 'Trafford', href: '/manchester/areas/trafford' },
    ],
  },
  {
    slug: 'didsbury',
    name: 'Didsbury',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Didsbury | Mobile Service | SRV Detailing',
      description:
        'Professional mobile car detailing and valeting in Didsbury, South Manchester. Ceramic coating, paint correction, full valets. Serving M20 and surrounding postcodes.',
      keywords: ['car detailing didsbury', 'car valeting didsbury', 'mobile valeting didsbury'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/didsbury',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Didsbury', href: '/manchester/areas/didsbury' },
    ],
    heroTitle: 'Car Detailing & Valeting in Didsbury',
    heroDescription:
      'Professional mobile car care for Didsbury residents. From ceramic coatings for prestige vehicles to regular maintenance valets — we come to your driveway on Wilmslow Road, Barlow Moor Road or anywhere in M20.',
    postcodeAreas: ['M20'],
    coordinates: { latitude: '53.4167', longitude: '-2.2333' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9512.390262919113!2d-2.242731886263875!3d53.41308124666716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb25e64b5ca75%3A0x6fdb3fb871f94cf1!2sDidsbury%2C%20Manchester%2C%20UK!5e0!3m2!1sen!2s!4v1771783815548!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Didsbury',
        body: 'Didsbury is one of South Manchester\'s most affluent suburbs with a high concentration of premium and prestige vehicles. The tree-lined streets of West Didsbury and East Didsbury are beautiful — but those mature trees bring sap, pollen and bird droppings that attack unprotected paintwork. Our mobile detailing and valeting service comes directly to your Didsbury driveway with professional-grade care.',
      },
      {
        type: 'list',
        heading: 'Why Didsbury Vehicles Need Professional Care',
        items: [
          'Heavy tree sap deposits from mature trees along Wilmslow Road and residential streets',
          'Bird droppings from the large bird population in Didsbury\'s green spaces',
          'Leaf litter and organic matter that traps moisture against paint in autumn',
          'Road salt splash from the A34 and surrounding roads in winter',
          'High concentration of premium vehicles that benefit from ceramic protection',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you cover both East and West Didsbury?',
        answer: 'Yes. We cover all of Didsbury including East Didsbury, West Didsbury, and Withington. The entire M20 postcode area is within our regular service zone.',
      },
      {
        question: 'How long does a mobile valet take in Didsbury?',
        answer: 'A mini valet takes 60–90 minutes, a full valet takes 3–4 hours. Detailing services like paint correction and ceramic coating take 6–10 hours depending on vehicle condition.',
      },
    ],
    relatedLinks: [
      { label: 'Manchester Car Detailing', href: '/manchester/car-detailing' },
      { label: 'Chorlton', href: '/manchester/areas/chorlton' },
      { label: 'Sale', href: '/manchester/areas/sale' },
      { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating' },
    ],
  },
  {
    slug: 'chorlton',
    name: 'Chorlton',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Chorlton | Mobile Service | SRV Detailing',
      description:
        'Professional mobile car detailing and valeting in Chorlton, South Manchester. We come to your home or workplace. Serving M21 postcodes.',
      keywords: ['car detailing chorlton', 'car valeting chorlton', 'mobile valeting chorlton'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/chorlton',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Chorlton', href: '/manchester/areas/chorlton' },
    ],
    heroTitle: 'Car Detailing & Valeting in Chorlton',
    heroDescription:
      'Professional mobile car care for Chorlton-cum-Hardy residents. Full range of detailing and valeting services delivered to your door in M21.',
    postcodeAreas: ['M21'],
    coordinates: { latitude: '53.4333', longitude: '-2.2833' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19012.541772391123!2d-2.299810829489497!3d53.44043704137739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bad87e9f80d69%3A0xead1c26661410661!2sChorlton-cum-Hardy%2C%20Manchester%2C%20UK!5e0!3m2!1sen!2s!4v1771783840354!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Chorlton',
        body: 'Chorlton-cum-Hardy\'s leafy streets and proximity to Chorlton Water Park make it a wonderful place to live — but the mature trees, wildlife and Manchester weather mean vehicles need regular professional care. Our mobile service brings everything to your Chorlton driveway or workplace.',
      },
      {
        type: 'list',
        heading: 'Services Popular in Chorlton',
        items: [
          'Full valets for family cars — convenient care without leaving home',
          'Interior deep cleans for pet owners around Chorlton Ees and the Meadows',
          'Paint correction for vehicles affected by tree sap from Chorlton\'s mature trees',
          'Ceramic coating for long-term protection against South Manchester\'s weather',
          'Mini valets for regular maintenance between full services',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you cover Chorlton-cum-Hardy and surrounding areas?',
        answer: 'Yes. We cover all of Chorlton including Chorlton-cum-Hardy, Chorlton Green, and surrounding M21 areas. We also serve nearby Stretford and Didsbury.',
      },
    ],
    relatedLinks: [
      { label: 'Manchester Car Valeting', href: '/manchester/car-valeting' },
      { label: 'Didsbury', href: '/manchester/areas/didsbury' },
      { label: 'Trafford', href: '/manchester/areas/trafford' },
      { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
    ],
  },
  {
    slug: 'salford',
    name: 'Salford',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Salford | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Salford. We serve Salford Quays, MediaCityUK, Ordsall and surrounding M5–M7 postcodes.',
      keywords: ['car detailing salford', 'car valeting salford', 'mobile valeting salford quays'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/salford',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Salford', href: '/manchester/areas/salford' },
    ],
    heroTitle: 'Car Detailing & Valeting in Salford',
    heroDescription:
      'Professional mobile car care across Salford. From Salford Quays and MediaCityUK to Ordsall and Pendleton — we bring premium car care to your location.',
    postcodeAreas: ['M5', 'M6', 'M7'],
    coordinates: { latitude: '53.4833', longitude: '-2.2667' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37979.20133090877!2d-2.3293101348930256!3d53.491688431780005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae0dfe455711%3A0x6df4febf58f5d816!2sSalford%2C%20UK!5e0!3m2!1sen!2s!4v1771783882090!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Salford',
        body: 'Salford\'s mix of waterfront apartments at Salford Quays, urban terraces in Ordsall, and suburban streets in Eccles and Swinton means varied parking situations. Our fully equipped mobile unit adapts to any location — whether you\'re in a MediaCityUK car park or on a residential driveway in Pendleton.',
      },
    ],
    faqs: [
      {
        question: 'Can you work at Salford Quays apartment buildings?',
        answer: 'Yes. We regularly service vehicles at apartment buildings around Salford Quays and MediaCityUK. We work in designated parking areas and underground car parks with our self-contained equipment.',
      },
    ],
    relatedLinks: [
      { label: 'City Centre', href: '/manchester/areas/city-centre' },
      { label: 'Trafford', href: '/manchester/areas/trafford' },
      { label: 'Manchester Car Detailing', href: '/manchester/car-detailing' },
    ],
  },
  {
    slug: 'trafford',
    name: 'Trafford',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Trafford | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Trafford. Serving Trafford Park, Stretford, Urmston and surrounding M16, M32, M41 postcodes.',
      keywords: ['car detailing trafford', 'car valeting trafford', 'mobile valeting stretford', 'car valeting urmston'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/trafford',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Trafford', href: '/manchester/areas/trafford' },
    ],
    heroTitle: 'Car Detailing & Valeting in Trafford',
    heroDescription:
      'Professional mobile car care across the Trafford borough. Stretford, Urmston, Old Trafford, Sale and surrounding areas — we come to you.',
    postcodeAreas: ['M16', 'M32', 'M41'],
    coordinates: { latitude: '53.4403', longitude: '-2.3233' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76088.5790773533!2d-2.448139870904745!3d53.418973450981476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bab879b99092b%3A0x40cf99eed6d3430!2sTrafford%2C%20UK!5e0!3m2!1sen!2s!4v1771783905713!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Trafford',
        body: 'Trafford\'s proximity to the M60 motorway and Trafford Park industrial estate means vehicles in this area face higher-than-average exposure to road grime, industrial fallout and brake dust. Our decontamination washes and ceramic coatings are particularly popular with Trafford residents protecting their paintwork from these daily environmental challenges.',
      },
    ],
    faqs: [
      {
        question: 'Do you cover Stretford, Urmston and Sale?',
        answer: 'Yes. We cover the entire Trafford borough including Stretford, Urmston, Old Trafford, Flixton, Davyhulme and Sale. Sale has its own dedicated area page too.',
      },
    ],
    relatedLinks: [
      { label: 'Sale', href: '/manchester/areas/sale' },
      { label: 'Altrincham', href: '/manchester/areas/altrincham' },
      { label: 'Salford', href: '/manchester/areas/salford' },
      { label: 'Manchester Car Detailing', href: '/manchester/car-detailing' },
    ],
  },
  {
    slug: 'sale',
    name: 'Sale',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Sale | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Sale, Trafford. Professional car care delivered to your home or workplace. M33 postcodes.',
      keywords: ['car detailing sale', 'car valeting sale', 'mobile valeting sale manchester'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/sale',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Sale', href: '/manchester/areas/sale' },
    ],
    heroTitle: 'Car Detailing & Valeting in Sale',
    heroDescription:
      'Professional mobile car care for Sale residents. Full detailing and valeting services delivered to your door in M33.',
    postcodeAreas: ['M33'],
    coordinates: { latitude: '53.4256', longitude: '-2.3241' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38042.6392032858!2d-2.3606195362100806!3d53.420818011746796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bab7ffec440d1%3A0x24be9c8c42b76580!2sSale%2C%20UK!5e0!3m2!1sen!2s!4v1771783932010!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Sale',
        body: 'Sale\'s family-friendly streets and proximity to the Mersey Valley make it a popular residential area with a high standard of vehicle ownership. Our mobile service is ideal for Sale families — have your car professionally cleaned on your driveway while you get on with your day.',
      },
    ],
    faqs: [
      {
        question: 'How far in advance do I need to book?',
        answer: 'We recommend booking 3–5 days ahead for valets and 1–2 weeks for detailing services. We sometimes have same-week availability — call us to check.',
      },
    ],
    relatedLinks: [
      { label: 'Trafford', href: '/manchester/areas/trafford' },
      { label: 'Altrincham', href: '/manchester/areas/altrincham' },
      { label: 'Manchester Car Valeting', href: '/manchester/car-valeting' },
    ],
  },
  {
    slug: 'altrincham',
    name: 'Altrincham',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Altrincham | Mobile Service | SRV Detailing',
      description:
        'Professional mobile car detailing and valeting in Altrincham. Ceramic coating, paint correction, full valets. WA14–WA15 postcodes.',
      keywords: ['car detailing altrincham', 'car valeting altrincham', 'mobile valeting altrincham'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/altrincham',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Altrincham', href: '/manchester/areas/altrincham' },
    ],
    heroTitle: 'Car Detailing & Valeting in Altrincham',
    heroDescription:
      'Professional mobile car care for Altrincham, Hale, Bowdon and Timperley. Premium detailing and valeting for one of South Manchester\'s most prestigious areas.',
    postcodeAreas: ['WA14', 'WA15'],
    coordinates: { latitude: '53.3833', longitude: '-2.3500' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19034.137782376944!2d-2.38405912971256!3d53.3921595695108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a52c64fb162a3%3A0x658e6a972f3186bb!2sAltrincham%2C%20UK!5e0!3m2!1sen!2s!4v1771783954186!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Altrincham',
        body: 'Altrincham, Hale and Bowdon are home to some of Greater Manchester\'s finest vehicles. The area\'s affluent residents expect a premium level of service — and that is exactly what we deliver. Ceramic coatings, paint correction and comprehensive detailing packages are our most popular services in the WA14 and WA15 postcodes.',
      },
    ],
    faqs: [
      {
        question: 'Do you cover Hale, Bowdon and Timperley?',
        answer: 'Yes. We cover the entire Altrincham area including Hale, Hale Barns, Bowdon, Timperley and Broadheath. All WA14 and WA15 postcodes are within our service area.',
      },
    ],
    relatedLinks: [
      { label: 'Sale', href: '/manchester/areas/sale' },
      { label: 'Trafford', href: '/manchester/areas/trafford' },
      { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating' },
    ],
  },
  {
    slug: 'oldham',
    name: 'Oldham',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Oldham | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Oldham. Professional car care at your home or workplace. OL1–OL4 postcodes.',
      keywords: ['car detailing oldham', 'car valeting oldham', 'mobile valeting oldham'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/oldham',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Oldham', href: '/manchester/areas/oldham' },
    ],
    heroTitle: 'Car Detailing & Valeting in Oldham',
    heroDescription:
      'Professional mobile car care across Oldham and surrounding areas. Detailing and valeting brought to your door in OL1–OL4.',
    postcodeAreas: ['OL1', 'OL2', 'OL3', 'OL4'],
    coordinates: { latitude: '53.5408', longitude: '-2.1111' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75878.6255815785!2d-2.1760783121024927!3d53.536217204035744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb0aa67777af1%3A0x18b3b8d9a96b3258!2sOldham%2C%20UK!5e0!3m2!1sen!2s!4v1771783976882!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Oldham',
        body: 'Oldham\'s hillside location and proximity to the Pennines means vehicles face harsher weather conditions than those in central Manchester. Higher rainfall, more frost days and exposed road salt make paint protection particularly valuable for Oldham car owners. Our mobile unit reaches every part of the OL postcode area.',
      },
    ],
    faqs: [
      {
        question: 'Do you travel to Oldham from Stockport?',
        answer: 'Yes. Oldham is well within our regular service area. We travel across all of Greater Manchester from our Stockport base, typically reaching Oldham in around 30 minutes.',
      },
    ],
    relatedLinks: [
      { label: 'Rochdale', href: '/manchester/areas/rochdale' },
      { label: 'Tameside', href: '/manchester/areas/tameside' },
      { label: 'Manchester Car Detailing', href: '/manchester/car-detailing' },
    ],
  },
  {
    slug: 'rochdale',
    name: 'Rochdale',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Rochdale | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Rochdale. We come to your home or workplace. OL11–OL16 postcodes.',
      keywords: ['car detailing rochdale', 'car valeting rochdale', 'mobile valeting rochdale'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/rochdale',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Rochdale', href: '/manchester/areas/rochdale' },
    ],
    heroTitle: 'Car Detailing & Valeting in Rochdale',
    heroDescription:
      'Professional mobile car care for Rochdale and Middleton residents. Full detailing and valeting brought to your door.',
    postcodeAreas: ['OL11', 'OL12', 'OL16'],
    coordinates: { latitude: '53.6097', longitude: '-2.1576' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75720.38639375588!2d-2.274146805467731!3d53.6244652181936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb88ceb3db3ab%3A0x9a885edb20da6527!2sRochdale%2C%20UK!5e0!3m2!1sen!2s!4v1771783998830!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Rochdale',
        body: 'Rochdale and Middleton residents benefit from our fully mobile service — no need to drive to a detailing studio in central Manchester. We bring professional-grade equipment and premium products directly to your Rochdale home or workplace.',
      },
    ],
    faqs: [
      {
        question: 'Do you cover Rochdale and Middleton?',
        answer: 'Yes. We cover all of Rochdale, Middleton, Heywood, Littleborough and surrounding OL postcode areas.',
      },
    ],
    relatedLinks: [
      { label: 'Oldham', href: '/manchester/areas/oldham' },
      { label: 'Bury', href: '/manchester/areas/bury' },
      { label: 'Manchester Car Valeting', href: '/manchester/car-valeting' },
    ],
  },
  {
    slug: 'bury',
    name: 'Bury',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Bury | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Bury. Professional car care at your home or workplace. BL8–BL9 postcodes.',
      keywords: ['car detailing bury', 'car valeting bury', 'mobile valeting bury manchester'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/bury',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Bury', href: '/manchester/areas/bury' },
    ],
    heroTitle: 'Car Detailing & Valeting in Bury',
    heroDescription:
      'Professional mobile car care across Bury, Radcliffe, Prestwich and Whitefield. Detailing and valeting at your door.',
    postcodeAreas: ['BL8', 'BL9'],
    coordinates: { latitude: '53.5933', longitude: '-2.2967' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75759.86807318345!2d-2.3808341071232135!3d53.602456164540136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba2d7be45c869%3A0x5ecbd6be7ddd28b4!2sBury%2C%20UK!5e0!3m2!1sen!2s!4v1771784032274!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Bury',
        body: 'Bury, Radcliffe, Prestwich and Whitefield are well within our mobile service area. Whether you need a quick maintenance valet or a full ceramic coating, we bring everything to your Bury location. No need to drive across Manchester to find a quality detailer.',
      },
    ],
    faqs: [
      {
        question: 'Do you cover Prestwich and Whitefield?',
        answer: 'Yes. We cover all of Bury including Prestwich, Whitefield, Radcliffe, Ramsbottom and Tottington. All BL8 and BL9 postcodes are within our service area.',
      },
    ],
    relatedLinks: [
      { label: 'Bolton', href: '/manchester/areas/bolton' },
      { label: 'Rochdale', href: '/manchester/areas/rochdale' },
      { label: 'Manchester Car Detailing', href: '/manchester/car-detailing' },
    ],
  },
  {
    slug: 'bolton',
    name: 'Bolton',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Bolton | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Bolton. We come to your home or workplace. BL1–BL3 postcodes.',
      keywords: ['car detailing bolton', 'car valeting bolton', 'mobile valeting bolton'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/bolton',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Bolton', href: '/manchester/areas/bolton' },
    ],
    heroTitle: 'Car Detailing & Valeting in Bolton',
    heroDescription:
      'Professional mobile car care for Bolton residents and businesses. Full range of detailing and valeting services delivered to your door.',
    postcodeAreas: ['BL1', 'BL2', 'BL3'],
    coordinates: { latitude: '53.5767', longitude: '-2.4267' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75782.38415086454!2d-2.5367195580672472!3d53.58990179097781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0629dc3b1c93%3A0xcaa40cfafe557822!2sBolton%2C%20UK!5e0!3m2!1sen!2s!4v1771784052363!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Bolton',
        body: 'Bolton car owners no longer need to drive to central Manchester for professional detailing. Our fully equipped mobile unit brings the same studio-quality results directly to your Bolton driveway or business premises. From the town centre to Horwich, Westhoughton and Farnworth — we cover it all.',
      },
    ],
    faqs: [
      {
        question: 'How far is Bolton from your base?',
        answer: 'Bolton is approximately 40 minutes from our Stockport base. It is well within our regular Greater Manchester service area and we visit Bolton regularly.',
      },
    ],
    relatedLinks: [
      { label: 'Wigan', href: '/manchester/areas/wigan' },
      { label: 'Bury', href: '/manchester/areas/bury' },
      { label: 'Manchester Car Valeting', href: '/manchester/car-valeting' },
    ],
  },
  {
    slug: 'wigan',
    name: 'Wigan',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Wigan | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Wigan. Professional car care at your home or workplace. WN1–WN6 postcodes.',
      keywords: ['car detailing wigan', 'car valeting wigan', 'mobile valeting wigan'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/wigan',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Wigan', href: '/manchester/areas/wigan' },
    ],
    heroTitle: 'Car Detailing & Valeting in Wigan',
    heroDescription:
      'Professional mobile car care across Wigan, Leigh and surrounding areas. Detailing and valeting delivered to your door.',
    postcodeAreas: ['WN1', 'WN2', 'WN3', 'WN4', 'WN5', 'WN6'],
    coordinates: { latitude: '53.5450', longitude: '-2.6325' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75876.6183299337!2d-2.7337898120182844!3d53.53733725167684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b04345517a4d3%3A0x5702a66b03f2d953!2sWigan%2C%20UK!5e0!3m2!1sen!2s!4v1771784075705!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Wigan',
        body: 'Wigan and Leigh are at the western edge of Greater Manchester, and quality mobile detailing services can be hard to find. We make regular visits to the Wigan area, bringing the same professional-grade equipment and premium products we use across the rest of our Manchester service zone.',
      },
    ],
    faqs: [
      {
        question: 'Do you cover all of Wigan?',
        answer: 'Yes. We cover Wigan town centre, Leigh, Hindley, Standish, Ashton-in-Makerfield, Golborne and surrounding WN postcodes.',
      },
    ],
    relatedLinks: [
      { label: 'Bolton', href: '/manchester/areas/bolton' },
      { label: 'Manchester Car Detailing', href: '/manchester/car-detailing' },
      { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
    ],
  },
  {
    slug: 'tameside',
    name: 'Tameside',
    location: 'Manchester',
    seo: {
      title: 'Car Detailing & Valeting Tameside | Mobile Service | SRV Detailing',
      description:
        'Mobile car detailing and valeting in Tameside. Ashton-under-Lyne, Stalybridge, Hyde, Denton, Dukinfield. OL5–OL7, SK14–SK16.',
      keywords: ['car detailing tameside', 'car valeting ashton-under-lyne', 'mobile valeting hyde', 'car detailing stalybridge'],
      canonical: 'https://www.srvdetailing.co.uk/manchester/areas/tameside',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Manchester', href: '/manchester' },
      { label: 'Areas', href: '/manchester/areas' },
      { label: 'Tameside', href: '/manchester/areas/tameside' },
    ],
    heroTitle: 'Car Detailing & Valeting in Tameside',
    heroDescription:
      'Professional mobile car care across Tameside — Ashton-under-Lyne, Stalybridge, Hyde, Denton and Dukinfield. We are based locally and know the area well.',
    postcodeAreas: ['OL5', 'OL6', 'OL7', 'SK14', 'SK15', 'SK16'],
    coordinates: { latitude: '53.4833', longitude: '-2.0833' },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75981.5630354119!2d-2.148925866418201!3d53.4787563250574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb61836fca3bf%3A0x40cf99eed6d33d0!2sBorough%20of%20Tameside%2C%20UK!5e0!3m2!1sen!2s!4v1771784095449!5m2!1sen!2s',
    contentSections: [
      {
        type: 'text',
        heading: 'Mobile Car Care in Tameside',
        body: 'Tameside is our home turf — SRV Detailing is based in Dukinfield, right in the heart of the borough. That means faster response times, lower travel costs, and deep local knowledge. Whether you are in Ashton-under-Lyne, Stalybridge, Hyde, Denton, Mossley or Droylsden, we are just minutes away.',
      },
      {
        type: 'list',
        heading: 'Why Tameside Loves SRV Detailing',
        items: [
          'Based in Dukinfield — your local detailer with 22+ years experience',
          'Fastest response times in our service area',
          'Deep knowledge of Tameside\'s specific environmental challenges',
          'Regular customers across Ashton, Stalybridge, Hyde and Denton',
          'Supporting the local Tameside community since 2003',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are you based in Tameside?',
        answer: 'Yes! We are based in Dukinfield, Tameside. It is our home borough and we know every street. Tameside customers benefit from the shortest travel times in our entire service area.',
      },
    ],
    relatedLinks: [
      { label: 'Oldham', href: '/manchester/areas/oldham' },
      { label: 'Stockport', href: '/stockport' },
      { label: 'Manchester Car Detailing', href: '/manchester/car-detailing' },
      { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating' },
    ],
  },
];

// Helper functions
export function getManchesterAreaBySlug(slug: string): AreaPageData | undefined {
  return manchesterAreas.find((area) => area.slug === slug);
}

export function getAllManchesterAreaSlugs(): string[] {
  return manchesterAreas.map((area) => area.slug);
}
