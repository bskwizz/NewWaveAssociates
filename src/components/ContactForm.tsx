import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { recordLead } from '../services/leadCaptureService';

// Inquiry Type options shown when `showInquiryType` is enabled.
const INQUIRY_TYPES = [
  'Executive Leadership',
  'Partnership Opportunity',
  'General Question',
  'Other',
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

// Imperative handle so a parent (the Contact page inquiry cards) can preselect
// the inquiry type and move focus into the form.
export interface ContactFormHandle {
  setInquiryType: (value: InquiryType) => void;
  focus: () => void;
}

interface ContactFormProps {
  // Lead source tag recorded with the submission, so we can tell where a lead
  // came from (e.g. the contact page vs the homepage). Defaults to the
  // contact page's original value.
  source?: string;
  // Show the Inquiry Type select and pass the choice through as `reason`.
  // Off by default so the homepage form is unchanged.
  showInquiryType?: boolean;
  // Make the Message field required (off by default to preserve homepage).
  requireMessage?: boolean;
  // Label + placeholder for the Message field.
  messageLabel?: string;
  messagePlaceholder?: string;
  // Submit button copy.
  submitLabel?: string;
}

const inputClasses =
  'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all';

const ContactForm = forwardRef<ContactFormHandle, ContactFormProps>(function ContactForm(
  {
    source = 'contact_form',
    showInquiryType = false,
    requireMessage = false,
    messageLabel = 'Message',
    messagePlaceholder,
    submitLabel = 'Submit',
  },
  ref,
) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const nameRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    setInquiryType: (value: InquiryType) => {
      setFormData((prev) => ({ ...prev, inquiryType: value }));
    },
    focus: () => {
      nameRef.current?.focus();
    },
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || (requireMessage && !formData.message)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete all required fields.',
      });
      return;
    }

    // Check honeypot
    if (formData.website) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await recordLead({
        email: formData.email,
        company: formData.company || undefined,
        source,
        page_url: window.location.href,
        name: formData.name,
        phone: formData.phone || undefined,
        reason: showInquiryType ? formData.inquiryType || undefined : undefined,
        message: formData.message || undefined,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
        website: '',
      });
      setSubmitStatus({
        type: 'success',
        message: "Thanks for reaching out. We'll get back to you shortly.",
      });
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-3">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Name *
          </label>
          <input
            id="cf-name"
            ref={nameRef}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="cf-email" className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="cf-phone" className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Phone
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="cf-company" className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Company
          </label>
          <input
            id="cf-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        {showInquiryType && (
          <div className="col-span-1 sm:col-span-2">
            <label htmlFor="cf-inquiry" className="block text-sm font-semibold text-[#38495D] mb-1.5">
              Inquiry Type
            </label>
            <select
              id="cf-inquiry"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className={`${inputClasses} bg-white`}
            >
              <option value="">Select an option</option>
              {INQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="col-span-1 sm:col-span-2">
          <label htmlFor="cf-message" className="block text-sm font-semibold text-[#38495D] mb-1.5">
            {messageLabel}
            {requireMessage ? ' *' : ''}
          </label>
          <textarea
            id="cf-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required={requireMessage}
            placeholder={messagePlaceholder}
            rows={3}
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          style={{
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
          }}
          aria-hidden="true"
        />

        {submitStatus.type && (
          <div className="col-span-1 sm:col-span-2">
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

        <div className="col-span-1 sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 bg-[#01A3DB] text-white rounded-md font-medium text-base sm:text-lg hover:bg-[#0192C5] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Submitting...' : submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
});

export default ContactForm;
