import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const sections = [
  {
    id: 'gtm-strategy',
    title: 'GTM Strategy',
    subheading: 'Align product, pricing, and pipeline to drive repeatable growth.',
    bullets: [
      'Product & pricing clarity; discount guardrails',
      'Deal desk for edge cases; renewal discipline',
      'Segmentation, ICP, and channel strategy',
      'KPI cadence from pipeline to revenue',
      'Board-ready views of health and risk',
    ],
  },
  {
    id: 'cost-optimization',
    title: 'Cost Optimization',
    subheading: 'Reduce noise and expense without breaking continuity.',
    bullets: [
      'SKU/catalog simplification and vendor rationalization',
      'Working capital visibility; smarter terms',
      'COA alignment; margin clarity by product',
      'Duplicated tool elimination; contract hygiene',
      'Operating expense targeting with decision logs',
    ],
  },
  {
    id: 'operational-efficiencies',
    title: 'Operational Efficiencies',
    subheading: 'Increase throughput with clear roles, cadence, and automation.',
    bullets: [
      'Transformation Office (PMO/IMO) with weekly wins/risks/decisions',
      'Role clarity and handoffs that cut rework',
      'Platform modernization with predictable releases',
      'AI/automation for repetitive workflows',
      'Single-source metrics; fewer shadow spreadsheets',
    ],
  },
];

export default function FlywheelPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-full max-w-2xl mx-auto mb-6 bg-gray-200 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span className="text-sm">Flywheel Image Placeholder</span>
            </div>
          </div>
          <p className="text-lg text-[#38495D] font-medium">The New Wave Flywheel</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`mb-16 scroll-mt-24 ${index !== sections.length - 1 ? 'pb-16 border-b border-gray-200' : ''}`}
          >
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-[#38495D] mb-4">
                {section.title}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {section.subheading}
              </p>
              <ul className="space-y-4">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[#EF5919] text-xl mt-1">•</span>
                    <span className="text-lg text-gray-700 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 right-8 w-12 h-12 bg-[#01A3DB] text-white rounded-full items-center justify-center shadow-lg hover:bg-[#0192C5] transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
