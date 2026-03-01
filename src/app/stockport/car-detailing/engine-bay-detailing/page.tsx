import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { engineBayDetailingStockport } from '@/data/stockport/car-detailing/engine-bay-detailing';

export const metadata: Metadata = {
  title: engineBayDetailingStockport.seo.title,
  description: engineBayDetailingStockport.seo.description,
  keywords: engineBayDetailingStockport.seo.keywords,
  alternates: { canonical: engineBayDetailingStockport.seo.canonical },
};

export default function StockportEngineBayDetailingPage() {
  return <ServicePageTemplate data={engineBayDetailingStockport} location="Stockport" />;
}
