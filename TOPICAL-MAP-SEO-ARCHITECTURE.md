# SRV Detailing — Comprehensive Topical Map & SEO Architecture
**Last updated: February 2026 | Live site: https://www.srvdetailing.co.uk/**

> **READ-ONLY PLANNING DOCUMENT** — No code changes are encoded here. This map is the authoritative reference for URL structure, content strategy, internal linking rules, and schema markup requirements. Consult it when building new pages.

---

## Status Key
| Symbol | Meaning |
|--------|---------|
| ✅ | Page data exists in `src/data/` |
| 🔧 | Route/template exists but data may be partial |
| 📋 | Planned — data file needed |
| 🔗 | Internal link target (not a standalone page) |

---

## 1. SITE ARCHITECTURE OVERVIEW

```
srvdetailing.co.uk/
├── /                          ✅ Homepage
├── /about-us                  ✅ About
├── /contact                   ✅ Contact / Booking
├── /gallery                   ✅ Gallery
├── /blog                      ✅ Blog hub
│
├── /stockport/                ✅ Stockport hub
│   ├── /car-detailing/        ✅ Stockport detailing hub
│   ├── /car-valeting/         ✅ Stockport valeting hub
│   ├── /car-wash              ✅ Stockport car wash
│   └── /areas/                ← Stockport suburb pages
│
├── /manchester/               ✅ Manchester hub
│   ├── /car-detailing/        ✅ Manchester detailing hub
│   ├── /car-valeting/         ✅ Manchester valeting hub
│   ├── /car-wash              ✅ Manchester car wash
│   └── /areas/                ← Manchester area pages
│
├── /services/                 🔧 Services listing
│   └── /[slug]                🔧 Generic service pages
│
├── /pricing/                  ✅ Pricing hub
│   ├── /car-detailing         ✅ Detailing prices
│   └── /car-valeting          ✅ Valeting prices
│
├── /compare/                  ✅ Comparison hub
│   └── /[slug]                ✅ Comparison pages (8 live)
│
├── /guides/                   ✅ Guides hub
│   └── /[slug]                ✅ Individual guides
│
└── /faq                       📋 FAQ hub
```

---

## 2. STOCKPORT HUB — Complete Coverage

**Hub page:** `/stockport` ✅
**Target keywords:** car detailing stockport, car valeting stockport, mobile car detailing stockport, ceramic coating stockport
**Schema:** LocalBusiness + AutoDetailing + BreadcrumbList

### 2.0 Stockport — Car Wash
**URL:** `/stockport/car-wash` ✅
**Primary keyword:** car wash stockport, hand car wash stockport, mobile car wash stockport

---

### 2.1 Stockport — Car Detailing Sub-Hub
**URL:** `/stockport/car-detailing` ✅
**Pillar keyword:** car detailing stockport

#### Service Pages under `/stockport/car-detailing/`
| Page | URL slug | Status | Primary keyword |
|------|----------|--------|-----------------|
| Ceramic Coating | `ceramic-coating` | ✅ | ceramic coating stockport |
| Paint Correction | `paint-correction` | ✅ | paint correction stockport |
| Headlight Restoration | `headlight-restoration` | ✅ | headlight restoration stockport |
| New Car Protection | `new-car-protection` | ✅ | new car protection stockport |
| Interior Detailing | `interior-detailing` | 📋 | interior detailing stockport |
| Exterior Detailing | `exterior-detailing` | 📋 | exterior detailing stockport |
| Swirl Mark Removal | `swirl-mark-removal` | 📋 | swirl mark removal stockport |
| Engine Bay Detailing | `engine-bay-detailing` | 📋 | engine bay detailing stockport |
| Leather Conditioning | `leather-conditioning` | 📋 | leather conditioning stockport |

### 2.2 Stockport — Car Valeting Sub-Hub
**URL:** `/stockport/car-valeting` ✅
**Pillar keyword:** car valeting stockport, mobile car valeting stockport

#### Service Pages under `/stockport/car-valeting/`
| Page | URL slug | Status | Primary keyword |
|------|----------|--------|-----------------|
| Mobile Valeting | `mobile-valeting` | ✅ | mobile car valeting stockport |
| Full Valet | `full-valet` | ✅ | full valet stockport |
| Mini Valet | `mini-valet` | ✅ | mini valet stockport |
| Interior Valeting | `interior-valeting` | ✅ | interior valeting stockport |
| Exterior Valeting | `exterior-valeting` | ✅ | exterior valeting stockport |
| Pet Hair Removal | `pet-hair-removal` | 📋 | pet hair removal stockport |
| Odour Removal | `odour-removal` | 📋 | car odour removal stockport |
| Upholstery Cleaning | `upholstery-cleaning` | 📋 | upholstery cleaning stockport |

---

## 3. STOCKPORT SUBURB PAGES — Complete Coverage

**URL pattern:** `/stockport/areas/[slug]`
**Schema per page:** LocalBusiness + AutoDetailing + BreadcrumbList + FAQPage + GeoCoordinates
**Every suburb page must link to:** Parent hub `/stockport`, both service hubs, and 2–3 neighbouring suburbs

### 3.1 Currently Implemented Suburbs

| Suburb | URL slug | Postcode | Status |
|--------|----------|----------|--------|
| Bramhall | `bramhall` | SK7 | ✅ |
| Cheadle (incl. Cheadle Hulme, Gatley, Heald Green) | `cheadle` | SK8 | ✅ |
| Marple (incl. Marple Bridge, Mellor) | `marple` | SK6 | ✅ |
| Hazel Grove (incl. Poynton, High Lane) | `hazel-grove` | SK7, SK12 | ✅ |
| Heaton Moor (incl. Heaton Mersey, Heaton Chapel, Heaton Norris) | `heaton-moor` | SK4 | ✅ |
| Edgeley (incl. Stockport Centre) | `edgeley` | SK3 | ✅ |
| Reddish (incl. North & South Reddish) | `reddish` | SK5 | ✅ |

