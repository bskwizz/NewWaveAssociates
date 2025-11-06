import { ArrowUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const gtmStrategyContent = {
  id: 'gtm-strategy',
  title: 'GTM Strategy',
  subheading: 'Align product, pricing, and pipeline to drive repeatable growth.',
  groups: [
    {
      subhead: 'GTM Strategy Levers',
      items: [
        'Segment-Specific Value Propositions',
        'ICP-Driven Targeting',
        'Segment Clarity',
        'Commercial Strategy Realignment',
        'Demand Signal Amplification',
        'Channel Mix Optimization',
        'Revenue Pathway Engineering',
        'Conversion Funnel Acceleration',
      ],
    },
    {
      subhead: 'Framework & Operating Model',
      items: [
        'Modular GTM Architecture',
        'Agile Campaign Orchestration',
        'GTM Stack Rationalization',
        'Lead-to-Cash Process Engineering',
        'GTM Governance Framework',
        'Performance-Based Resource Allocation',
        'GTM Redesign & Transformation',
        'Zero-Based GTM Planning',
        'Cost-to-Acquire Optimization',
        'Digital Channel Expansion',
        'Sales Enablement Modernization',
        'Pipeline Velocity Uplift',
        'GTM Tech Stack Refresh',
      ],
    },
    {
      subhead: 'Executive-ready framing',
      items: [
        'Engineering precision into every commercial motion',
        'Rewiring the revenue engine for modern buyer behavior',
        'Aligning GTM architecture to strategic growth vectors',
        'Turning fragmented efforts into a unified market assault',
      ],
    },
  ],
};

const sections = [
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('gtm-strategy');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = (el.scrollHeight || document.body.scrollHeight) - el.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tabMap: Record<string, string> = {
      'gtm-strategy': 'gtm-strategy',
      'cost-optimization': 'cost-optimization',
      'operational-efficiencies': 'operational-efficiencies',
    };

    const opts: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (!id || !tabMap[id]) return;
        if (entry.isIntersecting) {
          setActiveTab(id);
          history.replaceState(null, '', '#' + id);
        }
      });
    }, opts);

    ['gtm-strategy', 'cost-optimization', 'operational-efficiencies'].forEach((id) => {
      const sec = document.getElementById(id);
      if (sec) io.observe(sec);
    });

    return () => io.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-full max-w-2xl mx-auto mb-6 relative">
            <img
              src="/FlyWheel New Wave Associates.png"
              alt="The New Wave Flywheel"
              className="w-full h-auto"
            />
            <button
              onClick={() => scrollToSection('gtm-strategy')}
              className="absolute top-[8%] left-[15%] w-[20%] h-[15%] cursor-pointer hover:opacity-50 transition-opacity"
              aria-label="Go to GTM Strategy section"
              style={{ background: 'transparent', border: 'none' }}
            />
            <button
              onClick={() => scrollToSection('cost-optimization')}
              className="absolute top-[8%] right-[15%] w-[20%] h-[15%] cursor-pointer hover:opacity-50 transition-opacity"
              aria-label="Go to Cost Optimization section"
              style={{ background: 'transparent', border: 'none' }}
            />
            <button
              onClick={() => scrollToSection('operational-efficiencies')}
              className="absolute bottom-[8%] left-[50%] -translate-x-1/2 w-[20%] h-[15%] cursor-pointer hover:opacity-50 transition-opacity"
              aria-label="Go to Operational Efficiencies section"
              style={{ background: 'transparent', border: 'none' }}
            />
          </div>
        </div>
      </div>

      <div className="flywheel-progress" aria-hidden="true">
        <div className="flywheel-progress__bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <nav className="flywheel-tabs" aria-label="Flywheel sections">
        <a
          href="#gtm-strategy"
          className={`flywheel-tab ${activeTab === 'gtm-strategy' ? 'is-active' : ''}`}
          onClick={(e) => handleTabClick(e, 'gtm-strategy')}
          aria-current={activeTab === 'gtm-strategy' ? 'location' : undefined}
        >
          GTM Strategy
        </a>
        <a
          href="#cost-optimization"
          className={`flywheel-tab ${activeTab === 'cost-optimization' ? 'is-active' : ''}`}
          onClick={(e) => handleTabClick(e, 'cost-optimization')}
          aria-current={activeTab === 'cost-optimization' ? 'location' : undefined}
        >
          Cost Optimization
        </a>
        <a
          href="#operational-efficiencies"
          className={`flywheel-tab ${activeTab === 'operational-efficiencies' ? 'is-active' : ''}`}
          onClick={(e) => handleTabClick(e, 'operational-efficiencies')}
          aria-current={activeTab === 'operational-efficiencies' ? 'location' : undefined}
        >
          Operational Efficiencies
        </a>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        <section
          id={gtmStrategyContent.id}
          aria-labelledby="gtm-strategy-title"
          className="mb-16 pb-16 border-b border-gray-200 scroll-mt-32"
        >
          <div className="max-w-4xl">
            <h2 id="gtm-strategy-title" className="text-4xl font-bold text-[#38495D] mb-4">
              {gtmStrategyContent.title}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {gtmStrategyContent.subheading}
            </p>

            {gtmStrategyContent.groups.map((group, idx) => (
              <div key={idx} className="gtm-group">
                <h3 className="gtm-subhead">{group.subhead}</h3>
                <ul className="gtm-list">
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`mb-16 scroll-mt-32 ${index !== sections.length - 1 ? 'pb-16 border-b border-gray-200' : ''}`}
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
