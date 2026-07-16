import type { ReactNode } from 'react';
import {
  Briefcase, Compass, Hammer, Users, Target, Handshake,
  CalendarClock, Zap, Package, TrendingUp, Workflow, ClipboardList, GitMerge,
  Star, Layers, Building2, Puzzle, Repeat,
  FileText, MessageCircle, Network, BookOpen,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ExecutiveNetworkHero from '../components/ExecutiveNetworkHero';
import { ROUTES } from '../data/company';

const primaryButton =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2';

// 5. Who thrives here
const thriveCards: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Briefcase, title: 'Have Sat in the Seat', description: 'You have owned a function, led teams, made difficult decisions, and remained accountable for business performance.' },
  { icon: Compass, title: 'Thrive in Ambiguity', description: 'You know how to create clarity, establish priorities, and move forward when the path is not fully defined.' },
  { icon: Hammer, title: 'Enjoy Building', description: 'You are energized by creating capability, improving how work gets done, and leaving organizations stronger.' },
  { icon: Users, title: 'Lead Through Influence', description: 'You can align executives, teams, partners, and stakeholders without relying only on positional authority.' },
  { icon: Target, title: 'Own the Outcome', description: 'You measure success through execution and business results, not simply the completion of deliverables.' },
  { icon: Handshake, title: 'Value the Company of Peers', description: 'You enjoy learning from other experienced leaders and contributing to a network built on trust and collaboration.' },
];

// 6. Experience profile
const relevantExperience = [
  'Vice President, Senior Vice President, or C-level leadership',
  'Ownership of a business function, transformation, or enterprise initiative',
  'Building or scaling teams and operating capabilities',
  'Leading through growth, transition, integration, or disruption',
  'Managing cross-functional stakeholders',
  'Delivering measurable business outcomes',
  'Working directly with executive teams and boards',
  'Developing internal talent and leaving sustainable capability',
];
const beyondTitle = [
  'Sound executive judgment',
  'Clear communication',
  'Humility and low ego',
  'Comfort working hands-on',
  'Ability to establish trust quickly',
  'Strong commercial and operational instincts',
  'Adaptability across different organizational environments',
  'Commitment to ethical leadership and confidentiality',
];

// 7. Ways to engage
const engagements: { icon: LucideIcon; title: string; description: string; examples: string[] }[] = [
  {
    icon: CalendarClock,
    title: 'Fractional Leadership',
    description: 'Provide ongoing senior leadership on a part-time or defined-capacity basis while helping an organization build long-term capability.',
    examples: ['Leading a function before a full-time hire is practical', 'Supporting a growing executive team', 'Building governance, operating cadence, and internal capability'],
  },
  {
    icon: Zap,
    title: 'Interim Leadership',
    description: 'Step into a critical leadership role during a vacancy, transition, leave, turnaround, or permanent executive search.',
    examples: ['Stabilizing a function', 'Maintaining continuity', 'Clarifying the long-term leadership need', 'Preparing for transition to a permanent leader'],
  },
  {
    icon: Target,
    title: 'Project-Based Leadership',
    description: 'Own a defined initiative, transformation, integration, or business outcome from planning through execution.',
    examples: ['Building a PMO or Transformation Office', 'Leading an acquisition integration', 'Managing a strategic sourcing initiative', 'Recovering a critical program'],
  },
];

// 8. Areas of leadership (exact six names/order)
const areas: { icon: LucideIcon; name: string; description: string }[] = [
  { icon: Package, name: 'Procurement', description: 'Relevant experience may include leading procurement organizations, supplier strategy, cost management, procurement transformation, and functional capability building.' },
  { icon: Handshake, name: 'Strategic Sourcing', description: 'Relevant experience may include category strategy, complex sourcing events, supplier negotiations, vendor selection, and supplier performance.' },
  { icon: TrendingUp, name: 'Revenue Operations', description: 'Relevant experience may include forecasting, pipeline governance, CRM, pricing, commercial systems, sales operations, and cross-functional revenue execution.' },
  { icon: Workflow, name: 'Transformation Office', description: 'Relevant experience may include enterprise transformation, governance, portfolio prioritization, executive reporting, benefits realization, and change leadership.' },
  { icon: ClipboardList, name: 'Project Management Office', description: 'Relevant experience may include PMO leadership, portfolio management, program recovery, executive reporting, delivery governance, and project capability building.' },
  { icon: GitMerge, name: 'M&A Integration', description: 'Relevant experience may include integration planning, Integration Management Offices, Day One readiness, carve-outs, synergy realization, and post-close execution.' },
];

