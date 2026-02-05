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
      const data = await getInsightBySlug(slug);
      setInsight(data);
      setLoading(false);
    }
    loadInsight();
  }, [slug]);

  if (loading) {
    return (
      <div className="overflow-x-clip">
        <div className="min-h-screen bg-gray-50">
          <PageHeader onNavigate={onNavigate} currentPage="insights" />
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
          <PageHeader onNavigate={onNavigate} currentPage="insights" />
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
      <div className="min-h-screen bg-gray-50">
        <PageHeader onNavigate={onNavigate} currentPage="insights" />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-16">
          <button
            onClick={() => onNavigate('insights')}
            className="inline-flex items-center gap-2 text-[#01A3DB] hover:text-[#0088b8] font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Insights
          </button>

          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#01A3DB] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
              {insight.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38495D] mb-6 leading-tight">
            {insight.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-12 pb-8 border-b">
            <span className="font-semibold text-[#38495D]">{insight.author}</span>
            <span>•</span>
            <span>{new Date(insight.publish_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{insight.read_time}</span>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:text-[#38495D] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:text-gray-700 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />

          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-[#38495D] mb-4">About the Author</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="font-semibold text-[#38495D] mb-2">{insight.author}</p>
              <p className="text-gray-700 leading-relaxed">{insight.author_bio}</p>
            </div>
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
