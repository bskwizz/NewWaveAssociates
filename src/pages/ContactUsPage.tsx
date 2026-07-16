import { useRef, useState } from 'react';
import {
  Briefcase,
  Handshake,
  HelpCircle,
  Mail,
  Linkedin,
  ArrowRight,
  Copy,
  Check,
  type LucideIcon,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm, { ContactFormHandle, InquiryType } from '../components/ContactForm';
import TeamAvatars from '../components/TeamAvatars';
import { COMPANY } from '../data/company';

// The three primary ways a visitor can reach New Wave. Form-routed cards
// preselect an inquiry type; the email card opens a mailto.
interface ContactPath {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  action: 'form' | 'email';
  inquiry?: InquiryType;
}

const contactPaths: ContactPath[] = [
  {
    icon: Briefcase,
    title: 'Executive Leadership',
    description:
      'Fractional, interim, or project-based leadership for a critical role, function, or initiative.',
    cta: 'Tell Us What You Need',
    action: 'form',
    inquiry: 'Executive Leadership',
  },
  {
    icon: Handshake,
    title: 'Partnership Opportunities',
    description:
      'Interested in collaborating with New Wave, referring a client, or exploring a strategic partnership?',
    cta: 'Start a Partnership Conversation',
    action: 'form',
    inquiry: 'Partnership Opportunity',
  },
  {
    icon: HelpCircle,
    title: 'General Questions',
    description:
      'Not sure where to start? Send us a note and we will point you in the right direction.',
    cta: 'Email New Wave',
    action: 'email',
  },
];

const mailto = `mailto:${COMPANY.email}`;

export default function ContactUsPage() {
  const formRef = useRef<ContactFormHandle>(null);
  const [copied, setCopied] = useState(false);

  // Copy the address to the clipboard as a reliable fallback for visitors
  // whose device has no default mail app to handle the mailto link.
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(COMPANY.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (older browser / insecure context): the mailto
      // links remain available as the primary path.
    }
  }

  // Move the visitor to the form and preselect the matching inquiry type.
  function goToForm(inquiry?: InquiryType) {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
    if (inquiry) formRef.current?.setInquiryType(inquiry);
    formRef.current?.focus();
  }

  return (
    <div className="overflow-x-clip bg-white">
      <PageHeader />

      {/* 1-3. Hero: headshots, headline, supporting intro. */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-14 lg:pb-16 text-center">
          <TeamAvatars className="mb-6 sm:mb-8" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#38495D] leading-tight">
            Talk to Our Team
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Whether you are filling a leadership gap, accelerating a critical initiative, or
            navigating transformation, we are here for you. Tell us what you are facing, and we will
            talk through the challenge, share our perspective, and help you identify the right next step.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => goToForm()}
              className="inline-block px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2"
            >
              Start the Conversation
            </button>
          </div>
        </div>
      </section>

      {/* 4. How Can We Help: three contact paths + prominent direct email card. */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38495D] leading-tight">
              How can we help?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
              Choose the path that best fits your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {contactPaths.map((path) => {
              const Icon = path.icon;
              return (
                <div
                  key={path.title}
                  className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-[#01A3DB]/10 text-[#01A3DB]">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#38495D] mb-2">{path.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
                    {path.description}
                  </p>
                  <div className="mt-auto">
                    {path.action === 'form' ? (
                      <button
                        type="button"
                        onClick={() => goToForm(path.inquiry)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#01A3DB] hover:text-[#0192C5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2 rounded-sm"
                      >
                        {path.cta}
                        <ArrowRight size={16} aria-hidden="true" />
                      </button>
                    ) : (
                      <a
                        href={mailto}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#01A3DB] hover:text-[#0192C5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2 rounded-sm"
                      >
                        {path.cta}
                        <ArrowRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5. Direct email card: tinted, prominent secondary path. */}
          <div className="mt-6 sm:mt-8 rounded-xl border border-[#01A3DB]/20 bg-[#01A3DB]/5 p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white text-[#01A3DB] shadow-sm">
                    <Mail size={20} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#38495D]">Email Us Directly</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Prefer email? Reach out directly and tell us what you are navigating.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a
                    href={mailto}
                    className="text-lg sm:text-xl font-bold text-[#01A3DB] hover:text-[#0192C5] transition-colors break-all"
                  >
                    {COMPANY.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={copied ? 'Email address copied' : 'Copy email address'}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#38495D] hover:text-[#01A3DB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2 rounded-sm"
                  >
                    {copied ? (
                      <>
                        <Check size={16} aria-hidden="true" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} aria-hidden="true" />
                        Copy
                      </>
                    )}
                  </button>
                  <span className="sr-only" role="status" aria-live="polite">
                    {copied ? 'Email address copied to clipboard' : ''}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  We will route your message to the right person.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href={mailto}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
                >
                  <Mail size={18} aria-hidden="true" />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tell Us About Your Situation: the contact form. */}
      <section id="contact-form" className="bg-white border-t border-gray-100 py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38495D] leading-tight">
              Tell Us About Your Situation
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed lg:whitespace-nowrap">
              A few details will help us understand your needs and connect you with the right leader.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ContactForm
              ref={formRef}
              showInquiryType
              requireMessage
              messageLabel="What are you navigating?"
              messagePlaceholder="Tell us about the leadership gap, initiative, transformation, or business challenge."
              submitLabel="Start the Conversation"
            />
          </div>
        </div>
      </section>

      {/* 7. LinkedIn: understated secondary connection option. */}
      <section className="bg-white border-t border-gray-100 py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 text-center">
          <div className="w-11 h-11 mx-auto rounded-lg flex items-center justify-center mb-4 bg-[#38495D]/5 text-[#38495D]">
            <Linkedin size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#38495D]">Follow New Wave</h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed max-w-xl mx-auto">
            Connect with us on LinkedIn for company updates, leadership insights, and recent work.
          </p>
          <a
            href={COMPANY.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#01A3DB] hover:text-[#0192C5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2 rounded-sm"
          >
            Visit New Wave on LinkedIn
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
