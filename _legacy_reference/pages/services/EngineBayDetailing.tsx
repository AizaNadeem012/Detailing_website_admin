import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Settings, CheckCircle, Star, Sparkles } from 'lucide-react';

const EngineBayDetailing = () => {
    const structuredData = {
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
        "description": "Expert engine bay detailing across Manchester. Degreasing, steam cleaning, protection. Pre-sale preparation. Call 07375 759686",
        "offers": {
            "@type": "Offer",
            "price": "40.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Engine Bay Detailing in Manchester | SRV Detailing</title>
                <meta name="description" content="Expert engine bay detailing across Manchester. Degreasing, steam cleaning, protection. Pre-sale preparation. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/engine-bay-detailing" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Navbar />

                <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Settings className="w-6 h-6 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Engine Maintenance</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Engine Bay Detailing in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Restore your engine bay to pristine condition with <strong>SRV Detailing</strong>. Safe degreasing, steam cleaning, and protection for your engine compartment. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for a clean, well-maintained engine.
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Why Detail Your Engine Bay?</h2>
                        <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">A clean engine bay not only looks better but also makes it easier to spot leaks and maintain the vehicle. Our safe cleaning process uses low-moisture steam and specialized degreasers to remove road grime, oil, and dust without risking electrical components.</p>
                    </section>

                    <section className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Process & Benefits</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <ul className="space-y-4">
                                {['Safe degreasing of all plastic and metal', 'Low-moisture steam cleaning', 'Dressing and protection of all plastics', 'Improved resale value', 'Easier maintenance and inspection'].map((b, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <span className="text-slate-700 font-medium">{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center">
                                <p className="text-2xl font-bold mb-2">Price: £40-80</p>
                                <p className="text-blue-200">Standalone service or add-on to any detailing package.</p>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Mobile Engine Bay Detailing across Manchester & Stockport</p>
                </footer>
            </div>
        </>
    );
};

export default EngineBayDetailing;
