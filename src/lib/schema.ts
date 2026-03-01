/**
 * schema.ts
 *
 * Schema.org JSON-LD generator functions for all SRV Detailing pages.
 *
 * Architecture:
 *  - `generatePageSchema(options)` — the PRIMARY export. Produces one consolidated
 *    `@graph` block per page containing Organization, AutoDetailing LocalBusiness,
 *    Service (optional), Article/BlogPosting (optional), BreadcrumbList, and
 *    FAQPage (optional). Use this in page templates.
 *  - Legacy individual generators (`generateBreadcrumbSchema`, `generateFaqSchema`,
 *    etc.) — kept for backward compatibility. Use on standalone pages that don't
 *    go through a template.
 *
 * Validation targets: Google Rich Results Test, Schema.org validator.
 */

import { BASE_URL, BUSINESS_NAME, PHONE_INTERNATIONAL, ADDRESS, GEO } from '@/data/constants';
import type { BreadcrumbItem, FaqItem } from '@/data/types';

// ─── Shared fragments ─────────────────────────────────────────────────────────

const OPENING_HOURS_SPEC = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday',
  ],
  opens: '00:00',
  closes: '23:59',
} as const;

const LOGO_IMAGE = {
  '@type': 'ImageObject',
  url: `${BASE_URL}/logo.png`,
  width: 512,
  height: 512,
} as const;

const SAME_AS = ['https://share.google/AZFyOF2xIb3XaZetX'];

// ─── Private graph-node builders (no @context — embedded inside @graph) ───────

function buildOrganizationNode() {
  return {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: BASE_URL,
    telephone: PHONE_INTERNATIONAL,
    logo: LOGO_IMAGE,
    sameAs: SAME_AS,
  };
}

function buildBusinessNode(overrides: {
  description?: string;
  name?: string;
  pageUrl?: string;
  geo?: { latitude: string; longitude: string };
  areaServed?: { '@type': string; name: string }[];
}) {
  return {
    '@type': 'AutoDetailing',
    // Shared @id across all pages — Google aggregates statements about the same entity
    '@id': `${BASE_URL}/#business`,
    name: overrides.name ?? BUSINESS_NAME,
    // url is always the homepage for the business entity
    url: BASE_URL,
    telephone: PHONE_INTERNATIONAL,
    priceRange: '££',
    image: `${BASE_URL}/mobile-van.jpg`,
    logo: LOGO_IMAGE,
    ...(overrides.description ? { description: overrides.description } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: overrides.geo?.latitude ?? GEO.latitude,
      longitude: overrides.geo?.longitude ?? GEO.longitude,
    },
    openingHoursSpecification: OPENING_HOURS_SPEC,
    sameAs: SAME_AS,
    ...(overrides.areaServed ? { areaServed: overrides.areaServed } : {}),
  };
}

