import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import EngagementCard, { type Engagement } from '../components/EngagementCard';
import CountUp from '../components/CountUp';
import { useInViewOnce } from '../hooks/useInViewOnce';
import {
  PRACTICE_AREAS,
  practiceAreaFromSlug,
  practiceAreaHubPath,
  practiceAreaSlug,
  type PracticeAreaName,
} from '../data/practiceAreas';

const ENGAGEMENT_TYPES = ['Interim', 'Fractional', 'Project-Based'] as const;
const ALL = 'All';

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

// Structured engagement data. `practiceArea` and `model` drive the filters (never
// inferred from text at runtime); key figures in outcomes are wrapped in ** ** so
// EngagementCard renders them in <strong>.
const engagements: Engagement[] = [
  {
    role: 'Vice President, Strategy & Transformation',
    practiceArea: 'Transformation Office',
    model: 'Interim',
    industry: 'Technology & Managed Services',
    outcomes: [
      'Delivered **$11M** in annual operating efficiencies',
      'Created an M&A playbook supporting **35+ acquisitions**',
    ],
  },
  {
    role: 'Vice President, Revenue Operations',
    practiceArea: 'Revenue Operations',
    model: 'Fractional',
    industry: 'B2B SaaS / FinTech',
    outcomes: [
      'Modernized the commercial technology stack',
      'Led multiple global M&A integrations',
      'Increased ASP by **20%** and reduced churn by **10%**',
      'Generated **$2M** in incremental ARR',
    ],
  },
  {
    role: 'Chief Procurement Officer',
    practiceArea: 'Procurement',
    model: 'Fractional',
    industry: 'Business Process Outsourcing',
    outcomes: [
      'Delivered **$32M** in annual savings through vendor consolidation',
      'Streamlined operations and reduced structural costs',
    ],
  },
  {
    role: 'Senior Director, Strategic Sourcing',
    practiceArea: 'Strategic Sourcing',
    model: 'Fractional',
    industry: 'Healthcare',
    outcomes: [
      'Delivered **$22M** in annual cost savings and unlocked **$55M** in working capital',
      'Cleansed **60,000+** supplier records into a unified vendor master',
    ],
  },
  {
    role: 'Director, Transformation',
    practiceArea: 'Transformation Office',
    model: 'Interim',
    industry: 'Technology & Managed Services',
    outcomes: [
      'Led high-impact initiatives across a **$1B** platform',
      'Rationalized **80,000+ SKUs** into one catalog and improved margin visibility',
    ],
  },
  {
    role: 'Chief Growth Officer',
    practiceArea: 'Revenue Operations',
    model: 'Interim',
    industry: 'Technology & Managed Services',
    outcomes: [
      'Led a go-to-market transformation across pricing, ICP, and KPIs',
      'Reduced revenue leakage through new pricing levers',
    ],
  },
  {
    role: 'Chief Operating Officer',
    practiceArea: 'Transformation Office',
    model: 'Interim',
    industry: 'B2B SaaS / FinTech / AI',
    outcomes: [
      'Led product roadmap, market positioning, and strategic direction',
      'Established company-wide OKRs and performance measures',
    ],
  },
  {
    role: 'Director, Strategy',
    practiceArea: 'M&A Integration',
    model: 'Fractional',
    industry: 'B2B SaaS / FinTech',
    outcomes: [
      'Increased net revenue retention by **5%** and reduced costs by **15%**',
      'Directed global M&A integrations across pricing and go-to-market',
    ],
  },
  {
    role: 'Vice President, Strategic Sourcing',
    practiceArea: 'Strategic Sourcing',
    model: 'Project-Based',
    industry: 'Waste & Recycling Services',
    outcomes: [
      'Built the go-to-market strategy for an organics waste recycling offering',
      'Designed a new collections model using existing fleet capacity',
    ],
  },
  {
    role: 'Vice President, Strategic Alliances',
    practiceArea: 'Revenue Operations',
    model: 'Interim',
    industry: 'Banking & Payments',
    outcomes: [
      'Launched a B2C payments product generating **$22M** in annual interchange revenue',
      'Built CRM conversion and retention programs for card distribution',
    ],
  },
  {
    role: 'Head of Project Management Office',
    practiceArea: 'Project Management Office',
    model: 'Project-Based',
    industry: 'Healthcare SaaS',
    outcomes: [
      'Stood up a full Project Management Office to standardize delivery',
      'Established governance and executive dashboards that made delivery predictable',
      'Enabled onboarding of the largest client at **$500K+ ARR**',
    ],
  },
];

