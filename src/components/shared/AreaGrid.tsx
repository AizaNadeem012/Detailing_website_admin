import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

interface AreaCardProps {
  name: string;
  slug: string;
  href: string;
}

interface AreaGridProps {
  areas: AreaCardProps[];
  title?: string;
}

export function AreaGrid({ areas, title = 'Areas We Cover' }: AreaGridProps) {
  return (
    <section className="mb-16">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{title}</h2>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={area.href}
            className="group flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
          >
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors flex-grow">
              {area.name}
            </span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </section>
  );
}
