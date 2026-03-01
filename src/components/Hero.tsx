import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Instagram, Shield, Droplets, Sparkles, Car } from "lucide-react";
import heroImage from "@/assets/hero.jpeg"; // ✅ Correct imported image
import ServicesSection from "../components/Services";

const features = [
  { icon: Shield, label: "Ceramic Coating Accredited" },
  { icon: Droplets, label: "Paint Protection" },
  { icon: Sparkles, label: "Paint Correction" },
  { icon: Car, label: "Mobile Services" },
];

const services = [
  {
    icon: Car,
    title: "Mobile Valeting",
    desc: "Convenient fully equipped mobile service at your location.",
  },
  {
    icon: Sparkles,
    title: "Paint Correction",
    desc: "Remove swirl marks & scratches for showroom finish.",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    desc: "Long-lasting paint protection with accredited products.",
  },
  {
    icon: Droplets,
    title: "Paint Protection",
    desc: "Protect your car from UV rays, dirt & contaminants.",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 lg:pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={typeof heroImage === 'string' ? heroImage : heroImage.src}
          alt="Professional car detailing with ceramic coating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              22 Years of Excellence
            </motion.div>

            <h1 className="text-h1 md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Professional Mobile
              <span className="block text-primary">Car Detailing</span>
              & Valeting
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Valeting & detailing specialist accredited in ceramic coating. Fully equipped 
              mobile services and unit-based solutions for paint correction, enhancement, 
              and protection.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="hero" size="lg" asChild>
                <Link href="/booking">Book a Service</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/booking">Call Now</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="tel:+447375759686"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">+44 7375 759686</span>
              </a>
              <a
                href="https://instagram.com/srv.detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">@srv.detailing</span>
              </a>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-card/80 backdrop-blur-md rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{feature.label}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
