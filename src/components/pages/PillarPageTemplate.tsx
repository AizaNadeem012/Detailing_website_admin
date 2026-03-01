import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { RelatedContent } from '@/components/shared/RelatedContent';
import { ServiceGrid } from '@/components/shared/ServiceGrid';
import { generatePageSchema } from '@/lib/schema';
import { inferClusterId } from '@/lib/linkClusters';
import type { PillarPageData } from '@/data/types';

interface PillarPageTemplateProps {
  data: PillarPageData;
  location: string;
}

export function PillarPageTemplate({ data, location }: PillarPageTemplateProps) {
  const clusterId = inferClusterId(data.seo.canonical);
  const currentHref = data.seo.canonical.replace('https://www.srvdetailing.co.uk', '');

  /**
   * Consolidated @graph for pillar pages:
   *   Organization + AutoDetailing LocalBusiness + Service + BreadcrumbList + FAQPage
   */
  const pageSchema = generatePageSchema({
    pageUrl: currentHref,
    breadcrumbs: data.breadcrumbs,
    faqs: data.faqs,
    service: {
      name: data.name,
      description: data.seo.description,
      areaServed: location,
    },
    areasServed: [location, 'Greater Manchester', 'Stockport'],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      {/*
        Single @graph schema per pillar page:
          1. Organization       — entity hub
          2. AutoDetailing      — LocalBusiness with full fields
          3. Service            — the service category described on this page
          4. BreadcrumbList     — rendered here; suppressed in HeroSection/Breadcrumbs
          5. FAQPage            — rendered here; suppressed in FaqAccordion
      */}
      <SchemaMarkup schemas={[pageSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge={`${location} Services`}
        suppressBreadcrumbSchema
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p>{data.introText}</p>
          </div>
        </section>

        <ServiceGrid services={data.services} title={`Our ${data.name} Services`} />
        <ContentSections sections={data.contentSections} />
        {/* renderSchema=false: FAQPage is already in the @graph above */}
        <FaqAccordion faqs={data.faqs} renderSchema={false} />
        {clusterId ? (
          <RelatedContent
            clusterId={clusterId}
            currentHref={currentHref}
            showCrossLinks
            title="Explore More Services"
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
