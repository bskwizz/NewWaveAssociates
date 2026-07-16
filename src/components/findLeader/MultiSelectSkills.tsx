import { useMemo, useState } from 'react';
import { Search, Check } from 'lucide-react';

interface MultiSelectSkillsProps {
  skills: string[];
  selected: string[];
  onToggle: (skill: string) => void;
  onContinue: () => void;
  onSkip: () => void;
}

// Step 4: searchable, multi-select experience chips for the chosen practice
// area. Selected chips stay visible even when the search filters the list.
export default function MultiSelectSkills({
  skills,
  selected,
  onToggle,
  onContinue,
  onSkip,
}: MultiSelectSkillsProps) {
  const [query, setQuery] = useState('');

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = q ? skills.filter((s) => s.toLowerCase().includes(q)) : skills;
    const selectedFirst = selected.filter((s) => skills.includes(s));
    const rest = matches.filter((s) => !selected.includes(s));
    return [...selectedFirst, ...rest];
  }, [skills, selected, query]);

  return (
    <div>
      <label htmlFor="skill-search" className="sr-only">
        Search experience areas
      </label>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
          aria-hidden="true"
        />
        <input
          id="skill-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search experience areas"
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5" role="group" aria-label="Experience areas">
        {shown.map((skill) => {
          const isSel = selected.includes(skill);
          return (
            <button
              key={skill}
              type="button"
              onClick={() => onToggle(skill)}
              aria-pressed={isSel}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 ${
                isSel
                  ? 'border-[#01A3DB] bg-[#01A3DB]/10 text-[#01A3DB]'
                  : 'border-gray-300 bg-white text-[#38495D] hover:border-[#01A3DB]'
              }`}
            >
              {isSel && <Check size={14} aria-hidden="true" />}
              {skill}
            </button>
          );
        })}
        {shown.length === 0 && (
          <p className="text-sm text-gray-500">No matches. Try another search or skip this step.</p>
        )}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={onContinue}
          disabled={selected.length === 0}
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2"
        >
          Continue
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-gray-600 hover:text-[#01A3DB] transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
        >
          Skip this step
        </button>
      </div>
    </div>
  );
}
