import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { newCarProtectionStockport } from '@/data/stockport/car-detailing/new-car-protection';

export const metadata: Metadata = {
  title: newCarProtectionStockport.seo.title,
  description: newCarProtectionStockport.seo.description,
  keywords: newCarProtectionStockport.seo.keywords,
  alternates: { canonical: newCarProtectionStockport.seo.canonical },
};

export default function StockportNewCarProtectionPage() {
  return <ServicePageTemplate data={newCarProtectionStockport} location="Stockport" />;
}
