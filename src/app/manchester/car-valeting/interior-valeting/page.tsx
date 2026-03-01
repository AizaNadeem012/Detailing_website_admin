import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorValetingManchester } from '@/data/manchester/car-valeting/interior-valeting';

export const metadata: Metadata = {
  title: interiorValetingManchester.seo.title,
  description: interiorValetingManchester.seo.description,
  keywords: interiorValetingManchester.seo.keywords,
  alternates: { canonical: interiorValetingManchester.seo.canonical },
};

export default function InteriorValetingPage() {
  return <ServicePageTemplate data={interiorValetingManchester} location="Manchester" />;
}
