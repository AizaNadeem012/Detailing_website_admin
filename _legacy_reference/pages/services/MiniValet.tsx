import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle, Star, Sparkles, Car } from 'lucide-react';

const MiniValet = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Quick Mini Valet Service",
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
        "description": "Fast, affordable mini valet service across Manchester. Express cleaning for busy professionals. Perfect for regular maintenance.",
        "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Quick Mini Valet Service in Manchester | From £30 | SRV Detailing</title>
                <meta name="description" content="Fast, affordable mini valet service across Manchester. Express cleaning for busy professionals. From £30. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/mini-valet" />
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
                            <span className="text-blue-200 font-semibold">Express Maintenance</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Quick Mini Valet Service in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                            Keep your vehicle fresh and presentable with <strong>SRV Detailing</strong>'s efficient mini valet service. Perfect for busy professionals and regular maintenance, we serve Manchester and Greater Manchester from our Stockport base. Call us on <a href="tel:+447375759686" className="text-white font-bold hover:text-blue-200 transition-colors underline decoration-2">+44 7375 759686</a> to book your express mobile valeting today.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <Link href="/booking" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-lg border-2 border-blue-500">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">What is a Mini Valet?</h2>
                        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                            <p>A mini valet is a quick yet effective mobile car cleaning service designed for regular maintenance rather than deep restoration. Taking just 45 minutes to 1 hour, it provides essential interior and exterior cleaning to keep your vehicle looking presentable between comprehensive valet services.</p>
                            <p>Our mini valet includes interior vacuum and wipe-down, exterior hand wash, window cleaning inside and out, dashboard quick clean, and wheel cleaning. It's the perfect solution for weekly or fortnightly maintenance.</p>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-display">What's Included (£30 starting price)</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">Interior Quick Clean</h3>
                                <ul className="space-y-3">
                                    {['Vacuum of seats, carpets, and floor mats', 'Dashboard and console wipe-down', 'Door cards quick clean', 'All windows cleaned inside', 'Quick tidy and debris removal'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">Exterior Wash</h3>
                                <ul className="space-y-3">
                                    {['Hand wash with quality shampoo', 'Wheel cleaning', 'Tyre dressing', 'All glass cleaned outside', 'Quick dry and finish'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-6">Need a Quick Refresh?</h2>
                        <p className="text-xl mb-8">Book your express mini valet today and keep your car looking its best.</p>
                        <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50">
                            <Phone className="w-5 h-5" />
                            07375 759686
                        </a>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-16">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="mb-2 font-bold text-white">SRV Detailing</p>
                        <p>Serving Manchester, Stockport, and Greater Manchester</p>
                        <p className="mt-4">Phone: +44 7375 759686</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default MiniValet;
