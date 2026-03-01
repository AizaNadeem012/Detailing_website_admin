import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorValetingStockport } from '@/data/stockport/car-valeting/interior-valeting';

export const metadata: Metadata = {
  title: interiorValetingStockport.seo.title,
  description: interiorValetingStockport.seo.description,
  keywords: interiorValetingStockport.seo.keywords,
  alternates: { canonical: interiorValetingStockport.seo.canonical },
};

export default function StockportInteriorValetingPage() {
  return <ServicePageTemplate data={interiorValetingStockport} location="Stockport" />;
}
