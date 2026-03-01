import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { odourRemovalStockport } from '@/data/stockport/car-valeting/odour-removal';

export const metadata: Metadata = {
  title: odourRemovalStockport.seo.title,
  description: odourRemovalStockport.seo.description,
  keywords: odourRemovalStockport.seo.keywords,
  alternates: { canonical: odourRemovalStockport.seo.canonical },
};

export default function StockportOdourRemovalPage() {
  return <ServicePageTemplate data={odourRemovalStockport} location="Stockport" />;
}
