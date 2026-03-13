import { useState } from 'react';
import Toast from './Toast';
import EmailCaptureModal from './EmailCaptureModal';
import { isUnlocked, persistUnlock, recordLead } from '../services/leadCaptureService';

interface ArticleUtilitiesBarProps {
  title: string;
  slug?: string;
  pdfUrl?: string;
}

export default function ArticleUtilitiesBar({ title, slug, pdfUrl }: ArticleUtilitiesBarProps) {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: window.location.href });
      } catch {
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setToast('Link copied');
      } catch {
        setToast('Link copied');
      }
    }
  }

  function handlePrint() {
    if (isUnlocked()) {
      window.print();
    } else {
      setShowPrintModal(true);
    }
  }

  function handleDownload() {
    if (!pdfUrl) {
      setToast('PDF coming soon');
      return;
    }
    if (isUnlocked()) {
      triggerDownload(pdfUrl);
    } else {
      setShowDownloadModal(true);
    }
  }

  function triggerDownload(url: string) {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  async function handleDownloadSubmit(email: string, company: string) {
    persistUnlock(email);
    try {
      await recordLead({
        email,
        company: company || undefined,
        source: 'download_pdf',
        article_slug: slug,
        page_url: window.location.href,
        pdf_url: pdfUrl,
      });
    } catch {
    }
    setShowDownloadModal(false);
    if (pdfUrl) {
      setTimeout(() => triggerDownload(pdfUrl!), 120);
    }
  }

  async function handlePrintSubmit(email: string, company: string) {
    persistUnlock(email);
    try {
      await recordLead({
        email,
        company: company || undefined,
        source: 'print_pdf',
        article_slug: slug,
        page_url: window.location.href,
        pdf_url: pdfUrl ?? undefined,
      });
    } catch {
    }
    setShowPrintModal(false);
    setTimeout(() => window.print(), 120);
  }

  return (
    <>
      <div className="flex items-center justify-end gap-6 py-3 mb-8 print:hidden">
        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-black transition-colors group"
          aria-label="Share"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-colors">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          <span className="text-[11px] font-medium tracking-wide uppercase" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>Share</span>
        </button>

        <button
          onClick={handlePrint}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-black transition-colors group"
          aria-label="Print"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-colors">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          <span className="text-[11px] font-medium tracking-wide uppercase" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>Print</span>
        </button>

        <button
          onClick={handleDownload}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-black transition-colors group"
          aria-label="Download PDF"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-colors">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span className="text-[11px] font-medium tracking-wide uppercase" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>Download</span>
        </button>
      </div>

      {showDownloadModal && (
        <EmailCaptureModal
          context="download_pdf"
          onSubmit={handleDownloadSubmit}
          onClose={() => setShowDownloadModal(false)}
        />
      )}

      {showPrintModal && (
        <EmailCaptureModal
          context="print_pdf"
          onSubmit={handlePrintSubmit}
          onClose={() => setShowPrintModal(false)}
        />
      )}

      {toast && (
        <Toast message={toast} onDismiss={() => setToast(null)} />
      )}
    </>
  );
}
