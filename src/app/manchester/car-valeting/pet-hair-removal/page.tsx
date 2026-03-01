import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { petHairRemovalManchester } from '@/data/manchester/car-valeting/pet-hair-removal';

export const metadata: Metadata = {
  title: petHairRemovalManchester.seo.title,
  description: petHairRemovalManchester.seo.description,
  keywords: petHairRemovalManchester.seo.keywords,
  alternates: { canonical: petHairRemovalManchester.seo.canonical },
};

export default function PetHairRemovalPage() {
  return <ServicePageTemplate data={petHairRemovalManchester} location="Manchester" />;
}
