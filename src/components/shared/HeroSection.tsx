import { Phone } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { BreadcrumbItem } from '@/data/types';
import { PHONE, PHONE_DISPLAY } from '@/data/constants';

interface HeroSectionProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description: string;
  badge?: string;
  /**
   * Set to true when the parent template outputs BreadcrumbList inside a
   * consolidated @graph block (via generatePageSchema). Prevents duplicate
   * BreadcrumbList scripts on the same page.
   * @default false
   */
  suppressBreadcrumbSchema?: boolean;
}

export function HeroSection({
  breadcrumbs,
  title,
  description,
  badge,
  suppressBreadcrumbSchema = false,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs items={breadcrumbs} renderSchema={!suppressBreadcrumbSchema} />

        {badge && (
          <div className="flex items-center gap-2 mt-4 mb-2">
            <span className="text-blue-200 font-semibold">{badge}</span>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-4 leading-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition"
          >
            <Phone className="w-5 h-5" />
            Call {PHONE_DISPLAY}
          </a>
          <a
            href="/booking"
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-500 shadow-lg hover:bg-blue-600 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
