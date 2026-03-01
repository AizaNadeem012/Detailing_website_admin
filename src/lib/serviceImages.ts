/**
 * serviceImages.ts
 *
 * Central registry for the 3 shared service/location images.
 * All pages import image metadata from here — no duplicate files.
 *
 * Images live in /public/images/ so:
 *  - next/image can serve them (with automatic WebP conversion + resizing)
 *  - Schema ImageObject can reference a stable, canonical URL
 *  - No JS bundle bloat from static imports on every page
 */

import { BASE_URL } from '@/data/constants';
import type { ServiceImageKey } from '@/data/types';

// Re-export for convenience
export type { ServiceImageKey };

// ---------------------------------------------------------------------------
// Image registry
// ---------------------------------------------------------------------------

interface ServiceImageMeta {
  /** Path relative to /public — used as next/image src */
  src: string;
  /** Intrinsic width in px (prevents CLS — browser reserves space before load) */
  width: number;
  /** Intrinsic height in px */
  height: number;
  /**
   * Short, factual description of what's literally in the photo.
   * Appended to location + service in alt text so every page is unique.
   */
  descriptor: string;
}

export const SERVICE_IMAGES: Record<ServiceImageKey, ServiceImageMeta> = {
  /**
   * Porsche with snow foam — best for: exterior wash, mobile valeting,
   * car wash, full valet, mini valet, any cleaning-focused service.
   */
  exterior: {
    src: '/images/porsche-foam.jpg',
    width: 1920,
    height: 1280,
    descriptor: 'snow foam pre-wash applied to a Porsche by SRV Detailing',
  },

  /**
   * BMW interior — best for: interior valeting, upholstery cleaning,
   * leather conditioning, odour removal, pet hair removal.
   */
  interior: {
    src: '/images/bmw-interior.jpg',
    width: 1920,
    height: 1280,
    descriptor: 'BMW dashboard and steering wheel deep-cleaned by SRV Detailing',
  },

  /**
   * Mustang Mach 1 rear — best for: paint correction, ceramic coating,
   * exterior detailing, swirl mark removal, new car protection.
   */
  results: {
    src: '/images/mustang-rear.jpg',
    width: 1920,
    height: 1280,
    descriptor: 'paint correction results on a white Mustang Mach 1 by SRV Detailing',
  },
};

// ---------------------------------------------------------------------------
// Auto-selection: pick the most relevant image for a given service name
// ---------------------------------------------------------------------------

export function inferImageKey(service: string): ServiceImageKey {
  const s = service.toLowerCase();

  if (
    s.includes('interior') ||
    s.includes('upholstery') ||
    s.includes('leather') ||
    s.includes('odour') ||
    s.includes('pet')
  ) {
    return 'interior';
  }

  if (
    s.includes('paint') ||
    s.includes('ceramic') ||
    s.includes('correction') ||
    s.includes('swirl') ||
    s.includes('protection') ||
    s.includes('coating') ||
    s.includes('headlight') ||
    s.includes('engine')
  ) {
    return 'results';
  }

  // Default: exterior (covers mobile valeting, car wash, full valet, etc.)
  return 'exterior';
}

// ---------------------------------------------------------------------------
// Alt text — unique per page because service + location vary
// ---------------------------------------------------------------------------

/**
 * Returns a unique, descriptive alt text for each page.
 *
 * Pattern: "{service} in {location} — {literal image description}"
 *
 * Examples:
 *   "Mobile car valeting in Stockport — snow foam pre-wash applied to a Porsche by SRV Detailing"
 *   "Interior valeting in Cheadle Hulme — BMW dashboard and steering wheel deep-cleaned by SRV Detailing"
 *   "Ceramic coating in Manchester — paint correction results on a white Mustang Mach 1 by SRV Detailing"
 */
export function buildAltText(
  service: string,
  location: string,
  imageKey: ServiceImageKey,
): string {
  const { descriptor } = SERVICE_IMAGES[imageKey];
  return `${service} in ${location} — ${descriptor}`;
}

/**
 * Returns a title attribute (shown on hover / read by some screen readers).
 * Distinct from alt text to avoid duplication.
 */
export function buildTitleText(service: string, location: string): string {
  return `Professional ${service} near ${location} | SRV Detailing`;
}

// ---------------------------------------------------------------------------
// Stable public URL for Schema.org ImageObject
// ---------------------------------------------------------------------------

const IMAGE_FILENAMES: Record<ServiceImageKey, string> = {
  exterior: 'porsche-foam',
  interior: 'bmw-interior',
  results: 'mustang-rear',
};

export function getImageSchemaUrl(imageKey: ServiceImageKey): string {
  return `${BASE_URL}/images/${IMAGE_FILENAMES[imageKey]}.jpg`;
}
