import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { miniValetManchester } from '@/data/manchester/car-valeting/mini-valet';

export const metadata: Metadata = {
  title: miniValetManchester.seo.title,
  description: miniValetManchester.seo.description,
  keywords: miniValetManchester.seo.keywords,
  alternates: { canonical: miniValetManchester.seo.canonical },
};

export default function MiniValetPage() {
  return <ServicePageTemplate data={miniValetManchester} location="Manchester" />;
}
