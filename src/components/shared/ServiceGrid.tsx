import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface ServiceGridProps {
  services: ServiceCardProps[];
  title?: string;
}

export function ServiceGrid({ services, title }: ServiceGridProps) {
  return (
    <section className="mb-16">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{title}</h2>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.href}
              href={service.href}
              className="group p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
              </div>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn more <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
