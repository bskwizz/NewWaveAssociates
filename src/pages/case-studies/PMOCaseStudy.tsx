import { useRef, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CTABar from '../../components/CTABar';

interface PMOCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function PMOCaseStudy({ onNavigate }: PMOCaseStudyProps) {
  const [fadeIn, setFadeIn] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-16">
      <div ref={vantaRef} className="capabilities-hero" aria-label="Case Study">
        <div className="capabilities-hero__inner hero-content">
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-20">
            <button
              onClick={() => onNavigate('hub-transformation-office')}
              className="flex items-center gap-2 text-[#01A3DB] hover:text-[#0182b3] transition-colors font-medium mb-8"
            >
              <ArrowLeft size={20} />
              Back to Transformation Office
            </button>
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-5xl font-bold text-[#38495D] mb-4">
                Project Management Office Framework & Delivery Model Implementation
              </h1>
              <p className="text-lg text-[#38495D] mb-2">
                Case Study
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Author: Jason Lee | 5 minute read
              </p>

              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-8 mb-8 shadow-lg max-w-4xl">
                <h2 className="text-xl font-bold text-[#38495D] mb-4">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  A technology SaaS company needed a standardized Project Management Office framework to ensure consistent delivery quality, predictable timelines, and cross-department coordination for enterprise-scale implementations, especially as they brought on their largest client (&gt;500K ARR). The goal was to transform delivery from reactive firefighting to proactive execution with visibility and accountability.
                </p>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-[#38495D] font-semibold">Jump to:</span>
                <button
                  onClick={() => scrollToSection('opportunity')}
                  className="px-6 py-3 bg-[#01A3DB] text-white rounded-lg hover:bg-[#0182b3] transition-colors font-medium"
                >
                  The Opportunity
                </button>
                <button
                  onClick={() => scrollToSection('approach')}
                  className="px-6 py-3 bg-[#01A3DB] text-white rounded-lg hover:bg-[#0182b3] transition-colors font-medium"
                >
                  The Approach
                </button>
                <button
                  onClick={() => scrollToSection('outcome')}
                  className="px-6 py-3 bg-[#01A3DB] text-white rounded-lg hover:bg-[#0182b3] transition-colors font-medium"
                >
                  The Outcome
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 -mt-24 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-12 mb-12">
            <div id="opportunity" className="mb-16 scroll-mt-24">
              <h2 className="text-4xl font-bold text-[#38495D] mb-6">
                The Opportunity
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  While revenue was strong, the leadership team recognized that their informal approach to managing initiatives was no longer sustainable.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>No formal Project Management Office structure governing project delivery or customer communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Project plans tracked inconsistently across consultants, leading to scope drift and timeline slippage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Technical resources lacked coordinated scheduling or accountability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Leadership lacked visibility into project status, risk, and resource utilization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Go-live dates often missed due to poor cross-functional alignment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="approach" className="mb-16 scroll-mt-24">
              <h2 className="text-4xl font-bold text-[#38495D] mb-6">
                The Approach
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  New Wave Associates took a pragmatic, phased approach to building the Project Management Office capability:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Designed and operationalized a full Project Management Office structure using a core delivery platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Built standardized project templates, milestone definitions, and communication cadences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Created a resource bench of technical SMEs to support integrations (NetSuite, HubSpot, Avalara, etc)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Established project governance including kickoff protocols, weekly stand-ups, risk logs, and executive steering cadence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Defined UAT readiness gates and formal go-live checklists to ensure accountability and predictability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="outcome" className="mb-12 scroll-mt-24">
              <h2 className="text-4xl font-bold text-[#38495D] mb-6">
                The Outcome
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Within 3 months, the company had a fully functioning Project Management Office that transformed how they managed strategic initiatives:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Established scalable delivery framework supporting enterprise client growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Enabled predictable, data-driven project execution for all implementations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Strengthened cross-functional collaboration between PS, Integration, & CS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reduced delivery risk and enhanced customer retention & referenceability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Formed the foundation for future automation and AI-driven delivery insights</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-[#38495D] mb-6">
                Meet The Team
              </h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#01A3DB] to-[#38495D]">
                    <img
                      src={`${import.meta.env.BASE_URL}Pictures-4.png`}
                      alt="Jason Lee"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#38495D]">Jason Lee</p>
                    <p className="text-sm text-gray-600">Founding Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CTABar
            text="Need help establishing or optimizing your Project Management Office? Let's discuss your specific challenges."
            buttonText="Contact Us"
            onButtonClick={() => onNavigate('contact-us')}
          />
        </div>
      </div>
    </div>
  );
}