### 3.2 New Suburb Pages Required

> These suburbs are referenced in hub copy but lack dedicated pages. Each needs a full `AreaPageData` entry in `src/data/stockport/areas/areas-data.ts`.

| Suburb | URL slug | Postcode | Priority | Target keywords |
|--------|----------|----------|----------|-----------------|
| Cheadle Hulme | `cheadle-hulme` | SK8 | HIGH | car detailing cheadle hulme, mobile valeting cheadle hulme |
| Heald Green | `heald-green` | SK8 | HIGH | car valeting heald green, mobile car valet heald green |
| Gatley | `gatley` | SK8 | HIGH | car detailing gatley, car valeting gatley stockport |
| Bredbury | `bredbury` | SK6 | HIGH | car detailing bredbury, mobile valeting bredbury |
| Romiley | `romiley` | SK6 | HIGH | car detailing romiley, car valeting romiley |
| Offerton | `offerton` | SK1, SK2 | MED | car detailing offerton, mobile valeting offerton stockport |
| Davenport | `davenport` | SK3 | MED | car detailing davenport stockport, mobile valeting davenport |
| Heaton Mersey | `heaton-mersey` | SK4 | MED | car detailing heaton mersey, valeting heaton mersey |
| Heaton Chapel | `heaton-chapel` | SK4 | MED | car valeting heaton chapel, mobile detailing heaton chapel |
| Woodley | `woodley` | SK6 | MED | car detailing woodley, mobile car valeting woodley |
| Stepping Hill | `stepping-hill` | SK7 | MED | car valeting stepping hill, mobile detailing stepping hill |
| Brinnington | `brinnington` | SK5 | MED | car valeting brinnington, mobile valet brinnington |
| Shaw Heath | `shaw-heath` | SK3 | LOW | car valeting shaw heath stockport |
| Davenport Park | `davenport-park` | SK3 | LOW | car detailing davenport park |
| Woodsmoor | `woodsmoor` | SK3, SK7 | LOW | car detailing woodsmoor, mobile valeting woodsmoor |
| Offerton Park | `offerton-park` | SK2 | LOW | mobile car valeting offerton park |

### 3.3 Service Coverage Matrix per Stockport Suburb

> Use this matrix to confirm content scope for each suburb page. Every page should explicitly mention the services most relevant to that suburb's demographics.

| Suburb | Car Detailing | Mobile Valeting | Ceramic Coating | Paint Correction | Interior Detail | Headlight Rest. | Pet Hair/Odour | Leather Cond. |
|--------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Bramhall | ✅ | ✅ | ✅ HIGH | ✅ HIGH | ✅ | ✅ | 🔗 | ✅ HIGH |
| Cheadle | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔗 | ✅ |
| Cheadle Hulme | 📋 | 📋 | ✅ HIGH | ✅ | ✅ | ✅ | 🔗 | ✅ |
| Heald Green | 📋 | 📋 | ✅ | ✅ | ✅ | ✅ | 🔗 | 🔗 |
| Gatley | 📋 | 📋 | 🔗 | ✅ | ✅ | 🔗 | 🔗 | 🔗 |
| Hazel Grove | ✅ | ✅ | ✅ | ✅ HIGH | ✅ | ✅ | 🔗 | 🔗 |
| Marple | ✅ | ✅ | ✅ | ✅ HIGH | ✅ | ✅ HIGH | 🔗 | 🔗 |
| Bredbury | 📋 | 📋 | 🔗 | ✅ | ✅ | ✅ | 🔗 | 🔗 |
| Romiley | 📋 | 📋 | 🔗 | ✅ | ✅ | ✅ | 🔗 | 🔗 |
| Offerton | 📋 | 📋 | 🔗 | 🔗 | ✅ | 🔗 | ✅ HIGH | 🔗 |
| Heaton Moor | ✅ | ✅ | ✅ HIGH | ✅ | ✅ HIGH | ✅ | 🔗 | ✅ HIGH |
| Heaton Mersey | 📋 | 📋 | ✅ | ✅ | ✅ | 🔗 | 🔗 | ✅ |
| Heaton Chapel | 📋 | 📋 | ✅ | ✅ | ✅ | 🔗 | 🔗 | ✅ |
| Edgeley | ✅ | ✅ | 🔗 | ✅ | ✅ | ✅ | ✅ HIGH | 🔗 |
| Reddish | ✅ | ✅ | 🔗 | ✅ | ✅ | ✅ | ✅ HIGH | 🔗 |
| Davenport | 📋 | 📋 | 🔗 | 🔗 | ✅ | 🔗 | 🔗 | 🔗 |
| Woodley | 📋 | 📋 | 🔗 | ✅ | ✅ | ✅ HIGH | 🔗 | 🔗 |
| Stepping Hill | 📋 | 📋 | 🔗 | 🔗 | ✅ | ✅ | ✅ HIGH | 🔗 |
| Brinnington | 📋 | 📋 | 🔗 | 🔗 | ✅ | ✅ | ✅ HIGH | 🔗 |
| Shaw Heath | 📋 | 📋 | 🔗 | 🔗 | ✅ | 🔗 | 🔗 | 🔗 |
| Davenport Park | 📋 | 📋 | ✅ HIGH | ✅ | ✅ | 🔗 | 🔗 | ✅ HIGH |
| Woodsmoor | 📋 | 📋 | ✅ HIGH | ✅ | ✅ | 🔗 | 🔗 | ✅ |
| Offerton Park | 📋 | 📋 | 🔗 | 🔗 | ✅ | 🔗 | ✅ | 🔗 |

