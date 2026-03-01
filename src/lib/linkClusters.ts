/**
 * linkClusters.ts
 *
 * Topical authority cluster definitions for EEAT internal linking.
 * Each cluster groups semantically related pages that should cross-link,
 * reinforcing topic authority signals for Google.
 *
 * Usage:
 *   import { getClusterLinks, getCrossClusterLinks } from '@/lib/linkClusters';
 *   const related = getClusterLinks('manchester-detailing', '/manchester/car-detailing/ceramic-coating');
 */

export interface ClusterLink {
  href: string;
  label: string;
  description: string;
  /** 1 = highest priority, 3 = lowest */
  priority: 1 | 2 | 3;
}

export interface TopicalCluster {
  id: string;
  name: string;
  pillarHref: string;
  links: ClusterLink[];
  /** Cluster IDs this cluster cross-links to (pillar ↔ pillar) */
  crossLinks: string[];
}

// ─── Manchester Car Detailing Cluster ────────────────────────────────────────

const manchesterDetailingCluster: TopicalCluster = {
  id: 'manchester-detailing',
  name: 'Car Detailing in Manchester',
  pillarHref: '/manchester/car-detailing',
  crossLinks: ['manchester-valeting', 'manchester-areas'],
  links: [
    {
      href: '/manchester/car-detailing',
      label: 'Car Detailing Manchester',
      description: 'Professional car detailing services across Greater Manchester.',
      priority: 1,
    },
    {
      href: '/manchester/car-detailing/ceramic-coating',
      label: 'Ceramic Coating Manchester',
      description: 'Nano-ceramic paint protection lasting 2–5 years with a hydrophobic finish.',
      priority: 1,
    },
    {
      href: '/manchester/car-detailing/paint-correction',
      label: 'Paint Correction Manchester',
      description: 'Machine polishing to remove swirl marks, scratches and oxidation.',
      priority: 1,
    },
    {
      href: '/manchester/car-detailing/interior-detailing',
      label: 'Interior Detailing Manchester',
      description: 'Deep interior clean restoring seats, carpets, and trim to showroom condition.',
      priority: 2,
    },
    {
      href: '/manchester/car-detailing/exterior-detailing',
      label: 'Exterior Detailing Manchester',
      description: 'Full exterior paint decontamination, polish, and protection.',
      priority: 2,
    },
    {
      href: '/manchester/car-detailing/new-car-protection',
      label: 'New Car Protection Manchester',
      description: 'Protect your new car from day one with ceramic coating or paint protection film.',
      priority: 2,
    },
    {
      href: '/manchester/car-detailing/swirl-mark-removal',
      label: 'Swirl Mark Removal Manchester',
      description: 'Specialist machine polishing to eliminate swirl marks and buffer trails.',
      priority: 2,
    },
    {
      href: '/manchester/car-detailing/headlight-restoration',
      label: 'Headlight Restoration Manchester',
      description: 'Restore cloudy or yellowed headlights to crystal clarity, improving visibility.',
      priority: 3,
    },
    {
      href: '/manchester/car-detailing/engine-bay-detailing',
      label: 'Engine Bay Detailing Manchester',
      description: 'Professional engine bay degreasing, cleaning, and dressing.',
      priority: 3,
    },
    {
      href: '/manchester/car-detailing/leather-conditioning',
      label: 'Leather Conditioning Manchester',
      description: 'Nourish and protect leather seats and trim to prevent cracking.',
      priority: 3,
    },
    {
      href: '/manchester/car-detailing/prices',
      label: 'Car Detailing Prices Manchester',
      description: 'Transparent pricing for all professional car detailing services.',
      priority: 2,
    },
  ],
};

// ─── Manchester Car Valeting Cluster ─────────────────────────────────────────

