import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Eye, CheckCircle, Star, Droplets } from 'lucide-react';

const HeadlightRestoration = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Headlight Restoration",
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
        "description": "Expert headlight restoration across Manchester. Remove yellowing, restore clarity, improve safety. From £40.",
        "offers": {
            "@type": "Offer",
            "price": "40.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Headlight Restoration in Manchester | From £40 | SRV Detailing</title>
                <meta name="description" content="Expert headlight restoration across Manchester. Remove yellowing, restore clarity, improve safety. From £40. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/headlight-restoration" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Navbar />

                <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/50 mix-blend-overlay"></div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Eye className="w-6 h-6 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Clarity & Safety</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Headlight Restoration in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Restore clarity and safety to your headlights with <strong>SRV Detailing</strong>. We remove UV damage, yellowing, and oxidation. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for improved visibility and MOT compliance.
                        </p>

                        <div className="flex gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <Link href="/booking" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-500 shadow-lg font-display">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Do Headlights Go Cloudy?</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">Modern headlights use polycarbonate plastic lenses which are susceptible to UV damage over time. The sun's ultraviolet rays break down the protective coating, causing yellowing and cloudiness that significantly reduces light output and safety.</p>
                    </section>

                    <section className="mb-16 bg-blue-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Benefits of Restoration</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Improved Safety', desc: 'Restore up to 80% lost light output.' },
                                { title: 'MOT Compliance', desc: 'Avoid failure due to poor visibility.' },
                                { title: 'Cost-Effective', desc: 'Save hundreds vs replacement units.' }
                            ].map((b, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">{b.title}</h3>
                                    <p className="text-slate-600">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Mobile Headlight Restoration across Manchester & Stockport</p>
                </footer>
            </div>
        </>
    );
};

export default HeadlightRestoration;
