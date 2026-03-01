import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FaqPageTemplate } from '@/components/pages/FaqPageTemplate';
import { getFaqTopicBySlug, getAllFaqTopicSlugs } from '@/data/faq/faq-data';

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return getAllFaqTopicSlugs().map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const faqTopic = getFaqTopicBySlug(topic);
  if (!faqTopic) return {};
  return {
    title: faqTopic.seo.title,
    description: faqTopic.seo.description,
    keywords: faqTopic.seo.keywords,
    alternates: { canonical: faqTopic.seo.canonical },
  };
}

export default async function FaqTopicPage({ params }: Props) {
  const { topic } = await params;
  const faqTopic = getFaqTopicBySlug(topic);
  if (!faqTopic) notFound();
  return <FaqPageTemplate data={faqTopic} />;
}
