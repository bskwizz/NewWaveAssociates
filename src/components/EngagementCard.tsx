import { Link } from 'react-router-dom';
import { practiceAreaHubPath, type PracticeAreaName } from '../data/practiceAreas';

export type EngagementModel = 'Fractional' | 'Interim' | 'Project-Based';

export interface Engagement {
  role: string;
  practiceArea: PracticeAreaName;
  model: EngagementModel;
  industry: string;
  /** Outcome bullets. Wrap the key figure in **double asterisks** to emphasize it. */
  outcomes: string[];
}

// Color-coded pill so the engagement model reads at a glance while staying inside
// the brand palette (blue / orange / neutral gray). Text is always visible, so
// the model is never conveyed by color alone.
const BADGE_STYLES: Record<EngagementModel, string> = {
  Fractional: 'bg-[#01A3DB]/10 text-[#01A3DB]',
  Interim: 'bg-[#f05e00]/10 text-[#f05e00]',
  'Project-Based': 'bg-gray-200 text-gray-700',
};

// Wrap **figures** in <strong> so quantified results stand out, without hand-
// placing styled spans in the data.
function renderOutcome(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#38495D]">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

// One executive leadership engagement: role + practice area + industry + an
// engagement-model badge, then the measurable business outcomes. Card treatment
// matches the rest of the site (rounded-xl border, subtle shadow, hover lift);
// h-full so rows align.
export default function EngagementCard({ role, practiceArea, model, industry, outcomes }: Engagement) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#38495D] leading-snug">{role}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#f05e00]">
            {practiceArea}
          </p>
          <p className="mt-0.5 text-sm text-gray-500">{industry}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${BADGE_STYLES[model]}`}
        >
          {model}
        </span>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <ul className="space-y-2.5">
          {outcomes.map((outcome, i) => (
            <li key={i} className="flex gap-2.5 text-sm sm:text-base text-gray-700 leading-snug">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05e00]" />
              <span>{renderOutcome(outcome)}</span>
            </li>
          ))}
        </ul>

        {/* Secondary CTA to the curated practice-area case-study hub. */}
        <Link
          to={practiceAreaHubPath(practiceArea)}
          className="mt-4 inline-block rounded text-sm font-semibold text-[#01A3DB] hover:text-[#0182b3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
        >
          Explore {practiceArea} Case Studies →
        </Link>
      </div>
    </div>
  );
}