const manchesterValetingCluster: TopicalCluster = {
  id: 'manchester-valeting',
  name: 'Car Valeting in Manchester',
  pillarHref: '/manchester/car-valeting',
  crossLinks: ['manchester-detailing', 'manchester-areas'],
  links: [
    {
      href: '/manchester/car-valeting',
      label: 'Car Valeting Manchester',
      description: 'Professional mobile car valeting services across Greater Manchester.',
      priority: 1,
    },
    {
      href: '/manchester/car-valeting/full-valet',
      label: 'Full Valet Manchester',
      description: 'Complete inside and outside valet — the most comprehensive single service.',
      priority: 1,
    },
    {
      href: '/manchester/car-valeting/mobile-valeting',
      label: 'Mobile Valeting Manchester',
      description: 'We come to your home or workplace — no need to travel.',
      priority: 1,
    },
    {
      href: '/manchester/car-valeting/mini-valet',
      label: 'Mini Valet Manchester',
      description: 'Quick interior and exterior refresh — ideal for regular maintenance.',
      priority: 2,
    },
    {
      href: '/manchester/car-valeting/interior-valeting',
      label: 'Interior Valeting Manchester',
      description: 'Thorough interior clean covering seats, carpets, dashboard, and trim.',
      priority: 2,
    },
    {
      href: '/manchester/car-valeting/exterior-valeting',
      label: 'Exterior Valeting Manchester',
      description: 'Hand wash, clay bar treatment, and protective wax or sealant.',
      priority: 2,
    },
    {
      href: '/manchester/car-valeting/pet-hair-removal',
      label: 'Pet Hair Removal Manchester',
      description: 'Specialist pet hair extraction from fabric seats, carpets, and boot liners.',
      priority: 2,
    },
    {
      href: '/manchester/car-valeting/odour-removal',
      label: 'Odour Removal Manchester',
      description: 'Ozone treatment and deep clean to permanently eliminate stubborn smells.',
      priority: 3,
    },
    {
      href: '/manchester/car-valeting/upholstery-cleaning',
      label: 'Upholstery Cleaning Manchester',
      description: 'Hot water extraction for fabric seats, headliners, and carpets.',
      priority: 3,
    },
    {
      href: '/manchester/car-valeting/prices',
      label: 'Car Valeting Prices Manchester',
      description: 'Transparent pricing for all mobile car valeting services.',
      priority: 2,
    },
  ],
};

// ─── Stockport Car Detailing Cluster ─────────────────────────────────────────

const stockportDetailingCluster: TopicalCluster = {
  id: 'stockport-detailing',
  name: 'Car Detailing in Stockport',
  pillarHref: '/stockport/car-detailing',
  crossLinks: ['stockport-valeting', 'stockport-areas'],
  links: [
    {
      href: '/stockport/car-detailing',
      label: 'Car Detailing Stockport',
      description: 'Professional car detailing services across Stockport and surrounding areas.',
      priority: 1,
    },
    {
      href: '/stockport/car-detailing/ceramic-coating',
      label: 'Ceramic Coating Stockport',
      description: 'Nano-ceramic paint protection lasting 2–5 years with a hydrophobic finish.',
      priority: 1,
    },
    {
      href: '/stockport/car-detailing/paint-correction',
      label: 'Paint Correction Stockport',
      description: 'Machine polishing to remove swirl marks, scratches and oxidation.',
      priority: 1,
    },
    {
      href: '/stockport/car-detailing/interior-detailing',
      label: 'Interior Detailing Stockport',
      description: 'Deep interior clean restoring seats, carpets, and trim to showroom condition.',
      priority: 2,
    },
    {
      href: '/stockport/car-detailing/exterior-detailing',
      label: 'Exterior Detailing Stockport',
      description: 'Full exterior paint decontamination, polish, and protection.',
      priority: 2,
    },
    {
      href: '/stockport/car-detailing/new-car-protection',
      label: 'New Car Protection Stockport',
      description: 'Protect your new car from day one with ceramic coating on delivery day.',
      priority: 2,
    },
    {
      href: '/stockport/car-detailing/swirl-mark-removal',
      label: 'Swirl Mark Removal Stockport',
      description: 'Specialist machine polishing to eliminate swirl marks and buffer trails.',
      priority: 2,
    },
    {
      href: '/stockport/car-detailing/headlight-restoration',
      label: 'Headlight Restoration Stockport',
      description: 'Restore cloudy or yellowed headlights to crystal clarity.',
      priority: 3,
    },
    {
      href: '/stockport/car-detailing/engine-bay-detailing',
      label: 'Engine Bay Detailing Stockport',
      description: 'Professional engine bay degreasing, cleaning, and dressing.',
      priority: 3,
    },
    {
      href: '/stockport/car-detailing/leather-conditioning',
      label: 'Leather Conditioning Stockport',
      description: 'Nourish and protect leather seats and trim to prevent cracking.',
      priority: 3,
    },
    {
      href: '/stockport/car-detailing/prices',
      label: 'Car Detailing Prices Stockport',
      description: 'Transparent pricing for all professional car detailing services.',
      priority: 2,
    },
  ],
};

// ─── Stockport Car Valeting Cluster ──────────────────────────────────────────

