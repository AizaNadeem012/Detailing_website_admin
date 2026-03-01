import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComparePageTemplate } from '@/components/pages/ComparePageTemplate';
import { getComparisonBySlug, getAllComparisonSlugs } from '@/data/compare/comparisons-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};
  return {
    title: comparison.seo.title,
    description: comparison.seo.description,
    keywords: comparison.seo.keywords,
    alternates: { canonical: comparison.seo.canonical },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();
  return <ComparePageTemplate data={comparison} />;
}
