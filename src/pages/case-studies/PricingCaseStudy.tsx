import { useRef, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CTABar from '../../components/CTABar';

interface PricingCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function PricingCaseStudy({ onNavigate }: PricingCaseStudyProps) {
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
          onClick={() => onNavigate('capabilities')}
          className="flex items-center gap-2 text-[#01A3DB] hover:text-[#0182b3] transition-colors font-medium mb-8"
        >
          <ArrowLeft size={20} />
          Back to Services
        </button>

            <div>
              <h1 className="text-5xl font-bold text-[#38495D] mb-4">
                Deal Desk Installation
              </h1>
              <p className="text-lg text-[#38495D] mb-2">
                Case Study
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Author: Hunter New | 7 minute read
              </p>

              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-8 mb-8 shadow-lg max-w-4xl">
                <h2 className="text-xl font-bold text-[#38495D] mb-4">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  A B2B software company with complex enterprise sales was losing deals due to slow approval cycles and inconsistent pricing. Every deal required executive escalation, creating bottlenecks and frustration on both sides. New Wave Associates redesigned their pricing architecture and implemented a scalable deal desk function that accelerated deal velocity while protecting margins and establishing data-driven guardrails for sales team autonomy.
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
                  The company had grown through multiple product acquisitions, resulting in a complex SKU catalog with inconsistent pricing logic. Sales reps were confused about what to quote, and prospects were frustrated by long approval cycles.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Average deal approval time of 12 days creating competitive disadvantage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Discount levels ranging from 10% to 60% with no clear rationale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>150+ SKUs with overlapping functionality and unclear bundling rules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>No deal desk function - every non-standard deal went to CFO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Limited visibility into pricing performance and win/loss patterns</span>
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
                  New Wave Associates led a comprehensive pricing and deal governance redesign:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Analysis (Weeks 1-3):</strong> Analyzed 18 months of deal history to understand discount patterns, conducted competitive pricing benchmarking, interviewed sales team and top customers, and mapped current approval workflows.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Design (Weeks 4-8):</strong> Rationalized SKU catalog from 150 to 45 core offerings, designed tiered pricing structure with clear value metrics, established discount authorization matrix based on deal characteristics, and created deal desk operating model with clear SLAs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Implementation (Weeks 9-14):</strong> Built deal desk workflows in Salesforce, created pricing playbooks and training materials, hired and onboarded Deal Desk Manager, and launched pilot with top-performing sales team.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Scale & Optimize (Weeks 15-20):</strong> Rolled out to full sales organization, established weekly deal review cadence, built reporting dashboards for pricing analytics, and documented continuous improvement process.</span>
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
                  The new pricing and deal desk model dramatically improved both sales efficiency and margin protection:
                </p>
                <ul className="space-y-3 ml-6 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Deal approval time reduced from 12 days to 2 days average</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Average discount decreased from 38% to 28% while maintaining win rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>80% of deals now approved at Deal Desk level without executive escalation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Sales team satisfaction with pricing support increased by 45 points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Quarterly pricing reviews now enabled by comprehensive analytics</span>
                  </li>
                </ul>
                <p>
                  The Deal Desk function now serves as a strategic partner to sales, providing guidance on complex deal structures while maintaining pricing discipline and protecting margins.
                </p>
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
                      src={`${import.meta.env.BASE_URL}Pictures-2.png`}
                      alt="Hunter New"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-gray-700 font-medium">Hunter New</span>
                </div>
              </div>
            </div>
          </div>

          <CTABar
            text="Struggling with pricing complexity or slow deal cycles? We can help streamline your approach."
            buttonText="Contact Us"
            onButtonClick={() => onNavigate('contact-us')}
          />
        </div>
      </div>
    </div>
  );
}
