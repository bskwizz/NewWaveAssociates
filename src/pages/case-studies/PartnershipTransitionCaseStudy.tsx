import { useRef, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CTABar from '../../components/CTABar';

interface PartnershipTransitionCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function PartnershipTransitionCaseStudy({ onNavigate }: PartnershipTransitionCaseStudyProps) {
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
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <button
          onClick={() => onNavigate('hub-integration-consolidation')}
          className="flex items-center gap-2 text-[#01A3DB] hover:text-[#0182b3] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Back to Integration & Consolidation
        </button>
      </div>
      <div ref={vantaRef} className="capabilities-hero" aria-label="Case Study">
        <div className="capabilities-hero__inner hero-content">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-5xl font-bold text-[#38495D] mb-4">
                Partnership Launch & Asset Transition
              </h1>
              <p className="text-lg text-[#38495D] mb-2">
                Case Study
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Author: Bryan Skwirut | 3 minute read
              </p>

              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-8 mb-8 shadow-lg max-w-4xl">
                <h2 className="text-xl font-bold text-[#38495D] mb-4">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  A newly formed joint venture required rapid transition of people, processes, and assets to enable independent operation. New Wave Associates led the design and execution of a structured launch framework that stabilized service delivery while accelerating time-to-value.
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
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fragmented asset inventory and lack of separation readiness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Overlapping systems and dependencies between partner organizations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Unclear ownership of in-flight initiatives and customer contracts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="approach" className="mb-16 scroll-mt-24">
              <h2 className="text-4xl font-bold text-[#38495D] mb-6">
                The Approach
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Created a Transition Management Office (TMO) to govern the separation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Designed a phased cutover plan addressing people, systems, and data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Executed asset transfer and operational readiness testing in parallel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Implemented communication and escalation channels to ensure continuity</span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="outcome" className="mb-12 scroll-mt-24">
              <h2 className="text-4xl font-bold text-[#38495D] mb-6">
                The Outcome
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Seamless transition with no service disruption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>100% of critical assets transferred within 90 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Accelerated operational independence and accountability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Delivered measurable ROI through faster post-launch stabilization</span>
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
                      src="/Pictures-3.png"
                      alt="Bryan Skwirut"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#38495D]">Bryan Skwirut</p>
                    <p className="text-sm text-gray-600">Founding Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTABar onNavigate={onNavigate} />
    </div>
  );
}
