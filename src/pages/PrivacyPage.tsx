import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link to="/">
            <img
              src="/New Wave Associates Horizontal.png"
              alt="New Wave Associates"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-[#38495D] mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: March 18, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Overview</h2>
            <p>
              New Wave Associates LLC ("we," "us," or "our") respects your privacy. This Privacy Policy
              describes how we collect, use, and protect information you provide when visiting our website
              or contacting us through our forms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Information We Collect</h2>
            <p>We collect information you provide voluntarily, which may include:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your name and email address</li>
              <li>Your company or organization name</li>
              <li>Messages submitted through our contact or inquiry forms</li>
            </ul>
            <p className="mt-3">
              We do not collect sensitive personal information such as financial data, Social Security
              numbers, or health records through this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">How We Use Your Information</h2>
            <p>Information you submit is used solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Respond to your inquiries and service requests</li>
              <li>Deliver consulting services and communications related to an engagement</li>
              <li>Send relevant firm updates or thought leadership content, where you have opted in</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Third-Party Services</h2>
            <p>
              We use Supabase to securely store form submissions submitted through our website. Supabase
              processes data in accordance with its own privacy policy and industry-standard security
              practices. We do not use advertising networks or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Cookies and Analytics</h2>
            <p>
              Our website may use essential cookies required for basic site functionality. We do not
              currently use third-party tracking cookies or behavioral advertising tools. If this changes,
              this policy will be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Data Retention and Your Rights</h2>
            <p>
              We retain contact form submissions only as long as necessary to respond to your inquiry or
              fulfill a service engagement. You may request access to, correction of, or deletion of your
              personal data at any time by contacting us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Security</h2>
            <p>
              We implement reasonable administrative and technical safeguards to protect the information we
              collect. No method of transmission over the internet is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Contact</h2>
            <p>
              If you have questions about this Privacy Policy or would like to exercise your data rights,
              please contact us at:
            </p>
            <p className="mt-2 font-medium text-[#38495D]">
              New Wave Associates LLC<br />
              <a href="mailto:hello@newwaveassociates.com" className="text-[#01A3DB] hover:underline">
                hello@newwaveassociates.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100">
          <Link to="/" className="text-sm text-[#01A3DB] hover:underline">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
