import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { newCarProtectionManchester } from '@/data/manchester/car-detailing/new-car-protection';

export const metadata: Metadata = {
  title: newCarProtectionManchester.seo.title,
  description: newCarProtectionManchester.seo.description,
  keywords: newCarProtectionManchester.seo.keywords,
  alternates: { canonical: newCarProtectionManchester.seo.canonical },
};

export default function NewCarProtectionPage() {
  return <ServicePageTemplate data={newCarProtectionManchester} location="Manchester" />;
}
