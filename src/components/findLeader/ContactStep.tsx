import { Link } from 'react-router-dom';
import { ROUTES } from '../../data/company';
import type { ContactInfo, IntakeState } from './types';

interface ContactStepProps {
  intake: IntakeState;
  contact: ContactInfo;
  onChange: (field: keyof ContactInfo, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  error: string | null;
  onEditAnswers: () => void;
  /** Honeypot value + setter (kept in page state). */
  honeypot: string;
  onHoneypotChange: (value: string) => void;
}

const inputClasses =
  'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all';
const labelClasses = 'block text-sm font-semibold text-[#38495D] mb-1.5';
const optionalTag = <span className="font-normal text-gray-400">(optional)</span>;

// Step 6: compact request summary + contact fields + one consolidated submit.
export default function ContactStep({
  intake,
  contact,
  onChange,
  onSubmit,
  isSubmitting,
  error,
  onEditAnswers,
  honeypot,
  onHoneypotChange,
}: ContactStepProps) {
  const summary: { label: string; value: string }[] = [
    { label: 'Practice Area', value: intake.practiceArea ?? 'Not specified' },
    { label: 'Company Size', value: intake.companySize ?? 'Not specified' },
    { label: 'Engagement Model', value: intake.engagementModel ?? 'Not specified' },
    { label: 'Selected Skills', value: intake.skills.length ? intake.skills.join(', ') : 'Not specified' },
    { label: 'Desired Start Timing', value: intake.startTiming ?? 'Not specified' },
  ];

  return (
    <div className="mt-6">
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        We have what we need to understand your leadership request. Tell us where to reach you, and
        our team will review the details and follow up within 24 hours.
      </p>

      {/* Compact request summary */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#38495D]">Your Request</h2>
          <button
            type="button"
            onClick={onEditAnswers}
            className="text-sm font-semibold text-[#01A3DB] hover:text-[#0192C5] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
          >
            Review Answers
          </button>
        </div>
        <dl className="space-y-2">
          {summary.map((row) => (
            <div key={row.label} className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="sm:w-40 shrink-0 font-semibold text-gray-500">{row.label}</dt>
              <dd className="text-gray-800">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Contact form */}
      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-4">
        <div>
          <label htmlFor="fl-first" className={labelClasses}>First Name *</label>
          <input id="fl-first" type="text" required value={contact.firstName} onChange={(e) => onChange('firstName', e.target.value)} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="fl-last" className={labelClasses}>Last Name *</label>
          <input id="fl-last" type="text" required value={contact.lastName} onChange={(e) => onChange('lastName', e.target.value)} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="fl-email" className={labelClasses}>Work Email *</label>
          <input id="fl-email" type="email" required value={contact.workEmail} onChange={(e) => onChange('workEmail', e.target.value)} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="fl-company" className={labelClasses}>Company Name *</label>
          <input id="fl-company" type="text" required value={contact.companyName} onChange={(e) => onChange('companyName', e.target.value)} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="fl-phone" className={labelClasses}>Phone {optionalTag}</label>
          <input id="fl-phone" type="tel" value={contact.phone} onChange={(e) => onChange('phone', e.target.value)} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="fl-title" className={labelClasses}>Job Title {optionalTag}</label>
          <input id="fl-title" type="text" value={contact.jobTitle} onChange={(e) => onChange('jobTitle', e.target.value)} className={inputClasses} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="fl-more" className={labelClasses}>What else should we know? {optionalTag}</label>
          <textarea
            id="fl-more"
            rows={4}
            placeholder="Share any additional context about the leadership gap, initiative, company environment, or outcomes you need."
            value={contact.additionalContext}
            onChange={(e) => onChange('additionalContext', e.target.value)}
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* Honeypot - hidden from users */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => onHoneypotChange(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        />

        {error && (
          <div className="sm:col-span-2">
            <div role="alert" aria-live="assertive" className="p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
              {error}{' '}
              <Link to={ROUTES.contact} className="font-semibold underline hover:no-underline">
                Contact New Wave
              </Link>
              .
            </div>
          </div>
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Request Leadership Options'}
          </button>
        </div>

        {/* Privacy + expectation notice */}
        <div className="sm:col-span-2">
          <p className="text-xs text-gray-500 leading-relaxed">
            By submitting this request, you consent to New Wave Associates reviewing and retaining the
            information provided for the purpose of evaluating and responding to your leadership needs.
            See our{' '}
            <Link to={ROUTES.privacy} className="text-[#01A3DB] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
            Submitting a request does not create an engagement or guarantee the availability of a
            particular leader.
          </p>
        </div>
      </form>
    </div>
  );
}
