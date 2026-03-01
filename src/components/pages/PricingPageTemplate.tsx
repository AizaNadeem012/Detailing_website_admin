import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { PricingGrid } from '@/components/shared/PricingGrid';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { InternalLinkBlock } from '@/components/shared/InternalLinkBlock';
import { generateServiceSchema } from '@/lib/schema';
import type { PricingPageData } from '@/data/types';

interface PricingPageTemplateProps {
  data: PricingPageData;
}

export function PricingPageTemplate({ data }: PricingPageTemplateProps) {
  const serviceSchema = generateServiceSchema({
    name: `${data.title} Pricing`,
    description: data.seo.description,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[serviceSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge="Pricing"
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p>{data.introText}</p>
          </div>
        </section>

        <PricingGrid tiers={data.tiers} title="Our Packages" />
        <FaqAccordion faqs={data.faqs} />
        <InternalLinkBlock links={data.relatedLinks} />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
