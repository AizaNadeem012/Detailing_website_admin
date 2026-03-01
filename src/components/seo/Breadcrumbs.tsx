import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { BreadcrumbItem } from '@/data/types';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /**
   * Set to false when the parent page template already outputs BreadcrumbList
   * inside a consolidated @graph block (via generatePageSchema), to avoid
   * duplicate schema scripts on the same page.
   * @default true
   */
  renderSchema?: boolean;
}

export function Breadcrumbs({ items, renderSchema = true }: BreadcrumbsProps) {
  const schema = renderSchema ? generateBreadcrumbSchema(items) : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-slate-300 flex-wrap">
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="w-3 h-3" />}
            {index === items.length - 1 ? (
              <span className="text-white font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
