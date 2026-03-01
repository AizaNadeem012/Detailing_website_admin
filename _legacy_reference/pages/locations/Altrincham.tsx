import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Altrincham = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SRV Detailing - Altrincham",
        "telephone": "+447375759686",
        "url": "https://www.srvdetailing.co.uk/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Altrincham",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.3838",
            "longitude": "-2.3526"
        }
    };

    return (
        <>
            <Helmet>
                <title>Mobile Car Valeting in Altrincham | SRV Detailing</title>
                <meta name="description" content="Professional mobile car valeting in Altrincham, Hale, Bowdon, Timperley. Premium service for prestige vehicles. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/locations/altrincham" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Mobile Car Valeting in Altrincham
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Experience premium mobile car valeting in Altrincham with <strong>SRV Detailing</strong>. Serving Altrincham, Hale, Bowdon, Timperley, and surrounding areas for over 22 years, we provide professional valeting and detailing services for the area's many prestige and luxury vehicles. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to book your mobile service today.
                        </p>
                        <a
                            href="tel:+447375759686"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg"
                        >
                            <Phone className="w-5 h-5" />
                            Call 07375 759686
                        </a>
                    </div>
                </section>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto px-4 py-16">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p className="text-lg leading-relaxed mb-6">
                            Altrincham and its surrounding villages are known for affluent residential areas, premium vehicles, and high standards of vehicle maintenance. Our mobile service brings professional-grade valeting directly to your Altrincham location, whether that's your home driveway in Hale, your Bowdon property, or your workplace in Altrincham town centre.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Mobile Valeting Across Altrincham</h2>
                        <p className="leading-relaxed mb-6">
                            We understand that Altrincham residents expect exceptional standards, and we deliver exactly that – professional equipment, premium products, meticulous attention to detail, and results that exceed expectations. Our 22+ years serving the area have built a reputation for quality that Altrincham's discerning vehicle owners trust.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Our fully-equipped mobile unit brings everything needed for professional valeting directly to you – commercial-grade water supply, power generation, premium eco-friendly products, and specialist equipment. From executive saloons to luxury SUVs, we have the expertise and equipment to deliver exceptional results for Altrincham's premium vehicle market.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Areas of Altrincham We Serve</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Altrincham Town Centre</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Central Altrincham</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Stamford Quarter</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Market area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Business district</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Hale</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Hale Village</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Hale Barns</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Ashley</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>High-end residential streets</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Bowdon</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Bowdon Village</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>The Downs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Prestigious residential areas</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Timperley & Surrounding Areas</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Timperley Village</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Brooklands</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Broadheath</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Dunham Massey</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Services for Prestige Vehicles</h2>
                        <p className="leading-relaxed mb-6">
                            Altrincham has a high concentration of luxury and prestige vehicles requiring specialist care:
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Paint Correction (£200-800+)</h3>
                                <p>Remove swirl marks and imperfections from premium paintwork. Popular with Mercedes, BMW, Audi, Range Rover, and Porsche owners.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Ceramic Coating (£300-1200+)</h3>
                                <p>Long-term protection for luxury vehicles. Particularly popular for new vehicle protection and high-value cars.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Professional Detailing (£400-2000+)</h3>
                                <p>Complete restoration and protection packages for prestige vehicles. Show car finish for discerning owners.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Full Valet Service (£75-150+)</h3>
                                <p>Comprehensive cleaning for executive and luxury vehicles. Higher pricing reflects larger vehicles and premium standards.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Hale and Bowdon Residential Service</h2>
                        <p className="leading-relaxed mb-6">
                            Hale and Bowdon's prestigious residential areas are perfect for mobile valeting:
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Large driveways accommodate our mobile service easily</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Premium vehicles require professional care</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Busy professionals appreciate at-home convenience</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>High standards demand quality results</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Regular maintenance preserves significant vehicle investments</span>
                            </li>
                        </ul>
                        <p className="leading-relaxed mb-6">
                            Many Hale and Bowdon residents schedule monthly or quarterly valets to maintain their vehicles in pristine condition, often combining full valets with seasonal paint protection or detailing services.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Altrincham Business District</h2>
                        <p className="leading-relaxed mb-6">
                            We serve Altrincham's business community with workplace valeting:
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Altrincham town centre offices</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Stamford Quarter businesses</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Business parks and commercial premises</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Retail locations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Professional services firms</span>
                            </li>
                        </ul>
                        <p className="leading-relaxed mb-6">
                            Many Altrincham businesses arrange regular mobile valeting for directors' vehicles or as a staff benefit, with service provided during working hours in company car parks.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Altrincham Residents Choose SRV Detailing</h2>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Premium Standards:</strong> Quality matching Altrincham's expectations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Prestige Vehicle Experience:</strong> Expertise with luxury brands</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Attention to Detail:</strong> Meticulous care for valuable vehicles</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Professional Products:</strong> Premium eco-friendly solutions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Reliable Service:</strong> 22+ years serving the area</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Flexible Scheduling:</strong> Appointments to suit busy lifestyles</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Discretion:</strong> Professional, respectful service</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Nearby Areas from Altrincham</h2>
                        <p className="leading-relaxed mb-4">
                            From Altrincham, we also serve:
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/sale" className="text-primary hover:underline font-medium">Sale</Link> (5 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Urmston</strong> (10 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Wilmslow</strong> (15 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Knutsford</strong> (20 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Stockport</strong> (20 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/didsbury" className="text-primary hover:underline font-medium">Manchester</Link> (25 minutes)
                            </li>
                        </ul>
                    </div>
                </main>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Book Premium Mobile Car Valeting in Altrincham
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Contact <strong>SRV Detailing</strong> for professional service across Altrincham, Hale, Bowdon, and Timperley. Call <strong>+44 7375 759686</strong> or visit <strong>www.srvdetailing.co.uk</strong> for premium mobile valeting.
                        </p>
                        <a
                            href="tel:+447375759686"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now: 07375 759686
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-slate-300 py-12 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="mb-2 font-bold text-white text-lg">SRV Detailing</p>
                        <p className="mb-4">Professional Mobile Car Valeting in Altrincham</p>
                        <p className="mb-2">
                            <a href="tel:+447375759686" className="text-primary hover:underline font-bold">
                                +44 7375 759686
                            </a>
                        </p>
                        <p>
                            <a href="https://www.srvdetailing.co.uk" className="text-primary hover:underline">
                                www.srvdetailing.co.uk
                            </a>
                        </p>
                        <p className="mt-4 text-sm">Serving Altrincham, Hale, Bowdon, Timperley & Greater Manchester</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Altrincham;
