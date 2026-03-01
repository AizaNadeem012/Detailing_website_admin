import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Sparkles, Car } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Pricing | Car Detailing & Valeting Prices | SRV Detailing',
  description:
    'Transparent pricing for car detailing and valeting in Manchester and Stockport. No hidden costs. View our packages and book today.',
  alternates: { canonical: 'https://www.srvdetailing.co.uk/pricing' },
};

export default function PricingHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Transparent pricing for all services. No hidden costs — just honest pricing for professional work.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link
            href="/pricing/car-detailing"
            className="group p-8 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                Car Detailing Prices
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Paint correction, ceramic coating, interior detailing and new car protection packages.
            </p>
            <p className="text-lg font-bold text-primary mb-4">From £250</p>
            <span className="inline-flex items-center gap-1 text-primary font-semibold">
              View detailing prices <ChevronRight className="w-4 h-4" />
            </span>
          </Link>

          <Link
            href="/pricing/car-valeting"
            className="group p-8 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                Car Valeting Prices
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Mini valets, full valets and premium valeting packages for regular maintenance.
            </p>
            <p className="text-lg font-bold text-primary mb-4">From £50</p>
            <span className="inline-flex items-center gap-1 text-primary font-semibold">
              View valeting prices <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
