import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── Primary crawlers ─────────────────────────────────────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          // Block parameterised URLs that create duplicate content
          '/*?*utm_',
          '/*?*ref=',
          '/*?*fbclid=',
          '/*?*gclid=',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/*?*utm_', '/*?*ref='],
      },
      // ─── All other legitimate crawlers ────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/*?*utm_',
          '/*?*ref=',
          '/*?*fbclid=',
          '/*?*gclid=',
        ],
      },
      // ─── AI training scrapers — deny by default ───────────────────────────
      // These bots scrape for LLM training data and do not contribute indexing.
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: ['/'],
      },
    ],
    sitemap: 'https://www.srvdetailing.co.uk/sitemap.xml',
    host: 'https://www.srvdetailing.co.uk',
  };
}
