import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CTABar from '../components/CTABar';
import PageHeader from '../components/PageHeader';
import LogoScroller from '../components/LogoScroller';
import { capabilities } from '../data/capabilities';
import { getAllPublishedInsights, Insight } from '../services/insightsService';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const values = [
  {
    title: 'We Own the Outcome',
    description: 'We take responsibility for results, not just recommendations, and stay engaged until value is real.',
  },
  {
    title: 'We Put Operators First',
    description: 'Practical solutions that respect real-world constraints and that teams can actually sustain.',
  },
  {
    title: 'We Choose Clarity Over Complexity',
    description: 'Plain language drives alignment, and alignment drives execution.',
  },
  {
    title: 'We Earn Trust Daily',
    description: 'Consistent, honest execution — we do what we say we will do and make progress visible.',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [featured, setFeatured] = useState<Insight[]>([]);
  const [insightsLoaded, setInsightsLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    async function loadFeatured() {
      try {
        const data = await getAllPublishedInsights();
        if (active) setFeatured(data.slice(0, 3));
      } catch (e) {
        console.error('Failed to load featured insights:', e);
      } finally {
        if (active) setInsightsLoaded(true);
      }
    }
    loadFeatured();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="overflow-x-clip">
      <div className="hero relative min-h-screen lg:h-screen overflow-x-clip" style={{
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

        <h1 className="sr-only">
          New Wave Associates — Operational Transformation, Procurement & Revenue Operations Consulting
        </h1>

        <div className="relative flex items-start pt-6 sm:pt-8 lg:pt-12">
          <div className="w-full flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 items-start">
                <div id="hero-rotator" className="hero-rotator text-left order-1">
                  <div className="inline-block mb-2">
                    <div>
                      <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2 animate-fade-in" style={{
                        letterSpacing: '0.25em'
                      }}>
                        The New Playbook<br />For Operational Leaders
                      </p>
                      <div className="h-[2px] bg-[#f05e00]"></div>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-left mt-4 sm:mt-5 lg:mt-6">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      We bring <em className="font-semibold not-italic">operator-grade expertise</em> in procurement, revenue operations, and transformation excellence to help lower and middle market companies protect margins, extract value from their vendor communities, and prepare for the future.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-visible order-2 lg:-mt-8">
                  <img
                    src="/new_wave_process_graphic_(1).png"
                    alt="New Wave Associates Process"
                    className="w-full h-auto scale-110 sm:scale-115 md:scale-110 lg:scale-115 xl:scale-125 origin-center reveal-animation"
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#00a4dd] mt-8 sm:mt-10 lg:mt-12 h-12 sm:h-16 lg:h-[75px]"></div>
            <div className="w-full flex items-center justify-center py-6 sm:py-7 lg:py-8 overflow-hidden">
              <LogoScroller logos={[
                '/osg_logo.png',
                '/bridgeview_eye_logo.png',
                '/medius.png',
                '/neweratechnology.png',
                '/trustage.png',
                '/tenet_health_logo.png',
                '/hydrochem_logo.png',
                '/netsuite_logo.png',
                '/sentinel_logo.png',
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="inline-block mb-8 sm:mb-10">
            <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase mb-2" style={{ letterSpacing: '0.2em' }}>
              What We Do
            </h2>
            <div className="h-[2px] bg-[#f05e00]"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mb-8 sm:mb-10">
            We embed alongside operational leaders to drive measurable outcomes across six core areas — from go-to-market growth and cost optimization to integration, labor strategy, and AI-enabled automation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {capabilities.map((capability) => (
              <Link
                key={capability.id}
                to={`/${capability.hubRoute}`}
                className="group block bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#38495D] mb-3 group-hover:text-[#01A3DB] transition-colors">
                  {capability.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  {capability.outcome}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-[#01A3DB]">
                  Explore
                  <ChevronRight size={16} className="ml-1 text-[#f05e00]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Differ */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="inline-block mb-8 sm:mb-10">
            <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase mb-2" style={{ letterSpacing: '0.2em' }}>
              How We Differ
            </h2>
            <div className="h-[2px] bg-[#f05e00]"></div>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#38495D] leading-snug max-w-3xl mb-5">
            Senior Operators. Realistic Outcomes. Timebound Delivery.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
            We embed in the trenches with leaders to achieve specific, pragmatic goals quickly. Our team has served as director, VP, and C-level executives in house, and we step in to take responsibility — not advise from the sidelines — until progress is real and value is delivered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg p-5 sm:p-6 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-[#38495D] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section
        className="bg-white py-12 sm:py-16 lg:py-20"
        data-insights-ready={insightsLoaded ? 'true' : undefined}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
            <div className="inline-block">
              <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase mb-2" style={{ letterSpacing: '0.2em' }}>
                Latest Insights
              </h2>
              <div className="h-[2px] bg-[#f05e00]"></div>
            </div>
            <Link to="/insights" className="text-sm font-semibold text-[#01A3DB] hover:underline whitespace-nowrap">
              View all →
            </Link>
          </div>
          {featured.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {featured.map((insight) => (
                <Link
                  key={insight.slug}
                  to={`/insights/${insight.slug}`}
                  className="group block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {insight.image_url && (
                    <img
                      src={insight.image_url}
                      alt={insight.title}
                      className="w-full h-44 object-cover"
                    />
                  )}
                  <div className="p-5 sm:p-6">
                    {insight.category && (
                      <span className="inline-block px-3 py-1 bg-[#01A3DB] text-white text-xs font-semibold rounded-full uppercase tracking-wide mb-3">
                        {insight.category}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-[#38495D] leading-snug mb-2 group-hover:text-[#01A3DB] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                      {insight.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              Read our latest thinking on the{' '}
              <Link to="/insights" className="text-[#01A3DB] hover:underline">Insights page</Link>.
            </p>
          )}
        </div>
      </section>

      <CTABar
        text="Learn more about New Wave solutions for your unique growth opportunity"
        buttonText="Contact Us"
        onButtonClick={() => onNavigate('contact-us')}
      />
    </div>
  );
}
