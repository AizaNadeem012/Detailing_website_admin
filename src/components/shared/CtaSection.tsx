import { Phone } from 'lucide-react';
import { PHONE, PHONE_DISPLAY } from '@/data/constants';

interface CtaSectionProps {
  title?: string;
  description?: string;
  serviceName?: string;
}

export function CtaSection({
  title = 'Ready to Book Your Service?',
  description,
  serviceName,
}: CtaSectionProps) {
  return (
    <section className="text-center py-12 bg-slate-900 text-white rounded-2xl">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
        {description ||
          `Contact us today to schedule your professional ${serviceName?.toLowerCase() || 'car care'} service`}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold"
        >
          <Phone className="w-5 h-5" />
          Call {PHONE_DISPLAY}
        </a>
        <a
          href="/booking"
          className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-transparent hover:text-white transition"
        >
          Send Message
        </a>
      </div>
    </section>
  );
}
