import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, HelpCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { faqTopicsData } from '@/data/faq/faq-data';

export const metadata: Metadata = {
  title: 'FAQ | Car Detailing & Valeting Questions | SRV Detailing',
  description:
    'Frequently asked questions about car detailing, valeting, ceramic coating, pricing and booking. Expert answers from SRV Detailing.',
  alternates: { canonical: 'https://www.srvdetailing.co.uk/faq' },
};

export default function FaqHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Find answers to the most common questions about our car detailing, valeting, and protection services.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqTopicsData.map((topic) => (
            <Link
              key={topic.slug}
              href={`/faq/${topic.slug}`}
              className="group p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {topic.title}
                </h2>
              </div>
              <p className="text-slate-600 mb-4">{topic.seo.description}</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                View questions <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
