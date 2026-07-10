import type { ReactNode } from 'react';

interface SectionProps {
  /** Background tint. Homepage sections alternate white / light gray. */
  background?: 'white' | 'gray';
  /** Extra classes appended to the <section> element. */
  className?: string;
  /** When true, tags the section with data-insights-ready for the prerenderer. */
  dataInsightsReady?: boolean;
  children: ReactNode;
}

// Standard homepage content section: one consistent vertical rhythm
// (64 / 80 / 96px top+bottom padding on mobile / tablet / desktop) and the
// shared max-width container + horizontal padding used across the site. Keeping
// this in one place is what makes the sections feel congruent.
export default function Section({
  background = 'white',
  className = '',
  dataInsightsReady,
  children,
}: SectionProps) {
  const bg = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  return (
    <section
      className={`${bg} py-16 sm:py-20 lg:py-24 ${className}`}
      {...(dataInsightsReady ? { 'data-insights-ready': 'true' } : {})}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
        {children}
      </div>
    </section>
  );
}
