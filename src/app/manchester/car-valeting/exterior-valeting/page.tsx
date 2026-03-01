import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorValetingManchester } from '@/data/manchester/car-valeting/exterior-valeting';

export const metadata: Metadata = {
  title: exteriorValetingManchester.seo.title,
  description: exteriorValetingManchester.seo.description,
  keywords: exteriorValetingManchester.seo.keywords,
  alternates: { canonical: exteriorValetingManchester.seo.canonical },
};

export default function ExteriorValetingPage() {
  return <ServicePageTemplate data={exteriorValetingManchester} location="Manchester" />;
}
