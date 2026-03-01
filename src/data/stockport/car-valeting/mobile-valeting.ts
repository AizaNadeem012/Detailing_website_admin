import { MapPin } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

/**
 * Mobile Car Valeting — Stockport
 *
 * Holistic SEO content following entity-based topical authority principles.
 * Primary entity: Mobile Car Valeting
 * Location entity: Stockport (SK postcodes), Greater Manchester
 *
 * Entities covered:
 *   Tools      — snow foam lance, pressure washer, two-bucket system, microfibre mitts,
 *                clay bar, detailing brushes, wet/dry vacuum, steam cleaner, drying towels
 *   Chemicals  — pH-neutral shampoo, traffic film remover, iron fallout remover,
 *                glass cleaner, tyre dressing, interior protectant, anti-bacterial spray
 *   Surfaces   — clear coat, lacquer, alloy wheels, tyres, rubber seals, door shuts,
 *                dashboard, steering wheel, upholstery, carpets, windows, trim
 *   Problems   — road grime, brake dust, bird dropping acid etching, tar spots,
 *                road salt, iron contamination, pet hair, interior odours, mildew, UV fade
 *   Benefits   — paint preservation, resale value, time saving, interior hygiene,
 *                hydrophobic protection, contaminant prevention
 *   Processes  — pre-inspection, snow foam pre-wash, two-bucket hand wash,
 *                wheel decontamination, clay bar treatment, drying, vacuuming, glass clean
 *   Location   — Stockport, SK1–SK12, Cheadle Hulme, Bramhall, Hazel Grove,
 *                Heaton Moor, Reddish, Marple, Greater Manchester, M60 corridor
 *
 * Word count target: 1800+ words across all content sections.
 */

