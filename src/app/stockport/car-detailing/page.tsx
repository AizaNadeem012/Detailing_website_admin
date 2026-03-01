import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { stockportCarDetailingPillar } from '@/data/stockport/car-detailing';

export const metadata: Metadata = {
  title: stockportCarDetailingPillar.seo.title,
  description: stockportCarDetailingPillar.seo.description,
  keywords: stockportCarDetailingPillar.seo.keywords,
  alternates: { canonical: stockportCarDetailingPillar.seo.canonical },
};

export default function StockportCarDetailingPage() {
  return <PillarPageTemplate data={stockportCarDetailingPillar} location="Stockport" />;
}
