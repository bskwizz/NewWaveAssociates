import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Search, Zap, LogIn, Lightbulb, Rocket, Users, type LucideIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TeamAvatars from '../components/TeamAvatars';

const aboutIntro =
  'New Wave was built on a simple belief: the most valuable thing a company can have is experienced leaders who have done the job before. We provide deeply vetted executives who step in quickly, establish accountability, solve complex business challenges, and deliver measurable results across procurement, strategic sourcing, revenue operations, transformation, project management, and M&A integration.';

// The four commitments every client can expect ("What to Expect").
const commitments: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: LogIn,
    title: 'We Step In',
    description:
      'We integrate quickly, establish priorities, and begin moving important work forward from day one.',
  },
  {
    icon: Lightbulb,
    title: 'We Create Clarity',
    description:
      'We simplify complexity by defining priorities, decision rights, accountability, and measurable outcomes.',
  },
  {
    icon: Rocket,
    title: 'We Drive Execution',
    description:
      'We remove barriers, align teams, and stay accountable until measurable business value is delivered.',
  },
  {
    icon: Users,
    title: 'We Leave Stronger Teams',
    description:
      'We build capability, establish repeatable operating rhythms, and leave organizations better positioned for long-term success.',
  },
];

const primaryButton =
  'inline-block px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md';
const secondaryButton =
  'inline-block px-7 py-3.5 bg-white text-[#38495D] text-base font-semibold uppercase tracking-wide rounded-md border border-gray-300 hover:border-[#38495D] transition-all';

// Shared source of truth for the three comparison cards and the detailed table.
interface LeadershipModel {
  model: string;
  icon: LucideIcon;
  primaryValue: string;
  supportingCopy: string;
  /** Card attributes; the last item doubles as the best-fit callout. */
  attributes: string[];
  emphasized: boolean;
  table: {
    purpose: string;
    timeToImpact: string;
    accountability: string;
    whoYouGet: string;
    role: string;
    bestFit: string;
  };
}

const leadershipModels: LeadershipModel[] = [
  {
    model: 'Traditional Consulting',
    icon: Compass,
    primaryValue: 'Advice and Recommendations',
    supportingCopy:
      'Best suited for organizations that need analysis, specialized expertise, or an outside perspective.',
    attributes: [
      'External advisory role',
      'Consulting team model',
      'Engagement deliverables',
      'Often begins with assessment',
      'Best for analysis and specialized advice',
    ],
    emphasized: false,
    table: {
      purpose: 'Advice and recommendations',
      timeToImpact: 'Often begins with assessment',
      accountability: 'Engagement deliverables',
      whoYouGet: 'Consulting team',
      role: 'External advisor',
      bestFit: 'Analysis and specialized advice',
    },
  },
  {
    model: 'New Wave',
    icon: Zap,
    primaryValue: 'Immediate Operating Leadership',
    supportingCopy:
      'Best suited for organizations that need experienced leadership to step directly into the work.',
    attributes: [
      'Embedded operating leader',
      'Fractional, interim, or project-based',
      'Accountability for execution',
      'Focus on business outcomes',
      'Best for critical gaps, transitions, & initiatives',
    ],
    emphasized: true,
    table: {
      purpose: 'Immediate operating leadership',
      timeToImpact: 'Leader steps directly into the work',
      accountability: 'Execution and business outcomes',
      whoYouGet: 'Fractional, interim, or project-based leader',
      role: 'Embedded operating leader',
      bestFit: 'Critical gaps, transitions, and initiatives',
    },
  },
  {
    model: 'Executive Search',
    icon: Search,
    primaryValue: 'Permanent Executive\nHiring',
    supportingCopy:
      'Best suited for organizations ready to recruit and appoint a long-term permanent leader.',
    attributes: [
      'Recruiting partner',
      'Permanent candidate placement',
      'Impact begins after the hire',
      'Success measured by placement',
      'Best for long-term permanent hiring',
    ],
    emphasized: false,
    table: {
      purpose: 'Permanent candidate placement',
      timeToImpact: 'Begins after the hire',
      accountability: 'Successful placement',
      whoYouGet: 'Permanent executive candidate',
      role: 'Recruiting partner',
      bestFit: 'Long-term permanent hiring',
    },
  },
];

const TABLE_ROWS: { label: string; key: keyof LeadershipModel['table'] }[] = [
  { label: 'Purpose', key: 'purpose' },
  { label: 'Time to Impact', key: 'timeToImpact' },
  { label: 'Accountability', key: 'accountability' },
  { label: 'Who You Get', key: 'whoYouGet' },
  { label: 'Role in the Business', key: 'role' },
  { label: 'Best Fit', key: 'bestFit' },
];

