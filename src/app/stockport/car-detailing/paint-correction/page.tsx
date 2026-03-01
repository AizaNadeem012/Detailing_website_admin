import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { paintCorrectionStockport } from '@/data/stockport/car-detailing/paint-correction';

export const metadata: Metadata = {
  title: paintCorrectionStockport.seo.title,
  description: paintCorrectionStockport.seo.description,
  keywords: paintCorrectionStockport.seo.keywords,
  alternates: { canonical: paintCorrectionStockport.seo.canonical },
};

export default function StockportPaintCorrectionPage() {
  return <ServicePageTemplate data={paintCorrectionStockport} location="Stockport" />;
}
