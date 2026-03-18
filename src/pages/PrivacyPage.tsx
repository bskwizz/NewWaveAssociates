import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-6 text-gray-800">
        <Link
          to="/"
          className="text-sm font-medium text-[#01A3DB] transition-colors hover:text-[#0088b8]"
        >
          Back to home
        </Link>

        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-[#38495D] sm:text-4xl">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: March 18, 2026</p>
        </header>

        <div className="space-y-6 text-base leading-7">
          <p>
            New Wave Associates values your privacy. This website may collect limited personal
            information that you choose to provide through contact forms or direct outreach, such as
            your name, email address, company name, and any information you include in your
            message.
          </p>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#38495D]">We use this information only to:</h2>
            <ul className="list-disc space-y-2 pl-6 marker:text-[#f05e00]">
              <li>respond to inquiries</li>
              <li>communicate about potential services or engagements</li>
              <li>maintain business records</li>
              <li>improve our website and communications</li>
            </ul>
          </section>

          <p>We do not sell your personal information.</p>

          <p>
            We may use third-party services or infrastructure providers to support the website,
            hosting, analytics, forms, or data storage. Information submitted through the site may
            be processed or stored through those providers solely for business operations.
          </p>

          <p>
            If cookies or analytics tools are used, they are used only to understand website traffic
            and improve site performance and user experience.
          </p>

          <section className="space-y-3">
            <p>
              If you would like to request correction or deletion of information you submitted
              through this website, please contact:
            </p>
            <a
              href="mailto:hello@newwaveassociates.com"
              className="font-medium text-[#01A3DB] transition-colors hover:text-[#0088b8]"
            >
              hello@newwaveassociates.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
