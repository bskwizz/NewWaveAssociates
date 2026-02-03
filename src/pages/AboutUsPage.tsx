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
    title: 'Managing Partner',
    image: 'Pictures-6.png',
    bio: 'A finance and transformation executive with 30+ years of experience leading Strategic Sourcing, FP&A, M&A integration, and operational initiatives across multi-entity technology and managed-services organizations. He\'s achieved $150M+ in cost synergies through consolidation, shared-services alignment, and pricing discipline.',
    linkedin: 'https://www.linkedin.com/in/crkeller/'
  },
  {
    name: 'Hunter New',
    title: 'Managing Partner',
    image: 'Pictures-2.png',
    bio: 'M&A, performance improvement, and labor strategy leader across the healthcare provider/payer and technology sectors. He\'s delivered 10-15% EBITDA gains through post-merger integrations, divestitures, and performance initiatives while supporting $120B+ in total transaction value for non-profit and for-profit health systems, PE-owned health services organizations, and payers.',
    linkedin: 'https://www.linkedin.com/in/hunter-new-4983373a/'
  },
  {
    name: 'Bryan Skwirut',
    title: 'Managing Partner',
    image: 'Pictures-3.png',
    bio: 'An enterprise transformation leader with over a decade of experience driving operational modernization and performance improvement across financial services, healthcare, and technology sectors. He\'s led initiatives that delivered $25M+ in process efficiency gains, reduced operational cycle times by 40%, and optimized enterprise workflows across 10+ business units.',
    linkedin: 'https://www.linkedin.com/in/bryanskwirut/'
  },
  {
    name: 'Jason Lee',
    title: 'Managing Partner',
    image: 'Pictures-4.png',
    bio: 'Strategy and growth executive who has built and scaled multi-entity operating models across numerous industries. He has architected enterprise GTM frameworks, pricing normalization programs, and RevOps transformations that have delivered millions in incremental revenue and improved commercial efficiencies across 80+ business units.',
    linkedin: 'https://www.linkedin.com/in/myportfoleeo/'
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
        <div className="capabilities-hero__inner hero-content" style={{ paddingTop: '4rem' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`w-full transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                <div className="text-left">
                  <div className="inline-block mb-2">
                    <div>
                      <p className="text-black text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                        letterSpacing: '0.25em'
                      }}>
                        The Right Operators
                      </p>
                      <div className="h-[2px] bg-[#f05e00]"></div>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mt-6">
                    We have <span className="font-semibold">directly</span> led procurement, revenue operations, and M&A across lower and middle market organizations
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pb-16">
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

              <div className="text-left mb-8">
                <div className="inline-block mb-2">
                  <div>
                    <p className="text-black text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                      letterSpacing: '0.25em'
                    }}>
                      How We Differ
                    </p>
                    <div className="h-[2px] bg-[#f05e00]"></div>
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed mt-6 mb-8">
                  Senior Operators. Realistic Outcomes. Timebound Delivery.
                </p>
              </div>

              <div className="pb-16">
                <img
                  src={`${import.meta.env.BASE_URL}how_we_differ_section.png`}
                  alt="How We Differ"
                  className="w-[85%] h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTABar
        text="Learn more about New Wave solutions for your unique growth opportunity"
        buttonText="Contact Us"
        onButtonClick={() => onNavigate('contact-us')}
      />
    </div>
  );
}