**Legend:** ✅ = mention prominently, 🔗 = link to service page only, HIGH = primary selling point for this suburb, 📋 = page to be created

---

## 4. MANCHESTER HUB — Complete Coverage

**Hub page:** `/manchester` ✅
**Target keywords:** car detailing manchester, car valeting manchester, mobile car detailing manchester
**Schema:** LocalBusiness + AutoDetailing + BreadcrumbList

### 4.0 Manchester — Car Wash
**URL:** `/manchester/car-wash` ✅
**Primary keyword:** car wash manchester, hand car wash manchester, mobile car wash manchester

---

### 4.1 Manchester — Car Detailing Sub-Hub
**URL:** `/manchester/car-detailing` ✅

#### Service Pages under `/manchester/car-detailing/`
| Page | URL slug | Status | Primary keyword |
|------|----------|--------|-----------------|
| Ceramic Coating | `ceramic-coating` | ✅ | ceramic coating manchester |
| Paint Correction | `paint-correction` | ✅ | paint correction manchester |
| Headlight Restoration | `headlight-restoration` | ✅ | headlight restoration manchester |
| New Car Protection | `new-car-protection` | ✅ | new car protection manchester |
| Interior Detailing | `interior-detailing` | ✅ | interior detailing manchester |
| Exterior Detailing | `exterior-detailing` | ✅ | exterior detailing manchester |
| Swirl Mark Removal | `swirl-mark-removal` | ✅ | swirl mark removal manchester |
| Engine Bay Detailing | `engine-bay-detailing` | ✅ | engine bay detailing manchester |
| Leather Conditioning | `leather-conditioning` | ✅ | leather conditioning manchester |

### 4.2 Manchester — Car Valeting Sub-Hub
**URL:** `/manchester/car-valeting` ✅

#### Service Pages under `/manchester/car-valeting/`
| Page | URL slug | Status | Primary keyword |
|------|----------|--------|-----------------|
| Mobile Valeting | `mobile-valeting` | ✅ | mobile car valeting manchester |
| Full Valet | `full-valet` | ✅ | full valet manchester |
| Mini Valet | `mini-valet` | ✅ | mini valet manchester |
| Interior Valeting | `interior-valeting` | ✅ | interior valeting manchester |
| Exterior Valeting | `exterior-valeting` | ✅ | exterior valeting manchester |
| Pet Hair Removal | `pet-hair-removal` | ✅ | pet hair removal manchester |
| Odour Removal | `odour-removal` | ✅ | car odour removal manchester |
| Upholstery Cleaning | `upholstery-cleaning` | ✅ | upholstery cleaning manchester |

---

## 5. MANCHESTER AREA PAGES — Complete Coverage

**URL pattern:** `/manchester/areas/[slug]`
**All 13 primary areas implemented:** ✅

### 5.1 Implemented Manchester Areas

| Area | URL slug | Postcodes | Status |
|------|----------|-----------|--------|
| Manchester City Centre | `city-centre` | M1–M4 | ✅ |
| Didsbury | `didsbury` | M20 | ✅ |
| Chorlton | `chorlton` | M21 | ✅ |
| Salford | `salford` | M5–M7 | ✅ |
| Trafford | `trafford` | M16, M32, M41 | ✅ |
| Sale | `sale` | M33 | ✅ |
| Altrincham | `altrincham` | WA14, WA15 | ✅ |
| Oldham | `oldham` | OL1–OL4 | ✅ |
| Rochdale | `rochdale` | OL11, OL12, OL16 | ✅ |
| Bury | `bury` | BL8, BL9 | ✅ |
| Bolton | `bolton` | BL1–BL3 | ✅ |
| Wigan | `wigan` | WN1–WN6 | ✅ |
| Tameside | `tameside` | OL5–OL7, SK14–SK16 | ✅ |

### 5.2 Manchester Sub-Area Pages (Expansion Opportunity)

> High-value suburb pages that currently sit under a Manchester area page but could benefit from their own dedicated pages as search volume justifies.

| Sub-Area | Parent Area | URL slug | Priority | Primary keyword |
|----------|-------------|----------|----------|-----------------|
| Hale | Altrincham | `hale` | HIGH | car detailing hale, mobile valeting hale |
| Bowdon | Altrincham | `bowdon` | HIGH | car detailing bowdon altrincham |
| Timperley | Altrincham | `timperley` | MED | car valeting timperley |
| Urmston | Trafford | `urmston` | HIGH | mobile valeting urmston |
| Stretford | Trafford | `stretford` | MED | car valeting stretford |
| Withington | Didsbury | `withington` | MED | car valeting withington |
| West Didsbury | Didsbury | `west-didsbury` | MED | car detailing west didsbury |
| Prestwich | Bury | `prestwich` | MED | mobile valeting prestwich |
| Whitefield | Bury | `whitefield` | MED | car valeting whitefield |
| Salford Quays | Salford | `salford-quays` | MED | mobile car valeting salford quays |
| Ashton-under-Lyne | Tameside | `ashton-under-lyne` | HIGH | car detailing ashton under lyne |
| Hyde | Tameside | `hyde` | HIGH | car valeting hyde tameside |
| Denton | Tameside | `denton` | MED | mobile valeting denton |
| Stalybridge | Tameside | `stalybridge` | MED | car detailing stalybridge |
| Middleton | Rochdale | `middleton` | MED | mobile car valeting middleton |
| Horwich | Bolton | `horwich` | LOW | car valeting horwich bolton |

