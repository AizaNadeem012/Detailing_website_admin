import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { guidesData } from '@/data/guides/guides-data';

export const metadata: Metadata = {
  title: 'Car Care Guides | Expert Advice | SRV Detailing',
  description:
    'Expert guides on car detailing, valeting, ceramic coating and paint correction. Learn from 22+ years of professional experience.',
  alternates: { canonical: 'https://www.srvdetailing.co.uk/guides' },
};

export default function GuidesHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Expert Car Care Guides</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Everything you need to know about car detailing, valeting, ceramic coatings and paint care — from a professional with 22+ years of experience.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidesData.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>
              </div>
              <p className="text-slate-600 mb-4">{guide.seo.description}</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Read guide <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
