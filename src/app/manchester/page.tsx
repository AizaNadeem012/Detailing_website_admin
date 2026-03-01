import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Sparkles,
  Car,
  Droplets,
  CheckCircle,
  Award,
  ChevronRight,
  Star,
  Paintbrush,
  CircleDot,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home/porsche-foam.jpg";
import detailingImage from "@/assets/paintCorrection.jpg";
import valetingImage from "@/assets/interiorCleaning.jpg";

// -----------------------------------------------------------------------------
// Metadata (Next.js Metadata API)
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "Car Detailing & Valeting Manchester | Mobile Service | SRV Detailing",
  description:
    "Professional mobile car detailing and valeting across Manchester. Ceramic coating, paint correction, full valets and more. 22+ years experience. We come to you.",
  keywords: [
    "car detailing manchester",
    "car valeting manchester",
    "mobile car detailing manchester",
    "mobile car valeting manchester",
    "ceramic coating manchester",
    "paint correction manchester",
    "car cleaning manchester",
  ],
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/manchester",
  },
  openGraph: {
    title:
      "Car Detailing & Valeting Manchester | Mobile Service | SRV Detailing",
    description:
      "Professional mobile car detailing and valeting across Manchester. Ceramic coating, paint correction, full valets and more. 22+ years experience.",
    url: "https://www.srvdetailing.co.uk/manchester",
    type: "website",
    images: ["https://www.srvdetailing.co.uk/images/car-detailing-manchester.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Car Detailing & Valeting Manchester | SRV Detailing",
    description:
      "Professional mobile car detailing and valeting across Manchester. 22+ years experience. We come to you.",
  },
};