### 5.3 Manchester Area Service Coverage Matrix

| Area | Ceramic Coating | Paint Correction | Mobile Valeting | Full Valet | Interior Detail | Headlight | Pet Hair | Leather |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| City Centre | ✅ HIGH | ✅ HIGH | ✅ | ✅ | ✅ HIGH | ✅ | 🔗 | 🔗 |
| Didsbury | ✅ HIGH | ✅ HIGH | ✅ | ✅ | ✅ | ✅ | 🔗 | ✅ HIGH |
| Chorlton | ✅ | ✅ HIGH | ✅ | ✅ HIGH | ✅ HIGH | 🔗 | ✅ HIGH | ✅ |
| Salford | ✅ | ✅ | ✅ HIGH | ✅ | ✅ HIGH | ✅ | 🔗 | 🔗 |
| Trafford | ✅ HIGH | ✅ HIGH | ✅ | ✅ | ✅ | ✅ HIGH | 🔗 | 🔗 |
| Sale | ✅ | ✅ | ✅ | ✅ HIGH | ✅ | ✅ | ✅ HIGH | ✅ |
| Altrincham | ✅ HIGH | ✅ HIGH | ✅ | ✅ | ✅ HIGH | ✅ | 🔗 | ✅ HIGH |
| Oldham | 🔗 | ✅ | ✅ HIGH | ✅ | ✅ | ✅ HIGH | 🔗 | 🔗 |
| Rochdale | 🔗 | ✅ | ✅ HIGH | ✅ | ✅ | ✅ | 🔗 | 🔗 |
| Bury | 🔗 | ✅ | ✅ HIGH | ✅ | ✅ | ✅ | ✅ HIGH | 🔗 |
| Bolton | 🔗 | ✅ | ✅ HIGH | ✅ | ✅ | ✅ | 🔗 | 🔗 |
| Wigan | 🔗 | 🔗 | ✅ HIGH | ✅ HIGH | ✅ | ✅ HIGH | 🔗 | 🔗 |
| Tameside | ✅ HIGH | ✅ HIGH | ✅ | ✅ HIGH | ✅ | ✅ HIGH | ✅ HIGH | ✅ |

---

## 6. SERVICES HUB

**URL:** `/services` 🔧
**Purpose:** Catch-all for users searching generic service terms not tied to a specific location.

### 6.1 Generic Service Landing Pages
**URL pattern:** `/services/[slug]`

| Page | URL slug | Status | Primary keyword |
|------|----------|--------|-----------------|
| Car Detailing | `car-detailing` | 🔧 | car detailing near me |
| Mobile Car Valeting | `mobile-car-valeting` | 🔧 | mobile car valeting near me |
| Ceramic Coating | `ceramic-coating` | 🔧 | ceramic coating near me |
| Paint Correction | `paint-correction` | 🔧 | paint correction near me |
| Interior Detailing | `interior-detailing` | 🔧 | interior car detailing near me |
| Exterior Detailing | `exterior-detailing` | 🔧 | exterior car detailing |
| Headlight Restoration | `headlight-restoration` | 🔧 | headlight restoration near me |
| Leather Conditioning | `leather-conditioning` | 📋 | car leather conditioning |
| Pet Hair & Odour Removal | `pet-hair-odour-removal` | 📋 | pet hair removal from car |

> **Note on canonicals:** Generic `/services/[slug]` pages should canonicalise to or redirect to the Manchester equivalent (`/manchester/car-detailing/[slug]`) to avoid thin/duplicate content. Alternatively, treat these as location-agnostic "what is this service" explainers that link downstream to both Manchester and Stockport service pages.

---

## 7. GUIDES / BLOG HUB

**URL:** `/guides` ✅ (data in `src/data/guides/guides-data.ts`)
**Blog URL:** `/blog` ✅ (data in `src/data/blog/blog-data.ts`)
**Schema per guide:** Article + BreadcrumbList + FAQPage + Author

### 7.1 Existing Guides (Confirmed in Data)

| Guide | URL slug | Status |
|-------|----------|--------|
| What Is Car Detailing? | `what-is-car-detailing` | ✅ |
| What Is Car Valeting? | `what-is-car-valeting` | ✅ (referenced) |
| Ceramic Coating Explained | `ceramic-coating-explained` | ✅ (referenced) |
| Paint Correction Guide | `paint-correction-guide` | ✅ (referenced) |
| Is Car Detailing Worth It? | `is-car-detailing-worth-it` | ✅ (referenced) |

### 7.2 Additional Guides to Create

#### How-To Guides Cluster
| Guide | URL slug | Target keyword | Priority |
|-------|----------|----------------|----------|
| How to Maintain a Ceramic Coating | `how-to-maintain-ceramic-coating` | how to maintain ceramic coating | HIGH |
| Car Valeting Checklist | `car-valeting-checklist` | car valeting checklist | HIGH |
| How to Remove Swirl Marks | `how-to-remove-swirl-marks` | how to remove swirl marks from car | HIGH |
| How to Clean Car Leather Seats | `how-to-clean-leather-car-seats` | how to clean leather car seats | HIGH |
| How to Remove Pet Hair from Car | `how-to-remove-pet-hair-from-car` | how to remove pet hair from car seats | HIGH |
| How to Get Rid of Car Odours | `how-to-get-rid-of-car-odours` | how to get rid of car smell | MED |
| How to Restore Headlights | `how-to-restore-headlights` | how to restore yellowed headlights | MED |
| How to Protect a New Car's Paint | `how-to-protect-new-car-paint` | new car paint protection guide | MED |
| How to Wash a Car Without Swirl Marks | `how-to-wash-car-without-swirl-marks` | safe car wash technique | MED |
| How to Detail a Car Interior | `how-to-detail-car-interior` | car interior detailing guide | MED |