// 9. Why join
const whyJoin: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Star, title: 'Meaningful Work', description: 'Lead business-critical initiatives where your experience can create visible and lasting impact.' },
  { icon: Layers, title: 'Flexible Engagements', description: 'Explore fractional, interim, and project-based opportunities that align with your interests, capacity, and availability.' },
  { icon: Building2, title: 'Executive-Level Clients', description: 'Work directly with leaders navigating consequential moments in growing businesses and complex enterprises.' },
  { icon: Users, title: 'A Trusted Network', description: 'Build relationships with experienced peers who value collaboration, sound judgment, and practical execution.' },
  { icon: Puzzle, title: 'Careful Matching', description: 'We prioritize fit between the leader, the client, the challenge, and the working environment.' },
  { icon: Repeat, title: 'Long-Term Relationships', description: 'Our goal is to build a trusted leadership network, not simply fill one-time assignments.' },
];

// 10. Leadership standard
const standard = [
  'Creates clarity',
  'Builds trust quickly',
  'Simplifies complexity',
  'Makes difficult decisions',
  'Leads with humility',
  'Develops internal teams',
  'Delivers measurable outcomes',
];

// 11. How it works: three-step process
const processSteps: { number: number; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: 1,
    title: 'Apply',
    description:
      'Tell us about your leadership experience, functional expertise, availability, and the kinds of opportunities that interest you.',
    icon: FileText,
  },
  {
    number: 2,
    title: 'Get to Know Each Other',
    description:
      'We will have a conversation about how you lead, where you create the greatest impact, and what you are looking for next.',
    icon: MessageCircle,
  },
  {
    number: 3,
    title: 'Join the Network',
    description:
      'Leaders who are a strong fit may be welcomed into the network and considered for carefully matched fractional, interim, and project-based opportunities.',
    icon: Network,
  },
];

// Benefits of joining. NOTE: "Executive Resources" uses forward-looking copy
// ("as the network grows ...") because those tools are not confirmed to exist
// yet. Confirm with the business before switching to present tense.
const networkBenefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Curated Opportunities',
    description:
      'Be considered for fractional, interim, and project-based leadership engagements that align with your experience, interests, and availability.',
    icon: Target,
  },
  {
    title: 'Executive Resources',
    description:
      'As the network grows, members will gain access to practical tools, insights, and resources designed for experienced operators.',
    icon: BookOpen,
  },
  {
    title: 'A Trusted Community',
    description:
      'Join a growing network of accomplished peers who value practical leadership, trust, and measurable outcomes.',
    icon: Users,
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#01A3DB]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Centered closing line used beneath several sections: a short orange rule
// above a single medium-weight navy sentence.
function SectionClosingNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 sm:mt-12 max-w-3xl mx-auto text-center">
      <div className="mx-auto mb-5 h-[2px] w-12 bg-[#f05e00]" />
      <p className="text-lg sm:text-xl text-[#38495D] font-medium leading-relaxed">{children}</p>
    </div>
  );
}

