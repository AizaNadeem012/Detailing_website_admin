import { Paintbrush } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorDetailingStockport: ServicePageData = {
  slug: 'exterior-detailing',
  name: 'Exterior Detailing Stockport',
  seo: {
    title: 'Exterior Detailing Stockport | Clay Bar, Polish & Coating | SRV Detailing',
    description:
      'Professional exterior detailing in Stockport. Full decontamination, clay bar, machine polish and ceramic or sealant protection. Restore paintwork to showroom standard. All SK postcodes.',
    keywords: [
      'exterior detailing stockport',
      'car exterior restoration stockport',
      'paint decontamination stockport',
      'machine polish stockport',
      'clay bar treatment stockport',
      'exterior car detailing stockport',
      'paint protection stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/exterior-detailing',
  },
  icon: Paintbrush,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Exterior Detailing', href: '/stockport/car-detailing/exterior-detailing' },
  ],
  heroTitle: 'Exterior Detailing Stockport — Decontamination, Polish & Paint Protection',
  heroDescription:
    'Complete exterior restoration at your Stockport door — iron fallout removal, clay bar decontamination, machine polishing and protective coating. Paintwork corrected and protected against Greater Manchester road conditions.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Exterior Detailing?',
      bodyParagraphs: [
        'Exterior detailing is a comprehensive, multi-stage paint restoration and protection process. It begins where professional valeting ends: once the paint is clean, exterior detailing addresses what washing cannot remove. Iron contamination bonded into the clear coat is chemically dissolved with a pH-sensitive fallout remover. Tar spots are dissolved from lower panels. Clay bar treatment then physically removes any remaining bonded surface contamination — industrial fallout, rail dust, paint overspray — leaving a perfectly smooth, glass-like substrate for polishing.',
        'Machine polishing then removes paint defects from within the clear coat itself — swirl marks from automated car washes, light scratches, water spot etching, and oxidation. The process uses a dual-action or rotary polisher with a carefully selected compound and pad combination matched to the paint type, hardness, and defect severity. Paint depth gauges are used throughout to ensure correction stays within safe clear coat margins. Finally, a protective coating — ceramic SiO2, paint sealant, or carnauba wax — is applied to seal the corrected surface and provide ongoing protection.',
        'Exterior detailing is distinct from exterior valeting, which is a cleaning and maintenance service. Detailing restores and protects — it addresses the paint at a physical and chemical level. For vehicles that have accumulated years of automated car wash swirls, environmental etching, or surface oxidation, exterior detailing is the appropriate treatment to return the paintwork to its best possible condition.',
      ],
    },
    {
      type: 'list',
      heading: 'Stockport Paint Hazards Exterior Detailing Addresses',
      items: [
        'Iron fallout from the M60/M56 motorway corridor and rail crossings — invisible ferrous particles that embed into clear coat and cause progressive oxidative damage',
        'Road salt from winter gritting on the A6, A560, A34 and residential SK routes — sodium chloride that chemically attacks lacquer and alloy surfaces',
        "Water spot mineral deposits from Greater Manchester's hard rainfall — calcium and magnesium that etch into clear coat through repeated wet-dry cycles",
        'Tree sap and honeydew from oak and sycamore canopies in Bramhall (SK7), Cheadle Hulme (SK8) and Marple (SK6) — acidic organic compounds that etch during warm weather',
        'Bird dropping uric acid marks — clear coat etching that begins within hours in warm conditions',
        'Swirl marks from automated car wash brushes — the most common cause of paint defects across all vehicle types in Stockport',
        'UV-induced clear coat oxidation — even through overcast Greater Manchester skies, UV radiation gradually degrades unprotected paint surfaces',
      ],
    },
    {
      type: 'process',
      heading: 'Our Exterior Detailing Process',
      items: [
        'Pre-inspection — assess paint condition, measure depth at multiple points, identify panel-specific defects and agree correction targets',
        'Snow foam pre-wash and two-bucket hand wash — thorough decontamination wash before any abrasive work',
        'Iron fallout removal — pH-sensitive iron remover applied across all panels; purple-red reaction reveals ferrous contamination being dissolved',
        'Tar and bitumen removal — dedicated tar remover applied to lower panels; road bitumen dissolved without solvent damage to trim',
        'Clay bar decontamination — entire vehicle clayed to remove all bonded surface contamination and create a perfectly smooth substrate',
        'Paint correction — single or multi-stage machine polishing; cutting compound to level defects, finishing polish for maximum gloss and clarity',
        'IPA panel wipe — all polishing oils removed to confirm true correction results under panel lighting',
        'Protection application — ceramic coating, paint sealant or carnauba wax applied to all painted surfaces',
        'Wheel and tyre finishing — wheels cleaned with dedicated fallout remover, tyres dressed; wheel coating available on request',
        'Glass and trim — windows cleaned streak-free; exterior plastic trim dressed and protected',
      ],
    },
    {
      type: 'list',
      heading: 'Everything Included in an Exterior Detail',
      items: [
        'Full snow foam pre-wash and two-bucket contact wash with pH-neutral shampoo',
        'Chemical iron fallout decontamination across all painted panels',
        'Tar spot and road bitumen dissolution from lower panels',
        'Full clay bar decontamination for glass-smooth paint substrate',
        'Single or multi-stage machine polish matched to paint condition',
        'Protective coating application — ceramic, sealant, or wax (package dependent)',
        'Wheel decontamination with iron fallout remover and dedicated brushes',
        'Tyre dressing and exterior plastic trim protection',
        'Streak-free glass cleaning on all windows and mirrors',
        'Paint depth gauge used throughout — safe, measured correction',
      ],
    },
    {
      type: 'comparison',
      heading: 'Exterior Detailing vs Exterior Valeting',
      body: 'Both services are delivered to your Stockport door by the same professional. The distinction is in depth of work and what is actually achieved on your paintwork.',
      comparison: {
        headers: ['Aspect', 'Exterior Detailing', 'Exterior Valeting'],
        rows: [
          ['Purpose', 'Restoration and long-term protection', 'Cleaning and maintenance'],
          ['Decontamination', 'Chemical iron removal + clay bar on entire vehicle', 'Iron removal on wheels; no clay bar'],
          ['Paint correction', 'Single or multi-stage machine polishing to remove defects', 'Not included — surface cleaning only'],
          ['Protection', 'Ceramic coating or high-grade sealant — 6 months to 7 years', 'Spray wax or quick detailer — weeks'],
          ['Time', '4–8 hours depending on condition', '1–2 hours'],
          ['Price from', '£200', '£65'],
          ['Best for', 'Restoring defected paint; pre-coating prep; major refresh', 'Regular maintenance between details'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'How long does exterior detailing take in Stockport?',
      answer:
        'Typically 4–8 hours for a standard vehicle including decontamination, correction, and coating. Heavily defected paint or larger vehicles can extend to a full day. We split larger jobs across two visits for customers who need their vehicle back each evening.',
    },
    {
      question: 'What is the difference between exterior detailing and an exterior valet?',
      answer:
        'An exterior valet is a cleaning service — wash, wheel clean, wax. Exterior detailing adds full chemical decontamination, clay bar treatment, machine polishing to correct paint defects, and a longer-lasting protective coating. Detailing corrects and protects; valeting maintains cleanliness.',
    },
    {
      question: 'Do I need paint correction before ceramic coating?',
      answer:
        'Yes — always. A ceramic coating locks in whatever is on the paint surface. Applying coating over swirl marks or oxidation permanently seals those defects. Our exterior detailing service always includes the correction stage before any coating is applied.',
    },
    {
      question: 'How much does exterior detailing cost in Stockport?',
      answer:
        'Exterior detailing starts from £200 for a standard hatchback with single-stage correction and sealant. Ceramic coating packages from £300. Multi-stage correction with ceramic coating from £550. Contact us for an exact quote based on vehicle size and paint condition.',
    },
    {
      question: 'How often does a car need exterior detailing?',
      answer:
        'For a ceramic-coated vehicle maintained with regular professional valeting, a full detail refresh every 2–3 years is typical. Uncoated vehicles in Greater Manchester conditions benefit from annual decontamination and protection. We assess and advise on the right schedule for your specific vehicle.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Stockport', href: '/stockport/car-detailing/paint-correction', description: 'Machine polishing to eliminate swirls and scratches' },
    { label: 'Ceramic Coating Stockport', href: '/stockport/car-detailing/ceramic-coating', description: 'Long-term SiO2 protection after correction' },
    { label: 'Swirl Mark Removal Stockport', href: '/stockport/car-detailing/swirl-mark-removal', description: 'Targeted correction for wash swirls and haze' },
    { label: 'Exterior Valeting Stockport', href: '/stockport/car-valeting/exterior-valeting', description: 'Regular maintenance cleaning between details' },
    { label: 'Car Detailing Stockport', href: '/stockport/car-detailing', description: 'All detailing services across SK postcodes' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices', description: 'Full pricing guide' },
  ],
  schemaPrice: '200',
};
