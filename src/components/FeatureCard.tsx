import { type LucideIcon } from 'lucide-react';

type Accent = 'blue' | 'navy' | 'orange';

// Static class strings per accent — Tailwind's JIT needs literal class names,
// so we look them up rather than building them from the prop.
const ACCENTS: Record<Accent, { tile: string; hoverTitle: string }> = {
  blue: { tile: 'bg-[#01A3DB]/10 text-[#01A3DB]', hoverTitle: 'group-hover:text-[#01A3DB]' },
  navy: { tile: 'bg-[#38495D]/10 text-[#38495D]', hoverTitle: 'group-hover:text-[#38495D]' },
  orange: { tile: 'bg-[#f05e00]/10 text-[#f05e00]', hoverTitle: 'group-hover:text-[#f05e00]' },
};

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: Accent;
}

// Informational feature card: an accent-tinted icon tile over a title + blurb,
// with a subtle lift-and-shadow hover and a title color shift.
export default function FeatureCard({ icon: Icon, title, description, accent }: FeatureCardProps) {
  const a = ACCENTS[accent];
  return (
    <div className="group h-full rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${a.tile}`}>
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className={`text-base sm:text-lg font-bold text-[#38495D] mb-2 transition-colors ${a.hoverTitle}`}>
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
