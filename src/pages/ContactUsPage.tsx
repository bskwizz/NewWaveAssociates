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
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@newwaveassociates.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nReason: ${formData.reason}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader onNavigate={onNavigate} currentPage="contact-us" />
      <div className="pt-12 sm:pt-14 lg:pt-16 pb-12 sm:pb-14 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="w-full lg:w-[30%] lg:flex-shrink-0">
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

            <div className="w-full lg:w-[70%] bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-lg">
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

                <div className="col-span-1 sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#01A3DB] text-white rounded-md font-medium text-base sm:text-lg hover:bg-[#0192C5] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2"
                  >
                    Submit
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
