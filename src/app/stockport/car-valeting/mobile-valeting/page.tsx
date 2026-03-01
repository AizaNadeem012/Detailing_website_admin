import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { mobileValetingStockport } from '@/data/stockport/car-valeting/mobile-valeting';

export const metadata: Metadata = {
  title: mobileValetingStockport.seo.title,
  description: mobileValetingStockport.seo.description,
  keywords: mobileValetingStockport.seo.keywords,
  alternates: { canonical: mobileValetingStockport.seo.canonical },
};

export default function StockportMobileValetingPage() {
  return <ServicePageTemplate data={mobileValetingStockport} location="Stockport" />;
}
