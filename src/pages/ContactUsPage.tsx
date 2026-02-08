import { useState } from 'react';
import { MapPin, Mail, Linkedin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

interface ContactUsPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactUsPage({ onNavigate }: ContactUsPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    reason: '',
    timeline: '',
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
    if (!formData.name || !formData.email || !formData.reason || !formData.timeline) {
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
      const response = await fetch('https://vmxghbrjuyvyzxaavmus.functions.supabase.co/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          reason: formData.reason,
          timeline: formData.timeline,
          message: formData.message,
          pageUrl: window.location.href,
          website: formData.website,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Success - clear form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        reason: '',
        timeline: '',
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
    <div className="min-h-screen bg-gray-50">
      <PageHeader />
      <div className="pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-14 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 items-start">
            <div className="w-full md:w-[30%] md:flex-shrink-0">
              <div className="inline-block mb-2">
                <div>
                  <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                    letterSpacing: '0.25em'
                  }}>
                    WE WOULD LOVE
                    <br />
                    TO HEAR FROM YOU
                  </p>
                  <div className="h-[2px] bg-[#f05e00]"></div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4 sm:mt-5 lg:mt-6 mb-6 sm:mb-7 lg:mb-8">
                Please let us know if you have a question, want to leave a comment, or would like further information about New Wave Associates.
              </p>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="text-[#01A3DB] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-[#38495D] mb-1 text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:hello@newwaveassociates.com"
                      className="text-[#01A3DB] hover:text-[#0192C5] transition-colors text-sm sm:text-base"
                    >
                      hello@newwaveassociates.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Linkedin className="text-[#01A3DB] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-[#38495D] mb-1 text-sm sm:text-base">Find Us Online</p>
                    <a
                      href="https://www.linkedin.com/company/new-wave-associates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#01A3DB] hover:text-[#0192C5] transition-colors text-sm sm:text-base"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[70%] bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-lg">
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
                    Reason for Contact *
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a reason</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Consulting Services">Consulting Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label htmlFor="timeline" className="block text-sm font-semibold text-[#38495D] mb-1.5">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all bg-white"
                  >
                    <option value="" disabled>Select a timeline</option>
                    <option value="ASAP (0–2 weeks)">ASAP (0–2 weeks)</option>
                    <option value="This month">This month</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="Exploring (6+ months)">Exploring (6+ months)</option>
                  </select>
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
          </div>
        </div>
      </div>
    </div>
  );
}
