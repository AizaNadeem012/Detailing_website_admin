import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Salford = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SRV Detailing - Salford",
        "telephone": "+447375759686",
        "url": "https://www.srvdetailing.co.uk/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Salford",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.4830",
            "longitude": "-2.2931"
        }
    };

    return (
        <>
            <Helmet>
                <title>Mobile Car Valeting in Salford | Salford Quays & MediaCityUK | SRV Detailing</title>
                <meta name="description" content="Professional mobile car valeting in Salford, Salford Quays, MediaCityUK. We come to you. 22 years experience. Call SRV Detailing 07375 759686" />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/locations/salford" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />
                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Mobile Car Valeting in Salford</h1>
                        <p className="text-xl text-muted-foreground mb-8">Professional mobile car valeting across Salford, Salford Quays, and MediaCityUK. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> to book your Salford mobile service today.</p>
                    </div>
                </section>
                <main className="max-w-4xl mx-auto px-4 py-16 text-muted-foreground prose prose-lg">
                    <p>Salford's diverse landscape requires flexible, professional car care. From the modern waterfront at Salford Quays to residential areas in Eccles and Swinton, we bring expert valeting directly to your location.</p>
                    <h2 className="text-slate-900">Areas We Serve in Salford</h2>
                    <ul>
                        <li>Salford Quays & MediaCityUK</li>
                        <li>Eccles & Worsley</li>
                        <li>Swinton & Walkden</li>
                        <li>Monton & Pendlebury</li>
                    </ul>
                </main>
                <footer className="bg-slate-900 text-slate-300 py-12 text-center mt-16">
                    <p className="mb-2 font-bold text-white">SRV Detailing</p>
                    <p>Salford's Trusted Mobile Valeting Partner</p>
                </footer>
            </div>
        </>
    );
};

export default Salford;
