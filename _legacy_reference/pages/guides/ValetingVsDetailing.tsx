import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle, Car, Sparkles, Info, Shield, ArrowRight } from 'lucide-react';

const ValetingVsDetailing = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Car Valeting vs Car Detailing: What's the Difference?",
        "description": "Understand the difference between car valeting and car detailing. Learn which service you need and when. Expert guidance from SRV Detailing Manchester.",
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
                <title>Car Valeting vs Car Detailing: What's the Difference? | SRV Detailing</title>
                <meta name="description" content="Understand the difference between car valeting and car detailing. Learn which service you need and when. Expert guidance from SRV Detailing Manchester." />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/guides/valeting-vs-detailing" />
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
                            Comparison Guide
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Car Valeting vs Car Detailing: What's the Difference?
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Understanding the difference between car valeting and car detailing helps you choose the right service for your vehicle's needs. <strong>SRV Detailing</strong>, based in Stockport and serving Manchester and Greater Manchester for over 22 years, provides both valeting and detailing services. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> to discuss which service is right for your vehicle.
                        </p>
                    </div>
                </section>

                <main className="max-w-4xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">The Fundamental Difference</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Car className="w-10 h-10 text-blue-600" />
                                    <h3 className="text-2xl font-bold text-blue-900">Car Valeting = Cleaning</h3>
                                </div>
                                <p className="text-blue-800">
                                    Valeting focuses on removing dirt, grime, and contaminants to restore your vehicle to a clean condition. It's maintenance-focused, addressing current cleanliness rather than correcting long-term damage.
                                </p>
                            </div>

                            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-10 h-10 text-purple-600" />
                                    <h3 className="text-2xl font-bold text-purple-900">Car Detailing = Restoration + Protection</h3>
                                </div>
                                <p className="text-purple-800">
                                    Detailing focuses on correcting imperfections, restoring surfaces to perfect condition, and applying long-term protection. It's enhancement-focused, addressing paint defects and providing years of protection.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Detailed Comparison</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="border border-slate-200 p-4 text-left font-bold">Aspect</th>
                                        <th className="border border-slate-200 p-4 text-left font-bold">Valeting</th>
                                        <th className="border border-slate-200 p-4 text-left font-bold">Detailing</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Purpose</td>
                                        <td className="border border-slate-200 p-4">Maintain cleanliness and appearance</td>
                                        <td className="border border-slate-200 p-4">Restore perfection and protect long-term</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Time Required</td>
                                        <td className="border border-slate-200 p-4">1-4 hours</td>
                                        <td className="border border-slate-200 p-4">4-20+ hours</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Cost</td>
                                        <td className="border border-slate-200 p-4">£30-150</td>
                                        <td className="border border-slate-200 p-4">£200-2000+</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Frequency</td>
                                        <td className="border border-slate-200 p-4">Weekly to quarterly</td>
                                        <td className="border border-slate-200 p-4">Annually to every few years</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Results Duration</td>
                                        <td className="border border-slate-200 p-4">Temporary (vehicle gets dirty again)</td>
                                        <td className="border border-slate-200 p-4">Long-lasting (protection lasts years)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Equipment</td>
                                        <td className="border border-slate-200 p-4">Vacuum, steam cleaner, wash equipment</td>
                                        <td className="border border-slate-200 p-4">Machine polishers, paint gauges, specialist tools</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-4 font-semibold">Products</td>
                                        <td className="border border-slate-200 p-4">Shampoos, cleaners, basic waxes</td>
                                        <td className="border border-slate-200 p-4">Compounds, polishes, ceramic coatings</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">When to Choose Valeting</h2>
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-6">
                            <h3 className="text-xl font-bold mb-4 text-blue-900">Choose Valeting If:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2 text-blue-800">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>Your vehicle just needs cleaning</span>
                                </div>
                                <div className="flex items-start gap-2 text-blue-800">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>You want regular maintenance (monthly/quarterly)</span>
                                </div>
                                <div className="flex items-start gap-2 text-blue-800">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>Budget is £30-150</span>
                                </div>
                                <div className="flex items-start gap-2 text-blue-800">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>Time available is 1-4 hours</span>
                                </div>
                                <div className="flex items-start gap-2 text-blue-800">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>Paintwork has no significant defects</span>
                                </div>
                                <div className="flex items-start gap-2 text-blue-800">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>You're happy with current paint condition</span>
                                </div>
                                <div className="flex items-start gap-2 text-blue-800">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>You need interior deep cleaning</span>
                                </div>
                                <div className="flex items-start gap-2 text-blue-800">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>Pre-event quick refresh needed</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-bold mb-4">Valeting Services:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/services/mini-valet" className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                                    <span className="font-semibold">Mini Valet</span>
                                    <span className="text-primary font-bold">£30-40</span>
                                </Link>
                                <Link href="/services/interior-valet" className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                                    <span className="font-semibold">Interior Valet</span>
                                    <span className="text-primary font-bold">£45-70</span>
                                </Link>
                                <Link href="/services/exterior-valet" className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                                    <span className="font-semibold">Exterior Valet</span>
                                    <span className="text-primary font-bold">£35-50</span>
                                </Link>
                                <Link href="/services/full-valet" className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                                    <span className="font-semibold">Full Valet</span>
                                    <span className="text-primary font-bold">£75-150</span>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">When to Choose Detailing</h2>
                        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-8 mb-6">
                            <h3 className="text-xl font-bold mb-4 text-purple-900">Choose Detailing If:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2 text-purple-800">
                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Paintwork has swirl marks or scratches</span>
                                </div>
                                <div className="flex items-start gap-2 text-purple-800">
                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>You want long-term protection (years)</span>
                                </div>
                                <div className="flex items-start gap-2 text-purple-800">
                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Budget allows £200-2000+</span>
                                </div>
                                <div className="flex items-start gap-2 text-purple-800">
                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>You want perfection, not just cleanliness</span>
                                </div>
                                <div className="flex items-start gap-2 text-purple-800">
                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Vehicle is new (protect from day one)</span>
                                </div>
                                <div className="flex items-start gap-2 text-purple-800">
                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Pre-sale value maximisation needed</span>
                                </div>
                                <div className="flex items-start gap-2 text-purple-800">
                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>You're a car enthusiast</span>
                                </div>
                                <div className="flex items-start gap-2 text-purple-800">
                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Show car preparation required</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-bold mb-4">Detailing Services:</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                                    <span className="font-semibold">Paint Correction</span>
                                    <span className="text-primary font-bold">£200-800</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                                    <span className="font-semibold">Ceramic Coating</span>
                                    <span className="text-primary font-bold">£300-1200</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                                    <span className="font-semibold">Full Detail Packages</span>
                                    <span className="text-primary font-bold">£400-2000+</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Can You Have Both?</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <p className="mb-6">
                                Absolutely! The ideal approach combines both services for optimal results:
                            </p>

                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">Initial Detailing</h3>
                                            <p className="mb-2">Paint correction and ceramic coating to perfect and protect paintwork</p>
                                            <p className="text-primary font-bold">Investment: £400-1200+</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">Regular Valeting</h3>
                                            <p className="mb-2">Quarterly full valets to maintain cleanliness</p>
                                            <p className="text-primary font-bold">Cost: £75 each (£300/year)</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">Annual Maintenance</h3>
                                            <p className="mb-2">Annual detailing inspection and top-up coating</p>
                                            <p className="text-primary font-bold">Cost: £100-200</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-white rounded-lg border-2 border-primary">
                                    <p className="text-foreground font-semibold text-center">
                                        This approach keeps your vehicle in perfect condition year-round while maximising the value of your initial detailing investment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Cost-Benefit Analysis</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="text-xl font-bold mb-4">Valeting Only (Annual Cost)</h3>
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">4 full valets per year:</span>
                                        <span className="font-bold">£300</span>
                                    </div>
                                </div>
                                <div className="border-t border-slate-300 pt-3 space-y-2">
                                    <div className="flex items-start gap-2">
                                        <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Results: Clean vehicle</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Protection: Basic wax (lasts weeks)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Paint condition: Gradually deteriorates</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-6 rounded-xl border-2 border-primary">
                                <h3 className="text-xl font-bold mb-4">Detailing + Valeting (Year 1)</h3>
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between">
                                        <span>Initial detail with coating:</span>
                                        <span className="font-bold">£600</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>4 full valets:</span>
                                        <span className="font-bold">£300</span>
                                    </div>
                                    <div className="border-t-2 border-primary pt-2 flex justify-between">
                                        <span className="font-bold">Total Year 1:</span>
                                        <span className="font-bold text-primary">£900</span>
                                    </div>
                                </div>
                                <div className="border-t border-primary/30 pt-3 space-y-2">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Results: Perfect, protected vehicle</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Protection: Ceramic coating (lasts years)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Paint condition: Preserved and enhanced</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-green-900">Detailing + Valeting (Years 2-5 Annual Cost)</h3>
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-green-800">
                                    <span>4 full valets:</span>
                                    <span className="font-bold">£300</span>
                                </div>
                                <div className="flex justify-between text-green-800">
                                    <span>Annual coating check:</span>
                                    <span className="font-bold">£100</span>
                                </div>
                                <div className="border-t-2 border-green-300 pt-2 flex justify-between">
                                    <span className="font-bold text-green-900">Total per year:</span>
                                    <span className="font-bold text-green-600 text-xl">£400</span>
                                </div>
                            </div>
                            <div className="border-t border-green-200 pt-3 space-y-2">
                                <div className="flex items-start gap-2 text-green-800">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">Results: Maintained perfection</span>
                                </div>
                                <div className="flex items-start gap-2 text-green-800">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">Protection: Ongoing ceramic protection</span>
                                </div>
                                <div className="flex items-start gap-2 text-green-800">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">Paint condition: Preserved long-term</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Common Misconceptions</h2>
                        <div className="space-y-6">
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                                <h3 className="font-bold text-red-900 mb-2">Myth: "Valeting and detailing are the same thing"</h3>
                                <p className="text-red-800"><strong>Reality:</strong> Completely different services with different goals</p>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                                <h3 className="font-bold text-red-900 mb-2">Myth: "Detailing is just expensive valeting"</h3>
                                <p className="text-red-800"><strong>Reality:</strong> Detailing involves paint correction and long-term protection</p>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                                <h3 className="font-bold text-red-900 mb-2">Myth: "I can detail my car myself"</h3>
                                <p className="text-red-800"><strong>Reality:</strong> Proper detailing requires expensive equipment, training, and experience</p>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                                <h3 className="font-bold text-red-900 mb-2">Myth: "Valeting is enough for any car"</h3>
                                <p className="text-red-800"><strong>Reality:</strong> Valeting maintains cleanliness but doesn't correct paint defects</p>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                                <h3 className="font-bold text-red-900 mb-2">Myth: "Detailing is only for show cars"</h3>
                                <p className="text-red-800"><strong>Reality:</strong> Any vehicle benefits from paint correction and protection</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/guides/what-is-car-valeting" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Car className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">What is Car Valeting?</h3>
                                <p className="text-sm text-muted-foreground">Complete guide to car valeting services</p>
                            </Link>

                            <Link href="/guides/what-is-car-detailing" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Shield className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">What is Car Detailing?</h3>
                                <p className="text-sm text-muted-foreground">Professional guide to car detailing</p>
                            </Link>

                            <Link href="/guides/paint-correction-guide" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Sparkles className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">Paint Correction Guide</h3>
                                <p className="text-sm text-muted-foreground">Learn about paint correction</p>
                            </Link>
                        </div>
                    </section>

                    <section className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Whether you need valeting, detailing, or both, <strong>SRV Detailing</strong> provides expert services across Manchester and Greater Manchester.
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
                        <p className="mb-4">Professional Car Valeting & Detailing in Manchester & Greater Manchester</p>
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

export default ValetingVsDetailing;
