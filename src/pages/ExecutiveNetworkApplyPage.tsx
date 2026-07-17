import { Target, Zap, Puzzle, Users, BookOpen, type LucideIcon } from 'lucide-react';
import ApplyHeader from '../components/ApplyHeader';
import ExecutiveNetworkForm from '../components/ExecutiveNetworkForm';

// Premium talent-network application experience. Sells the value of membership
// beside a simplified first-step application form. Structured as separate
// blocks (header / hero / proof strip / form + benefits panel) so the form can
// later become a multi-step flow without changing the route.

const proofStrip = ['VP to C-Suite', '6 Leadership Practice Areas', 'Fractional • Interim • Project-Based'];

const membershipBenefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Curated Leadership Opportunities',
    description:
      'Be considered for fractional, interim, and project-based engagements aligned with your experience, interests, and availability.',
    icon: Target,
  },
  {
    title: 'Meaningful Leadership Work',
    description:
      'Step into business-critical situations where your judgment and leadership can create visible impact.',
    icon: Zap,
  },
  {
    title: 'Careful Matching',
    description:
      'We consider functional expertise, leadership style, industry experience, availability, and client needs.',
    icon: Puzzle,
  },
  {
    title: 'A Trusted Peer Network',
    description:
      'Join a growing network of accomplished operators who value practical leadership, trust, and measurable outcomes.',
    icon: Users,
  },
  {
    title: 'Growing Member Resources',
    description:
      'As the platform develops, members will gain access to practical insights, tools, and network programming designed for experienced leaders.',
    icon: BookOpen,
  },
];

export default function ExecutiveNetworkApplyPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <ApplyHeader />

      {/* Premium dark hero + proof strip */}
      <section className="relative overflow-hidden bg-[#38495D] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(760px 420px at 12% 4%, rgba(1,163,219,0.30), transparent 60%), linear-gradient(180deg, #3d4f65 0%, #38495D 55%, #313f52 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'radial-gradient(1px 1px at 20% 30%, #ffffff 100%, transparent 0), radial-gradient(1px 1px at 70% 60%, #ffffff 100%, transparent 0), radial-gradient(1px 1px at 40% 80%, #ffffff 100%, transparent 0)',
            backgroundSize: '120px 120px, 160px 160px, 200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 pt-12 sm:pt-14 lg:pt-16 pb-0">
          <div className="inline-block mb-5">
            <p className="text-white text-sm sm:text-base font-bold tracking-[0.2em] uppercase" style={{ letterSpacing: '0.2em' }}>
              Leadership Network Application
            </p>
            <div className="mt-2 h-[2px] bg-[#f05e00]" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl">
            Apply to Join an Exclusive Network of Experienced Operators
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-[720px]">
            New Wave is an exclusive network of accomplished operators across Procurement,
            Strategic Sourcing, Revenue Operations, Transformation, Project Management, and M&A
            Integration.
          </p>

          {/*
            VERIFY BEFORE LAUNCH: this line references "a community of experienced leaders" and
            "resources." Confirm the community and member resources are actually available (or
            adjust to forward-looking wording) before go-live.
          */}
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-[720px]">
            We provide access to meaningful leadership opportunities, a community of experienced
            leaders, and resources designed to help you continue building your leadership career.
          </p>

          <p className="mt-6 inline-block rounded-lg bg-white/5 ring-1 ring-[#f05e00] px-4 py-2.5 text-sm sm:text-base font-semibold text-white/90">
            Meaningful leadership work. Exceptional peers. Relationships that compound over time.
          </p>

          {/* Proof strip */}
          <div className="mt-10 sm:mt-12 border-t border-[#01A3DB]/60">
            <ul className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#01A3DB]/50">
              {proofStrip.map((item) => (
                <li
                  key={item}
                  className="py-5 sm:py-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wide text-white/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Two-column application section */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Application introduction (mobile order 1) */}
            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#38495D] leading-tight">
                Start Your Application
              </h2>
            </div>

            {/* Membership benefits panel (mobile order 2) */}
            <aside className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2">
              <div className="rounded-xl bg-[#38495D] text-white p-6 sm:p-8 lg:sticky lg:top-8">
                <h2 className="text-xl font-bold">What Membership Offers</h2>
                <ul className="mt-5 space-y-5">
                  {membershipBenefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <li key={benefit.title} className="flex gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-white/10 text-[#7fd3f0]">
                          <Icon size={20} strokeWidth={2} aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                          <p className="mt-1 text-sm text-white/70 leading-relaxed">{benefit.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Application form (mobile order 3; expectations + privacy inside) */}
            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2">
              <ExecutiveNetworkForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
