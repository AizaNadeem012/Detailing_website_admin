import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { leatherConditioningManchester } from '@/data/manchester/car-detailing/leather-conditioning';

export const metadata: Metadata = {
  title: leatherConditioningManchester.seo.title,
  description: leatherConditioningManchester.seo.description,
  keywords: leatherConditioningManchester.seo.keywords,
  alternates: { canonical: leatherConditioningManchester.seo.canonical },
};

export default function LeatherConditioningPage() {
  return <ServicePageTemplate data={leatherConditioningManchester} location="Manchester" />;
}