#### Informational Guides Cluster
| Guide | URL slug | Target keyword | Priority |
|-------|----------|----------------|----------|
| What Is Paint Correction? | `what-is-paint-correction` | what is paint correction | HIGH |
| Car Detailing vs Car Wash | `car-detailing-vs-car-wash` | car detailing vs car wash | HIGH |
| How Long Does Ceramic Coating Last? | `how-long-does-ceramic-coating-last` | how long does ceramic coating last | HIGH |
| What Causes Swirl Marks? | `what-causes-swirl-marks` | what causes swirl marks on car | MED |
| What Is Mobile Valeting? | `what-is-mobile-valeting` | what is mobile car valeting | MED |
| How Often Should You Valet Your Car? | `how-often-car-valet` | how often should you valet your car | MED |
| Car Detailing Before Selling | `car-detailing-before-selling` | car detailing before selling | MED |
| Best Car Detailing Products UK | `best-car-detailing-products-uk` | best car detailing products uk | MED |
| Engine Bay Detailing Guide | `engine-bay-detailing-guide` | engine bay detailing guide | LOW |

#### Local Content / Blog Posts Cluster
| Article | URL slug | Target keyword | Priority |
|---------|----------|----------------|----------|
| Best Car Detailing in Stockport | `best-car-detailing-stockport` | best car detailing stockport | HIGH |
| Best Car Detailing in Manchester | `best-car-detailing-manchester` | best car detailing manchester | HIGH |
| Mobile Car Valeting Stockport — What to Expect | `mobile-valeting-stockport-guide` | mobile car valeting stockport | HIGH |
| Why Manchester Cars Need Ceramic Coating | `why-manchester-cars-need-ceramic-coating` | ceramic coating manchester | MED |
| Protecting Your Car in a Manchester Winter | `car-protection-manchester-winter` | car protection winter manchester | MED |
| Car Detailing for Prestige Vehicles in Stockport | `prestige-car-detailing-stockport` | prestige car detailing stockport | MED |

---

## 8. COMPARISON PAGES HUB

**URL:** `/compare` ✅ (data in `src/data/compare/comparisons-data.ts`)
**Schema:** Article + FAQPage + BreadcrumbList

### 8.1 Existing Comparison Pages

| Comparison | URL slug | Status |
|------------|----------|--------|
| Car Detailing vs Car Valeting | `car-detailing-vs-car-valeting` | ✅ |
| Ceramic Coating vs Wax | `ceramic-coating-vs-wax` | ✅ |
| Ceramic Coating vs PPF | `ceramic-coating-vs-ppf` | ✅ |
| Full Valet vs Mini Valet | `full-valet-vs-mini-valet` | ✅ |
| Mobile Valeting vs Fixed Location | `mobile-valeting-vs-fixed-location` | ✅ |
| Interior vs Exterior Valeting | `interior-vs-exterior-valeting` | ✅ |
| Hand Polish vs Machine Polish | `hand-polish-vs-machine-polish` | ✅ |
| DIY Detailing vs Professional | `diy-detailing-vs-professional` | ✅ |

### 8.2 Additional Comparison Pages to Create

| Comparison | URL slug | Target keyword | Priority |
|------------|----------|----------------|----------|
| Paint Correction vs Respray | `paint-correction-vs-respray` | paint correction vs respray | HIGH |
| Ceramic Coating vs Paint Sealant | `ceramic-coating-vs-paint-sealant` | ceramic coating vs paint sealant | HIGH |
| Single Stage vs Two Stage Correction | `single-stage-vs-two-stage-correction` | single stage vs two stage paint correction | MED |
| Pressure Washer vs Hand Wash | `pressure-washer-vs-hand-wash` | pressure washer vs hand wash car | MED |
| New Car Protection vs Used Car Detailing | `new-car-vs-used-car-detailing` | new car protection coating | MED |
| Foam Cannon vs Two Bucket Wash | `foam-cannon-vs-two-bucket` | foam cannon vs two bucket | LOW |

---

## 9. PRICING HUB

**URL:** `/pricing` ✅
**Schema:** PriceSpecification + FAQPage

### 9.1 Existing Pricing Pages

| Page | URL slug | Status |
|------|----------|--------|
| Car Detailing Prices | `car-detailing` | ✅ |
| Car Valeting Prices | `car-valeting` | ✅ |

### 9.2 Additional Pricing Pages to Create

| Page | URL slug | Target keyword | Priority |
|------|----------|----------------|----------|
| Ceramic Coating Cost Guide | `ceramic-coating-cost` | how much does ceramic coating cost uk | HIGH |
| Paint Correction Cost Guide | `paint-correction-cost` | paint correction cost uk | HIGH |
| Full Valet Price Guide | `full-valet-price-guide` | full valet price uk | MED |
| Mobile Valeting Prices | `mobile-valeting-prices` | mobile car valeting prices | MED |

### 9.3 Current Pricing Reference Data

| Service | Small / Hatchback | Medium / Saloon-Estate | Large / SUV-Van |
|---------|:-----------------:|:----------------------:|:---------------:|
| Mini Valet | £50 | £65 | £80 |
| Full Valet | £120 | £150 | £190 |
| Premium Valet | £180 | £220 | £280 |
| Single-Stage Correction | £250 | £300 | £380 |
| 2-Stage Correction + 2yr Coating | £500 | £650 | £800 |
| Premium Detail + 5yr Coating | £900 | £1,100 | £1,400 |

---

## 10. FAQ HUB

