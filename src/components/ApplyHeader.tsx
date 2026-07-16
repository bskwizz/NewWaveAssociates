import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ROUTES } from '../data/company';

// Simplified header for the focused application experience. Logo (home) on the
// left, a single "Back to Executive Network" link on the right. Deliberately
// omits the full client navigation. Used only on /executive-network/apply.
export default function ApplyHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 flex items-center justify-between py-4 sm:py-5">
        <Link
          to={ROUTES.home}
          aria-label="New Wave Associates home"
          className="hover:opacity-80 transition-opacity rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
        >
          <img
            src="/new_wave_associates_horizontal_trimmed.png"
            alt="New Wave Associates"
            className="h-9 sm:h-10 lg:h-11 w-auto"
          />
        </Link>
        <Link
          to={ROUTES.executiveNetwork}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#01A3DB] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Executive Network
        </Link>
      </div>
    </header>
  );
}
