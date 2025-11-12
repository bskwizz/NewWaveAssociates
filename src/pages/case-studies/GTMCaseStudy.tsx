import { useRef, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CTABar from '../../components/CTABar';

interface GTMCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function GTMCaseStudy({ onNavigate }: GTMCaseStudyProps) {
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
          onClick={() => onNavigate('hub-gtm-growth')}
          className="flex items-center gap-2 text-[#01A3DB] hover:text-[#0182b3] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Back to Go-to-Market & Growth Optimization
        </button>
      </div>
      <div ref={vantaRef} className="capabilities-hero" aria-label="Case Study">
        <div className="capabilities-hero__inner hero-content">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-5xl font-bold text-[#38495D] mb-4">
                Go-to-Market Optimization
              </h1>
              <p className="text-lg text-[#38495D] mb-2">
                Case Study
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Author: TBD | 5 minute read
              </p>

              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-8 mb-8 shadow-lg max-w-4xl">
                <h2 className="text-xl font-bold text-[#38495D] mb-4">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  [Placeholder content for Go-to-Market case study executive summary. This will be replaced with actual case study details about how New Wave Associates helped a company optimize their go-to-market strategy, align revenue teams, and drive predictable growth through strategic framework design and execution.]
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
                  [Placeholder content describing the client's Go-to-Market challenges and growth constraints.]
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder challenge 1]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder challenge 2]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder challenge 3]</span>
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
                  New Wave Associates implemented a comprehensive Go-to-Market transformation:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder approach step 1]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder approach step 2]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder approach step 3]</span>
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
                  [Placeholder content describing the results and impact:]
                </p>
                <ul className="space-y-3 ml-6 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder outcome 1]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder outcome 2]</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>[Placeholder outcome 3]</span>
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
                  </div>
                  <span className="text-gray-700 font-medium">[Team Member TBD]</span>
                </div>
              </div>
            </div>
          </div>

          <CTABar
            text="Ready to optimize your go-to-market strategy? Let's discuss your growth opportunities."
            buttonText="Contact Us"
            onButtonClick={() => onNavigate('contact-us')}
          />
        </div>
      </div>
    </div>
  );
}
