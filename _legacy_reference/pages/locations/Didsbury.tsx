import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Didsbury = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SRV Detailing - Didsbury",
        "telephone": "+447375759686",
        "url": "https://www.srvdetailing.co.uk/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Didsbury",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.4167",
            "longitude": "-2.2333"
        }
    };

    return (
        <>
            <Helmet>
                <title>Mobile Car Valeting in Didsbury | East & West Didsbury | SRV Detailing</title>
                <meta name="description" content="Professional mobile car valeting in Didsbury, East Didsbury, West Didsbury. Premium service for affluent area. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/locations/didsbury" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Mobile Car Valeting in Didsbury
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Premium mobile car valeting across Didsbury, East Didsbury, and West Didsbury with <strong>SRV Detailing</strong>. Serving this sought-after Manchester suburb for over 22 years, we bring professional valeting and detailing services directly to your driveway. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to book your mobile service today.
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
                            Didsbury is renowned as one of Manchester's most desirable suburbs, characterised by tree-lined streets, Victorian and Edwardian properties, and a vibrant community of professionals and families. Our mobile valeting service brings premium car care directly to your Didsbury driveway, whether you're in the bustling village atmosphere of West Didsbury or the leafy residential streets of East Didsbury.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Mobile Valeting Across Didsbury</h2>
                        <p className="leading-relaxed mb-6">
                            Didsbury's affluent character and high concentration of quality vehicles demand professional car care that matches the area's standards. Our mobile service brings expert valeting directly to your location, eliminating the inconvenience of driving to car washes and the inferior results of automated systems.
                        </p>
                        <p className="leading-relaxed mb-6">
                            We serve all Didsbury areas including Didsbury Village, East Didsbury, West Didsbury, Northenden, and the surrounding residential streets. Our fully-equipped mobile unit brings everything needed for exceptional results – commercial water supply, power generation, premium eco-friendly products, and professional detailing equipment.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Areas of Didsbury We Serve</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">West Didsbury</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Didsbury Village</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Burton Road area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Lapwing Lane</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Barlow Moor Road</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">East Didsbury</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>East Didsbury centre</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Fog Lane</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Wilmslow Road</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Parrs Wood area</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Fletcher Moss & Northenden</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Fletcher Moss area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Northenden village</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Palatine Road</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-3">Withington Border</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Old Moat</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Withington borders</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Marie Louise Gardens</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Services Available in Didsbury</h2>
                        <div className="space-y-4 mb-8">
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Full Valet Service (£75-150+)</h3>
                                <p>Comprehensive interior and exterior transformation, perfect for Didsbury's mix of family vehicles and executive cars. Popular for maintaining showroom condition.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Paint Correction (£200-800+)</h3>
                                <p>Remove swirl marks and restore paintwork to perfection. Popular with Didsbury's many premium vehicle owners seeking flawless finishes.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Ceramic Coating (£300-1200+)</h3>
                                <p>Long-term protection for quality vehicles. Particularly popular for new car protection and maintaining value in Didsbury's competitive market.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Interior Valeting (£45-70+)</h3>
                                <p>Deep interior cleaning including leather conditioning, carpet shampooing, and upholstery treatment. Ideal for family vehicles and daily drivers.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-lg">
                                <h3 className="font-bold text-foreground mb-2">Exterior Valeting (£35-50+)</h3>
                                <p>Professional hand wash, wheel cleaning, and paint protection. Perfect for maintaining Didsbury vehicles between comprehensive valets.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Didsbury Residential Driveway Service</h2>
                        <p className="leading-relaxed mb-6">
                            Didsbury's characteristic Victorian and Edwardian properties, many with private driveways, make mobile valeting particularly convenient. We work across Didsbury's tree-lined residential streets, respecting the neighbourhood whilst delivering exceptional results.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Many Didsbury residents are busy professionals, young families, or empty nesters who value quality and convenience. Our mobile service means you can enjoy Saturday morning at Didsbury's cafes and shops rather than queuing at car washes, returning home to a pristine vehicle on your driveway.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Professional and Executive Vehicles</h2>
                        <p className="leading-relaxed mb-6">
                            Didsbury's professional community includes many executives, business owners, and senior professionals driving premium vehicles that require expert care:
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Executive saloons (Mercedes E-Class, BMW 5 Series, Audi A6)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Luxury SUVs (Range Rover, Porsche Cayenne, BMW X5)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Sports cars and performance vehicles</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Premium family vehicles (Volvo XC90, Audi Q7)</span>
                            </li>
                        </ul>
                        <p className="leading-relaxed mb-6">
                            We have extensive experience with these premium brands, understanding the specific care requirements and using appropriate products for different paint finishes, wheel types, and interior materials.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Didsbury Residents Choose SRV Detailing</h2>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Premium Standards:</strong> Quality matching Didsbury's expectations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Professional Expertise:</strong> 22+ years serving Manchester's quality suburbs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Driveway Convenience:</strong> Service at your Didsbury home</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Time-Saving:</strong> Perfect for busy professionals and families</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Premium Products:</strong> Eco-friendly professional-grade solutions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span><strong>Discretion & Respect:</strong> Professional service in residential areas</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Nearby Areas from Didsbury</h2>
                        <p className="leading-relaxed mb-4">
                            From Didsbury, we also serve:
                        </p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/chorlton" className="text-primary hover:underline font-medium">Chorlton</Link> (5 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Withington</strong> (5 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span><strong>Burnage</strong> (10 minutes)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/cheadle" className="text-primary hover:underline font-medium">Cheadle</Link> (15 minutes)
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <Link href="/locations/sale" className="text-primary hover:underline font-medium">Sale</Link> (15 minutes)
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
                            Book Premium Mobile Car Valeting in Didsbury
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Contact <strong>SRV Detailing</strong> for professional mobile valeting in Didsbury, East Didsbury, and West Didsbury. Call <strong>+44 7375 759686</strong> or visit <strong>www.srvdetailing.co.uk</strong> for exceptional service at your driveway.
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
                        <p className="mb-4">Professional Mobile Car Valeting in Didsbury</p>
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
                        <p className="mt-4 text-sm">Serving Didsbury, Manchester & Greater Manchester</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Didsbury;
