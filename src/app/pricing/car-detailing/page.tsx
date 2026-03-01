import type { Metadata } from 'next';
import { PricingPageTemplate } from '@/components/pages/PricingPageTemplate';
import { detailingPricing } from '@/data/pricing/pricing-data';

export const metadata: Metadata = {
  title: detailingPricing.seo.title,
  description: detailingPricing.seo.description,
  keywords: detailingPricing.seo.keywords,
  alternates: { canonical: detailingPricing.seo.canonical },
};

export default function DetailingPricingPage() {
  return <PricingPageTemplate data={detailingPricing} />;
}
