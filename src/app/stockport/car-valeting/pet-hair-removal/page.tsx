import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { petHairRemovalStockport } from '@/data/stockport/car-valeting/pet-hair-removal';

export const metadata: Metadata = {
  title: petHairRemovalStockport.seo.title,
  description: petHairRemovalStockport.seo.description,
  keywords: petHairRemovalStockport.seo.keywords,
  alternates: { canonical: petHairRemovalStockport.seo.canonical },
};

export default function StockportPetHairRemovalPage() {
  return <ServicePageTemplate data={petHairRemovalStockport} location="Stockport" />;
}
