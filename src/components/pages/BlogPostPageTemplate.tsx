import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { InternalLinkBlock } from '@/components/shared/InternalLinkBlock';
import { generateBlogPostingSchema } from '@/lib/schema';
import type { BlogPostData } from '@/data/types';

interface BlogPostPageTemplateProps {
  data: BlogPostData;
}

export function BlogPostPageTemplate({ data }: BlogPostPageTemplateProps) {
  const blogSchema = generateBlogPostingSchema({
    title: data.title,
    description: data.seo.description,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    publishedDate: data.publishedDate,
    updatedDate: data.updatedDate,
    author: data.author,
    articleSection: data.category,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[blogSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge="Blog"
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full">
            {data.category}
          </span>
          <time dateTime={data.publishedDate}>
            {new Date(data.publishedDate).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>By {data.author}</span>
        </div>

        <ContentSections sections={data.contentSections} />
        <FaqAccordion faqs={data.faqs} />
        <InternalLinkBlock links={data.relatedLinks} />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
