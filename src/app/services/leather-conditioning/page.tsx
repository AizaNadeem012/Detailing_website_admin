'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Sofa, Phone, CheckCircle, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function LeatherConditioningPage() {
  return (
    <>
      <Head>
        <title>Professional Leather Conditioning in Manchester | SRV Detailing</title>
        <meta name="description" content="Expert leather conditioning across Manchester. Preserve, protect, and restore leather upholstery. Premium conditioning treatments. Call SRV Detailing 07375 759686" />
        <link rel="canonical" href="https://www.srvdetailing.co.uk/services/leather-conditioning" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Professional Leather Conditioning",
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
              "description": "Expert leather conditioning across Manchester. Preserve, protect, and restore leather upholstery. Premium conditioning treatments.",
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
              <Sofa className="w-6 h-6 text-blue-300" />
              <span className="text-blue-200 font-semibold">Upholstery Care</span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Leather Conditioning in Manchester
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Preserve and restore your leather upholstery with <strong>SRV Detailing</strong>. Our premium conditioning treatments nourish, protect, and rejuvenate leather. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for professional leather care.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Our Leather Conditioning Process</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
              We thoroughly clean leather surfaces to remove dirt, oils, and stains, then apply premium conditioning products that penetrate the leather fibers to restore moisture, flexibility, and natural beauty. Our process helps prevent cracking, fading, and premature aging.
            </p>
          </motion.section>
          
          <motion.section 
            className="mb-16 grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 font-display">Benefits of Leather Conditioning</h3>
              <ul className="space-y-3">
                {[
                  'Restores natural oils and moisture',
                  'Prevents cracking and premature aging',
                  'Protects against UV damage and fading',
                  'Maintains softness and flexibility',
                  'Enhances appearance and extends life'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 font-display">Premium Products</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                We use high-quality leather conditioners that are specifically formulated for automotive leather. These products deeply penetrate the leather fibers to provide long-lasting protection and nourishment without leaving greasy residue or affecting breathability.
              </p>
              <p className="text-sm text-blue-300 font-display italic">
                *Safe for all types of leather including perforated and premium hides.
              </p>
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
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Why Choose Our Leather Conditioning Service?</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Specialized leather care expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Premium conditioning products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Restores and protects leather</span>
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