const stockportValetingCluster: TopicalCluster = {
  id: 'stockport-valeting',
  name: 'Car Valeting in Stockport',
  pillarHref: '/stockport/car-valeting',
  crossLinks: ['stockport-detailing', 'stockport-areas'],
  links: [
    {
      href: '/stockport/car-valeting',
      label: 'Car Valeting Stockport',
      description: 'Professional mobile car valeting services across Stockport.',
      priority: 1,
    },
    {
      href: '/stockport/car-valeting/full-valet',
      label: 'Full Valet Stockport',
      description: 'Complete inside and outside valet — the most comprehensive single service.',
      priority: 1,
    },
    {
      href: '/stockport/car-valeting/mobile-valeting',
      label: 'Mobile Valeting Stockport',
      description: 'We come to your home or workplace in Stockport — no need to travel.',
      priority: 1,
    },
    {
      href: '/stockport/car-valeting/mini-valet',
      label: 'Mini Valet Stockport',
      description: 'Quick interior and exterior refresh — ideal for regular maintenance.',
      priority: 2,
    },
    {
      href: '/stockport/car-valeting/interior-valeting',
      label: 'Interior Valeting Stockport',
      description: 'Thorough interior clean covering seats, carpets, dashboard, and trim.',
      priority: 2,
    },
    {
      href: '/stockport/car-valeting/exterior-valeting',
      label: 'Exterior Valeting Stockport',
      description: 'Hand wash, clay bar treatment, and protective wax or sealant.',
      priority: 2,
    },
    {
      href: '/stockport/car-valeting/pet-hair-removal',
      label: 'Pet Hair Removal Stockport',
      description: 'Specialist pet hair extraction from fabric seats, carpets, and boot liners.',
      priority: 2,
    },
    {
      href: '/stockport/car-valeting/odour-removal',
      label: 'Odour Removal Stockport',
      description: 'Ozone treatment and deep clean to permanently eliminate stubborn smells.',
      priority: 3,
    },
    {
      href: '/stockport/car-valeting/upholstery-cleaning',
      label: 'Upholstery Cleaning Stockport',
      description: 'Hot water extraction for fabric seats, headliners, and carpets.',
      priority: 3,
    },
    {
      href: '/stockport/car-valeting/prices',
      label: 'Car Valeting Prices Stockport',
      description: 'Transparent pricing for all mobile car valeting services.',
      priority: 2,
    },
  ],
};

// ─── Manchester Areas Cluster ─────────────────────────────────────────────────

const manchesterAreasCluster: TopicalCluster = {
  id: 'manchester-areas',
  name: 'Car Valeting & Detailing Across Manchester',
  pillarHref: '/manchester',
  crossLinks: ['manchester-detailing', 'manchester-valeting'],
  links: [
    {
      href: '/manchester',
      label: 'Mobile Car Valeting Manchester',
      description: 'All mobile car care services across Greater Manchester.',
      priority: 1,
    },
    {
      href: '/manchester/areas/city-centre',
      label: 'Car Valeting Manchester City Centre',
      description: 'Mobile car valeting and detailing in Manchester city centre.',
      priority: 1,
    },
    {
      href: '/manchester/areas/didsbury',
      label: 'Car Valeting Didsbury',
      description: 'Mobile car valeting and detailing in Didsbury.',
      priority: 1,
    },
    {
      href: '/manchester/areas/chorlton',
      label: 'Car Valeting Chorlton',
      description: 'Mobile car valeting and detailing in Chorlton.',
      priority: 2,
    },
    {
      href: '/manchester/areas/salford',
      label: 'Car Valeting Salford',
      description: 'Mobile car valeting and detailing in Salford.',
      priority: 2,
    },
    {
      href: '/manchester/areas/trafford',
      label: 'Car Valeting Trafford',
      description: 'Mobile car valeting and detailing in Trafford.',
      priority: 2,
    },
    {
      href: '/manchester/areas/sale',
      label: 'Car Valeting Sale',
      description: 'Mobile car valeting and detailing in Sale, Greater Manchester.',
      priority: 2,
    },
    {
      href: '/manchester/areas/altrincham',
      label: 'Car Valeting Altrincham',
      description: 'Mobile car valeting and detailing in Altrincham.',
      priority: 2,
    },
    {
      href: '/manchester/areas/oldham',
      label: 'Car Valeting Oldham',
      description: 'Mobile car valeting and detailing in Oldham.',
      priority: 2,
    },
    {
      href: '/manchester/areas/rochdale',
      label: 'Car Valeting Rochdale',
      description: 'Mobile car valeting and detailing in Rochdale.',
      priority: 3,
    },
    {
      href: '/manchester/areas/bury',
      label: 'Car Valeting Bury',
      description: 'Mobile car valeting and detailing in Bury.',
      priority: 3,
    },
    {
      href: '/manchester/areas/bolton',
      label: 'Car Valeting Bolton',
      description: 'Mobile car valeting and detailing in Bolton.',
      priority: 3,
    },
    {
      href: '/manchester/areas/wigan',
      label: 'Car Valeting Wigan',
      description: 'Mobile car valeting and detailing in Wigan.',
      priority: 3,
    },
    {
      href: '/manchester/areas/tameside',
      label: 'Car Valeting Tameside',
      description: 'Mobile car valeting and detailing in Tameside.',
      priority: 3,
    },
  ],
};

