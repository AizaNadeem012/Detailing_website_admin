import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle, Star, Sparkles, Wrench } from 'lucide-react';

const PaintCorrection = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Paint Correction",
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
        "description": "Expert paint correction & machine polishing across Manchester. Remove swirl marks, scratches, oxidation. 22 years experience.",
        "offers": {
            "@type": "Offer",
            "price": "200.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Paint Correction Services in Manchester | SRV Detailing</title>
                <meta name="description" content="Expert paint correction & machine polishing across Manchester. Remove swirl marks, scratches, oxidation. 22 years experience. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/paint-correction" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Navbar />

                <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Wrench className="w-6 h-6 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Advanced Restoration</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Paint Correction Services in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Restore your vehicle's paintwork to flawless condition with <strong>SRV Detailing</strong>'s professional paint correction. We use advanced machine polishing to remove swirl marks and scratches. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> to transform your car's appearance.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <Link href="/booking" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-500">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">What is Paint Correction?</h2>
                        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                            <p>Paint correction is the process of removing imperfections from your vehicle's paintwork using machine polishing techniques. Unlike waxing which temporarily fills swirls, paint correction actually removes a microscopic layer of clear coat to eliminate defects and restore a mirror-like finish.</p>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-display">Correction Levels</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'Single-Stage', price: '£200-300', desc: 'Removes 50-70% of defects. Perfect for newer vehicles.' },
                                { title: 'Two-Stage', price: '£350-500', desc: 'Removes 80-90% of defects. Ideal for moderate swirling.' },
                                { title: 'Multi-Stage', price: '£500-800+', desc: 'Removes 95%+ of defects. For show cars and luxury vehicles.' }
                            ].map((level, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-md border-2 border-slate-100">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">{level.title}</h3>
                                    <p className="text-2xl font-bold text-slate-900 mb-4">{level.price}</p>
                                    <p className="text-slate-600">{level.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Professional Paint Correction across Manchester & Stockport</p>
                    <p className="mt-4">Phone: +44 7375 759686</p>
                </footer>
            </div>
        </>
    );
};

export default PaintCorrection;
