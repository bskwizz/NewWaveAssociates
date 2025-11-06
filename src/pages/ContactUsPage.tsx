import { useState } from 'react';
import { MapPin, Mail } from 'lucide-react';

export default function ContactUsPage() {
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
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl font-bold text-[#38495D] mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Have a question or want to request more information? Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#01A3DB] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-[#38495D] mb-1">Address</p>
                    <p className="text-gray-700">
                      1570 Galleon Drive<br />
                      Naples, FL 34102
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-[#01A3DB] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-[#38495D] mb-1">Email</p>
                    <a
                      href="mailto:hello@newwaveassociates.com"
                      className="text-[#01A3DB] hover:text-[#0192C5] transition-colors"
                    >
                      hello@newwaveassociates.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#38495D] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#38495D] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#38495D] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#38495D] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#38495D] mb-2">
                    Reason for Contact *
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a reason</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Consulting Services">Consulting Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#38495D] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#01A3DB] text-white rounded-md font-medium text-lg hover:bg-[#0192C5] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