**URL:** `/faq` 📋 (data exists in `src/data/faq/faq-data.ts` — route needs implementing)
**Schema:** FAQPage

### 10.1 FAQ Clusters

#### General / Business
- Where is SRV Detailing based?
- What areas do you cover?
- Do you need water or electricity at my location?
- Are you fully insured?
- How do I book?
- Do you offer same-day bookings?
- What payment methods do you accept?

#### Car Detailing
- What is the difference between detailing and valeting?
- How long does car detailing take?
- How often should I get my car detailed?
- Is car detailing worth it?
- Can I book detailing for a new car?
- What paint correction stages do you offer?

#### Ceramic Coating
- How long does ceramic coating last?
- How much does ceramic coating cost?
- Do I need paint correction before ceramic coating?
- Can ceramic coating be applied to plastic trim?
- How do I maintain a ceramic coating?
- Does ceramic coating prevent stone chips?

#### Car Valeting
- How long does a full valet take?
- How often should I get my car valeted?
- Can you valet in bad weather?
- What is included in a full valet?
- Do you offer regular booking discounts?
- Can you remove pet hair from seats?

#### Stockport-Specific
- Do you cover all SK postcodes?
- How quickly can you reach my Stockport address?
- Do you work in Stockport town centre car parks?
- Can you come to my workplace in Stockport?

#### Manchester-Specific
- Do you cover all Greater Manchester areas?
- Can you work in apartment car parks in Manchester?
- How far do you travel from your Stockport base?
- Do you charge extra for travel to Manchester?

### 10.2 FAQ URL Structure
```
/faq                     ← Hub (all FAQs) — section anchors:
/faq#general
/faq#ceramic-coating
/faq#valeting
/faq#detailing
/faq#booking
/faq#stockport
/faq#manchester
```

---

## 11. INTERNAL LINKING RULES

### 11.1 Mandatory Links on Every Page Type

**Hub pages** (`/stockport`, `/manchester`) must link to:
- Both service sub-hubs (`/car-detailing`, `/car-valeting`)
- Top 7–10 suburb/area pages
- Pricing hub
- Contact/booking page

**Service sub-hub pages** (`/stockport/car-detailing`, etc.) must link to:
- Parent hub
- All individual service pages under the hub
- Pricing page for that service type
- 1–2 relevant guides
- 3–5 suburb pages ("We also serve [Bramhall], [Cheadle]…")

**Individual service pages** (e.g. `/manchester/car-detailing/ceramic-coating`) must link to:
- Parent service hub
- Parent location hub
- Pricing page
- Related comparison page
- Related guide
- 2–3 area pages where this service is most popular

**Suburb/area pages** must link to:
- Parent location hub
- Both service hubs
- 2–3 individual service pages most relevant to that area's demographics
- 2–3 neighbouring suburb pages
- Pricing page
- Contact page

**Guides** must link to:
- The most relevant service page
- Related comparison page
- Pricing page
- Contact page
- 1–2 location hub pages

**Comparison pages** must link to:
- Both compared service pages
- Relevant guide(s)
- Pricing page
- Contact page

### 11.2 Internal Link Anchor Text Guidelines

| Destination | Preferred anchor text |
|-------------|----------------------|
| `/manchester/car-detailing/ceramic-coating` | "ceramic coating Manchester", "professional ceramic coating", "ceramic coating service" |
| `/manchester/car-valeting/mobile-valeting` | "mobile car valeting Manchester", "mobile valeting service" |
| `/stockport` | "car detailing Stockport", "Stockport car care", "Stockport valeting" |
| `/manchester` | "car detailing Manchester", "Manchester mobile detailing" |
| `/pricing/car-detailing` | "detailing prices", "ceramic coating cost", "view our pricing" |
| `/compare/ceramic-coating-vs-wax` | "ceramic coating vs wax", "which protection is best" |
| `/guides/ceramic-coating-explained` | "ceramic coating guide", "what is ceramic coating" |
| `/contact` | "get a free quote", "book now", "contact us" |

### 11.3 Suburb-to-Suburb Linking Matrix (Stockport)

> Link geographically adjacent suburbs only. Cap at 3–4 suburb links per page.

| Suburb | Recommended neighbour links |
|--------|----------------------------|
| Bramhall | Cheadle Hulme, Hazel Grove, Cheadle, Davenport Park |
| Cheadle | Cheadle Hulme, Gatley, Heald Green, Heaton Moor |
| Cheadle Hulme | Bramhall, Cheadle, Gatley, Heald Green |
| Heald Green | Cheadle, Cheadle Hulme, Gatley |
| Gatley | Cheadle, Cheadle Hulme, Heald Green |
| Hazel Grove | Bramhall, Stepping Hill, Marple, Woodsmoor |
| Marple | Hazel Grove, Bredbury, Romiley, Woodley |
| Bredbury | Marple, Romiley, Woodley, Offerton |
| Romiley | Marple, Bredbury, Woodley |
| Woodley | Marple, Bredbury, Romiley |
| Offerton | Edgeley, Reddish, Brinnington, Offerton Park |
| Heaton Moor | Heaton Mersey, Heaton Chapel, Cheadle, Edgeley |
| Heaton Mersey | Heaton Moor, Heaton Chapel |
| Heaton Chapel | Heaton Moor, Heaton Mersey |
| Edgeley | Heaton Moor, Reddish, Davenport, Shaw Heath |
| Reddish | Edgeley, Offerton, Brinnington |
| Davenport | Edgeley, Shaw Heath, Davenport Park, Woodsmoor |
| Shaw Heath | Edgeley, Davenport |
| Davenport Park | Davenport, Woodsmoor, Bramhall |
| Woodsmoor | Davenport Park, Davenport, Hazel Grove |
| Stepping Hill | Hazel Grove, Offerton Park, Woodsmoor |
| Brinnington | Reddish, Offerton, Offerton Park |
| Offerton Park | Offerton, Stepping Hill, Brinnington |

