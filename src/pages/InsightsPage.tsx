import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABar from '../components/CTABar';
import { getAllPublishedInsights, Insight } from '../services/insightsService';

interface InsightsPageProps {
  onNavigate: (page: string) => void;
}

export default function InsightsPage({ onNavigate }: InsightsPageProps) {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInsights() {
      const data = await getAllPublishedInsights();
      setInsights(data);
      setLoading(false);
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

        <PageHeader onNavigate={onNavigate} currentPage="insights" />

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
                onClick={() => onNavigate('contact-us')}
                className="mt-6 px-8 py-3 bg-[#f05e00] text-white font-semibold rounded hover:bg-[#d95500] transition-colors"
              >
                Get in touch
              </button>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading insights...</p>
              </div>
            ) : insights.length > 0 ? (
              <div className="space-y-12">
                <div className="bg-transparent rounded-lg overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 group/card">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 lg:w-1/3 p-6 sm:p-8 flex items-start">
                      <img
                        src="/jenga_blocks_fallen.png"
                        alt="Jenga blocks fallen"
                        className="w-full h-auto object-cover rounded"
                      />
                    </div>
                    <div className="md:w-3/5 lg:w-2/3 p-8 sm:p-10 lg:p-12 flex flex-col">
                      <p className="text-xs text-black mb-3">Article</p>
                      <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 bg-[#01A3DB] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                          {insights[0].category}
                        </span>
                      </div>
                      <button
                        onClick={() => onNavigate(`insights/${insights[0].slug}`)}
                        className="text-left mb-4 w-full group/title"
                      >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black group-hover/title:text-[#01A3DB] group-hover/title:underline leading-tight transition-colors inline-block">
                          {insights[0].title.split('Avoided')[0]}Avoided<ChevronRight className="inline-block ml-2 mb-1 text-[#f05e00]" size={32} />
                        </h2>
                      </button>
                      <p className="text-black text-base sm:text-lg leading-relaxed">
                        <span className="italic">{new Date(insights[0].publish_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - </span>
                        We are living in a project-based economy, where nearly all meaningful change today is...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 sm:p-10 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#38495D] mb-3">
                    More insights coming soon
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    We publish short, operator-focused thinking as we build in public
                  </p>
                  <button
                    onClick={() => onNavigate('contact-us')}
                    className="px-6 py-3 bg-[#01A3DB] text-white font-semibold rounded hover:bg-[#0088b8] transition-colors"
                  >
                    Request updates
                  </button>
                </div>
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
    </div>
  );
}
