import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Mail } from 'lucide-react';
import { ROUTES, COMPANY } from '../../data/company';

const primaryButton =
  'inline-flex items-center justify-center px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2';
const secondaryButton =
  'inline-flex items-center justify-center px-7 py-3.5 border border-[#38495D]/25 text-[#38495D] text-base font-semibold uppercase tracking-wide rounded-md hover:border-[#01A3DB] hover:text-[#01A3DB] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2';

// Illustrative process statuses only (no real-time tracking).
type Tone = 'active' | 'next' | 'pending';
const nextSteps: { n: number; title: string; description: string; status: string; tone: Tone }[] = [
  {
    n: 1,
    title: 'Request Review',
    description: 'We review your leadership needs, timing, and engagement preferences.',
    status: 'In Progress',
    tone: 'active',
  },
  {
    n: 2,
    title: 'Leader Identification',
    description:
      'We identify executives whose experience and availability may align with your request.',
    status: 'Next',
    tone: 'next',
  },
  {
    n: 3,
    title: 'New Wave Outreach',
    description: 'A member of our team contacts you to discuss the need and recommended next steps.',
    status: 'Pending',
    tone: 'pending',
  },
  {
    n: 4,
    title: 'Leader Introductions',
    description:
      'Where there is a strong fit, we coordinate introductions and discuss engagement options.',
    status: 'Pending',
    tone: 'pending',
  },
];

const statusStyles: Record<Tone, string> = {
  active: 'bg-[#f05e00]/10 text-[#f05e00] border-[#f05e00]/25',
  next: 'bg-[#01A3DB]/10 text-[#01A3DB] border-[#01A3DB]/25',
  pending: 'bg-gray-100 text-gray-500 border-gray-200',
};

const urgentMailto = `mailto:${COMPANY.email}?subject=Urgent%20Leadership%20Request`;

// Post-submission confirmation for the guided intake. Reassures the client that
// the request is actively moving forward, with an illustrative process panel and
// a direct path for urgent needs.
export default function SubmissionSuccess() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-16 lg:py-20">
      <span className="sr-only" role="status" aria-live="polite">
        Your leadership request was submitted successfully.
      </span>

      {/* Confirmation */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-[#01A3DB]/10 text-[#01A3DB] mb-6">
          <CheckCircle2 size={34} strokeWidth={2} aria-hidden="true" />
        </div>

        <div className="inline-block mb-4">
          <p className="text-black text-xs sm:text-sm font-bold tracking-[0.2em] uppercase" style={{ letterSpacing: '0.2em' }}>
            Request Received
          </p>
          <div className="mt-2 h-[2px] bg-[#f05e00]" />
        </div>

        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#38495D] leading-tight focus:outline-none"
        >
          We're Already Looking for the Right Leader.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
          Thank you for reaching out to New Wave. Our team is reviewing your request and beginning the
          process of identifying leaders whose experience aligns with your business needs.
        </p>
        <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
          While you get back to running your business, we'll move the request forward and contact you
          with the right next step.
        </p>
        <p className="mt-4 text-sm sm:text-base font-medium text-[#38495D]">
          You can typically expect to hear from us within 24 hours.
        </p>
      </div>

      {/* What Happens Next */}
      <div className="mt-12">
        <h2 className="text-center text-lg sm:text-xl font-bold text-[#38495D] mb-6">
          What Happens Next
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {nextSteps.map((s) => (
            <li key={s.n} className="rounded-xl border border-gray-200 bg-white p-5 text-left">
              <div className="flex items-center justify-between mb-2.5">
                <span className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-[#38495D] text-white text-sm font-bold">
                  {s.n}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border ${statusStyles[s.tone]}`}>
                  {s.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#38495D]">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Urgent-need callout */}
      <div className="mt-8 rounded-xl border border-[#01A3DB]/20 bg-[#01A3DB]/5 p-5 sm:p-6 text-center">
        <h2 className="text-base sm:text-lg font-bold text-[#38495D]">Need Immediate Help?</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed max-w-xl mx-auto">
          If your leadership need is urgent, contact New Wave directly and include the word "Urgent" in
          your message.
        </p>
        <a
          href={urgentMailto}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#01A3DB] hover:text-[#0192C5] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
        >
          <Mail size={16} aria-hidden="true" />
          Email New Wave
        </a>
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <Link to={ROUTES.results} className={primaryButton}>
          View Leadership Results
        </Link>
        <Link to={ROUTES.home} className={secondaryButton}>
          Return to New Wave
        </Link>
      </div>
    </div>
  );
}
