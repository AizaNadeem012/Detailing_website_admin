import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About SRV Detailing | 22 Years Professional Car Valeting Manchester",
  description: "Professional mobile car detailing in Manchester & Stockport. 22 years experience, ceramic coating accredited. Fully insured, eco-safe methods.",
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/about-us",
  },
  openGraph: {
    title: "About SRV Detailing | 22 Years Professional Car Valeting Manchester",
    description: "Professional mobile car detailing in Manchester & Stockport. 22 years experience, ceramic coating accredited. Fully insured, eco-safe methods.",
    url: "https://www.srvdetailing.co.uk/about-us",
    type: "website",
  },
};
import {
  Shield, Award, Users, MapPin, Clock, Star,
  Sparkles, CheckCircle, Heart, Leaf, Car, Wrench,
  Phone, Mail, Instagram
} from "lucide-react";

// Image imports
import aboutHeroImage from "@/assets/about/porsche-foam.jpg";
import founderImage from "@/assets/about/rolls-royce.jpg";
import teamWorkingImage from "@/assets/about/mustang-side.jpg";
import mobileVanImage from "@/assets/about/green-bmw.jpg";
import certificationsImage from "@/assets/about/mustang-rear.jpg";
import manchesterMapImage from "@/assets/about/green-bmw.jpg";
import qualityCheckImage from "@/assets/about/mustang-side.jpg";
import ecoFriendlyImage from "@/assets/about/porsche-foam.jpg";

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.srvdetailing.co.uk/about-us#webpage",
      "url": "https://www.srvdetailing.co.uk/about-us",
      "name": "About SRV Detailing | 22 Years Car Valeting Manchester",
      "description": "Professional mobile car detailing in Manchester & Stockport. 22 years experience, ceramic coating accredited. Fully insured, eco-safe methods.",
      "inLanguage": "en-GB",
      "isPartOf": {
        "@id": "https://www.srvdetailing.co.uk/#website"
      },
      "about": {
        "@id": "https://www.srvdetailing.co.uk/#organization"
      }
    },
    {
      "@type": ["LocalBusiness", "AutoBodyShop"],
      "@id": "https://www.srvdetailing.co.uk/#organization",
      "name": "SRV Detailing",
      "url": "https://www.srvdetailing.co.uk",
      "logo": "https://www.srvdetailing.co.uk/logo.png",
      "image": "https://www.srvdetailing.co.uk/about-hero.jpg",
      "description": "Professional mobile car valeting and ceramic coating specialists serving Manchester & Stockport since 2003. Fully insured, accredited, eco-friendly.",
      "telephone": "+447375759686",
      "email": "srv_detailing@icloud.com",
      "foundingDate": "2003",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office Tech Solutions",
        "addressLocality": "Dukinfield",
        "addressRegion": "Greater Manchester",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.4724",
        "longitude": "-2.0861"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Manchester"
        },
        {
          "@type": "City",
          "name": "Stockport"
        },
        {
          "@type": "City",
          "name": "Tameside"
        }
      ],
      "priceRange": "££-£££",
      "currenciesAccepted": "GBP",
      "paymentAccepted": "Cash, Card, Bank Transfer",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Car Detailing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Car Valeting",
              "description": "Convenient fully equipped mobile service at your location"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ceramic Coating",
              "description": "Long-lasting paint protection with accredited products"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paint Correction",
              "description": "Remove swirl marks and scratches for showroom finish"
            }
          }
        ]
      },
      "sameAs": [
        "https://instagram.com/srv.detailing"
      ]
    }
  ]
};

