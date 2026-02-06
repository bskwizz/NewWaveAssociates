import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABar from '../components/CTABar';
import { getInsightBySlug, Insight } from '../services/insightsService';

interface InsightDetailPageProps {
  onNavigate: (page: string) => void;
  slug: string;
}

export default function InsightDetailPage({ onNavigate, slug }: InsightDetailPageProps) {
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInsight() {
      try {
        const data = await getInsightBySlug(slug);
        setInsight(data);
      } catch (e) {
        console.error('Failed to load insight:', e);
      } finally {
        setLoading(false);
      }
    }
    loadInsight();
  }, [slug]);

  if (loading) {
    return (
      <div className="overflow-x-clip">
        <div className="min-h-screen bg-gray-50">
          <PageHeader />
          <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
            <p className="text-center text-gray-600">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!insight) {
    return (
      <div className="overflow-x-clip">
        <div className="min-h-screen bg-gray-50">
          <PageHeader />
          <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
            <p className="text-center text-gray-600 mb-6">Article not found</p>
            <div className="text-center">
              <button
                onClick={() => onNavigate('insights')}
                className="inline-flex items-center gap-2 text-[#01A3DB] hover:text-[#0088b8] font-semibold"
              >
                <ArrowLeft size={20} />
                Back to Insights
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-clip">
      <style>{`
        .editorial-article p:first-of-type::first-letter {
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
          .editorial-article p:first-of-type::first-letter {
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

        .editorial-article p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #000;
          margin-bottom: 1.5rem;
          max-width: 65ch;
          font-family: "Segoe UI", system-ui, sans-serif;
        }

        .editorial-article ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
          max-width: 65ch;
          list-style-type: disc;
        }

        .editorial-article li {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #000;
          margin-bottom: 0.75rem;
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
            onClick={() => onNavigate('insights')}
            className="inline-flex items-center gap-2 text-[#01A3DB] hover:text-[#0088b8] font-semibold mb-12 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Insights
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 leading-[1.1] max-w-[90%]" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
            {insight.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-black mb-10" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
            <span>{new Date(insight.publish_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>|</span>
            <span>Article</span>
          </div>

          {insight.image_url && (
            <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
              <img
                src={insight.image_url}
                alt={insight.title}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          )}

          <div className="border-b border-gray-300 mb-12"></div>

          <div
            className="editorial-article max-w-4xl"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />

          <div className="mt-20 pt-12 border-t border-gray-300 max-w-4xl">
            <h3 className="text-xl font-bold text-black mb-6" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>About the Author</h3>
            <p className="text-black leading-[1.8] text-lg max-w-[65ch]" style={{ fontFamily: '"Segoe UI", system-ui, sans-serif' }}>{insight.author_bio}</p>
          </div>
        </article>
      </div>

      <CTABar
        text="Want to discuss these ideas with our team?"
        buttonText="Get in Touch"
        onButtonClick={() => onNavigate('contact-us')}
      />
    </div>
  );
}
