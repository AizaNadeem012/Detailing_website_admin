import { CheckCircle } from 'lucide-react';
import type { PriceTier } from '@/data/types';

interface PricingGridProps {
  tiers: PriceTier[];
  title?: string;
}

export function PricingGrid({ tiers, title }: PricingGridProps) {
  return (
    <section className="mb-16">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{title}</h2>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-xl shadow-md border-2 flex flex-col ${
              tier.popular
                ? 'border-primary bg-primary/5'
                : 'border-slate-100 bg-white'
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-slate-900 mb-1">{tier.name}</h3>
            <p className="text-2xl font-bold text-primary mb-2">{tier.price}</p>
            <p className="text-slate-600 mb-4">{tier.description}</p>

            {tier.vehicleSizes && (
              <div className="mb-4 space-y-2">
                {tier.vehicleSizes.map((vs, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-slate-600">{vs.size}</span>
                    <span className="font-semibold text-slate-900">{vs.price}</span>
                  </div>
                ))}
              </div>
            )}

            <ul className="space-y-2 flex-grow">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="/booking"
              className="mt-6 block text-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
