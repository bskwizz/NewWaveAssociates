import { useRef, useEffect, useState } from 'react';
import { X } from 'lucide-react';
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

const aboutIntro =
  'New Wave was built on a simple belief: the most valuable thing a company can have is experienced leaders who have done the job before. We provide deeply vetted executives who step in quickly, establish accountability, solve complex business challenges, and deliver measurable results across procurement, strategic sourcing, revenue operations, transformation, project management, and M&A integration.';

export default function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  return (
    <div>
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
              <div className="flex justify-center pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`relative w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full ring-4 ring-white overflow-hidden bg-gray-100 shadow-lg transition-transform duration-300 hover:z-10 hover:scale-105 ${index > 0 ? '-ml-5 sm:-ml-6 lg:-ml-8' : ''}`}
                  >
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
                          initials.className = 'w-full h-full flex items-center justify-center';
                          initials.innerHTML = `<span class="text-white text-2xl lg:text-3xl font-bold">${member.name.split(' ').map((n) => n[0]).join('')}</span>`;
                          parent.appendChild(initials);
                        }
                      }}
                    />
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
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full lg:w-[93.5%] mx-auto group cursor-pointer bg-transparent border-0 p-0 text-left"
                  aria-label="View How We Differ in detail"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
                    <img
                      src={`${import.meta.env.BASE_URL}how_we_differ_png_new.png`}
                      alt="How We Differ"
                      className="w-full h-auto block"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                        Click to expand
                      </span>
                    </div>
                  </div>
                </button>
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

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-0 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="How We Differ"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          />
          <div className="relative z-10 w-full h-[100svh] lg:h-auto lg:max-h-[90vh] lg:max-w-4xl lg:rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <img
              src={`${import.meta.env.BASE_URL}how_we_differ_png_new.png`}
              alt="How We Differ"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
