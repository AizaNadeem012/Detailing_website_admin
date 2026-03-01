import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { carWashManchester } from '@/data/manchester/car-wash';

export const metadata: Metadata = {
  title: carWashManchester.seo.title,
  description: carWashManchester.seo.description,
  keywords: carWashManchester.seo.keywords,
  alternates: { canonical: carWashManchester.seo.canonical },
};

export default function ManchesterCarWashPage() {
  return <ServicePageTemplate data={carWashManchester} location="Manchester" />;
}
