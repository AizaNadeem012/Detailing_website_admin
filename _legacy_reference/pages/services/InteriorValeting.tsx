import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle, Star, Home } from 'lucide-react';

const InteriorValeting = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Interior Car Valeting Service",
        "provider": {
            "@type": "AutoDetailingService",
            "name": "SRV Detailing",
            "telephone": "+447375759686",
            "url": "https://www.srvdetailing.co.uk/"
        },
        "description": "Professional mobile interior car valeting with deep cleaning, steam treatment, pet hair removal, and stain elimination across Manchester.",
        "offers": {
            "@type": "Offer",
            "price": "45.00",
            "priceCurrency": "GBP"
        }
    };

    return (
        <>
            <Helmet>
                <title>Professional Interior Car Valeting in Manchester | SRV Detailing</title>
                <meta name="description" content="Expert mobile interior car valeting across Manchester. Deep cleaning, steam treatment, pet hair & stain removal. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/services/interior-valeting" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Navbar />

                <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <Home className="w-6 h-6 text-emerald-300" />
                            <span className="text-emerald-200 font-semibold">Interior Specialists</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Interior Car Valeting in Manchester
                        </h1>

                        <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl leading-relaxed">
                            Transform your vehicle's interior with <strong>SRV Detailing</strong>'s professional mobile valeting service. Serving Manchester and Greater Manchester from our Stockport base, we bring deep cleaning expertise directly to you. Call <a href="tel:+447375759686" className="text-white font-bold hover:text-emerald-200 underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk/" className="text-white font-bold hover:text-emerald-200 underline">www.srvdetailing.co.uk</a> to restore your car's interior to pristine condition.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <Link href="/booking" className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg border-2 border-emerald-500">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-16">

                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            What is Interior Car Valeting?
                        </h2>
                        <div className="prose prose-lg max-w-none text-slate-700">
                            <p className="text-xl mb-6">
                                Interior car valeting is a comprehensive deep cleaning service focused exclusively on the inside of your vehicle. Unlike a quick vacuum or wipe-down, professional interior valeting involves steam cleaning, stain treatment, odour elimination, and meticulous attention to every surface from the dashboard to the boot.
                            </p>
                            <p className="mb-6">
                                At SRV Detailing, our interior valeting service typically takes 1.5 to 2 hours and addresses all aspects of your cabin environment. We use professional-grade steam cleaners to sanitise and deep clean upholstery, specialist tools to extract embedded pet hair, appropriate solutions to treat stubborn stains, and quality products to protect and restore all interior surfaces.
                            </p>
                            <p className="mb-6">
                                This service is ideal for families dealing with spills and daily wear, pet owners battling embedded hair and odours, commuters wanting a fresh driving environment, or anyone preparing their vehicle for sale or simply wanting to enjoy a clean, pleasant cabin again.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                            What's Included in Interior Valeting
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-xl font-bold text-emerald-900 mb-4">Deep Cleaning Services</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Complete vacuum of all seats, carpets, and floor mats',
                                        'Professional steam cleaning of upholstery and fabric',
                                        'Dashboard, console, and trim thorough cleaning',
                                        'Door cards, pockets, and storage compartments',
                                        'Air vents cleaned and deodorised',
                                        'All interior glass and mirrors crystal clear',
                                        'Seat belts, buckles, and runners cleaned',
                                        'Boot area vacuumed and detailed completely'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-xl font-bold text-emerald-900 mb-4">Specialist Treatments</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Pet hair removal using specialist tools',
                                        'Stain treatment for food, drink, and mud marks',
                                        'Leather cleaning and conditioning treatment',
                                        'Fabric protection application available',
                                        'Odour neutralisation and air freshening',
                                        'Plastic and vinyl restoration treatment',
                                        'Cup holders and small spaces detailed',
                                        'Final inspection and quality check'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-emerald-900 text-white rounded-xl p-6">
                            <p className="text-lg">
                                <strong className="text-emerald-200">Starting from £45</strong> for small/medium vehicles. Larger vehicles, heavily soiled interiors, or extensive pet hair may require additional time. Contact us for an accurate quote.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                            Who Needs Interior Valeting?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Families with Children',
                                    description: 'Tackle sticky spills, crumbs, muddy footprints, and the daily chaos of school runs and family outings. We restore your family car to a clean, hygienic environment.'
                                },
                                {
                                    title: 'Pet Owners',
                                    description: 'Remove embedded pet hair, paw prints, and animal odours with specialist tools and techniques. Perfect for dog owners who regularly transport their pets.'
                                },
                                {
                                    title: 'Daily Commuters',
                                    description: 'Refresh your driving environment after months of coffee cups, lunch debris, and daily wear. Enjoy a pleasant, clean cabin for your daily journeys.'
                                },
                                {
                                    title: 'Smokers',
                                    description: 'Eliminate smoke odours and residue with deep cleaning and odour neutralisation treatments. Restore a fresh, clean smell to your vehicle\'s interior.'
                                },
                                {
                                    title: 'Pre-Sale Preparation',
                                    description: 'Significantly increase your vehicle\'s appeal and value with a professionally cleaned interior. Buyers notice and value a well-maintained cabin.'
                                },
                                {
                                    title: 'Allergy Sufferers',
                                    description: 'Reduce allergens, dust, and particles with thorough steam cleaning and vacuuming. Create a healthier environment for sensitive passengers.'
                                }
                            ].map((benefit, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-2 border-slate-100 hover:border-emerald-300 transition-colors">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-3">{benefit.title}</h3>
                                    <p className="text-slate-700">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Book Your Interior Valeting Service
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                            Contact <strong>SRV Detailing</strong> today for professional mobile interior valeting across Manchester and Greater Manchester. Over 22 years of experience delivering exceptional results.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <a href="https://www.srvdetailing.co.uk/" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-500 transition-all shadow-lg">
                                Visit Website
                            </a>
                        </div>
                    </section>

                </main>

                <footer className="bg-slate-900 text-slate-300 py-8 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="mb-2"><strong className="text-white">SRV Detailing</strong> - Professional Mobile Car Valeting</p>
                        <p className="mb-2">Phone: <a href="tel:+447375759686" className="text-emerald-400 hover:text-emerald-300">+44 7375 759686</a></p>
                        <p className="mb-4">Website: <a href="https://www.srvdetailing.co.uk/" className="text-emerald-400 hover:text-emerald-300">www.srvdetailing.co.uk</a></p>
                        <p className="text-sm text-slate-400">Serving Manchester, Greater Manchester, and Stockport</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default InteriorValeting;
