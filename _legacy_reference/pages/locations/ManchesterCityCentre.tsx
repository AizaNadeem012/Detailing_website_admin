import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle, Car, Sparkles } from 'lucide-react';

const ManchesterCityCentre = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SRV Detailing - Manchester City Centre",
        "telephone": "+447375759686",
        "url": "https://www.srvdetailing.co.uk/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Manchester City Centre",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.4808",
            "longitude": "-2.2426"
        },
        "areaServed": "Manchester City Centre and surrounding areas"
    };

    return (
        <>
            <Helmet>
                <title>Mobile Car Valeting in Manchester City Centre | SRV Detailing</title>
                <meta name="description" content="Professional mobile car valeting in Manchester City Centre. We come to your office, apartment, or parking location. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/locations/manchester-city-centre" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <MapPin className="w-4 h-4" />
                            Serving City Centre M1, M2, M3, M4
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Mobile Car Valeting in Manchester City Centre
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Experience convenient mobile car valeting in the heart of Manchester with <strong>SRV Detailing</strong>. Based in Stockport for over 22 years, we bring professional care to your office, apartment, or any city centre location. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> to book.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg">
                                <Phone className="w-5 h-5" />
                                07375 759686
                            </a>
                        </div>
                    </div>
                </section>

                <main className="max-w-4xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Valeting at Your Convenience</h2>
                        <div className="prose prose-lg text-muted-foreground">
                            <p>Manchester City Centre presents unique challenges – limited facilities and busy schedules. Our mobile service solves this by coming to you in Spinningfields, Deansgate, Northern Quarter, or Ancoats. We are fully self-sufficient with onboard water and power.</p>
                        </div>
                    </section>

                    <section className="mb-16 grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-4">Workplace Valeting</h3>
                            <p className="text-muted-foreground">We service vehicles at major office complexes across the city centre while you work. No disruption, just a pristine car ready for your commute home.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-4">Apartment Residents</h3>
                            <p className="text-muted-foreground">Living in a city centre apartment? We bring professional valeting to your designated parking area, providing premium care where others can't.</p>
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4 text-center">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Providing Mobile Valeting in Manchester City Centre & beyond</p>
                </footer>
            </div>
        </>
    );
};

export default ManchesterCityCentre;
