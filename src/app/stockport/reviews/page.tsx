import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Customer Reviews Stockport | SRV Detailing',
  description:
    'Read customer reviews for SRV Detailing in Stockport. 5-star rated mobile car detailing and valeting service across all SK postcodes.',
  keywords: ['srv detailing reviews stockport', 'car detailing reviews stockport', 'car valeting reviews stockport'],
  alternates: { canonical: 'https://www.srvdetailing.co.uk/stockport/reviews' },
};

const reviews = [
  {
    name: 'Tom W.',
    location: 'Bramhall, SK7',
    service: 'Ceramic Coating',
    rating: 5,
    text: 'Had my Mercedes E-Class ceramic coated by SRV. The finish is stunning and the hydrophobic effect is exactly as described. Being local to Stockport meant quick turnaround too.',
  },
  {
    name: 'Helen B.',
    location: 'Cheadle Hulme, SK8',
    service: 'Full Valet',
    rating: 5,
    text: 'Regular customer now — monthly full valets on the family car. Always thorough, always on time, and the car always looks showroom-fresh when they are done.',
  },
  {
    name: 'Mark S.',
    location: 'Marple, SK6',
    service: 'Paint Correction',
    rating: 5,
    text: 'Living near the Peak District means my car takes a beating. After paint correction and a ceramic coating, it looks brand new and so much easier to keep clean.',
  },
  {
    name: 'Rachel D.',
    location: 'Heaton Moor, SK4',
    service: 'Interior Detailing',
    rating: 5,
    text: 'Fantastic job on my car interior. Every surface cleaned and conditioned properly. You can tell they have years of experience — the attention to detail is remarkable.',
  },
  {
    name: 'Chris L.',
    location: 'Hazel Grove, SK7',
    service: 'Mini Valet',
    rating: 5,
    text: 'Great for a quick refresh. Came to my house, did a brilliant job in about an hour, and the price was very reasonable. Will use again for sure.',
  },
  {
    name: 'Karen F.',
    location: 'Edgeley, SK3',
    service: 'Pet Hair Removal',
    rating: 5,
    text: 'Two labradors and a car full of hair — SRV got every last strand out. The car smells fresh and looks clean for the first time in months. Amazing service.',
  },
];

export default function StockportReviewsPage() {
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
              <li className="text-foreground font-medium">Reviews</li>
            </ol>
          </nav>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stockport Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our Stockport customers say about our locally based mobile car detailing and valeting service.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-foreground">{review.name}</p>
              <p className="text-sm text-muted-foreground">
                {review.location} &middot; {review.service}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <a
            href="https://share.google/PfnRYKg7cZGw1Ozcq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            See all our Google Reviews
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <CtaSection serviceName="Car Care in Stockport" />
      </main>

      <Footer />
    </div>
  );
}
