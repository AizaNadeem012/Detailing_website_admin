import { type LucideIcon } from 'lucide-react';

// --- Image Keys ---

/**
 * Which of the 3 shared service images to use on a given page.
 * 'exterior' = porsche-foam, 'interior' = bmw-interior, 'results' = mustang-rear
 * Omit to let inferImageKey() pick automatically from the service name.
 */
export type ServiceImageKey = 'exterior' | 'interior' | 'results';

// --- SEO & Navigation ---

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface InternalLink {
  label: string;
  href: string;
  description?: string;
}

// --- Content Blocks ---

export interface ContentSection {
  type: 'text' | 'list' | 'process' | 'checklist' | 'comparison';
  heading: string;
  /** Single paragraph — use for short body copy */
  body?: string;
  /** Multiple paragraphs — use for definition / long-form sections */
  bodyParagraphs?: string[];
  items?: string[];
  /** Used with type:'comparison' — renders a styled 3-column table */
  comparison?: {
    headers: [string, string, string];
    rows: [string, string, string][];
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PriceTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  vehicleSizes?: { size: string; price: string }[];
}

// --- Page Data Types ---

export interface ServicePageData {
  slug: string;
  name: string;
  seo: SeoMeta;
  icon: LucideIcon;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  contentSections: ContentSection[];
  faqs: FaqItem[];
  relatedLinks: InternalLink[];
  schemaPrice?: string;
  /** Which shared image to display. Defaults to auto-inferred from service name. */
  imageKey?: ServiceImageKey;
}

export interface PillarPageData {
  slug: string;
  name: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  introText: string;
  services: {
    slug: string;
    name: string;
    description: string;
    icon: LucideIcon;
    href: string;
  }[];
  contentSections: ContentSection[];
  faqs: FaqItem[];
  relatedLinks: InternalLink[];
}

export interface LocationHubData {
  slug: string;
  name: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  introText: string;
  pillars: {
    name: string;
    description: string;
    href: string;
    icon: LucideIcon;
  }[];
  areas: {
    name: string;
    slug: string;
    href: string;
  }[];
  contentSections: ContentSection[];
  faqs: FaqItem[];
}

export interface AreaPageData {
  slug: string;
  name: string;
  location: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  contentSections: ContentSection[];
  postcodeAreas: string[];
  coordinates: { latitude: string; longitude: string };
  relatedLinks: InternalLink[];
  faqs: FaqItem[];
  /** Which shared image to display. Defaults to 'exterior'. */
  imageKey?: ServiceImageKey;
  /** Google Maps embed URL for this area. Rendered below the postcode section. */
  mapEmbedUrl?: string;
}

export interface GuidePageData {
  slug: string;
  title: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  contentSections: ContentSection[];
  faqs: FaqItem[];
  relatedLinks: InternalLink[];
  publishedDate: string;
  updatedDate?: string;
}

export interface ComparePageData {
  slug: string;
  title: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  optionA: { name: string; pros: string[]; cons: string[] };
  optionB: { name: string; pros: string[]; cons: string[] };
  comparisonTable: { feature: string; optionA: string; optionB: string }[];
  verdict: string;
  contentSections: ContentSection[];
  faqs: FaqItem[];
  relatedLinks: InternalLink[];
}

export interface FaqTopicData {
  slug: string;
  title: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  faqs: FaqItem[];
  relatedLinks: InternalLink[];
}

export interface PricingPageData {
  slug: string;
  title: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  introText: string;
  tiers: PriceTier[];
  faqs: FaqItem[];
  relatedLinks: InternalLink[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  service: string;
  vehicle?: string;
  location?: string;
}

export interface GalleryPageData {
  slug: string;
  title: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroDescription: string;
  items: GalleryItem[];
  relatedLinks: InternalLink[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  seo: SeoMeta;
  breadcrumbs: BreadcrumbItem[];
  category: string;
  heroTitle: string;
  heroDescription: string;
  contentSections: ContentSection[];
  faqs: FaqItem[];
  relatedLinks: InternalLink[];
  publishedDate: string;
  updatedDate?: string;
  author: string;
}
