import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import LogoScroller from '../components/LogoScroller';
import HeroRotator from '../components/HeroRotator';
import NextWaveHero from '../components/NextWaveHero';
import ContactForm from '../components/ContactForm';
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
      <div className="hero relative overflow-x-clip bg-white">
        <PageHeader />

        {/* One subtly shaded band, starting below the white nav bar, that unifies
            the "Your Next Wave" hero and the rotator/logos into a single section. */}
        <div className="relative overflow-x-clip" style={{
          background: 'linear-gradient(180deg, #fbfcfd 0%, #f4f7f9 100%)'
        }}>
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
            backgroundImage: `radial-gradient(1px 1px at 20% 30%, #38495d 100%, transparent 0),
                              radial-gradient(1px 1px at 70% 60%, #01a3db 100%, transparent 0),
                              radial-gradient(1px 1px at 40% 80%, #38495d 100%, transparent 0)`,
            backgroundSize: '120px 120px, 160px 160px, 200px 200px',
            backgroundRepeat: 'repeat'
          }}></div>

          <h1 className="sr-only">
            New Wave Associates — Operational Transformation, Procurement & Revenue Operations Consulting
          </h1>

          <NextWaveHero />

          <div className="relative flex items-start pt-6 sm:pt-8 lg:pt-12">
          <div className="w-full flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
              <HeroRotator />
            </div>
            <div className="w-full flex items-center justify-center pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
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

      {/* Get In Touch */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="inline-block mb-6 sm:mb-8">
            <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase mb-2" style={{ letterSpacing: '0.2em' }}>
              Get In Touch
            </h2>
            <div className="h-[2px] bg-[#f05e00]"></div>
          </div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mb-6 sm:mb-8">
            {"What's your biggest business challenge? Reach out to an expert today."}
          </p>
          <div className="max-w-3xl mx-auto">
            <ContactForm source="homepage" />
          </div>
        </div>
      </section>
    </div>
  );
}
