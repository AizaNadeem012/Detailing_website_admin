import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { paintCorrectionManchester } from '@/data/manchester/car-detailing/paint-correction';

export const metadata: Metadata = {
  title: paintCorrectionManchester.seo.title,
  description: paintCorrectionManchester.seo.description,
  keywords: paintCorrectionManchester.seo.keywords,
  alternates: { canonical: paintCorrectionManchester.seo.canonical },
};

export default function PaintCorrectionPage() {
  return <ServicePageTemplate data={paintCorrectionManchester} location="Manchester" />;
}
