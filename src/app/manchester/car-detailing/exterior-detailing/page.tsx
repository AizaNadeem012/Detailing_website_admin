import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorDetailingManchester } from '@/data/manchester/car-detailing/exterior-detailing';

export const metadata: Metadata = {
  title: exteriorDetailingManchester.seo.title,
  description: exteriorDetailingManchester.seo.description,
  keywords: exteriorDetailingManchester.seo.keywords,
  alternates: { canonical: exteriorDetailingManchester.seo.canonical },
};

export default function ExteriorDetailingPage() {
  return <ServicePageTemplate data={exteriorDetailingManchester} location="Manchester" />;
}
