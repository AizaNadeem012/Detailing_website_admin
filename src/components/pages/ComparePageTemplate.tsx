import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { InternalLinkBlock } from '@/components/shared/InternalLinkBlock';
import { generateArticleSchema } from '@/lib/schema';
import { CheckCircle, XCircle } from 'lucide-react';
import type { ComparePageData } from '@/data/types';

interface ComparePageTemplateProps {
  data: ComparePageData;
}

export function ComparePageTemplate({ data }: ComparePageTemplateProps) {
  const articleSchema = generateArticleSchema({
    title: data.title,
    description: data.seo.description,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    publishedDate: '2025-01-01',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[articleSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge="Comparison"
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Comparison Cards */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          {[data.optionA, data.optionB].map((option) => (
            <div key={option.name} className="bg-white rounded-xl shadow-md border border-slate-100 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{option.name}</h2>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-green-700 uppercase mb-2">Pros</h3>
                <ul className="space-y-2">
                  {option.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-red-700 uppercase mb-2">Cons</h3>
                <ul className="space-y-2">
                  {option.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Comparison Table */}
        {data.comparisonTable.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">{data.optionA.name}</th>
                    <th className="text-left p-4 font-semibold">{data.optionB.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparisonTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                      <td className="p-4 text-slate-700">{row.optionA}</td>
                      <td className="p-4 text-slate-700">{row.optionB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Verdict */}
        <section className="mb-16 bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Verdict</h2>
          <p className="text-lg text-slate-700 leading-relaxed">{data.verdict}</p>
        </section>

        <ContentSections sections={data.contentSections} />
        <FaqAccordion faqs={data.faqs} />
        <InternalLinkBlock links={data.relatedLinks} />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
