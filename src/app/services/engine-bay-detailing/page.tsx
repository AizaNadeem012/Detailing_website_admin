'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Settings, Phone, CheckCircle, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function EngineBayDetailingPage() {
  return (
    <>
      <Head>
        <title>Professional Engine Bay Detailing in Manchester | SRV Detailing</title>
        <meta name="description" content="Expert engine bay detailing across Manchester. Degreasing, steam cleaning, protection. Pre-sale preparation. Call SRV Detailing 07375 759686" />
        <link rel="canonical" href="https://www.srvdetailing.co.uk/services/engine-bay-detailing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Professional Engine Bay Detailing",
              "provider": {
                "@type": "AutoDetailingService",
                "name": "SRV Detailing",
                "telephone": "+447375759686",
                "url": "https://www.srvdetailing.co.uk/",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Stockport",
                  "addressRegion": "Greater Manchester",
                  "addressCountry": "GB"
                }
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "53.4808",
                  "longitude": "-2.2426"
                },
                "geoRadius": "25000"
              },
              "description": "Expert engine bay detailing across Manchester. Degreasing, steam cleaning, protection. Pre-sale preparation.",
              "offers": {
                "@type": "Offer",
                "price": "40.00",
                "priceCurrency": "GBP"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navbar />
        
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-blue-300" />
              <span className="text-blue-200 font-semibold">Engine Maintenance</span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Engine Bay Detailing in Manchester
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Restore your engine bay to pristine condition with <strong>SRV Detailing</strong>. Safe degreasing, steam cleaning, and protection for your engine compartment. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for a clean, well-maintained engine.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg" asChild>
                <a href="tel:+447375759686">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 07375 759686
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link href="/booking">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        <main className="max-w-7xl mx-auto px-4 py-16">
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Why Detail Your Engine Bay?</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
              A clean engine bay not only looks better but also makes it easier to spot leaks and maintain the vehicle. Our safe cleaning process uses low-moisture steam and specialized degreasers to remove road grime, oil, and dust without risking electrical components.
            </p>
          </motion.section>
          
          <motion.section 
            className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Process & Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                {[
                  'Safe degreasing of all plastic and metal',
                  'Low-moisture steam cleaning',
                  'Dressing and protection of all plastics',
                  'Improved resale value',
                  'Easier maintenance and inspection'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center">
                <p className="text-2xl font-bold mb-2">Price: £40-80</p>
                <p className="text-blue-200">Standalone service or add-on to any detailing package.</p>
              </div>
            </div>
          </motion.section>
          
          <motion.section 
            className="mb-16 bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Star className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Why Choose Our Engine Bay Detailing Service?</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Safe, non-toxic cleaning products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Specialized equipment for engine cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protective dressing for plastic and rubber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile service to your location</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}