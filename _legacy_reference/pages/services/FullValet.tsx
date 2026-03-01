import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, CheckCircle, Star, Sparkles } from 'lucide-react';

const FullValet = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full Car Valet Service",
    "provider": {
      "@type": "AutoDetailingService",
      "name": "SRV Detailing",
      "telephone": "+447375759686",
      "url": "https://www.srvdetailing.co.uk/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Stockport",
        "addressRegion": "Greater Manchester",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "53.4808",
        "longitude": "-2.2426"
      },
      "geoRadius": "25000"
    },
    "description": "Comprehensive mobile full valet service combining deep interior cleaning with thorough exterior detailing for a complete showroom-quality finish.",
    "offers": {
      "@type": "Offer",
      "price": "75.00",
      "priceCurrency": "GBP"
    }
  };

  return (
    <>
      <Helmet>
        <title>Professional Full Car Valet Service in Manchester | SRV Detailing</title>
        <meta name="description" content="Comprehensive mobile full valet service across Manchester. Deep interior cleaning + exterior detailing. 22 years experience. Call SRV Detailing 07375 759686" />
        <link rel="canonical" href="https://www.srvdetailing.co.uk/services/full-valet" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-300" />
              <span className="text-blue-200 font-semibold">Premium Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Full Car Valet Service in Manchester
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              Experience the ultimate mobile car transformation with <strong>SRV Detailing</strong>'s comprehensive full valet service. Based in Stockport and serving all of Manchester and Greater Manchester, we bring showroom-quality results directly to your location. Call us on <a href="tel:+447375759686" className="text-white font-bold hover:text-blue-200 transition-colors underline decoration-2">+44 7375 759686</a> or visit <a href="https://www.srvdetailing.co.uk/" className="text-white font-bold hover:text-blue-200 transition-colors underline decoration-2">www.srvdetailing.co.uk</a> to book your complete vehicle transformation today.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+447375759686"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Call 07375 759686
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-lg border-2 border-blue-500"
              >
                Get a Quote
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>5-Star Rated Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>22+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span>All Manchester Covered</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-16">
          
          {/* What is Full Valet Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What is a Full Car Valet Service?
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p className="text-xl mb-6">
                A full car valet is the most comprehensive mobile cleaning service available, combining intensive interior deep cleaning with meticulous exterior detailing to restore your vehicle to showroom condition. Unlike a basic car wash or quick valet, our full valet service addresses every aspect of your vehicle's appearance, from the deepest carpet fibres to the highest points of your paintwork.
              </p>
              <p className="mb-6">
                At SRV Detailing, our full valet service typically takes 2.5 to 3.5 hours and includes professional-grade steam cleaning, hand washing, machine polishing, wax protection, leather conditioning, fabric treatment, and comprehensive detailing of every surface inside and out. We bring all necessary equipment, water supply, and eco-friendly products directly to your Manchester location, whether that's your home driveway, workplace car park, or any other convenient spot.
              </p>
              <p className="mb-6">
                This service is perfect for car enthusiasts maintaining their pride and joy, families needing a deep clean after months of daily use, professionals preparing their vehicle for an important meeting or event, or anyone looking to restore their car's appearance before selling or simply to enjoy driving a pristine vehicle again.
              </p>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              What's Included in Our Full Valet Service
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Interior Services */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Interior Deep Cleaning
                </h3>
                <ul className="space-y-3">
                  {[
                    'Complete vacuum of all seats, carpets, floor mats, and boot area',
                    'Professional steam cleaning of upholstery, fabric seats, and carpets',
                    'Leather seat cleaning, conditioning, and protection treatment',
                    'Dashboard, console, and all trim surfaces thoroughly cleaned',
                    'Door cards, door pockets, and storage compartments detailed',
                    'Air vents cleaned and deodorised for fresh cabin air',
                    'All glass and mirrors cleaned inside for crystal clarity',
                    'Seat belts, buckles, and runners cleaned and treated',
                    'Boot area vacuumed, wiped, and detailed including spare wheel well',
                    'Pet hair removal using specialist tools and techniques',
                    'Stain treatment for common marks (food, drink, mud)',
                    'Odour neutralisation and air freshening treatment'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exterior Services */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Exterior Detailing
                </h3>
                <ul className="space-y-3">
                  {[
                    'Pre-wash with snow foam to loosen dirt and contaminants',
                    'Hand wash using two-bucket method with pH-neutral shampoo',
                    'Wheel deep clean including arches, barrels, and brake calipers',
                    'Tyre cleaning, dressing, and protective shine application',
                    'Clay bar decontamination to remove bonded particles',
                    'Paintwork hand polishing to enhance gloss and depth',
                    'Premium carnauba wax or synthetic sealant protection',
                    'All glass and mirrors polished for streak-free clarity',
                    'Chrome and metal trim polished and protected',
                    'Plastic trim restoration and protection treatment',
                    'Door shuts, fuel cap, and boot seal areas detailed',
                    'Final inspection and quality check before handover'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-900 text-white rounded-xl p-6">
              <p className="text-lg">
                <strong className="text-blue-200">Starting from £75</strong> for small/medium vehicles. Larger vehicles (SUVs, 4x4s, vans) and heavily soiled vehicles may require additional time and are priced accordingly. Contact us for an accurate quote based on your specific vehicle and requirements.
              </p>
            </div>
          </section>

          {/* Who Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Who Benefits from a Full Valet Service?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Car Enthusiasts',
                  description: 'Maintain your vehicle in pristine condition with regular comprehensive cleaning that preserves value and appearance. Perfect for those who take pride in their car\'s presentation and want professional-level results.'
                },
                {
                  title: 'Busy Families',
                  description: 'Restore your family car after months of school runs, shopping trips, spills, and daily wear. We tackle pet hair, sticky residues, muddy footprints, and stubborn stains that accumulate with family life.'
                },
                {
                  title: 'Pre-Sale Preparation',
                  description: 'Maximise your vehicle\'s resale value with a complete transformation. First impressions matter enormously when selling, and a professionally valeted car can add hundreds of pounds to your sale price.'
                },
                {
                  title: 'Business Professionals',
                  description: 'Ensure your vehicle reflects your professional standards. Ideal before important meetings, client visits, or corporate events where your car\'s appearance matters to your business image.'
                },
                {
                  title: 'Special Occasions',
                  description: 'Prepare your vehicle for weddings, anniversaries, milestone birthdays, or any special event where you want your car looking absolutely perfect for photographs and celebrations.'
                },
                {
                  title: 'Seasonal Deep Clean',
                  description: 'Combat winter salt damage, spring pollen, summer dust, or autumn leaves with a thorough seasonal valet that protects your paintwork and refreshes your interior after harsh weather conditions.'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border-2 border-slate-100 hover:border-blue-300 transition-colors">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Our Full Valet Process
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Initial Assessment',
                  description: 'We inspect your vehicle to identify specific problem areas, heavy soiling, stains, or damage requiring special attention. This ensures we allocate appropriate time and use the correct products for your vehicle\'s specific needs.'
                },
                {
                  step: '2',
                  title: 'Interior Deep Clean',
                  description: 'We begin inside, thoroughly vacuuming all surfaces before steam cleaning upholstery, carpets, and mats. Dashboard, console, door cards, and all trim are cleaned and protected. Leather receives conditioning treatment, while fabric gets protective treatment.'
                },
                {
                  step: '3',
                  title: 'Exterior Pre-Wash',
                  description: 'Snow foam is applied to loosen dirt, road grime, and contaminants without touching the paintwork. This crucial step prevents scratching during the hand wash phase by removing the majority of loose dirt safely.'
                },
                {
                  step: '4',
                  title: 'Hand Wash & Decontamination',
                  description: 'Using the two-bucket method with pH-neutral shampoo, we hand wash every panel. Wheels, arches, and tyres receive deep cleaning. Clay bar treatment removes bonded contaminants like tar, tree sap, and industrial fallout.'
                },
                {
                  step: '5',
                  title: 'Polish & Protect',
                  description: 'Paintwork is hand polished to enhance gloss and depth of colour. Premium wax or synthetic sealant is applied for protection against weather, UV rays, and contaminants. Trim, glass, and chrome receive appropriate treatments.'
                },
                {
                  step: '6',
                  title: 'Final Detailing & Inspection',
                  description: 'Door shuts, fuel cap, boot seals, and other often-missed areas are detailed. We perform a comprehensive quality inspection, ensuring every surface meets our exacting standards before presenting your transformed vehicle.'
                }
              ].map((process, index) => (
                <div key={index} className="flex gap-6 bg-white rounded-xl p-6 shadow-md">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {process.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 bg-blue-100 border-l-4 border-blue-900 p-6 rounded-r-xl">
              <Clock className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
              <div>
                <p className="text-slate-900 font-semibold mb-2">Service Duration: 2.5 to 3.5 hours</p>
                <p className="text-slate-700">
                  Time varies based on vehicle size, condition, and specific requirements. Heavily soiled vehicles or larger SUVs may require additional time to achieve our quality standards.
                </p>
              </div>
            </div>
          </section>

          {/* Coverage Area Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Full Valet Service Coverage Across Manchester
            </h2>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              SRV Detailing provides mobile full valet services throughout Manchester, Greater Manchester, and surrounding areas. We come to you, whether you're at home, work, or any other convenient location.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                'Manchester City Centre', 'Stockport', 'Salford', 'Bolton',
                'Oldham', 'Rochdale', 'Bury', 'Tameside',
                'Trafford', 'Wigan', 'Altrincham', 'Sale',
                'Bramhall', 'Cheadle', 'Didsbury', 'Chorlton'
              ].map((location, index) => (
                <Link
                  key={index}
                  href={`/locations/${location.toLowerCase().replace(/ /g, '-')}`}
                  className="bg-white border-2 border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <span className="text-slate-900 font-semibold">{location}</span>
                </Link>
              ))}
            </div>

            <p className="text-slate-700 text-center">
              Don't see your area listed? We cover the entire Greater Manchester region. 
              <a href="tel:+447375759686" className="text-blue-600 font-semibold hover:text-blue-800 ml-1">
                Call us on 07375 759686
              </a> to confirm coverage.
            </p>
          </section>

          {/* Related Services */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Enhance Your Full Valet with Additional Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Paint Correction',
                  description: 'Remove swirl marks, light scratches, and paint imperfections with machine polishing for a flawless finish.',
                  link: '/services/paint-correction'
                },
                {
                  title: 'Ceramic Coating',
                  description: 'Add long-lasting protection with a professional ceramic coating application for years of easy maintenance.',
                  link: '/services/ceramic-coating'
                },
                {
                  title: 'Headlight Restoration',
                  description: 'Restore cloudy, yellowed headlights to crystal clarity for improved visibility and appearance.',
                  link: '/services/headlight-restoration'
                }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors border-2 border-slate-700 hover:border-blue-500"
                >
                  <h3 className="text-xl font-bold text-blue-300 mb-3">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
                  <span className="text-blue-400 font-semibold hover:text-blue-300">Learn More →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'How long does a full valet take?',
                  answer: 'Our full valet service typically takes 2.5 to 3.5 hours depending on your vehicle\'s size and condition. Small to medium cars usually take around 2.5-3 hours, while larger SUVs, 4x4s, or heavily soiled vehicles may require 3-3.5 hours to achieve our quality standards.'
                },
                {
                  question: 'Do I need to provide water or electricity?',
                  answer: 'No, we arrive completely self-sufficient with our own water supply and power generation equipment. You don\'t need to provide anything. However, if you have an outdoor tap or electrical socket available, it can occasionally help speed up certain processes, though it\'s entirely optional.'
                },
                {
                  question: 'Can you remove stubborn stains and pet hair?',
                  answer: 'Yes, stain treatment and pet hair removal are core parts of our full valet service. We use professional-grade steam cleaners, specialist extraction tools, and appropriate cleaning solutions to tackle most common stains (food, drink, mud) and thoroughly remove embedded pet hair from upholstery and carpets.'
                },
                {
                  question: 'What\'s the difference between a full valet and car detailing?',
                  answer: 'A full valet is comprehensive cleaning and protection of your vehicle inside and out. Car detailing goes further with paint correction (machine polishing to remove swirls and scratches), ceramic coating application, and more intensive restoration work. Think of a full valet as thorough cleaning and protection, while detailing is restoration and perfection.'
                },
                {
                  question: 'How often should I get a full valet?',
                  answer: 'For most drivers, a full valet every 3-6 months maintains excellent condition. Families with children or pets might benefit from quarterly valets, while car enthusiasts or those with garage-kept vehicles might extend to 6-12 months. We also recommend seasonal valets, particularly after winter to remove salt damage.'
                },
                {
                  question: 'Is the full valet service available at my workplace?',
                  answer: 'Absolutely! We regularly provide full valet services at workplaces, office car parks, and business premises across Manchester. Many professionals have their car valeted during their working day. Just ensure you have permission to use the parking space for the required duration.'
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-xl p-6 shadow-md border-2 border-slate-100">
                  <summary className="text-lg font-bold text-slate-900 cursor-pointer hover:text-blue-600 transition-colors">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-slate-700 leading-relaxed pl-4 border-l-4 border-blue-200">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Book your professional full valet service with <strong>SRV Detailing</strong> today. With over 22 years of experience serving Manchester and Greater Manchester, we guarantee exceptional results delivered directly to your location.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="tel:+447375759686"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call 07375 759686
              </a>
              <a
                href="https://www.srvdetailing.co.uk/"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-lg border-2 border-blue-500"
              >
                Visit Website
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <span>✓ Same-Day Service Available</span>
              <span>✓ Fully Mobile Service</span>
              <span>✓ Eco-Friendly Products</span>
              <span>✓ 22+ Years Experience</span>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-8 px-4 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="mb-2">
              <strong className="text-white">SRV Detailing</strong> - Professional Mobile Car Valeting & Detailing
            </p>
            <p className="mb-2">
              Phone: <a href="tel:+447375759686" className="text-blue-400 hover:text-blue-300">+44 7375 759686</a>
            </p>
            <p className="mb-4">
              Website: <a href="https://www.srvdetailing.co.uk/" className="text-blue-400 hover:text-blue-300">www.srvdetailing.co.uk</a>
            </p>
            <p className="text-sm text-slate-400">
              Serving Manchester, Greater Manchester, Stockport, and surrounding areas
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FullValet;
