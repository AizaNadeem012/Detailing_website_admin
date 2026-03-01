import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { swirlMarkRemovalStockport } from '@/data/stockport/car-detailing/swirl-mark-removal';

export const metadata: Metadata = {
  title: swirlMarkRemovalStockport.seo.title,
  description: swirlMarkRemovalStockport.seo.description,
  keywords: swirlMarkRemovalStockport.seo.keywords,
  alternates: { canonical: swirlMarkRemovalStockport.seo.canonical },
};

export default function StockportSwirlMarkRemovalPage() {
  return <ServicePageTemplate data={swirlMarkRemovalStockport} location="Stockport" />;
}