// Compact accessible pill group used for both filter dimensions.
function FilterGroup({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: readonly string[];
  active: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#38495D] mb-3">{label}</p>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(option)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 ${
                isActive
                  ? 'bg-[#38495D] text-white border-[#38495D]'
                  : 'bg-white text-[#38495D] border-gray-300 hover:border-[#01A3DB] hover:text-[#01A3DB]'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const [fadeIn, setFadeIn] = useState(false);
  const [kpiRef, kpiInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeType, setActiveType] = useState<string>(ALL);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  // When arriving with a practice-area deep link (e.g. from Solutions), scroll to
  // the engagements section so the filtered results are immediately in view. Runs
  // once on mount (after the global ScrollToTop resets to the top); later filter
  // changes update the URL but do not re-trigger this.
  useEffect(() => {
    const slug = searchParams.get('practiceArea');
    if (!slug || !practiceAreaFromSlug(slug)) return;
    const t = setTimeout(() => {
      document.getElementById('engagements')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Practice-area filter is backed by the ?practiceArea= query param so it can be
  // deep-linked (e.g. from the Solutions page). Unknown/absent slug -> "All".
  const activeArea: string = practiceAreaFromSlug(searchParams.get('practiceArea')) ?? ALL;

  const selectArea = (name: string) => {
    const next = new URLSearchParams(searchParams);
    if (name === ALL) next.delete('practiceArea');
    else next.set('practiceArea', practiceAreaSlug(name as PracticeAreaName));
    setSearchParams(next, { replace: true });
  };

  // Both filters combine; original order is preserved within the result set.
  const filteredEngagements = engagements.filter(
    (e) =>
      (activeArea === ALL || e.practiceArea === activeArea) &&
      (activeType === ALL || e.model === activeType)
  );

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

        <h1 className="sr-only">New Wave Associates Results: Proven Executive Leadership Outcomes</h1>

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

      {/* Representative Leadership Engagements */}
      <Section background="gray" id="engagements">
        <SectionHeader
          label="REPRESENTATIVE LEADERSHIP ENGAGEMENTS"
          intro="Every engagement is different. Our approach is not. We step into leadership roles, establish accountability, and deliver measurable business outcomes. The engagements below represent a sample of the executive leadership roles our team has served."
        />
        <p className="-mt-6 sm:-mt-7 lg:-mt-8 mb-8 sm:mb-10 max-w-[860px] text-base sm:text-lg font-medium text-[#38495D] leading-relaxed">
          Filter engagements by leadership practice area or engagement model to explore
          representative business outcomes.
        </p>

        <div className="mb-8 sm:mb-10 space-y-5 sm:space-y-6">
          <FilterGroup
            label="Leadership Practice Area"
            options={[ALL, ...PRACTICE_AREAS]}
            active={activeArea}
            onSelect={selectArea}
          />
          <FilterGroup
            label="Engagement Type"
            options={[ALL, ...ENGAGEMENT_TYPES]}
            active={activeType}
            onSelect={setActiveType}
          />
        </div>

        {activeArea !== ALL && (
          <p className="-mt-2 mb-6 text-sm text-gray-600">
            Showing representative {activeArea} leadership engagements.{' '}
            <button
              type="button"
              onClick={() => selectArea(ALL)}
              className="rounded font-semibold text-[#01A3DB] underline underline-offset-2 hover:text-[#0182b3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
            >
              View all engagements
            </button>
          </p>
        )}

        {filteredEngagements.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {filteredEngagements.map((engagement) => (
              <EngagementCard key={engagement.role + engagement.industry} {...engagement} />
            ))}
          </div>
        ) : (
          <div role="status">
            <p className="text-base text-gray-600">No matching engagements found.</p>
            {activeArea !== ALL && (
              <Link
                to={practiceAreaHubPath(activeArea as PracticeAreaName)}
                className="mt-3 inline-block rounded text-sm font-semibold text-[#01A3DB] hover:text-[#0182b3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
              >
                Explore {activeArea} Case Studies →
              </Link>
            )}
          </div>
        )}
      </Section>

      {/* Bottom CTA */}
      <Section background="white">
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
