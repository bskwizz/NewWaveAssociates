import { Link } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';

export interface PracticeArea {
  icon: LucideIcon;
  title: string;
  promise: string;
  description: string;
  engagements: string[];
  idealWhen: string[];
  /** Optional hub route key (e.g. "hub-gtm-growth") for a "View ... Results" link. */
  hubRoute?: string;
  /** Label used in the results link ("View {hubLabel} Results"); defaults to title. */
  hubLabel?: string;
}

function BulletList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-[#f05e00] mb-2">{label}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-gray-700 leading-snug">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#01A3DB]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// A "mini landing page" for one leadership practice area: promise -> what we
// help with -> when it fits -> the engagement models available. Informational
// (non-clickable); h-full so cards align across a row.
export default function PracticeAreaCard({
  icon: Icon,
  title,
  promise,
  description,
  engagements,
  idealWhen,
  hubRoute,
  hubLabel,
}: PracticeArea) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#01A3DB]/10 text-[#01A3DB] shrink-0">
          <Icon size={22} strokeWidth={2} />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#38495D] transition-colors group-hover:text-[#01A3DB]">
          {title}
        </h3>
      </div>

      <p className="text-base font-semibold text-[#38495D] mb-3 leading-snug">{promise}</p>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">{description}</p>

      <div className="grid gap-5 sm:grid-cols-2 mb-5">
        <BulletList label="Typical engagements" items={engagements} />
        <BulletList label="Ideal when" items={idealWhen} />
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Engagement models:{' '}
          <span className="text-[#38495D]">Fractional</span> ·{' '}
          <span className="text-[#38495D]">Interim</span> ·{' '}
          <span className="text-[#38495D]">Project-Based</span>
        </p>
        {hubRoute && (
          <Link
            to={`/${hubRoute}`}
            className="mt-3 inline-block text-sm font-semibold text-[#01A3DB] hover:text-[#0182b3] transition-colors"
          >
            View {hubLabel ?? title} Results →
          </Link>
        )}
      </div>
    </div>
  );
}
