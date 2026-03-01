import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Wind, CheckCircle, Star, Sparkles } from 'lucide-react';

const OdourRemoval = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Car Odour Removal",
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
        "description": "Expert car odour removal across Manchester. Eliminate smoke, pet, mould smells. Ozone treatment available.",
        "offers": {
            "@type": "Offer",
            "price": "40.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Car Odour Removal in Manchester | SRV Detailing</title>
                <meta name="description" content="Expert car odour removal across Manchester. Eliminate smoke, pet, mould smells. Ozone treatment available. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/odour-removal" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Navbar />

                <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Wind className="w-6 h-6 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Fresh Interior Restoration</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Car Odour Removal in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Eliminate stubborn odours with <strong>SRV Detailing</strong>. We tackle smoke, pet, mould, and persistent smells using deep cleaning and ozone treatment. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for a fresh interior.
                        </p>

                        <div className="flex gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Our Odour Removal Process</h2>
                        <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">We locate the source of the odour and use professional-grade steam cleaning, extraction, and ozone generators to eliminate smells at a molecular level rather than just masking them with perfumes.</p>
                    </section>

                    <section className="mb-16 grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4 font-display">Odours We Eliminate</h3>
                            <ul className="space-y-3">
                                {['Tobacco & Cannabis Smoke', 'Pet & Damp Dog smells', 'Mould & Mildew', 'Milk & Food spillages', 'Vomit & Biological waste'].map((o, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <span>{o}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 font-display">Ozone Treatment</h3>
                            <p className="text-blue-100 leading-relaxed mb-4">For severe cases, we use a professional ozone generator. Ozone (O3) destroys odour-causing molecules in fabrics, carpets, and ventilation systems. It's the most powerful solution for smoke and deep-set smells.</p>
                            <p className="text-sm text-blue-300 font-display italic">*Requires 4-6 hours curing and ventilation time.</p>
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Mobile Odour Removal across Manchester, Stockport & Greater Manchester</p>
                </footer>
            </div>
        </>
    );
};

export default OdourRemoval;
