import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Car,
  Sparkles,
  Shield,
  Droplets,
  Wrench,
  CheckCircle,
  Phone,
  Calendar,
  Award,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import greenBmwImage from "@/assets/home/green-bmw.jpg";
import mustangRearImage from "@/assets/home/mustang-rear.jpg";


// Semantic SEO Optimized Services Page
// Following Koray Tuğberk GÜBÜR's Topical Authority Framework

const ServicesNew = () => {
  useEffect(() => {
    document.title = "Professional Car Valeting & Detailing Services | Manchester | SRV Detailing";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional mobile car valeting, detailing, paint correction and ceramic coating services across Manchester. Interior deep cleaning, exterior valeting, machine polishing. 22 years experience."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="overflow-hidden">
        <HeroSection />
        <ServicesOverviewSection />
        <ValetingServicesSection />
        <DetailingServicesSection />
        <ServiceComparisonSection />
        <ProcessSection />
        <PricingGuideSection />
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            Professional Mobile Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Professional Car Valeting & <span className="text-primary">Detailing Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            From regular maintenance valeting to advanced paint correction and ceramic coating, we
            provide comprehensive vehicle care services across Manchester. Every service uses
            professional-grade equipment and techniques developed over 22 years of detailing experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg" asChild>
              <a href="tel:+447375759686">
                <Phone className="w-5 h-5 mr-2" />
                Call 07375 759686
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
              <Link href="/booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Overview
const ServicesOverviewSection = () => {
  const services = [
    {
      icon: Car,
      title: "Mobile Car Valeting",
      description: "Complete interior and exterior cleaning for regular vehicle maintenance"
    },
    {
      icon: Sparkles,
      title: "Paint Correction",
      description: "Machine polishing to remove swirl marks and restore paint clarity"
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description: "Long-term paint protection with hydrophobic properties"
    },
    {
      icon: Droplets,
      title: "Interior Deep Cleaning",
      description: "Thorough cabin cleaning including upholstery and odour removal"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Core Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional vehicle care services designed to maintain, restore, and protect your car
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Valeting Services Section
const ValetingServicesSection = () => {
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
            Car <span className="text-primary">Valeting Services</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground mb-12"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Car valeting provides comprehensive cleaning and maintenance to restore your vehicle's
              cleanliness and appearance. These services address the accumulated dirt, stains, and wear
              from regular use, returning your car to a fresh, well-maintained condition without the
              intensive correction work required for detailing.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Our valeting services suit customers seeking regular maintenance cleaning, preparing
              vehicles for sale, freshening up after family use or pet transport, or addressing specific
              cleaning challenges without requiring paint correction or long-term protection application.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={(greenBmwImage as any).src || greenBmwImage}
                alt="Mobile car valeting service in action on a green BMW, showcasing professional exterior cleaning"
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Standard Valet */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-6 sm:p-8 rounded-lg mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-8 h-8 text-primary" />
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Standard Valet</h3>
              </div>
              <p className="text-lg font-semibold text-primary mb-4">From £45</p>
              <p className="text-muted-foreground mb-6">
                Complete exterior and interior cleaning suitable for regular maintenance. Keeps your
                vehicle fresh and presentable between more intensive services.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Exterior wash:</span> Hand wash using two-bucket
                    method with pH-neutral shampoo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Wheels and tyres:</span> Cleaned and dressed
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Interior vacuum:</span> All carpets, seats, and boot
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Interior surfaces:</span> Dashboard, console, and door panels wiped down
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Glass cleaning:</span> Interior and exterior windows polished
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full Valet */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-6 sm:p-8 rounded-lg mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Full Valet</h3>
              </div>
              <p className="text-lg font-semibold text-primary mb-4">From £120</p>
              <p className="text-muted-foreground mb-6">
                Comprehensive cleaning including all standard valet services plus deep interior cleaning,
                upholstery treatment, and protective wax application. Ideal for thorough seasonal cleaning
                or addressing accumulated wear.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">All standard valet services</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Deep upholstery cleaning:</span> Fabric or leather treatment depending on interior type
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Stain removal:</span> Treatment of specific stains and marks
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Odour treatment:</span> Deep cleaning and neutralization
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Clay bar decontamination:</span> Removes bonded paint contaminants
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Wax protection:</span> Protective layer applied to paintwork
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Wheel arches:</span> Cleaned to remove accumulated dirt
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Detailing Services Section
const DetailingServicesSection = () => {
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
            Professional <span className="text-primary">Detailing Services</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground mb-12"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Car detailing goes beyond cleaning to restore and protect your vehicle's finish through
              correction and enhancement. These services address paint imperfections, apply durable
              protection systems, and create results that significantly exceed what regular washing and
              valeting can achieve.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Detailing suits customers seeking to restore paintwork damaged by swirl marks and
              scratches, prepare vehicles for long-term protection, maximize resale value through paint
              restoration, or maintain premium and performance vehicles to the highest standards.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={(mustangRearImage as any).src || mustangRearImage}
                alt="Detailed Mustang Mach 1 rear view showing flawless paint correction and ceramic coating results"
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Paint Correction */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-8 h-8 text-primary" />
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Paint Correction</h3>
              </div>
              <p className="text-lg font-semibold text-primary mb-4">From £250</p>
              <p className="text-muted-foreground mb-6">
                Single-stage or multi-stage machine polishing to remove paint imperfections and restore
                clarity and gloss. The foundation for any long-term protection application.
              </p>

              <div className="space-y-6 text-muted-foreground mb-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  Paint correction uses controlled machine polishing to safely remove microscopic layers
                  of clear coat, eliminating surface defects that cause swirl marks, light scratches, and
                  dullness. The process reveals fresh, flawless paint beneath, dramatically improving gloss
                  depth and color saturation.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Single-stage correction typically achieves 60-70% defect removal, suitable for vehicles
                  with light to moderate imperfections. Multi-stage correction addresses heavier defects
                  through progressive refinement, achieving 85-95% correction on most paint types. We
                  assess your vehicle's condition and recommend the appropriate level based on paint
                  hardness, defect severity, and desired results.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Pre-correction preparation:</span> Complete wash and clay bar decontamination
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Paint assessment:</span> Detailed inspection under proper lighting
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Machine polishing:</span> Single or multi-stage process matched to paint condition
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Finishing polish:</span> Final refinement for maximum gloss
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Panel wipe:</span> Removes polish oils revealing true correction results
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ceramic Coating */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Ceramic Coating</h3>
              </div>
              <p className="text-lg font-semibold text-primary mb-4">From £499</p>
              <p className="text-muted-foreground mb-6">
                Professional-grade ceramic coating providing years of paint protection with hydrophobic
                properties and enhanced gloss. Applied only to properly corrected paintwork for optimal
                bonding and appearance.
              </p>

              <div className="space-y-6 text-muted-foreground mb-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  Ceramic coatings are liquid polymer formulations that chemically bond with vehicle paint
                  at the molecular level, creating a semi-permanent protective layer. Unlike traditional
                  waxes that sit on the surface and degrade within weeks, ceramic coatings integrate with
                  the clear coat and last for years when properly maintained.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  The coating creates an extremely hydrophobic surface where water beads dramatically and
                  sheets off the paintwork, carrying away dirt and reducing water spotting. This
                  self-cleaning effect means your vehicle stays cleaner longer and requires less intensive
                  washing. The coating also resists contamination from bird droppings, tree sap, road tar,
                  and industrial fallout, making these substances easier to remove and preventing them
                  from etching into paint.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Surface preparation before coating application is critical. We ensure paint is perfectly
                  corrected, decontaminated, and free from defects because any imperfections present
                  during application become locked beneath the coating. After application, the coating
                  requires a curing period during which it bonds fully with paint and develops its
                  protective properties. Most coatings reach full hardness within 7-14 days.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Paint correction:</span> Complete correction to flawless finish
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Panel preparation:</span> IPA wipe removes all residues
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Ceramic application:</span> Professional-grade coating applied by hand
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Curing period:</span> Controlled environment for proper bonding
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Aftercare guidance:</span> Detailed maintenance instructions provided
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    <span className="font-semibold">Duration:</span> Typically lasts 3-7 years depending on product tier
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Comparison Section
const ServiceComparisonSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-foreground text-center"
          >
            Choosing the <span className="text-primary">Right Service</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              The appropriate service depends on your vehicle's current condition, your goals, and how
              long you want results to last. Understanding the difference between valeting and detailing
              helps identify which service suits your needs.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Valeting vs Detailing</h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Choose Valeting When:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>You need regular maintenance cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Your paint doesn't have significant defects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>You want to maintain existing condition rather than restore</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Budget is limited but cleanliness is important</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Choose Detailing When:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Paint shows swirl marks, scratches, or dullness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>You want to restore paint to better-than-new condition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Long-term protection is a priority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>You're preparing for ceramic coating application</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              Many customers establish a maintenance rhythm combining both service types. An initial
              paint correction and ceramic coating creates an excellent baseline. Regular standard valets
              maintain cleanliness between annual or bi-annual full valets. This approach maximizes
              appearance while managing costs effectively.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              We assess your vehicle during booking and honestly advise which service suits your
              situation. If paint correction isn't necessary, we won't recommend it. If paint defects
              will prevent ceramic coating from bonding properly, we'll explain why correction must come
              first. Professional service means transparent guidance based on your vehicle's actual
              condition rather than upselling unnecessary work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Contact & Consultation",
      description: "Discuss your vehicle's condition and service requirements"
    },
    {
      number: "2",
      title: "Assessment",
      description: "Evaluate paint condition and recommend appropriate services"
    },
    {
      number: "3",
      title: "Scheduling",
      description: "Book convenient appointment at your location"
    },
    {
      number: "4",
      title: "Service Delivery",
      description: "Professional execution using proper techniques and equipment"
    },
    {
      number: "5",
      title: "Final Inspection",
      description: "Review results together and provide aftercare guidance"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-foreground text-center"
          >
            Our <span className="text-primary">Service Process</span>
          </motion.h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Guide Section
const PricingGuideSection = () => {
  const services = [
    { name: "Standard Valet", price: "From £45", duration: "1-2 hours" },
    { name: "Full Valet", price: "From £120", duration: "3-4 hours" },
    { name: "Paint Correction (Single Stage)", price: "From £250", duration: "1 day" },
    { name: "Paint Correction (Multi Stage)", price: "From £450", duration: "2-3 days" },
    { name: "Ceramic Coating Package", price: "From £499", duration: "2-4 days" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-foreground text-center"
          >
            Service <span className="text-primary">Pricing Guide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-12"
          >
            Transparent pricing based on service type and vehicle size
          </motion.p>

          <div className="space-y-4 mb-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-between items-center p-4 bg-primary/5 rounded-lg"
              >
                <div>
                  <p className="font-bold text-foreground">{service.name}</p>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {service.duration}
                  </p>
                </div>
                <p className="text-xl font-bold text-primary">{service.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Note:</strong> Prices vary based on vehicle size and condition. Larger vehicles
              (SUVs, vans) and those requiring extensive correction work will be quoted accordingly.
              Contact us for a personalized quote based on your specific vehicle and requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Booking Section
const BookingSection = () => {
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
            Ready to Book Your <span className="text-primary">Service?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            Contact us to discuss your vehicle's requirements and schedule your mobile service visit.
            We'll assess your car's condition, recommend the most appropriate service, and provide clear
            pricing before any work begins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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
                Book Now
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            <p>Mobile service across Manchester • 7 days a week • Professional equipment • 22 years experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
