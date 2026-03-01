import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, Droplets, CheckCircle, Star } from 'lucide-react';

const ExteriorValeting = () => {
    return (
        <>
            <Helmet>
                <title>Professional Exterior Car Valeting in Manchester | SRV Detailing</title>
                <meta name="description" content="Expert mobile exterior car valeting across Manchester. Hand wash, wax protection, paintwork care. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/exterior-valeting" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Navbar />

                <section className="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-slate-900 text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <Droplets className="w-6 h-6 text-cyan-300" />
                            <span className="text-cyan-200 font-semibold">Exterior Specialists</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Professional Exterior Car Valeting in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl">
                            Protect and enhance your vehicle's paintwork with <strong>SRV Detailing</strong>'s professional mobile exterior valeting. Based in Stockport, serving all Manchester and Greater Manchester. Call <a href="tel:+447375759686" className="text-white font-bold hover:text-cyan-200 underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk/" className="text-white font-bold hover:text-cyan-200 underline">www.srvdetailing.co.uk</a> for showroom-quality results at your location.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-cyan-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-all shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-16">

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            What is Exterior Car Valeting?
                        </h2>
                        <p className="text-xl text-slate-700 mb-6">
                            Exterior car valeting is professional hand washing and paintwork protection that goes far beyond automated car washes. Our service includes pre-wash treatment, two-bucket hand washing, wheel deep cleaning, clay bar decontamination, and protective wax or sealant application to keep your vehicle looking brilliant and protected against the elements.
                        </p>
                        <p className="text-lg text-slate-700 mb-6">
                            At SRV Detailing, we use pH-neutral shampoos that won't strip existing protection, soft microfibre wash mitts that prevent scratching, and premium waxes or synthetic sealants that provide months of weather protection. Our mobile service brings all equipment and water supply directly to your Manchester location, whether home, workplace, or elsewhere.
                        </p>
                    </section>

                    <section className="mb-16 bg-cyan-50 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">
                            What's Included
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-3">
                                {[
                                    'Pre-wash with snow foam application',
                                    'Hand wash using two-bucket method',
                                    'pH-neutral shampoo safe for all paints',
                                    'Wheel and arch deep cleaning',
                                    'Tyre cleaning and dressing',
                                    'Clay bar decontamination treatment'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {[
                                    'Premium wax or synthetic sealant',
                                    'Glass and mirror polishing',
                                    'Chrome and metal trim polishing',
                                    'Plastic trim restoration',
                                    'Door shuts and fuel cap detailed',
                                    'Final quality inspection'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 bg-cyan-900 text-white rounded-xl p-6">
                            <p className="text-lg">
                                <strong className="text-cyan-200">Starting from £35</strong> for small/medium vehicles. Larger vehicles priced accordingly.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">
                            Benefits of Professional Exterior Valeting
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Paint Protection',
                                    description: 'Wax or sealant creates a protective barrier against UV rays, rain, road salt, and environmental contaminants that damage paintwork over time.'
                                },
                                {
                                    title: 'Enhanced Appearance',
                                    description: 'Hand washing and polishing restore depth of colour and brilliant shine that automated washes simply cannot achieve.'
                                },
                                {
                                    title: 'Preserved Value',
                                    description: 'Regular professional valeting maintains your vehicle\'s exterior condition, protecting your investment and resale value.'
                                },
                                {
                                    title: 'Scratch Prevention',
                                    description: 'Our two-bucket method and soft mitts prevent the swirl marks and scratches common with automated brushes and poor washing techniques.'
                                },
                                {
                                    title: 'Weather Resistance',
                                    description: 'Protective coatings make water bead and roll off, keeping your car cleaner for longer between washes.'
                                },
                                {
                                    title: 'Convenient Service',
                                    description: 'We come to you across Manchester, saving you time and hassle of visiting fixed-location car washes.'
                                }
                            ].map((benefit, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-2 border-slate-100">
                                    <h3 className="text-xl font-bold text-cyan-900 mb-3">{benefit.title}</h3>
                                    <p className="text-slate-700">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Book Exterior Valeting Today
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                            Contact <strong>SRV Detailing</strong> for professional mobile exterior valeting across Manchester. Over 22 years of paintwork care expertise.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <a href="https://www.srvdetailing.co.uk/" className="inline-flex items-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-500 transition-all shadow-lg">
                                Visit Website
                            </a>
                        </div>
                    </section>

                </main>

                <footer className="bg-slate-900 text-slate-300 py-8 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="mb-2"><strong className="text-white">SRV Detailing</strong> - Professional Mobile Car Valeting</p>
                        <p className="mb-2">Phone: <a href="tel:+447375759686" className="text-cyan-400">+44 7375 759686</a></p>
                        <p className="mb-4">Website: <a href="https://www.srvdetailing.co.uk/" className="text-cyan-400">www.srvdetailing.co.uk</a></p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ExteriorValeting;
