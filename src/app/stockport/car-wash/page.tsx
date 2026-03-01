import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { carWashStockport } from '@/data/stockport/car-wash';

export const metadata: Metadata = {
  title: carWashStockport.seo.title,
  description: carWashStockport.seo.description,
  keywords: carWashStockport.seo.keywords,
  alternates: { canonical: carWashStockport.seo.canonical },
};

export default function StockportCarWashPage() {
  return <ServicePageTemplate data={carWashStockport} location="Stockport" />;
}
