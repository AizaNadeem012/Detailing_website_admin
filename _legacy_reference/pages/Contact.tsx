import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send, CheckCircle, Star, Shield, Award } from "lucide-react";

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// SEO Metadata for Contact Page
const contactPageMeta = {
  title: "Contact SRV Detailing | Mobile Car Valeting Manchester & Stockport",
  description: "Book professional mobile car detailing in Manchester & Stockport. SRV Detailing offers ceramic coating, paint correction, and valeting. Call 07375 759686. 22 years experience.",
  keywords: "car detailing manchester contact, stockport ceramic coating booking, mobile valeting manchester, car detailing near me, ceramic coating stockport, paint correction manchester, fleet detailing greater manchester",
  ogTitle: "Contact Manchester Car Detailing | Ceramic Coating & Mobile Valeting",
  ogDescription: "Professional car detailing across Manchester & Stockport. Book ceramic coating, paint correction, or mobile valeting. Free quotes. Call 0161 789 1234.",
  canonical: "https://srvdetailing.co.uk/contact",
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://yourwebsite.com/#organization",
        "name": "SRV Detailing",
        "image": "https://yourwebsite.com/logo.png",
        "description": "Professional car detailing services across Manchester and Stockport. Ceramic coating, paint correction, mobile valeting, and fleet services.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office Tech Solutions",
          "addressLocality": "Dukinfield",
          "addressRegion": "Greater Manchester",
          "postalCode": "SK16 4BY",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "53.4123",
          "longitude": "-2.1234"
        },
        "telephone": "+447375759686",
        "email": "info@manchestercardetailing.co.uk",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "priceRange": "££",
        "areaServed": [
          {
            "@type": "City",
            "name": "Manchester"
          },
          {
            "@type": "City",
            "name": "Stockport"
          }
        ],
        "hasMap": "https://maps.app.goo.gl/YourLink"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you offer mobile car detailing in Manchester city centre?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide mobile valeting services across Manchester city centre including Spinningfields, Deansgate, and Salford Quays. Paint correction and ceramic coating require our Stockport facility due to lighting and climate control requirements."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book car detailing in Stockport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book through our contact form, call 07375 759686, or message via WhatsApp. For ceramic coating or paint correction, we arrange a consultation before confirming the booking."
            }
          }
        ]
      }
    ]
  }
};

// --- SEO-Optimized Contact Info Cards with Local Entities ---
const ContactInfoCards = () => (
  <motion.div
    className="grid md:grid-cols-3 gap-8 py-12 max-w-6xl mx-auto"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Card 1: Phone - Manchester & Stockport Coverage */}
    <motion.div variants={itemVariants} className="p-8 bg-card rounded-xl shadow-2xl border border-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]">
      <Phone className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-2xl font-bold text-foreground mb-3">Speak to Manchester Detailing Experts</h3>
      <p className="text-muted-foreground mb-4">
        Direct consultation for ceramic coating, paint correction, and mobile valeting across Manchester and Stockport. Same-day quotes available.
      </p>
      <a href="tel:+447375759686" className="text-primary font-bold transition-colors hover:text-primary/80 flex items-center group">
        07375 759686
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
      <p className="text-sm text-muted-foreground mt-3">
        <Clock className="w-4 h-4 inline mr-1" />
        Mon-Sun: 8am-8pm
      </p>
    </motion.div>

    {/* Card 2: Email - Fleet & Business Services */}
    <motion.div variants={itemVariants} className="p-8 bg-card rounded-xl shadow-2xl border border-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]">
      <Mail className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-2xl font-bold text-foreground mb-3">Fleet & Business Enquiries</h3>
      <p className="text-muted-foreground mb-4">
        Volume quotes for taxi companies, delivery fleets, and corporate vehicles across Greater Manchester. Detailed service specifications provided.
      </p>
      <a href="mailto:srv_detailing@icloud.com" className="text-primary font-bold transition-colors hover:text-primary/80 flex items-center group">
        Email Our Team
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
      <p className="text-sm text-muted-foreground mt-3">Response within 2 hours (business days)</p>
    </motion.div>

    {/* Card 3: WhatsApp - Instant Booking */}
    <motion.div variants={itemVariants} className="p-8 bg-card rounded-xl shadow-2xl border border-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]">
      <Send className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-2xl font-bold text-foreground mb-3">WhatsApp Booking</h3>
      <p className="text-muted-foreground mb-4">
        Send photos of your vehicle for instant quotes. Perfect for mobile valeting bookings in Didsbury, Chorlton, Cheadle, and Bramhall.
      </p>
      <a href="https://wa.me/447375759686" target="_blank" rel="noopener noreferrer" className="text-primary font-bold transition-colors hover:text-primary/80 flex items-center group">
        Message on WhatsApp
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
      <p className="text-sm text-muted-foreground mt-3">Quick replies 7 days/week</p>
    </motion.div>
  </motion.div>
);

