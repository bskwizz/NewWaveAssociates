import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { ROUTES } from '../../data/company';

// Simplified header for the guided intake. Logo (home) left, a single
// "Back to New Wave" exit link right. No standard site navigation.
export default function FlowHeader() {
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
          to={ROUTES.home}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#01A3DB] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
        >
          <X size={16} aria-hidden="true" />
          Back to New Wave
        </Link>
      </div>
    </header>
  );
}
