import { Link } from 'react-router-dom';
import {
  Package, Handshake, TrendingUp, Workflow, ClipboardList, GitMerge,
  CalendarClock, Zap, Target, CheckCircle2, type LucideIcon,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import PracticeAreaCard, { PracticeArea } from '../components/PracticeAreaCard';

// The six leadership practice areas, each a consistent "mini landing page".
const practiceAreas: PracticeArea[] = [
  {
    icon: Package,
    title: 'Procurement Leadership',
    promise: 'Build stronger supplier relationships. Reduce costs. Create lasting capability.',
    description:
      'Our procurement leaders help organizations improve spend visibility, negotiate complex supplier relationships, strengthen procurement teams, and build scalable operating models.',
    engagements: [
      'Procurement leadership',
      'Strategic procurement transformation',
      'Supplier relationship management',
      'Spend optimization',
      'Procurement organization design',
      'Contract strategy and negotiations',
    ],
    idealWhen: [
      'Your procurement leader has left.',
      'You need executive procurement expertise without a full-time hire.',
      'Procurement transformation has stalled.',
      'Cost reduction is a strategic priority.',
    ],
    hubRoute: 'hub-sga-optimization',
    hubLabel: 'Procurement',
  },
  {
    icon: Handshake,
    title: 'Strategic Sourcing',
    promise: 'Drive measurable savings through disciplined sourcing leadership.',
    description:
      'Our sourcing leaders develop category strategies, lead complex negotiations, and improve supplier performance across critical spend categories.',
    engagements: [
      'Category strategy',
      'Strategic sourcing',
      'RFP leadership',
      'Supplier negotiations',
      'Vendor selection',
      'Supplier performance management',
    ],
    idealWhen: [
      'Major sourcing events are approaching.',
      'Supplier costs continue to rise.',
      'Procurement lacks strategic capacity.',
    ],
    hubRoute: 'hub-labor-offshoring',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Operations',
    promise: 'Create predictable revenue through operational excellence.',
    description:
      'Our revenue operations leaders align sales, marketing, and customer success to improve forecasting, pipeline visibility, and commercial execution.',
    engagements: [
      'CRM optimization',
      'Forecasting',
      'Sales operations',
      'Commercial process design',
      'Revenue reporting',
      'Pricing strategy',
    ],
    idealWhen: [
      'Revenue growth has slowed.',
      'Forecasts are unreliable.',
      'Commercial teams are misaligned.',
    ],
    hubRoute: 'hub-gtm-growth',
  },
  {
    icon: Workflow,
    title: 'Transformation Office',
    promise: 'Turn strategy into execution.',
    description:
      'Our transformation leaders establish governance, executive reporting, portfolio management, and organizational accountability across enterprise initiatives.',
    engagements: [
      'Transformation Office (TMO)',
      'Enterprise governance',
      'Executive reporting',
      'Benefits realization',
      'Strategic initiative leadership',
      'Change leadership',
    ],
    idealWhen: [
      'Major transformations need stronger execution.',
      'Executive visibility is limited.',
      'Accountability has broken down.',
    ],
    hubRoute: 'hub-ai-automation',
  },
  {
    icon: ClipboardList,
    title: 'Project Management Office',
    promise: 'Deliver critical initiatives with confidence.',
    description:
      'Our PMO leaders improve execution, establish governance, recover troubled programs, and build scalable delivery organizations.',
    engagements: [
      'PMO leadership',
      'Portfolio management',
      'Program recovery',
      'Delivery governance',
      'Executive reporting',
      'PMO modernization',
    ],
    idealWhen: [
      'Projects continue to miss deadlines.',
      'Delivery risk is increasing.',
      'Portfolio visibility is lacking.',
    ],
    hubRoute: 'hub-transformation-office',
  },
  {
    icon: GitMerge,
    title: 'M&A Integration',
    promise: 'Accelerate value after the deal closes.',
    description:
      'Our operators lead integration planning, synergy realization, organizational alignment, and executive decision-making throughout mergers, acquisitions, and divestitures.',
    engagements: [
      'Integration Management Office',
      'Carve-outs',
      'Due diligence support',
      'Synergy realization',
      'Day One readiness',
      'Operating model integration',
    ],
    idealWhen: [
      'An acquisition has closed.',
      'Integration complexity is increasing.',
      'Leadership capacity is stretched.',
    ],
    hubRoute: 'hub-integration-consolidation',
  },
];

interface EngagementModel {
  icon: LucideIcon;
  title: string;
  description: string;
  bestFor: string[];
}

const engagementModels: EngagementModel[] = [
  {
    icon: CalendarClock,
    title: 'Fractional Leadership',
    description:
      'Part-time executive leadership for organizations that need strategic expertise without a full-time executive.',
    bestFor: ['Growing companies', 'PE-backed businesses', 'Leadership coaching', 'Building new capabilities'],
  },
  {
    icon: Zap,
    title: 'Interim Leadership',
    description:
      'Immediate executive leadership during transitions, leaves of absence, executive searches, or business-critical moments.',
    bestFor: ['Executive vacancies', 'Organizational transitions', 'Business continuity', 'Turnarounds'],
  },
  {
    icon: Target,
    title: 'Project-Based Leadership',
    description:
      'Experienced operators brought in to lead a specific initiative from planning through execution.',
    bestFor: ['Enterprise transformations', 'PMO/TMO implementation', 'M&A integration', 'Procurement transformation'],
  },
];

const whyNewWave = [
  'Leaders who have sat in the seat.',
  'Ready when you are.',
  'We own the outcome.',
  'Flexible engagement models.',
  'Executive-level experience.',
  'Practical leadership that delivers results.',
];

const primaryButton =
  'inline-block px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md';

export default function SolutionsPage() {
  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <div className="bg-white">
        <PageHeader />
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 pt-8 sm:pt-12 lg:pt-16 pb-14 sm:pb-16 lg:pb-20">
            <h1 className="sr-only">
              Leadership Solutions — Fractional & Interim Executive Leadership from New Wave Associates
            </h1>

            <div className="inline-block mb-6">
              <p
                className="text-black text-sm sm:text-base font-bold tracking-[0.2em] uppercase"
                style={{ letterSpacing: '0.2em' }}
              >
                Leadership Solutions
              </p>
              <div className="mt-2 h-[2px] bg-[#f05e00]" />
            </div>

            <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#38495D] leading-tight max-w-5xl">
              Experienced Executive Leadership.
              <br />
              Exactly When You Need It.
            </p>

            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-[860px]">
              Whether you're filling a leadership gap, launching a critical initiative, or building a
              function from the ground up, New Wave provides deeply vetted operators who step into
              leadership roles and deliver measurable results.
            </p>

            <p className="mt-4 text-base sm:text-lg font-semibold text-[#38495D]">
              No recruiting. No six-month search. No junior consultants.
            </p>

            <div className="mt-8">
              <Link to="/contact-us" className={primaryButton}>
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Where We Lead — the six practice areas */}
      <Section background="gray">
        <SectionHeader
          label="Where We Lead"
          intro="Every New Wave leader has successfully led the function they support. Our operators bring practical experience, executive judgment, and accountability from day one."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.title} {...area} />
          ))}
        </div>
      </Section>

      {/* Engagement Models */}
      <Section background="white">
        <SectionHeader
          label="Engagement Models"
          heading="Leadership That Fits Your Business."
          intro="Every organization has different needs. We provide flexible engagement models designed to deliver experienced leadership without unnecessary overhead."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-[#f05e00]/10 text-[#f05e00]">
                <model.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#38495D] mb-2 transition-colors group-hover:text-[#f05e00]">
                {model.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">{model.description}</p>
              <div className="mt-auto">
                <p className="text-xs font-bold uppercase tracking-wide text-[#f05e00] mb-2">Best for</p>
                <ul className="space-y-1.5">
                  {model.bestFor.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-gray-700 leading-snug">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05e00]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why New Wave */}
      <Section background="gray">
        <SectionHeader label="Why New Wave" heading="Operators. Not Consultants." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl">
          {whyNewWave.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm"
            >
              <CheckCircle2 size={22} strokeWidth={2} className="text-[#01A3DB] shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-[#38495D]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38495D] leading-tight">
            Ready to Strengthen Your Leadership Team?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Whether you need interim leadership tomorrow, fractional expertise for the next year, or
            an experienced operator to lead a critical initiative, New Wave is ready to help.
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
