import { useState } from 'react';
import { recordLead } from '../services/leadCaptureService';

interface ContactFormProps {
  // Lead source tag recorded with the submission, so we can tell where a lead
  // came from (e.g. the contact page vs the homepage). Defaults to the
  // contact page's original value.
  source?: string;
}

export default function ContactForm({ source = 'contact_form' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email) {
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
        message: formData.message || undefined,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        website: '',
      });
      setSubmitStatus({
        type: 'success',
        message: "Thanks for reaching out. We'll get back to you shortly.",
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-3">
        <div>
          <label className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
          />
        </div>

        <div className="col-span-1 sm:col-span-2">
          <label className="block text-sm font-semibold text-[#38495D] mb-1.5">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all resize-none"
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
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
