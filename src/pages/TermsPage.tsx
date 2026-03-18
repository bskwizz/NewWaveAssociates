import { Link } from 'react-router-dom';

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-[#38495D] sm:text-4xl">Terms of Service</h1>
          <p className="text-sm text-gray-500">Last updated: March 18, 2026</p>
        </header>

        <div className="space-y-6 text-base leading-7">
          <p>
            This website is provided by New Wave Associates for general informational purposes only.
          </p>

          <p>
            Nothing on this website constitutes legal, financial, tax, accounting, or other
            professional advice. Any reliance on information from this site is at your own
            discretion and risk.
          </p>

          <p>
            All content on this website, including text, graphics, branding, logos, and materials,
            is the property of New Wave Associates unless otherwise stated and may not be copied,
            reproduced, or distributed without permission.
          </p>

          <p>
            Use of this website does not create a client, advisory, fiduciary, or professional
            relationship with New Wave Associates.
          </p>

          <p>
            We make reasonable efforts to keep website content accurate and up to date, but we make
            no warranties or representations regarding completeness, accuracy, or reliability.
          </p>

          <p>
            New Wave Associates is not liable for any damages arising from the use of this website
            or reliance on its content.
          </p>

          <p>
            We may update these terms from time to time by posting revised language on this page.
          </p>
        </div>
      </div>
    </div>
  );
}
