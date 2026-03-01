/**
 * performance.ts
 *
 * Core Web Vitals measurement utilities using the native PerformanceObserver API.
 * No external packages required — works in all modern browsers.
 *
 * Metrics collected:
 *  - LCP  (Largest Contentful Paint)   target: < 2.5 s
 *  - CLS  (Cumulative Layout Shift)    target: < 0.1
 *  - FID  (First Input Delay)          target: < 100 ms
 *  - INP  (Interaction to Next Paint)  target: < 200 ms  [replaces FID in CWV 2024]
 *  - TTFB (Time to First Byte)         target: < 800 ms
 *  - FCP  (First Contentful Paint)     target: < 1.8 s
 */

export interface WebVitalMetric {
  name: 'LCP' | 'CLS' | 'FID' | 'INP' | 'TTFB' | 'FCP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  /** Raw PerformanceEntry objects that contributed to this metric */
  entries: PerformanceEntry[];
}

export type WebVitalHandler = (metric: WebVitalMetric) => void;

// ─── Rating thresholds (Google's official values) ────────────────────────────

const THRESHOLDS: Record<WebVitalMetric['name'], [number, number]> = {
  LCP:  [2500, 4000],   // good < 2500ms, poor > 4000ms
  CLS:  [0.1,  0.25],   // good < 0.1,    poor > 0.25
  FID:  [100,  300],    // good < 100ms,  poor > 300ms
  INP:  [200,  500],    // good < 200ms,  poor > 500ms
  TTFB: [800,  1800],   // good < 800ms,  poor > 1800ms
  FCP:  [1800, 3000],   // good < 1800ms, poor > 3000ms
};

function getRating(name: WebVitalMetric['name'], value: number): WebVitalMetric['rating'] {
  const [good, poor] = THRESHOLDS[name];
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

// ─── Individual observers ─────────────────────────────────────────────────────

function observeLCP(onReport: WebVitalHandler): void {
  if (typeof PerformanceObserver === 'undefined') return;
  try {
    const entries: PerformanceEntry[] = [];
    const po = new PerformanceObserver((list) => {
      entries.push(...list.getEntries());
    });
    po.observe({ type: 'largest-contentful-paint', buffered: true });

    // LCP is finalised on first user interaction or page hide
    const report = () => {
      if (!entries.length) return;
      const last = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      const value = last.startTime;
      onReport({ name: 'LCP', value, rating: getRating('LCP', value), entries });
      po.disconnect();
    };

    addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') report(); }, { once: true });
    addEventListener('pagehide', report, { once: true });
  } catch {
    // PerformanceObserver not supported for this entry type — silently skip
  }
}

function observeCLS(onReport: WebVitalHandler): void {
  if (typeof PerformanceObserver === 'undefined') return;
  try {
    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries: PerformanceEntry[] = [];
    let prevTime = 0;
    const allEntries: PerformanceEntry[] = [];

    const po = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const shift = entry as PerformanceEntry & { hadRecentInput: boolean; value: number; startTime: number };
        if (shift.hadRecentInput) continue;

        if (shift.startTime - prevTime > 1000 || sessionEntries.length === 0) {
          sessionValue = 0;
          sessionEntries = [];
        }
        sessionValue += shift.value;
        sessionEntries.push(entry);
        prevTime = shift.startTime;
        allEntries.push(entry);

        if (sessionValue > clsValue) clsValue = sessionValue;
      }
    });
    po.observe({ type: 'layout-shift', buffered: true });

    const report = () => {
      onReport({ name: 'CLS', value: clsValue, rating: getRating('CLS', clsValue), entries: allEntries });
      po.disconnect();
    };

    addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') report(); }, { once: true });
    addEventListener('pagehide', report, { once: true });
  } catch {
    // silently skip
  }
}

function observeFID(onReport: WebVitalHandler): void {
  if (typeof PerformanceObserver === 'undefined') return;
  try {
    const po = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const first = entries[0] as PerformanceEntry & { processingStart: number; startTime: number };
      const value = first.processingStart - first.startTime;
      onReport({ name: 'FID', value, rating: getRating('FID', value), entries });
      po.disconnect();
    });
    po.observe({ type: 'first-input', buffered: true });
  } catch {
    // silently skip
  }
}

function observeINP(onReport: WebVitalHandler): void {
  if (typeof PerformanceObserver === 'undefined') return;
  try {
    const entries: PerformanceEntry[] = [];
    const po = new PerformanceObserver((list) => {
      entries.push(...list.getEntries());
    });
    po.observe({ type: 'event', buffered: true, durationThreshold: 16 } as PerformanceObserverInit);

    const report = () => {
      if (!entries.length) return;
      const durations = entries.map((e) => (e as PerformanceEntry & { duration: number }).duration);
      // INP = 98th percentile of interaction durations
      const sorted = [...durations].sort((a, b) => a - b);
      const p98Index = Math.floor(sorted.length * 0.98);
      const value = sorted[Math.min(p98Index, sorted.length - 1)] ?? 0;
      onReport({ name: 'INP', value, rating: getRating('INP', value), entries });
      po.disconnect();
    };

    addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') report(); }, { once: true });
    addEventListener('pagehide', report, { once: true });
  } catch {
    // silently skip
  }
}

function observeTTFB(onReport: WebVitalHandler): void {
  if (typeof performance === 'undefined' || !performance.getEntriesByType) return;
  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (!nav) return;
    const value = nav.responseStart - nav.requestStart;
    onReport({ name: 'TTFB', value, rating: getRating('TTFB', value), entries: [nav] });
  } catch {
    // silently skip
  }
}

function observeFCP(onReport: WebVitalHandler): void {
  if (typeof PerformanceObserver === 'undefined') return;
  try {
    const po = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries.find((e) => e.name === 'first-contentful-paint');
      if (!fcp) return;
      const value = fcp.startTime;
      onReport({ name: 'FCP', value, rating: getRating('FCP', value), entries });
      po.disconnect();
    });
    po.observe({ type: 'paint', buffered: true });
  } catch {
    // silently skip
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Start observing all Core Web Vitals. Safe to call multiple times —
 * each observer is self-contained and automatically disconnects after reporting.
 *
 * @example
 * observeWebVitals((metric) => {
 *   console.log(`[${metric.name}] ${metric.value.toFixed(1)} — ${metric.rating}`);
 *   // Send to analytics: sendToGA(metric);
 * });
 */
export function observeWebVitals(onReport: WebVitalHandler): void {
  // TTFB is synchronous — call immediately
  observeTTFB(onReport);

  // Remaining observers are async (PerformanceObserver callbacks)
  // Queue after current call stack so the page can start rendering first
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(() => {
      observeLCP(onReport);
      observeCLS(onReport);
      observeFID(onReport);
      observeINP(onReport);
      observeFCP(onReport);
    });
  } else {
    setTimeout(() => {
      observeLCP(onReport);
      observeCLS(onReport);
      observeFID(onReport);
      observeINP(onReport);
      observeFCP(onReport);
    }, 0);
  }
}

/**
 * Format a metric value for display.
 * LCP/FID/INP/TTFB/FCP → "X.XXs" or "XXXms"
 * CLS → "0.XXX"
 */
export function formatMetricValue(name: WebVitalMetric['name'], value: number): string {
  if (name === 'CLS') return value.toFixed(3);
  if (value >= 1000) return `${(value / 1000).toFixed(2)}s`;
  return `${Math.round(value)}ms`;
}
