import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { fullValetManchester } from '@/data/manchester/car-valeting/full-valet';

export const metadata: Metadata = {
  title: fullValetManchester.seo.title,
  description: fullValetManchester.seo.description,
  keywords: fullValetManchester.seo.keywords,
  alternates: { canonical: fullValetManchester.seo.canonical },
};

export default function FullValetPage() {
  return <ServicePageTemplate data={fullValetManchester} location="Manchester" />;
}
