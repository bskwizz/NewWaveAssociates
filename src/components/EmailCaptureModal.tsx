import { useState, useEffect, useRef } from 'react';
import { clearUnlock, getSavedEmail } from '../services/leadCaptureService';

export type ModalContext = 'download_pdf' | 'subscribe_header' | 'subscribe_footer';

interface EmailCaptureModalProps {
  context: ModalContext;
  onSubmit: (email: string) => Promise<void>;
  onClose: () => void;
}

const COPY: Record<ModalContext, { title: string; subtitle: string; button: string }> = {
  download_pdf: {
    title: 'Download the PDF',
    subtitle: 'Enter your email to receive a copy for reference.',
    button: 'Send PDF',
  },
  subscribe_header: {
    title: 'Subscribe to New Wave Insights',
    subtitle: 'Operator-led perspectives on enterprise transformation and value creation.',
    button: 'Subscribe',
  },
  subscribe_footer: {
    title: 'Subscribe to New Wave Insights',
    subtitle: 'Operator-led perspectives on enterprise transformation and value creation.',
    button: 'Subscribe',
  },
};

export default function EmailCaptureModal({ context, onSubmit, onClose }: EmailCaptureModalProps) {
  const [email, setEmail] = useState(getSavedEmail() ?? '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const copy = COPY[context];

  useEffect(() => {
    const saved = getSavedEmail();
    if (!saved) {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await onSubmit(trimmed);
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleNotYou() {
    clearUnlock();
    setEmail('');
    setTimeout(() => inputRef.current?.focus(), 60);
  }

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(3px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-modal-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="mb-6">
          <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-[#f05e00]/10">
            {context === 'download_pdf' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f05e00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f05e00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            )}
          </div>
          <h2 className="text-xl font-bold text-black mb-2" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
            {copy.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
            {copy.subtitle}
          </p>
        </div>

        {success ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-green-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <p className="text-black font-semibold text-lg" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>You're all set.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="nwa-email-input">
                Email address
              </label>
              <input
                ref={inputRef}
                id="nwa-email-input"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#01A3DB]/40 focus:border-[#01A3DB] transition-colors"
                style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}
                autoComplete="email"
              />
              {error && (
                <p className="mt-1.5 text-xs text-red-500">{error}</p>
              )}
            </div>

            {getSavedEmail() && !success && (
              <button
                type="button"
                onClick={handleNotYou}
                className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
              >
                Not you? Clear saved email
              </button>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-lg hover:bg-[#d94f00] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}
            >
              {loading ? 'Sending…' : copy.button}
            </button>

            <p className="text-center text-xs text-gray-400" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
              No spam. Unsubscribe any time.
            </p>
          </form>
        )}
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in { animation: modal-in 0.2s ease-out both; }
      `}</style>
    </div>
  );
}
