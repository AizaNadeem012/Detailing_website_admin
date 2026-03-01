import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Bramhall = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SRV Detailing - Bramhall",
        "telephone": "+447375759686",
        "url": "https://www.srvdetailing.co.uk/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bramhall",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.3595",
            "longitude": "-2.1631"
        }
    };

    return (
        <>
            <Helmet>
                <title>Mobile Car Valeting in Bramhall | Professional Service | SRV Detailing</title>
                <meta name="description" content="Premium mobile car valeting in Bramhall. Professional service for prestige vehicles. 22 years experience. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/locations/bramhall" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Mobile Car Valeting in Bramhall
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Experience premium mobile car valeting in Bramhall with <strong>SRV Detailing</strong>. Serving this affluent Stockport suburb for over 22 years, we bring professional valeting and detailing services directly to your driveway. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to book your mobile service today.
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
                            Bramhall's prestigious residential areas, characterised by large detached properties and high-value vehicles, demand professional car care that matches the area's standards. Our mobile service brings expert valeting directly to your Bramhall driveway, whether you're in Bramhall Village, Woodford, or the surrounding leafy streets.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Mobile Valeting Across Bramhall</h2>
                        <p className="leading-relaxed mb-6">
                            Bramhall residents appreciate quality and attention to detail, which is exactly what we deliver. Our fully-equipped mobile unit brings everything needed for professional valeting – commercial-grade water supply, power generation, premium eco-friendly products, and professional equipment. We understand that Bramhall's prestige vehicles, from Mercedes and BMW to Range Rover and Audi, require specialist care and meticulous attention.
                        </p>
                        <p className="leading-relaxed mb-6">
                            We serve all Bramhall areas including Bramhall Village, Bramhall Park, Woodford, Carr Wood, and the surrounding residential streets. Many Bramhall residents schedule regular monthly or quarterly valets to maintain their vehicles in pristine condition, often combining full valets with seasonal paint correction or ceramic coating protection.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Areas of Bramhall We Serve</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Bramhall Village & Central</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Bramhall Village centre</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Bramhall Park area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Woodford Road</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Surrounding Areas</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Woodford</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Carr Wood</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Pownall Park</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Services Available in Bramhall</h2>
                        <div className="space-y-4 mb-8">
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Full Valet Service (£75-150+)</h3>
                                <p>Comprehensive interior and exterior transformation, perfect for maintaining Bramhall's prestige vehicles in showroom condition.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Paint Correction (£200-800+)</h3>
                                <p>Remove swirl marks and imperfections from premium paintwork. Popular with luxury vehicle owners seeking perfection.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Ceramic Coating (£300-1200+)</h3>
                                <p>Long-term protection for high-value vehicles. Particularly popular for new vehicle protection and preserving resale value.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Interior Valeting (£45-70+)</h3>
                                <p>Deep leather cleaning and conditioning, perfect for Bramhall's luxury vehicle interiors.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Bramhall Residential Driveway Service</h2>
                        <p className="leading-relaxed mb-6">
                            Bramhall's characteristic large driveways and detached properties make mobile valeting particularly convenient. We work quietly and professionally, respecting your residential environment while delivering exceptional results. Many Bramhall families schedule regular valets during school hours or weekends, enjoying the convenience of returning home to a pristine vehicle.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Our service is particularly popular among Bramhall's professional residents who value their time and appreciate quality. Rather than spending Saturday morning at a car wash, you can relax at home whilst we transform your vehicle on your driveway.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Bramhall Residents Choose SRV Detailing</h2>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Premium Standards:</strong> Quality matching Bramhall's expectations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Prestige Vehicle Experience:</strong> Expertise with luxury brands</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Local Knowledge:</strong> 22+ years serving Stockport areas</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Professional Products:</strong> Premium eco-friendly solutions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Driveway Convenience:</strong> Service at your home</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Discretion & Respect:</strong> Professional, courteous service</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Nearby Areas from Bramhall</h2>
                        <p className="leading-relaxed mb-4">
                            From Bramhall, we also serve:
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/cheadle" className="text-primary hover:underline font-medium">Cheadle</Link> (5 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Cheadle Hulme</strong> (5 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Hazel Grove</strong> (10 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Stockport</strong> (10 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/altrincham" className="text-primary hover:underline font-medium">Altrincham</Link> (15 minutes)
                            </li>
                        </ul>
                    </div>
                </main>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Book Premium Mobile Car Valeting in Bramhall
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Contact <strong>SRV Detailing</strong> for professional mobile valeting service in Bramhall and surrounding areas. Call <strong>+44 7375 759686</strong> or visit <strong>www.srvdetailing.co.uk</strong> for exceptional service at your driveway.
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
                        <p className="mb-4">Professional Mobile Car Valeting in Bramhall</p>
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
                        <p className="mt-4 text-sm">Serving Bramhall, Stockport, Manchester & Greater Manchester</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Bramhall;
