import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { detailingPricesManchester } from '@/data/manchester/car-detailing/prices';

export const metadata: Metadata = {
  title: detailingPricesManchester.seo.title,
  description: detailingPricesManchester.seo.description,
  keywords: detailingPricesManchester.seo.keywords,
  alternates: { canonical: detailingPricesManchester.seo.canonical },
};

export default function DetailingPricesPage() {
  return <ServicePageTemplate data={detailingPricesManchester} location="Manchester" />;
}
