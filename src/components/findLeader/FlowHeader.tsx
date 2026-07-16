import { Link } from 'react-router-dom';
import { ROUTES } from '../../data/company';

// Simplified header for the guided intake. Logo (home) only, no standard
// site navigation.
export default function FlowHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 flex items-center py-4 sm:py-5">
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
      </div>
    </header>
  );
}