export default function ExecutiveNetworkPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <PageHeader />

      {/* 4. Hero (dedicated dark, premium treatment) */}
      <ExecutiveNetworkHero />

      {/* 5. Who thrives here */}
      <Section background="gray">
        <SectionHeader
          label="Who Thrives Here"
          heading="This Network Is Built for Leaders Who"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {thriveCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-[#01A3DB]/10 text-[#01A3DB]">
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#38495D] mb-2">{card.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
        <SectionClosingNote>
          The strongest New Wave leaders combine senior operating experience with the willingness
          to step directly into complex work.
        </SectionClosingNote>
      </Section>

      {/* 6. Experience profile */}
      <Section background="white">
        <SectionHeader
          label="Who We Are Looking For"
          heading="Proven Experience. Practical Leadership."
          intro="New Wave is designed for experienced leaders who have already carried meaningful responsibility inside operating organizations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-base font-bold uppercase tracking-wide text-[#38495D] mb-5">Potentially relevant experience includes</h3>
            <BulletList items={relevantExperience} />
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-base font-bold uppercase tracking-wide text-[#38495D] mb-5">What matters beyond the title</h3>
            <BulletList items={beyondTitle} />
          </div>
        </div>
        <SectionClosingNote>
          Titles alone do not determine fit. We care about the depth of responsibility you have held,
          the outcomes you have delivered, and how you lead.
        </SectionClosingNote>
      </Section>

      {/* 7. Ways to engage */}
      <Section background="gray">
        <SectionHeader
          label="Ways to Engage"
          heading="Leadership Opportunities That Fit the Work"
          intro="New Wave engagements are structured around the needs of the client and the nature of the leadership challenge."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {engagements.map((model) => {
            const Icon = model.icon;
            return (
              <div key={model.title} className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-[#f05e00]/10 text-[#f05e00]">
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#38495D] mb-2">{model.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">{model.description}</p>
                <div className="mt-auto">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#f05e00] mb-2">Examples</p>
                  <ul className="space-y-1.5">
                    {model.examples.map((ex) => (
                      <li key={ex} className="flex gap-2 text-sm text-gray-700 leading-snug">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05e00]" aria-hidden="true" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <SectionClosingNote>
          Executive network members receive curated leadership opportunities, exclusive resources,
          and invitations to connect with fellow operators solving complex business challenges.
        </SectionClosingNote>
      </Section>

      {/* 8. Areas of leadership */}
      <Section background="white" id="areas" className="scroll-mt-24">
        <SectionHeader
          label="Areas of Leadership"
          heading="Where New Wave Leaders Step In"
          intro="Our network is built around six core Leadership Practice Areas."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.name} className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#01A3DB]/10 text-[#01A3DB] shrink-0">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#38495D]">{area.name}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Link to={ROUTES.solutions} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#01A3DB] hover:text-[#0192C5] transition-colors">
            Explore New Wave Leadership Solutions
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* 9. Why join */}
      <Section background="gray">
        <SectionHeader
          label="Why Join New Wave"
          heading="Meaningful Work. Trusted Relationships."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {whyJoin.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-[#01A3DB]/10 text-[#01A3DB]">
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#38495D] mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 10. Leadership standard - manifesto */}
      <section className="bg-[#38495D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 py-16 sm:py-20 lg:py-28">
          <div className="inline-block mb-6">
            <p className="text-white/80 text-sm sm:text-base font-bold tracking-[0.2em] uppercase" style={{ letterSpacing: '0.2em' }}>
              Our Leadership Standard
            </p>
            <div className="mt-2 h-[2px] w-16 bg-[#f05e00]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl lg:whitespace-nowrap font-extrabold tracking-tight leading-tight">
            What Makes a Great New Wave Leader?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-[820px]">
            The strongest leaders bring confidence without ego. They know when to listen, when to
            decide, and how to move an organization forward while strengthening the people around them.
          </p>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {standard.map((s) => (
              <li key={s} className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
                <span className="h-6 w-1 shrink-0 rounded-full bg-[#f05e00]" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. How it works: three-step process, benefits, and reassurance */}
      <Section background="white" id="process" className="scroll-mt-24">
        <SectionHeader
          label="How It Works"
          heading="Built for Leaders Who Still Want to Lead"
          intro="Joining the New Wave Executive Network should feel personal, straightforward, and worth your time. We focus on understanding where you have led, the kinds of challenges you solve best, and the opportunities that fit your experience."
        />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-extrabold text-[#38495D]/15 leading-none" aria-hidden="true">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#01A3DB]/10 text-[#01A3DB]">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#38495D] mb-2">
                  <span className="sr-only">Step {step.number}: </span>
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.description}</p>
              </li>
            );
          })}
        </ol>

        {/* Benefits subsection */}
        <div className="mt-16 sm:mt-20">
          <SectionHeader
            label="What Comes Next"
            heading="More Than a List of Opportunities"
            intro="The New Wave Executive Network is designed to create ongoing value for experienced leaders."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {networkBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-7"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-[#01A3DB]/10 text-[#01A3DB]">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#38495D] mb-2">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>

      </Section>

      {/* 12. Ready to join: closing application CTA (routes to the apply page) */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-5">
            <p
              className="text-black text-sm sm:text-base font-bold tracking-[0.2em] uppercase"
              style={{ letterSpacing: '0.2em' }}
            >
              Ready to Join?
            </p>
            <div className="mt-2 h-[2px] bg-[#f05e00]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38495D] leading-tight">
            Bring Your Experience to the Network
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            If you are an experienced executive interested in fractional, interim, or project-based
            leadership opportunities, we would like to learn more about you.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to={ROUTES.executiveNetworkApply} className={primaryButton}>
              Join the Network
            </Link>
          </div>
        </div>
      </Section>

      {/* 14. Final CTA */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38495D] leading-tight">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Learn more about how New Wave works, the leadership areas we support, and what clients
            expect from our leaders.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to={ROUTES.contact} className={primaryButton}>
              Talk to Our Team
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
