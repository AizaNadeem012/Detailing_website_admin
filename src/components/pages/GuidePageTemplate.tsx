import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { InternalLinkBlock } from '@/components/shared/InternalLinkBlock';
import { generateArticleSchema } from '@/lib/schema';
import type { GuidePageData } from '@/data/types';

interface GuidePageTemplateProps {
  data: GuidePageData;
}

export function GuidePageTemplate({ data }: GuidePageTemplateProps) {
  const articleSchema = generateArticleSchema({
    title: data.title,
    description: data.seo.description,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    publishedDate: data.publishedDate,
    updatedDate: data.updatedDate,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[articleSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge="Expert Guide"
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <ContentSections sections={data.contentSections} />
        <FaqAccordion faqs={data.faqs} />
        <InternalLinkBlock links={data.relatedLinks} />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
