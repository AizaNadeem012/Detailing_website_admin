import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { miniValetStockport } from '@/data/stockport/car-valeting/mini-valet';

export const metadata: Metadata = {
  title: miniValetStockport.seo.title,
  description: miniValetStockport.seo.description,
  keywords: miniValetStockport.seo.keywords,
  alternates: { canonical: miniValetStockport.seo.canonical },
};

export default function StockportMiniValetPage() {
  return <ServicePageTemplate data={miniValetStockport} location="Stockport" />;
}
