import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { recordLead } from '../services/leadCaptureService';
import { ROUTES } from '../data/company';

// Primary Leadership Practice Area: exactly the six practice-area names.
const PRACTICE_AREA_OPTIONS = [
  'Procurement',
  'Strategic Sourcing',
  'Revenue Operations',
  'Transformation Office',
  'Project Management Office',
  'M&A Integration',
];

const ENGAGEMENT_OPTIONS = ['Fractional', 'Interim', 'Project-Based', 'Open to Multiple Models'];

const AVAILABILITY_OPTIONS = [
  'Available Now',
  'Within 30 Days',
  'Within 60 Days',
  'Exploring Future Opportunities',
];

const inputClasses =
  'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all';
const labelClasses = 'block text-sm font-semibold text-[#38495D] mb-1.5';
const optionalTag = <span className="font-normal text-gray-400">(optional)</span>;

// Simplified first-step application. Removed fields (company, industries,
// travel, website, additional info, additional practice areas) just go to the
// executive_network_leads table as NULL, so no backend change is required.
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  linkedin: '',
  title: '',
  practiceArea: '',
  engagementType: '',
  phone: '',
  location: '',
  availability: '',
  summary: '',
  website: '', // honeypot
};

export default function ExecutiveNetworkForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, linkedin, title, practiceArea, engagementType, summary } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !linkedin ||
      !title ||
      !practiceArea ||
      !engagementType ||
      !summary
    ) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    // Honeypot: silently drop bot submissions.
    if (formData.website) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      await recordLead({
        email,
        source: 'executive_network',
        page_url: window.location.href,
        name: `${firstName} ${lastName}`.trim(),
        phone: formData.phone || undefined,
        // Structured columns for the executive_network_leads table.
        fields: {
          first_name: firstName,
          last_name: lastName,
          linkedin,
          title,
          practice_area: practiceArea,
          engagement_type: engagementType,
          location: formData.location || undefined,
          availability: formData.availability || undefined,
          summary,
        },
      });

      setFormData(initialState);
      setStatus({ type: 'success', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message:
          'We could not submit your application. Please try again or contact New Wave directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success confirmation replaces the form.
  if (status.type === 'success') {
    return (
      <div
        className="w-full bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-[#01A3DB]/10 text-[#01A3DB] mb-5">
          <CheckCircle2 size={30} strokeWidth={2} aria-hidden="true" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#38495D]">Thank You for Applying</h3>
        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
          We appreciate your interest in the New Wave Executive Network. We will review your
          information and reach out if there appears to be a potential fit.
        </p>
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
          In the meantime, you can return to the Executive Network page to learn more about how the
          network works.
        </p>
        <Link
          to={ROUTES.executiveNetwork}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#01A3DB] hover:text-[#0192C5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 rounded-sm"
        >
          Back to Executive Network
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-5 sm:p-6 lg:p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-4">
        <div>
          <label htmlFor="en-first" className={labelClasses}>First Name *</label>
          <input id="en-first" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="en-last" className={labelClasses}>Last Name *</label>
          <input id="en-last" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="en-email" className={labelClasses}>Email *</label>
          <input id="en-email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="en-linkedin" className={labelClasses}>LinkedIn Profile *</label>
          <input id="en-linkedin" name="linkedin" type="url" required placeholder="https://www.linkedin.com/in/yourname" value={formData.linkedin} onChange={handleChange} aria-describedby="en-linkedin-help" className={inputClasses} />
          <p id="en-linkedin-help" className="mt-1.5 text-xs text-gray-500 leading-relaxed">
            Share the public LinkedIn profile that best reflects your leadership experience.
          </p>
        </div>

        <div>
          <label htmlFor="en-title" className={labelClasses}>Current or Most Recent Title *</label>
          <input id="en-title" name="title" type="text" required value={formData.title} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="en-area" className={labelClasses}>Primary Leadership Practice Area *</label>
          <select id="en-area" name="practiceArea" required value={formData.practiceArea} onChange={handleChange} className={`${inputClasses} bg-white`}>
            <option value="">Select an option</option>
            {PRACTICE_AREA_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="en-engagement" className={labelClasses}>Preferred Engagement Type *</label>
          <select id="en-engagement" name="engagementType" required value={formData.engagementType} onChange={handleChange} className={`${inputClasses} bg-white`}>
            <option value="">Select an option</option>
            {ENGAGEMENT_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="en-phone" className={labelClasses}>Phone {optionalTag}</label>
          <input id="en-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="en-location" className={labelClasses}>Geographic Location {optionalTag}</label>
          <input id="en-location" name="location" type="text" value={formData.location} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="en-availability" className={labelClasses}>Availability {optionalTag}</label>
          <select id="en-availability" name="availability" value={formData.availability} onChange={handleChange} className={`${inputClasses} bg-white`}>
            <option value="">Select an option</option>
            {AVAILABILITY_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="en-summary" className={labelClasses}>
            Tell us about the leadership roles you have held and the outcomes you have delivered. *
          </label>
          <textarea
            id="en-summary"
            name="summary"
            required
            rows={4}
            placeholder="Briefly describe the scope of your leadership experience, the types of organizations you have supported, and the business outcomes you are most proud of."
            value={formData.summary}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* Honeypot - hidden from users */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        />

        {status.type === 'error' && (
          <div className="sm:col-span-2">
            <div role="alert" aria-live="assertive" className="p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
              {status.message}{' '}
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
            {isSubmitting ? 'Submitting...' : 'Apply to Join the Network'}
          </button>
        </div>

        {/* Privacy notice */}
        <p className="sm:col-span-2 text-xs text-gray-500 leading-relaxed">
          By submitting this application, you consent to New Wave Associates reviewing and retaining
          the information you provide for the purpose of evaluating potential network and engagement
          opportunities. See our{' '}
          <Link to={ROUTES.privacy} className="text-[#01A3DB] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
