import type { ComparePageData } from '@/data/types';

export const comparisonsData: ComparePageData[] = [
  {
    slug: 'car-detailing-vs-car-valeting',
    title: 'Car Detailing vs Car Valeting: What\'s the Difference?',
    seo: {
      title: 'Car Detailing vs Car Valeting | What\'s the Difference? | SRV Detailing',
      description:
        'Car detailing vs car valeting explained. Understand the key differences, when you need each service, and which is right for your vehicle. Expert guide from SRV Detailing.',
      keywords: [
        'car detailing vs car valeting',
        'detailing vs valeting',
        'difference between detailing and valeting',
        'car detailing or car valeting',
      ],
      canonical: 'https://www.srvdetailing.co.uk/compare/car-detailing-vs-car-valeting',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare', href: '/compare' },
      { label: 'Detailing vs Valeting', href: '/compare/car-detailing-vs-car-valeting' },
    ],
    heroTitle: 'Car Detailing vs Car Valeting',
    heroDescription:
      'Two different services for two different needs. Understand which one your vehicle needs — or whether you need both.',
    optionA: {
      name: 'Car Detailing',
      pros: [
        'Corrects paint defects like swirl marks and scratches',
        'Provides long-term protection with ceramic coatings (2–7+ years)',
        'Restores faded or oxidised paintwork to showroom condition',
        'Increases vehicle resale value significantly',
        'Protects against environmental damage (UV, salt, industrial fallout)',
      ],
      cons: [
        'Higher upfront cost (£250–£1,500+ depending on services)',
        'Takes 6–10+ hours to complete',
        'Not needed frequently — typically annually',
        'Requires professional equipment and expertise',
      ],
    },
    optionB: {
      name: 'Car Valeting',
      pros: [
        'More affordable per visit (£50–£200)',
        'Quick turnaround (1–4 hours)',
        'Keeps your car consistently clean and fresh',
        'Regular maintenance prevents buildup and deterioration',
        'Interior cleaning improves comfort and hygiene',
      ],
      cons: [
        'Cannot remove paint defects (swirl marks, scratches)',
        'Protection is temporary (wax lasts weeks, not years)',
        'Doesn\'t restore faded or damaged paintwork',
        'Needs to be done regularly (monthly) to maintain results',
      ],
    },
    comparisonTable: [
      { feature: 'Purpose', optionA: 'Restoration & long-term protection', optionB: 'Cleaning & maintenance' },
      { feature: 'Paint Correction', optionA: 'Yes — removes swirl marks & scratches', optionB: 'No — cleans but doesn\'t correct' },
      { feature: 'Protection Duration', optionA: '2–7+ years (ceramic coating)', optionB: 'Weeks (wax/sealant)' },
      { feature: 'Typical Cost', optionA: '£250–£1,500+', optionB: '£50–£200' },
      { feature: 'Time Required', optionA: '6–10+ hours', optionB: '1–4 hours' },
      { feature: 'Frequency', optionA: 'Once or twice per year', optionB: 'Monthly or quarterly' },
      { feature: 'Interior', optionA: 'Deep restoration & conditioning', optionB: 'Thorough cleaning & freshening' },
      { feature: 'Best For', optionA: 'Enthusiasts, luxury cars, pre-sale prep', optionB: 'Regular maintenance, daily drivers' },
    ],
    verdict:
      'Most car owners benefit from both services. Start with a detail to correct and protect, then maintain with regular valeting. If your paint is in good condition and you just want it kept clean, valeting is all you need. If you have swirl marks, fading, or want long-term protection, detailing is the answer. We offer both and can recommend the right approach for your vehicle.',
    contentSections: [
      {
        type: 'text',
        heading: 'When to Choose Car Detailing',
        body: 'Choose detailing when your paint has visible defects (swirl marks, scratches, oxidation), when you want long-term protection with ceramic coating, when preparing a vehicle for sale, or when you\'ve just bought a new car and want to protect it from day one. Detailing is an investment that pays for itself through maintained resale value and reduced ongoing maintenance costs.',
      },
      {
        type: 'text',
        heading: 'When to Choose Car Valeting',
        body: 'Choose valeting for regular maintenance cleaning — when your car is dirty, the interior needs freshening up, or you want it looking presentable for an event or client meeting. Valeting is the everyday service that keeps your car comfortable, clean and well-maintained between details.',
      },
    ],
    faqs: [
      {
        question: 'Can I just get my car valeted instead of detailed?',
        answer: 'Yes, if your paint is in good condition without visible swirl marks or defects. Valeting keeps a clean car clean. But if you have paint issues, only detailing (paint correction) can resolve them — no amount of washing will remove scratches.',
      },
      {
        question: 'Do I need both detailing and valeting?',
        answer: 'For the best results, yes. An annual detail corrects and protects, while monthly or quarterly valeting maintains the finish. This combination provides the best long-term value and appearance.',
      },
      {
        question: 'Which service is better value for money?',
        answer: 'They serve different purposes. Valeting is better value for regular cleaning. Detailing is better value for protection and correction — a ceramic coating that lasts 5+ years is cheaper per year than frequent waxing.',
      },
    ],
    relatedLinks: [
      { label: 'What Is Car Detailing?', href: '/guides/what-is-car-detailing', description: 'Complete guide' },
      { label: 'What Is Car Valeting?', href: '/guides/what-is-car-valeting', description: 'Complete guide' },
      { label: 'Car Detailing Manchester', href: '/manchester/car-detailing', description: 'Our detailing services' },
      { label: 'Car Valeting Manchester', href: '/manchester/car-valeting', description: 'Our valeting packages' },
      { label: 'Pricing', href: '/pricing', description: 'View all pricing' },
    ],
  },
  {
    slug: 'ceramic-coating-vs-wax',
    title: 'Ceramic Coating vs Wax: Which Is Better?',
    seo: {
      title: 'Ceramic Coating vs Wax | Which Is Better? | SRV Detailing',
      description: 'Ceramic coating vs wax compared. Durability, cost, protection level and maintenance — find out which is right for your vehicle.',
      keywords: ['ceramic coating vs wax', 'car wax vs ceramic coating', 'ceramic coating or wax', 'best car paint protection'],
      canonical: 'https://www.srvdetailing.co.uk/compare/ceramic-coating-vs-wax',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare', href: '/compare' },
      { label: 'Ceramic Coating vs Wax', href: '/compare/ceramic-coating-vs-wax' },
    ],
    heroTitle: 'Ceramic Coating vs Wax',
    heroDescription: 'Two approaches to paint protection with very different longevity and results. Which one suits your needs?',
    optionA: {
      name: 'Ceramic Coating',
      pros: [
        'Lasts 2–7+ years with proper maintenance',
        'Superior hydrophobic properties — water sheets off instantly',
        'Chemical and UV resistance protects against environmental damage',
        'Makes routine washing significantly easier',
        'Enhances gloss and depth beyond factory finish',
      ],
      cons: [
        'Higher upfront cost (£400–£1,200+)',
        'Requires professional paint correction before application',
        'Application takes 1–2 days including cure time',
        'Cannot be easily removed if you change your mind',
      ],
    },
    optionB: {
      name: 'Car Wax',
      pros: [
        'Very affordable (£10–£30 per application)',
        'Easy to apply at home with minimal equipment',
        'Provides a warm, deep shine many enthusiasts prefer',
        'Can be applied and removed in under an hour',
      ],
      cons: [
        'Lasts only 4–8 weeks before reapplication needed',
        'Limited chemical and UV resistance',
        'Requires frequent reapplication to maintain protection',
        'Doesn\'t prevent swirl marks or scratches',
      ],
    },
    comparisonTable: [
      { feature: 'Durability', optionA: '2–7+ years', optionB: '4–8 weeks' },
      { feature: 'Cost (per year)', optionA: '£80–£240 (amortised)', optionB: '£60–£360 (6–12 applications)' },
      { feature: 'Application', optionA: 'Professional only', optionB: 'DIY or professional' },
      { feature: 'Hydrophobic Effect', optionA: 'Excellent — self-cleaning effect', optionB: 'Moderate — short-lived beading' },
      { feature: 'UV Protection', optionA: 'Strong — prevents fading', optionB: 'Minimal' },
      { feature: 'Chemical Resistance', optionA: 'High — resists bird droppings, tree sap', optionB: 'Low — breaks down quickly' },
      { feature: 'Gloss Level', optionA: 'Very high, long-lasting', optionB: 'High when fresh, fades quickly' },
      { feature: 'Maintenance', optionA: 'Simple pH-neutral wash', optionB: 'Regular reapplication needed' },
    ],
    verdict: 'For long-term protection and value, ceramic coating is the clear winner. The upfront cost is higher, but amortised over its lifespan it often costs less than regular waxing. Wax is ideal for enthusiasts who enjoy the ritual of regular application or for vehicles that don\'t need permanent protection. For most daily drivers, ceramic coating provides superior, hassle-free protection.',
    contentSections: [
      {
        type: 'text',
        heading: 'When to Choose Ceramic Coating',
        body: 'Ceramic coating is the right choice when you want set-and-forget protection that lasts years. It\'s ideal for daily drivers exposed to the elements, new cars you want to protect from day one, and anyone who wants easier maintenance washes. The initial investment pays for itself through reduced maintenance costs and preserved paint condition.',
      },
      {
        type: 'text',
        heading: 'When to Choose Wax',
        body: 'Wax suits car enthusiasts who enjoy the process of regular application and appreciate the warm, deep glow that natural carnauba wax provides. It\'s also a good choice for vehicles you\'re selling soon or classic cars where you prefer traditional products. For show cars that are rarely driven, wax provides excellent cosmetic results.',
      },
    ],
    faqs: [
      { question: 'Can I wax over ceramic coating?', answer: 'You can, but it\'s unnecessary and may actually reduce the coating\'s hydrophobic performance. Use a ceramic-compatible spray sealant or topper instead to maintain and boost the coating between maintenance washes.' },
      { question: 'Does ceramic coating replace wax completely?', answer: 'Yes. Once ceramic coating is applied, there is no need for wax. The coating provides superior protection, gloss and hydrophobic properties that far exceed any wax product.' },
      { question: 'Is ceramic coating worth the extra cost?', answer: 'For most car owners, yes. Over a 5-year period, ceramic coating typically costs less than regular waxing when you factor in product costs, time and effort. It also provides better protection throughout.' },
    ],
    relatedLinks: [
      { label: 'Ceramic Coating Explained', href: '/guides/ceramic-coating-explained', description: 'Full guide' },
      { label: 'Ceramic Coating Manchester', href: '/manchester/car-detailing/ceramic-coating', description: 'Our service' },
      { label: 'Ceramic Coating vs PPF', href: '/compare/ceramic-coating-vs-ppf', description: 'Compare with PPF' },
      { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View pricing' },
    ],
  },
  {
    slug: 'ceramic-coating-vs-ppf',
    title: 'Ceramic Coating vs PPF: Which Protection Is Best?',
    seo: {
      title: 'Ceramic Coating vs PPF | Which Protection Is Best? | SRV Detailing',
      description: 'Ceramic coating vs paint protection film compared. Impact resistance, cost, longevity and appearance — expert comparison.',
      keywords: ['ceramic coating vs ppf', 'ppf vs ceramic coating', 'paint protection film vs ceramic coating'],
      canonical: 'https://www.srvdetailing.co.uk/compare/ceramic-coating-vs-ppf',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare', href: '/compare' },
      { label: 'Ceramic Coating vs PPF', href: '/compare/ceramic-coating-vs-ppf' },
    ],
    heroTitle: 'Ceramic Coating vs PPF',
    heroDescription: 'Two premium protection options — one chemical, one physical. Understand the strengths of each to make the right choice.',
    optionA: {
      name: 'Ceramic Coating',
      pros: [
        'Covers the entire vehicle affordably',
        'Exceptional hydrophobic and self-cleaning properties',
        'Enhances gloss and colour depth',
        'Chemical and UV resistance',
        'Low maintenance once applied',
      ],
      cons: [
        'Cannot prevent stone chips or physical impact damage',
        'Does not self-heal from scratches',
        'Requires paint correction before application',
        'Semi-permanent — cannot be easily removed',
      ],
    },
    optionB: {
      name: 'Paint Protection Film (PPF)',
      pros: [
        'Physical barrier against stone chips, scratches and road debris',
        'Self-healing properties — light scratches disappear with heat',
        'Virtually invisible when professionally installed',
        'Can be removed without damaging paint',
        'Protects vulnerable areas like bumpers, bonnet and wing mirrors',
      ],
      cons: [
        'Significantly more expensive (£1,500–£5,000+ for full vehicle)',
        'Edges can lift or yellow over time if poorly installed',
        'Does not enhance gloss as much as ceramic coating',
        'Installation is time-consuming (2–5 days for full wrap)',
      ],
    },
    comparisonTable: [
      { feature: 'Protection Type', optionA: 'Chemical barrier', optionB: 'Physical film barrier' },
      { feature: 'Stone Chip Protection', optionA: 'No', optionB: 'Yes — absorbs impacts' },
      { feature: 'Scratch Resistance', optionA: 'Moderate — harder surface', optionB: 'High — self-healing film' },
      { feature: 'Cost (full vehicle)', optionA: '£400–£1,200', optionB: '£1,500–£5,000+' },
      { feature: 'Durability', optionA: '2–7+ years', optionB: '5–10 years' },
      { feature: 'Gloss Enhancement', optionA: 'Excellent', optionB: 'Good (gloss or matte options)' },
      { feature: 'Hydrophobic Effect', optionA: 'Excellent', optionB: 'Moderate (unless coated)' },
      { feature: 'Removability', optionA: 'Difficult', optionB: 'Removable without damage' },
    ],
    verdict: 'The best protection combines both — PPF on high-impact areas (bonnet, bumpers, wing mirrors) with ceramic coating over the entire vehicle including on top of the PPF. If budget is a concern, ceramic coating alone provides excellent all-round protection. PPF alone is best for those primarily concerned about stone chips and physical damage on high-risk panels.',
    contentSections: [
      {
        type: 'text',
        heading: 'When to Choose Ceramic Coating',
        body: 'Ceramic coating is the right choice for comprehensive protection on a reasonable budget. It protects against chemical damage, UV fading, bird droppings and makes maintenance effortless. For vehicles not regularly exposed to stone chips or road debris, ceramic coating alone provides outstanding protection.',
      },
      {
        type: 'text',
        heading: 'When to Choose PPF',
        body: 'PPF is essential for vehicles frequently driven on motorways or country roads where stone chips are common. It\'s also the preferred choice for high-value or performance vehicles where preserving factory paint in pristine condition is critical. Many owners apply PPF to the front end and ceramic coating everywhere else.',
      },
    ],
    faqs: [
      { question: 'Can you put ceramic coating over PPF?', answer: 'Yes, and we recommend it. Ceramic coating on top of PPF enhances the film\'s hydrophobic properties, makes it easier to clean, and adds an extra layer of chemical resistance. This combination provides the ultimate paint protection.' },
      { question: 'Is PPF worth the extra cost over ceramic coating?', answer: 'For high-impact areas on vehicles regularly driven at speed, yes. PPF provides physical protection that ceramic coating cannot. For most daily drivers doing urban commutes, ceramic coating alone is sufficient and better value.' },
      { question: 'How long does PPF last compared to ceramic coating?', answer: 'Quality PPF lasts 5–10 years, while ceramic coating lasts 2–7+ years. Both require minimal maintenance. PPF can be removed and replaced; ceramic coating requires machine polishing to remove.' },
    ],
    relatedLinks: [
      { label: 'Ceramic Coating Explained', href: '/guides/ceramic-coating-explained', description: 'Full guide' },
      { label: 'Ceramic Coating vs Wax', href: '/compare/ceramic-coating-vs-wax', description: 'Compare with wax' },
      { label: 'Ceramic Coating Manchester', href: '/manchester/car-detailing/ceramic-coating', description: 'Our service' },
      { label: 'New Car Protection', href: '/manchester/car-detailing/new-car-protection', description: 'Protect your new car' },
    ],
  },
  {
    slug: 'full-valet-vs-mini-valet',
    title: 'Full Valet vs Mini Valet: Which Do You Need?',
    seo: {
      title: 'Full Valet vs Mini Valet | Which Do You Need? | SRV Detailing',
      description: 'Full valet vs mini valet compared. What\'s included, how long each takes, prices and which is right for your situation.',
      keywords: ['full valet vs mini valet', 'mini valet or full valet', 'difference between full and mini valet'],
      canonical: 'https://www.srvdetailing.co.uk/compare/full-valet-vs-mini-valet',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare', href: '/compare' },
      { label: 'Full Valet vs Mini Valet', href: '/compare/full-valet-vs-mini-valet' },
    ],
    heroTitle: 'Full Valet vs Mini Valet',
    heroDescription: 'Both keep your car clean — but one is a quick refresh while the other is a thorough deep clean. Here\'s how to choose.',
    optionA: {
      name: 'Full Valet',
      pros: [
        'Comprehensive interior and exterior cleaning',
        'Clay bar decontamination removes bonded contaminants',
        'Wax or sealant provides weeks of protection',
        'Deep upholstery and carpet treatment',
        'Leaves the car in near-showroom condition',
      ],
      cons: [
        'Takes 3–4 hours to complete',
        'Higher cost (from £120)',
        'Vehicle is unavailable for longer',
        'Overkill for a lightly soiled car',
      ],
    },
    optionB: {
      name: 'Mini Valet',
      pros: [
        'Quick turnaround — 60–90 minutes',
        'Affordable at £50',
        'Perfect for regular maintenance',
        'Vehicle back to you quickly',
        'Covers the essential cleaning tasks',
      ],
      cons: [
        'No clay bar or decontamination treatment',
        'No wax or sealant protection',
        'Interior is vacuumed but not deep cleaned',
        'Not suitable for heavily soiled vehicles',
      ],
    },
    comparisonTable: [
      { feature: 'Duration', optionA: '3–4 hours', optionB: '60–90 minutes' },
      { feature: 'Price (from)', optionA: '£120', optionB: '£50' },
      { feature: 'Exterior Wash', optionA: 'Full decontamination wash', optionB: 'Snow foam and hand wash' },
      { feature: 'Clay Bar', optionA: 'Yes', optionB: 'No' },
      { feature: 'Interior', optionA: 'Deep clean + upholstery treatment', optionB: 'Vacuum + wipe down' },
      { feature: 'Protection', optionA: 'Wax or sealant applied', optionB: 'None' },
      { feature: 'Wheels', optionA: 'Deep clean + dressing', optionB: 'Basic clean' },
      { feature: 'Best For', optionA: 'Monthly deep maintenance', optionB: 'Fortnightly quick refresh' },
    ],
    verdict: 'A full valet every 4–6 weeks provides the best care for your vehicle, with mini valets in between to maintain freshness. If you can only choose one, a monthly full valet is the better investment. If budget or time is tight, a fortnightly mini valet keeps your car presentable and prevents dirt buildup.',
    contentSections: [
      {
        type: 'text',
        heading: 'When to Choose a Full Valet',
        body: 'A full valet is the right choice when your car needs a thorough clean — after a long trip, before a special event, or as part of regular monthly maintenance. The clay bar treatment and wax protection provide benefits that last weeks, making it excellent value for the level of service provided.',
      },
      {
        type: 'text',
        heading: 'When to Choose a Mini Valet',
        body: 'A mini valet is perfect for a quick refresh between full valets. If your car is generally clean but needs a tidy-up, a mini valet restores it to a presentable standard in under 90 minutes. It\'s also ideal for time-pressed professionals who need their car cleaned during a lunch break.',
      },
    ],
    faqs: [
      { question: 'How often should I get a full valet?', answer: 'Every 4–6 weeks for most vehicles. If your car has ceramic coating, every 6–8 weeks is sufficient. Between full valets, a mini valet every 2 weeks keeps things fresh.' },
      { question: 'Can a mini valet remove stains?', answer: 'A mini valet includes basic interior vacuuming and wiping but not deep stain removal. For stubborn stains on upholstery or carpets, a full valet with upholstery treatment is needed.' },
      { question: 'Which is better value for money?', answer: 'A full valet offers more value per pound spent. However, alternating between full and mini valets provides the best balance of cost and maintenance for most car owners.' },
    ],
    relatedLinks: [
      { label: 'Full Valet Manchester', href: '/manchester/car-valeting/full-valet', description: 'Our full valet service' },
      { label: 'Mini Valet Manchester', href: '/manchester/car-valeting/mini-valet', description: 'Our mini valet service' },
      { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View all prices' },
      { label: 'What Is Car Valeting?', href: '/guides/what-is-car-valeting', description: 'Complete guide' },
    ],
  },
  {
    slug: 'mobile-valeting-vs-fixed-location',
    title: 'Mobile Valeting vs Fixed Location: Which Is Better?',
    seo: {
      title: 'Mobile Valeting vs Fixed Location | Which Is Better? | SRV Detailing',
      description: 'Mobile valeting vs fixed location compared. Convenience, quality, cost and results — find out which option suits you best.',
      keywords: ['mobile valeting vs fixed location', 'mobile car valet or garage', 'mobile valeting benefits'],
      canonical: 'https://www.srvdetailing.co.uk/compare/mobile-valeting-vs-fixed-location',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare', href: '/compare' },
      { label: 'Mobile vs Fixed Location', href: '/compare/mobile-valeting-vs-fixed-location' },
    ],
    heroTitle: 'Mobile Valeting vs Fixed Location',
    heroDescription: 'Should you drive to a valet centre or have the valeter come to you? Here\'s what to consider.',
    optionA: {
      name: 'Mobile Valeting',
      pros: [
        'Comes to your home, office or any location',
        'No travel time or waiting around',
        'Work continues while your car is cleaned',
        'Self-contained — no water or power needed from you',
        'Same professional results as a fixed studio',
      ],
      cons: [
        'Weather can occasionally affect exterior work',
        'Limited space in some locations (no garage)',
        'May need to book further in advance for popular slots',
      ],
    },
    optionB: {
      name: 'Fixed Location',
      pros: [
        'Controlled indoor environment — no weather issues',
        'All equipment permanently set up',
        'Can handle specialist work (paint correction, coating)',
        'Drop-off and collect at your convenience',
      ],
      cons: [
        'You must drive to and from the location',
        'May need to arrange alternative transport',
        'Waiting time if you stay on-site',
        'Less convenient for busy schedules',
      ],
    },
    comparisonTable: [
      { feature: 'Convenience', optionA: 'Excellent — we come to you', optionB: 'Moderate — you travel to us' },
      { feature: 'Weather Impact', optionA: 'Light rain is fine; heavy rain may delay exterior', optionB: 'No weather impact (indoor)' },
      { feature: 'Valeting Quality', optionA: 'Identical professional results', optionB: 'Identical professional results' },
      { feature: 'Price', optionA: 'Same — no call-out fees', optionB: 'Same' },
      { feature: 'Availability', optionA: '7 days a week', optionB: 'Business hours typically' },
      { feature: 'Your Time', optionA: 'Zero — carry on with your day', optionB: 'Travel + potential waiting time' },
      { feature: 'Best For', optionA: 'Busy professionals, families, fleet vehicles', optionB: 'Multi-day details, ceramic coating' },
    ],
    verdict: 'For valeting services (washing, cleaning, protection), mobile is the clear winner for convenience with no compromise on quality. For multi-day detailing work (paint correction + ceramic coating), a fixed location offers a controlled environment. We offer both options and charge no call-out fees for mobile services across Manchester and Stockport.',
    contentSections: [
      {
        type: 'text',
        heading: 'Why Mobile Valeting Works',
        body: 'Modern mobile valeting units are fully self-contained with their own water supply, power generator and professional equipment. The results are identical to a fixed location. The main advantage is convenience — your car is cleaned while you work, relax at home, or carry on with your day.',
      },
      {
        type: 'text',
        heading: 'When a Fixed Location Is Better',
        body: 'For multi-day work like full paint correction and ceramic coating application, a controlled indoor environment is preferable. Temperature and humidity affect coating cure times, and protection from dust during application ensures the best results. For these services, we recommend our studio.',
      },
    ],
    faqs: [
      { question: 'Do you charge extra for mobile valeting?', answer: 'No. We are locally based and cover all Manchester and Stockport postcodes without call-out fees. Our mobile prices are the same as our studio prices.' },
      { question: 'What do you need from me for a mobile valet?', answer: 'Just access to your vehicle and ideally a driveway or parking space. We bring everything else — water, power, products, and equipment.' },
      { question: 'Can you do ceramic coating as a mobile service?', answer: 'We can apply ceramic coating on-location in suitable conditions (sheltered area, warm day). However, for optimal results, we recommend our controlled studio environment for coating application.' },
    ],
    relatedLinks: [
      { label: 'Mobile Valeting Manchester', href: '/manchester/car-valeting/mobile-valeting', description: 'Our mobile service' },
      { label: 'Car Valeting Manchester', href: '/manchester/car-valeting', description: 'All valeting services' },
      { label: 'Manchester Areas', href: '/manchester/areas', description: 'Areas we cover' },
      { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View pricing' },
    ],
  },
  {
    slug: 'interior-vs-exterior-valeting',
    title: 'Interior vs Exterior Valeting: Which Should You Choose?',
    seo: {
      title: 'Interior vs Exterior Valeting | Which Should You Choose? | SRV Detailing',
      description: 'Interior vs exterior valeting compared. What each includes, when to choose one over the other, and why a full valet combines both.',
      keywords: ['interior vs exterior valeting', 'interior or exterior valet', 'car interior cleaning vs exterior'],
      canonical: 'https://www.srvdetailing.co.uk/compare/interior-vs-exterior-valeting',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare', href: '/compare' },
      { label: 'Interior vs Exterior', href: '/compare/interior-vs-exterior-valeting' },
    ],
    heroTitle: 'Interior vs Exterior Valeting',
    heroDescription: 'Different focuses for different needs. Understand what each service covers to choose the right one.',
    optionA: {
      name: 'Interior Valeting',
      pros: [
        'Removes dirt, bacteria and allergens from the cabin',
        'Treats stains on upholstery and carpets',
        'Conditions leather to prevent cracking',
        'Eliminates odours at the source',
        'Improves comfort and hygiene for passengers',
      ],
      cons: [
        'Doesn\'t address exterior appearance',
        'No paint protection included',
        'Vehicle still looks dirty from outside',
      ],
    },
    optionB: {
      name: 'Exterior Valeting',
      pros: [
        'Restores the car\'s visual kerb appeal',
        'Removes road grime, salt and contaminants',
        'Applies wax or sealant for paint protection',
        'Cleans and dresses wheels and tyres',
        'Prevents paint degradation from neglect',
      ],
      cons: [
        'Doesn\'t address interior cleanliness',
        'No upholstery or odour treatment',
        'Interior remains dirty if neglected',
      ],
    },
    comparisonTable: [
      { feature: 'Focus', optionA: 'Cabin surfaces, seats, carpets', optionB: 'Paintwork, wheels, glass' },
      { feature: 'Duration', optionA: '1.5–2.5 hours', optionB: '1–1.5 hours' },
      { feature: 'Price (from)', optionA: '£80', optionB: '£65' },
      { feature: 'Stain Removal', optionA: 'Yes — upholstery shampooing', optionB: 'N/A' },
      { feature: 'Paint Protection', optionA: 'N/A', optionB: 'Yes — wax or sealant' },
      { feature: 'Odour Removal', optionA: 'Yes', optionB: 'No' },
      { feature: 'Best For', optionA: 'Pet owners, families, allergy sufferers', optionB: 'Kerb appeal, paint maintenance' },
    ],
    verdict: 'A full valet combining both interior and exterior is always the best value. However, if you need to prioritise, choose interior valeting if your cabin is heavily soiled, has odours or stains. Choose exterior valeting if the paintwork is neglected and needs protection. For most vehicles, we recommend a full valet for comprehensive care.',
    contentSections: [
      {
        type: 'text',
        heading: 'When to Prioritise Interior Valeting',
        body: 'Interior valeting should be your priority if you have children, pets, or passengers regularly using the vehicle. Spills, pet hair, food debris and general use leave the cabin dirty and potentially unhygienic. An interior valet deep cleans all surfaces, treats upholstery, and eliminates odours for a fresh, healthy cabin environment.',
      },
      {
        type: 'text',
        heading: 'When to Prioritise Exterior Valeting',
        body: 'Exterior valeting is the priority when your paintwork is exposed to harsh conditions — winter salt, industrial fallout, tree sap, or prolonged outdoor parking. A thorough exterior valet removes contaminants and applies protection to prevent long-term paint damage. It\'s also the right choice before events or viewings where appearance matters.',
      },
    ],
    faqs: [
      { question: 'Is it better to get both done together?', answer: 'Yes. A full valet covers both interior and exterior and provides better value than booking each separately. It also ensures the entire vehicle is cleaned to the same standard.' },
      { question: 'Can you just clean the interior of my car?', answer: 'Absolutely. Interior-only valeting is a popular standalone service, especially for pet owners and families. We\'ll deep clean every surface, treat upholstery, and leave the cabin fresh and hygienic.' },
      { question: 'How often should I valet the interior?', answer: 'Every 4–6 weeks for most vehicles. Cars used for family transport or with pets may benefit from more frequent interior attention. Regular valeting prevents stains from setting and keeps the cabin in good condition.' },
    ],
    relatedLinks: [
      { label: 'Interior Valeting Manchester', href: '/manchester/car-valeting/interior-valeting', description: 'Interior service' },
      { label: 'Exterior Valeting Manchester', href: '/manchester/car-valeting/exterior-valeting', description: 'Exterior service' },
      { label: 'Full Valet Manchester', href: '/manchester/car-valeting/full-valet', description: 'Full valet service' },
      { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View pricing' },
    ],
  },
  {
    slug: 'hand-polish-vs-machine-polish',
    title: 'Hand Polish vs Machine Polish: What\'s the Difference?',
    seo: {
      title: 'Hand Polish vs Machine Polish | What\'s the Difference? | SRV Detailing',
      description: 'Hand polishing vs machine polishing compared. Results, safety, cost and when each method is appropriate — expert guide.',
      keywords: ['hand polish vs machine polish', 'hand polishing vs machine polishing', 'machine polish car'],
      canonical: 'https://www.srvdetailing.co.uk/compare/hand-polish-vs-machine-polish',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare', href: '/compare' },
      { label: 'Hand vs Machine Polish', href: '/compare/hand-polish-vs-machine-polish' },
    ],
    heroTitle: 'Hand Polish vs Machine Polish',
    heroDescription: 'Two very different approaches to paint finishing — one is maintenance, the other is correction. Here\'s what you need to know.',
    optionA: {
      name: 'Hand Polishing',
      pros: [
        'Safe for beginners with low risk of paint damage',
        'No equipment investment needed',
        'Good for applying glazes and light finishing products',
        'Suitable for small areas and touch-ups',
      ],
      cons: [
        'Cannot remove swirl marks or scratches',
        'Inconsistent pressure and coverage',
        'Very time-consuming for full vehicle',
        'Limited correction capability',
      ],
    },
    optionB: {
      name: 'Machine Polishing',
      pros: [
        'Removes swirl marks, scratches and oxidation',
        'Consistent speed, pressure and coverage',
        'Multiple stages available (cutting, polishing, finishing)',
        'Restores paint to showroom or better condition',
        'Essential preparation for ceramic coating',
      ],
      cons: [
        'Requires professional skill and experience',
        'Risk of paint damage if done incorrectly',
        'Equipment investment (professional polishers, pads, compounds)',
        'Takes 6–10+ hours for a full correction',
      ],
    },
    comparisonTable: [
      { feature: 'Defect Removal', optionA: 'None — cosmetic only', optionB: 'Yes — removes swirl marks, scratches, oxidation' },
      { feature: 'Skill Required', optionA: 'Low', optionB: 'High — professional training needed' },
      { feature: 'Risk to Paint', optionA: 'Very low', optionB: 'Moderate if inexperienced (can burn through clear coat)' },
      { feature: 'Time (full vehicle)', optionA: '2–4 hours', optionB: '6–10+ hours' },
      { feature: 'Results', optionA: 'Light gloss enhancement', optionB: 'Full paint correction — mirror finish possible' },
      { feature: 'Cost (professional)', optionA: '£50–£100', optionB: '£250–£800+' },
      { feature: 'Best For', optionA: 'Quick glaze, show prep on good paint', optionB: 'Paint correction, pre-coating preparation' },
    ],
    verdict: 'Machine polishing is the only way to genuinely remove paint defects. Hand polishing is purely cosmetic — it fills minor imperfections temporarily but doesn\'t correct them. For any vehicle with visible swirl marks, scratches, or paint that needs ceramic coating preparation, professional machine polishing is essential. Hand polishing has its place for light maintenance between corrections.',
    contentSections: [
      {
        type: 'text',
        heading: 'Why Machine Polishing Delivers Superior Results',
        body: 'Machine polishers (dual-action or rotary) operate at consistent speed and pressure, allowing controlled removal of a thin layer of clear coat to level out defects. This is true paint correction — the scratches are physically removed, not filled or hidden. A multi-stage machine polish can transform neglected paint into a flawless, mirror-like finish.',
      },
      {
        type: 'text',
        heading: 'The Role of Hand Polishing',
        body: 'Hand polishing is best understood as product application rather than correction. Applying a glaze, wax, or finishing product by hand is safe and effective. Hand polishing is useful for quick show preparation on paint that\'s already in good condition, or for maintaining areas between professional corrections.',
      },
    ],
    faqs: [
      { question: 'Can hand polishing remove scratches?', answer: 'No. Hand polishing does not generate enough consistent friction to level clear coat. It may temporarily hide light marks with fillers in the product, but the defects remain underneath and reappear when the product wears off.' },
      { question: 'Is machine polishing safe for all cars?', answer: 'In professional hands, yes. We measure paint thickness before polishing and adjust our approach accordingly. Single-stage paints, soft paints (like certain Japanese vehicles), and repainted panels all require different techniques.' },
      { question: 'How often can you machine polish a car?', answer: 'A vehicle\'s clear coat can withstand several professional corrections over its lifetime. Typically 3–5 corrections before the clear coat becomes too thin. This is another reason why applying ceramic coating after correction is wise — it reduces the need for future polishing.' },
    ],
    relatedLinks: [
      { label: 'Paint Correction Manchester', href: '/manchester/car-detailing/paint-correction', description: 'Our correction service' },
      { label: 'Swirl Mark Removal', href: '/manchester/car-detailing/swirl-mark-removal', description: 'Remove swirl marks' },
      { label: 'Paint Correction Guide', href: '/guides/paint-correction-guide', description: 'Full guide' },
      { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View pricing' },
    ],
  },
  {
    slug: 'diy-detailing-vs-professional',
    title: 'DIY Detailing vs Professional: Is It Worth Paying?',
    seo: {
      title: 'DIY Detailing vs Professional | Is It Worth Paying? | SRV Detailing',
      description: 'DIY car detailing vs professional detailing compared. Cost, results, risk and time — an honest comparison to help you decide.',
      keywords: ['diy detailing vs professional', 'diy car detailing', 'professional detailing worth it'],
      canonical: 'https://www.srvdetailing.co.uk/compare/diy-detailing-vs-professional',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare', href: '/compare' },
      { label: 'DIY vs Professional', href: '/compare/diy-detailing-vs-professional' },
    ],
    heroTitle: 'DIY Detailing vs Professional',
    heroDescription: 'An honest look at when DIY makes sense and when professional detailing is the smarter investment.',
    optionA: {
      name: 'DIY Detailing',
      pros: [
        'Lower cost per session (products and equipment)',
        'Work at your own pace and schedule',
        'Learn about your vehicle\'s paintwork',
        'Satisfying hands-on hobby for enthusiasts',
      ],
      cons: [
        'Steep learning curve — mistakes can be costly',
        'Significant equipment investment for proper tools',
        'Machine polishing without training risks paint damage',
        'Results rarely match professional standards',
        'Very time-consuming (often 2–3x professional time)',
      ],
    },
    optionB: {
      name: 'Professional Detailing',
      pros: [
        'Expert knowledge of paint types, products and techniques',
        'Professional-grade equipment and compounds',
        'Consistent, high-quality results every time',
        'Insured work — any issues are covered',
        'Time-efficient — your time is freed up',
      ],
      cons: [
        'Higher per-session cost',
        'Need to book in advance',
        'Must trust someone with your vehicle',
        'You don\'t get the satisfaction of doing it yourself',
      ],
    },
    comparisonTable: [
      { feature: 'Cost (first year)', optionA: '£500–£2,000+ (equipment + products)', optionB: '£250–£1,500 (service cost only)' },
      { feature: 'Results', optionA: 'Variable — depends on skill', optionB: 'Consistent professional finish' },
      { feature: 'Risk', optionA: 'High — paint burn, hologramming, swirl marks', optionB: 'Low — insured, experienced' },
      { feature: 'Time Required', optionA: '12–20+ hours (first full detail)', optionB: '6–10 hours (you\'re free)' },
      { feature: 'Paint Correction', optionA: 'Risky without training', optionB: 'Safe — measured and controlled' },
      { feature: 'Ceramic Coating', optionA: 'Consumer-grade (weeks–months)', optionB: 'Professional-grade (years)' },
      { feature: 'Best For', optionA: 'Enthusiasts, learning, maintenance washing', optionB: 'Correction, coating, best results' },
    ],
    verdict: 'DIY maintenance washing (safe hand wash technique) is sensible and we encourage it. But for paint correction and ceramic coating, professional detailing is the wise investment. The risk of damaging your clear coat with a machine polisher without training far outweighs the savings. A good compromise: maintain your car yourself between professional annual details.',
    contentSections: [
      {
        type: 'text',
        heading: 'What You Can Safely Do Yourself',
        body: 'Safe hand washing using the two-bucket method, interior vacuuming, glass cleaning, and applying spray wax or quick detailer are all sensible DIY tasks. These maintenance activities keep your car looking good between professional appointments without risking damage to your paintwork.',
      },
      {
        type: 'text',
        heading: 'What Should Be Left to Professionals',
        body: 'Paint correction (machine polishing), ceramic coating application, wet sanding, and any work involving rotary polishers should be left to trained professionals. Incorrect machine polishing can permanently damage clear coat, create holograms, or burn through to the base coat — damage that costs far more to repair than the professional service would have.',
      },
    ],
    faqs: [
      { question: 'Can I ceramic coat my car myself?', answer: 'Consumer-grade ceramic coatings are available, but they last weeks to months rather than years. Professional coatings require proper paint correction preparation and controlled application conditions. The coating locks in whatever is underneath, so proper prep is critical.' },
      { question: 'What DIY products do you recommend?', answer: 'For safe washing: a snow foam lance, two-bucket kit with grit guards, pH-neutral shampoo, quality microfibre mitts and drying towels. Avoid any abrasive products (compounds, polishes) without proper training.' },
      { question: 'How much does it cost to set up for DIY detailing?', answer: 'A basic safe wash kit costs £50–£100. A full DIY setup with pressure washer, polisher, compounds, pads and accessories easily reaches £500–£2,000+. Factor in your time and the risk of mistakes before deciding.' },
    ],
    relatedLinks: [
      { label: 'What Is Car Detailing?', href: '/guides/what-is-car-detailing', description: 'Understand the process' },
      { label: 'Car Detailing Manchester', href: '/manchester/car-detailing', description: 'Our professional service' },
      { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View our pricing' },
      { label: 'Is Detailing Worth It?', href: '/guides/is-car-detailing-worth-it', description: 'Value analysis' },
    ],
  },
];

export function getComparisonBySlug(slug: string): ComparePageData | undefined {
  return comparisonsData.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisonsData.map((c) => c.slug);
}