// ─── Stockport Areas Cluster ──────────────────────────────────────────────────

const stockportAreasCluster: TopicalCluster = {
  id: 'stockport-areas',
  name: 'Car Valeting & Detailing Across Stockport',
  pillarHref: '/stockport',
  crossLinks: ['stockport-detailing', 'stockport-valeting'],
  links: [
    {
      href: '/stockport',
      label: 'Mobile Car Valeting Stockport',
      description: 'All mobile car care services across Stockport borough.',
      priority: 1,
    },
    {
      href: '/stockport/areas/bramhall',
      label: 'Car Valeting Bramhall',
      description: 'Mobile car valeting and detailing in Bramhall.',
      priority: 1,
    },
    {
      href: '/stockport/areas/cheadle',
      label: 'Car Valeting Cheadle',
      description: 'Mobile car valeting and detailing in Cheadle.',
      priority: 1,
    },
    {
      href: '/stockport/areas/marple',
      label: 'Car Valeting Marple',
      description: 'Mobile car valeting and detailing in Marple.',
      priority: 2,
    },
    {
      href: '/stockport/areas/hazel-grove',
      label: 'Car Valeting Hazel Grove',
      description: 'Mobile car valeting and detailing in Hazel Grove.',
      priority: 2,
    },
    {
      href: '/stockport/areas/heaton-moor',
      label: 'Car Valeting Heaton Moor',
      description: 'Mobile car valeting and detailing in Heaton Moor.',
      priority: 2,
    },
    {
      href: '/stockport/areas/edgeley',
      label: 'Car Valeting Edgeley',
      description: 'Mobile car valeting and detailing in Edgeley, Stockport.',
      priority: 3,
    },
    {
      href: '/stockport/areas/reddish',
      label: 'Car Valeting Reddish',
      description: 'Mobile car valeting and detailing in Reddish, Stockport.',
      priority: 3,
    },
  ],
};

// ─── Cluster Registry ──────────────────────────────────────────────────────────

const CLUSTERS: Record<string, TopicalCluster> = {
  'manchester-detailing': manchesterDetailingCluster,
  'manchester-valeting': manchesterValetingCluster,
  'stockport-detailing': stockportDetailingCluster,
  'stockport-valeting': stockportValetingCluster,
  'manchester-areas': manchesterAreasCluster,
  'stockport-areas': stockportAreasCluster,
};

// ─── URL-based cluster inference ──────────────────────────────────────────────

/**
 * Derives the topical cluster ID from a canonical URL.
 * Used by page templates to automatically select the correct cluster.
 *
 * @example
 * inferClusterId('https://www.srvdetailing.co.uk/manchester/car-detailing/ceramic-coating')
 * // → 'manchester-detailing'
 */
export function inferClusterId(canonical: string): string | undefined {
  if (canonical.includes('/manchester/car-detailing')) return 'manchester-detailing';
  if (canonical.includes('/manchester/car-valeting')) return 'manchester-valeting';
  if (canonical.includes('/stockport/car-detailing')) return 'stockport-detailing';
  if (canonical.includes('/stockport/car-valeting')) return 'stockport-valeting';
  if (canonical.includes('/manchester/areas')) return 'manchester-areas';
  if (canonical.includes('/stockport/areas')) return 'stockport-areas';
  return undefined;
}

// ─── Public helpers ───────────────────────────────────────────────────────────

/**
 * Get cluster links, excluding the current page href.
 * Returns up to `limit` links sorted by priority (highest first).
 */
export function getClusterLinks(
  clusterId: string,
  currentHref: string,
  limit = 6,
): ClusterLink[] {
  const cluster = CLUSTERS[clusterId];
  if (!cluster) return [];
  return cluster.links
    .filter((l) => l.href !== currentHref)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}

/**
 * Get cross-cluster pillar links for a given cluster.
 * Used to link between detailing ↔ valeting and services ↔ areas.
 */
export function getCrossClusterLinks(clusterId: string): ClusterLink[] {
  const cluster = CLUSTERS[clusterId];
  if (!cluster) return [];
  return cluster.crossLinks.flatMap((id) => {
    const c = CLUSTERS[id];
    if (!c) return [];
    return [
      {
        href: c.pillarHref,
        label: c.name,
        description: `Browse all ${c.name.toLowerCase()} pages.`,
        priority: 1 as const,
      },
    ];
  });
}

export function getCluster(clusterId: string): TopicalCluster | undefined {
  return CLUSTERS[clusterId];
}
