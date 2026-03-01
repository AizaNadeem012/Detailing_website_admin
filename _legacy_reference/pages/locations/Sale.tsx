import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Sale = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SRV Detailing - Sale",
        "telephone": "+447375759686",
        "url": "https://www.srvdetailing.co.uk/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sale",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.4239",
            "longitude": "-2.3220"
        }
    };

    return (
        <>
            <Helmet>
                <title>Mobile Car Valeting in Sale | Sale Moor & Ashton-upon-Mersey | SRV Detailing</title>
                <meta name="description" content="Professional mobile car valeting in Sale, Sale Moor, Ashton-upon-Mersey. We come to your driveway. 22 years experience. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/locations/sale" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Mobile Car Valeting in Sale
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Professional mobile car valeting across Sale, Sale Moor, and Ashton-upon-Mersey with <strong>SRV Detailing</strong>. Serving this vibrant Trafford suburb for over 22 years, we bring expert valeting and detailing services directly to your driveway. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to book your mobile service today.
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
                            Sale's excellent location, strong community feel, and quality housing stock make it a popular choice for families and professionals alike. Our mobile valeting service brings professional car care directly to your Sale location, whether that's your home driveway in Sale Moor, Ashton-upon-Mersey's leafy streets, or Brooklands' residential areas.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Mobile Valeting Across Sale</h2>
                        <p className="leading-relaxed mb-6">
                            Sale's mix of Victorian and Edwardian properties, modern developments, and family homes with driveways makes it ideal for mobile valeting. We serve all Sale areas, from the town centre to Sale Moor, Ashton-upon-Mersey to Brooklands, bringing professional results directly to your door.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Our fully-equipped mobile unit brings everything needed for exceptional results – commercial water supply, power generation, premium eco-friendly products, and professional equipment. Whether you're a busy commuter using Sale's excellent Metrolink connections or a family needing regular vehicle maintenance, we provide convenient, professional service at your driveway.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Areas of Sale We Serve</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Sale Central</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Sale town centre</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Sale Moor</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Cross Street area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Washway Road</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Ashton & Brooklands</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Ashton-upon-Mersey</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Brooklands</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Woodheys Park area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Dane Road</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Services Available in Sale</h2>
                        <div className="space-y-4 mb-8">
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Full Valet Service (£75+)</h3>
                                <p>Comprehensive interior and exterior transformation, perfect for Sale's family vehicles and daily commuters. Our most popular service for busy households.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Interior Valeting (£45+)</h3>
                                <p>Deep interior cleaning ideal for families dealing with school runs, sports activities, and daily use. Thorough vacuuming, upholstery cleaning, and interior protection.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Exterior Valeting (£35+)</h3>
                                <p>Professional hand wash and protection to combat Sale's weather conditions and road grime from daily commuting.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Mini Valet (£30+)</h3>
                                <p>Quick refresh service perfect for Sale's Metrolink commuters and busy professionals needing a tidy vehicle between full valets.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Paint Correction (£200+)</h3>
                                <p>Remove swirl marks and restore paintwork shine. Popular for maintaining vehicle value in Sale's competitive property market.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Ceramic Coating (£300+)</h3>
                                <p>Long-term protection against Manchester weather and daily commute wear. Keeps vehicles looking newer for longer.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Sale Residential Driveway Service</h2>
                        <p className="leading-relaxed mb-6">
                            Sale's characteristic Victorian and Edwardian properties with driveways make mobile valeting incredibly convenient. We work across all Sale's residential streets, from period properties in Ashton-upon-Mersey to modern developments in Sale Moor and Brooklands.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Many Sale families schedule regular valets during school hours or weekends, enjoying the convenience of professional service at home. It's particularly popular among busy parents who appreciate not having to drive to car washes, wait around, and disrupt their Saturday plans.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Workplace and Commuter Service</h2>
                        <p className="leading-relaxed mb-6">
                            Sale's excellent transport links – with two Metrolink stations and close proximity to Manchester – mean many residents commute for work. We serve:
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Sale town centre businesses and offices</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Local retail parks and shopping areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Business parks in Sale and nearby Altrincham</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Professional services and office locations</span>
                            </li>
                        </ul>
                        <p className="leading-relaxed mb-6">
                            Many Sale professionals have their vehicle valeted at home before work or during the day, returning to a pristine car ready for the evening commute.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Sale Residents Choose SRV Detailing</h2>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Local Knowledge:</strong> 22+ years serving Trafford and Greater Manchester</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Driveway Convenience:</strong> Service at your Sale home</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Family-Friendly:</strong> Experienced with family vehicles and busy schedules</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Time-Saving:</strong> Perfect for commuters and busy parents</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Professional Results:</strong> Superior to automated car washes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Eco-Friendly:</strong> Environmentally responsible products and practices</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Nearby Areas from Sale</h2>
                        <p className="leading-relaxed mb-4">
                            From Sale, we also serve:
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/altrincham" className="text-primary hover:underline font-medium">Altrincham</Link> (5 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Urmston</strong> (10 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/chorlton" className="text-primary hover:underline font-medium">Chorlton</Link> (10 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/didsbury" className="text-primary hover:underline font-medium">Didsbury</Link> (15 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Stretford</strong> (10 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Manchester City Centre</strong> (20 minutes)</span>
                            </li>
                        </ul>
                    </div>
                </main>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Book Mobile Car Valeting in Sale
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Contact <strong>SRV Detailing</strong> for professional mobile valeting in Sale, Sale Moor, and Ashton-upon-Mersey. Call <strong>+44 7375 759686</strong> or visit <strong>www.srvdetailing.co.uk</strong> for convenient service at your driveway.
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
                        <p className="mb-4">Professional Mobile Car Valeting in Sale</p>
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
                        <p className="mt-4 text-sm">Serving Sale, Trafford, Manchester & Greater Manchester</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Sale;
