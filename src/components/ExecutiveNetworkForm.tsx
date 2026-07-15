import { useState } from 'react';
import { Link } from 'react-router-dom';
import { recordLead } from '../services/leadCaptureService';
import { ROUTES } from '../data/company';

// The six Leadership Practice Areas (exact names/order), plus "Multiple Areas".
const PRACTICE_AREA_OPTIONS = [
  'Procurement',
  'Strategic Sourcing',
  'Revenue Operations',
  'Transformation Office',
  'Project Management Office',
  'M&A Integration',
  'Multiple Areas',
];

const ENGAGEMENT_OPTIONS = ['Fractional', 'Interim', 'Project-Based', 'Open to Multiple Models'];

const inputClasses =
  'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all';
const labelClasses = 'block text-sm font-semibold text-[#38495D] mb-1.5';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  linkedin: '',
  title: '',
  practiceArea: '',
  additionalAreas: '',
  engagementType: '',
  industries: '',
  location: '',
  travel: '',
  availability: '',
  personalSite: '',
  summary: '',
  additionalInfo: '',
  website: '', // honeypot
};

export default function ExecutiveNetworkForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      linkedin,
      title,
      practiceArea,
      engagementType,
      summary,
    } = formData;

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
      setSubmitStatus({
        type: 'error',
        message: 'Please complete all required fields.',
      });
      return;
    }

    // Honeypot: silently drop bot submissions.
    if (formData.website) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await recordLead({
        email,
        company: formData.company || undefined,
        source: 'executive_network',
        page_url: window.location.href,
        name: `${firstName} ${lastName}`.trim(),
        phone: formData.phone || undefined,
        // Structured columns for the executive_network_leads table. `website_url`
        // (not `website`) avoids colliding with the honeypot field.
        fields: {
          first_name: firstName,
          last_name: lastName,
          linkedin,
          title,
          practice_area: practiceArea,
          additional_areas: formData.additionalAreas || undefined,
          engagement_type: engagementType,
          industries: formData.industries || undefined,
          location: formData.location || undefined,
          travel: formData.travel || undefined,
          availability: formData.availability || undefined,
          website_url: formData.personalSite || undefined,
          summary,
          additional_info: formData.additionalInfo || undefined,
        },
      });

      setFormData(initialState);
      setSubmitStatus({
        type: 'success',
        message:
          'Thank you for your interest in the New Wave Executive Network. We will review your information and reach out if there appears to be a potential fit.',
      });
    } catch {
      setSubmitStatus({
        type: 'error',
        message:
          'We could not submit your information. Please try again or contact New Wave directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <input id="en-linkedin" name="linkedin" type="url" required placeholder="https://www.linkedin.com/in/yourname" value={formData.linkedin} onChange={handleChange} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="en-title" className={labelClasses}>Current or Most Recent Title *</label>
          <input id="en-title" name="title" type="text" required value={formData.title} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="en-area" className={labelClasses}>Leadership Practice Area *</label>
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
          <label htmlFor="en-phone" className={labelClasses}>Phone <span className="font-normal text-gray-400">(optional)</span></label>
          <input id="en-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="en-company" className={labelClasses}>Company <span className="font-normal text-gray-400">(optional)</span></label>
          <input id="en-company" name="company" type="text" value={formData.company} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="en-additional-areas" className={labelClasses}>Additional Practice Areas <span className="font-normal text-gray-400">(optional)</span></label>
          <input id="en-additional-areas" name="additionalAreas" type="text" value={formData.additionalAreas} onChange={handleChange} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="en-industries" className={labelClasses}>Industries <span className="font-normal text-gray-400">(optional)</span></label>
          <input id="en-industries" name="industries" type="text" value={formData.industries} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="en-location" className={labelClasses}>Geographic Location <span className="font-normal text-gray-400">(optional)</span></label>
          <input id="en-location" name="location" type="text" value={formData.location} onChange={handleChange} className={inputClasses} />
        </div>

        <div>
          <label htmlFor="en-travel" className={labelClasses}>Willingness to Travel <span className="font-normal text-gray-400">(optional)</span></label>
          <select id="en-travel" name="travel" value={formData.travel} onChange={handleChange} className={`${inputClasses} bg-white`}>
            <option value="">Select an option</option>
            <option value="Not willing to travel">Not willing to travel</option>
            <option value="Willing to travel occasionally">Willing to travel occasionally</option>
            <option value="Willing to travel regularly">Willing to travel regularly</option>
          </select>
        </div>
        <div>
          <label htmlFor="en-availability" className={labelClasses}>Availability <span className="font-normal text-gray-400">(optional)</span></label>
          <input id="en-availability" name="availability" type="text" placeholder="e.g. Immediate, 2 to 4 weeks" value={formData.availability} onChange={handleChange} className={inputClasses} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="en-site" className={labelClasses}>Website <span className="font-normal text-gray-400">(optional)</span></label>
          <input id="en-site" name="personalSite" type="url" placeholder="https://" value={formData.personalSite} onChange={handleChange} className={inputClasses} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="en-summary" className={labelClasses}>Brief Executive Summary *</label>
          <textarea id="en-summary" name="summary" required rows={4} placeholder="Tell us about the leadership roles you have held and the outcomes you have delivered." value={formData.summary} onChange={handleChange} className={`${inputClasses} resize-none`} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="en-more" className={labelClasses}>Additional Information <span className="font-normal text-gray-400">(optional)</span></label>
          <textarea id="en-more" name="additionalInfo" rows={3} placeholder="What kinds of opportunities are you most interested in?" value={formData.additionalInfo} onChange={handleChange} className={`${inputClasses} resize-none`} />
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

        {submitStatus.type && (
          <div className="sm:col-span-2">
            <div
              role={submitStatus.type === 'error' ? 'alert' : 'status'}
              aria-live={submitStatus.type === 'error' ? 'assertive' : 'polite'}
              className={`p-4 rounded-md ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {submitStatus.message}
            </div>
          </div>
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#01A3DB] text-white rounded-md font-semibold text-base sm:text-lg hover:bg-[#0192C5] transition-all hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Submitting...' : 'Apply to Join the Network'}
          </button>
        </div>

        {/* Privacy and expectation notice */}
        <p className="sm:col-span-2 text-xs text-gray-500 leading-relaxed">
          By submitting this form, you consent to New Wave Associates reviewing and retaining the
          information you provide for the purpose of evaluating potential network and engagement
          opportunities. Submission does not create an employment, contractor, agency, or engagement
          relationship and does not guarantee future work. See our{' '}
          <Link to={ROUTES.privacy} className="text-[#01A3DB] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
