interface AboutUsPageProps {
  onNavigate: (page: string) => void;
}

const teamMembers = [
  { name: 'Craig Keller', title: 'Founding Partner', image: '/Pictures-6.png' },
  { name: 'Hunter New', title: 'Founding Partner', image: '/Pictures-2.png' },
  { name: 'Bryan Skwirut', title: 'Founding Partner', image: '/Pictures-3.png' },
  { name: 'Jason Lee', title: 'Founding Partner', image: '/Pictures-4.png' },
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
    <div>
      <div className="relative min-h-screen flex flex-col" style={{
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

        <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-[#38495D] mb-8 leading-tight">
              Built by Operators. Trusted by Leaders.
            </h1>
            <p className="text-2xl md:text-3xl text-[#38495D] leading-relaxed">
              We bring operator-grade expertise in growth, strategy, cost optimization, and operational excellence to help businesses scale smarter, leaner, and faster.
            </p>
          </div>

          <div className="max-w-5xl mx-auto w-full mt-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-[#38495D] mb-4 text-center">
                Our Philosophy
              </h2>
              <p className="text-xl text-gray-700 text-center leading-relaxed">
                We believe transformation is a contact sport. We embed, co-own outcomes, and make your team stronger, not dependent.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
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
                <div className="aspect-square flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('bg-gradient-to-br', 'from-[#01A3DB]', 'to-[#38495D]');
                        const initials = document.createElement('div');
                        initials.className = 'w-32 h-32 bg-white/20 rounded-full flex items-center justify-center';
                        initials.innerHTML = `<span class="text-white text-4xl font-bold">${member.name.split(' ').map(n => n[0]).join('')}</span>`;
                        parent.appendChild(initials);
                      }
                    }}
                  />
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
