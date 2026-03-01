import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { InternalLink } from '@/data/types';

interface InternalLinkBlockProps {
  links: InternalLink[];
  title?: string;
}

export function InternalLinkBlock({ links, title = 'Related Services' }: InternalLinkBlockProps) {
  if (links.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-primary/5 border border-slate-100 hover:border-primary/20 transition-all"
          >
            <div>
              <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
                {link.label}
              </span>
              {link.description && (
                <p className="text-sm text-slate-500 mt-1">{link.description}</p>
              )}
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}
