import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { stockportValetingPrices } from '@/data/stockport/car-valeting/prices';

export const metadata: Metadata = {
  title: stockportValetingPrices.seo.title,
  description: stockportValetingPrices.seo.description,
  keywords: stockportValetingPrices.seo.keywords,
  alternates: { canonical: stockportValetingPrices.seo.canonical },
};

export default function StockportValetingPricesPage() {
  return <ServicePageTemplate data={stockportValetingPrices} location="Stockport" />;
}
