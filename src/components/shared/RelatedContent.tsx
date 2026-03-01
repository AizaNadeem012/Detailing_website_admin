import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getClusterLinks, getCrossClusterLinks, type ClusterLink } from '@/lib/linkClusters';
import type { InternalLink } from '@/data/types';

interface ResolvedLink {
  href: string;
  label: string;
  description?: string;
  priority: 1 | 2 | 3;
}

interface RelatedContentProps {
  /** Explicit list of links to display (takes priority over clusterId) */
  links?: InternalLink[];
  /** Cluster ID to auto-populate links from */
  clusterId?: string;
  /** Current page href — excluded from cluster results */
  currentHref?: string;
  /** Show cross-cluster pillar links (e.g. detailing ↔ valeting ↔ areas) */
  showCrossLinks?: boolean;
  /** Max links to show from the cluster */
  limit?: number;
  title?: string;
  className?: string;
}

/**
 * RelatedContent — topical cluster-aware related pages component.
 *
 * Renders a card grid of related service/area pages sourced either from
 * explicit `links` or automatically from a topical cluster via `clusterId`.
 * Cross-cluster pillar links (e.g. "Car Valeting Manchester") appear below
 * the main grid as pill links when `showCrossLinks` is true.
 *
 * @example — cluster-driven (preferred):
 * <RelatedContent
 *   clusterId="manchester-detailing"
 *   currentHref="/manchester/car-detailing/ceramic-coating"
 *   showCrossLinks
 * />
 *
 * @example — explicit links:
 * <RelatedContent links={data.relatedLinks} title="Also Available" />
 */
export function RelatedContent({
  links,
  clusterId,
  currentHref = '',
  showCrossLinks = false,
  limit = 6,
  title = 'Related Services',
  className = '',
}: RelatedContentProps) {
  // Resolve the link list: explicit links take priority, then cluster auto-links
  const resolvedLinks: ResolvedLink[] = links
    ? links.map((l) => ({ ...l, priority: 2 as const }))
    : clusterId
    ? getClusterLinks(clusterId, currentHref, limit)
    : [];

  const crossLinks: ResolvedLink[] =
    showCrossLinks && clusterId ? getCrossClusterLinks(clusterId) : [];

  if (resolvedLinks.length === 0 && crossLinks.length === 0) return null;

  return (
    <section className={`mb-16 ${className}`} aria-label={title}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{title}</h2>

      {resolvedLinks.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resolvedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col justify-between p-5 bg-white rounded-xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-card-hover transition-all"
            >
              <div>
                <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors leading-snug block mb-2">
                  {link.label}
                </span>
                {link.description && (
                  <p className="text-sm text-slate-500 leading-relaxed">{link.description}</p>
                )}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more{' '}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      )}

      {crossLinks.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-100">
          <span className="text-sm text-slate-500 self-center mr-1">Also explore:</span>
          {crossLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 bg-primary/5 hover:bg-primary/10 text-primary font-medium rounded-lg text-sm transition-colors"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
