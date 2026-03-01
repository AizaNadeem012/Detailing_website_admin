import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { odourRemovalManchester } from '@/data/manchester/car-valeting/odour-removal';

export const metadata: Metadata = {
  title: odourRemovalManchester.seo.title,
  description: odourRemovalManchester.seo.description,
  keywords: odourRemovalManchester.seo.keywords,
  alternates: { canonical: odourRemovalManchester.seo.canonical },
};

export default function OdourRemovalPage() {
  return <ServicePageTemplate data={odourRemovalManchester} location="Manchester" />;
}
