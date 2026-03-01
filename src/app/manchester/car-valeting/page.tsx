import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { manchesterCarValetingPillar } from '@/data/manchester/car-valeting';

export const metadata: Metadata = {
  title: manchesterCarValetingPillar.seo.title,
  description: manchesterCarValetingPillar.seo.description,
  keywords: manchesterCarValetingPillar.seo.keywords,
  alternates: { canonical: manchesterCarValetingPillar.seo.canonical },
};

export default function ManchesterCarValetingPage() {
  return <PillarPageTemplate data={manchesterCarValetingPillar} location="Manchester" />;
}