---

## 12. SCHEMA MARKUP REQUIREMENTS

### 12.1 Root Layout Schema (Implemented in `src/app/layout.tsx`)
- `LocalBusiness` (type: `AutoDetailing`)
- `Organization`
- Business name, address, phone, opening hours
- `areaServed` array covering all SK and Greater Manchester postcodes
- `geo` (Dukinfield, SK16 coordinates)

### 12.2 Page-Level Schema Requirements

| Page Type | Required Schema Types |
|-----------|----------------------|
| Hub pages (Stockport, Manchester) | `LocalBusiness`, `BreadcrumbList`, `FAQPage` |
| Service sub-hub pages | `Service`, `LocalBusiness`, `BreadcrumbList` |
| Individual service pages | `Service`, `BreadcrumbList`, `FAQPage`, `Offer` |
| Suburb/area pages | `LocalBusiness`, `BreadcrumbList`, `FAQPage`, `GeoCoordinates` |
| Guide pages | `Article`, `BreadcrumbList`, `FAQPage` |
| Comparison pages | `Article`, `BreadcrumbList`, `FAQPage` |
| Pricing pages | `Service`, `BreadcrumbList`, `PriceSpecification`, `FAQPage` |
| FAQ hub | `FAQPage`, `BreadcrumbList` |
| Blog posts | `BlogPosting`, `BreadcrumbList`, `FAQPage` |

### 12.3 Service Page Schema Template
```json
{
  "@type": "Service",
  "name": "[Service Name] in [Location]",
  "provider": { "@id": "https://www.srvdetailing.co.uk/#business" },
  "areaServed": { "@type": "Place", "name": "[Area]", "postalCode": "[Postcode]" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "[Starting price]",
    "description": "From £[price] for standard hatchbacks. Mobile service included."
  },
  "serviceType": "Mobile Car Detailing"
}
```

---

## 13. LOCAL SEO SIGNALS & GMB INTEGRATION

### 13.1 NAP Consistency (Name, Address, Phone)
- **Business Name:** SRV Detailing
- **Address:** Globe House, Globe Lane, Dukinfield, SK16 4RG
- **Phone:** 07375 759686
- **Website:** https://www.srvdetailing.co.uk/
> This exact NAP must appear in the footer and schema on every page. Consistency across Google Business Profile, directories, and on-site is critical for local ranking.

### 13.2 "Near Me" Search Intent Integration

Every suburb/area page should include natural language that captures near-me intent:
- "Looking for car detailing near me in [suburb]? SRV Detailing serves [suburb] and all [postcode] postcodes."
- "Mobile car valeting near [suburb] — we come to your driveway."
- Mention specific local landmarks, roads, and postcodes naturally in body copy.

### 13.3 GMB Signal Anchors per Location Page

| Location Page | Anchor signals to include | Postcodes |
|---------------|--------------------------|-----------|
| Bramhall | "near Bramhall Park", "Bramhall Lane" | SK7 |
| Cheadle | "Cheadle Village, Cheadle Hulme, Gatley, Heald Green" | SK8 |
| Cheadle Hulme | "Gillbent Road, Station Road" | SK8 |
| Marple | "near the Peak District edge", "Marple Bridge" | SK6 |
| Hazel Grove | "on the A6 corridor, between Stockport and Peak District" | SK7 |
| Heaton Moor | "the four Heatons", "Heaton Moor Road" | SK4 |
| City Centre | "Piccadilly, Spinningfields, Deansgate, Northern Quarter" | M1–M4 |
| Didsbury | "Wilmslow Road, Barlow Moor Road" | M20 |
| Altrincham | "Hale, Bowdon, Timperley, Hale Barns" | WA14, WA15 |
| Tameside | "home turf — based in Dukinfield" | SK16 (HQ) |
| Salford | "Salford Quays, MediaCityUK, Ordsall" | M5–M7 |
| Trafford | "M60 corridor, Trafford Park industrial estate" | M16, M32, M41 |

### 13.4 Mobile Service USP Copy Blocks

Every area and service page must reinforce the mobile service USP. Use variants of:
- "Our fully self-contained mobile unit arrives with its own water supply and power generator."
- "No need to leave home — we come to your [suburb] driveway."
- "We need no water or electricity from you — just access to your vehicle."
- "Available 7 days a week across all [area] postcodes."
- "Based in Dukinfield, we're just minutes from most Stockport postcodes."

---

## 14. CONTENT QUALITY STANDARDS

### 14.1 Minimum Content Requirements per Page Type

| Page Type | Min word count | FAQs required | Images |
|-----------|:--------------:|:-------------:|:------:|
| Hub pages | 800 | 4+ | 1 hero + 2 content |
| Service sub-hub | 600 | 3+ | 1 hero |
| Individual service pages | 700 | 3+ | 1 hero |
| Suburb/area pages | 500 | 2+ | 1 hero |
| Guide pages | 1,200 | 4+ | 2+ |
| Comparison pages | 1,000 | 3+ | optional |
| Pricing pages | 400 | 3+ | 1 hero |
| Blog posts | 900 | optional | 1–3 |

### 14.2 Suburb Page Content Template

1. **Hero** — `"Car Detailing & Valeting in [Suburb]"` + postcode mention
2. **Intro paragraph** — Local area description + why SRV is the right choice
3. **Services section** — 4–6 most relevant services for that suburb's demographics
4. **Local context paragraph** — Specific challenges (roads, parking, common vehicle types)
5. **Coverage note** — Sub-areas, postcodes, nearby streets
6. **FAQ section** — 2–3 highly localised questions
7. **Internal links block** — Related services + neighbouring areas

