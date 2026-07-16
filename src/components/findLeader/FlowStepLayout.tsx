import { useEffect, useRef, type ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import FlowProgress from './FlowProgress';

interface FlowStepLayoutProps {
  step: number;
  total: number;
  /** Omitted on Step 1 so no back button renders. */
  onBack?: () => void;
  /** Optional highlighted box rendered below the progress bar (Step 1). */
  intro?: ReactNode;
  /** Optional uppercase eyebrow above the heading (Step 1 welcome). */
  eyebrow?: string;
  /** The single H1 for this step. Receives focus when the step changes. */
  heading: string;
  children: ReactNode;
}

// Shared shell for each intake step: back control, progress, one focusable H1,
// and a screen-reader step announcement. Focus moves to the heading on step
// change so assistive tech follows the flow.
export default function FlowStepLayout({
  step,
  total,
  onBack,
  intro,
  eyebrow,
  heading,
  children,
}: FlowStepLayoutProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
      <span className="sr-only" role="status" aria-live="polite">{`Step ${step} of ${total}`}</span>

      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#01A3DB] transition-colors mb-5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back
        </button>
      )}

      <FlowProgress step={step} total={total} />

      {intro && <div className="mb-8 sm:mb-10">{intro}</div>}

      {eyebrow && (
        <div className="inline-block mb-4">
          <p className="text-black text-xs sm:text-sm font-bold tracking-[0.2em] uppercase" style={{ letterSpacing: '0.2em' }}>
            {eyebrow}
          </p>
          <div className="mt-2 h-[2px] bg-[#f05e00]" />
        </div>
      )}

      <h1
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#38495D] leading-tight focus:outline-none"
      >
        {heading}
      </h1>

      {children}
    </div>
  );
}
