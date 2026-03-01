import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { engineBayDetailingManchester } from '@/data/manchester/car-detailing/engine-bay-detailing';

export const metadata: Metadata = {
  title: engineBayDetailingManchester.seo.title,
  description: engineBayDetailingManchester.seo.description,
  keywords: engineBayDetailingManchester.seo.keywords,
  alternates: { canonical: engineBayDetailingManchester.seo.canonical },
};

export default function EngineBayDetailingPage() {
  return <ServicePageTemplate data={engineBayDetailingManchester} location="Manchester" />;
}