// -----------------------------------------------------------------------------
// JSON-LD Structured Data
// -----------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.srvdetailing.co.uk/manchester#localbusiness",
      "name": "SRV Detailing — Manchester",
      "url": "https://www.srvdetailing.co.uk/manchester",
      "telephone": "+447375759686",
      "priceRange": "££",
      "image":
        "https://www.srvdetailing.co.uk/images/car-detailing-manchester.jpg",
      "description":
        "Professional mobile car detailing and valeting across Manchester and Greater Manchester. Ceramic coating, paint correction, full valets, interior cleaning and more. Over 22 years of experience.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Globe House, Globe Lane",
        "addressLocality": "Dukinfield",
        "addressRegion": "Greater Manchester",
        "postalCode": "SK16 4RG",
        "addressCountry": "GB",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.4808",
        "longitude": "-2.2426",
      },
      "areaServed": [
        { "@type": "City", "name": "Manchester" },
        { "@type": "AdministrativeArea", "name": "Greater Manchester" },
        { "@type": "City", "name": "Salford" },
        { "@type": "City", "name": "Trafford" },
        { "@type": "City", "name": "Oldham" },
        { "@type": "City", "name": "Bury" },
        { "@type": "City", "name": "Bolton" },
        { "@type": "City", "name": "Rochdale" },
        { "@type": "City", "name": "Wigan" },
        { "@type": "City", "name": "Tameside" },
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "07:00",
        "closes": "21:00",
      },
      "sameAs": ["https://share.google/AZFyOF2xIb3XaZetX"],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.srvdetailing.co.uk/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Manchester",
          "item": "https://www.srvdetailing.co.uk/manchester",
        },
      ],
    },
    {
      "@type": "Service",
      "name": "Mobile Car Detailing & Valeting in Manchester",
      "provider": {
        "@id": "https://www.srvdetailing.co.uk/manchester#localbusiness",
      },
      "areaServed": {
        "@type": "City",
        "name": "Manchester",
      },
      "serviceType": [
        "Car Detailing",
        "Car Valeting",
        "Ceramic Coating",
        "Paint Correction",
        "Interior Valeting",
        "Exterior Valeting",
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------
const detailingServices = [
  {
    name: "Ceramic Coating",
    href: "/manchester/car-detailing/ceramic-coating",
    description:
      "Long-lasting paint protection against Manchester's rain, road salt and industrial fallout. 2 to 7+ year packages available.",
    icon: Shield,
  },
  {
    name: "Paint Correction",
    href: "/manchester/car-detailing/paint-correction",
    description:
      "Multi-stage machine polishing to remove swirl marks, scratches and oxidation. Restore showroom gloss.",
    icon: Sparkles,
  },
  {
    name: "Interior Detailing",
    href: "/manchester/car-detailing/interior-detailing",
    description:
      "Deep interior restoration including steam cleaning, leather conditioning and UV sanitisation.",
    icon: CircleDot,
  },
  {
    name: "Exterior Detailing",
    href: "/manchester/car-detailing/exterior-detailing",
    description:
      "Full exterior decontamination, clay bar treatment, machine polish and sealant application.",
    icon: Paintbrush,
  },
  {
    name: "New Car Protection",
    href: "/manchester/car-detailing/new-car-protection",
    description:
      "Protect your new car from day one. Ceramic coating, paint protection and interior safeguarding.",
    icon: Car,
  },
  {
    name: "Headlight Restoration",
    href: "/manchester/car-detailing/headlight-restoration",
    description:
      "Restore clarity to oxidised, foggy headlights. Improve safety and pass your MOT.",
    icon: Wrench,
  },
];

const valetingServices = [
  {
    name: "Full Valet",
    href: "/manchester/car-valeting/full-valet",
    description:
      "Complete interior and exterior valet — our most thorough cleaning package. 3 to 4 hours of meticulous care.",
    icon: Star,
  },
  {
    name: "Mini Valet",
    href: "/manchester/car-valeting/mini-valet",
    description:
      "Quick maintenance clean in 60 to 90 minutes. Perfect between full valets to keep your car fresh.",
    icon: Droplets,
  },
  {
    name: "Interior Valeting",
    href: "/manchester/car-valeting/interior-valeting",
    description:
      "Deep cabin cleaning — vacuuming, upholstery treatment, dashboard detailing and odour removal.",
    icon: CheckCircle,
  },
  {
    name: "Exterior Valeting",
    href: "/manchester/car-valeting/exterior-valeting",
    description:
      "Professional hand wash, wheel cleaning, tyre dressing and wax protection. Safe, scratch-free methods.",
    icon: Car,
  },
  {
    name: "Mobile Valeting",
    href: "/manchester/car-valeting/mobile-valeting",
    description:
      "We come to your home, office or workplace anywhere in Manchester. Fully equipped mobile unit.",
    icon: MapPin,
  },
  {
    name: "Pet Hair Removal",
    href: "/manchester/car-valeting/pet-hair-removal",
    description:
      "Specialist extraction using compressed air, detailing brushes and professional techniques.",
    icon: Wrench,
  },
  {
    name: "Car Wash",
    href: "/manchester/car-wash",
    description:
      "Mobile hand car wash using the safe two-bucket method. We come to your door — no queues, no automated brushes.",
    icon: Droplets,
  },
];

const manchesterAreas = [
  {
    name: "City Centre",
    slug: "city-centre",
    postcodes: "M1–M4",
  },
  { name: "Didsbury", slug: "didsbury", postcodes: "M20" },
  { name: "Chorlton", slug: "chorlton", postcodes: "M21" },
  { name: "Salford", slug: "salford", postcodes: "M5–M7" },
  { name: "Trafford", slug: "trafford", postcodes: "M16, M32" },
  { name: "Sale", slug: "sale", postcodes: "M33" },
  { name: "Altrincham", slug: "altrincham", postcodes: "WA14–WA15" },
  { name: "Oldham", slug: "oldham", postcodes: "OL1–OL4" },
  { name: "Rochdale", slug: "rochdale", postcodes: "OL11–OL16" },
  { name: "Bury", slug: "bury", postcodes: "BL8–BL9" },
  { name: "Bolton", slug: "bolton", postcodes: "BL1–BL3" },
  { name: "Wigan", slug: "wigan", postcodes: "WN1–WN6" },
  { name: "Tameside", slug: "tameside", postcodes: "OL5–OL7, SK14–SK16" },
];

const trustPoints = [
  { icon: Award, label: "22+ Years Experience" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Car, label: "Fully Mobile Service" },
  { icon: CheckCircle, label: "Premium Products Only" },
];

// -----------------------------------------------------------------------------
// Page Component
// -----------------------------------------------------------------------------
export default function ManchesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ----------------------------------------------------------------- */}
        {/* HERO SECTION */}
        {/* ----------------------------------------------------------------- */}
        <section className="relative min-h-[85vh] flex items-center pt-20 lg:pt-24 pb-12">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Professional mobile car detailing service in Manchester — snow foam application on a sports car"
              fill
              className="object-cover"
              priority
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-6 text-sm text-gray-300"
              >
                <ol className="flex items-center gap-1.5">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="w-3.5 h-3.5 inline" />
                  </li>
                  <li className="text-white font-medium">Manchester</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                Serving All of Greater Manchester
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                Professional Car Detailing &amp; Valeting in{" "}
                <span className="text-primary">Manchester</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed font-medium">
                SRV Detailing is Manchester&apos;s trusted mobile car care
                specialist. From advanced paint correction and ceramic coatings
                to thorough full valets and interior deep cleans, we bring
                over 22 years of professional experience directly to your
                driveway, workplace or car park — anywhere across Greater
                Manchester.
              </p>

              <p className="text-base text-gray-300 mb-10 leading-relaxed">
                Whether you drive a daily commuter through the city centre or
                a weekend sports car kept in Didsbury, our fully equipped
                mobile unit delivers showroom-quality results without the
                inconvenience of dropping your car off. We treat car detailing
                and car valeting as distinct disciplines — because they are —
                and offer dedicated service packages for each.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold shadow-lg"
                  asChild
                >
                  <a href="tel:+447375759686">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 07375 759686
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg font-bold bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <Link href="/booking">Book Online</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-300 font-medium">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Based in Stockport
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  7 Days a Week
                </span>
                <span className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  Fully Mobile
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* TRUST BANNER */}
        {/* ----------------------------------------------------------------- */}
        <section className="bg-primary/5 py-8 border-y border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-3 justify-center"
                >
                  <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* WHY MANCHESTER NEEDS PROFESSIONAL CAR CARE */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
              Why Manchester Cars Need{" "}
              <span className="text-primary">Professional Care</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Manchester&apos;s climate and urban environment create unique
              challenges for vehicle paintwork and interiors. Understanding
              these factors is why local expertise matters.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Heavy Rainfall & Road Spray",
                  text: "Manchester receives over 140 rain days per year. Constant moisture combined with road grime, brake dust and acidic deposits attacks unprotected paintwork, causing water spots and micro-etching that compound over time.",
                },
                {
                  title: "Winter Road Salt & Grit",
                  text: "Councils spread thousands of tonnes of salt across Greater Manchester each winter. Salt accelerates corrosion on wheel arches, sills and undercarriages — areas most car washes never touch.",
                },
                {
                  title: "Urban Industrial Fallout",
                  text: "Industrial particles from the Trafford Park corridor, Manchester Airport flight paths and the M60 motorway embed themselves in paint as iron contamination, causing orange spotting that only professional decontamination removes.",
                },
                {
                  title: "Tree Sap & Bird Droppings",
                  text: "Didsbury, Chorlton and Sale are lined with mature trees. Sap and bird droppings are acidic — left for 48 hours in warm weather, they etch permanently into clear coat and require machine correction.",
                },
                {
                  title: "Multi-Storey Car Park Damage",
                  text: "Tight city-centre car parks cause door dings, trolley marks and concrete pillar scratches. Our paint correction service addresses these common Manchester driving realities.",
                },
                {
                  title: "UV Degradation (Yes, Even Here)",
                  text: "Even Manchester's overcast skies transmit UV radiation. Over months and years, unprotected paint fades, plastics grey and interiors crack — ceramic coatings provide year-round UV defence.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* DETAILING vs VALETING EXPLAINER */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Car Detailing vs Car Valeting:{" "}
              <span className="text-primary">Two Different Disciplines</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-14 leading-relaxed">
              Many people use these terms interchangeably, but they serve
              different purposes. We offer dedicated packages for each so you
              get exactly the level of care your vehicle needs.
            </p>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Detailing Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={detailingImage}
                    alt="Professional paint correction and car detailing in Manchester"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      HIGH-TICKET &middot; ENTHUSIAST &amp; LUXURY
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Car Detailing
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Car detailing is a professional-grade restoration and
                    protection process. It involves{" "}
                    <strong>paint correction</strong> (removing swirl marks,
                    scratches and oxidation through machine polishing),{" "}
                    <strong>ceramic coating</strong> application for long-term
                    protection, and deep restoration of every interior and
                    exterior surface.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Detailing is typically performed annually or for specific
                    events — new car protection, pre-sale preparation or
                    correcting accumulated damage. It&apos;s the higher-investment
                    service that delivers transformative, lasting results.
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/manchester/car-detailing">
                      Explore Detailing Services
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Valeting Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={valetingImage}
                    alt="Professional interior car valeting service in Manchester"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      REGULAR MAINTENANCE &middot; EVERYDAY DRIVERS
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Car Valeting
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Car valeting is professional cleaning and maintenance. It
                    covers thorough{" "}
                    <strong>interior and exterior washing</strong>, upholstery
                    treatment, dashboard cleaning, wheel detailing and wax
                    protection. Think of it as the highest-quality version of
                    what a car wash should be.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Valeting is a regular service — monthly or quarterly
                    depending on usage. It maintains your car&apos;s cleanliness,
                    comfort and resale value without the deeper correction
                    work. Perfect for everyday family cars and commuters.
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/manchester/car-valeting">
                      Explore Valeting Packages
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/compare/car-detailing-vs-car-valeting"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Not sure which you need? Read our full comparison
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* CAR DETAILING SERVICES */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-12">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Professional Detailing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Car Detailing Services in{" "}
                <span className="text-primary">Manchester</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Restoration-grade services that correct imperfections and
                apply long-term protection. Each service uses professional
                equipment, premium products and meticulous technique refined
                over two decades.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailingServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-2xl p-6 transition-all duration-200"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link href="/manchester/car-detailing">
                  View All Detailing Services
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* CAR VALETING SERVICES */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-12">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Professional Valeting
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Car Valeting Packages in{" "}
                <span className="text-primary">Manchester</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Regular maintenance cleaning that keeps your car looking
                fresh, comfortable and well-maintained. Hand-wash only, no
                machines that could damage your paint.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valetingServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group bg-white hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-2xl p-6 transition-all duration-200"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link href="/manchester/car-valeting">
                  View All Valeting Packages
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* HOW OUR MOBILE SERVICE WORKS */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              How Our Mobile Service{" "}
              <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              No need to drive anywhere or wait around at a garage. We bring
              everything to you.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Book Your Service",
                  text: "Call us or use our online form. Tell us your vehicle, location and what you need.",
                },
                {
                  step: "2",
                  title: "We Come to You",
                  text: "Our fully equipped van arrives at your home, office or any Manchester location.",
                },
                {
                  step: "3",
                  title: "Professional Care",
                  text: "We work on your vehicle using professional-grade equipment and premium products.",
                },
                {
                  step: "4",
                  title: "Showroom Results",
                  text: "Walk out to a transformed car. We walk you through everything we've done.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* AREAS WE SERVE IN MANCHESTER */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Areas We Serve Across{" "}
              <span className="text-primary">Greater Manchester</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Based in Stockport, we provide mobile car detailing and valeting
              across every part of Greater Manchester. Select your area to
              learn more about our local service.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {manchesterAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/manchester/areas/${area.slug}`}
                  className="group bg-white hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-xl p-4 transition-all duration-200"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {area.postcodes}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link href="/manchester/areas">
                  View All Manchester Areas
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* WHY CHOOSE SRV DETAILING */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Why Manchester Chooses{" "}
              <span className="text-primary">SRV Detailing</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Award,
                  title: "22+ Years of Hands-On Experience",
                  text: "We've been detailing and valeting vehicles across Greater Manchester since 2003. That's over two decades of refining our techniques, understanding Manchester's specific environmental challenges and building trust with thousands of customers.",
                },
                {
                  icon: Car,
                  title: "Genuinely Mobile — We Bring Everything",
                  text: "Our custom-equipped van carries its own water supply, power generator, professional lighting and every tool needed for any service. We don't need your electricity or water (though we'll use them if offered). We work on your driveway, in your office car park or wherever suits you.",
                },
                {
                  icon: Sparkles,
                  title: "Premium Products, Professional Equipment",
                  text: "We use the same brands and equipment found in dedicated detailing studios — professional-grade machine polishers, IR curing lamps for ceramic coatings, hot water extractors for interiors and pH-neutral snow foam for safe washing.",
                },
                {
                  icon: Shield,
                  title: "Fully Insured & Certified",
                  text: "Complete public liability insurance, specialist vehicle-in-care coverage and manufacturer certifications for the ceramic coating products we apply. Your vehicle is fully protected in our hands.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* ALSO SERVING STOCKPORT */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <p className="text-muted-foreground mb-2">
              We also serve Stockport and surrounding areas
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Looking for car care in{" "}
              <span className="text-primary">Stockport</span>?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our Stockport service covers Bramhall, Cheadle, Marple, Hazel
              Grove, Heaton Moor, Edgeley, Reddish and surrounding SK
              postcode areas.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/stockport">
                View Stockport Services
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* FINAL CTA */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Book Your Manchester Car Care?
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you need a quick maintenance valet or a full paint
              correction and ceramic coating, we bring 22 years of expertise
              directly to your door anywhere in Greater Manchester.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-bold"
                asChild
              >
                <a href="tel:+447375759686">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 07375 759686
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
                asChild
              >
                <Link href="/booking">Book Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
