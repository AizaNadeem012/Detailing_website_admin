import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  Wrench,
  Calendar
} from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/home/porsche-foam.jpg";
import interiorImage from "@/assets/home/bmw-interior.jpg";
import mustangImage from "@/assets/home/mustang-rear.jpg";
import greenBmwImage from "@/assets/home/green-bmw.jpg";
import mercedesImage from "@/assets/home/mercedes-amg-front.jpg";


// Semantic SEO Optimized Homepage for SRV Detailing
// Following Koray Tuğberk GÜBÜR's Topical Authority Framework

const IndexNew = () => {
  // Set meta tags dynamically
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you need access to water or electricity for mobile detailing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are fully equipped with on-board water and power supplies in our vans, allowing us to work in almost any location. However, if access to mains power or water is convenient, we may use it to reduce noise."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you cover for mobile car valeting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are based in Stockport and cover the entire Greater Manchester area, including Manchester City Centre, Trafford, Salford, Oldham, Bury, Bolton, and surrounding Cheshire towns."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between valeting and detailing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Valeting primarily focuses on cleaning and restoring the vehicle's appearance (washing, vacuuming, waxing). Detailing is a more in-depth process that involves paint correction (removing scratches/swirls) and applying long-term protection like ceramic coatings."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a ceramic coating last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on the package selected and maintenance, our ceramic coatings can listen from 1 to 5 years. They provide superior protection against bird droppings, UV rays, and road grime compared to traditional waxes."
        }
      }
    ]
  };

  useEffect(() => {
    document.title = "Professional Mobile Car Valeting & Detailing in Manchester | SRV Detailing";
    // ... existing meta update ...
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section - Semantic H1 */}
        <HeroSection />

        {/* Trust Indicators */}
        <TrustBanner />

        {/* Complete Services Overview - All 12 Services with Links */}
        <ComprehensiveServicesSection />

        {/* Location Coverage Section */}
        <LocationCoverageSection />

        {/* Mobile Valeting Services Section */}
        <MobileValetingSection />

        {/* Advanced Detailing Section */}
        <AdvancedDetailingSection />

        {/* Why Mobile Matters */}
        <WhyMobileSection />

        {/* Quality Approach Section */}
        <QualityApproachSection />

        {/* Service Area Coverage - All 16 Locations with Links */}
        <EnhancedServiceAreaSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

// Hero Section with Semantic H1
const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 lg:pt-24 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={(heroImage as any).src || heroImage}
          alt="Professional mobile car valeting and detailing in Manchester, applying snow foam to a Porsche"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for Maximum Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4 text-primary" />
            22 Years of Professional Experience
          </motion.div>

          {/* Semantic H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Professional Mobile Car Valeting & Detailing Across{" "}
            <Link href="/location" className="text-primary hover:text-primary/80 transition-colors">Manchester</Link>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed font-medium drop-shadow-md"
          >
            SRV Detailing provides professional mobile car valeting and detailing services
            across Manchester and Greater Manchester. Based in Stockport with over 22 years
            of experience, we bring showroom-quality vehicle care directly to your home or
            workplace—eliminating the inconvenience of driving to a garage and waiting around.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed drop-shadow-md"
          >
            Whether your car needs a thorough maintenance clean to restore freshness, or
            advanced detailing to correct paint imperfections and apply long-lasting protection,
            we deliver exceptional results with the same equipment, products, and expertise you'd
            expect from a permanent studio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold shadow-lg" asChild>
              <a href="tel:+447375759686">
                <Phone className="w-5 h-5 mr-2" />
                Call 07375 759686
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-bold bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm" asChild>
              <Link href="/booking">Book Your Service</Link>
            </Button>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 text-sm text-gray-300 font-medium"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Based in Stockport</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>7 Days a Week</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-primary" />
              <span>Fully Mobile Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Trust Banner
const TrustBanner = () => {
  const trustPoints = [
    { icon: Award, text: "22+ Years Experience" },
    { icon: Shield, text: "Fully Insured Service" },
    { icon: CheckCircle, text: "Professional Equipment" },
    { icon: Sparkles, text: "Showroom Results" },
  ];

  return (
    <section className="bg-primary/5 py-8 border-y border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium text-foreground">{point.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comprehensive Services Section - All 12 Services with Semantic Integration
const ComprehensiveServicesSection = () => {
  const services = [
    { name: "Full Valet", url: "/services/full-valet", description: "complete interior and exterior transformation" },
    { name: "Interior Valeting", url: "/services/interior-valeting", description: "deep cabin cleaning and restoration" },
    { name: "Exterior Valeting", url: "/services/exterior-valeting", description: "hand washing and paint protection" },
    { name: "Mini Valet", url: "/services/mini-valet", description: "quick maintenance cleaning" },
    { name: "Paint Correction", url: "/services/paint-correction", description: "swirl mark and scratch removal" },
    { name: "Ceramic Coating", url: "/services/ceramic-coating", description: "long-term paint protection" },
    { name: "Car Detailing", url: "/services/car-detailing", description: "comprehensive restoration packages" },
    { name: "Headlight Restoration", url: "/services/headlight-restoration", description: "clarity and safety improvement" },
    { name: "Pet Hair Removal", url: "/services/pet-hair-removal", description: "specialist extraction service" },
    { name: "Odour Removal", url: "/services/odour-removal", description: "smell elimination treatment" },
    { name: "Engine Bay Detailing", url: "/services/engine-bay-detailing", description: "compartment cleaning" },
    { name: "Leather Conditioning", url: "/services/leather-conditioning", description: "upholstery preservation" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground text-center"
          >
            Complete Mobile <span className="text-primary">Valeting & Detailing Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground mb-12 leading-relaxed text-center max-w-4xl mx-auto"
          >
            From quick maintenance cleans to comprehensive paint restoration and long-term protection,
            SRV Detailing provides professional mobile car care services across Manchester and Greater
            Manchester. Based in Stockport with over 22 years of experience, we bring showroom-quality
            results directly to your location.
          </motion.p>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {services.map((service, index) => (
              <Link
                key={service.name}
                href={service.url}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Natural Paragraph Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none text-muted-foreground space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Whether you need a <Link href="/services/full-valet" className="text-primary hover:underline font-semibold">full valet</Link> to
              restore your vehicle's appearance inside and out, <Link href="/services/interior-valeting" className="text-primary hover:underline font-semibold">interior
                valeting</Link> to deep clean your cabin, or <Link href="/services/exterior-valeting" className="text-primary hover:underline font-semibold">exterior
                  valeting</Link> to protect your paintwork, we deliver professional results at your home or workplace across Manchester.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              For busy professionals and families, our <Link href="/services/mini-valet" className="text-primary hover:underline font-semibold">mini
                valet</Link> service provides quick maintenance cleaning that fits your schedule. When your vehicle requires more
              comprehensive attention, our <Link href="/services/paint-correction" className="text-primary hover:underline font-semibold">paint
                correction</Link> service removes swirl marks and scratches, while <Link href="/services/ceramic-coating" className="text-primary hover:underline font-semibold">ceramic
                  coating</Link> provides years of durable protection against the elements.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Our specialist services address specific needs: <Link href="/services/headlight-restoration" className="text-primary hover:underline font-semibold">headlight
                restoration</Link> improves visibility and safety, <Link href="/services/pet-hair-removal" className="text-primary hover:underline font-semibold">pet
                  hair removal</Link> tackles embedded animal hair, <Link href="/services/odour-removal" className="text-primary hover:underline font-semibold">odour
                    removal</Link> eliminates persistent smells, <Link href="/services/engine-bay-detailing" className="text-primary hover:underline font-semibold">engine
                      bay detailing</Link> cleans your compartment, and <Link href="/services/leather-conditioning" className="text-primary hover:underline font-semibold">leather
                        conditioning</Link> preserves your luxury interior. For complete vehicle transformation,
              our <Link href="/services/car-detailing" className="text-primary hover:underline font-semibold">car detailing</Link> packages
              combine multiple services for showroom-exceeding results.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Every service is performed using professional equipment, premium products, and proven techniques developed over
              22 years of experience. We bring everything needed to your location—water systems, machine polishers, steam
              cleaners, and specialist tools—delivering studio-quality results with the convenience of mobile service.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link href="/services" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg">
              View All Services
              <Sparkles className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Location Coverage Section
const LocationCoverageSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
          >
            Stockport-Based Service Covering All <span className="text-primary">Manchester</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none text-muted-foreground space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Operating from Stockport provides excellent access throughout Manchester, from the
              city center to all surrounding boroughs across Greater Manchester. Our fully equipped
              mobile unit carries professional-grade tools, water systems, machine polishers, steam
              cleaners, and premium products—everything required to complete comprehensive valeting
              and detailing work on-site.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              We travel to residential properties, business premises, office car parks, and industrial
              estates throughout the region. Our mobile setup allows us to work independently at your
              location while you continue with your day. There's no need to arrange transport, adjust
              your schedule, or wait at a garage. Professional vehicle care comes to you.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              This approach is particularly valuable for professionals with limited time, families
              managing busy schedules, or businesses maintaining company fleets. We can visit your
              workplace and service multiple vehicles on-site, minimizing disruption and keeping your
              team mobile.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mobile Valeting Services Section
const MobileValetingSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
          >
            Complete Mobile Car <span className="text-primary">Valeting Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            Car valeting focuses on thorough cleaning and maintenance—removing dirt, restoring
            cleanliness, and refreshing both interior and exterior surfaces. It addresses the
            accumulated grime, stains, and wear from daily driving, family use, pets, or adverse
            weather conditions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={(interiorImage as any).src || interiorImage}
              alt="Premium BMW interior detailing with steering wheel and dashboard deep cleaning"
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          {/* Interior Valeting */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
            >
              <Sparkles className="w-7 h-7 text-primary" />
              Interior Valeting & Deep Cleaning
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Interior valeting restores cleanliness and comfort throughout your vehicle's cabin.
                We vacuum all carpets, floor mats, and upholstery thoroughly, reaching into seat rails,
                under seats, and into boot spaces where dirt and debris accumulate.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Fabric upholstery is deep cleaned to lift stains, remove odours, and restore texture
                without causing damage or excessive moisture. For leather interiors, we clean surfaces
                gently and apply conditioning treatments to prevent drying, cracking, and premature aging.
                This maintains the leather's suppleness and appearance over time.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Dashboard, center console, door panels, and all interior trim are cleaned and dressed.
                We remove dust, fingerprints, and residue from controls, vents, and storage compartments.
                Interior glass and mirrors are polished for streak-free clarity, improving visibility and
                creating a cleaner cabin environment.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Persistent odours—from pets, food spillage, tobacco smoke, or mildew—are addressed
                through deep cleaning and odour-neutralizing treatments rather than temporary masking.
                This approach eliminates the source of unpleasant smells, restoring a fresh interior
                atmosphere.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                If your vehicle has been affected by pet hair, muddy footwear, or staining from children's
                activities, interior valeting comprehensively addresses these issues and returns your cabin
                to a clean, comfortable state.
              </p>
            </motion.div>
          </div>

          {/* Exterior Washing */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
            >
              <Droplets className="w-7 h-7 text-primary" />
              Exterior Washing & Decontamination
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Exterior valeting begins with a safe, methodical wash using the two-bucket method.
                This technique separates clean wash water from rinse water, preventing dirt from being
                reintroduced to the paint surface where it could cause scratches or swirl marks.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                We pre-rinse to remove loose dirt and debris, then hand-wash each panel using pH-neutral
                shampoo and soft microfiber wash mitts. This gentle approach cleans effectively without
                stripping existing wax protection or damaging paintwork.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Wheels and tyres receive dedicated attention. Brake dust, road grime, tar deposits, and
                baked-on contaminants are removed from alloy wheels using appropriate cleaners and brushes.
                Tyres are cleaned and dressed to restore their appearance. Wheel arches are cleaned to
                remove accumulated dirt that can contribute to corrosion over time.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                All exterior glass is cleaned inside and out for clear visibility. Exterior trim, plastic
                moldings, and rubber seals are cleaned and protected to prevent fading and deterioration.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                After washing, we inspect the paintwork for bonded contaminants that ordinary washing cannot
                remove—industrial fallout, tar spots, tree sap, or paint overspray. When present, we use
                clay bar treatment to safely decontaminate the surface. This process removes embedded particles
                and leaves paint smooth to the touch, preparing it for protection.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                We finish by applying a protective wax or sealant layer. This enhances gloss, provides a
                barrier against UV exposure and environmental damage, and helps your vehicle stay cleaner
                longer by making it harder for dirt to bond to the surface.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Advanced Detailing Section
const AdvancedDetailingSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
          >
            Advanced Car Detailing & <span className="text-primary">Paint Correction</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            Car detailing moves beyond maintenance cleaning into restoration and protection. Detailing
            addresses paint imperfections, enhances depth and gloss, and applies durable protection
            systems designed to maintain that quality for extended periods.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={(mustangImage as any).src || mustangImage}
              alt="White Mustang Mach 1 rear view showing flawless paint correction results"
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          {/* Machine Polishing */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
            >
              <Wrench className="w-7 h-7 text-primary" />
              Machine Polishing & Swirl Mark Removal
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Over time, even well-cared-for vehicles develop paint imperfections. Swirl marks, light
                scratches, water etching, and dullness commonly result from automatic car washes, improper
                drying techniques, or environmental exposure. These defects scatter light and diminish the
                paint's clarity and shine.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Machine polishing corrects these imperfections through controlled abrasion. We carefully
                remove a microscopic layer of clear coat, eliminating surface defects and revealing fresh,
                flawless paint beneath. The result is dramatically improved gloss, depth, and color saturation.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                We employ multi-stage machine polishing techniques. Initial stages use cutting compounds to
                remove deeper scratches and heavy swirl marks. Subsequent stages refine the finish with
                progressively finer polishes, enhancing gloss and eliminating any haze left by heavier
                compounds. Each stage uses appropriate pad types, polish grades, and machine settings matched
                to your vehicle's paint type and condition.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Before polishing begins, we thoroughly wash and decontaminate the surface. After correction,
                the paint is refined to a deep, mirror-like finish that reveals the true character of your
                vehicle's color. Many customers describe the transformation as returning their vehicle to
                better-than-new condition, particularly when original factory paintwork suffered from
                inadequate preparation or protection.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                This process is especially effective on darker colors where imperfections show more prominently,
                though all paint colors benefit significantly from proper correction.
              </p>
            </motion.div>
          </div>

          {/* Ceramic Coating */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
            >
              <Shield className="w-7 h-7 text-primary" />
              <Link href="/services" className="hover:text-primary transition-colors">Ceramic Coating</Link> & Long-Term Paint Protection
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Following paint correction, ceramic coating provides superior long-term protection. Ceramic
                coatings are liquid polymer formulations that chemically bond with your vehicle's paint,
                creating a semi-permanent protective layer with exceptional durability and performance
                characteristics.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Unlike traditional waxes that sit on the surface and degrade within weeks or months, ceramic
                coatings bond at the molecular level and last for years. They create a hydrophobic surface
                that repels water dramatically—rain and wash water bead up and sheet off the paintwork,
                carrying away dirt and reducing water spotting.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Ceramic coatings resist contamination from bird droppings, tree sap, road tar, and industrial
                fallout. These substances are easier to remove when they do land on the surface, and they're
                far less likely to etch into or stain the paint because the coating provides a sacrificial
                barrier.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                The coating also enhances the visual depth and gloss achieved during paint correction,
                amplifying that mirror-like finish. It maintains this appearance with minimal maintenance
                because dirt doesn't bond as readily to the slick surface, and washing becomes quicker and
                easier.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Surface preparation before ceramic coating application is critical. We ensure the paint is
                perfectly clean, decontaminated, and free from defects. Any imperfections present during
                application will be locked beneath the coating, so thorough correction beforehand is essential.
                After application, the coating requires a curing period during which it bonds fully with the
                paint and develops its protective properties.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Properly applied ceramic coatings dramatically reduce the effort required to maintain your
                vehicle's appearance while providing years of protection against the elements.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Mobile Matters Section
const WhyMobileSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Why Mobile Car Valeting & <span className="text-primary">Detailing Matters</span>
          </motion.h2>

          {/* Convenience */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
            >
              <Car className="w-7 h-7 text-primary" />
              Convenience Without Compromise
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 float-right ml-6 w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={(greenBmwImage as any).src || greenBmwImage}
                alt="Green BMW serviced at home location demonstrating mobile convenience"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Mobile service delivery fundamentally changes how vehicle care fits into your routine. You
                don't need to drive to a garage, arrange alternative transport, or spend time waiting for
                work to be completed. We arrive at your chosen location—home, workplace, or elsewhere—and
                complete the service while you carry on with your day.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                For busy professionals, this eliminates the disruption of scheduling around garage hours or
                taking time away from work. For families, it removes the logistical challenge of dropping
                off a vehicle while managing childcare or other commitments. For businesses managing fleets,
                we can service multiple vehicles at your premises without taking them off the road unnecessarily.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                This convenience doesn't mean compromised quality. We bring identical equipment, products, and
                expertise to your location as any fixed detailing studio. Our mobile unit carries dual water
                tanks for independent operation, professional machine polishers and pads, steam cleaning
                equipment, and a complete range of premium detailing products.
              </p>
            </motion.div>
          </div>

          {/* Professional Standards */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
            >
              <Award className="w-7 h-7 text-primary" />
              Professional Standards in Every Service
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Professional vehicle care requires more than good products—it demands proper technique,
                appropriate equipment, and understanding of different surfaces and materials. We bring over
                22 years of hands-on experience working with various vehicle types, paint systems, and
                interior materials.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                We understand how different paint types respond to correction—whether soft European clear
                coats or harder Japanese finishes. We know which cleaning methods suit fabric versus leather,
                and how to work with delicate trim materials without causing damage. This knowledge prevents
                the costly mistakes that can occur when inappropriate products or techniques are used.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Our equipment matches professional studio standards. Machine polishers are chosen for control
                and reliability. Polishing pads are selected for specific tasks and regularly replaced to
                maintain cutting efficiency. Wash mitts and drying towels are high-quality microfiber, soft
                enough to prevent scratching while being durable enough for thorough cleaning.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                We use pH-neutral products that clean effectively without stripping protection or damaging
                surfaces. Steam cleaning equipment sanitizes and lifts stains without saturating materials or
                leaving chemical residue. Every product and tool serves a specific purpose and has been proven
                through extensive professional use.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Quality Approach Section
const QualityApproachSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Our Approach to Quality & <span className="text-primary">Vehicle Care</span>
          </motion.h2>

          {/* Safe Methods */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
            >
              <Shield className="w-7 h-7 text-primary" />
              Safe Methods Protecting Your Investment
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Vehicle care should enhance your car, never risk damaging it. We use proven methods throughout
                every service to ensure safety and effectiveness.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Two-bucket washing prevents dirt from being dragged across paint during washing—one bucket
                holds clean wash solution while the other rinses the mitt between panels. This simple technique
                dramatically reduces the risk of inducing new scratches during cleaning.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                pH-neutral shampoos clean without stripping existing wax protection or attacking rubber seals
                and trim. Aggressive alkaline or acidic cleaners might deliver quick results but can cause
                long-term damage to surfaces and protective coatings.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Soft microfiber materials contact all surfaces—never harsh brushes, abrasive sponges, or rough
                cloths that can scratch paint or damage interior surfaces. Even our wheel cleaning brushes are
                specifically designed to clean effectively without scratching alloy finishes.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Clay bar decontamination removes bonded particles safely when proper lubrication and technique
                are used. Without adequate lubrication, clay can mar paint surfaces. We ensure sufficient
                lubrication and use light pressure to safely lift contaminants without inducing scratches.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Machine polishing requires careful control of pressure, speed, pad type, and polish selection.
                Excessive heat or pressure can burn through clear coat, while inadequate technique leaves
                holograms or buffer trails. We adjust our approach based on paint hardness, condition, and the
                level of correction required.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Steam cleaning for interiors uses high-temperature vapor to sanitize and lift stains without
                saturating materials. Unlike excessive water or harsh chemical cleaning, steam cleaning won't
                damage electronics, oversaturate foam padding, or leave residue that attracts dirt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={(mercedesImage as any).src || mercedesImage}
                alt="Close up of Mercedes AMG front bumper showing precision detailing work"
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>
          </div>

          {/* Attention to Detail */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-foreground flex items-center gap-3"
            >
              <Sparkles className="w-7 h-7 text-primary" />
              Attention to Detail in Execution
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Detailing is fundamentally about thoroughness—addressing every surface properly rather than
                rushing through visible areas while neglecting details.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                We inspect paintwork closely before and after correction, using proper lighting to identify
                defects that might be missed in standard conditions. We clean every interior surface, not just
                seats and dashboard—including door jambs, seat rails, center console compartments, and boot
                spaces where dirt accumulates but is often overlooked.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Glass is polished inside and out for complete clarity. Wheel faces, spokes, and barrels are
                cleaned thoroughly—not just the visible front face. Tyres are cleaned and dressed evenly. Door
                shuts, fuel filler caps, and under-bonnet areas receive attention during comprehensive detailing.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                These details collectively create a finish that stands apart from basic cleaning. When every
                surface has been addressed properly, the overall impression is one of complete care and quality.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                We also communicate clearly throughout the process. Before beginning work, we assess your
                vehicle's condition and discuss what's realistically achievable. If paint damage is too severe
                for correction, or if interior staining has set permanently, we explain the limitations honestly
                rather than overpromising results.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                After completing work, we walk through what we've done and provide aftercare advice—how to
                maintain results, when to consider your next service, or which products and practices to avoid
                to preserve the finish.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Service Area Section - All 16 Locations with Semantic Integration
const EnhancedServiceAreaSection = () => {
  const locations = [
    { name: "Manchester City Centre", url: "/locations/manchester-city-centre", region: "Central Manchester" },
    { name: "Stockport", url: "/mobile-car-valeting-stockport", region: "South Manchester" },
    { name: "Salford", url: "/locations/salford", region: "West Manchester" },
    { name: "Trafford", url: "/locations/trafford", region: "West Manchester" },
    { name: "Bolton", url: "/locations/bolton", region: "North West" },
    { name: "Oldham", url: "/locations/oldham", region: "East Manchester" },
    { name: "Rochdale", url: "/locations/rochdale", region: "North Manchester" },
    { name: "Bury", url: "/locations/bury", region: "North Manchester" },
    { name: "Tameside", url: "/locations/tameside", region: "East Manchester" },
    { name: "Wigan", url: "/locations/wigan", region: "Greater Manchester" },
    { name: "Bramhall", url: "/locations/bramhall", region: "Stockport Area" },
    { name: "Cheadle", url: "/locations/cheadle", region: "Stockport Area" },
    { name: "Altrincham", url: "/locations/altrincham", region: "Trafford Area" },
    { name: "Sale", url: "/locations/sale", region: "Trafford Area" },
    { name: "Didsbury", url: "/locations/didsbury", region: "South Manchester" },
    { name: "Chorlton", url: "/locations/chorlton", region: "South Manchester" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground text-center"
          >
            Mobile Service Coverage Across <span className="text-primary">Manchester & Greater Manchester</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground mb-12 leading-relaxed text-center max-w-4xl mx-auto"
          >
            Based in Stockport, we provide professional mobile car valeting and detailing throughout
            Manchester and the wider Greater Manchester region. Our fully equipped mobile unit travels
            to your home, workplace, or any convenient location across all areas.
          </motion.p>

          {/* Locations Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {locations.map((location, index) => (
              <Link
                key={location.name}
                href={location.url}
                className="group flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-primary/20"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors block">
                    {location.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {location.region}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Natural Paragraph Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none text-muted-foreground space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Our mobile valeting service covers all major areas across Greater Manchester. From <Link href="/locations/manchester-city-centre" className="text-primary hover:underline font-semibold">Manchester
                City Centre</Link> office car parks and apartment buildings to residential driveways
              in <Link href="/mobile-car-valeting-stockport" className="text-primary hover:underline font-semibold">Stockport</Link>, <Link href="/locations/bramhall" className="text-primary hover:underline font-semibold">Bramhall</Link>,
              and <Link href="/locations/cheadle" className="text-primary hover:underline font-semibold">Cheadle</Link>, we bring professional vehicle care directly to you.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              We regularly service vehicles across <Link href="/locations/salford" className="text-primary hover:underline font-semibold">Salford</Link> and
              the <Link href="/locations/trafford" className="text-primary hover:underline font-semibold">Trafford</Link> area, including <Link href="/locations/altrincham" className="text-primary hover:underline font-semibold">Altrincham</Link>, <Link href="/locations/sale" className="text-primary hover:underline font-semibold">Sale</Link>,
              and surrounding suburbs. South Manchester locations like <Link href="/locations/didsbury" className="text-primary hover:underline font-semibold">Didsbury</Link> and <Link href="/locations/chorlton" className="text-primary hover:underline font-semibold">Chorlton</Link> benefit
              from our convenient mobile service, eliminating the need to visit fixed-location car washes or detailing studios.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              North Manchester coverage includes <Link href="/locations/bolton" className="text-primary hover:underline font-semibold">Bolton</Link>, <Link href="/locations/bury" className="text-primary hover:underline font-semibold">Bury</Link>,
              and <Link href="/locations/rochdale" className="text-primary hover:underline font-semibold">Rochdale</Link>, while east Manchester areas
              like <Link href="/locations/oldham" className="text-primary hover:underline font-semibold">Oldham</Link> and <Link href="/locations/tameside" className="text-primary hover:underline font-semibold">Tameside</Link> receive
              the same professional mobile service. We also travel to <Link href="/locations/wigan" className="text-primary hover:underline font-semibold">Wigan</Link> and
              surrounding Greater Manchester areas, providing comprehensive coverage throughout the region.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Whether you're located in a city centre apartment, suburban residential area, business park, or
              industrial estate, we'll confirm suitability when you book. Our Stockport base provides efficient
              access throughout Manchester, allowing flexible scheduling across different areas throughout the week.
              We operate seven days a week with early morning, daytime, evening, and weekend appointments available.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link href="/location" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg">
              View All Locations
              <MapPin className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
          >
            Professional Mobile Vehicle Care <span className="text-primary">When You Need It</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            If your vehicle needs thorough cleaning, paint restoration, or long-term protection, contact
            SRV Detailing to discuss your requirements. We'll explain what's involved in your specific
            situation, provide clear pricing, and arrange a convenient time to visit your location.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            With over 22 years of professional experience and fully equipped mobile service, we deliver
            quality vehicle care across Manchester without disrupting your routine. Your car receives the
            attention it deserves, and you maintain your schedule without compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-semibold" asChild>
              <a href="tel:+447375759686">
                <Phone className="w-5 h-5 mr-2" />
                Call 07375 759686
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-10 py-7 text-lg font-semibold" asChild>
              <Link href="/booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            <p>Available 7 days a week • Home and workplace visits • Fully equipped mobile service</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-foreground"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>

          <div className="grid gap-6">
            <FAQItem
              question="Do you need access to water or electricity?"
              answer="We are fully self-sufficient mobile detailers. Our vans are equipped with onboard water tanks and electricity generators. However, if we are working at your home and access to a power socket is convenient, we may use it to reduce generator noise, but it is not required."
            />
            <FAQItem
              question="What happens if it rains on the day of my booking?"
              answer="For exterior valeting and detailing, we require dry conditions. If heavy rain is forecast, we will contact you in advance to reschedule your appointment to the next available slot that suits you. For interior-only work, we can often proceed depending on the vehicle's location."
            />
            <FAQItem
              question="How long does a full detail take?"
              answer="A standard deep clean or valet typically takes 2-4 hours. Paint correction and ceramic coating packages can take a full day or sometimes two days to ensure perfection. We will provide a time estimate when you book."
            />
            <FAQItem
              question="Do you cover my area?"
              answer={<>We cover all of Greater Manchester and Cheshire, including <Link href="/location" className="text-primary underline">Stockport</Link>, Manchester City Centre, Trafford, Altrincham, Wilmslow, and surrounding areas. If you are unsure, just give us a call!</>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-bold mb-2 text-foreground">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </motion.div>
  )
}

export default IndexNew;
