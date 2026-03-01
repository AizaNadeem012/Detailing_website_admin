import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Cheadle = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SRV Detailing - Cheadle",
        "telephone": "+447375759686",
        "url": "https://www.srvdetailing.co.uk/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cheadle",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.3954",
            "longitude": "-2.2132"
        }
    };

    return (
        <>
            <Helmet>
                <title>Mobile Car Valeting in Cheadle | Cheadle Hulme & Gatley | SRV Detailing</title>
                <meta name="description" content="Professional mobile car valeting in Cheadle, Cheadle Hulme, Gatley. We come to your driveway. 22 years experience. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/locations/cheadle" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Mobile Car Valeting in Cheadle
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Professional mobile car valeting across Cheadle, Cheadle Hulme, and Gatley with <strong>SRV Detailing</strong>. Serving this popular Stockport area for over 22 years, we bring expert valeting directly to your home or workplace. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to book your mobile service today.
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
                            Cheadle's charming village atmosphere combined with excellent transport links and quality residential areas makes it a popular choice for families and professionals. Our mobile valeting service brings professional car care directly to your Cheadle location, whether that's your home driveway in Cheadle Village, Cheadle Hulme's residential streets, or Gatley's family neighbourhoods.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Mobile Valeting Across Cheadle</h2>
                        <p className="leading-relaxed mb-6">
                            As a Stockport-based business serving Cheadle for over two decades, we understand the local area intimately. From Cheadle Village's traditional character to Cheadle Hulme's suburban streets and Gatley's residential roads, we've built a loyal customer base who trust us for reliable, quality mobile valeting.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Our fully-equipped mobile unit comes to your Cheadle location with everything needed for professional results – commercial water supply, power generation, premium eco-friendly products, and professional equipment. Whether you need a quick maintenance valet or comprehensive paint correction, we deliver exceptional results on your driveway.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Areas of Cheadle We Serve</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Cheadle & Cheadle Hulme</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Cheadle Village</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Cheadle Hulme centre</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Cheadle Heath</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Cheadle Royal</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Surrounding Areas</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Gatley</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Heald Green</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Adswood</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Stepping Hill area</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Services Available in Cheadle</h2>
                        <div className="space-y-4 mb-8">
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Full Valet Service (£75-150+)</h3>
                                <p>Our most popular service in Cheadle – complete interior and exterior transformation perfect for family vehicles and daily drivers.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Interior Valeting (£45-70+)</h3>
                                <p>Deep interior cleaning ideal for Cheadle families dealing with school run chaos, pet hair, and daily wear.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Exterior Valeting (£35-50+)</h3>
                                <p>Professional hand wash and protection to combat local weather and road conditions.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Mini Valet (£30-40+)</h3>
                                <p>Quick maintenance service popular with Cheadle commuters using the excellent local rail links.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Pet Hair Removal (£20+ add-on)</h3>
                                <p>Specialist service for Cheadle's many dog owners – thorough extraction of embedded pet hair.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Cheadle Residential Driveway Service</h2>
                        <p className="leading-relaxed mb-6">
                            Cheadle and Cheadle Hulme's predominantly residential character, with most homes having driveways, makes mobile valeting particularly convenient. We serve families across the area, from Victorian terraces in Cheadle Village to modern developments in Cheadle Hulme and semi-detached properties in Gatley.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Many Cheadle families schedule regular valets during school hours or weekends, enjoying professional results without leaving home. It's especially popular among busy parents who value the time saved and the convenience of mobile service.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Workplace Valeting in Cheadle</h2>
                        <p className="leading-relaxed mb-6">
                            We also provide workplace valeting across Cheadle's business areas:
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Cheadle Royal Business Park</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Stanley Green Business Park</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Cheadle High Street businesses</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Local offices and commercial premises</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Cheadle Residents Choose SRV Detailing</h2>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Local Knowledge:</strong> 22+ years serving Stockport and Cheadle</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Driveway Convenience:</strong> Service at your home</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Family-Friendly:</strong> Experienced with family vehicles</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Reliable Service:</strong> Trusted by local community</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Eco-Friendly Products:</strong> Safe for families and environment</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Flexible Scheduling:</strong> Evenings and weekends available</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Nearby Areas from Cheadle</h2>
                        <p className="leading-relaxed mb-4">
                            From Cheadle, we also serve:
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/bramhall" className="text-primary hover:underline font-medium">Bramhall</Link> (5 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Stockport</strong> (10 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/didsbury" className="text-primary hover:underline font-medium">Didsbury</Link> (15 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/sale" className="text-primary hover:underline font-medium">Sale</Link> (15 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/altrincham" className="text-primary hover:underline font-medium">Altrincham</Link> (20 minutes)
                            </li>
                        </ul>
                    </div>
                </main>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Book Mobile Car Valeting in Cheadle
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Contact <strong>SRV Detailing</strong> for professional mobile valeting in Cheadle, Cheadle Hulme, and Gatley. Call <strong>+44 7375 759686</strong> or visit <strong>www.srvdetailing.co.uk</strong> for convenient service at your driveway.
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
                        <p className="mb-4">Professional Mobile Car Valeting in Cheadle</p>
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
                        <p className="mt-4 text-sm">Serving Cheadle, Stockport, Manchester & Greater Manchester</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Cheadle;
