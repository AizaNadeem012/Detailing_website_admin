import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';

const LocationPage = ({ name }: { name: string }) => (
    <div className="min-h-screen bg-white text-slate-700">
        <Helmet>
            <title>{name ? `Mobile Car Valeting in ${name} | SRV Detailing` : 'Mobile Car Valeting | SRV Detailing'}</title>
            <meta name="description" content={name ? `Professional mobile car valeting in ${name}. We come to you. 22 years experience. Call SRV Detailing 07375 759686` : 'Professional mobile car valeting. We come to you. 22 years experience. Call SRV Detailing 07375 759686'} />
        </Helmet>
        <Navbar />
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">{name ? `Mobile Car Valeting in ${name}` : 'Mobile Car Valeting'}</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{name ? `Professional mobile car valeting in ${name}.` : 'Professional mobile car valeting.'} Based in Stockport for over 22 years, we bring professional care to your home or workplace. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> to book.</p>
            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg">Call 07375 759686</a>
        </section>
        <main className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
            <p>SRV Detailing provides professional mobile car valeting across {name || 'your area'} and surrounding areas. Our fully equipped mobile unit travels directly to your preferred location.</p>
            <h2 className="text-slate-900 font-bold">Why Choose Us?</h2>
            <ul>
                <li>22+ Years Professional Experience</li>
                <li>Fully Equipped Mobile Van (Water & Power Onboard)</li>
                <li>Eco-Friendly, Premium Products</li>
                <li>Reliable, 5-Star Rated Service</li>
            </ul>
        </main>
        <footer className="bg-slate-900 text-slate-300 py-12 text-center mt-16 font-bold">SRV Detailing - {name}</footer>
    </div>
);

export default LocationPage;
