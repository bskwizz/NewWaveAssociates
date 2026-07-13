import { useEffect, useLayoutEffect, useState } from 'react';

// Count-up number that is prerender- and no-JS-safe: the very first render shows
// the FINAL value, so the static HTML captured by the prerenderer (and users with
// JS disabled) always sees the real number. On a genuine interactive client the
// value resets to 0 and animates up once `start` becomes true. Headless
// automation (navigator.webdriver — the prerenderer) and visitors who prefer
// reduced motion skip the animation entirely and keep the final value.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function animationEnabled() {
  if (typeof window === 'undefined') return false;
  if (navigator.webdriver) return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  return true;
}

interface CountUpProps {
  /** Final numeric value to count up to. */
  value: number;
  /** Rendered before the number (e.g. "$"). */
  prefix?: string;
  /** Rendered after the number (e.g. "M+", "%", "+"). */
  suffix?: string;
  /** Animation length in milliseconds. */
  durationMs?: number;
  /** Decimal places to render (e.g. 1 for "4.5"). */
  decimals?: number;
  /** When true, run the count-up (typically driven by useInViewOnce). */
  start?: boolean;
  className?: string;
}

export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  durationMs = 1400,
  decimals = 0,
  start = false,
  className,
}: CountUpProps) {
  const [display, setDisplay] = useState(value);

  // Reset to 0 before the browser paints, so real clients never flash the final
  // value before the animation begins.
  useIsoLayoutEffect(() => {
    if (animationEnabled()) setDisplay(0);
  }, []);

  useEffect(() => {
    if (!animationEnabled() || !start) return;

    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [start, value, durationMs]);

  return (
    <span className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
