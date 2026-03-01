import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Sparkles, CheckCircle, Star } from 'lucide-react';

const CarDetailing = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Car Detailing",
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
        "description": "Comprehensive car detailing across Manchester. Paint correction, protection, interior restoration. 22 years experience.",
        "offers": {
            "@type": "Offer",
            "price": "200.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Car Detailing Services in Manchester | SRV Detailing</title>
                <meta name="description" content="Comprehensive car detailing across Manchester. Paint correction, protection, interior restoration. 22 years experience. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/car-detailing" />
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
                            <Sparkles className="w-6 h-6 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Automotive Perfection</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Car Detailing Services in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Experience automotive perfection with <strong>SRV Detailing</strong>'s comprehensive car detailing. Serving Manchester and Greater Manchester for over 22 years. Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for a showroom finish.
                        </p>

                        <div className="flex gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <Link href="/booking" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-500 shadow-lg">
                                View Packages
                            </Link>
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-16">
                    <section className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is Car Detailing?</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">Car detailing is the art and science of restoring and protecting your vehicle to the highest possible standard. Unlike valeting (which is cleaning), detailing is restoration, correction, and protection. It involves paint correction to remove imperfections, ceramic coating application, interior restoration, and meticulous attention to every surface.</p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Detailing Packages</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Bronze', price: '£200-300', time: '4-6 hours', features: ['Full valet', 'Paint enhancement', 'Premium wax'] },
                                { title: 'Silver', price: '£400-600', time: '6-10 hours', features: ['Two-stage correction', '1-year sealant', 'Engine bay detail'] },
                                { title: 'Gold', price: '£700-1000', time: '10-16 hours', features: ['Multi-stage correction', '3-5y Ceramic coating', 'Interior restoration'] },
                                { title: 'Platinum', price: '£1200+', time: '16-24+ hours', features: ['Show car finish', 'Full ceramic protection', 'Every detail addressed'] }
                            ].map((pkg, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-md border-2 border-slate-100 hover:border-blue-300 transition-colors">
                                    <h3 className="text-xl font-bold text-blue-900 mb-1">{pkg.title}</h3>
                                    <p className="text-sm text-slate-500 mb-4">{pkg.time}</p>
                                    <p className="text-2xl font-bold text-slate-900 mb-4">{pkg.price}</p>
                                    <ul className="space-y-2">
                                        {pkg.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Premium Car Detailing in Manchester & Stockport</p>
                    <p className="mt-4">Phone: +44 7375 759686</p>
                </footer>
            </div>
        </>
    );
};

export default CarDetailing;
