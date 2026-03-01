import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { headlightRestorationStockport } from '@/data/stockport/car-detailing/headlight-restoration';

export const metadata: Metadata = {
  title: headlightRestorationStockport.seo.title,
  description: headlightRestorationStockport.seo.description,
  keywords: headlightRestorationStockport.seo.keywords,
  alternates: { canonical: headlightRestorationStockport.seo.canonical },
};

export default function StockportHeadlightRestorationPage() {
  return <ServicePageTemplate data={headlightRestorationStockport} location="Stockport" />;
}
