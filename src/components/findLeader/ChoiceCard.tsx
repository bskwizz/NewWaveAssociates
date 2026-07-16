import { ArrowRight, Check, type LucideIcon } from 'lucide-react';

interface ChoiceCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  selected?: boolean;
  onSelect: () => void;
}

// Large, accessible single-select answer card (a real <button>). Selected state
// uses a blue border/tint plus a check icon, so it never relies on color alone.
export default function ChoiceCard({ title, description, icon: Icon, selected = false, onSelect }: ChoiceCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group w-full text-left flex items-center gap-4 rounded-xl border bg-white p-5 sm:p-6 transition-all duration-150 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 ${
        selected
          ? 'border-[#01A3DB] ring-1 ring-[#01A3DB] bg-[#01A3DB]/5'
          : 'border-gray-200 hover:border-[#01A3DB] hover:shadow-md'
      }`}
    >
      {Icon && (
        <div className="w-11 h-11 shrink-0 rounded-lg flex items-center justify-center bg-[#01A3DB]/10 text-[#01A3DB]">
          <Icon size={22} strokeWidth={2} aria-hidden="true" />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-base sm:text-lg font-bold text-[#38495D]">{title}</h3>
        {description && <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>}
      </div>
      <span className="shrink-0" aria-hidden="true">
        {selected ? (
          <Check size={20} className="text-[#01A3DB]" />
        ) : (
          <ArrowRight size={20} className="text-gray-300 group-hover:text-[#01A3DB] transition-colors" />
        )}
      </span>
    </button>
  );
}
