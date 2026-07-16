interface FlowProgressProps {
  step: number;
  total: number;
  /** Hide the "Step X of 6" label and render only the bar. */
  hideLabel?: boolean;
}

// "STEP X OF 6" label + a horizontal blue progress bar.
export default function FlowProgress({ step, total, hideLabel = false }: FlowProgressProps) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="mb-6 sm:mb-8">
      {!hideLabel && (
        <p className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#38495D]">
          Step {step} of {total}
        </p>
      )}
      <div
        className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Step ${step} of ${total}`}
      >
        <div
          className="h-full rounded-full bg-[#01A3DB] transition-all duration-300 motion-reduce:transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
