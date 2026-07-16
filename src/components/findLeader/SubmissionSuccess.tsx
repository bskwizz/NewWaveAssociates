import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { ROUTES } from '../../data/company';

const primaryButton =
  'inline-flex items-center justify-center px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2';
const secondaryButton =
  'inline-flex items-center justify-center px-7 py-3.5 border border-[#38495D]/25 text-[#38495D] text-base font-semibold uppercase tracking-wide rounded-md hover:border-[#01A3DB] hover:text-[#01A3DB] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2';

// Confirmation shown after a successful intake submission.
export default function SubmissionSuccess() {
  return (
    <div className="max-w-[680px] mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center" role="status" aria-live="polite">
      <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-[#01A3DB]/10 text-[#01A3DB] mb-6">
        <CheckCircle2 size={30} strokeWidth={2} aria-hidden="true" />
      </div>
      <div className="inline-block mb-4">
        <p className="text-black text-xs sm:text-sm font-bold tracking-[0.2em] uppercase" style={{ letterSpacing: '0.2em' }}>
          Request Received
        </p>
        <div className="mt-2 h-[2px] bg-[#f05e00]" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#38495D] leading-tight">
        Thank You. We'll Take It From Here.
      </h1>
      <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
        Your leadership request has been sent to New Wave. We will review your needs and determine the
        right next step.
      </p>
      <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
        If there appears to be a potential fit, a member of our team will contact you to learn more and
        discuss relevant leadership options.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link to={ROUTES.solutions} className={primaryButton}>
          Explore Leadership Solutions
        </Link>
        <Link to={ROUTES.home} className={secondaryButton}>
          Return to New Wave
        </Link>
      </div>
    </div>
  );
}
