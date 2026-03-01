import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Sparkles, CheckCircle, Star } from 'lucide-react';

const LeatherConditioning = () => {
    const structuredData = {
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
        "description": "Expert leather seat conditioning across Manchester. Cleaning, conditioning, protection, restoration. Call 07375 759686",
        "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Leather Seat Conditioning in Manchester | SRV Detailing</title>
                <meta name="description" content="Expert leather seat conditioning across Manchester. Cleaning, conditioning, protection, restoration. Luxury vehicle specialists. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/leather-conditioning" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Navbar />

                <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-6 h-6 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Luxury Interior Care</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Leather Seat Conditioning in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Preserve and restore your luxury interior with <strong>SRV Detailing</strong>'s professional leather conditioning. Expert cleaning, conditioning, and protection for all leather types. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> to maintain your investment.
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Leather Needs Conditioning</h2>
                        <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">Leather is a natural material that can dry out, crack, and lose its suppleness over time when exposed to heat and sunlight. Our conditioning process deep cleans the pores and applies premium conditioners to restore the natural oils and provide a protective barrier.</p>
                    </section>

                    <section className="mb-16 grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Process</h3>
                            <ul className="space-y-3">
                                {['pH-balanced deep cleaning', 'Gentle agitation of leather pores', 'High-quality conditioner application', 'UV protection treatment', 'Matte finish for original look'].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <span className="text-slate-700">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-2xl flex flex-col justify-center">
                            <p className="text-2xl font-bold text-blue-900 mb-2">Price: £30-60</p>
                            <p className="text-slate-600">Preserve your seats from just £30 as an add-on. Recommended every 6 months.</p>
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Providing Mobile Leather Care across Manchester & Stockport</p>
                </footer>
            </div>
        </>
    );
};

export default LeatherConditioning;
