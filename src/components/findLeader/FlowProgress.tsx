interface FlowProgressProps {
  step: number;
  total: number;
}

// "STEP X" label (greyed) + a horizontal blue progress bar.
export default function FlowProgress({ step, total }: FlowProgressProps) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="mb-6 sm:mb-8">
      <p className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-gray-400">
        Step {step}
      </p>
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
