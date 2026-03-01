import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle, Car, Sparkles, Info } from 'lucide-react';

const WhatIsCarValeting = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is Car Valeting? Complete Guide",
        "description": "Complete guide to car valeting. Learn what's involved, benefits, costs, and when to valet your car. Expert advice from SRV Detailing Manchester.",
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
                <title>What is Car Valeting? Complete Guide | SRV Detailing</title>
                <meta name="description" content="Complete guide to car valeting. Learn what's involved, benefits, costs, and when to valet your car. Expert advice from SRV Detailing Manchester." />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/guides/what-is-car-valeting" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Info className="w-4 h-4" />
                            Complete Guide
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            What is Car Valeting? Complete Guide
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Car valeting is professional vehicle cleaning that goes far beyond a basic car wash. <strong>SRV Detailing</strong>, based in Stockport and serving Manchester and Greater Manchester for over 22 years, provides expert valeting services that restore your vehicle's appearance inside and out. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to learn how professional valeting can transform your vehicle.
                        </p>
                    </div>
                </section>

                <main className="max-w-4xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Car Valeting Defined</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <p className="mb-4">
                                Car valeting is the thorough cleaning, restoration, and protection of a vehicle's interior and exterior surfaces. Unlike a quick car wash that focuses solely on removing surface dirt from paintwork, valeting is a comprehensive process that addresses every aspect of your vehicle's appearance – from deep carpet cleaning to paintwork protection, dashboard restoration to wheel detailing.
                            </p>
                            <p className="mb-4">
                                The term "valet" comes from the personal service tradition, reflecting the individual attention and care given to each vehicle. Professional valeters treat your car as if it were their own, using appropriate techniques, quality products, and sufficient time to achieve exceptional results that automated car washes simply cannot match.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">What's Included in Car Valeting?</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                    Interior Valeting Includes
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Thorough vacuuming of all carpets, seats, and boot</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Steam cleaning of upholstery and fabric surfaces</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Leather cleaning and conditioning treatment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Dashboard, console, and trim cleaning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Door cards and storage compartment detailing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Air vent cleaning and deodorising</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Glass cleaning inside for crystal clarity</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Stain treatment and odour elimination</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Pet hair removal if required</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Car className="w-5 h-5 text-primary" />
                                    Exterior Valeting Includes
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Pre-wash to loosen dirt and contaminants</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Hand washing using two-bucket method</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Wheel and tyre deep cleaning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Clay bar decontamination treatment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Hand polishing to enhance gloss</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Wax or sealant protection application</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Glass and mirror polishing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Trim and plastic restoration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Door shuts and detail areas cleaned</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Types of Car Valeting Services</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Mini Valet (£30-40, 45-60 minutes)</h3>
                                <p className="text-muted-foreground">
                                    Quick maintenance service including basic interior vacuum, exterior hand wash, and window cleaning. Perfect for regular upkeep between comprehensive valets.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Interior Valet (£45-70, 1.5-2 hours)</h3>
                                <p className="text-muted-foreground">
                                    Focused deep cleaning of vehicle interior only. Ideal when exterior is acceptable but interior needs thorough attention.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Exterior Valet (£35-50, 1-1.5 hours)</h3>
                                <p className="text-muted-foreground">
                                    Comprehensive exterior cleaning and protection. Perfect when interior is clean but paintwork needs professional care.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Full Valet (£75-150, 2.5-3.5 hours)</h3>
                                <p className="text-muted-foreground">
                                    Complete interior and exterior transformation. Most popular service combining all aspects of professional valeting.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h3 className="text-xl font-bold mb-2">Specialist Valets (£100-300+)</h3>
                                <p className="text-muted-foreground">
                                    Targeted services like <Link href="/services/pet-hair-removal" className="text-primary underline">pet hair removal</Link>, smoke odour elimination, or pre-sale preparation requiring extra time and specialist techniques.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Car Valeting vs Car Washing</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="border border-slate-200 p-4 text-left font-bold">Feature</th>
                                        <th className="border border-slate-200 p-4 text-left font-bold">Basic Car Wash</th>
                                        <th className="border border-slate-200 p-4 text-left font-bold">Professional Car Valet</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Coverage</td>
                                        <td className="border border-slate-200 p-4">Exterior only, usually automated</td>
                                        <td className="border border-slate-200 p-4">Interior and exterior comprehensive</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Duration</td>
                                        <td className="border border-slate-200 p-4">5-10 minutes</td>
                                        <td className="border border-slate-200 p-4">1-4 hours depending on service</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Cost</td>
                                        <td className="border border-slate-200 p-4">£5-15</td>
                                        <td className="border border-slate-200 p-4">£30-150+ depending on package</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Cleaning Level</td>
                                        <td className="border border-slate-200 p-4">Surface dirt removal only</td>
                                        <td className="border border-slate-200 p-4">Deep cleaning and restoration</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Interior</td>
                                        <td className="border border-slate-200 p-4">No interior cleaning</td>
                                        <td className="border border-slate-200 p-4">Complete interior attention</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Protection</td>
                                        <td className="border border-slate-200 p-4">No protection applied</td>
                                        <td className="border border-slate-200 p-4">Protection products applied</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Method</td>
                                        <td className="border border-slate-200 p-4">Risk of scratches from brushes</td>
                                        <td className="border border-slate-200 p-4">Hand washing prevents damage</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Results</td>
                                        <td className="border border-slate-200 p-4">Inconsistent results</td>
                                        <td className="border border-slate-200 p-4">Consistent, quality results</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Benefits of Professional Car Valeting</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Improved Appearance</h3>
                                    <p className="text-muted-foreground">Restore showroom-quality finish inside and out</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Protected Investment</h3>
                                    <p className="text-muted-foreground">Regular valeting preserves vehicle value</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Enhanced Comfort</h3>
                                    <p className="text-muted-foreground">Clean, fresh interior improves driving experience</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Health Benefits</h3>
                                    <p className="text-muted-foreground">Remove allergens, bacteria, and odours</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Pride of Ownership</h3>
                                    <p className="text-muted-foreground">Enjoy driving a pristine vehicle</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Better Resale Value</h3>
                                    <p className="text-muted-foreground">Well-maintained cars command higher prices</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Preventative Maintenance</h3>
                                    <p className="text-muted-foreground">Identify issues early during cleaning</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Time-Saving</h3>
                                    <p className="text-muted-foreground">Professional results without your effort</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">How Often Should You Valet Your Car?</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <div className="space-y-4 mb-6">
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-foreground mb-2">Every 1-2 Weeks: Mini valet for maintenance</h3>
                                    <p>Ideal for those who want their vehicle always looking its best</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-foreground mb-2">Every 1-3 Months: Full valet for most drivers</h3>
                                    <p>The sweet spot for regular drivers who care about their vehicle</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-foreground mb-2">Every 3-6 Months: Minimum for occasional drivers</h3>
                                    <p>Even low-mileage vehicles accumulate dust and need attention</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-foreground mb-2">Seasonally: After winter salt, spring pollen, summer trips, autumn leaves</h3>
                                    <p>Environmental factors require seasonal deep cleaning</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-foreground mb-2">As Needed: After pet transport, family trips, spills, or before special events</h3>
                                    <p>Life happens – professional cleaning restores your vehicle</p>
                                </div>
                            </div>

                            <p className="mb-4">
                                Frequency depends on several factors:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>How often you drive</li>
                                <li>Where you park (garage vs street)</li>
                                <li>Whether you have children or pets</li>
                                <li>Your standards for vehicle appearance</li>
                                <li>Local environmental conditions</li>
                            </ul>
                            <p className="mt-4">
                                For more detailed guidance, see our <Link href="/guides/how-often-valet-car" className="text-primary underline">complete guide to valeting frequency</Link>.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">DIY Valeting vs Professional Service</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border border-slate-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4">DIY Valeting</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span>Lower immediate cost</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span>Requires equipment purchase</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span>Time-consuming (4-6+ hours)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span>Learning curve for techniques</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span>Risk of damage from incorrect methods</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span>Limited access to professional products</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span>Physical effort required</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span>Results vary with skill level</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border border-primary rounded-xl p-6 bg-primary/5">
                                <h3 className="text-xl font-bold mb-4">Professional Valeting</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Higher service cost but time-efficient</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>No equipment needed</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Completed in 1-4 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Expert techniques and experience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Professional-grade equipment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Premium products and solutions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Minimal effort from you</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Consistent, quality results</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">What to Expect During Professional Valeting</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Booking</h3>
                                    <p className="text-muted-foreground">
                                        Contact valet service, describe vehicle and requirements, agree on service and price, schedule appointment
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Preparation</h3>
                                    <p className="text-muted-foreground">
                                        Remove personal items, note any specific concerns or stains, ensure access to vehicle location
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Service</h3>
                                    <p className="text-muted-foreground">
                                        Valet arrives with equipment, performs agreed services, typically takes 1-4 hours, you can watch or leave vehicle
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Completion</h3>
                                    <p className="text-muted-foreground">
                                        Inspect results with valet, receive aftercare advice, make payment, enjoy your clean vehicle
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    5
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Aftercare</h3>
                                    <p className="text-muted-foreground">
                                        Follow maintenance tips, schedule next valet, contact if any concerns
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Choosing a Professional Valet Service</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-green-900">Look For:</h3>
                                <ul className="space-y-2 text-green-800">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Established reputation and reviews</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Experienced, trained staff</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Quality products and equipment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Clear pricing and service descriptions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Insurance and professional standards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Mobile service convenience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Eco-friendly practices</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Responsive customer service</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-red-900">Red Flags:</h3>
                                <ul className="space-y-2 text-red-800">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold text-xl mt-0.5">✕</span>
                                        <span>Suspiciously low prices</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold text-xl mt-0.5">✕</span>
                                        <span>No reviews or references</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold text-xl mt-0.5">✕</span>
                                        <span>Vague service descriptions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold text-xl mt-0.5">✕</span>
                                        <span>Pressure to book immediately</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold text-xl mt-0.5">✕</span>
                                        <span>No insurance or credentials</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold text-xl mt-0.5">✕</span>
                                        <span>Poor communication</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold text-xl mt-0.5">✕</span>
                                        <span>Unwillingness to answer questions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-6 text-muted-foreground">
                            For detailed guidance on selecting the right service, read our <Link href="/guides/choosing-car-valeting-service" className="text-primary underline">complete guide to choosing a car valeting service</Link>.
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Car Valeting Costs Explained</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <p className="mb-4">
                                Valeting costs vary based on several factors:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li><strong>Vehicle Size:</strong> Larger vehicles require more time and products</li>
                                <li><strong>Condition:</strong> Heavily soiled vehicles need extra work</li>
                                <li><strong>Service Type:</strong> Mini valet vs full valet vs specialist services</li>
                                <li><strong>Location:</strong> City centre vs suburban pricing</li>
                                <li><strong>Additional Services:</strong> Pet hair removal, odour treatment, etc.</li>
                            </ul>

                            <h3 className="text-xl font-bold mb-4 text-foreground">Typical Manchester Pricing:</h3>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center">
                                        <span className="font-semibold">Mini Valet:</span>
                                        <span className="text-primary font-bold">£30-40</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-semibold">Interior Valet:</span>
                                        <span className="text-primary font-bold">£45-70</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-semibold">Exterior Valet:</span>
                                        <span className="text-primary font-bold">£35-50</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-semibold">Full Valet:</span>
                                        <span className="text-primary font-bold">£75-150</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-semibold">Specialist Services:</span>
                                        <span className="text-primary font-bold">£100-300+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Mobile Valeting Advantages</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Convenience</h3>
                                    <p className="text-muted-foreground">Service at your home, workplace, or chosen location</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Time-Saving</h3>
                                    <p className="text-muted-foreground">No driving to valet centres or waiting</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Flexibility</h3>
                                    <p className="text-muted-foreground">Appointments to suit your schedule</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Professional Results</h3>
                                    <p className="text-muted-foreground">Same quality as fixed locations</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Car className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Eco-Friendly</h3>
                                    <p className="text-muted-foreground">Modern mobile units use water-conscious techniques</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">No Disruption</h3>
                                    <p className="text-muted-foreground">Service while you work or relax</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-muted-foreground">
                            Learn more about the benefits of mobile services in our <Link href="/guides/mobile-valeting-benefits" className="text-primary underline">mobile valeting benefits guide</Link>.
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Related Services</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/services/full-valet" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Sparkles className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">Full Valet</h3>
                                <p className="text-sm text-muted-foreground">Complete interior and exterior transformation</p>
                            </Link>

                            <Link href="/services/interior-valet" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Car className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">Interior Valet</h3>
                                <p className="text-sm text-muted-foreground">Deep cleaning for your vehicle interior</p>
                            </Link>

                            <Link href="/guides/what-is-car-detailing" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Info className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">What is Car Detailing?</h3>
                                <p className="text-sm text-muted-foreground">Learn about professional detailing services</p>
                            </Link>
                        </div>
                    </section>

                    <section className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Experience Professional Car Valeting?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Experience professional car valeting with <strong>SRV Detailing</strong>. Serving Manchester and Greater Manchester for over 22 years, we bring expert valeting directly to you.
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
                        <p className="mb-4">Professional Mobile Car Valeting in Manchester & Greater Manchester</p>
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

export default WhatIsCarValeting;
