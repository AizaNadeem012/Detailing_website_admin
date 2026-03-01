import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { manchesterCarDetailingPillar } from '@/data/manchester/car-detailing';

export const metadata: Metadata = {
  title: manchesterCarDetailingPillar.seo.title,
  description: manchesterCarDetailingPillar.seo.description,
  keywords: manchesterCarDetailingPillar.seo.keywords,
  alternates: { canonical: manchesterCarDetailingPillar.seo.canonical },
};

export default function ManchesterCarDetailingPage() {
  return <PillarPageTemplate data={manchesterCarDetailingPillar} location="Manchester" />;
}