function buildServiceNode(options: {
  name: string;
  description: string;
  pageUrl: string;
  price?: string;
  areaServed?: string;
}) {
  return {
    '@type': 'Service',
    '@id': `${BASE_URL}${options.pageUrl}#service`,
    name: `Professional ${options.name}`,
    description: options.description,
    url: `${BASE_URL}${options.pageUrl}`,
    // Reference back to the canonical business entity
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: options.areaServed
      ? { '@type': 'City', name: options.areaServed }
      : { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
    ...(options.price
      ? {
          offers: {
            '@type': 'Offer',
            price: options.price,
            priceCurrency: 'GBP',
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  };
}

function buildBreadcrumbNode(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

function buildFaqNode(faqs: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── Master page schema ───────────────────────────────────────────────────────

export interface PageSchemaOptions {
  /**
   * Relative URL path for the current page, e.g. '/manchester/car-detailing/ceramic-coating'
   * Used to build @id anchors and Service.url.
   */
  pageUrl: string;

  /** Breadcrumb trail for BreadcrumbList schema. Always required. */
  breadcrumbs: BreadcrumbItem[];

  /** FAQ items for FAQPage schema. Omit if the page has no FAQ section. */
  faqs?: FaqItem[];

  /** Service details for Service schema (service and pillar pages). */
  service?: {
    name: string;
    description: string;
    price?: string;
    /** City or area name, e.g. 'Manchester' */
    areaServed?: string;
  };

  /**
   * Override the business geo coordinates for area pages.
   * Allows Google to associate the local business entity with the specific area.
   */
  areaGeo?: { latitude: string; longitude: string };

  /**
   * Override the areaServed list on the LocalBusiness entity.
   * Defaults to Greater Manchester if omitted.
   */
  areasServed?: string[];

  /** Article/blog metadata for content pages. */
  article?: {
    title: string;
    description: string;
    publishedDate: string;
    updatedDate?: string;
    /** true for blog posts, false/omitted for guides and static articles */
    isBlogPosting?: boolean;
    articleSection?: string;
  };
}

/**
 * Generates a single consolidated JSON-LD `@graph` object for a page.
 *
 * Entities included:
 *  1. Organization        — always
 *  2. AutoDetailing       — always (LocalBusiness with full fields)
 *  3. Service             — when `options.service` is provided
 *  4. Article/BlogPosting — when `options.article` is provided
 *  5. BreadcrumbList      — always
 *  6. FAQPage             — when `options.faqs` has entries
 *
 * @example
 * const schema = generatePageSchema({
 *   pageUrl: '/manchester/car-detailing/ceramic-coating',
 *   breadcrumbs: data.breadcrumbs,
 *   faqs: data.faqs,
 *   service: { name: data.name, description: data.seo.description, price: data.schemaPrice, areaServed: 'Manchester' },
 *   areasServed: ['Manchester', 'Greater Manchester'],
 * });
 * // Render: <SchemaMarkup schemas={[schema]} />
 */
export function generatePageSchema(options: PageSchemaOptions): Record<string, unknown> {
  const graph: Record<string, unknown>[] = [];

  // 1. Organization — entity hub for the business
  graph.push(buildOrganizationNode());

  // 2. AutoDetailing LocalBusiness — page-level reinforcement of the root entity
  const areaServedList: { '@type': string; name: string }[] | undefined =
    options.areasServed?.map((name) => ({ '@type': 'AdministrativeArea', name })) ??
    (options.service?.areaServed
      ? [{ '@type': 'City', name: options.service.areaServed }]
      : undefined);

  graph.push(
    buildBusinessNode({
      description: options.service?.description,
      geo: options.areaGeo,
      areaServed: areaServedList,
    }),
  );

  // 3. Service entity (service and pillar pages)
  if (options.service) {
    graph.push(
      buildServiceNode({
        name: options.service.name,
        description: options.service.description,
        pageUrl: options.pageUrl,
        price: options.service.price,
        areaServed: options.service.areaServed,
      }),
    );
  }

  // 4. Article or BlogPosting (content pages)
  if (options.article) {
    const articleNode: Record<string, unknown> = {
      '@type': options.article.isBlogPosting ? 'BlogPosting' : 'Article',
      '@id': `${BASE_URL}${options.pageUrl}#article`,
      headline: options.article.title,
      description: options.article.description,
      url: `${BASE_URL}${options.pageUrl}`,
      datePublished: options.article.publishedDate,
      // Reference the canonical organization entity
      author: { '@id': `${BASE_URL}/#organization` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      image: `${BASE_URL}/mobile-van.jpg`,
    };
    if (options.article.updatedDate) articleNode.dateModified = options.article.updatedDate;
    if (options.article.articleSection) articleNode.articleSection = options.article.articleSection;
    graph.push(articleNode);
  }

  // 5. BreadcrumbList
  graph.push(buildBreadcrumbNode(options.breadcrumbs));

  // 6. FAQPage (only when FAQs exist)
  if (options.faqs && options.faqs.length > 0) {
    graph.push(buildFaqNode(options.faqs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

// ─── Legacy individual generators ─────────────────────────────────────────────
// Kept for backward compatibility. Used by Breadcrumbs.tsx, FaqAccordion.tsx,
// and any standalone pages that don't go through a main template.

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    ...buildBreadcrumbNode(items),
  };
}

export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    ...buildFaqNode(faqs),
  };
}

export function generateServiceSchema(options: {
  name: string;
  description: string;
  url: string;
  price?: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    ...buildServiceNode({ ...options, pageUrl: options.url }),
  };
}

export function generateLocalBusinessSchema(options: {
  name: string;
  url: string;
  description: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    ...buildBusinessNode({
      name: options.name,
      description: options.description,
      areaServed: options.areaServed?.map((name) => ({
        '@type': 'AdministrativeArea' as const,
        name,
      })),
    }),
  };
}

export function generateAreaSchema(options: {
  name: string;
  url: string;
  description: string;
  latitude: string;
  longitude: string;
}) {
  return {
    '@context': 'https://schema.org',
    ...buildBusinessNode({
      name: `${BUSINESS_NAME} — ${options.name}`,
      description: options.description,
      geo: { latitude: options.latitude, longitude: options.longitude },
      areaServed: [{ '@type': 'City' as const, name: options.name }],
    }),
  };
}

export function generateArticleSchema(options: {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  updatedDate?: string;
  author?: string;
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    datePublished: options.publishedDate,
    image: `${BASE_URL}/mobile-van.jpg`,
    author: {
      '@type': 'Organization',
      name: options.author || BUSINESS_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: BASE_URL,
      logo: LOGO_IMAGE,
    },
  };
  if (options.updatedDate) schema.dateModified = options.updatedDate;
  return schema;
}

export function generateBlogPostingSchema(options: {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  updatedDate?: string;
  author?: string;
  articleSection?: string;
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: options.title,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    datePublished: options.publishedDate,
    image: `${BASE_URL}/mobile-van.jpg`,
    ...(options.articleSection ? { articleSection: options.articleSection } : {}),
    author: {
      '@type': 'Organization',
      name: options.author || BUSINESS_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: BASE_URL,
      logo: LOGO_IMAGE,
    },
  };
  if (options.updatedDate) schema.dateModified = options.updatedDate;
  return schema;
}

export function generateImageGallerySchema(options: {
  name: string;
  description: string;
  url: string;
  images: { name: string; description: string; contentUrl: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: options.name,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    image: options.images.map((img) => ({
      '@type': 'ImageObject',
      name: img.name,
      description: img.description,
      contentUrl: img.contentUrl,
    })),
  };
}

export function generateImageObjectSchema(options: {
  contentUrl: string;
  name: string;
  width: number;
  height: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: options.contentUrl,
    name: options.name,
    description: options.name,
    width: { '@type': 'QuantitativeValue', value: options.width },
    height: { '@type': 'QuantitativeValue', value: options.height },
    encodingFormat: 'image/jpeg',
  };
}
