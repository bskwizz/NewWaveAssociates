import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Uppercase eyebrow label with the orange underline. */
  label: string;
  /** Optional bold main heading shown under the label. */
  heading?: string;
  /** Optional introductory paragraph. */
  intro?: string;
  /** Override the intro typography (defaults to the standard intro style). */
  introClassName?: string;
  /** Optional element aligned to the right of the label (e.g. a "View all" link). */
  action?: ReactNode;
}

// Standardized section header: eyebrow label -> optional main heading ->
// optional intro paragraph, with one consistent vertical rhythm:
//   label -> heading   20 / 24 / 28px
//   heading -> intro   18 / 20 / 24px
//   header -> content   32 / 40 / 48px  (this wrapper's bottom margin)
// Intro/heading copy is constrained to ~860px (the 800-900px target).
const INTRO_BASE = 'text-base sm:text-lg text-gray-700 leading-relaxed';

export default function SectionHeader({
  label,
  heading,
  intro,
  introClassName,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 sm:mb-10 lg:mb-12">
      <div className="flex items-end justify-between gap-4">
        <div className="inline-block">
          <h2
            className="text-black text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase"
            style={{ letterSpacing: '0.2em' }}
          >
            {label}
          </h2>
          <div className="mt-2 h-[2px] bg-[#f05e00]" />
        </div>
        {action}
      </div>

      {heading && (
        <p className="mt-5 sm:mt-6 lg:mt-7 max-w-[860px] text-xl sm:text-2xl lg:text-3xl font-bold text-[#38495D] leading-snug">
          {heading}
        </p>
      )}

      {intro && (
        <p
          className={`${heading ? 'mt-[18px] sm:mt-5 lg:mt-6' : 'mt-5 sm:mt-6 lg:mt-7'} max-w-[860px] ${introClassName ?? INTRO_BASE}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
