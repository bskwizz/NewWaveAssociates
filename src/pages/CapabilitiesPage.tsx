import { useState, useRef, useEffect } from 'react';
import CTABar from '../components/CTABar';
import PageHeader from '../components/PageHeader';

interface CapabilitiesPageProps {
  onNavigate: (page: string) => void;
}

const capabilities = [
  {
    id: 'cap-transformation-office',
    title: 'Project Management Office',
    points: [
      'Establish a unified governance engine that aligns strategy, funding, and delivery across functions.',
      'Implement portfolio dashboards and KPI frameworks that convert project data into executive visibility.',
      'Standardize tools, templates, and cadence to create a predictable delivery rhythm and stronger accountability.',
    ],
    outcome: 'Faster decision-making, reduced execution risk, and sustained delivery predictability across enterprise initiatives.',
    caseStudyRoute: 'hub-transformation-office',
  },
  {
    id: 'cap-gtm-growth',
    title: 'Go-to-Market & Growth Optimization',
    points: [
      'Redesign commercial architecture around Perfect-Customer-Profile, segment clarity, and measurable revenue pathways.',
      'Activate demand through channel-mix optimization, pricing discipline, and campaign velocity modeling.',
      'Embed an agile Go-to-Market operating rhythm that unites marketing, sales, and customer success.',
    ],
    outcome: 'Accelerated pipeline velocity, higher conversion rates, and sustained top-line growth.',
    caseStudyRoute: 'hub-gtm-growth',
  },
  {
    id: 'cap-integration-consolidation',
    title: 'Integration & Consolidation',
    points: [
      'Build integration management offices (IMOs) that synchronize culture, process, and technology post-deal.',
      'Harmonize product catalogs, financial systems, and go-to-market motions to capture synergy value.',
      'Execute structured day-100, day-200, and year-one playbooks to maintain business continuity.',
    ],
    outcome: 'Faster synergy realization, unified enterprise visibility, and minimal disruption during transition.',
    caseStudyRoute: 'hub-integration-consolidation',
  },
  {
    id: 'cap-labor-offshoring',
    title: 'Labor Strategy & Offshoring',
    points: [
      'Evaluate current org design to identify functions suitable for global delivery or automation.',
      'Establish hybrid operating models combining near-shore, offshore, and digital labor.',
      'Create performance-based vendor frameworks that preserve quality while lowering total cost.',
    ],
    outcome: 'Expanded capacity, 20–40% labor-efficiency gains, and resilient delivery coverage across time zones.',
    caseStudyRoute: 'hub-labor-offshoring',
  },
  {
    id: 'cap-sga-optimization',
    title: 'SG&A Cost Optimization',
    points: [
      'Diagnose enterprise support-function cost structures against benchmarks and strategic intent.',
      'Consolidate duplicative functions and deploy shared-service or CoE models where scale exists.',
      'Re-engineer high-cost workflows using automation and zero-based design.',
    ],
    outcome: 'Reduced run-rate spend, leaner support operations, and liberated capital for reinvestment in growth.',
    caseStudyRoute: 'hub-sga-optimization',
  },
  {
    id: 'cap-ai-automation',
    title: 'AI & Intelligent Automation',
    points: [
      'Identify automation opportunities across the enterprise using data-driven maturity assessments.',
      'Deploy AI-enabled workflows that eliminate manual friction and enhance decision accuracy.',
      'Build automation governance and performance dashboards to sustain adoption.',
    ],
    outcome: '10× process speed, measurable error reduction, and scalable intelligence embedded in daily operations.',
    caseStudyRoute: 'hub-ai-automation',
  },
];