export default function About() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gray-900 pt-24">
        <img
          src={aboutHeroImage.src}
          alt="SRV Detailing applying active snow foam to a Porsche for a safe pre-wash in Manchester"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative container mx-auto px-6 text-white max-w-6xl">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-medium mb-4">
            Established 2003
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Car Detailing Experts Serving Manchester & Stockport Since 2003
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
            Twenty-two years of trusted mobile valeting, ceramic coating accreditation, and a commitment to excellence that keeps Manchester's finest vehicles looking showroom-perfect.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built on Passion, <span className="text-primary">Perfected Through Experience</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  SRV Detailing was founded in 2003 by a car enthusiast who believed every vehicle deserves professional care. What started as a single-person operation in Dukinfield has grown into Greater Manchester's trusted name for mobile car valeting and specialist ceramic coating services.
                </p>
                <p>
                  Over 22 years, we've detailed thousands of vehicles—from daily drivers to prestige motors—learning that true quality comes from understanding both the science of automotive finishes and the pride owners feel in their cars.
                </p>
                <p>
                  We don't just clean cars. We restore them, protect them, and treat every vehicle as if it were our own. That's the SRV difference, and it's why customers across Manchester and Stockport trust us with their most valuable possessions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={founderImage.src}
                alt="SRV Detailing studio featuring a Red Rolls Royce and custom scooter"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <p className="text-5xl font-bold">22</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Mission & <span className="text-primary">Core Values</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We exist to protect and enhance the vehicles our customers love, using honest craftsmanship, proven methods, and a genuine commitment to their satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your car is important to you, so it's important to us. We listen, we care, and we deliver results that exceed expectations every single time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600">
                We use only accredited ceramic coating products, pH-neutral shampoos, and professional-grade equipment. No shortcuts, no cheap substitutes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                Fully insured, transparent pricing, honest advice. We explain our process, show you results, and stand behind every service with a workmanship guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us - Process & Safety */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why Manchester & Stockport Trust <span className="text-primary">SRV Detailing</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src={teamWorkingImage.src}
                alt="Detailed side profile of a white Mustang Mach 1 showing flawless ceramic coated finish"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ceramic Coating Accreditation</h3>
                  <p className="text-gray-600">
                    We're not just certified—we're specialists. Our team has completed advanced training in SiO2 ceramic coating application, surface preparation, and curing protocols. We use only manufacturer-approved products with proven durability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fully Insured & Compliant</h3>
                  <p className="text-gray-600">
                    Public liability insurance covers every job. We follow COSHH regulations for chemical handling, dispose of waste water responsibly, and maintain strict environmental protection standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safe, pH-Neutral Products</h3>
                  <p className="text-gray-600">
                    Every product we use is tested and safe for your vehicle's paint, glass, rubber, and trim. No harsh acids, no damaging alkalines—just professional-grade formulas designed for automotive surfaces.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Stage Quality Process</h3>
                  <p className="text-gray-600">
                    We don't rush. Pre-wash, decontamination, clay bar treatment, machine polishing with paint depth measurement, protection application—every step is methodical, measured, and documented.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment & Tools */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Professional Equipment, <span className="text-primary">Professional Results</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Wrench className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Dual-Action Polishers</h4>
                <p className="text-sm text-gray-600">RUPES and FLEX machine polishers for safe, swirl-free paint correction</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Paint Depth Gauges</h4>
                <p className="text-sm text-gray-600">Precision measurement to ensure safe polishing without clearcoat damage</p>
              </div>
              <div className="text-center">
                <Car className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Hot Water Extraction</h4>
                <p className="text-sm text-gray-600">Commercial-grade extractors for deep interior carpet and upholstery cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Meet the <span className="text-primary">SRV Team</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Every member of our team shares the same passion for automotive excellence. We're not just technicians—we're car enthusiasts who understand what your vehicle means to you.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <Users className="w-20 h-20 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Lead Detailer</h3>
                <p className="text-primary mb-3">Ceramic Coating Specialist</p>
                <p className="text-gray-600 text-sm">
                  22 years experience in automotive refinishing. Accredited ceramic coating installer with advanced training in multi-stage paint correction and surface preparation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <Users className="w-20 h-20 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Mobile Valeting Technician</h3>
                <p className="text-primary mb-3">Interior Specialist</p>
                <p className="text-gray-600 text-sm">
                  Expert in fabric and leather care, steam cleaning, and odor removal. Trained in safe chemical handling and stain treatment for all interior surfaces.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <Users className="w-20 h-20 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Paint Correction Expert</h3>
                <p className="text-primary mb-3">Machine Polishing Specialist</p>
                <p className="text-gray-600 text-sm">
                  Trained in RUPES and FLEX polishing systems. Specializes in swirl mark removal, scratch refinement, and high-gloss finish restoration on prestige vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={qualityCheckImage.src}
                alt="Checking wheel and caliper details on a white Mustang Mach 1"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Service <span className="text-primary">Philosophy</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We believe car detailing isn't just about making vehicles look good—it's about preservation, protection, and pride of ownership.
                </p>
                <p>
                  That's why we take the time to understand your needs before we start. Whether you're preparing a classic car for a show, protecting a new vehicle's paint with ceramic coating, or simply want your daily driver to feel fresh again, we tailor our approach to your goals.
                </p>
                <p>
                  We're transparent about what we can achieve, honest about timescales, and we never oversell services you don't need. If something can't be fixed, we'll tell you. If a simpler solution exists, we'll recommend it.
                </p>
                <p className="font-semibold text-primary">
                  This is the foundation of trust we've built with thousands of Manchester and Stockport customers over 22 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester & Stockport Local Presence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Proudly Serving <span className="text-primary">Manchester & Stockport</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            As a local business based in Dukinfield, we understand the needs of Greater Manchester drivers. From urban commuters to countryside enthusiasts, we're part of your community.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={manchesterMapImage.src}
                alt="Green BMW receiving mobile detailing services on a residential driveway in Manchester"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mobile Service Coverage</h3>
                  <p className="text-gray-600">
                    We bring our fully equipped mobile unit to your home, office, or preferred location across Manchester, Stockport, Tameside, and surrounding areas—within a 25-mile radius of our Dukinfield base.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    We work around your schedule, not the other way around. Evening and weekend appointments available. Book in advance or contact us for urgent requests.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Reputation</h3>
                  <p className="text-gray-600">
                    Over two decades serving the same community has built relationships, not just transactions. Many of our customers have been with us for years, and their referrals are our greatest compliment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Areas We Cover</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold">Manchester City Centre</p>
              </div>
              <div className="p-4">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold">Stockport</p>
              </div>
              <div className="p-4">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold">Dukinfield & Tameside</p>
              </div>
              <div className="p-4">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold">Greater Manchester</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Certifications & <span className="text-primary">Professional Standards</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We don't just meet industry standards—we exceed them. Here's what backs our commitment to quality and safety.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={certificationsImage.src}
                alt="Rear view of a pristine white Mustang Mach 1 after ceramic coating application"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ceramic Coating Accreditation</h3>
                  <p className="text-gray-600">
                    Officially trained and certified by leading ceramic coating manufacturers. We're authorized to install premium SiO2 coatings with manufacturer-backed warranties.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Public Liability Insurance</h3>
                  <p className="text-gray-600">
                    Fully insured for up to £5 million. Every job, every vehicle, every location is covered. Your peace of mind is non-negotiable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">COSHH Compliance</h3>
                  <p className="text-gray-600">
                    Control of Substances Hazardous to Health regulations are strictly followed. All chemicals are stored, handled, and disposed of safely and legally.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Leaf className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Environmental Protection</h3>
                  <p className="text-gray-600">
                    Waste water is captured and disposed of responsibly. We use biodegradable products where possible and minimize water usage with efficient techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Types Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Who We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            From everyday drivers to automotive collectors, we tailor our services to every type of vehicle owner.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Car className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Car Enthusiasts</h3>
              <p className="text-gray-600">
                You care about your car as much as we do. From weekend detailing to show-ready prep, we deliver the perfection your pride and joy deserves.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Prestige Vehicle Owners</h3>
              <p className="text-gray-600">
                Luxury and performance cars demand specialist care. Our ceramic coating and paint correction services protect your investment and maintain showroom condition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Busy Professionals</h3>
              <p className="text-gray-600">
                No time to visit a car wash? Our mobile service comes to your home or office. You focus on your day; we'll make your car spotless.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Classic Car Collectors</h3>
              <p className="text-gray-600">
                Vintage vehicles need gentle, knowledgeable care. We understand delicate paint, original trim, and the importance of preservation over aggression.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Wrench className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Fleet Managers</h3>
              <p className="text-gray-600">
                Multiple vehicles? We offer fleet valeting packages with flexible scheduling and bulk pricing for businesses managing company cars or rental fleets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">New Car Buyers</h3>
              <p className="text-gray-600">
                Protect your new vehicle from day one. Our ceramic coating services lock in that factory finish and provide years of paint protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Quality <span className="text-primary">Guarantee</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We stand behind every service with a workmanship guarantee. If you're not satisfied, we'll make it right.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Before Every Job</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Full vehicle inspection and documentation of existing condition</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Paint depth measurement to ensure safe polishing</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Clear explanation of the process and expected results</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Agreement on service scope and pricing before we start</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">After Completion</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Walk-through inspection with you to ensure satisfaction</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Aftercare advice for maintaining results at home</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Written warranty on ceramic coating services (where applicable)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Follow-up contact to check on long-term results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Responsible <span className="text-primary">Car Care</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Professional detailing doesn't have to harm the environment. We're committed to sustainable practices that protect both your vehicle and the planet.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Water Conservation:</strong> Our wash methods use 70% less water than traditional car washes through pressurized systems and efficient techniques.</span>
                  </li>
                  <li className="flex gap-3">
                    <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Biodegradable Products:</strong> Where possible, we choose eco-friendly, biodegradable cleaning agents that break down safely.</span>
                  </li>
                  <li className="flex gap-3">
                    <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Waste Water Management:</strong> Captured and disposed of legally—never allowed to enter storm drains or waterways.</span>
                  </li>
                  <li className="flex gap-3">
                    <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Long-Term Protection:</strong> Ceramic coatings reduce the need for frequent washing, saving water and chemicals over the life of your vehicle.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={ecoFriendlyImage.src}
                alt="Biodegradable snow foam lifting dirt safely from vehicle paintwork"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Van Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Fully Equipped <span className="text-primary">Mobile Service</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Our mobile detailing van brings the workshop to you—complete with power, water, and every tool needed for professional results.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={mobileVanImage.src}
                alt="Mobile detailing setup providing convenience for clients at home"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">What's Inside Our Van?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>RUPES dual-action polisher and complete machine polishing kit</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Hot water extraction machine for deep interior cleaning</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Pressure washer with foam cannon and soft wash system</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>On-board water tank (150 liters) and power generator</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Full range of pH-neutral shampoos, ceramic coatings, and detailing chemicals</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Professional lighting for paint inspection and correction work</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Waste water recovery system for environmentally responsible service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the SRV Difference?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Twenty-two years of experience, ceramic coating accreditation, and thousands of satisfied customers across Manchester and Stockport. Let us show you what professional car care really means.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+447375759686"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              <Phone className="w-5 h-5" />
              Call 07375 759686
            </a>
            <a
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition"
            >
              Book Your Service
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <a href="mailto:srv_detailing@icloud.com" className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              srv_detailing@icloud.com
            </a>
            <a href="https://instagram.com/srv.detailing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4" />
              @srv.detailing
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
    </div>
  );
}