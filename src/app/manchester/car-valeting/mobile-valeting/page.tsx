import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { mobileValetingManchester } from '@/data/manchester/car-valeting/mobile-valeting';

export const metadata: Metadata = {
  title: mobileValetingManchester.seo.title,
  description: mobileValetingManchester.seo.description,
  keywords: mobileValetingManchester.seo.keywords,
  alternates: { canonical: mobileValetingManchester.seo.canonical },
};

export default function MobileValetingPage() {
  return <ServicePageTemplate data={mobileValetingManchester} location="Manchester" />;
}