export default function AboutUsPage() {
  const vantaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-x-clip">
      <div ref={vantaRef} className="capabilities-hero relative" aria-label="About Us">
        <PageHeader />

        <h1 className="sr-only">About New Wave Associates</h1>

        <div className="capabilities-hero__inner hero-content relative z-20 pt-[32px] sm:pt-[48px] lg:pt-[4rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
            <div className="w-full">
              {/* About — centered hero */}
              <div className="text-center max-w-3xl mx-auto pt-2 sm:pt-4 lg:pt-6">
                <div className="inline-block mb-5 sm:mb-6">
                  <p className="text-[#f05e00] text-xs sm:text-sm lg:text-base font-bold uppercase" style={{ letterSpacing: '0.25em' }}>
                    About Us
                  </p>
                  <div className="mt-2 h-[2px] bg-[#f05e00]"></div>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#38495D] leading-tight">
                  Operators.
                  <br />
                  Ready when you are.
                </h2>
                <p className="mt-6 sm:mt-7 text-base sm:text-lg text-gray-700 leading-relaxed">
                  {aboutIntro}
                </p>
              </div>

              {/* The four of us — overlapping cluster of rounded, full-color photos */}
              <TeamAvatars className="pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 md:pb-12 lg:pb-16" />

              {/* Full-bleed white section band (header through the closing callout) */}
              <div className="relative left-1/2 -translate-x-1/2 w-screen bg-white border-y border-gray-200 my-10 sm:my-14 lg:my-16 py-12 sm:py-16 lg:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
              <div className="text-left mb-5 sm:mb-6 lg:mb-8">
                <div className="inline-block mb-2">
                  <div>
                    <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                      letterSpacing: '0.25em'
                    }}>
                      A Different Kind of Leadership Partner
                    </p>
                    <div className="h-[2px] bg-[#f05e00]"></div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4 sm:mt-5 lg:mt-6">
                  Companies have several options when leadership capacity is missing. New Wave is designed for the moments when the business needs more than advice, but a permanent hire is not yet practical. The right solution depends on the need. Here is how the three models differ.
                </p>
              </div>

              {/* Three comparison cards (primary visual) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
                {leadershipModels.map((m) => {
                  const Icon = m.icon;
                  const cardAttributes = m.attributes.slice(0, -1);
                  const bestFit = m.attributes[m.attributes.length - 1];
                  return (
                    <div
                      key={m.model}
                      className={`relative flex h-full flex-col rounded-xl p-6 sm:p-7 transition-shadow ${
                        m.emphasized
                          ? 'order-first sm:order-none bg-[#38495D] text-white shadow-xl ring-1 ring-[#01A3DB]/40'
                          : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                      }`}
                    >
                        {m.emphasized ? (
                          <div className="h-11 flex items-center mb-4">
                            <img
                              src="/new_wave_associates_logo_only.png"
                              alt=""
                              className="h-7 w-auto"
                            />
                          </div>
                        ) : (
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-gray-100 text-[#38495D]">
                            <Icon size={22} strokeWidth={2} />
                          </div>
                        )}
                        <h3
                          className={`text-xs sm:text-sm font-bold uppercase tracking-wide ${
                            m.emphasized ? 'text-gray-300' : 'text-gray-500'
                          }`}
                        >
                          {m.model}
                        </h3>
                        <p
                          className={`mt-1.5 whitespace-pre-line text-xl sm:text-2xl font-bold leading-snug ${
                            m.emphasized ? 'text-white' : 'text-[#38495D]'
                          }`}
                        >
                          {m.primaryValue}
                        </p>
                        <div
                          className={`mt-3 h-[2px] w-10 ${m.emphasized ? 'bg-[#f05e00]' : 'bg-[#38495D]'}`}
                        />
                        <p
                          className={`mt-3 text-sm leading-relaxed ${
                            m.emphasized ? 'text-gray-200' : 'text-gray-600'
                          }`}
                        >
                          {m.supportingCopy}
                        </p>
                        <ul className="mt-5 space-y-2">
                          {cardAttributes.map((a) => (
                            <li
                              key={a}
                              className={`flex gap-2.5 text-sm leading-snug ${
                                m.emphasized ? 'text-gray-100' : 'text-gray-700'
                              }`}
                            >
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#01A3DB]" />
                              {a}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto pt-4">
                          <span
                            className={`block rounded-lg px-3 py-2 text-xs font-semibold ${
                              m.emphasized ? 'bg-[#f05e00] text-white' : 'text-[#38495D]'
                            }`}
                          >
                            {bestFit}
                          </span>
                        </div>
                    </div>
                  );
                })}
              </div>

              {/* Detailed comparison table (tablet and desktop; mobile relies on the cards above) */}
              <div className="hidden md:block mb-8 sm:mb-10">
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full table-fixed border-collapse bg-white text-left">
                    {/* Column widths chosen so the New Wave (3rd) column is centered
                        in the container, lining up with the centered New Wave card. */}
                    <colgroup>
                      <col style={{ width: '13%' }} />
                      <col style={{ width: '21%' }} />
                      <col style={{ width: '32%' }} />
                      <col style={{ width: '34%' }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th className="px-5 py-4" />
                        {leadershipModels.map((m) => (
                          <th
                            key={m.model}
                            scope="col"
                            className={`px-5 py-4 text-sm font-bold ${
                              m.emphasized ? 'bg-[#38495D] text-white' : 'text-[#38495D]'
                            }`}
                          >
                            {m.emphasized ? (
                              <span className="inline-flex items-center gap-2">
                                <img
                                  src="/new_wave_associates_logo_only.png"
                                  alt=""
                                  className="h-5 w-auto shrink-0 relative -top-[2px]"
                                />
                                {m.model.toUpperCase()}
                              </span>
                            ) : (
                              m.model
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TABLE_ROWS.map((row, ri) => (
                        <tr key={row.key} className={ri % 2 === 1 ? 'bg-gray-50' : ''}>
                          <th
                            scope="row"
                            className="px-5 py-3.5 text-sm font-semibold text-[#38495D] align-top"
                          >
                            {row.label}
                          </th>
                          {leadershipModels.map((m) => (
                            <td
                              key={m.model}
                              className={`px-5 py-3.5 text-sm align-top ${
                                m.emphasized
                                  ? 'bg-[#01A3DB]/5 font-semibold text-[#38495D]'
                                  : 'text-gray-700'
                              }`}
                            >
                              {m.table[row.key]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom callout */}
              <div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#38495D]">
                    Choose the right solution for the challenge.
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    New Wave is built for the moments when your business needs experienced leadership now. When the opportunity, transition, or challenge cannot wait, we are ready when you are.
                  </p>
                </div>
              </div>
              </div>
              </div>

              {/* Why New Wave Exists — brand statement */}
              <div className="max-w-3xl pt-4 sm:pt-6 lg:pt-8 pb-14 sm:pb-20 lg:pb-24">
                <div className="inline-block mb-6 sm:mb-8">
                  <p className="text-black text-xs sm:text-sm lg:text-base font-bold uppercase" style={{ letterSpacing: '0.25em' }}>
                    Why New Wave Exists
                  </p>
                  <div className="mt-2 h-[2px] bg-[#f05e00]"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#38495D] leading-tight">
                  Leadership gaps should never become business constraints.
                </h2>
                <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-700 leading-relaxed">
                  New Wave exists to give organizations immediate access to experienced executive leadership when opportunity, transformation, or transition cannot wait.
                </p>
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  We believe companies should not have to choose between waiting months for a permanent hire or relying solely on outside recommendations. We provide experienced leaders who step into the work, create momentum, and deliver measurable business outcomes.
                </p>
              </div>

              {/* What to Expect */}
              <div className="pb-8 sm:pb-12 lg:pb-16">
                <div className="text-left mb-8 sm:mb-10 lg:mb-12">
                  <div className="inline-block mb-2">
                    <p className="text-black text-xs sm:text-sm lg:text-base font-bold uppercase" style={{ letterSpacing: '0.25em' }}>
                      What to Expect
                    </p>
                    <div className="mt-2 h-[2px] bg-[#f05e00]"></div>
                  </div>
                  <h2 className="mt-5 sm:mt-6 max-w-[860px] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38495D] leading-snug">
                    Every engagement begins the same way.
                  </h2>
                  <p className="mt-4 sm:mt-5 max-w-[860px] text-base sm:text-lg text-gray-700 leading-relaxed">
                    Whether we're engaged on an interim, fractional, or project basis, our approach is consistent. Here's what every client can expect from a New Wave leader.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                  {commitments.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.title}
                        className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 bg-[#01A3DB]/10 text-[#01A3DB]">
                          <Icon size={22} strokeWidth={2} aria-hidden="true" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#38495D] mb-2 sm:mb-3">
                          {c.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{c.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-white border-t border-gray-100 py-16 sm:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#38495D] leading-tight lg:whitespace-nowrap">
            Leadership, when it matters most.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed">
            Whether you're filling a leadership gap, accelerating a transformation, or building new
            capability, New Wave provides experienced executives who step into the work and move your
            business forward.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/find-a-leader/new" className={primaryButton}>
              Find the Right Leader
            </Link>
            <Link to="/solutions" className={secondaryButton}>
              Explore Leadership Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
