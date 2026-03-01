import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Shield, CheckCircle, Star, Sparkles } from 'lucide-react';

const CeramicCoating = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Ceramic Coating",
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
        "description": "Expert ceramic coating application across Manchester. Long-term paint protection, hydrophobic finish. 22 years experience.",
        "offers": {
            "@type": "Offer",
            "price": "300.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Ceramic Coating Application in Manchester | SRV Detailing</title>
                <meta name="description" content="Expert ceramic coating application across Manchester. Long-term paint protection, hydrophobic finish. 22 years experience. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/ceramic-coating" />
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
                            <Shield className="w-6 h-6 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Long-Term Protection</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Ceramic Coating Application in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Protect your vehicle for years with <strong>SRV Detailing</strong>'s professional ceramic coating. Superior protection, hydrophobic properties, and enhanced gloss. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for the ultimate solution.
                        </p>

                        <div className="flex gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <Link href="/booking" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-500 shadow-lg">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is Ceramic Coating?</h2>
                        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                            <p>Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paintwork to create a permanent protective layer. Unlike waxes or sealants, ceramic coatings form a molecular bond that lasts for years, providing superior protection against UV damage, chemical etching, and minor scratches.</p>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Coating Options</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'Entry-Level', price: '£300-400', years: '2-Year Protection', desc: 'Good hydrophobic properties and basic chemical resistance.' },
                                { title: 'Mid-Range', price: '£500-700', years: '3-4 Year Protection', desc: 'Excellent hydrophobic properties and strong chemical resistance.' },
                                { title: 'Premium', price: '£800-1200+', years: '5+ Year Protection', desc: 'Maximum chemical and scratch resistance with deepest gloss.' }
                            ].map((opt, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-md border-2 border-slate-100 flex flex-col">
                                    <h3 className="text-xl font-bold text-blue-900 mb-1">{opt.title}</h3>
                                    <p className="text-sm text-blue-600 font-bold mb-2">{opt.years}</p>
                                    <p className="text-2xl font-bold text-slate-900 mb-4">{opt.price}</p>
                                    <p className="text-slate-600 flex-grow">{opt.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Certified Ceramic Coating Application in Manchester & Stockport</p>
                    <p className="mt-4">Phone: +44 7375 759686</p>
                </footer>
            </div>
        </>
    );
};

export default CeramicCoating;
