import { useState } from 'react';
import EmailCaptureModal from './EmailCaptureModal';
import { persistUnlock, recordLead } from '../services/leadCaptureService';

interface ArticleFooterCTAProps {
  slug?: string;
}

export default function ArticleFooterCTA({ slug }: ArticleFooterCTAProps) {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleInlineSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    persistUnlock(trimmed);
    await recordLead({ email: trimmed, source: 'subscribe_footer', slug, url: window.location.href });
    setSubmitted(true);
  }

  return (
    <>
      <div
        className="mt-20 max-w-4xl rounded-2xl px-8 py-10 print:hidden"
        style={{ background: 'linear-gradient(135deg, #f7f9fb 0%, #eef3f7 100%)', border: '1px solid #e2e8f0' }}
      >
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
            Receive future insights
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
            Subscribe to get new articles and white papers delivered to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              You're all set.
            </div>
          ) : (
            <form onSubmit={handleInlineSubmit} className="flex gap-2 flex-wrap sm:flex-nowrap">
              <div className="flex-1 min-w-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#01A3DB]/40 focus:border-[#01A3DB] transition-colors bg-white"
                  style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}
                  autoComplete="email"
                />
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-lg hover:bg-[#d94f00] transition-colors whitespace-nowrap"
                style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {showModal && (
        <EmailCaptureModal
          context="subscribe_footer"
          onSubmit={async (em) => {
            persistUnlock(em);
            await recordLead({ email: em, source: 'subscribe_footer', slug, url: window.location.href });
            setShowModal(false);
            setSubmitted(true);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
