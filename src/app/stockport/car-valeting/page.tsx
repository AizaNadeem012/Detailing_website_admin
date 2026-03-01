import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { stockportCarValetingPillar } from '@/data/stockport/car-valeting';

export const metadata: Metadata = {
  title: stockportCarValetingPillar.seo.title,
  description: stockportCarValetingPillar.seo.description,
  keywords: stockportCarValetingPillar.seo.keywords,
  alternates: { canonical: stockportCarValetingPillar.seo.canonical },
};

export default function StockportCarValetingPage() {
  return <PillarPageTemplate data={stockportCarValetingPillar} location="Stockport" />;
}
