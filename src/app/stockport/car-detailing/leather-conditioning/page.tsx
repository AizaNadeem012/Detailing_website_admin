import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { leatherConditioningStockport } from '@/data/stockport/car-detailing/leather-conditioning';

export const metadata: Metadata = {
  title: leatherConditioningStockport.seo.title,
  description: leatherConditioningStockport.seo.description,
  keywords: leatherConditioningStockport.seo.keywords,
  alternates: { canonical: leatherConditioningStockport.seo.canonical },
};

export default function StockportLeatherConditioningPage() {
  return <ServicePageTemplate data={leatherConditioningStockport} location="Stockport" />;
}
