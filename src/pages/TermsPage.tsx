import { Link } from 'react-router-dom';

export default function TermsPage() {
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

        <h1 className="text-3xl font-bold text-[#38495D] mb-2">Terms of Use</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: March 18, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using the New Wave Associates LLC website ("Site"), you agree to be bound
              by these Terms of Use. If you do not agree to these terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Informational Purpose Only</h2>
            <p>
              The content on this Site is provided for general informational purposes only. Nothing on
              this Site constitutes professional consulting, legal, financial, or business advice. Engaging
              New Wave Associates for professional services requires a separate written agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Intellectual Property</h2>
            <p>
              All content on this Site, including but not limited to text, graphics, case studies,
              frameworks, logos, and downloadable materials, is the exclusive property of New Wave
              Associates LLC and is protected by applicable copyright, trademark, and intellectual
              property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, or create derivative works from any content on
              this Site without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">No Warranties</h2>
            <p>
              The Site is provided on an "as is" and "as available" basis without warranties of any kind,
              either express or implied. We do not warrant that the Site will be uninterrupted, error-free,
              or free of viruses or other harmful components. We reserve the right to modify or discontinue
              the Site at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, New Wave Associates LLC shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or related
              to your use of or inability to use the Site or its content, even if we have been advised of
              the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites, including LinkedIn and other platforms.
              These links are provided for convenience only. New Wave Associates LLC does not endorse or
              assume responsibility for the content, privacy practices, or accuracy of any third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Governing Law</h2>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of the State
              of Delaware, without regard to its conflict of law provisions. Any disputes arising under
              these terms shall be subject to the exclusive jurisdiction of courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Changes to These Terms</h2>
            <p>
              We may update these Terms of Use from time to time. Continued use of the Site after any
              changes constitutes your acceptance of the revised terms. We encourage you to review this
              page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#38495D] mb-3">Contact</h2>
            <p>
              For questions about these Terms of Use, please contact us at:
            </p>
            <p className="mt-2 font-medium text-[#38495D]">
              New Wave Associates LLC<br />
              <a href="mailto:info@newwaveassociates.com" className="text-[#01A3DB] hover:underline">
                info@newwaveassociates.com
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
