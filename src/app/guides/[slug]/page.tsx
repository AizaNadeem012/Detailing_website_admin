import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuidePageTemplate } from '@/components/pages/GuidePageTemplate';
import { getGuideBySlug, getAllGuideSlugs } from '@/data/guides/guides-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.seo.title,
    description: guide.seo.description,
    keywords: guide.seo.keywords,
    alternates: { canonical: guide.seo.canonical },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuidePageTemplate data={guide} />;
}
