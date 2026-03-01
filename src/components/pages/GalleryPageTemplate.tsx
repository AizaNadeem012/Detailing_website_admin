import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { CtaSection } from '@/components/shared/CtaSection';
import { InternalLinkBlock } from '@/components/shared/InternalLinkBlock';
import { generateImageGallerySchema } from '@/lib/schema';
import type { GalleryPageData } from '@/data/types';

interface GalleryPageTemplateProps {
  data: GalleryPageData;
}

export function GalleryPageTemplate({ data }: GalleryPageTemplateProps) {
  const gallerySchema = generateImageGallerySchema({
    name: data.title,
    description: data.seo.description,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    images: data.items.map((item) => ({
      name: item.title,
      description: item.description,
      contentUrl: item.afterImage,
    })),
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[gallerySchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge="Gallery"
      />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl shadow-lg overflow-hidden border border-border"
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.beforeImage}
                    alt={`Before: ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute top-2 left-2 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                    BEFORE
                  </span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.afterImage}
                    alt={`After: ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute top-2 left-2 px-2 py-1 bg-primary text-white text-xs font-bold rounded">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                    {item.service}
                  </span>
                  {item.vehicle && <span>{item.vehicle}</span>}
                  {item.location && <span>• {item.location}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <InternalLinkBlock links={data.relatedLinks} />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
