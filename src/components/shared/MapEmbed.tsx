'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapEmbedProps {
  embedUrl: string;
  title?: string;
  className?: string;
}

export function MapEmbed({ embedUrl, title = 'Service area map', className = '' }: MapEmbedProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center ${className}`}
      >
        <div className="text-center text-muted-foreground p-8">
          <MapPin className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">Map unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-sm ${className}`}
    >
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onError={() => setHasError(true)}
        aria-label={title}
      />
    </div>
  );
}
