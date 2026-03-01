import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { InternalLinkBlock } from '@/components/shared/InternalLinkBlock';
import { generateFaqSchema } from '@/lib/schema';
import type { FaqTopicData } from '@/data/types';

interface FaqPageTemplateProps {
  data: FaqTopicData;
}

export function FaqPageTemplate({ data }: FaqPageTemplateProps) {
  const faqSchema = generateFaqSchema(data.faqs);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[faqSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge="FAQ"
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <FaqAccordion faqs={data.faqs} title={data.title} />
        <InternalLinkBlock links={data.relatedLinks} />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
