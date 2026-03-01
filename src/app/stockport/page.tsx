import type { Metadata } from 'next';
import { LocationHubTemplate } from '@/components/pages/LocationHubTemplate';
import { stockportHub } from '@/data/stockport/hub';

export const metadata: Metadata = {
  title: stockportHub.seo.title,
  description: stockportHub.seo.description,
  keywords: stockportHub.seo.keywords,
  alternates: { canonical: stockportHub.seo.canonical },
};

export default function StockportPage() {
  return <LocationHubTemplate data={stockportHub} />;
}
