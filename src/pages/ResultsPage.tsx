import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import EngagementCard, { type Engagement } from '../components/EngagementCard';
import CountUp from '../components/CountUp';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { capabilities } from '../data/capabilities';

interface ResultsPageProps {
  onNavigate: (page: string) => void;
}

const primaryButton =
  'inline-block px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md';

// Headline KPIs — numbers are the primary visual element and count up on view.
const metrics: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string }[] = [
  { value: 45, prefix: '$', suffix: 'M+', label: 'Documented Cost Savings Delivered' },
  { value: 35, suffix: '+', label: 'Mergers & Acquisitions Supported' },
  { value: 11, prefix: '$', suffix: 'M', label: 'Annual Operating Efficiencies Delivered' },
  { value: 20, suffix: '%', label: 'Pricing Improvement Achieved' },
  { value: 5, prefix: '$', suffix: 'M+', label: 'Incremental ARR Generated' },
  { value: 8, suffix: '+', label: 'Industries Served' },
];

// Existing engagement data, reorganized around the executive leadership role and
// the engagement model, with outcomes rewritten short and scannable.
const engagements: Engagement[] = [
  {
    role: 'Vice President, Strategy & Transformation',
    model: 'Interim',
    industry: 'Technology & Managed Services',
    outcomes: [
      'Delivered $11M in annual operating efficiencies',
      'Created an M&A playbook supporting 35+ acquisitions',
    ],
  },
  {
    role: 'Vice President, Revenue Operations',
    model: 'Fractional',
    industry: 'B2B SaaS / FinTech',
    outcomes: [
      'Modernized the commercial technology stack',
      'Led multiple global M&A integrations',
      'Increased ASP by 20% and reduced churn by 10%',
      'Generated $2M in incremental ARR',
    ],
  },
  {
    role: 'Chief Procurement Officer',
    model: 'Fractional',
    industry: 'Business Process Outsourcing',
    outcomes: [
      'Drove vendor consolidation cutting $32M in annual cost',
      'Streamlined operations to lower the cost structure',
    ],
  },
  {
    role: 'Senior Director, Strategic Sourcing',
    model: 'Fractional',
    industry: 'Healthcare',
    outcomes: [
      'Delivered $22M in annual cost savings and unlocked $55M in working capital',
      'Cleansed 60,000+ supplier records into a unified vendor master',
    ],
  },
  {
    role: 'Director, Transformation',
    model: 'Interim',
    industry: 'Technology & Managed Services',
    outcomes: [
      'Led high-impact initiatives across a $1B platform',
      'Rationalized 80,000+ SKUs into one catalog, improving margin visibility',
    ],
  },
  {
    role: 'Chief Growth Officer',
    model: 'Interim',
    industry: 'Technology & Managed Services',
    outcomes: [
      'Led a go-to-market transformation across pricing, ICP, and KPIs',
      'Reduced revenue leakage with new pricing levers',
    ],
  },
  {
    role: 'Chief Operating Officer',
    model: 'Interim',
    industry: 'B2B SaaS / FinTech / AI',
    outcomes: [
      'Owned product roadmap, positioning, and strategic direction',
      'Set company-wide OKRs and KPI frameworks',
    ],
  },
  {
    role: 'Director, Strategy',
    model: 'Fractional',
    industry: 'B2B SaaS / FinTech',
    outcomes: [
      'Increased net revenue retention 5% and cut costs 15%',
      'Directed global M&A integrations across pricing and go-to-market',
    ],
  },
  {
    role: 'Vice President, Strategic Sourcing',
    model: 'Project-Based',
    industry: 'Waste & Recycling Services',
    outcomes: [
      'Built a go-to-market strategy for organics waste recycling',
      'Designed a new collections model leveraging existing fleet',
    ],
  },
  {
    role: 'Vice President, Strategic Alliances',
    model: 'Interim',
    industry: 'Banking & Payments',
    outcomes: [
      'Launched a B2C payments product generating $22M in annual interchange revenue',
      'Built CRM conversion and retention programs for card distribution',
    ],
  },
];

