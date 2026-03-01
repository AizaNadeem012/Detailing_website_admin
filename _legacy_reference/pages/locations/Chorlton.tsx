import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Chorlton = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SRV Detailing - Chorlton",
        "telephone": "+447375759686",
        "url": "https://www.srvdetailing.co.uk/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chorlton",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.4419",
            "longitude": "-2.2719"
        }
    };

    return (
        <>
            <Helmet>
                <title>Mobile Car Valeting in Chorlton | Chorlton-cum-Hardy | SRV Detailing</title>
                <meta name="description" content="Professional mobile car valeting in Chorlton, Chorlton-cum-Hardy. We come to your driveway. Eco-friendly service. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/locations/chorlton" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Mobile Car Valeting in Chorlton
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Professional mobile car valeting in Chorlton-cum-Hardy with <strong>SRV Detailing</strong>. Serving this vibrant Manchester suburb for over 22 years, we bring eco-friendly valeting and detailing services directly to your driveway. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to book your mobile service today.
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
                            Chorlton is known for its independent spirit, thriving local businesses, and environmentally conscious community. Our mobile valeting service brings professional car care directly to your Chorlton location, whether that's your home on a tree-lined residential street, near Chorlton Water Park, or in the bustling village centre around Beech Road.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Mobile Valeting Across Chorlton</h2>
                        <p className="leading-relaxed mb-6">
                            Chorlton's community values quality, sustainability, and supporting local businesses – principles that align perfectly with our approach. We use eco-friendly products, operate efficiently with water-conscious techniques, and have been serving the Manchester community for over two decades.
                        </p>
                        <p className="leading-relaxed mb-6">
                            We serve all Chorlton areas including Chorlton Village, Chorlton Green, the Beech Road area, roads around Chorlton Park and Chorlton Water Park, and the neighbouring areas of Chorlton-cum-Hardy. Our fully-equipped mobile unit brings everything needed for professional results directly to your driveway.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Areas of Chorlton We Serve</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Chorlton Village</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Beech Road area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Wilbraham Road</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Barlow Moor Road</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Manchester Road</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Chorlton Green & Park</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Chorlton Green</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Chorlton Park area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Chorlton Water Park</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Hardy Lane</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Residential Streets</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Victorian terraced streets</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Semi-detached areas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Edwardian properties</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Surrounding Areas</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Firswood</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Whalley Range borders</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Old Trafford borders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Services Available in Chorlton</h2>
                        <div className="space-y-4 mb-8">
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Full Valet Service (£75+)</h3>
                                <p>Comprehensive interior and exterior transformation. Popular with Chorlton's young professionals and families maintaining vehicles in excellent condition.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Interior Valeting (£45+)</h3>
                                <p>Deep interior cleaning perfect for family vehicles, cyclists transporting bikes, and active Chorlton lifestyles. Thorough vacuuming and upholstery care.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Exterior Valeting (£35+)</h3>
                                <p>Hand wash and paint protection using eco-friendly products. Perfect for maintaining vehicles between comprehensive valets.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Mini Valet (£30+)</h3>
                                <p>Quick refresh service ideal for busy Chorlton professionals. Popular for weekly or fortnightly maintenance.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Paint Correction (£200+)</h3>
                                <p>Remove swirl marks and restore paintwork brilliance. Popular for quality vehicles requiring attention to detail.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Pet Hair Removal (£20+ add-on)</h3>
                                <p>Specialist service for Chorlton's many dog owners. Complete extraction of embedded pet hair from upholstery and carpets.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Eco-Friendly Valeting in Chorlton</h2>
                        <p className="leading-relaxed mb-6">
                            Chorlton's environmentally conscious community appreciates our commitment to sustainable practices:
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Eco-Friendly Products:</strong> Biodegradable, pH-neutral cleaning solutions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Water Conservation:</strong> Efficient techniques minimising water usage</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Waste Management:</strong> Responsible disposal and recycling</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Chemical-Free Options:</strong> Available for sensitive requirements</span>
                            </li>
                        </ul>
                        <p className="leading-relaxed mb-6">
                            We understand that Chorlton residents value sustainability alongside quality, which is why our eco-friendly approach never compromises on professional results.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Chorlton Residential Driveway Service</h2>
                        <p className="leading-relaxed mb-6">
                            Chorlton's mix of Victorian terraces, Edwardian semis, and modern developments presents varied parking situations. Whether you have a driveway, street parking with a permit, or nearby residential parking, we work flexibly to bring mobile valeting to your location.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Many Chorlton residents schedule regular valets during weekends or while working from home, enjoying the convenience of professional car care whilst supporting a local service provider. It's particularly popular among young families who appreciate not having to pack children into the car for trips to car washes.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Chorlton Residents Choose SRV Detailing</h2>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Eco-Friendly Approach:</strong> Sustainable practices and products</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Local Service:</strong> Supporting Manchester businesses for 22+ years</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Driveway Convenience:</strong> Service at your Chorlton home</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Professional Quality:</strong> Superior to automated car washes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Flexible Service:</strong> Adaptable to street parking and driveways</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Family-Friendly:</strong> Understanding of busy Chorlton lifestyles</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Nearby Areas from Chorlton</h2>
                        <p className="leading-relaxed mb-4">
                            From Chorlton, we also serve:
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/didsbury" className="text-primary hover:underline font-medium">Didsbury</Link> (5 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Whalley Range</strong> (5 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Old Trafford</strong> (5 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/sale" className="text-primary hover:underline font-medium">Sale</Link> (10 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Stretford</strong> (10 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Manchester City Centre</strong> (15 minutes)</span>
                            </li>
                        </ul>
                    </div>
                </main>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Book Mobile Car Valeting in Chorlton
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Contact <strong>SRV Detailing</strong> for professional eco-friendly mobile valeting in Chorlton-cum-Hardy. Call <strong>+44 7375 759686</strong> or visit <strong>www.srvdetailing.co.uk</strong> for convenient service at your driveway.
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
                        <p className="mb-4">Professional Mobile Car Valeting in Chorlton</p>
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
                        <p className="mt-4 text-sm">Serving Chorlton, Manchester & Greater Manchester</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Chorlton;
