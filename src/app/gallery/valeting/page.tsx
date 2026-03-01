import type { Metadata } from 'next';
import { GalleryPageTemplate } from '@/components/pages/GalleryPageTemplate';
import { valetingGalleryData } from '@/data/gallery/gallery-data';

export const metadata: Metadata = {
  title: valetingGalleryData.seo.title,
  description: valetingGalleryData.seo.description,
  keywords: valetingGalleryData.seo.keywords,
  alternates: { canonical: valetingGalleryData.seo.canonical },
};

export default function ValetingGalleryPage() {
  return <GalleryPageTemplate data={valetingGalleryData} />;
}
