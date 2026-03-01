import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { ceramicCoatingManchester } from '@/data/manchester/car-detailing/ceramic-coating';

export const metadata: Metadata = {
  title: ceramicCoatingManchester.seo.title,
  description: ceramicCoatingManchester.seo.description,
  keywords: ceramicCoatingManchester.seo.keywords,
  alternates: { canonical: ceramicCoatingManchester.seo.canonical },
};

export default function CeramicCoatingPage() {
  return <ServicePageTemplate data={ceramicCoatingManchester} location="Manchester" />;
}