// --- Service Area Coverage - Local SEO Entity Optimization ---
const ServiceAreaSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
          Professional Car Detailing Across <span className="text-primary">Greater Manchester</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide mobile valeting, ceramic coating, and paint correction services throughout Manchester and Stockport. Both in-shop and on-site services available.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {/* Manchester Coverage */}
        <motion.div variants={itemVariants} className="p-8 bg-card rounded-xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <MapPin className="w-6 h-6 text-primary mr-3" />
            Manchester Service Areas
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Manchester City Centre</p>
                <p className="text-sm text-muted-foreground">Spinningfields, Deansgate, Northern Quarter, Salford Quays</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">South Manchester</p>
                <p className="text-sm text-muted-foreground">Didsbury, Chorlton, Withington, Sale, Altrincham, Stretford</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">North Manchester</p>
                <p className="text-sm text-muted-foreground">Prestwich, Whitefield, Crumpsall, Cheetham Hill</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">East Manchester</p>
                <p className="text-sm text-muted-foreground">Levenshulme, Gorton, Droylsden, Audenshaw</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stockport Coverage */}
        <motion.div variants={itemVariants} className="p-8 bg-card rounded-xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <MapPin className="w-6 h-6 text-primary mr-3" />
            Stockport Service Areas
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Stockport Town Centre</p>
                <p className="text-sm text-muted-foreground">Merseyway, Edgeley, Portwood, Heaton Moor</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Cheadle & Gatley</p>
                <p className="text-sm text-muted-foreground">Cheadle Hulme, Cheadle Village, Gatley, Heald Green</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Premium Residential Areas</p>
                <p className="text-sm text-muted-foreground">Bramhall, Hazel Grove, Marple, Romiley, Bredbury</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Business Parks</p>
                <p className="text-sm text-muted-foreground">Stockport Business & Innovation Centre, Bredbury Park</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Service Radius */}
      <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-lg">
        <p className="text-foreground">
          <strong>Mobile Valeting Radius:</strong> We travel up to 15 miles from Manchester and Stockport town centres.
          Covering areas including <span className="text-primary font-semibold">Wilmslow, Macclesfield outskirts, Bury, Bolton borders, and Trafford</span>.
        </p>
      </motion.div>
    </div>
  </section>
);