export default function CapabilitiesPage({ onNavigate }: CapabilitiesPageProps) {
  const [fadeIn, setFadeIn] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      <div ref={vantaRef} className="hero relative min-h-screen pb-12" style={{
        background: `radial-gradient(1200px 600px at 15% -10%, rgba(1,163,219,0.25), transparent 50%),
                     radial-gradient(800px 400px at 85% 110%, rgba(56,73,93,0.25), transparent 50%),
                     linear-gradient(180deg, #f7f9fb 0%, #eef3f7 100%)`,
        overflow: 'visible'
      }}>
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, #38495d 100%, transparent 0),
                            radial-gradient(1px 1px at 70% 60%, #01a3db 100%, transparent 0),
                            radial-gradient(1px 1px at 40% 80%, #38495d 100%, transparent 0)`,
          backgroundSize: '120px 120px, 160px 160px, 200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>

        <PageHeader onNavigate={onNavigate} currentPage="capabilities" />

        <div className="relative flex items-start" style={{ paddingTop: '2.5rem' }}>
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="text-left">
                  <div className="inline-block mb-2">
                    <div>
                      <p className="text-black text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                        letterSpacing: '0.25em'
                      }}>
                        OUR EXPERIENCE
                      </p>
                      <div className="h-[2px] bg-[#f05e00]"></div>
                    </div>
                  </div>
                  <div className={`space-y-4 text-left mt-6 transition-opacity duration-1000 ${
                    fadeIn ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Our interim management services are tailored for organizations who require hands-on operators to make change happen.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      We have successfully placed our fractional and interim executives across multiple functions and industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/our_experience_graphic.png"
                    alt="New Wave Associates Experience"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className={`mt-12 max-w-7xl mx-auto px-6 transition-opacity duration-1000 ${
                fadeIn ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-[#00a4dd]">
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm uppercase tracking-wider">Industry</th>
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm uppercase tracking-wider">Role</th>
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm uppercase tracking-wider">Outcomes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Technology and Managed Service Providers</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Vice President of Strategy and Transformation</td>
                        <td className="px-6 py-4 text-sm text-gray-700">3 Months</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Developed a global labor strategy with $11M in annual operating efficiencies</li>
                            <li>Created an M&A playbook to integration 35+ acquisitions</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Technology and Managed Service Providers</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Director of Transformation</td>
                        <td className="px-6 py-4 text-sm text-gray-700">8 Months</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Orchestrated cross-functional workstreams to execute high-impact initiatives, utilizing custom project trackers to reconcile competing priorities and improve operational scalability across a $1B platform</li>
                            <li>Standardized a global product catalog by rationalizing 80,000+ SKUs into a unified data structure; improved reporting accuracy and margin visibility while reducing operational complexity for global sales and delivery teams</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Technology and Managed Service Providers</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Chief Growth Officer</td>
                        <td className="px-6 py-4 text-sm text-gray-700">8 Months</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Drive GTM strategy transformation (org structure, ICP, pricing, macroeconomic frameworks, KPI standardization)</li>
                            <li>Mitigated revenue leakage from bottom-tier clients with pricing levers, optimized data & reporting architecture/workflows</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">B2B SaaS / FinTech</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Vice President of Revenue Operations</td>
                        <td className="px-6 py-4 text-sm text-gray-700">2.5 Years</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Managed tech stack transformations, launching a BI foundation & reducing operational costs by $2M+</li>
                            <li>Led multiple global M&A integrations</li>
                            <li>Restructured pricing & packaging models increasing ASP 20% & reducing churn 10%</li>
                            <li>Drove $2M incremental ARR eliminating RevRec lag in deal closures</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">B2B SaaS / FinTech / AI</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Chief Operating Officer</td>
                        <td className="px-6 py-4 text-sm text-gray-700">1 Year</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Led product roadmap, market positioning & strategic direction</li>
                            <li>Shaped GTM strategies & identified whitespace opportunities</li>
                            <li>Drove strategic roadmaps, OKRs, and KPI frameworks</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">B2B SaaS / Fintech</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Director Strategy</td>
                        <td className="px-6 py-4 text-sm text-gray-700">2 Years</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Drove retention/upsell strategies & revenue forecasting initiatives, driving 5% increase in NRR & 15% cost reduction</li>
                            <li>Directed global M&A integrations aligning analytics, pricing & overall GTM strategies</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Healthcare</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Sr. Director of Strategic Sourcing</td>
                        <td className="px-6 py-4 text-sm text-gray-700">2 Years</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Drive spend cube mapping and cleanse with &gt;60k suppliers resulting in cleaner vendor master and vendor consolidation</li>
                            <li>Directed targeting strategies resulting in &gt;$22M annual cost savings + cast infusion &gt;$55M through payments solutioning</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">Waste & Recycling Services</td>
                        <td className="px-6 py-4 text-sm text-gray-700">VP of Strategic Sourcing</td>
                        <td className="px-6 py-4 text-sm text-gray-700">1 Year</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Developed GTM strategies for organics waste recycling for a major NoA provider</li>
                            <li>Developed and integrated a new collections and transfer model which levered existing over the road fleet infrastructures</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">BPO / ARM</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Chief Procurement Officer</td>
                        <td className="px-6 py-4 text-sm text-gray-700">3 Years</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Drove vendor consolidation and cost reduction in excess of $32M annually</li>
                            <li>Reduced data consumption for ARM business resulting in streamlined operations and lower cost structures</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700">B2B / B2C Banking Payments</td>
                        <td className="px-6 py-4 text-sm text-gray-700">VP of Strategic Alliance</td>
                        <td className="px-6 py-4 text-sm text-gray-700">1 Year</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Built a GTM B2C product set for insurance and one-time consumer payouts resulting in interchange revenues &gt;$22M annual</li>
                            <li>Drive CRM conversion and customer retainage programs for strategic alliances for card distribution</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="space-y-12 mb-16">
          {capabilities.map((capability) => (
            <section
              key={capability.id}
              id={capability.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#38495D]">
                  {capability.title}
                </h3>
              </div>

              <div className="space-y-4">
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
