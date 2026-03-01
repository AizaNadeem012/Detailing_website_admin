/**
 * ServiceImageBlock
 *
 * Reusable image component for service and location pages.
 *
 * Features:
 *  - Renders one of the 3 shared /public/images/ photos
 *  - Generates a UNIQUE alt text per page (service + location + image descriptor)
 *  - Outputs a Schema.org ImageObject JSON-LD block alongside the image
 *  - Uses next/image for automatic WebP serving, responsive sizing, lazy loading
 *  - Explicit width + height prevents CLS (browser reserves space before image loads)
 *  - priority=true only for images provably above the fold
 *
 * Usage:
 *   <ServiceImageBlock location="Stockport" service="Mobile Car Valeting" />
 *   <ServiceImageBlock location="Cheadle Hulme" service="Interior Valeting" imageKey="interior" />
 *   <ServiceImageBlock location="Manchester" service="Ceramic Coating" imageKey="results" priority />
 */

import Image from 'next/image';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { generateImageObjectSchema } from '@/lib/schema';
import {
  SERVICE_IMAGES,
  buildAltText,
  buildTitleText,
  inferImageKey,
  getImageSchemaUrl,
  type ServiceImageKey,
} from '@/lib/serviceImages';

interface ServiceImageBlockProps {
  /** Location name, e.g. "Stockport", "Manchester", "Cheadle Hulme" */
  location: string;
  /** Service name, e.g. "Mobile Car Valeting", "Ceramic Coating" */
  service: string;
  /**
   * Which of the 3 images to display.
   * Omit to auto-select based on the service name.
   *   exterior → porsche-foam (default for valeting/wash/full valet)
   *   interior → bmw-interior (for interior/upholstery/leather/odour/pet)
   *   results  → mustang-rear (for detailing/ceramic/paint correction/coatings)
   */
  imageKey?: ServiceImageKey;
  /**
   * Set true only for images that appear above the fold on initial load.
   * All others default to lazy loading to improve LCP.
   */
  priority?: boolean;
  /**
   * Optional visible caption rendered inside a <figcaption>.
   * Useful for rich content pages to add context without stuffing alt text.
   */
  caption?: string;
  className?: string;
}

export function ServiceImageBlock({
  location,
  service,
  imageKey,
  priority = false,
  caption,
  className = '',
}: ServiceImageBlockProps) {
  const key = imageKey ?? inferImageKey(service);
  const meta = SERVICE_IMAGES[key];

  // Unique per page: combines service intent + location + literal image description
  const alt = buildAltText(service, location, key);
  // Title attribute: phrased differently from alt to avoid redundancy
  const title = buildTitleText(service, location);

  const imageSchema = generateImageObjectSchema({
    contentUrl: getImageSchemaUrl(key),
    name: alt,
    width: meta.width,
    height: meta.height,
  });

  return (
    <>
      {/* ImageObject schema — tells Google what the image depicts and where it lives */}
      <SchemaMarkup schemas={[imageSchema]} />

      <figure className={`overflow-hidden rounded-xl ${className}`}>
        {/*
          width + height = intrinsic dimensions → browser allocates the exact space
          before the image loads, preventing Cumulative Layout Shift (CLS).

          w-full h-auto makes it responsive within any container.

          sizes tells the browser which actual pixel width to request at each
          viewport breakpoint, so it downloads the smallest useful rendition.

          next/image automatically negotiates WebP/AVIF with the browser via
          the Accept header — no manual conversion needed.
        */}
        <Image
          src={meta.src}
          alt={alt}
          title={title}
          width={meta.width}
          height={meta.height}
          quality={85}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
          className="w-full h-auto object-cover rounded-xl"
        />

        {caption && (
          <figcaption className="text-sm text-slate-500 mt-2 px-1 text-center italic">
            {caption}
          </figcaption>
        )}
      </figure>
    </>
  );
}
