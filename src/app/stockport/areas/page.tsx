import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/shared/CtaSection';
import { stockportAreas } from '@/data/stockport/areas/areas-data';

export const metadata: Metadata = {
  title: 'Areas We Serve in Stockport | SRV Detailing',
  description:
    'SRV Detailing provides mobile car detailing and valeting across Stockport. Find your local area for services, postcodes and booking information.',
  keywords: ['car detailing stockport areas', 'mobile valeting stockport', 'car care stockport'],
  alternates: { canonical: 'https://www.srvdetailing.co.uk/stockport/areas' },
};

export default function StockportAreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li><Link href="/stockport" className="hover:text-primary">Stockport</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li className="text-foreground font-medium">Areas</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Areas We Serve Across <span className="text-primary">Stockport</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based locally in Stockport, we provide mobile car detailing and valeting across every SK postcode area. Select your area below.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {stockportAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/stockport/areas/${area.slug}`}
              className="group bg-white hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-xl p-5 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    {area.postcodeAreas.join(', ')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <CtaSection serviceName="Car Care in Stockport" />
      </main>

      <Footer />
    </div>
  );
}
