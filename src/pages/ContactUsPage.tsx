import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@newwaveassociates.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nCompany: ${formData.company}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#38495D] mb-6">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-gray-600">
            We typically respond within one business day.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#38495D] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#38495D] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#38495D] mb-2">
                Email
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
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#38495D] mb-2">
                Role / Title
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#38495D] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#01A3DB] text-white rounded-md font-medium text-lg hover:bg-[#0192C5] transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#01A3DB] focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#01A3DB]/5 to-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <Mail className="mx-auto mb-4 text-[#01A3DB]" size={32} />
            <p className="text-sm font-semibold text-[#38495D] mb-2">Prefer email?</p>
            <a
              href="mailto:hello@newwaveassociates.com"
              className="text-[#01A3DB] hover:text-[#0192C5] font-medium transition-colors"
            >
              hello@newwaveassociates.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#38495D]/5 to-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <Linkedin className="mx-auto mb-4 text-[#01A3DB]" size={32} />
            <p className="text-sm font-semibold text-[#38495D] mb-2">Prefer LinkedIn?</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#01A3DB] hover:text-[#0192C5] font-medium transition-colors"
            >
              Connect with us
            </a>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-10">
          <p className="text-xl font-medium text-[#38495D] mb-6">
            Looking for project-fit or just exploring options?
          </p>
          <button className="px-8 py-3 bg-[#EF5919] text-white rounded-md font-medium hover:bg-[#D54E15] transition-all hover:scale-105">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
}
