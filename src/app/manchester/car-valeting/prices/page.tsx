import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { valetingPricesManchester } from '@/data/manchester/car-valeting/prices';

export const metadata: Metadata = {
  title: valetingPricesManchester.seo.title,
  description: valetingPricesManchester.seo.description,
  keywords: valetingPricesManchester.seo.keywords,
  alternates: { canonical: valetingPricesManchester.seo.canonical },
};

export default function ValetingPricesPage() {
  return <ServicePageTemplate data={valetingPricesManchester} location="Manchester" />;
}
