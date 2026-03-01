import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, Calendar, CheckCircle, Car, Clock, Info } from 'lucide-react';

const HowOftenValetCar = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How Often Should You Valet Your Car?",
        "description": "Expert guidance on car valeting frequency. Learn how often to valet your car based on usage, conditions, and vehicle type. Advice from SRV Detailing.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Assess your driving habits",
                "text": "Consider daily mileage, parking conditions, and passenger frequency"
            },
            {
                "@type": "HowToStep",
                "name": "Factor in environmental conditions",
                "text": "Account for weather, road salt, pollen, and urban pollution"
            },
            {
                "@type": "HowToStep",
                "name": "Choose appropriate frequency",
                "text": "Select valeting schedule based on your specific circumstances"
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>How Often Should You Valet Your Car? Complete Guide | SRV Detailing</title>
                <meta name="description" content="Expert guidance on car valeting frequency. Learn how often to valet your car based on usage, conditions, and vehicle type. Professional advice from SRV Detailing Manchester." />
                <link rel="canonical" href="https://www.srvdetailing.co.uk/guides/how-often-valet-car" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-white">
                <Navbar />

                <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Calendar className="w-4 h-4" />
                            Frequency Guide
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            How Often Should You Valet Your Car?
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            The right valeting frequency depends on how you use your vehicle, where you drive, and your cleanliness standards. <strong>SRV Detailing</strong>, based in Stockport and serving Manchester and Greater Manchester for over 22 years, helps customers maintain their vehicles with appropriate valeting schedules. Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk" className="text-primary font-bold underline">www.srvdetailing.co.uk</a> for personalised advice.
                        </p>
                    </div>
                </section>

                <main className="max-w-4xl mx-auto px-4 py-16">
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Recommended Valeting Frequency</h2>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary pl-6 pr-6 py-4 rounded-r-xl">
                                <div className="flex items-start gap-4">
                                    <Clock className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Every 1-2 Weeks: Mini Valet</h3>
                                        <p className="text-muted-foreground mb-3">Quick maintenance service to keep your vehicle looking fresh between comprehensive cleans. Perfect for high-standards vehicle owners or those using their car for business purposes.</p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Best for: Daily drivers, business vehicles, prestige cars</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-blue-25 border-l-4 border-blue-500 pl-6 pr-6 py-4 rounded-r-xl">
                                <div className="flex items-start gap-4">
                                    <Calendar className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Every 4-6 Weeks: Interior Valet</h3>
                                        <p className="text-muted-foreground mb-3">Deep interior cleaning to maintain cabin freshness and hygiene. Essential for family vehicles or those carrying passengers regularly.</p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Best for: Family cars, vehicles with children/pets, regular passenger transport</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-green-25 border-l-4 border-green-500 pl-6 pr-6 py-4 rounded-r-xl">
                                <div className="flex items-start gap-4">
                                    <Car className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Every 1-3 Months: Full Valet</h3>
                                        <p className="text-muted-foreground mb-3">Complete interior and exterior transformation. The most popular frequency for regular drivers who care about their vehicle's condition.</p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Best for: Most vehicle owners, balanced maintenance approach</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 to-yellow-25 border-l-4 border-yellow-500 pl-6 pr-6 py-4 rounded-r-xl">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-8 h-8 text-yellow-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Every 3-6 Months: Minimum Frequency</h3>
                                        <p className="text-muted-foreground mb-3">Absolute minimum for occasional drivers or garage-kept vehicles. Even low-mileage vehicles accumulate dust and need professional attention.</p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Best for: Occasional drivers, garage-kept vehicles, low annual mileage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-purple-25 border-l-4 border-purple-500 pl-6 pr-6 py-4 rounded-r-xl">
                                <div className="flex items-start gap-4">
                                    <Info className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Seasonal: 4 Times Per Year</h3>
                                        <p className="text-muted-foreground mb-3">Quarterly valeting aligned with seasons addresses specific environmental challenges: winter salt, spring pollen, summer road trip residue, autumn leaves.</p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Best for: Seasonal protection, addressing environmental challenges</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Factors That Increase Valeting Frequency</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Car className="w-6 h-6 text-primary" />
                                    Usage Factors
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">High Daily Mileage:</span>
                                            <p className="text-sm text-muted-foreground">More miles means more dirt accumulation</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Multiple Passengers:</span>
                                            <p className="text-sm text-muted-foreground">More people means faster interior soiling</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Children or Pets:</span>
                                            <p className="text-sm text-muted-foreground">Require more frequent deep cleaning</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Business Use:</span>
                                            <p className="text-sm text-muted-foreground">Professional image requires regular maintenance</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Eating in Vehicle:</span>
                                            <p className="text-sm text-muted-foreground">Food debris and spills need addressing</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Calendar className="w-6 h-6 text-primary" />
                                    Environmental Factors
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Street Parking:</span>
                                            <p className="text-sm text-muted-foreground">Exposed to elements, bird droppings, tree sap</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Urban Environment:</span>
                                            <p className="text-sm text-muted-foreground">Pollution and brake dust accumulation</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Coastal Areas:</span>
                                            <p className="text-sm text-muted-foreground">Salt spray requires more frequent washing</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Rural Driving:</span>
                                            <p className="text-sm text-muted-foreground">Mud, agricultural debris, insects</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold">Winter Conditions:</span>
                                            <p className="text-sm text-muted-foreground">Road salt damage requires immediate attention</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Seasonal Valeting Calendar</h2>
                        <div className="space-y-6">
                            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        ❄️
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-blue-900">Winter (December-February)</h3>
                                        <p className="text-blue-800 mb-3">
                                            Most critical season for valeting. Road salt causes corrosion and paint damage if left untreated. Increase washing frequency to every 1-2 weeks, focusing on undercarriage cleaning.
                                        </p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Recommended: Bi-weekly exterior valet with undercarriage wash</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        🌸
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-green-900">Spring (March-May)</h3>
                                        <p className="text-green-800 mb-3">
                                            Time for deep cleaning after winter. Full valet to remove salt residue, treat paintwork, and deep clean interior. Pollen season requires regular exterior cleaning.
                                        </p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Recommended: Full valet in March, then monthly exterior valets</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        ☀️
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-yellow-900">Summer (June-August)</h3>
                                        <p className="text-yellow-800 mb-3">
                                            Holiday season means road trips and increased usage. UV protection important. Regular cleaning removes insect residue, bird droppings, and tree sap before they etch paintwork.
                                        </p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Recommended: Monthly full valet, prompt removal of bird droppings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        🍂
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-orange-900">Autumn (September-November)</h3>
                                        <p className="text-orange-800 mb-3">
                                            Falling leaves deposit debris and stain paintwork. Prepare vehicle for winter with thorough valet and protection application. Clear drainage channels to prevent rust.
                                        </p>
                                        <div className="bg-white p-3 rounded-lg">
                                            <p className="font-semibold text-sm">Recommended: Full valet with wax protection before winter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-muted-foreground">
                            For more seasonal care advice, see our <Link href="/guides/winter-car-care" className="text-primary underline">winter car care</Link> and <Link href="/guides/summer-car-care" className="text-primary underline">summer car care</Link> guides.
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Valeting Frequency by Vehicle Type</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">Daily Driver / Commuter Car</h3>
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Every 4-6 weeks</span>
                                </div>
                                <p className="text-muted-foreground">Regular use requires consistent maintenance. Monthly full valet keeps vehicle fresh and protected.</p>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">Family Vehicle / SUV</h3>
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Every 3-4 weeks</span>
                                </div>
                                <p className="text-muted-foreground">Children and school runs mean faster soiling. More frequent interior valeting essential for hygiene and freshness.</p>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">Business / Executive Car</h3>
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Every 1-2 weeks</span>
                                </div>
                                <p className="text-muted-foreground">Professional image requires pristine condition. Weekly or fortnightly mini valets maintain showroom appearance.</p>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">Prestige / Luxury Vehicle</h3>
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Every 1-2 weeks</span>
                                </div>
                                <p className="text-muted-foreground">High-value vehicles deserve premium care. Regular professional valeting protects your investment and maintains value.</p>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">Classic / Collector Car</h3>
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Every 3-6 months</span>
                                </div>
                                <p className="text-muted-foreground">Limited use but requires protection. Seasonal valet before storage and after use maintains condition.</p>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">Weekend / Second Car</h3>
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Every 8-12 weeks</span>
                                </div>
                                <p className="text-muted-foreground">Occasional use means less frequent valeting needed, but dust still accumulates. Quarterly valet sufficient.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Signs Your Car Needs Valeting Now</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4 text-red-900">Interior Warning Signs</h3>
                                <ul className="space-y-2 text-red-800">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Persistent odours that don't clear with windows open</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Visible stains on seats or carpets</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Sticky or grimy dashboard and door cards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Dust visible in sunlight on surfaces</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Pet hair embedded in upholstery</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Dirty or smeared windows obscuring vision</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4 text-red-900">Exterior Warning Signs</h3>
                                <ul className="space-y-2 text-red-800">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Paint feels rough or gritty to touch</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Bird droppings or tree sap left on paint</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Wheels caked with brake dust</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Dull, faded paintwork lacking shine</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Water spots or watermarks visible</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">•</span>
                                        <span>Visible dirt accumulation on lower panels</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 p-6 rounded-xl">
                            <p className="text-yellow-900 font-semibold text-center">
                                <Info className="w-5 h-5 inline mr-2" />
                                If you notice any of these signs, don't wait for your scheduled valet – book an immediate service to prevent permanent damage.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Creating Your Valeting Schedule</h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none">
                            <p className="mb-6">
                                The best valeting schedule is one you'll actually follow. Consider these approaches:
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
                                    <h3 className="text-xl font-bold mb-3 text-foreground">Calendar-Based</h3>
                                    <p className="mb-3">Book valets on the same date each month or season. Easy to remember and maintain consistency.</p>
                                    <p className="text-sm text-primary font-semibold">Example: First Saturday of every month</p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                                    <h3 className="text-xl font-bold mb-3 text-foreground">Mileage-Based</h3>
                                    <p className="mb-3">Schedule valet every certain number of miles. Aligns cleaning with actual vehicle use.</p>
                                    <p className="text-sm text-blue-700 font-semibold">Example: Every 1,000-2,000 miles</p>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                                    <h3 className="text-xl font-bold mb-3 text-foreground">Seasonal</h3>
                                    <p className="mb-3">Four valets per year aligned with seasons. Addresses specific seasonal challenges.</p>
                                    <p className="text-sm text-green-700 font-semibold">Example: March, June, September, December</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="text-xl font-bold mb-4 text-foreground">Sample Annual Schedule (Regular Driver)</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-semibold">January - March:</span>
                                        <span>Bi-weekly mini valets (winter protection)</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-semibold">April:</span>
                                        <span>Full valet (post-winter deep clean)</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-semibold">May - August:</span>
                                        <span>Monthly full valets (summer maintenance)</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-semibold">September:</span>
                                        <span>Full valet with wax (winter prep)</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <span className="font-semibold">October - December:</span>
                                        <span>Bi-weekly mini valets (winter begins)</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-center text-muted-foreground">Total annual cost: Approximately £400-600 depending on vehicle size</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/guides/what-is-car-valeting" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Car className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">What is Car Valeting?</h3>
                                <p className="text-sm text-muted-foreground">Complete guide to valeting services</p>
                            </Link>

                            <Link href="/guides/winter-car-care" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <Calendar className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">Winter Car Care</h3>
                                <p className="text-sm text-muted-foreground">Protect your car in winter months</p>
                            </Link>

                            <Link href="/guides/mobile-valeting-benefits" className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-primary transition-colors">
                                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">Mobile Valeting Benefits</h3>
                                <p className="text-sm text-muted-foreground">Why choose mobile service</p>
                            </Link>
                        </div>
                    </section>

                    <section className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Establish Your Valeting Schedule?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Contact <strong>SRV Detailing</strong> to create a personalised valeting schedule for your vehicle. Serving Manchester and Greater Manchester for over 22 years.
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

export default HowOftenValetCar;