// --- Location Section with Stockport Facility Details ---
const LocationSection = () => (
  <section className="py-20 bg-card border-t border-b border-border">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Stockport Facility Address */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-foreground mb-6">
            Visit Our <span className="text-primary">Stockport Detailing Facility</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our mobile service is based in Stockport/Dukinfield, fully equipped for professional paint correction, ceramic coating application, and comprehensive interior detailing at your location.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <MapPin className="w-7 h-7 text-primary flex-shrink-0 mt-1 mr-4" />
              <div>
                <h4 className="font-bold text-xl text-foreground">Head Office / Base:</h4>
                <p className="text-muted-foreground">
                  SRV Detailing<br />
                  Office Tech Solutions<br />
                  Dukinfield, SK16 4BY<br />
                  Greater Manchester
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-7 h-7 text-primary flex-shrink-0 mt-1 mr-4" />
              <div>
                <h4 className="font-bold text-xl text-foreground">Operating Hours:</h4>
                <p className="text-muted-foreground">
                  Monday - Sunday: 8:00 AM - 8:00 PM<br />
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-7 h-7 text-primary flex-shrink-0 mt-1 mr-4" />
              <div>
                <h4 className="font-bold text-xl text-foreground">Mobile Facility Features:</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>✓ Fully self-contained mobile unit</li>
                  <li>✓ On-board water and power supply</li>
                  <li>✓ Professional lighting and equipment</li>
                  <li>✓ Eco-friendly waste management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://maps.app.goo.gl/YourGoogleMapsLink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition duration-300 shadow-xl shadow-primary/30 group"
            >
              Get Directions
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:+447375759686"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-white transition duration-300 group"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call to Book
            </a>
          </div>

          {/* Parking Information */}
          <div className="mt-8 p-4 bg-primary/10 border-l-4 border-primary rounded">
            <p className="text-sm text-foreground">
              <strong>Mobile Service:</strong> We come to your home or workplace. No need to travel.
            </p>
          </div>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div variants={itemVariants}>
          <div className="h-[500px] w-full rounded-3xl shadow-2xl overflow-hidden border-4 border-primary/50">
            {/* Replace with actual Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.123456789!2d-2.1234567!3d53.4123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI0JzQ0LjQiTiAywrAwNycyNC40Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manchester Car Detailing Stockport Location"
            />
          </div>

          {/* Local Landmarks for SEO */}
          <div className="mt-4 text-sm text-muted-foreground">
            <p><strong>Nearby landmarks:</strong> Stockport Town Centre (2 miles), Cheadle Village (1.5 miles), M60 Motorway Junction 1 (0.8 miles)</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Trust Signals & E-E-A-T Section ---
const TrustSignalsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Why Manchester Trusts Our <span className="text-primary">Detailing Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 22 years serving private car owners, fleet operators, and businesses across Greater Manchester with professional-grade detailing services.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <motion.div variants={itemVariants} className="p-6 bg-card rounded-xl border border-primary/20 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">22+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-card rounded-xl border border-primary/20 text-center">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">2,500+</h3>
            <p className="text-muted-foreground">Vehicles Detailed</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-card rounded-xl border border-primary/20 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">£5M</h3>
            <p className="text-muted-foreground">Insurance Coverage</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-card rounded-xl border border-primary/20 text-center">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">98%</h3>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </motion.div>
        </div>

        {/* Certifications & Compliance */}
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-card rounded-xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Professional Certifications & Compliance</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Certified Installers</h4>
              <p className="text-sm text-muted-foreground">Gtechniq, Ceramic Pro, XPEL PPF certified technicians</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Fully Insured</h4>
              <p className="text-sm text-muted-foreground">Public liability insurance (£5M) and professional indemnity coverage</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Environmental Compliance</h4>
              <p className="text-sm text-muted-foreground">Wastewater treatment systems, eco-friendly product selection</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- FAQ Section for Local SEO ---
const FAQSection = () => (
  <section className="py-20 bg-card border-t border-border">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-12 text-center">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="space-y-6">
          <motion.div variants={itemVariants} className="p-6 bg-background rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">Do you offer mobile car detailing in Manchester city centre?</h3>
            <p className="text-muted-foreground">
              Yes, we provide mobile valeting services across Manchester city centre including Spinningfields, Deansgate, and Salford Quays. For apartment complexes, we coordinate with building management to access secure parking areas. Paint correction and ceramic coating require our Stockport facility due to lighting and climate control requirements.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-background rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">How do I book car detailing in Stockport?</h3>
            <p className="text-muted-foreground">
              You can book through our contact form above, call us on 07375 759686, or message via WhatsApp. For ceramic coating or paint correction, we can arrange a consultation before confirming the booking.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-background rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">What areas do you cover for mobile valeting?</h3>
            <p className="text-muted-foreground">
              We operate within a 15-mile radius of Manchester and Stockport town centres. This includes Didsbury, Chorlton, Sale, Altrincham, Prestwich, Cheadle, Bramhall, Hazel Grove, Marple, and surrounding areas. We also service business premises in Trafford Park and Manchester Airport vicinity.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-background rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">Can I visit your Stockport workshop without an appointment?</h3>
            <p className="text-muted-foreground">
              We are a mobile service, so we come to you! We operate across Manchester, Stockport, and surrounding areas. Call 07375 759686 to book your appointment.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-background rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">Do you provide fleet detailing for Manchester businesses?</h3>
            <p className="text-muted-foreground">
              Absolutely. We service delivery fleets, taxi companies, corporate car pools, and commercial vehicles across Greater Manchester. Volume discounts available for 3+ vehicles. We offer on-site mobile cleaning at business premises. Email srv_detailing@icloud.com for fleet quotes.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-background rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept cash, all major credit/debit cards (Visa, Mastercard, American Express), bank transfers, and contactless payments. For fleet contracts and business customers, we offer 30-day payment terms upon credit approval. Deposits required for ceramic coating bookings (£100-£200 depending on package).
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Hero Section (SEO Optimized) ---
const ContactHeroSection = () => (
  <div className="relative pt-32 pb-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">

    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
    }} />

    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="container mx-auto px-4 text-center relative z-10 max-w-5xl"
    >
      <span className="text-md font-semibold uppercase tracking-widest text-primary mb-4 block">
        — Professional Car Detailing Manchester & Stockport —
      </span>
      <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
        Book Your <span className="text-primary">Ceramic Coating</span> or <span className="text-primary">Mobile Valet</span> Today
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
        Expert paint correction, ceramic coating, and mobile valeting services across Manchester, Stockport, Didsbury, Cheadle, and surrounding areas. Free quotes available.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <span className="px-4 py-2 bg-primary/20 text-white rounded-full text-sm border border-primary/40">
          Mobile Valeting Available
        </span>
        <span className="px-4 py-2 bg-primary/20 text-white rounded-full text-sm border border-primary/40">
          Stockport Workshop
        </span>
        <span className="px-4 py-2 bg-primary/20 text-white rounded-full text-sm border border-primary/40">
          Fleet Services
        </span>
        <span className="px-4 py-2 bg-primary/20 text-white rounded-full text-sm border border-primary/40">
          Same-Day Quotes
        </span>
      </div>

      <motion.a
        href="#contact-form"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition duration-300 shadow-2xl shadow-primary/40"
      >
        <Send className="w-6 h-6 mr-3" />
        Request Your Free Quote
      </motion.a>

      <p className="mt-6 text-gray-400 text-sm">
        Or call <a href="tel:+447375759686" className="text-primary font-bold hover:underline">07375 759686</a> for instant consultation
      </p>
    </motion.div>
  </div>
);

// --- Main Contact Page Component ---
const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* 1. SEO-Optimized Hero Section */}
        <ContactHeroSection />

        {/* 2. Contact Form Section */}
        <section id="contact-form" className="py-24 bg-background">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Get Your Personalized Car Detailing Quote
              </h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your vehicle and detailing requirements. We'll respond with accurate pricing for ceramic coating, paint correction, or mobile valeting services in Manchester and Stockport.
              </p>
            </div>
            <ContactSection />
          </motion.div>
        </section>

        {/* 3. Contact Methods Cards with Local Entities */}
        <section className="py-24 bg-card border-t border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-8 text-center">
              Multiple Ways to <span className="text-primary">Reach Us</span>
            </h2>
            <ContactInfoCards />
          </div>
        </section>

        {/* 4. Service Area Coverage - Local SEO */}
        <ServiceAreaSection />

        {/* 5. Trust Signals & E-E-A-T */}
        <TrustSignalsSection />

        {/* 6. Stockport Facility Location & Map */}
        <LocationSection />

        {/* 7. FAQ Section for Semantic SEO */}
        <FAQSection />

      </main>
      <Footer />
    </div>
  );
};

export default Contact;