import { ArrowLeft } from 'lucide-react';
import PageHeader from './PageHeader';
import CTABar from './CTABar';

interface CaseStudyTemplateProps {
  onNavigate: (page: string) => void;
  backLink: {
    text: string;
    page: string;
  };
  title: string;
  heroImage: string;
  executiveSummary: string;
  opportunity: {
    content: string;
  };
  approach: {
    content: string;
  };
  outcome: {
    content: string;
  };
  authorBio?: string;
  ctaText?: string;
}

export default function CaseStudyTemplate({
  onNavigate,
  backLink,
  title,
  heroImage,
  executiveSummary,
  opportunity,
  approach,
  outcome,
  authorBio,
  ctaText = "Want to discuss similar opportunities with our team?"
}: CaseStudyTemplateProps) {
  return (
    <div className="overflow-x-clip">
      <style>{`
        .editorial-article .executive-summary {
          font-style: italic;
          border-bottom: 1px solid #d1d5db;
          padding-bottom: 2rem;
          margin-bottom: 2rem;
        }

        .editorial-article .executive-summary p {
          font-style: italic;
        }

        .editorial-article .executive-summary + div > p:first-of-type::first-letter {
          float: left;
          font-size: 4.5rem;
          line-height: 3.5rem;
          padding-right: 0.125rem;
          margin-top: 0.125rem;
          font-weight: 700;
          color: #000;
          font-family: "Segoe UI", system-ui, sans-serif;
        }

        @media (max-width: 640px) {
          .editorial-article .executive-summary + div > p:first-of-type::first-letter {
            font-size: 3.5rem;
            line-height: 2.75rem;
          }
        }

        .editorial-article h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #000;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          font-family: "Segoe UI", system-ui, sans-serif;
          letter-spacing: -0.015em;
        }

        .editorial-article .section-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #000;
          margin-top: 3rem;
          margin-bottom: 0.5rem;
          font-family: "Segoe UI", system-ui, sans-serif;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
        }

        .editorial-article .section-title::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #f05e00;
        }

        .editorial-article p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #000;
          margin-bottom: 1.5rem;
          max-width: 65ch;
          font-family: "Segoe UI", system-ui, sans-serif;
        }

        .editorial-article ul {
          margin: 0.5rem 0 1.5rem;
          padding-left: 1.5rem;
          max-width: 65ch;
          list-style-type: disc;
        }

        .editorial-article li {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #000;
          margin-bottom: 0.25rem;
          font-family: "Segoe UI", system-ui, sans-serif;
        }

        .editorial-article li::marker {
          color: #f05e00;
          font-size: 1.3em;
        }

        .editorial-article strong {
          font-weight: 600;
          color: #000;
        }
      `}</style>

      <div className="min-h-screen bg-white">
        <PageHeader />

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-16">
          <button
            onClick={() => onNavigate(backLink.page)}
            className="inline-flex items-center gap-2 text-[#01A3DB] hover:text-[#0088b8] font-semibold mb-12 transition-colors"
          >
            <ArrowLeft size={20} />
            {backLink.text}
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 leading-[1.1] max-w-[90%]" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
            {title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-black mb-10" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
            <span>Case Study</span>
          </div>

          {heroImage && (
            <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          )}

          <div className="border-b border-gray-300 mb-12"></div>

          <div className="editorial-article max-w-4xl">
            <div className="executive-summary">
              <p>{executiveSummary}</p>
            </div>

            <div>
              <p className="section-title">Opportunity</p>
              <div dangerouslySetInnerHTML={{ __html: opportunity.content }} />
            </div>

            <div>
              <p className="section-title">Approach</p>
              <div dangerouslySetInnerHTML={{ __html: approach.content }} />
            </div>

            <div>
              <p className="section-title">Outcome</p>
              <div dangerouslySetInnerHTML={{ __html: outcome.content }} />
            </div>
          </div>

          {authorBio && (
            <div className="mt-20 pt-12 border-t border-gray-300 max-w-4xl">
              <h3 className="text-xl font-bold text-black mb-6" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>About the Author</h3>
              <p className="text-black leading-[1.8] text-lg max-w-[65ch]" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>{authorBio}</p>
            </div>
          )}
        </article>
      </div>

      <CTABar
        text={ctaText}
        buttonText="Get in Touch"
        onButtonClick={() => onNavigate('contact-us')}
      />
    </div>
  );
}
