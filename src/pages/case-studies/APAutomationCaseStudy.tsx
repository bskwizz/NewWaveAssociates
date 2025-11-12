import { useRef, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CTABar from '../../components/CTABar';

interface APAutomationCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function APAutomationCaseStudy({ onNavigate }: APAutomationCaseStudyProps) {
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
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <button
          onClick={() => onNavigate('hub-ai-automation')}
          className="flex items-center gap-2 text-[#01A3DB] hover:text-[#0182b3] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Back to AI & Intelligent Automation
        </button>
      </div>
      <div ref={vantaRef} className="capabilities-hero" aria-label="Case Study">
        <div className="capabilities-hero__inner hero-content">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-5xl font-bold text-[#38495D] mb-4">
                AP Automation & Payments
              </h1>
              <p className="text-lg text-[#38495D] mb-2">
                Case Study
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Author: Craig Keller | 3 minute read
              </p>

              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-8 mb-8 shadow-lg max-w-4xl">
                <h2 className="text-xl font-bold text-[#38495D] mb-4">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  Accounts payable relied on manual, error-prone workflows that slowed payment cycles and obscured cash visibility. New Wave deployed an enterprise-grade automation platform covering invoice ingestion, matching, approvals, and payments—reducing cost-per-invoice to near-world-class levels and delivering payback within nine months.
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
                    <span>Manual entry, inconsistent reconciliation, and limited auditability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>High processing cost and excessive headcount</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Limited cash forecasting accuracy and discount capture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Frequent vendor inquiries and slow issue resolution</span>
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
                    <span>Implemented end-to-end invoice automation (capture → match → approve → pay)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Introduced vendor self-service portal and automated exception handling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Embedded compliance, segregation of duties, and role-based approvals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Delivered dashboards for visibility into cash flow and performance metrics</span>
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
                    <span>Processing cost reduced to ≈ $1–$2 per invoice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Labor efficiency improved ≈ 65%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Vendor satisfaction and forecasting accuracy significantly improved</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Payback 6–9 months | 3-year ROI 400%–600%</span>
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
                      src={`${import.meta.env.BASE_URL}Pictures-6.png`}
                      alt="Craig Keller"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#38495D]">Craig Keller</p>
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
