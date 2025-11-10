import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import CTABar from '../components/CTABar';

interface CapabilitiesPageProps {
  onNavigate: (page: string) => void;
}

const capabilities = [
  {
    id: 'cap-transformation-office',
    title: 'Transformation Office (PMO/IMO)',
    points: [
      'Stand up or tune an execution engine that aligns strategy, funding, and delivery',
      'Design cadence: wins, risks, decisions, unblockers',
      'Coach leaders on crisp updates',
    ],
    outcome: 'Visible burn-down of noise and risk',
    caseStudyRoute: 'case-study-pmo',
  },
  {
    id: 'cap-gtm-growth',
    title: 'Go-to-Market (GTM), Growth Optimization',
    points: [
      'Design adaptive frameworks that align revenue teams, tech, processes, and data',
      'Segment-specific value propositions and ICP-driven targeting',
      'Revenue pathway engineering and conversion funnel acceleration',
    ],
    outcome: 'Unified market motion with predictable growth',
    caseStudyRoute: null,
  },
  {
    id: 'cap-integration-consolidation',
    title: 'Integration & Consolidation',
    points: [
      'Day-1 / Day-100 planning turnkey',
      'Data + customer migration choreography',
      'Cultural + comms integration',
    ],
    outcome: 'Captured synergies without disruption',
    caseStudyRoute: 'case-study-merger',
  },
  {
    id: 'cap-labor-offshoring',
    title: 'Labor Strategy & Offshoring',
    points: [
      'Strategic labor model design and optimization',
      'Offshore/nearshore capability assessment and buildout',
      'Transition planning and knowledge transfer frameworks',
    ],
    outcome: 'Cost-effective scaling with quality delivery',
    caseStudyRoute: null,
  },
  {
    id: 'cap-sga-optimization',
    title: 'SG&A Cost Optimization',
    points: [
      'Targeted SG&A rationalization and support function rewiring',
      'Shared service realignment and strategic consolidation',
      'Cash flow acceleration and working capital liberation',
    ],
    outcome: 'EBITDA expansion without sacrificing growth',
    caseStudyRoute: null,
  },
  {
    id: 'cap-ai-automation',
    title: 'AI & Intelligent Automation',
    points: [
      'Identify and pilot high-ROI automations',
      'Prove value before scaling',
      'Embed user adoption',
    ],
    outcome: 'Real capacity unlocked, sustained',
    caseStudyRoute: 'case-study-ai',
  },
];

export default function CapabilitiesPage({ onNavigate }: CapabilitiesPageProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [fadeIn, setFadeIn] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="pt-16">
      <div ref={vantaRef} className="capabilities-hero" aria-label="Capabilities">
        <div className="capabilities-hero__inner hero-content">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-center h-full">
            <p
              className={`text-xl text-[#38495D] text-center transition-opacity duration-1000 ${
                fadeIn ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ maxWidth: '900px' }}
            >
              Explore the full spectrum of capabilities we deploy to accelerate growth, expand margins, and operationalize transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 -mt-24 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="cap-accordion-list space-y-4 mb-16">
          {capabilities.map((capability, index) => (
            <section
              key={capability.id}
              id={capability.id}
              className="cap-accordion border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
              aria-labelledby={`${capability.id}-h`}
            >
              <button
                id={`${capability.id}-h`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="cap-accordion__head w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                type="button"
                aria-expanded={expandedIndex === index}
                aria-controls={`${capability.id}-panel`}
              >
                <span className="cap-accordion__title text-xl font-bold text-[#38495D]">
                  {capability.title}
                </span>
                <ChevronDown
                  className={`text-[#01A3DB] transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`${capability.id}-panel`}
                className="cap-accordion__panel"
                hidden={expandedIndex !== index}
              >
                {expandedIndex === index && (
                  <div className="px-6 pb-6 space-y-4">
                    <ul className="space-y-3">
                      {capability.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="text-[#01A3DB] mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-200 space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-[#EF5919] mb-1">
                          Outcome:
                        </p>
                        <p className="text-gray-700 italic">{capability.outcome}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#38495D] mb-2">
                          Related Case Studies:
                        </p>
                        {capability.caseStudyRoute ? (
                          <button
                            onClick={() => onNavigate(capability.caseStudyRoute!)}
                            className="text-[#01A3DB] hover:text-[#0182b3] underline text-sm transition-colors"
                          >
                            View related case studies →
                          </button>
                        ) : (
                          <button
                            onClick={() => onNavigate('contact-us')}
                            className="inline-block px-4 py-2 bg-gray-100 text-[#38495D] rounded hover:bg-gray-200 text-sm transition-colors"
                          >
                            Discuss your use case
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
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
