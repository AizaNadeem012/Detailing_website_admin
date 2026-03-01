import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { swirlMarkRemovalManchester } from '@/data/manchester/car-detailing/swirl-mark-removal';

export const metadata: Metadata = {
  title: swirlMarkRemovalManchester.seo.title,
  description: swirlMarkRemovalManchester.seo.description,
  keywords: swirlMarkRemovalManchester.seo.keywords,
  alternates: { canonical: swirlMarkRemovalManchester.seo.canonical },
};

export default function SwirlMarkRemovalPage() {
  return <ServicePageTemplate data={swirlMarkRemovalManchester} location="Manchester" />;
}
