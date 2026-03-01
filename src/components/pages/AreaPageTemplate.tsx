import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ServiceImageBlock } from '@/components/shared/ServiceImageBlock';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { RelatedContent } from '@/components/shared/RelatedContent';
import { generatePageSchema } from '@/lib/schema';
import { inferClusterId } from '@/lib/linkClusters';
import { MapEmbed } from '@/components/shared/MapEmbed';
import type { AreaPageData } from '@/data/types';

interface AreaPageTemplateProps {
  data: AreaPageData;
}

export function AreaPageTemplate({ data }: AreaPageTemplateProps) {
  const clusterId = inferClusterId(data.seo.canonical);
  const currentHref = data.seo.canonical.replace('https://www.srvdetailing.co.uk', '');

  /**
   * Consolidated @graph for area pages:
   *   Organization + AutoDetailing (area-specific geo) + BreadcrumbList + FAQPage
   *
   * Area pages use the area's coordinates so the LocalBusiness entity is
   * geo-associated with the specific area, not just the business HQ.
   */
  const pageSchema = generatePageSchema({
    pageUrl: currentHref,
    breadcrumbs: data.breadcrumbs,
    faqs: data.faqs,
    areaGeo: data.coordinates,
    areasServed: [data.name, data.location, 'Greater Manchester'],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      {/*
        Single @graph schema per area page:
          1. Organization       — entity hub
          2. AutoDetailing      — LocalBusiness with area-specific geo
          3. BreadcrumbList     — rendered here; suppressed in HeroSection/Breadcrumbs
          4. FAQPage            — rendered here; suppressed in FaqAccordion
      */}
      <SchemaMarkup schemas={[pageSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge={`Serving ${data.name}`}
        suppressBreadcrumbSchema
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/*
          Area pages always use the exterior image — it shows a car being washed
          at a customer's location, which reinforces the mobile service proposition.
          Override per-area with data.imageKey if a different image fits better.
        */}
        <ServiceImageBlock
          location={data.name}
          service={`mobile car valeting and detailing`}
          imageKey={data.imageKey ?? 'exterior'}
          priority={false}
          caption={`Professional mobile car care in ${data.name}, ${data.location}`}
          className="mb-16"
        />

        {data.postcodeAreas.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Postcodes We Cover
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.postcodeAreas.map((postcode) => (
                <span
                  key={postcode}
                  className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg"
                >
                  {postcode}
                </span>
              ))}
            </div>
          </section>
        )}

        {data.mapEmbedUrl && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Where We Serve in {data.name}
            </h2>
            <MapEmbed
              embedUrl={data.mapEmbedUrl}
              title={`Map of ${data.name}, ${data.location}`}
            />
          </section>
        )}

        <ContentSections sections={data.contentSections} />
        {/* renderSchema=false: FAQPage is already in the @graph above */}
        <FaqAccordion faqs={data.faqs} renderSchema={false} />
        {/*
          RelatedContent: for area pages, cluster links show sibling areas
          and cross-links point to the Manchester/Stockport service pillars.
        */}
        {clusterId ? (
          <RelatedContent
            clusterId={clusterId}
            currentHref={currentHref}
            showCrossLinks
            title="More Areas We Cover"
            limit={8}
          />
        ) : (
          <RelatedContent links={data.relatedLinks} title="Related Pages" />
        )}
        <CtaSection serviceName={`Car Care in ${data.name}`} />
      </main>

      <Footer />
    </div>
  );
}
