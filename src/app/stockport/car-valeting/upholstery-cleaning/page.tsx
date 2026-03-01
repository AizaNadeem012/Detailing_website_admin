import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { upholsteryCleaningStockport } from '@/data/stockport/car-valeting/upholstery-cleaning';

export const metadata: Metadata = {
  title: upholsteryCleaningStockport.seo.title,
  description: upholsteryCleaningStockport.seo.description,
  keywords: upholsteryCleaningStockport.seo.keywords,
  alternates: { canonical: upholsteryCleaningStockport.seo.canonical },
};

export default function StockportUpholsteryCleaningPage() {
  return <ServicePageTemplate data={upholsteryCleaningStockport} location="Stockport" />;
}
