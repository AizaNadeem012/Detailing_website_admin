import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Scissors, CheckCircle, Dog, Sparkles } from 'lucide-react';

const PetHairRemoval = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Pet Hair Removal",
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
        "description": "Expert pet hair removal from car interiors across Manchester. Specialist tools, deep extraction. From £20 add-on.",
        "offers": {
            "@type": "Offer",
            "price": "20.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Pet Hair Removal Service in Manchester | SRV Detailing</title>
                <meta name="description" content="Expert pet hair removal from car interiors across Manchester. Specialist tools, deep extraction. From £20 add-on. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/pet-hair-removal" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Navbar />

                <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Dog className="w-6 h-6 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Specialist Extraction</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display">
                            Professional Pet Hair Removal Service in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Eliminate embedded pet hair from your vehicle with <strong>SRV Detailing</strong>. We use professional tools to extract even the most stubborn hair. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for a hair-free interior.
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Why is Pet Hair So Difficult?</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">Pet hair embeds deeply into carpet fibres and upholstery due to its barbed structure and static electricity. Standard vacuum cleaners often can't extract hair that's woven into fabric. We use specialist rubber rakes, compressed air, and powerful vacuums to ensure total removal.</p>
                    </section>

                    <section className="mb-16 bg-blue-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display">Pricing</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'As Add-On', price: '£20-30', desc: 'Added to any valeting service.' },
                                { title: 'Standalone', price: '£40-60', desc: 'Focus only on pet hair removal.' },
                                { title: 'Severe Cases', price: '£60-80+', desc: 'For heavily soiled interiors.' }
                            ].map((p, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">{p.title}</h3>
                                    <p className="text-2xl font-bold text-slate-900 mb-4">{p.price}</p>
                                    <p className="text-slate-600 font-display">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Mobile Pet Hair Removal in Manchester & Stockport</p>
                </footer>
            </div>
        </>
    );
};

export default PetHairRemoval;
