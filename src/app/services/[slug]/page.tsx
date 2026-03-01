import type { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Shield, Sparkles, CheckCircle, Star, Wrench, Car } from 'lucide-react';
import { notFound, redirect } from 'next/navigation';

// 301 redirects — old flat URLs to new nested structure
const serviceRedirects: Record<string, string> = {
  'ceramic-coating': '/manchester/car-detailing/ceramic-coating',
  'paint-correction': '/manchester/car-detailing/paint-correction',
  'car-detailing': '/manchester/car-detailing',
  'interior-detailing': '/manchester/car-detailing/interior-detailing',
  'new-car-protection': '/manchester/car-detailing/new-car-protection',
  'full-valet': '/manchester/car-valeting/full-valet',
  'mini-valet': '/manchester/car-valeting/mini-valet',
  'mobile-valeting': '/manchester/car-valeting/mobile-valeting',
  'interior-valeting': '/manchester/car-valeting/interior-valeting',
  'exterior-valeting': '/manchester/car-valeting/exterior-valeting',
};

// Service data mapping
const serviceData = {
  'ceramic-coating': {
    name: 'Ceramic Coating',
    title: 'Professional Ceramic Coating Application in Manchester',
    description: 'Expert ceramic coating application across Manchester. Long-term paint protection, hydrophobic finish. 22 years experience.',
    canonical: 'https://www.srvdetailing.co.uk/services/ceramic-coating',
    price: '300.00',
    icon: Shield,
    content: {
      intro: 'Protect your vehicle for years with SRV Detailing\'s professional ceramic coating. Superior protection, hydrophobic properties, and enhanced gloss.',
      whatIs: 'Ceramic coating is a liquid polymer that chemically bonds with your vehicle\'s paintwork to create a permanent protective layer. Unlike waxes or sealants, ceramic coatings form a molecular bond that lasts for years, providing superior protection against UV damage, chemical etching, and minor scratches.',
      options: [
        { 
          title: 'Entry-Level', 
          price: '£300-400', 
          years: '2-Year Protection', 
          desc: 'Good hydrophobic properties and basic chemical resistance.' 
        },
        { 
          title: 'Mid-Range', 
          price: '£500-700', 
          years: '3-4 Year Protection', 
          desc: 'Excellent hydrophobic properties and strong chemical resistance.' 
        },
        { 
          title: 'Premium', 
          price: '£800-1200+', 
          years: '5+ Year Protection', 
          desc: 'Maximum chemical and scratch resistance with deepest gloss.' 
        }
      ]
    }
  },
  'paint-correction': {
    name: 'Paint Correction',
    title: 'Professional Paint Correction in Manchester',
    description: 'Expert paint correction removing swirl marks, scratches and restoring gloss. 22 years experience.',
    canonical: 'https://www.srvdetailing.co.uk/services/paint-correction',
    price: '250.00',
    icon: Wrench,
    content: {
      intro: 'Restore your vehicle\'s paint to showroom condition with our professional paint correction service. Remove swirl marks, scratches, and oxidation for a flawless finish.',
      whatIs: 'Paint correction uses machine polishing with specialized compounds to remove microscopic layers of clear coat, eliminating surface defects while preserving paint integrity. This process restores gloss, depth, and color saturation to your vehicle\'s paintwork.',
      process: [
        'Complete wash and clay bar decontamination',
        'Detailed paint inspection under proper lighting',
        'Machine polishing with appropriate cutting compounds',
        'Finishing polish for maximum gloss and clarity',
        'Final inspection and panel wipe to reveal results'
      ]
    }
  },
  'car-detailing': {
    name: 'Car Detailing',
    title: 'Professional Car Detailing Services in Manchester',
    description: 'Comprehensive car detailing across Manchester. Paint correction, protection, interior restoration. 22 years experience.',
    canonical: 'https://www.srvdetailing.co.uk/services/car-detailing',
    price: '200.00',
    icon: Sparkles,
    content: {
      intro: 'Complete professional car detailing service covering exterior paint correction, protection, and interior restoration to return your vehicle to pristine condition.',
      whatIs: 'Car detailing goes beyond regular washing to thoroughly clean, restore, and protect every surface of your vehicle. This includes paint correction, ceramic coating application, interior deep cleaning, and protective treatments.',
      includes: [
        'Complete exterior wash and decontamination',
        'Paint correction to remove defects',
        'Ceramic coating or wax protection',
        'Interior deep cleaning and conditioning',
        'Wheel and tire cleaning and dressing',
        'Glass cleaning and polishing'
      ]
    }
  },
  'full-valet': {
    name: 'Full Valet',
    title: 'Complete Car Valeting Service in Manchester',
    description: 'Professional full valet service including exterior wash, interior deep cleaning, and protection. 22 years experience.',
    canonical: 'https://www.srvdetailing.co.uk/services/full-valet',
    price: '120.00',
    icon: Car,
    content: {
      intro: 'Our comprehensive full valet service provides thorough cleaning and protection for your entire vehicle, both inside and out, perfect for regular maintenance or preparing your car for sale.',
      whatIs: 'A full valet combines professional exterior washing with detailed interior cleaning, upholstery treatment, and protective applications to restore your vehicle\'s appearance and maintain its value.',
      includes: [
        'Hand wash exterior with two-bucket method',
        'Wheel and tire cleaning with dressing',
        'Complete interior vacuum and detailing',
        'Dashboard, console, and surface cleaning',
        'Window cleaning inside and out',
        'Clay bar decontamination',
        'Wax or sealant protection application'
      ]
    }
  },
  'interior-valeting': {
    name: 'Interior Valeting',
    title: 'Professional Interior Car Valeting in Manchester',
    description: 'Deep interior cleaning, stain removal, and conditioning for your car\'s cabin. 22 years experience.',
    canonical: 'https://www.srvdetailing.co.uk/services/interior-valeting',
    price: '80.00',
    icon: CheckCircle,
    content: {
      intro: 'Transform your car\'s interior with our professional deep cleaning service. Remove stains, odors, and buildup from every surface for a fresh, showroom-fresh cabin.',
      whatIs: 'Interior valeting thoroughly cleans and conditions all surfaces within your vehicle\'s cabin, including fabric and leather upholstery, carpets, plastics, and trim. This service eliminates odors, stains, and daily buildup.',
      includes: [
        'Deep vacuum of all carpets and seats',
        'Fabric upholstery cleaning and stain removal',
        'Leather conditioning and protection',
        'Dashboard and console detailing',
        'Door panel and trim cleaning',
        'Odor removal and air freshening',
        'Window and mirror cleaning'
      ]
    }
  },
  'exterior-valeting': {
    name: 'Exterior Valeting',
    title: 'Professional Exterior Car Valeting in Manchester',
    description: 'Complete exterior washing, decontamination, and protection for your vehicle\'s paintwork.',
    canonical: 'https://www.srvdetailing.co.uk/services/exterior-valeting',
    price: '65.00',
    icon: Star,
    content: {
      intro: 'Professional exterior cleaning service that restores your vehicle\'s paintwork to a clean, protected condition using safe, professional methods and premium products.',
      whatIs: 'Exterior valeting involves thorough washing, decontamination, and protection of your vehicle\'s exterior surfaces. This includes paint cleaning, wheel detailing, and protective applications to maintain appearance and prevent damage.',
      includes: [
        'Pre-rinse to remove loose debris',
        'Two-bucket wash method with pH-neutral shampoo',
        'Wheel and tire cleaning with specialized products',
        'Clay bar decontamination',
        'Drying with microfiber towels',
        'Wax or sealant protection application',
        'Final inspection and touch-up'
      ]
    }
  }
};