export default function ResultsPage({ onNavigate }: ResultsPageProps) {
  const [fadeIn, setFadeIn] = useState(false);
  const [kpiRef, kpiInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      {/* Hero — keeps the site's signature gradient backdrop, with the headline
          made the dominant element. */}
      <div
        className="hero relative pb-16 sm:pb-20"
        style={{
          background: `radial-gradient(1200px 600px at 15% -10%, rgba(1,163,219,0.25), transparent 50%),
                       radial-gradient(800px 400px at 85% 110%, rgba(56,73,93,0.25), transparent 50%),
                       linear-gradient(180deg, #f7f9fb 0%, #eef3f7 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20% 30%, #38495d 100%, transparent 0),
                              radial-gradient(1px 1px at 70% 60%, #01a3db 100%, transparent 0),
                              radial-gradient(1px 1px at 40% 80%, #38495d 100%, transparent 0)`,
            backgroundSize: '120px 120px, 160px 160px, 200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />

        <PageHeader />

        <h1 className="sr-only">New Wave Associates Results — Proven Executive Leadership Outcomes</h1>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 pt-8 md:pt-14">
          <div
            className={`max-w-4xl transition-all duration-700 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="inline-block mb-5">
              <p
                className="text-black text-xs sm:text-sm md:text-base font-bold uppercase"
                style={{ letterSpacing: '0.2em' }}
              >
                RESULTS
              </p>
              <div className="mt-2 h-[2px] bg-[#f05e00]" />
            </div>

            <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#38495D] leading-tight">
              Results. Not Recommendations.
            </p>

            <p className="mt-4 text-base sm:text-lg font-medium text-[#01A3DB]">
              Representative executive leadership engagements across interim, fractional, and project-based roles.
            </p>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-700 leading-relaxed">
              We measure success by outcomes, not recommendations. Explore how New Wave leaders have
              helped organizations navigate transformation, accelerate growth, reduce costs, and build
              lasting capability.
            </p>
          </div>
        </div>
      </div>

      {/* Proven Results — KPI band */}
      <Section background="white">
        <SectionHeader label="PROVEN RESULTS" />
        <div ref={kpiRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center justify-center text-center rounded-xl border border-gray-200 bg-white px-4 py-8 sm:py-10 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <CountUp
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals}
                start={kpiInView}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#38495D]"
              />
              <div className="mt-3 h-[2px] w-10 bg-[#f05e00]" />
              <p className="mt-3 text-sm sm:text-base font-medium text-gray-600 leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Recent Leadership Engagements */}
      <Section background="gray">
        <SectionHeader
          label="RECENT LEADERSHIP ENGAGEMENTS"
          intro="Every engagement is unique, but our approach is consistent. We step into leadership roles, establish accountability, and deliver measurable business outcomes. The engagements below represent a sample of the executive leadership roles our team has served."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {engagements.map((engagement) => (
            <EngagementCard key={engagement.role + engagement.industry} {...engagement} />
          ))}
        </div>
      </Section>

      {/* Capabilities gateway — preserved so the detailed case-study and hub
          pages stay reachable. */}
      <Section background="white">
        <SectionHeader
          label="EXPLORE OUR WORK"
          intro="The leadership we provide spans six core areas. Dive into the detailed case studies behind each."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {capabilities.map((capability) => (
            <section
              key={capability.id}
              id={capability.id}
              className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:shadow-lg"
            >
              <div className="inline-block mb-4">
                <p
                  className="text-black text-xs sm:text-sm font-bold uppercase"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {capability.title}
                </p>
                <div className="mt-2 h-[2px] bg-[#f05e00]" />
              </div>

              <ul className="space-y-2.5">
                {capability.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700 leading-snug">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#01A3DB]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="text-xs sm:text-sm font-semibold text-[#f05e00] mb-1">Outcome</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{capability.outcome}</p>
                <button
                  onClick={() => onNavigate(capability.hubRoute)}
                  className="mt-auto text-sm font-semibold text-[#01A3DB] hover:text-[#0182b3] transition-colors"
                >
                  View related case studies →
                </button>
              </div>
            </section>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#38495D] leading-tight">
            Need Leadership Like This?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
            Whether you need an interim executive, a fractional leader, or an experienced operator to
            lead a critical initiative, New Wave is ready to help.
          </p>
          <div className="mt-8">
            <Link to="/contact-us" className={primaryButton}>
              Schedule a Conversation
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
