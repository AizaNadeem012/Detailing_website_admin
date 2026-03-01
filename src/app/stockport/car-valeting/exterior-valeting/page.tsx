import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorValetingStockport } from '@/data/stockport/car-valeting/exterior-valeting';

export const metadata: Metadata = {
  title: exteriorValetingStockport.seo.title,
  description: exteriorValetingStockport.seo.description,
  keywords: exteriorValetingStockport.seo.keywords,
  alternates: { canonical: exteriorValetingStockport.seo.canonical },
};

export default function StockportExteriorValetingPage() {
  return <ServicePageTemplate data={exteriorValetingStockport} location="Stockport" />;
}
