interface AboutUsPageProps {
  onNavigate: (page: string) => void;
}

const teamMembers = [
  { name: 'Alex Morgan', title: 'Partner' },
  { name: 'Jordan Lee', title: 'Partner' },
  { name: 'Taylor Grant', title: 'Partner' },
  { name: 'Riley Shaw', title: 'Partner' },
];

const differentiators = [
  {
    title: 'Operator DNA',
    description: "We've done the job. We know what breaks.",
  },
  {
    title: 'Pragmatic over Theoretical',
    description: 'We cut noise and focus teams on decisions.',
  },
  {
    title: 'Change That Sticks',
    description: 'People adopt what they co-create.',
  },
];

export default function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-[#38495D] mb-6">
            Built by Operators. Trusted by Leaders.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We&apos;ve carried the bag, owned the P&L, stood up PMOs, and led integrations with thousands of employees in flight. Now we bring that experience to teams who want execution momentum — not another binder.
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-gradient-to-r from-[#01A3DB]/5 to-[#EF5919]/5 border border-gray-200 rounded-lg p-10">
            <h2 className="text-3xl font-bold text-[#38495D] mb-4 text-center">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              We believe transformation is a contact sport. We embed, co-own outcomes, and make your team stronger, not dependent.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-[#01A3DB] mb-4">
                  {diff.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#38495D] mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-[#01A3DB] to-[#38495D] flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#38495D] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-12">
          <p className="text-2xl font-medium text-[#38495D] mb-6">
            If your strategy is right but execution is stuck — we should talk.
          </p>
          <button
            onClick={() => onNavigate('contact-us')}
            className="px-10 py-4 bg-[#01A3DB] text-white rounded-md font-medium text-lg hover:bg-[#0192C5] transition-all hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