// Schema.org JSON-LD for services
const generateServiceSchema = (service: (typeof serviceData)[keyof typeof serviceData]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `Professional ${service.name}`,
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
  "description": service.description,
  "offers": {
    "@type": "Offer",
    "price": service.price,
    "priceCurrency": "GBP"
  }
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug as keyof typeof serviceData];
  if (!service) {
    return { title: 'Service Not Found | SRV Detailing' };
  }
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: service.canonical },
    openGraph: {
      title: service.title,
      description: service.description,
      url: service.canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Redirect old URLs to new nested structure
  if (slug in serviceRedirects) {
    redirect(serviceRedirects[slug]);
  }

  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;
  const structuredData = generateServiceSchema(service);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <IconComponent className="w-6 h-6 text-blue-300" />
            <span className="text-blue-200 font-semibold">Professional Service</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            {service.content.intro} Call <a href="tel:+447375759686" className="text-white font-bold underline">+44 7375 759686</a> for the ultimate solution.
          </p>
          
          <div className="flex gap-4">
            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
              <Phone className="w-5 h-5" />
              Call 07375 759686
            </a>
            <a href="/booking" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-transparent hover:text-white transition">
              Book Service
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is {service.name}?</h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p>{service.content.whatIs}</p>
          </div>
        </section>

        {'options' in service.content && (
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Service Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.content.options.map((option, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-2 border-slate-100 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{option.title}</h3>
                  <p className="text-sm text-blue-600 font-bold mb-2">{option.years}</p>
                  <p className="text-2xl font-bold text-slate-900 mb-4">{option.price}</p>
                  <p className="text-slate-600 flex-grow">{option.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {'process' in service.content && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Process</h2>
            <div className="space-y-4">
              {service.content.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {'includes' in service.content && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.content.includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="text-center py-12 bg-slate-900 text-white rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Contact us today to schedule your professional {service.name.toLowerCase()} service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447375759686" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold">
              <Phone className="w-5 h-5" />
              Call 07375 759686
            </a>
            <a href="/booking" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-transparent hover:text-white transition">
              Book Service
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}