export const mobileValetingStockport: ServicePageData = {
  slug: 'mobile-valeting',
  name: 'Mobile Car Valeting',
  seo: {
    title: 'Mobile Car Valeting Stockport | SRV Detailing | We Come to You',
    description:
      'Professional mobile car valeting in Stockport. Fully self-contained unit — no water or electricity needed from you. Serving all SK postcodes including Cheadle Hulme, Bramhall and Hazel Grove. Book online or call today.',
    keywords: [
      'mobile car valeting stockport',
      'mobile valeting stockport',
      'mobile car wash stockport',
      'mobile car valet stockport',
      'valeting at home stockport',
      'professional mobile valeting SK postcodes',
      'car valeting cheadle hulme',
      'car valeting bramhall',
      'mobile detailing greater manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/mobile-valeting',
  },
  icon: MapPin,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Mobile Valeting', href: '/stockport/car-valeting/mobile-valeting' },
  ],
  heroTitle: 'Mobile Car Valeting in Stockport',
  heroDescription:
    'A fully equipped mobile unit comes to your home, office, or any Stockport location. Self-contained — no water, electricity, or travel required from you.',
  imageKey: 'exterior',
  contentSections: [
    // ------------------------------------------------------------------ 1
    {
      type: 'text',
      heading: 'What Is Mobile Car Valeting?',
      bodyParagraphs: [
        'Mobile car valeting is a professional vehicle cleaning and presentation service delivered directly to your location — your home driveway, workplace car park, or any accessible spot across the Stockport area. Unlike a fixed detailing studio or a drive-through car wash, a mobile valet unit is entirely self-contained: SRV Detailing arrives with its own fresh water supply, power generator, professional-grade chemicals, and all equipment needed to complete the job. You provide nothing except access to your vehicle.',
        'The term valeting covers the full range of cleaning and presentation work on a motor vehicle — exterior washing, wheel and tyre cleaning, glass work, and a comprehensive interior clean covering upholstery, carpets, dashboard, door cards, and trim. A professional mobile valet is substantially more thorough than an automated car wash: we use pH-neutral shampoos formulated to protect existing wax and sealant layers, two-bucket hand wash techniques that dramatically reduce the risk of swirl marks, and purpose-built detailing brushes for intricate areas such as alloy wheel spokes, door shuts, and air vents.',
        'Mobile car valeting is distinct from car detailing. Professional detailing is a paint-focused discipline encompassing decontamination, machine polishing, paint correction, and the application of protective treatments such as ceramic coatings or paint protection film. Valeting is a deep cleaning and presentation service — the essential foundation on which detailing work is built. For the majority of drivers across Stockport and Greater Manchester, regular mobile valeting is the single most cost-effective way to protect a vehicle\'s condition, appearance, and long-term market value.',
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      type: 'process',
      heading: 'How Mobile Valeting Works: Step by Step',
      items: [
        'Pre-inspection — we assess paint condition, identify existing damage, bird dropping etching, heavy contamination, or staining that may require specific treatment, and confirm the scope with you before beginning work.',
        'Snow foam pre-wash — a thick layer of pH-balanced traffic film remover (TFR) is applied across the entire vehicle using a foam lance. The product dwells on the surface, chemically dissolving and suspending road grime, diesel soot, and organic contamination before any physical contact is made with the paintwork.',
        'Pressure rinse — the snow foam — along with the contaminants it has lifted — is fully rinsed from the vehicle, ensuring a clean surface before hand washing begins.',
        'Two-bucket hand wash — a clean microfibre wash mitt is loaded from the shampoo bucket and worked methodically panel by panel from the roof down. Spent shampoo solution is discharged into a separate rinse bucket fitted with a grit guard, preventing abrasive particles from re-entering the wash mitt and inflicting fine scratches on the clear coat.',
        'Wheel and tyre decontamination — an iron fallout remover spray is applied to alloy wheels. The product reacts with ferrous brake dust particles embedded in the wheel surface, turning purple-red on contact and chemically dissolving contamination before rinsing. Multiple detailing brushes address the barrel, spokes, caliper faces, and tyre sidewalls.',
        'Final rinse and microfibre drying — the vehicle is thoroughly rinsed and dried immediately using large, clean, plush microfibre drying towels. We do not use chamois leather, which can harbour abrasive grit and cause fine scratching across painted surfaces.',
        'Interior vacuum — all seats, carpets, boot liner, and door pockets are vacuumed to a high standard. Detailing crevice tools clear accumulated debris from between seat rails, gear lever surrounds, and dashboard air vents where a domestic vacuum cannot reach effectively.',
        'Dashboard and interior wipe-down — hard interior surfaces including the dashboard, door cards, centre console, and steering wheel are cleaned and treated with a rubber- and plastic-safe interior protectant. This product cleans, conditions, and provides UV protection against fading and brittleness.',
        'Glass clean — all interior glass surfaces are cleaned with a dedicated automotive glass cleaner and polished to a streak-free, optically clear finish. Exterior glass is cleaned as standard on a full valet.',
        'Finishing and quality check — tyres are dressed with a water-based tyre dressing for a clean satin finish. Faded plastic exterior trim is treated where included in the service. A final walk-around inspection ensures the vehicle meets the quality standard before we leave.',
      ],
    },
    // ------------------------------------------------------------------ 3
    {
      type: 'list',
      heading: 'Professional Equipment Used on Every Valet',
      body: 'Professional mobile valeting demands purpose-built automotive equipment — not domestic cleaning products or household chemicals. Every valet SRV Detailing carries out in Stockport uses the following specialist tools and formulations.',
      items: [
        'Petrol pressure washer and professional foam lance — delivers consistent high-pressure pre-rinse and snow foam application across all panel sections',
        'pH-neutral car shampoo — formulated to be safe on wax, paint sealant, and ceramic coating layers without stripping existing protection',
        'Iron fallout remover — chemically dissolves ferrous brake dust contamination bonded to alloy wheel surfaces, reacting visibly on contact',
        'Traffic film remover (TFR) — degreses road film, diesel particulate, and oil contamination from lower panels, sills, and wheel arches',
        'Two-bucket wash system with grit guards — physically separates clean shampoo solution from contaminated rinse water',
        'Multiple microfibre wash mitts, drying towels, and detailing cloths — individual clean cloths used per surface type to prevent cross-contamination',
        'Professional wet/dry vacuum with detailing attachments — high-suction removal of dirt, crumbs, pet hair, and debris from deep within upholstery fibres',
        'Interior protectant and anti-bacterial spray — cleans, conditions, and sanitises plastics, rubber, vinyl, and leather surfaces while eliminating bacteria',
        'Automotive glass cleaner — leaves windows and mirrors optically clear and smear-free without streaking',
        'Water-based tyre dressing — provides a clean satin finish and does not sling onto paintwork when the vehicle is driven',
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      type: 'checklist',
      heading: 'Vehicle Problems Mobile Valeting Addresses',
      body: 'Each of the following issues either causes lasting or permanent damage if left untreated, or significantly degrades a vehicle\'s presentation quality and resale value.',
      items: [
        'Brake dust contamination on alloy wheels — fine ferrous particles from brake pads and discs embed into wheel lacquer and become acidic with heat cycles, causing progressive pitting and permanent staining',
        'Winter road salt deposits — the Stockport Borough road network is heavily gritted from October through March. Sodium chloride accumulates in wheel arches, door sills, underbody seams, and body panel joints where it accelerates corrosion',
        'Traffic film and diesel soot — vehicles commuting on the A6, M60, A555, or Stockport ring road accumulate a visible grey film of exhaust particulate and road grime within days of cleaning',
        'Bird dropping acid etching — bird droppings contain uric acid that begins attacking the clear coat within hours; in warm or sunny weather, permanent etch marks can form within a single day if not removed promptly',
        'Tar spot contamination — road bitumen, particularly from freshly surfaced roads, adheres to lower painted panels and cannot be removed safely by conventional washing alone',
        'Interior bacterial contamination — a car steering wheel can harbour significantly more bacteria than most public surfaces; professional interior cleaning with anti-bacterial products eliminates this hygiene risk',
        'Pet hair and allergens embedded in upholstery — requires specialist vacuuming attachments and rubber bristle tools to extract hair and dander from fabric weaves and carpet pile effectively',
        'UV-degraded exterior plastic trim — unprotected ABS plastic on door handles, mirror housings, bumpers, and roof rails fades to a chalky grey colour and becomes brittle; regular treatment with protectant preserves colour and flexibility',
      ],
    },
    // ------------------------------------------------------------------ 5
    {
      type: 'text',
      heading: 'Why Regular Valeting Matters in Stockport\'s Climate',
      bodyParagraphs: [
        'Stockport sits within one of the wettest regions in England. Greater Manchester records in excess of 800mm of annual rainfall — significantly above the UK national average of approximately 600mm. Persistent moisture creates conditions for water spotting on glass and paintwork, promotes mildew and mould growth inside vehicles, and keeps road contaminants in a mobile, chemically active state rather than drying and falling off harmlessly. Drivers across the SK postcode area face paint contamination challenges that are more severe and more frequent than those experienced in drier parts of the country.',
        'Winter road management across Stockport Borough involves sustained pre-gritting and reactive salting of all major routes through the SK1 to SK12 postcode network. This includes the A6 (Stockport to Manchester corridor through Heaton Chapel and Levenshulme), the A560 (Cheadle Hulme and Gatley), and residential roads throughout Bramhall, Hazel Grove, Reddish, Heaton Moor, and Marple. Sodium chloride road salt is highly effective at preventing ice formation, but it is equally effective at attacking exposed metal, brake components, alloy wheel lacquer, and painted body panels. A professional valet that removes accumulated salt deposits before they compound across successive winter weeks is a straightforward and measurable preventative investment.',
        'The M60 motorway forms the southern arc of Greater Manchester\'s ring road, with Stockport at the junction of the M60 and M56. Vehicles commuting through this corridor accumulate traffic film, iron fallout from railway level crossings, and diesel and petrol particulate matter at an accelerated rate compared to rural or lower-traffic driving routes. Iron contamination — invisible to the naked eye but easily detected with a chemical fallout test — is particularly prevalent in Stockport\'s urban and commuter belt areas and causes gradual oxidative damage to clear coat and wheel lacquer surfaces without ever appearing visibly dirty. A professional mobile valet with iron decontamination is not simply about making a vehicle look clean — it is about arresting active chemical damage.',
      ],
    },
    // ------------------------------------------------------------------ 6
    {
      type: 'checklist',
      heading: 'Long-Term Benefits of Regular Mobile Valeting',
      items: [
        'Protects the clear coat and lacquer layer from permanent damage caused by acid etching, iron fallout, and road salt accumulation',
        'Maintains strong resale, private sale, or part-exchange value by preserving the vehicle\'s presentation and bodywork condition',
        'Removes bacteria, mould spores, pet allergens, and odour-causing microbes from the interior — particularly important for families and pet owners',
        'Extends the service life of leather seating, fabric upholstery, rubber door seals, and plastic trim through regular professional conditioning treatment',
        'Eliminates the time cost of travelling to and waiting at a fixed car wash or valeting studio — the service comes to your home or workplace',
        'Prevents tar spots, iron contamination, and organic deposits from bonding permanently to the clear coat between professional treatments',
        'Delivers a level of finish, attention to detail, and paint safety that automated brushed car washes and self-service jet washes cannot replicate',
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      type: 'checklist',
      heading: 'Who Benefits Most from Mobile Valeting in Stockport?',
      items: [
        'Daily commuters on the A6, A560, M60, or Stockport town centre routes who accumulate traffic film and iron contamination rapidly',
        'Pet owners regularly transporting dogs or other animals — embedded hair, persistent odours, and bacterial contamination require specialist removal',
        'Families with young children — food residue, drink spills, and general interior contamination accumulates faster than most parents realise',
        'Business owners and professionals with company cars or client-facing vehicles where a well-presented vehicle matters for impressions',
        'Used car sellers preparing for private sale or dealer part-exchange — a thorough professional valet consistently achieves a better return and reduces negotiating room',
        'Residents without outdoor tap access, a garden hosepipe, or a suitable space to clean their vehicle at home effectively',
        'Homeowners in Bramhall, Cheadle Hulme, Hazel Grove, Heaton Moor, Reddish, and Marple who value a professional result without leaving their property',
      ],
    },
    // ------------------------------------------------------------------ 8
    {
      type: 'comparison',
      heading: 'Mobile Hand Valeting vs Automated Car Wash',
      body: 'Understanding the practical differences between a professional mobile hand valet and an automated drive-through car wash is important when deciding how to care for your vehicle\'s paintwork long-term.',
      comparison: {
        headers: ['Feature', 'Mobile Hand Valet', 'Automated Car Wash'],
        rows: [
          [
            'Wash method',
            'Hand wash — soft microfibre mitt, no abrasive contact with the clear coat',
            'Rotating brushes — a leading cause of swirl marks and fine scratching across painted surfaces',
          ],
          [
            'Location',
            'Comes to your home, workplace or any accessible Stockport location',
            'Fixed site only — requires a journey and waiting time',
          ],
          [
            'Paint safety',
            'pH-neutral shampoo, dedicated cloths, and two-bucket method protect existing paint protection',
            'Often uses harsh alkaline detergents that strip wax and sealant layers',
          ],
          [
            'Interior cleaning',
            'Full interior vacuum, wipe-down, glass clean, and anti-bacterial treatment included',
            'Exterior only in the vast majority of automated facilities',
          ],
          [
            'Wheel treatment',
            'Iron fallout remover and dedicated brushes for barrel, spokes, and caliper faces',
            'Basic wheel rinse only — brake dust contamination remains bonded to surfaces',
          ],
          [
            'Finish quality',
            'Showroom-level, hand-finished result with individual attention to every panel',
            'Functional clean — suitable for basic removal of loose surface dirt only',
          ],
          [
            'Flexibility',
            'Book any day, any time, across all SK postcodes — at your convenience',
            'Fixed opening hours, fixed location, potential queuing',
          ],
        ],
      },
    },
    // ------------------------------------------------------------------ 9
    {
      type: 'text',
      heading: 'Mobile Valeting Across All Stockport Postcodes',
      bodyParagraphs: [
        'SRV Detailing is based in Dukinfield — putting us at the heart of the Stockport and Tameside area and within easy reach of the entire SK postcode network. We cover SK1 (Stockport town centre), SK2 (Heaviley and Offerton), SK3 (Edgeley), SK4 (Heaton Moor and Heaton Norris), SK5 (Reddish and Bredbury), SK6 (Marple and Romiley), SK7 (Bramhall and Cheadle Hulme), SK8 (Cheadle and Gatley), and SK10–SK12 covering Hazel Grove and surrounding areas. We also regularly serve south Manchester, Didsbury, Chorlton, and Tameside.',
        'Being genuinely local means we understand local road conditions, typical contamination patterns, and seasonal challenges — from the heavy road salting on the A6 corridor in winter to the tree sap and pollen issues in the leafy residential areas of Bramhall and Marple during spring. We are not a national franchise operating out of an unfamiliar area: SRV Detailing is locally owned, locally based, and committed to the Stockport area long-term.',
      ],
    },
  ],

  // ------------------------------------------------------------------ FAQs
  // 10 entity-driven questions targeting People Also Ask SERP features
  faqs: [
    {
      question: 'How much does mobile car valeting cost in Stockport?',
      answer:
        'Mobile car valeting in Stockport starts from £50 for a mini valet (exterior wash, wheel clean, tyre dressing, and interior vacuum) and from £90 for a full valet covering comprehensive exterior and interior treatment. Pricing varies by vehicle size — a large SUV, MPV, or van requires more time and product than a small hatchback. Contact SRV Detailing for a personalised quote based on your vehicle type and current condition.',
    },
    {
      question: 'How long does a mobile car valet take in Stockport?',
      answer:
        'A mini valet typically takes between 1 and 1.5 hours. A full valet — covering all exterior and interior surfaces to a professional standard — generally takes between 2.5 and 4 hours, depending on vehicle size and how heavily soiled it is. We always give an honest time estimate before starting and communicate clearly if additional time is needed.',
    },
    {
      question: 'Do you need water or electricity at my address?',
      answer:
        'No. Our mobile unit carries its own fresh water tank and an onboard power generator. We require nothing from you except access to your vehicle and a parking space to work alongside it. This makes us genuinely suitable for flats, workplaces, communal parking areas, and any location that lacks outdoor water access.',
    },
    {
      question: 'What is the difference between a mini valet and a full valet?',
      answer:
        'A mini valet covers the exterior hand wash, wheel clean, tyre dressing, interior vacuum, and a quick wipe of dashboard surfaces. A full valet is substantially more comprehensive: it includes a thorough interior deep clean of all surfaces, seats, carpets, boot, door cards, steering wheel, console, and glass — alongside all exterior processes including snow foam pre-wash, hand wash, wheel decontamination, and trim dressing. Add-on services such as clay bar decontamination, leather conditioning, odour removal, and upholstery cleaning are available on request.',
    },
    {
      question: 'Can you valet my car in cold or wet weather in Stockport?',
      answer:
        'Light and moderate rain does not stop us — and given Greater Manchester\'s climate, we account for wet conditions in how we plan and carry out work. In heavy or sustained rainfall we may need to reschedule exterior paintwork stages to protect the quality of the finish. Interior valeting can always proceed regardless of weather conditions. We communicate proactively about any weather-related adjustments and aim to complete or reschedule with minimum disruption to you.',
    },
    {
      question: 'Will mobile valeting remove swirl marks from my paintwork?',
      answer:
        'No. Swirl marks are micro-scratches embedded in the clear coat layer that require machine polishing — a form of paint correction — to remove. A standard valet is a cleaning and presentation service that will make your vehicle look significantly better, but it does not address sub-surface paint defects. If you have visible swirl marks, water spotting etched into the paint, or deeper scratches, our paint correction service or a machine polish add-on is the appropriate treatment to discuss.',
    },
    {
      question: 'How often should I get my car valeted in Stockport?',
      answer:
        'For most Stockport drivers, a full valet every 2 to 3 months combined with a mini valet or maintenance wash every 4 to 6 weeks provides a good protection and presentation schedule. Vehicles used daily on heavy-traffic roads such as the A6 or M60, those transporting pets or children, and vehicles parked outdoors without a garage will benefit from more frequent professional cleaning. The Greater Manchester climate — with its above-average rainfall and winter road salting — makes regular removal of salt, iron, and organic contamination more important than in drier parts of the UK.',
    },
    {
      question: 'Do you cover Cheadle Hulme, Bramhall, Hazel Grove, and other Stockport areas?',
      answer:
        'Yes. We cover the full SK postcode area including Cheadle Hulme (SK8), Bramhall (SK7), Hazel Grove (SK7), Heaton Moor (SK4), Heaton Norris (SK4), Reddish (SK5), Marple (SK6), Edgeley (SK3), and Stockport town centre (SK1). We are based in Dukinfield, making us genuinely local to the entire Stockport Borough. Visit our Stockport areas page for full coverage and postcode details.',
    },
    {
      question: 'What does a full interior valet include?',
      answer:
        'A full interior valet covers: thorough vacuuming of all seats, carpets, boot liner, door pockets, and the area beneath seats and seat rails; crevice cleaning of all vents, gear surrounds, and console recesses; cleaning and conditioning of dashboard, centre console, door cards, and all plastic and vinyl surfaces; steering wheel and gear lever sanitation; streak-free cleaning of all interior windows and mirrors; and anti-bacterial treatment of high-contact surfaces where required. Leather conditioning and fabric upholstery deep cleaning are available as add-on services.',
    },
    {
      question: 'Is mobile valeting as effective as using a fixed detailing studio?',
      answer:
        'For cleaning and presentation services — valeting — mobile work is as effective as studio work, and often more so because your vehicle receives the undivided attention of the operator rather than being processed alongside multiple other cars. For advanced paint correction, ceramic coating application, or paint protection film installation, a controlled studio environment with consistent lighting, temperature regulation, and specialist equipment has practical advantages. SRV Detailing offers both: mobile valeting for convenient regular maintenance and studio-based detailing for paint protection treatments.',
    },
  ],

  relatedLinks: [
    {
      label: 'Full Valet Stockport',
      href: '/stockport/car-valeting/full-valet',
      description: 'Comprehensive exterior and interior clean for a showroom finish',
    },
    {
      label: 'Mini Valet Stockport',
      href: '/stockport/car-valeting/mini-valet',
      description: 'Quick exterior wash and interior refresh — ideal for regular maintenance',
    },
    {
      label: 'Interior Valeting Stockport',
      href: '/stockport/car-valeting/interior-valeting',
      description: 'Deep interior clean including upholstery, carpets, and trim',
    },
    {
      label: 'Paint Correction Stockport',
      href: '/stockport/car-detailing/paint-correction',
      description: 'Machine polishing to remove swirl marks, scratches, and paint defects',
    },
    {
      label: 'Ceramic Coating Stockport',
      href: '/stockport/car-detailing/ceramic-coating',
      description: 'Long-term paint protection with hydrophobic ceramic coating application',
    },
    {
      label: 'Car Valeting Stockport',
      href: '/stockport/car-valeting',
      description: 'All car valeting services across Stockport and SK postcodes',
    },
    {
      label: 'Stockport Areas Covered',
      href: '/stockport/areas',
      description: 'Full list of Stockport postcodes and areas we serve',
    },
    {
      label: 'What Is Car Valeting? Guide',
      href: '/guides/what-is-car-valeting',
      description: 'In-depth guide explaining valeting, detailing, and the difference between them',
    },
  ],

  schemaPrice: '50',
};
