import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { ceramicCoatingStockport } from '@/data/stockport/car-detailing/ceramic-coating';

export const metadata: Metadata = {
  title: ceramicCoatingStockport.seo.title,
  description: ceramicCoatingStockport.seo.description,
  keywords: ceramicCoatingStockport.seo.keywords,
  alternates: { canonical: ceramicCoatingStockport.seo.canonical },
};

export default function StockportCeramicCoatingPage() {
  return <ServicePageTemplate data={ceramicCoatingStockport} location="Stockport" />;
}
