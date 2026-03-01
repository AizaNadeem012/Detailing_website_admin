import { Shield, Sparkles, Paintbrush, Car, Wrench, CircleDot, Armchair } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const stockportCarDetailingPillar: PillarPageData = {
  slug: 'car-detailing',
  name: 'Car Detailing in Stockport',
  seo: {
    title: 'Car Detailing Stockport | Paint Correction & Ceramic Coating | SRV Detailing',
    description:
      'Professional car detailing in Stockport. Paint correction, ceramic coating, clay bar decontamination and interior restoration. Mobile service across all SK postcodes. 22+ years experience.',
    keywords: [
      'car detailing stockport',
      'paint correction stockport',
      'ceramic coating stockport',
      'mobile detailing stockport',
      'swirl mark removal stockport',
      'exterior detailing stockport',
      'interior detailing stockport',
      'car detailing greater manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
  ],
  heroTitle: 'Professional Car Detailing in Stockport — Paint Correction & Ceramic Coating',
  heroDescription:
    "Stockport's locally based car detailing specialist. Paint correction to eliminate swirl marks and scratches, ceramic coating for long-term clear coat protection, and deep interior restoration — all delivered to your door across every SK postcode.",
  introText:
    "Greater Manchester's road salt, industrial fallout, and persistent rainfall create some of the most demanding conditions for vehicle paintwork in England. SRV Detailing brings studio-quality car detailing to your Stockport driveway — machine polishers, IR curing lamps, paint depth gauges, and professional-grade compounds, all from our fully equipped mobile unit. Whether you need a single-stage correction before a ceramic coating, a deep interior restoration, or a full multi-stage detail, we deliver a precise, expert result without you leaving home. Covering all SK postcodes, 7 days a week.",
  services: [
    {
      slug: 'ceramic-coating',
      name: 'Ceramic Coating',
      description: 'SiO2 paint protection bonded to your clear coat. 2 to 7+ year packages with UV defence and chemical resistance.',
      icon: Shield,
      href: '/stockport/car-detailing/ceramic-coating',
    },
    {
      slug: 'paint-correction',
      name: 'Paint Correction',
      description: 'Multi-stage machine polishing to remove swirl marks, scratches and oxidation from your clear coat.',
      icon: Sparkles,
      href: '/stockport/car-detailing/paint-correction',
    },
    {
      slug: 'new-car-protection',
      name: 'New Car Protection',
      description: 'Ceramic coating applied to new vehicles before the clear coat picks up defects — the ideal time to protect.',
      icon: Car,
      href: '/stockport/car-detailing/new-car-protection',
    },
    {
      slug: 'interior-detailing',
      name: 'Interior Detailing',
      description: 'Steam cleaning, leather conditioning, hot water extraction and UV sanitisation — full cabin restoration.',
      icon: CircleDot,
      href: '/stockport/car-detailing/interior-detailing',
    },
    {
      slug: 'exterior-detailing',
      name: 'Exterior Detailing',
      description: 'Full decontamination, clay bar, machine polish and protective coating for flawless paintwork.',
      icon: Paintbrush,
      href: '/stockport/car-detailing/exterior-detailing',
    },
    {
      slug: 'swirl-mark-removal',
      name: 'Swirl Mark Removal',
      description: 'Machine polishing to eliminate wash swirls, fine scratches and paint haze from the clear coat.',
      icon: Sparkles,
      href: '/stockport/car-detailing/swirl-mark-removal',
    },
    {
      slug: 'engine-bay-detailing',
      name: 'Engine Bay Detailing',
      description: 'Safe degreasing, low-pressure rinse and dressing — engine bay restored to showroom condition.',
      icon: Wrench,
      href: '/stockport/car-detailing/engine-bay-detailing',
    },
    {
      slug: 'leather-conditioning',
      name: 'Leather Conditioning',
      description: 'pH-balanced cleaning, nourishing conditioner and UV-protective protectant for premium leather interiors.',
      icon: Armchair,
      href: '/stockport/car-detailing/leather-conditioning',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Car Detailing?',
      bodyParagraphs: [
        "Car detailing is a professional-grade restoration and protection process that goes beyond cleaning. It addresses the condition of your vehicle's paintwork at a microscopic level — removing swirl marks and surface scratches from the clear coat using machine polishing, eliminating bonded contamination with iron fallout removers and clay bar decontamination, and applying long-term protective coatings such as ceramic SiO2 layers that bond chemically to the paint surface and last years.",
        "Detailing also covers interior restoration: steam cleaning and hot water extraction for deep upholstery and carpet treatment, leather conditioning with UV-protective products, and ozone treatment for persistent odours. The distinction between valeting and detailing is straightforward — valeting is professional cleaning and maintenance; detailing is correction and protection. Most vehicles benefit from regular valeting with periodic detailing when paint condition requires restoration or long-term protection is needed.",
      ],
    },
    {
      type: 'list',
      heading: 'Why Stockport Vehicles Need Professional Detailing',
      items: [
        'Winter road salt on the A6, M60, A560 and gritted residential routes chemically attacks unprotected clear coat and alloy wheel lacquer',
        'Iron fallout from the M60/M56 motorway corridor and local rail crossings deposits invisibly onto paint, causing oxidative damage between cleans',
        "Greater Manchester's 800mm+ annual rainfall creates water spotting and keeps contamination in a mobile, chemically active state on paint surfaces",
        'Tree sap and honeydew from the oak, lime and sycamore canopies of Bramhall, Cheadle Hulme and Marple etch into clear coat through wet-dry cycles',
        'Automated car wash brushes — the most common wash method used on Stockport vehicles — create the swirl marks that machine polishing corrects',
        'UV exposure, even through overcast Greater Manchester skies, gradually degrades unprotected clear coat, causing oxidation and fading over time',
      ],
    },
    {
      type: 'process',
      heading: 'How a Full Detail Works',
      items: [
        'Pre-inspection — assess paint depth, defect severity, interior condition, and agree the scope and expected outcome',
        'Full decontamination — snow foam pre-wash, two-bucket hand wash, iron fallout treatment, and tar spot dissolution',
        'Clay bar decontamination — bonded surface contamination removed for a glass-smooth substrate',
        'Paint correction — single or multi-stage machine polishing to level defects and restore clarity',
        'IPA panel wipe — all polishing oils removed to reveal the true corrected surface',
        'Coating application — ceramic coating, paint sealant, or carnauba wax applied to protect the corrected paint',
        'Interior restoration — vacuum, steam clean, hot water extraction, leather conditioning, and glass polish as required',
        'Final inspection — quality check under panel lighting; customer walk-around and aftercare briefing',
      ],
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing in Stockport',
      items: [
        'Locally based in Dukinfield — genuinely local knowledge of SK postcode roads and conditions',
        '22+ years hands-on experience across all vehicle types, paint systems, and materials',
        'Paint depth gauges used on every correction job — safe, measured correction within clear coat margins',
        'Professional panel inspection lighting — no defect missed during correction or coating',
        'Fully self-contained mobile unit — machine polishers, curing lamps, steam cleaners, all equipment brought to your door',
        'Fully insured with specialist motor trade and vehicle-in-care coverage',
        'Available 7 days a week across all SK postcodes — no call-out charge',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does car detailing take in Stockport?',
      answer:
        "A comprehensive detail — paint correction plus ceramic coating plus interior — typically takes 6–10 hours and may be split across two days for larger or heavily defected vehicles. Paint correction alone is 4–8 hours. Being locally based, we can split larger jobs across consecutive days — useful if you need your vehicle each evening.",
    },
    {
      question: 'Do you come to my home in Stockport?',
      answer:
        "Yes. We cover all SK postcodes from our Dukinfield base — Bramhall, Cheadle, Cheadle Hulme, Hazel Grove, Marple, Heaton Moor, Reddish and the town centre. Our unit is fully self-contained — no water or power needed from your property.",
    },
    {
      question: 'How much does car detailing cost in Stockport?',
      answer:
        'Single-stage paint correction from £250. Multi-stage correction from £400. Ceramic coating from £300. Full detail packages (correction + ceramic coating + interior) from £600. Interior detailing from £150. Contact us for an exact quote based on your vehicle size and condition.',
    },
    {
      question: 'What is the difference between car detailing and car valeting?',
      answer:
        "Valeting is professional cleaning and maintenance — it makes your car look excellent. Detailing goes further by correcting paint defects using machine polishing and applying longer-lasting protection such as ceramic coatings. Detailing is restorative and protective; valeting is maintenance. Most vehicles benefit from regular valeting with periodic detailing for paint correction and protection.",
    },
    {
      question: 'How often does a car need detailing in Greater Manchester?',
      answer:
        "Most vehicles benefit from a full paint correction and ceramic coating every 2–4 years, maintained between times with regular professional valeting. The frequency depends on your paint's current condition, whether it is already coated, and how well it is maintained between sessions. We advise on the right schedule when assessing your vehicle.",
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Stockport', href: '/stockport/car-valeting', description: 'Regular maintenance cleaning between details' },
    { label: 'Ceramic Coating Stockport', href: '/stockport/car-detailing/ceramic-coating', description: 'SiO2 paint protection — 2 to 7+ years' },
    { label: 'Paint Correction Stockport', href: '/stockport/car-detailing/paint-correction', description: 'Machine polishing to remove swirls and scratches' },
    { label: 'Manchester Car Detailing', href: '/manchester/car-detailing', description: 'Services across Greater Manchester' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices', description: 'Full pricing guide' },
    { label: 'What Is Car Detailing?', href: '/guides/what-is-car-detailing', description: 'Complete guide to detailing vs valeting' },
  ],
};
