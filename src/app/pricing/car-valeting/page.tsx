import type { Metadata } from 'next';
import { PricingPageTemplate } from '@/components/pages/PricingPageTemplate';
import { valetingPricing } from '@/data/pricing/pricing-data';

export const metadata: Metadata = {
  title: valetingPricing.seo.title,
  description: valetingPricing.seo.description,
  keywords: valetingPricing.seo.keywords,
  alternates: { canonical: valetingPricing.seo.canonical },
};

export default function ValetingPricingPage() {
  return <PricingPageTemplate data={valetingPricing} />;
}
