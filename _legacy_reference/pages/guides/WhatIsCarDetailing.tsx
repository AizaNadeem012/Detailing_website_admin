import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle, Car, Sparkles, Info, Shield } from 'lucide-react';

const WhatIsCarDetailing = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is Car Detailing? Professional Guide",
        "description": "Complete guide to car detailing. Learn about paint correction, ceramic coating, and professional detailing services. Expert advice from SRV Detailing.",
        "author": {
            "@type": "Organization",
            "name": "SRV Detailing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "SRV Detailing",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.srvdetailing.co.uk/logo.png"
            }
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
    };

    return (
        <>
            <Helmet>
                <title>What is Car Detailing? Professional Guide | SRV Detailing</title>
                <meta name="description" content="Complete guide to car detailing. Learn about paint correction, ceramic coating, and professional detailing services. Expert advice from SRV Detailing." />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/guides/what-is-car-detailing" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Shield className="w-4 h-4" />
                            Professional Guide
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            What is Car Detailing? Professional Guide
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Car detailing is the art and science of restoring and protecting your vehicle to the highest possible standard. <strong>SRV Detailing</strong>, based in Stockport and serving Manchester and Greater Manchester for over 22 years, provides professional detailing services that go far beyond basic cleaning. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to discover how professional detailing can transform your vehicle.
                        </p>
                    </div>
                </section>

                <main className="max-w-4xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Car Detailing Defined</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <p className="mb-4">
                                Car detailing is the meticulous process of restoring, correcting, and protecting a vehicle's appearance to perfection or beyond-new condition. Unlike <Link href="/guides/what-is-car-valeting" className="text-primary underline">valeting (which is cleaning)</Link>, detailing is restoration and enhancement. It involves paint correction to remove imperfections, ceramic coating or premium protection application, interior restoration and protection, and obsessive attention to every detail.
                            </p>
                            <p className="mb-4">
                                Professional detailing can take anywhere from 4 hours for a basic enhancement detail to 20+ hours for a full correction and protection detail on a larger or heavily damaged vehicle. The investment is significant, but the results are transformative – your vehicle will look better than showroom condition and be protected for years.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">What's Included in Car Detailing?</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Car className="w-5 h-5 text-primary" />
                                    Exterior Detailing
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Paint decontamination (clay bar, iron remover, tar remover)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Paint thickness measurement and assessment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Machine polishing and paint correction</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Swirl mark and scratch removal</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Oxidation and fade correction</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Ceramic coating or premium sealant application</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Wheel ceramic coating or sealant</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Glass treatment and protection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Trim restoration and protection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Chrome and metal polishing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Engine bay detailing and protection</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                    Interior Detailing
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Deep extraction cleaning of all fabrics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Leather deep cleaning and conditioning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Stain removal and treatment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Odour elimination if required</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Dashboard and trim restoration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Plastic and vinyl treatment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Interior protection application</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Glass polishing and treatment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Detailed cleaning of all crevices and gaps</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Detailing vs Valeting - Key Differences</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="border border-slate-200 p-4 text-left font-bold">Aspect</th>
                                        <th className="border border-slate-200 p-4 text-left font-bold">Car Valeting</th>
                                        <th className="border border-slate-200 p-4 text-left font-bold">Car Detailing</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Focus</td>
                                        <td className="border border-slate-200 p-4">Cleaning</td>
                                        <td className="border border-slate-200 p-4">Restoration and protection</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Goal</td>
                                        <td className="border border-slate-200 p-4">Remove dirt and restore cleanliness</td>
                                        <td className="border border-slate-200 p-4">Correct imperfections and protect long-term</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Time</td>
                                        <td className="border border-slate-200 p-4">1-4 hours</td>
                                        <td className="border border-slate-200 p-4">4-20+ hours</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Cost</td>
                                        <td className="border border-slate-200 p-4">£30-150</td>
                                        <td className="border border-slate-200 p-4">£200-2000+</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Results</td>
                                        <td className="border border-slate-200 p-4">Clean vehicle</td>
                                        <td className="border border-slate-200 p-4">Perfected and protected vehicle</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Duration</td>
                                        <td className="border border-slate-200 p-4">Temporary (requires regular repeating)</td>
                                        <td className="border border-slate-200 p-4">Long-lasting (protection lasts years)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-muted-foreground">
                            For a detailed comparison, see our <Link href="/guides/valeting-vs-detailing" className="text-primary underline">complete valeting vs detailing guide</Link>.
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Paint Correction Explained</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <p className="mb-4">
                                Paint correction is the core of professional detailing – the process of removing imperfections from paintwork using machine polishing:
                            </p>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                                <h3 className="text-xl font-bold mb-4 text-foreground">What It Removes:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Swirl marks from poor washing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Light to moderate scratches</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Oxidation and fading</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Water etching and acid rain damage</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Bird dropping etching</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Hologramming from poor polishing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Buffer trails and marks</span>
                                    </li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-foreground">How It Works:</h3>
                            <p className="mb-4">
                                Machine polishers (dual-action or rotary) with appropriate pads and compounds remove a microscopic layer of clear coat, levelling the surface and eliminating defects. This requires skill, experience, and proper equipment to achieve results without damaging paintwork.
                            </p>

                            <h3 className="text-xl font-bold mb-4 text-foreground">Correction Levels:</h3>
                            <div className="space-y-3">
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-foreground mb-1">Single-Stage: 50-70% defect removal</h4>
                                    <p>Quick enhancement for vehicles with minor defects</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-foreground mb-1">Two-Stage: 80-90% defect removal</h4>
                                    <p>Comprehensive correction for most vehicles</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-foreground mb-1">Multi-Stage: 95%+ defect removal</h4>
                                    <p>Show car finish requiring extensive work</p>
                                </div>
                            </div>

                            <p className="mt-6">
                                Learn more in our detailed <Link href="/guides/paint-correction-guide" className="text-primary underline">paint correction guide</Link>.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Ceramic Coating Explained</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <p className="mb-4">
                                Ceramic coating is a liquid polymer that chemically bonds with paintwork to create a permanent protective layer:
                            </p>

                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20 mb-6">
                                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                                    <Shield className="w-6 h-6 text-primary" />
                                    Benefits of Ceramic Coating
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>2-5+ years protection</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Extreme hydrophobic properties (water beads off)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Chemical resistance (bird droppings, tree sap, acid rain)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>UV protection prevents fading</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Enhanced gloss and depth</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Scratch resistance (harder surface)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Easy maintenance (washing becomes easier)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Cost-effective long-term (eliminates waxing)</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-foreground">Application Process:</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Paint correction (essential first step)</h4>
                                        <p>Must achieve perfect surface before coating application</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Deep decontamination</h4>
                                        <p>Remove all oils, wax, and contaminants</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">IPA panel wipe</h4>
                                        <p>Final surface preparation for coating bond</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Coating application (multiple layers)</h4>
                                        <p>Precise application panel by panel</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                        5
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">24-48 hour curing period</h4>
                                        <p>Vehicle must remain dry during curing</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                        6
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Final inspection</h4>
                                        <p>Quality check and customer handover</p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-6">
                                Explore our comprehensive <Link href="/guides/ceramic-coating-guide" className="text-primary underline">ceramic coating guide</Link> for more details.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Types of Detailing Services</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Enhancement Detail (£200-400, 4-6 hours)</h3>
                                <p className="text-muted-foreground">
                                    Single-stage paint enhancement, premium wax or 6-month sealant, wheel deep clean and seal, interior deep clean and protect.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Correction Detail (£400-800, 6-12 hours)</h3>
                                <p className="text-muted-foreground">
                                    Two-stage paint correction, ceramic coating (1-3 years), wheel ceramic coating, interior deep restoration, engine bay detail.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Perfection Detail (£800-1500+, 12-20+ hours)</h3>
                                <p className="text-muted-foreground">
                                    Multi-stage paint correction, premium ceramic coating (3-5+ years), wheel ceramic coating, interior ceramic coating, engine bay detail and protection, chrome polishing, show car finish.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Maintenance Detail (£100-200, 2-4 hours)</h3>
                                <p className="text-muted-foreground">
                                    For vehicles with existing ceramic coating, decontamination wash, paint inspection, top-up coating if needed, interior refresh.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Who Needs Professional Detailing?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Car enthusiasts and collectors</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Luxury and prestige vehicle owners</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Show car preparation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>New car protection (remove dealer damage, apply coating)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Pre-sale value maximisation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Restoration of neglected vehicles</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Track day car presentation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Anyone wanting perfection</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Detailing Investment and Value</h2>
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                            <div className="space-y-4 text-muted-foreground">
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="font-semibold text-foreground">Upfront Cost:</span>
                                    <span>£200-2000+ depending on service level</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="font-semibold text-foreground">Time Investment:</span>
                                    <span>4-20+ hours of professional work</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="font-semibold text-foreground">Protection Duration:</span>
                                    <span>1-5+ years depending on products used</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="font-semibold text-foreground">Value Preservation:</span>
                                    <span>Maintains vehicle appearance and resale value</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="font-semibold text-foreground">Enjoyment Factor:</span>
                                    <span>Pride in driving a perfect vehicle</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-foreground">Cost Per Year:</span>
                                    <span>Often less than regular waxing when amortised</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Choosing a Professional Detailer</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                                <h3 className="text-xl font-bold mb-4 text-foreground">Essential Qualifications:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Proven experience and portfolio</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Paint thickness gauge ownership</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Quality machine polishers (DA and rotary)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Range of pads and compounds</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Premium ceramic coating products</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Proper lighting for inspection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Insurance and professional standards</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                                <h3 className="text-xl font-bold mb-4 text-foreground">Questions to Ask:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">?</span>
                                        <span>What correction level do you recommend for my vehicle?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">?</span>
                                        <span>What ceramic coating brand do you use?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">?</span>
                                        <span>Can I see before/after examples?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">?</span>
                                        <span>Do you measure paint thickness?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">?</span>
                                        <span>What's included in the price?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">?</span>
                                        <span>How long will the protection last?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">?</span>
                                        <span>What maintenance is required?</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Detailing Maintenance</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <p className="mb-4">
                                After professional detailing with ceramic coating:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="text-xl font-bold mb-4 text-foreground">Washing:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Use pH-neutral shampoo only</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Two-bucket method</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Soft microfibre wash mitt</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Avoid automatic car washes</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Dry with microfibre towels</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="text-xl font-bold mb-4 text-foreground">Frequency:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Wash every 1-2 weeks</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Annual inspection recommended</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Top-up coating every 1-2 years</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>Avoid abrasive products</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-foreground">Benefits of Maintenance:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Coating lasts full duration</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Hydrophobic properties maintained</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Protection remains effective</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Vehicle stays looking perfect</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Related Services & Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/paint-correction" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Sparkles className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">Paint Correction</h3>
                                <p className="text-sm text-muted-foreground">Remove swirls and scratches professionally</p>
                            </Link>

                            <Link href="/services/ceramic-coating" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Shield className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">Ceramic Coating</h3>
                                <p className="text-sm text-muted-foreground">Long-term paint protection</p>
                            </Link>

                            <Link href="/guides/valeting-vs-detailing" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Info className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">Valeting vs Detailing</h3>
                                <p className="text-sm text-muted-foreground">Understand the key differences</p>
                            </Link>
                        </div>
                    </section>

                    <section className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready for Professional Car Detailing?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Experience professional car detailing with <strong>SRV Detailing</strong>. Serving Manchester and Greater Manchester for over 22 years, we provide expert paint correction and ceramic coating services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-slate-100 transition-colors">
                                <Phone className="w-5 h-5" />
                                Call 07375 759686
                            </a>
                            <a href="https://www.srvdetailing.co.uk" className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors">
                                Visit Website
                            </a>
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-slate-300 py-12 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="mb-2 font-bold text-white">SRV Detailing</p>
                        <p className="mb-4">Professional Car Detailing in Manchester & Greater Manchester</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                            <a href="tel:+447375759686" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone className="w-4 h-4" />
                                07375 759686
                            </a>
                            <span className="hidden sm:inline">•</span>
                            <span>Over 22 Years Experience</span>
                            <span className="hidden sm:inline">•</span>
                            <a href="https://www.srvdetailing.co.uk" className="hover:text-white transition-colors">
                                www.srvdetailing.co.uk
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default WhatIsCarDetailing;
