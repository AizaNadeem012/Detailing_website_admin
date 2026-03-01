import type { Metadata } from 'next';
import { GalleryPageTemplate } from '@/components/pages/GalleryPageTemplate';
import { detailingGalleryData } from '@/data/gallery/gallery-data';

export const metadata: Metadata = {
  title: detailingGalleryData.seo.title,
  description: detailingGalleryData.seo.description,
  keywords: detailingGalleryData.seo.keywords,
  alternates: { canonical: detailingGalleryData.seo.canonical },
};

export default function DetailingGalleryPage() {
  return <GalleryPageTemplate data={detailingGalleryData} />;
}
