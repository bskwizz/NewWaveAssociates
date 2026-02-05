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
      <div ref={vantaRef} className="capabilities-hero relative" aria-label="About Us">
        <PageHeader />

        <div className="absolute top-[16px] sm:top-[24px] left-0 right-0 w-full pointer-events-none z-30 lg:top-[256px] lg:-translate-y-1/2">
          <img
            src={`${import.meta.env.BASE_URL}wave_graphic_2.0.png`}
            alt=""
            className="w-full h-auto block"
          />
        </div>

        <div className="capabilities-hero__inner hero-content relative z-20 pt-[32px] sm:pt-[48px] lg:pt-[4rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 items-start mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
                <div className="text-left">
                  <div className="inline-block mb-2">
                    <div>
                      <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                        letterSpacing: '0.25em'
                      }}>
                        The Right Operators
                      </p>
                      <div className="h-[2px] bg-[#f05e00]"></div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4 sm:mt-5 lg:mt-6">
                    We have <span className="font-semibold">directly</span> led procurement, revenue operations, and M&A across lower and middle market organizations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-6 lg:gap-7 xl:gap-8 pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-4 sm:mb-5">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center overflow-hidden bg-white rounded-lg mx-auto sm:mx-0">
                        <img
                          src={`${import.meta.env.BASE_URL}${member.image}`}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.classList.add('bg-gradient-to-br', 'from-[#01A3DB]', 'to-[#38495D]');
                              const initials = document.createElement('div');
                              initials.className = 'w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center';
                              initials.innerHTML = `<span class="text-white text-2xl sm:text-2xl lg:text-3xl font-bold">${member.name.split(' ').map(n => n[0]).join('')}</span>`;
                              parent.appendChild(initials);
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl font-bold text-black mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">{member.title}</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 mb-3 sm:mb-4"></div>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {member.bio}
                    </p>

                    <div className="border-t border-gray-200 mb-3 sm:mb-4"></div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#01A3DB] hover:text-[#0192C5] transition-colors font-medium text-sm sm:text-base"
                    >
                      <Linkedin size={18} className="sm:w-5 sm:h-5" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="text-left mb-5 sm:mb-6 lg:mb-8">
                <div className="inline-block mb-2">
                  <div>
                    <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                      letterSpacing: '0.25em'
                    }}>
                      How We Differ
                    </p>
                    <div className="h-[2px] bg-[#f05e00]"></div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4 sm:mt-5 lg:mt-6 mb-5 sm:mb-6 lg:mb-8">
                  Senior Operators. Realistic Outcomes. Timebound Delivery.
                </p>
              </div>

              <div className="pb-8 sm:pb-12 lg:pb-16">
                <img
                  src={`${import.meta.env.BASE_URL}how_we_differ_section.png`}
                  alt="How We Differ"
                  className="w-full lg:w-[93.5%] h-auto mx-auto shadow-xl rounded-lg"
                />
              </div>

              <div className="text-left mb-5 sm:mb-6 lg:mb-8">
                <div className="inline-block mb-2">
                  <div>
                    <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                      letterSpacing: '0.25em'
                    }}>
                      Our Mission and Values
                    </p>
                    <div className="h-[2px] bg-[#f05e00]"></div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4 sm:mt-5 lg:mt-6 mb-6 sm:mb-8 lg:mb-10">
                  We exist for operators navigating complexity. These are moments where important work stalls, ownership is fragmented, and real value is left on the table. Our role is not to advise from the sidelines, but to step in, take responsibility, and help teams move again.
                  <br /><br />
                  <span className="font-semibold">Our values</span> reflect how we show up, how we make decisions, and how we earn the right to be trusted inside our clients' businesses.
                </p>
              </div>

              <div className="space-y-5 sm:space-y-6 pb-8 sm:pb-12 lg:pb-16">
                <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-black tracking-[0.15em] uppercase mb-3 sm:mb-4">
                    We Own the Outcome
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    We take responsibility for results, not just recommendations. When we commit to work, we stay engaged until progress is real and value is delivered.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-black tracking-[0.15em] uppercase mb-3 sm:mb-4">
                    We Put Operators First
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Our work is designed for the people running the business. We favor practical solutions, respect real-world constraints, and build systems teams can actually sustain.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-black tracking-[0.15em] uppercase mb-3 sm:mb-4">
                    We Choose Clarity Over Complexity
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Plain language drives alignment. Alignment drives execution. We believe clear thinking and direct communication move organizations forward faster than complexity ever could.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-black tracking-[0.15em] uppercase mb-3 sm:mb-4">
                    We Earn Trust Daily
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Trust is built through consistent, honest execution, not credentials or promises. We do what we say we will do, communicate openly, and make progress visible.
                  </p>
                </div>
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
