import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABar from '../components/CTABar';
import EmailCaptureModal from '../components/EmailCaptureModal';
import { getAllPublishedInsights, Insight } from '../services/insightsService';
import { persistUnlock, recordLead } from '../services/leadCaptureService';

interface InsightsPageProps {
  onNavigate: (page: string) => void;
}

export default function InsightsPage({ onNavigate }: InsightsPageProps) {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  async function handleSubscribeSubmit(email: string) {
    persistUnlock(email);
    await recordLead({ email, source: 'subscribe_insights', url: window.location.href });
  }

  useEffect(() => {
    async function loadInsights() {
      try {
        const data = await getAllPublishedInsights();
        setInsights(data);
      } catch (e) {
        console.error('Failed to load insights:', e);
      } finally {
        setLoading(false);
      }
    }
    loadInsights();
  }, []);


  return (
    <div className="overflow-x-clip">
      <div className="hero relative min-h-screen overflow-x-clip" style={{
        background: `radial-gradient(1200px 600px at 15% -10%, rgba(1,163,219,0.25), transparent 50%),
                     radial-gradient(800px 400px at 85% 110%, rgba(56,73,93,0.25), transparent 50%),
                     linear-gradient(180deg, #f7f9fb 0%, #eef3f7 100%)`
      }}>
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, #38495d 100%, transparent 0),
                            radial-gradient(1px 1px at 70% 60%, #01a3db 100%, transparent 0),
                            radial-gradient(1px 1px at 40% 80%, #38495d 100%, transparent 0)`,
          backgroundSize: '120px 120px, 160px 160px, 200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>

        <PageHeader />

        <div className="relative pt-6 sm:pt-8 lg:pt-[2.5rem] pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
            <div className="text-center mb-12">
              <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-3" style={{
                letterSpacing: '0.25em'
              }}>
                Insights
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                Practical thinking for operators leading change
              </h1>
              <button
                onClick={() => setShowSubscribeModal(true)}
                className="mt-6 px-8 py-3 bg-[#f05e00] text-white font-semibold rounded hover:bg-[#d95500] transition-colors"
              >
                Subscribe
              </button>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading insights...</p>
              </div>
            ) : insights.length > 0 ? (
              <div className="space-y-12">
                {insights.map((insight) => (
                  <div key={insight.id} className="bg-transparent rounded-lg overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 group/card">
                    <div className="flex flex-col md:flex-row">
                      {insight.image_url && (
                        <div className="md:w-1/2 pl-6 pt-6 pb-6 sm:pl-8 sm:pt-8 sm:pb-8 flex items-start">
                          <img
                            src={insight.image_url}
                            alt={insight.title}
                            className="w-full h-auto object-cover rounded"
                          />
                        </div>
                      )}
                      <div className={`${insight.image_url ? 'md:w-1/2' : 'w-full'} p-8 sm:p-10 lg:p-12 flex flex-col`}>
                        <p className="text-xs text-black mb-3">{insight.content_type || 'Article'}</p>
                        <div className="mb-4">
                          <span className="inline-block px-4 py-1.5 bg-[#01A3DB] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                            {insight.category}
                          </span>
                        </div>
                        <button
                          onClick={() => onNavigate(`insights/${insight.slug}`)}
                          className="text-left mb-4 w-full group/title"
                        >
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black group-hover/title:text-[#01A3DB] group-hover/title:underline leading-tight transition-colors">
                            {insight.title}
                            <ChevronRight className="inline-block ml-2 mb-1 text-[#f05e00]" size={32} />
                          </h2>
                        </button>
                        <p className="text-black text-base sm:text-lg leading-relaxed">
                          <span className="italic">{new Date(insight.publish_date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - </span>
                          {insight.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No insights available yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CTABar
        text="Ready to discuss how we can help your organization?"
        buttonText="Contact Us"
        onButtonClick={() => onNavigate('contact-us')}
      />

      {showSubscribeModal && (
        <EmailCaptureModal
          context="subscribe_insights"
          onSubmit={handleSubscribeSubmit}
          onClose={() => setShowSubscribeModal(false)}
        />
      )}
    </div>
  );
}
