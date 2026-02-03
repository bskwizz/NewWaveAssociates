import { useRef, useEffect, useState } from 'react';
import { Linkedin } from 'lucide-react';
import CTABar from '../components/CTABar';
import PageHeader from '../components/PageHeader';

interface AboutUsPageProps {
  onNavigate: (page: string) => void;
}

const teamMembers = [
  {
    name: 'Craig Keller',
    title: 'Founding Partner',
    image: 'Pictures-6.png',
    bio: 'A finance and transformation executive with 30+ years of experience leading Strategic Sourcing, FP&A, M&A integration, and operational initiatives across multi-entity technology and managed-services organizations. He\'s achieved $150M+ in cost synergies through consolidation, shared-services alignment, and pricing discipline.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Hunter New',
    title: 'Founding Partner',
    image: 'Pictures-2.png',
    bio: 'M&A, performance improvement, and labor strategy leader across the healthcare provider/payer and technology sectors. He\'s delivered 10-15% EBITDA gains through post-merger integrations, divestitures, and performance initiatives while supporting $120B+ in total transaction value for non-profit and for-profit health systems, PE-owned health services organizations, and payers.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Bryan Skwirut',
    title: 'Founding Partner',
    image: 'Pictures-3.png',
    bio: 'An enterprise transformation leader with over a decade of experience driving operational modernization and performance improvement across financial services, healthcare, and technology sectors. He\'s led initiatives that delivered $25M+ in process efficiency gains, reduced operational cycle times by 40%, and optimized enterprise workflows across 10+ business units.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Jason Lee',
    title: 'Founding Partner',
    image: 'Pictures-4.png',
    bio: 'Strategy and growth executive who has built and scaled multi-entity operating models across numerous industries. He has architected enterprise GTM frameworks, pricing normalization programs, and RevOps transformations that have delivered millions in incremental revenue and improved commercial efficiencies across 80+ business units.',
    linkedin: 'https://linkedin.com'
  },
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
  const [fadeIn, setFadeIn] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      <div ref={vantaRef} className="capabilities-hero" aria-label="About Us">
        <PageHeader onNavigate={onNavigate} currentPage="about-us" />
        <div className="capabilities-hero__inner hero-content">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-center h-full">
            <p
              className={`text-xl text-[#38495D] text-center transition-opacity duration-1000 ${
                fadeIn ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ maxWidth: '900px' }}
            >
              New Wave Associates is a strategy & general management growth consultancy that brings operator-grade expertise to help companies evolve. Smarter. Leaner. Faster.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 -mt-24 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-10 shadow-lg">
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
            <h2 className="text-4xl font-bold text-[#38495D] mb-3 text-center">
              The Right Operators
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
              We have <span className="font-semibold">directly</span> led procurement, revenue operations, and M&A across lower and middle market organizations
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-xl transition-all"
                >
                  <div className="flex gap-5 mb-5">
                    <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center overflow-hidden bg-white rounded-lg">
                      <img
                        src={`${import.meta.env.BASE_URL}${member.image}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('bg-gradient-to-br', 'from-[#01A3DB]', 'to-[#38495D]');
                            const initials = document.createElement('div');
                            initials.className = 'w-24 h-24 bg-white/20 rounded-full flex items-center justify-center';
                            initials.innerHTML = `<span class="text-white text-3xl font-bold">${member.name.split(' ').map(n => n[0]).join('')}</span>`;
                            parent.appendChild(initials);
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1 text-left flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-[#38495D] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-600">{member.title}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mb-4"></div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="border-t border-gray-200 mb-4"></div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#01A3DB] hover:text-[#0192C5] transition-colors font-medium"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <CTABar
            text="Learn more about New Wave solutions for your unique growth opportunity"
            buttonText="Contact Us"
            onButtonClick={() => onNavigate('contact-us')}
          />
        </div>
      </div>
    </div>
  );
}
