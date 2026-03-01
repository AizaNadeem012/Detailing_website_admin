import type { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, MapPin, Clock, CheckCircle, Car, Sparkles } from 'lucide-react';
import { notFound, redirect } from 'next/navigation';

// 301 redirects — old flat URLs to new nested structure
const locationRedirects: Record<string, string> = {
  'manchester-city-centre': '/manchester/areas/city-centre',
  'didsbury': '/manchester/areas/didsbury',
  'chorlton': '/manchester/areas/chorlton',
  'salford': '/manchester/areas/salford',
  'trafford': '/manchester/areas/trafford',
  'sale': '/manchester/areas/sale',
  'altrincham': '/manchester/areas/altrincham',
  'oldham': '/manchester/areas/oldham',
  'rochdale': '/manchester/areas/rochdale',
  'bury': '/manchester/areas/bury',
  'bolton': '/manchester/areas/bolton',
  'wigan': '/manchester/areas/wigan',
  'tameside': '/manchester/areas/tameside',
  'cheadle': '/stockport/areas/cheadle',
  'bramhall': '/stockport/areas/bramhall',
};

// Location data mapping
const locationData = {
  'manchester-city-centre': {
    name: 'Manchester City Centre',
    title: 'Mobile Car Valeting in Manchester City Centre',
    description: 'Professional mobile car valeting in Manchester City Centre. We come to your office, apartment, or parking location.',
    canonical: 'https://www.srvdetailing.co.uk/locations/manchester-city-centre',
    coordinates: { latitude: '53.4808', longitude: '-2.2426' },
    postcodeAreas: ['M1', 'M2', 'M3', 'M4'],
    content: {
      intro: 'Experience convenient mobile car valeting in the heart of Manchester with SRV Detailing. Based in Stockport for over 22 years, we bring professional care to your office, apartment, or any city centre location.',
      workplace: 'We service vehicles at major office complexes across the city centre while you work. No disruption, just a pristine car ready for your commute home.',
      apartment: 'Living in a city centre apartment? We bring professional valeting to your designated parking area, providing premium care where others can\'t.'
    }
  },
  'didsbury': {
    name: 'Didsbury',
    title: 'Mobile Car Valeting in Didsbury',
    description: 'Professional mobile car valeting in Didsbury. We come to your home or workplace. 22 years experience.',
    canonical: 'https://www.srvdetailing.co.uk/locations/didsbury',
    coordinates: { latitude: '53.4167', longitude: '-2.2333' },
    postcodeAreas: ['M20', 'M14'],
    content: {
      intro: 'SRV Detailing brings professional mobile car valeting to Didsbury residents. Our fully equipped mobile unit travels directly to your driveway or workplace.',
      residential: 'Perfect for Didsbury families who value convenience and premium car care without leaving home.',
      business: 'We service local businesses and their employee vehicles with our professional mobile detailing service.'
    }
  },
  'cheadle': {
    name: 'Cheadle',
    title: 'Mobile Car Valeting in Cheadle',
    description: 'Professional mobile car valeting in Cheadle. Premium service for Cheadle Hulme, Cheadle Village and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/cheadle',
    coordinates: { latitude: '53.3767', longitude: '-2.2167' },
    postcodeAreas: ['SK8'],
    content: {
      intro: 'Premium mobile car valeting service for Cheadle residents. We serve Cheadle Hulme, Cheadle Village, Gatley, and Heald Green with our professional mobile detailing service.',
      affluent: 'Tailored service for Cheadle\'s affluent community with attention to detail that matches the area\'s standards.',
      villages: 'Serving all Cheadle villages with convenient mobile valeting that comes to your location.'
    }
  },
  'chorlton': {
    name: 'Chorlton',
    title: 'Mobile Car Valeting in Chorlton',
    description: 'Professional mobile car valeting in Chorlton cum Hardy. We come to your home or workplace in Chorlton.',
    canonical: 'https://www.srvdetailing.co.uk/locations/chorlton',
    coordinates: { latitude: '53.4333', longitude: '-2.2833' },
    postcodeAreas: ['M21'],
    content: {
      intro: 'Mobile car valeting service for Chorlton cum Hardy residents. We bring our professional detailing service directly to your home or workplace in Chorlton.',
      bohemian: 'Perfect for Chorlton\'s vibrant community with our eco-friendly and professional mobile detailing approach.',
      convenient: 'Convenient mobile service that fits into your Chorlton lifestyle without the need to visit a car wash.'
    }
  },
  'sale': {
    name: 'Sale',
    title: 'Mobile Car Valeting in Sale',
    description: 'Professional mobile car valeting in Sale, Greater Manchester. We service Sale Water Park, Trafford Park and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/sale',
    coordinates: { latitude: '53.4256', longitude: '-2.3241' },
    postcodeAreas: ['M33'],
    content: {
      intro: 'Professional mobile car valeting service for Sale residents and businesses. We serve Sale Water Park, Trafford Park, and surrounding Trafford areas.',
      waterPark: 'Convenient service for Sale Water Park residents and visitors with our mobile detailing unit.',
      commercial: 'We service Sale\'s commercial areas and business parks with professional mobile valeting.'
    }
  },
  'altrincham': {
    name: 'Altrincham',
    title: 'Mobile Car Valeting in Altrincham',
    description: 'Professional mobile car valeting in Altrincham. We come to your home, office or the Trafford Centre.',
    canonical: 'https://www.srvdetailing.co.uk/locations/altrincham',
    coordinates: { latitude: '53.3833', longitude: '-2.3500' },
    postcodeAreas: ['WA14', 'WA15'],
    content: {
      intro: 'Mobile car valeting service for Altrincham and surrounding areas. We come to your home, office, or even the Trafford Centre for your convenience.',
      shopping: 'Perfect service for Trafford Centre shoppers and Altrincham\'s retail community.',
      residential: 'Premium mobile service for Altrincham\'s residential areas and nearby villages.'
    }
  },
  'bramhall': {
    name: 'Bramhall',
    title: 'Mobile Car Valeting in Bramhall',
    description: 'Professional mobile car valeting in Bramhall, Stockport. We service Bramhall, Cheadle Hulme and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/bramhall',
    coordinates: { latitude: '53.3500', longitude: '-2.1667' },
    postcodeAreas: ['SK7'],
    content: {
      intro: 'Professional mobile car valeting service for Bramhall and surrounding Stockport areas. We bring our mobile detailing service to your driveway or workplace.',
      stockport: 'Based in Stockport, we provide convenient mobile service for Bramhall residents and local businesses.',
      premium: 'Premium detailing service tailored for Bramhall\'s residential community and business sector.'
    }
  },
  'salford': {
    name: 'Salford',
    title: 'Mobile Car Valeting in Salford',
    description: 'Professional mobile car valeting in Salford. We service Salford Quays, Ordsall and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/salford',
    coordinates: { latitude: '53.4833', longitude: '-2.2667' },
    postcodeAreas: ['M5', 'M6', 'M7'],
    content: {
      intro: 'Professional mobile car valeting service for Salford residents and businesses. We serve Salford Quays, Ordsall, and surrounding areas.',
      quays: 'Specialized service for Salford Quays with our fully mobile detailing unit that can access waterfront locations.',
      urban: 'Perfect mobile solution for Salford\'s urban environment and residential communities.'
    }
  },
  'bolton': {
    name: 'Bolton',
    title: 'Mobile Car Valeting in Bolton',
    description: 'Professional mobile car valeting in Bolton. We come to your home or workplace in Bolton and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/bolton',
    coordinates: { latitude: '53.5767', longitude: '-2.4267' },
    postcodeAreas: ['BL1', 'BL2', 'BL3'],
    content: {
      intro: 'Professional mobile car valeting service for Bolton residents and businesses. We bring our fully equipped mobile unit to your home or workplace.',
      residential: 'Perfect for Bolton families who want convenient, professional car care without leaving home.',
      commercial: 'We service Bolton businesses and their employee vehicles with our mobile detailing service.'
    }
  },
  'bury': {
    name: 'Bury',
    title: 'Mobile Car Valeting in Bury',
    description: 'Professional mobile car valeting in Bury. We service Bury, Radcliffe and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/bury',
    coordinates: { latitude: '53.5933', longitude: '-2.2967' },
    postcodeAreas: ['BL8', 'BL9'],
    content: {
      intro: 'Professional mobile car valeting service for Bury and surrounding areas. We bring our mobile detailing service to your doorstep.',
      town: 'Quality results for Bury residents with our convenient mobile valeting service.',
      reliable: 'Reliable, professional service for the Bury community and surrounding towns.'
    }
  },
  'oldham': {
    name: 'Oldham',
    title: 'Mobile Car Valeting in Oldham',
    description: 'Professional mobile car valeting in Oldham. We come to your home or workplace across Oldham and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/oldham',
    coordinates: { latitude: '53.5408', longitude: '-2.1111' },
    postcodeAreas: ['OL1', 'OL2', 'OL3', 'OL4'],
    content: {
      intro: 'Professional mobile car valeting service for Oldham residents and businesses. We travel to your location with our fully equipped mobile unit.',
      experienced: 'Expert vehicle care for Oldham\'s community with over 22 years of experience.',
      convenient: 'Convenient mobile service that saves you time and effort compared to traditional car washes.'
    }
  },
  'rochdale': {
    name: 'Rochdale',
    title: 'Mobile Car Valeting in Rochdale',
    description: 'Professional mobile car valeting in Rochdale. We service Rochdale, Middleton and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/rochdale',
    coordinates: { latitude: '53.6097', longitude: '-2.1576' },
    postcodeAreas: ['OL12', 'OL16'],
    content: {
      intro: 'Professional mobile car valeting service for Rochdale and surrounding areas. We bring professional detailing directly to your location.',
      comprehensive: 'Comprehensive mobile service for Rochdale residents and businesses.',
      quality: 'Quality results that match Rochdale\'s standards for vehicle care.'
    }
  },
  'tameside': {
    name: 'Tameside',
    title: 'Mobile Car Valeting in Tameside',
    description: 'Professional mobile car valeting in Tameside. We service Ashton-under-Lyne, Stalybridge, Hyde and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/tameside',
    coordinates: { latitude: '53.4833', longitude: '-2.0833' },
    postcodeAreas: ['OL6', 'OL7', 'SK15', 'SK16'],
    content: {
      intro: 'Professional mobile car valeting service across Tameside. We serve Ashton-under-Lyne, Stalybridge, Hyde, and surrounding areas.',
      local: 'Local Tameside service with 22+ years of experience in the area.',
      comprehensive: 'Comprehensive mobile detailing service for Tameside\'s residential and commercial sectors.'
    }
  },
  'trafford': {
    name: 'Trafford',
    title: 'Mobile Car Valeting in Trafford',
    description: 'Professional mobile car valeting in Trafford. We service Trafford Park, Stretford, Urmston and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/trafford',
    coordinates: { latitude: '53.4403', longitude: '-2.3233' },
    postcodeAreas: ['M17', 'M32', 'M41'],
    content: {
      intro: 'Professional mobile car valeting service for Trafford residents and businesses. We serve Trafford Park, Stretford, Urmston, and surrounding areas.',
      industrial: 'Specialized service for Trafford\'s industrial and commercial areas.',
      residential: 'Quality mobile valeting for Trafford\'s residential communities.'
    }
  },
  'wigan': {
    name: 'Wigan',
    title: 'Mobile Car Valeting in Wigan',
    description: 'Professional mobile car valeting in Wigan. We come to your home or workplace across Wigan and surrounding areas.',
    canonical: 'https://www.srvdetailing.co.uk/locations/wigan',
    coordinates: { latitude: '53.5450', longitude: '-2.6325' },
    postcodeAreas: ['WN1', 'WN2', 'WN3'],
    content: {
      intro: 'Professional mobile car valeting service for Wigan and surrounding areas. We bring our mobile detailing service directly to your location.',
      convenient: 'Convenient mobile service for Wigan residents and businesses.',
      professional: 'Professional results that bring the showroom experience to your doorstep.'
    }
  }
};

