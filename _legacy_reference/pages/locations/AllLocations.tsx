import React from 'react';
import { Navbar } from "@/components/Navbar";

export default function AllLocations() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Mobile Car Valeting Across Greater Manchester</h1>
                    <p className="text-xl text-muted-foreground mb-8">Professional mobile car valeting services across all major locations in Greater Manchester and Stockport. We come to your home or workplace with our fully equipped mobile unit.</p>
                    <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg">Call 07375 759686</a>
                </div>
            </section>
            <main className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <LocationCard name="Bolton" description="Professional mobile car valeting in Bolton. We come to your home or workplace." />
                    <LocationCard name="Oldham" description="Professional mobile car valeting in Oldham. Expert vehicle care at your location." />
                    <LocationCard name="Rochdale" description="Professional mobile car valeting in Rochdale. Serving all surrounding areas." />
                    <LocationCard name="Bury" description="Professional mobile car valeting in Bury. Quality results at your convenience." />
                    <LocationCard name="Tameside" description="Professional mobile car valeting in Tameside. 22 years of experience." />
                    <LocationCard name="Trafford" description="Professional mobile car valeting in Trafford. Serving Sale, Altrincham, and more." />
                    <LocationCard name="Wigan" description="Professional mobile car valeting in Wigan. We bring the showroom to you." />
                    <LocationCard name="Bramhall" description="Professional mobile car valeting in Bramhall. Local Stockport specialists." />
                    <LocationCard name="Cheadle" description="Professional mobile car valeting in Cheadle. Expert care for your vehicle." />
                    <LocationCard name="Altrincham" description="Professional mobile car valeting in Altrincham. Premium care for prestige vehicles." />
                    <LocationCard name="Sale" description="Professional mobile car valeting in Sale. Convenient on-site service." />
                    <LocationCard name="Didsbury" description="Professional mobile car valeting in Didsbury. Serving South Manchester." />
                    <LocationCard name="Chorlton" description="Professional mobile car valeting in Chorlton. Local and reliable." />
                </div>
            </main>
            <footer className="bg-slate-900 text-slate-300 py-12 text-center">
                <p className="font-bold text-white">SRV Detailing - Greater Manchester</p>
            </footer>
        </div>
    );
}

const LocationCard = ({ name, description }: { name: string, description: string }) => {
    const slug = name.toLowerCase().replace(/ /g, '-');
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <a href={`/locations/${slug}`} className="text-primary font-medium hover:underline">Learn More</a>
        </div>
    );
};