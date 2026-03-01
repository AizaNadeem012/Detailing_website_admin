import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { CtaSection } from '@/components/shared/CtaSection';
import { Camera, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery — Our Work | SRV Detailing',
  description:
    'Browse our portfolio of car detailing and valeting results. Before and after photos from Manchester and Stockport showing paint correction, ceramic coating, and full valets.',
  keywords: ['detailing gallery', 'car care portfolio', 'our work'],
  alternates: { canonical: 'https://www.srvdetailing.co.uk/gallery' },
};

const galleries = [
  {
    title: 'Car Detailing Gallery',
    description:
      'Paint correction, ceramic coating, headlight restoration and interior detailing — see the transformations our detailing services deliver.',
    href: '/gallery/detailing',
    icon: Sparkles,
  },
  {
    title: 'Car Valeting Gallery',
    description:
      'Full valets, interior deep cleans, pet hair removal and odour treatment — browse our valeting before and after results.',
    href: '/gallery/valeting',
    icon: Camera,
  },
];

export default function GalleryHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <HeroSection
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' },
        ]}
        title="Our Work"
        description="Browse our portfolio of before and after transformations across car detailing and valeting services."
        badge="Gallery"
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {galleries.map((gallery) => (
            <Link
              key={gallery.href}
              href={gallery.href}
              className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 p-8 block group"
            >
              <gallery.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {gallery.title}
              </h2>
              <p className="text-muted-foreground">{gallery.description}</p>
            </Link>
          ))}
        </div>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
