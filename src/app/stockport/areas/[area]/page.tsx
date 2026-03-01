import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AreaPageTemplate } from '@/components/pages/AreaPageTemplate';
import { getStockportAreaBySlug, getAllStockportAreaSlugs } from '@/data/stockport/areas/areas-data';

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return getAllStockportAreaSlugs().map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const data = getStockportAreaBySlug(area);
  if (!data) return {};
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: { canonical: data.seo.canonical },
  };
}

export default async function StockportAreaPage({ params }: Props) {
  const { area } = await params;
  const data = getStockportAreaBySlug(area);
  if (!data) notFound();
  return <AreaPageTemplate data={data} />;
}
