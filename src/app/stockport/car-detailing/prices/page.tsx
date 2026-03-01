import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { stockportDetailingPrices } from '@/data/stockport/car-detailing/prices';

export const metadata: Metadata = {
  title: stockportDetailingPrices.seo.title,
  description: stockportDetailingPrices.seo.description,
  keywords: stockportDetailingPrices.seo.keywords,
  alternates: { canonical: stockportDetailingPrices.seo.canonical },
};

export default function StockportDetailingPricesPage() {
  return <ServicePageTemplate data={stockportDetailingPrices} location="Stockport" />;
}
