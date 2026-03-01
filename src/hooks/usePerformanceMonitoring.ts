'use client';

/**
 * usePerformanceMonitoring
 *
 * React hook that collects Core Web Vitals and makes them available
 * for display, logging, or forwarding to analytics.
 *
 * Usage (add to a client component near the root of the app):
 *
 *   // In a dedicated component, e.g. src/components/PerformanceMonitor.tsx:
 *   'use client';
 *   import { usePerformanceMonitoring } from '@/hooks/usePerformanceMonitoring';
 *
 *   export function PerformanceMonitor() {
 *     usePerformanceMonitoring({
 *       onMetric: (metric) => {
 *         // Log to console in development
 *         if (process.env.NODE_ENV === 'development') {
 *           console.log(`[CWV] ${metric.name}: ${metric.value.toFixed(1)} (${metric.rating})`);
 *         }
 *         // Forward to Google Analytics 4
 *         if (typeof gtag !== 'undefined') {
 *           gtag('event', metric.name, {
 *             value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
 *             metric_rating: metric.rating,
 *             non_interaction: true,
 *           });
 *         }
 *       },
 *     });
 *     return null; // renders nothing
 *   }
 *
 *   // In layout.tsx (inside TooltipProvider or similar):
 *   import { PerformanceMonitor } from '@/components/PerformanceMonitor';
 *   // ...
 *   <PerformanceMonitor />
 */

import { useEffect, useRef } from 'react';
import { observeWebVitals, type WebVitalHandler, type WebVitalMetric } from '@/lib/performance';

interface UsePerformanceMonitoringOptions {
  /** Called once per metric when it is ready to report */
  onMetric?: WebVitalHandler;
  /**
   * Only start monitoring after the page is idle (requestIdleCallback).
   * Defaults to true — avoids competing with LCP on initial load.
   */
  waitForIdle?: boolean;
}

export function usePerformanceMonitoring({
  onMetric,
  waitForIdle = true,
}: UsePerformanceMonitoringOptions = {}): {
  /** Latest value for each metric, or null if not yet reported */
  metrics: Partial<Record<WebVitalMetric['name'], WebVitalMetric>>;
} {
  const metricsRef = useRef<Partial<Record<WebVitalMetric['name'], WebVitalMetric>>>({});

  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;

    const handler: WebVitalHandler = (metric) => {
      metricsRef.current[metric.name] = metric;
      onMetric?.(metric);
    };

    if (waitForIdle && typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(() => observeWebVitals(handler));
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => observeWebVitals(handler), 0);
      return () => clearTimeout(id);
    }
  }, [onMetric, waitForIdle]);

  return { metrics: metricsRef.current };
}
