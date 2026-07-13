export type EngagementModel = 'Fractional' | 'Interim' | 'Project-Based';

export interface Engagement {
  role: string;
  model: EngagementModel;
  industry: string;
  outcomes: string[];
}

// Color-coded pill so the engagement model reads at a glance while staying
// inside the brand palette (blue / orange / navy).
const BADGE_STYLES: Record<EngagementModel, string> = {
  Fractional: 'bg-[#01A3DB]/10 text-[#01A3DB]',
  Interim: 'bg-[#f05e00]/10 text-[#f05e00]',
  'Project-Based': 'bg-[#38495D]/10 text-[#38495D]',
};

// One executive leadership engagement: role + engagement model badge + industry,
// then the measurable business outcomes. Card treatment matches the rest of the
// site (rounded-xl border, subtle shadow, hover lift); h-full so rows align.
export default function EngagementCard({ role, model, industry, outcomes }: Engagement) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#38495D] leading-snug">{role}</h3>
          <p className="mt-1 text-sm text-gray-500">{industry}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${BADGE_STYLES[model]}`}
        >
          {model}
        </span>
      </div>

      <ul className="mt-auto space-y-2.5 pt-4 border-t border-gray-100">
        {outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-2.5 text-sm sm:text-base text-gray-700 leading-snug">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05e00]" />
            {outcome}
          </li>
        ))}
      </ul>
    </div>
  );
}
