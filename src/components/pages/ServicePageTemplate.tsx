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
import { BUSINESS_NAME } from '@/data/constants';
import type { ServicePageData } from '@/data/types';

interface ServicePageTemplateProps {
  data: ServicePageData;
  location: string;
}

export function ServicePageTemplate({ data, location }: ServicePageTemplateProps) {
  // Derive topical cluster from canonical URL for automatic cross-linking
  const clusterId = inferClusterId(data.seo.canonical);
  const currentHref = data.seo.canonical.replace('https://www.srvdetailing.co.uk', '');

  /**
   * Single consolidated @graph schema for this page:
   *   Organization + AutoDetailing LocalBusiness + Service + BreadcrumbList + FAQPage
   *
   * We pass suppressBreadcrumbSchema to HeroSection and renderSchema={false} to
   * FaqAccordion so those components don't output duplicate standalone scripts.
   */
  const pageSchema = generatePageSchema({
    pageUrl: currentHref,
    breadcrumbs: data.breadcrumbs,
    faqs: data.faqs,
    service: {
      name: `${data.name} in ${location}`,
      description: data.seo.description,
      price: data.schemaPrice,
      areaServed: location,
    },
    areasServed: [location, 'Greater Manchester', 'Stockport'],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      {/*
        Single @graph schema per page:
          1. Organization       — entity hub
          2. AutoDetailing      — LocalBusiness with opening hours, logo, image, sameAs
          3. Service            — the specific service described on this page
          4. BreadcrumbList     — rendered here; suppressed in HeroSection/Breadcrumbs
          5. FAQPage            — rendered here; suppressed in FaqAccordion
      */}
      <SchemaMarkup schemas={[pageSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge={`${BUSINESS_NAME} — Professional Service`}
        suppressBreadcrumbSchema
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/*
          ServiceImageBlock:
          - lazy loaded (below fold) so priority=false
          - imageKey from data overrides auto-selection when explicitly set
          - caption adds human-readable context without inflating alt text
        */}
        <ServiceImageBlock
          location={location}
          service={data.name}
          imageKey={data.imageKey}
          priority={false}
          caption={`${data.name} — serving ${location} and surrounding areas`}
          className="mb-16"
        />

        <ContentSections sections={data.contentSections} />
        {/* renderSchema=false: FAQPage is already in the @graph above */}
        <FaqAccordion faqs={data.faqs} renderSchema={false} />
        {/*
          RelatedContent uses topical cluster auto-linking when a clusterId is
          available (derived from canonical URL), falling back to explicit
          relatedLinks. showCrossLinks adds pillar-to-pillar links below the grid
          (e.g. Car Detailing → Car Valeting, → Manchester Areas).
        */}
        {clusterId ? (
          <RelatedContent
            clusterId={clusterId}
            currentHref={currentHref}
            showCrossLinks
            title="Related Services"
          />
        ) : (
          <RelatedContent links={data.relatedLinks} title="Related Services" />
        )}
        <CtaSection serviceName={data.name} />
      </main>

      <Footer />
    </div>
  );
}
