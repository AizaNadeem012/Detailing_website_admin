import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { fullValetStockport } from '@/data/stockport/car-valeting/full-valet';

export const metadata: Metadata = {
  title: fullValetStockport.seo.title,
  description: fullValetStockport.seo.description,
  keywords: fullValetStockport.seo.keywords,
  alternates: { canonical: fullValetStockport.seo.canonical },
};

export default function StockportFullValetPage() {
  return <ServicePageTemplate data={fullValetStockport} location="Stockport" />;
}
