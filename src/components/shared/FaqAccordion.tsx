import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FaqItem } from '@/data/types';
import { generateFaqSchema } from '@/lib/schema';

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  /**
   * Set to false when the parent page template already outputs FAQPage inside a
   * consolidated @graph block (via generatePageSchema), to avoid duplicate
   * FAQPage scripts on the same page.
   * @default true
   */
  renderSchema?: boolean;
}

export function FaqAccordion({
  faqs,
  title = 'Frequently Asked Questions',
  renderSchema = true,
}: FaqAccordionProps) {
  if (faqs.length === 0) return null;

  const schema = renderSchema ? generateFaqSchema(faqs) : null;

  return (
    <section className="mb-16">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-lg font-semibold text-slate-800">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
