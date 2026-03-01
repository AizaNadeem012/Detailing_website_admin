import { Sparkles } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const paintCorrectionStockport: ServicePageData = {
  slug: 'paint-correction',
  name: 'Paint Correction Stockport',
  seo: {
    title: 'Paint Correction Stockport | Swirl Mark Removal | SRV Detailing',
    description:
      'Professional paint correction in Stockport. Machine polishing removes swirl marks, scratches and oxidation from your clear coat. All SK postcodes. 22+ years experience.',
    keywords: [
      'paint correction stockport',
      'swirl mark removal stockport',
      'machine polishing stockport',
      'car scratch removal stockport',
      'paint defect removal stockport',
      'clear coat restoration stockport',
      'paint correction greater manchester',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/paint-correction',
  },
  icon: Sparkles,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Paint Correction', href: '/stockport/car-detailing/paint-correction' },
  ],
  heroTitle: 'Paint Correction Stockport — Machine Polishing & Swirl Removal',
  heroDescription:
    'Professional machine polishing to remove swirl marks, light scratches, water spotting and oxidation from your clear coat. Restore your paintwork to a flawless, showroom-grade finish — delivered to your Stockport door.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Paint Correction?',
      bodyParagraphs: [
        "Paint correction is the professional process of removing defects from a vehicle's clear coat using machine polishers and a sequence of compounds and finishing polishes. Swirl marks, fine scratches, water spot etching, bird dropping acid marks, and oxidation all exist within the clear coat layer — the transparent outer coat above the colour layer. Paint correction abrades a precise, controlled amount of this clear coat to level the surface, eliminating the defects and restoring optical clarity.",
        'The term is often confused with touch-up painting or scratch repair. Paint correction does not add material to the surface — it removes material, specifically a microscopic layer of the clear coat using precision abrasives. The depth of cut is controlled using paint thickness gauges and operator skill to ensure the minimum necessary material is removed while achieving the maximum defect correction. A correctly performed paint correction leaves the surface optically flat, which is what produces the wet, mirror-like finish often described as "showroom condition".',
        "For Stockport vehicles, paint correction is most commonly required after years of automated car wash use — the rotating brushes in these machines create the characteristic spider-web swirl pattern visible on dark cars in sunlight. It is also the essential preparation stage before any ceramic coating application. Coating over uncorrected paint permanently seals the defects — it doesn't hide them.",
      ],
    },
    {
      type: 'list',
      heading: 'Common Paint Defects We Correct in Stockport',
      items: [
        'Swirl marks — circular fine scratches from automated car washes, single-bucket washing, or dry wiping',
        'Buffer trails (holograms) — wide arc scratches from aggressive or poorly controlled machine polishing by inexperienced operators',
        'Water spot etching — mineral deposits from hard tap water or rainwater that have etched into the clear coat surface through repeated wet-dry cycles',
        'Bird dropping acid marks — uric acid etching from droppings left on paint, accelerated by Stockport\'s summer sunshine warming the surface',
        'Tree sap etching — resin deposits from the tree canopies along Bramhall and Marple roads that chemically bond and etch through seasonal wet-dry cycles',
        'Oxidation — UV-induced degradation of the clear coat causing a dull, chalky, or faded appearance on older vehicles',
        'Light scratches — fine surface scratches from light physical contact that have not penetrated through the clear coat to the base colour',
      ],
    },
    {
      type: 'process',
      heading: 'Our Paint Correction Process',
      items: [
        'Pre-wash decontamination — full snow foam, two-bucket hand wash, iron fallout removal, and tar spot treatment to ensure a perfectly clean surface',
        'Clay bar decontamination — bonded surface contamination removed to create a smooth, uniform substrate for accurate polishing',
        'Paint depth gauge readings — thickness measured across multiple panels to establish safe correction margins and confirm clear coat integrity',
        'Test panel — correction technique tested on a small section to confirm the compound and pad combination achieves the desired result',
        'Cutting stage — machine polisher with medium-cut compound used to level defects and remove the majority of scratches and swirl marks',
        'Finishing stage — fine finishing polish removes any light marring from the cutting stage and maximises surface clarity and gloss',
        'IPA (isopropyl alcohol) wipe-down — removes all polishing oils, revealing the true corrected surface without any enhancement from residual product',
        'Inspection under panel lighting — corrected surface inspected under specialist LED lighting to confirm defect removal and identify any remaining areas for further attention',
        'Protection application — sealant, wax or ceramic coating applied immediately to seal and protect the corrected clear coat',
      ],
    },
    {
      type: 'comparison',
      heading: 'Single-Stage vs Multi-Stage Paint Correction',
      body: 'The number of correction stages required depends on the severity of paint defects and the desired end result. We assess every vehicle before recommending the correct approach.',
      comparison: {
        headers: ['Aspect', 'Single-Stage', 'Multi-Stage'],
        rows: [
          ['Defects addressed', 'Light swirl marks, minor haze, surface oxidation', 'Heavy swirls, buffer trails, deeper scratches, significant oxidation'],
          ['Process', 'One compound and pad combination', 'Cutting compound followed by finishing polish for maximum clarity'],
          ['Clear coat removal', 'Minimal — typically 1–2 microns', 'Slightly more — typically 2–4 microns total across both stages'],
          ['Result', 'Significant improvement — 70–85% defect removal typical', 'Maximum correction — 90–95%+ defect removal on suitable paint'],
          ['Time required', '4–6 hours for a standard vehicle', '6–10 hours; larger vehicles and complex paint may extend to 2 days'],
          ['Price from', '£250', '£400'],
          ['Best for', 'Lightly swirled paint, pre-coating prep on newer vehicles', 'Heavily defected paint, pre-sale restoration, show car preparation'],
        ],
      },
    },
    {
      type: 'checklist',
      heading: 'When Your Stockport Vehicle Needs Paint Correction',
      items: [
        'Swirl marks are visible as a spider-web pattern when viewed in direct sunlight — especially apparent on black, dark blue, or dark grey vehicles',
        'The paintwork looks dull or hazy despite being clean — indicating micro-scratching is diffusing reflected light',
        'Water spots have etched the clear coat and no longer wipe off with a damp cloth',
        'Bird droppings have left dull circular marks even after the droppings have been removed',
        'The vehicle is being prepared for ceramic coating application',
        'You are preparing the vehicle for private sale or dealer part-exchange',
        'The paint has a faded or chalky appearance from UV exposure and age',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does paint correction cost in Stockport?',
      answer:
        'Single-stage correction starts from £250 for a standard hatchback or saloon. Multi-stage correction from £400. Price scales with vehicle size and paint condition — a heavily defected large vehicle takes significantly more time. Contact us for an honest quote after describing your vehicle.',
    },
    {
      question: 'Can paint correction remove all scratches?',
      answer:
        'Paint correction removes defects that exist within the clear coat layer. If a scratch has penetrated through the clear coat into the base colour — typically visible as a white or primer-coloured line — machine polishing cannot remove it. These require touch-up paint or body repair. We assess paint depth and defect severity before starting and advise clearly on expected outcomes.',
    },
    {
      question: 'Will polishing remove too much clear coat?',
      answer:
        'We use a paint depth gauge to measure clear coat thickness before starting. Modern factory clear coats are typically 40–60 microns. A single correction stage removes approximately 1–2 microns — a safe, minimal amount. We work within clearly defined margins and stop if readings suggest insufficient remaining thickness for safe correction.',
    },
    {
      question: 'How long does paint correction take in Stockport?',
      answer:
        'Single-stage on a standard hatchback takes 4–6 hours. Multi-stage on a large or heavily defected vehicle can take a full day or two. Being locally based, we can split larger jobs across two visits — useful for customers who need their vehicle each evening.',
    },
    {
      question: 'Does paint correction need to be followed by ceramic coating?',
      answer:
        'Not mandatory, but strongly recommended. Corrected paint is at its best and most vulnerable immediately after polishing — the IPA wipe leaves it completely unprotected. A ceramic coating, paint sealant, or at minimum a quality carnauba wax should be applied immediately to seal and protect the corrected surface.',
    },
    {
      question: 'Can you do paint correction at my home in Stockport?',
      answer:
        'Yes. Our mobile unit carries professional machine polishers, panel inspection lighting, paint depth gauges, and all compounds and finishing products. We work at your driveway across all SK postcodes. A shaded or covered area is preferable to prevent product drying too quickly in direct sun — we advise on setup when booking.',
    },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating Stockport', href: '/stockport/car-detailing/ceramic-coating', description: 'Seal corrected paint with long-term SiO2 protection' },
    { label: 'Swirl Mark Removal Stockport', href: '/stockport/car-detailing/swirl-mark-removal', description: 'Targeted swirl and wash scratch elimination' },
    { label: 'Exterior Detailing Stockport', href: '/stockport/car-detailing/exterior-detailing', description: 'Full decontamination, correction and coating' },
    { label: 'New Car Protection Stockport', href: '/stockport/car-detailing/new-car-protection', description: 'Protect from day one — before defects develop' },
    { label: 'Car Detailing Stockport', href: '/stockport/car-detailing', description: 'All detailing services across SK postcodes' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices', description: 'Full pricing guide' },
  ],
  schemaPrice: '250',
};
