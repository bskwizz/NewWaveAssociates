import PageHeader from '../components/PageHeader';

interface IndustriesPageProps {
  onNavigate: (page: string) => void;
}

const industries = [
  {
    title: 'Financial Services & Fintech',
    description: 'We help banks, credit unions, and fintechs reduce noise, strengthen pricing discipline, and execute integrations with regulatory clarity.',
    points: [
      'Post-merger integration and separation',
      'Product and pricing standardization',
      'Renewal and retention operations',
      'Risk and control readiness',
      'Margin visibility by product',
    ],
  },
  {
    title: 'Healthcare & Provider Networks',
    description: 'We enable multi-site health organizations to align process, capacity, and data — without disrupting care.',
    points: [
      'Enterprise Project Management Office and change cadence',
      'Referral and access workflows',
      'Clinical + operational comms',
      'Vendor rationalization',
      'KPI design and scorecards',
    ],
  },
  {
    title: 'Technology, SaaS & Managed Services',
    description: "For platforms and MSPs, we bring order to product, pricing, and delivery — so growth doesn't break quality.",
    points: [
      'SKU catalog cleanup and agreement alignment',
      'RevOps and deal desk setup',
      'Triage + defect workflow design',
      'Platform modernization and prioritization',
      'Automation for repetitive ops work',
    ],
  },
  {
    title: 'Private Equity & Portfolio Ops',
    description: 'We accelerate value creation with 100-day plans and hands-on execution that leadership teams can sustain.',
    points: [
      'Integration management office (IMO)',
      'Commercial + operating alignment',
      'Cost takeout with continuity',
      'Working capital reporting',
      'Board-ready dashboards',
    ],
  },
  {
    title: 'Industrial, Manufacturing & Distribution',
    description: 'We streamline quote-to-cash and improve gross margin visibility — down to the SKU and channel.',
    points: [
      'Item master and catalog governance',
      'Price guardrails and discount logic',
      'Inventory + COA mapping',
      'Field service clarity',
      'Data cleanup and reporting',
    ],
  },
];

export default function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader onNavigate={onNavigate} currentPage="industries" />
      <div className="pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 w-full">
        <div className="max-w-4xl mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#38495D] mb-4 md:mb-6">Industries</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            At New Wave Associates, we apply pattern recognition across sectors. We&apos;ve built PMOs, led integrations, run due diligence, standardized product catalogs, and installed renewal discipline — from fintech to manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-7 xl:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#38495D] mb-3 md:mb-4">
                {industry.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                {industry.description}
              </p>
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-[#01A3DB] uppercase tracking-wide">
                  Where we help:
                </p>
                <ul className="space-y-2">
                  {industry.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3 text-sm sm:text-base text-gray-700">
                      <span className="text-[#EF5919] mt-1 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
