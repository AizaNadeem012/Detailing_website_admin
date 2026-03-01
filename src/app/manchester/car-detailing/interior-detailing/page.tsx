import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorDetailingManchester } from '@/data/manchester/car-detailing/interior-detailing';

export const metadata: Metadata = {
  title: interiorDetailingManchester.seo.title,
  description: interiorDetailingManchester.seo.description,
  keywords: interiorDetailingManchester.seo.keywords,
  alternates: { canonical: interiorDetailingManchester.seo.canonical },
};

export default function InteriorDetailingPage() {
  return <ServicePageTemplate data={interiorDetailingManchester} location="Manchester" />;
}