// Schema.org JSON-LD for locations
const generateLocationSchema = (location: (typeof locationData)[keyof typeof locationData]) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `SRV Detailing - ${location.name}`,
  "telephone": "+447375759686",
  "url": "https://www.srvdetailing.co.uk/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": location.name,
    "addressRegion": "Greater Manchester",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": location.coordinates.latitude,
    "longitude": location.coordinates.longitude
  },
  "areaServed": `${location.name} and surrounding areas`
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locationData[slug as keyof typeof locationData];
  if (!location) {
    return { title: 'Location Not Found | SRV Detailing' };
  }
  return {
    title: `${location.title} | SRV Detailing`,
    description: location.description,
    alternates: { canonical: location.canonical },
    openGraph: {
      title: `${location.title} | SRV Detailing`,
      description: location.description,
      url: location.canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${location.title} | SRV Detailing`,
      description: location.description,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Redirect old URLs to new nested structure
  if (slug in locationRedirects) {
    redirect(locationRedirects[slug]);
  }

  const location = locationData[slug as keyof typeof locationData];

  if (!location) {
    notFound();
  }

  const structuredData = generateLocationSchema(location);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Serving {location.postcodeAreas.join(', ')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {location.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {location.content.intro} Call <a href="tel:+447375759686" className="text-primary font-bold underline">+44 7375 759686</a> to book.
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
            <p>SRV Detailing provides professional mobile car valeting across {location.name} and surrounding areas. Our fully equipped mobile unit travels directly to your preferred location.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-2" />
                22+ Years Experience
              </h3>
              <p className="text-muted-foreground">
                Two decades of professional experience in car detailing across Greater Manchester
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Car className="w-6 h-6 text-primary mr-2" />
                Mobile Service
              </h3>
              <p className="text-muted-foreground">
                Fully equipped mobile unit with water and power - we come to your location
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Sparkles className="w-6 h-6 text-primary mr-2" />
                Premium Products
              </h3>
              <p className="text-muted-foreground">
                Eco-friendly, professional-grade products that are safe for your vehicle
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 text-primary mr-2" />
                Reliable Service
              </h3>
              <p className="text-muted-foreground">
                Consistent, high-quality results with our professional detailers
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}