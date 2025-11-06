import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import CTABar from '../components/CTABar';

interface CapabilitiesPageProps {
  onNavigate: (page: string) => void;
}

const capabilities = [
  {
    title: 'Transformation Office (PMO/IMO)',
    points: [
      'Stand up or tune an execution engine that aligns strategy, funding, and delivery',
      'Design cadence: wins, risks, decisions, unblockers',
      'Coach leaders on crisp updates',
    ],
    outcome: 'Visible burn-down of noise and risk',
  },
  {
    title: 'Operating Model & Org Design',
    points: [
      'Clarify roles, handoffs, and incentives',
      'Align budgets and metrics to outcomes',
      'Reduce friction; speed up decisions',
    ],
    outcome: 'Higher throughput with fewer meetings',
  },
  {
    title: 'Product, Pricing & Deal Desk',
    points: [
      'Standardize SKUs and pricing rules',
      'Set up lightweight deal governance',
      'Increase renewal speed and margin',
    ],
    outcome: 'Healthier pipeline-to-revenue flow',
  },
  {
    title: 'Post-Merger Integration & Separation',
    points: [
      'Day-1 / Day-100 planning turnkey',
      'Data + customer migration choreography',
      'Cultural + comms integration',
    ],
    outcome: 'Captured synergies without disruption',
  },
  {
    title: 'Data, Insights & KPI Cadence',
    points: [
      'Define the "vital few" metrics by level',
      'Single-source dashboards',
      'Translate analytics into decisions',
    ],
    outcome: 'Faster decisions, fewer spreadsheets',
  },
  {
    title: 'Platform Modernization & Program Rescue',
    points: [
      'Re-sequence for earlier value',
      'Add milestone and risk clarity',
      'Restore predictability',
    ],
    outcome: 'Rebuilt trust in delivery',
  },
  {
    title: 'AI & Intelligent Automation',
    points: [
      'Identify and pilot high-ROI automations',
      'Prove value before scaling',
      'Embed user adoption',
    ],
    outcome: 'Real capacity unlocked, sustained',
  },
];

export default function CapabilitiesPage({ onNavigate }: CapabilitiesPageProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const vantaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-16">
      <div ref={vantaRef} className="capabilities-hero" aria-label="Capabilities">
        <div className="capabilities-hero__inner hero-content">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xl text-[#38495D]" style={{ maxWidth: '75%' }}>
              Explore the full spectrum of capabilities we deploy to accelerate growth, expand margins, and operationalize transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 -mt-24 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="space-y-4 mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-[#38495D]">
                  {capability.title}
                </h3>
                <ChevronDown
                  className={`text-[#01A3DB] transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

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
                      <button
                        onClick={() => onNavigate('case-studies')}
                        className="text-[#01A3DB] hover:text-[#0182b3] underline text-sm transition-colors"
                      >
                        View related case studies →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
