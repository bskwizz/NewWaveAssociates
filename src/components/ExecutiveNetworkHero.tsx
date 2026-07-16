import { Link } from 'react-router-dom';
import { CalendarClock, Zap, Target, type LucideIcon } from 'lucide-react';
import { NETWORK_METRICS, type HeroMetric } from '../data/executiveNetwork';
import { ROUTES } from '../data/company';

// Dark, editorial hero for /executive-network. Visually distinct from the rest
// of the site: deep New Wave navy, restrained blue glow + subtle dot texture,
// a two-column layout (copy left, executive portrait cluster right), and a
// bottom engagement-model strip that bridges into the next section.

const primaryButton =
  'inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#38495D]';
const secondaryButton =
  'inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 border border-white/30 text-white text-base font-semibold uppercase tracking-wide rounded-md hover:border-white hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#38495D]';

const engagementStrip: { icon: LucideIcon; label: string }[] = [
  { icon: CalendarClock, label: 'Fractional Leadership' },
  { icon: Zap, label: 'Interim Leadership' },
  { icon: Target, label: 'Project-Based Leadership' },
];

// One consistent accent across all metric cards: a short orange rule above the
// value, with New Wave blue on the label.
function MetricCard({ value, label, description }: HeroMetric) {
  return (
    <li className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-sm">
      <div className="h-[2px] w-8 bg-[#f05e00] mb-3.5" aria-hidden="true" />
      <p className="text-2xl sm:text-3xl font-extrabold text-white leading-tight whitespace-pre-line">{value}</p>
      <p className="mt-2.5 text-[11px] font-bold uppercase tracking-wide text-[#7fd3f0] whitespace-pre-line">{label}</p>
      <p className="mt-2 text-sm text-white/60 leading-relaxed">{description}</p>
    </li>
  );
}

function scrollToId(id: string) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  });
}

export default function ExecutiveNetworkHero() {
  return (
    <section className="relative overflow-hidden bg-[#38495D] text-white">
      {/* Depth 1: soft blue radial glow behind the copy. Decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(760px 420px at 12% 4%, rgba(1,163,219,0.30), transparent 60%), linear-gradient(180deg, #3d4f65 0%, #38495D 55%, #313f52 100%)',
        }}
      />
      {/* Depth 2: subtle dot texture (same visual language as the listing pages). Decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 20% 30%, #ffffff 100%, transparent 0), radial-gradient(1px 1px at 70% 60%, #ffffff 100%, transparent 0), radial-gradient(1px 1px at 40% 80%, #ffffff 100%, transparent 0)',
          backgroundSize: '120px 120px, 160px 160px, 200px 200px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 pt-12 sm:pt-16 lg:pt-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: copy + actions (58%) */}
          <div className="lg:col-span-7">
            <div className="inline-block mb-6">
              <p className="text-white text-sm sm:text-base font-bold tracking-[0.2em] uppercase" style={{ letterSpacing: '0.2em' }}>
                For Fractional &amp; Interim Executives
              </p>
              <div className="mt-2 h-[2px] bg-[#f05e00]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
              Join the New Wave
              <br className="hidden lg:block" /> Executive Network
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-[600px]">
              Built for experienced executives who still enjoy building, fixing, and leading. Join a
              curated network considered for fractional, interim, and project-based leadership
              opportunities where experience and accountability matter.
            </p>

            {/* Sub-line: jump down to the six practice areas. */}
            <div className="mt-5 max-w-[600px] text-sm text-white/60 leading-relaxed">
              <p>
                Curious where you might fit?{' '}
                <button
                  type="button"
                  onClick={() => scrollToId('areas')}
                  className="font-semibold text-[#7fd3f0] underline underline-offset-2 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#38495D] rounded-sm"
                >
                  Explore our Areas of Leadership →
                </button>
              </p>
            </div>

            <p className="mt-6 inline-block rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-2.5 text-sm sm:text-base font-semibold text-white/90">
              Senior operators. Meaningful work. Carefully matched opportunities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to={ROUTES.executiveNetworkApply} className={primaryButton}>
                Join the Network
              </Link>
              <button type="button" onClick={() => scrollToId('process')} className={secondaryButton}>
                Learn How the Network Works
              </button>
            </div>
          </div>

          {/* Right: two-by-two metric panel with a centered supporting line (42%) */}
          <div className="lg:col-span-5">
            <ul className="grid grid-cols-2 auto-rows-fr gap-3 sm:gap-4">
              {NETWORK_METRICS.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </ul>

            <p className="mt-5 text-center text-sm sm:text-base text-white/70 leading-relaxed">
              Built around proven experience, sound judgment, and fit.
            </p>
          </div>
        </div>

        {/* Bottom engagement-model strip: bridges the hero into the next section. */}
        <div className="mt-12 lg:mt-16 border-t border-white/15">
          <ul className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {engagementStrip.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-center justify-center gap-3 py-5 sm:py-6 text-white/90">
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 text-[#7fd3f0] shrink-0">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base font-semibold">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