### 14.3 Demographic Signals by Area Type

| Area type | Vehicle types | Common challenges | Lead services |
|-----------|--------------|-------------------|---------------|
| Affluent suburbs (Bramhall, Didsbury, Altrincham, Heaton Moor, Davenport Park) | Prestige, luxury, SUVs | Tree sap, bird droppings, kerb-appeal expectation | Ceramic coating, leather conditioning, paint correction |
| Urban (City Centre, Salford, Edgeley) | All types, apartment dwellers | Parking scratches, urban pollution, no driveway | Mobile valeting, interior detailing, full valet |
| Commuter corridor (Trafford, Reddish, Brinnington) | Daily drivers, fleet | M60 grime, brake dust, road salt | Full valet, exterior valeting, paint correction |
| Rural edge (Marple, Hazel Grove, Woodley, Romiley) | Family SUVs, 4x4s | Mud, stone chips, agricultural run-off | Paint correction, headlight restoration, full valet |
| Family residential (Chorlton, Sale, Bury, Offerton, Stepping Hill) | Family cars, MPVs | Pet hair, children's mess, interior odours | Pet hair removal, odour removal, interior valeting |
| Northern outposts (Bolton, Wigan, Rochdale, Oldham) | All types | Harsher weather, fewer quality mobile services | Mobile valeting, full valet, headlight restoration |

---

## 15. IMPLEMENTATION PRIORITY ORDER

### Phase 1 — Existing Data, Needs Routes Confirmed
1. Verify all `/manchester/car-detailing/[slug]` and `/manchester/car-valeting/[slug]` routes render correctly ✅
2. Verify all `/manchester/areas/[slug]` and `/stockport/areas/[slug]` routes render correctly ✅
3. Implement `/faq` route using existing `faq-data.ts` 📋
4. Confirm `/guides/[slug]`, `/compare/[slug]`, `/pricing/[slug]` templates render correctly 🔧

### Phase 2 — High-Priority New Content
1. **Stockport missing services** — Add to `src/data/stockport/car-detailing/` and `car-valeting/`:
   - interior-detailing, exterior-detailing, swirl-mark-removal, engine-bay-detailing, leather-conditioning
   - pet-hair-removal, odour-removal, upholstery-cleaning
2. **New Stockport suburb pages (HIGH):** cheadle-hulme, heald-green, gatley, bredbury, romiley, woodley
3. **New guides (HIGH):** ceramic coating maintenance, valeting checklist, swirl mark removal, pet hair removal, leather cleaning
4. **FAQ hub page** at `/faq`

### Phase 3 — Medium-Priority Expansion
1. **New Stockport suburb pages (MED):** offerton, davenport, heaton-mersey, heaton-chapel, stepping-hill, brinnington
2. **Manchester sub-area pages (HIGH):** hale, urmston, ashton-under-lyne, hyde
3. **Manchester sub-area pages (MED):** bowdon, prestwich, salford-quays, west-didsbury
4. **Additional comparisons:** paint-correction-vs-respray, ceramic-coating-vs-paint-sealant
5. **Additional pricing pages:** ceramic-coating-cost, paint-correction-cost

### Phase 4 — Long-Term Authority Building
1. **New Stockport suburb pages (LOW):** shaw-heath, davenport-park, woodsmoor, offerton-park
2. **Blog content cluster:** seasonal articles, "best of Stockport/Manchester detailing" posts
3. **Remaining guides** from Section 7.2
4. **Further Manchester sub-areas:** denton, stalybridge, middleton, whitefield, stretford
5. **Generic service pages** at `/services/[slug]`

---

## 16. SITEMAP PRIORITY STRUCTURE (Target State)

```
Priority 1.0  /
Priority 0.9  /stockport  /manchester
              /stockport/car-detailing  /stockport/car-valeting
              /manchester/car-detailing  /manchester/car-valeting
Priority 0.8  /[location]/car-detailing/[service]  (all individual service pages)
              /[location]/car-valeting/[service]
Priority 0.7  /[location]/areas/[suburb]  (all suburb pages)
Priority 0.6  /pricing  /pricing/[slug]
              /compare  /compare/[slug]
Priority 0.5  /guides  /guides/[slug]
              /faq
Priority 0.4  /blog  /blog/[slug]
Priority 0.3  /services  /services/[slug]
              /about-us  /gallery  /contact
```

---

## 17. TECHNICAL SEO NOTES

- **`robots.ts` and `sitemap.ts`** live in `src/app/` — update both whenever new routes are added.
- **Canonical URLs:** every page must declare its own canonical via `generateMetadata`. No page should be reachable under two different URLs without a canonical.
- **Duplicate content guard:** if `/services/ceramic-coating` and `/manchester/car-detailing/ceramic-coating` both exist, one must canonical to the other (prefer the Manchester version as it is more specific and already established).
- **Image alt text:** include suburb/service keywords naturally. Every `<Image>` component needs descriptive, keyword-relevant alt text.
- **Page speed:** Framer Motion animations should not block LCP. Add `loading="lazy"` on below-fold images. Target LCP < 2.5 s.
- **Core Web Vitals targets:** LCP < 2.5 s · CLS < 0.1 · INP < 200 ms.
- **Build memory:** `NODE_OPTIONS=--max-old-space-size=4096` is required for production builds (see CLAUDE.md).

---

*This document is maintained alongside the live codebase. Update it whenever new pages are added, URL patterns change, or SEO strategy evolves.*
