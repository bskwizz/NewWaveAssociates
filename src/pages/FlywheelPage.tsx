import { ArrowUp, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SectionGroup {
  subhead: string;
  items: string[];
}

interface SectionContent {
  id: string;
  title: string;
  subheading: string;
  groups: SectionGroup[];
}

const gtmStrategyContent: SectionContent = {
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
      ],
    },
    {
      subhead: 'GTM Redesign & Transformation',
      items: [
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

const costOptimizationContent: SectionContent = {
  id: 'cost-optimization',
  title: 'Cost Optimization',
  subheading: 'Reduce noise and expense without breaking continuity.',
  groups: [
    {
      subhead: 'Cash infusion & Liquidity Unlock',
      items: [
        'Working Capital Liberation',
        'Balance Sheet Optimization',
        'Liquidity Uplift',
        'Cash Flow Acceleration',
        'Monetization of Non-core Assets',
        'Rapid ROI Levers',
        'Operational Cash Reparation',
      ],
    },
    {
      subhead: 'Cost takeout via strategic alignment',
      items: [
        'Targeted SG&A Rationalization',
        'Support Function Rewiring',
        'Shared Service Realignment',
        'Strategic Consolidation',
        'Functional Cost Harmonization',
        'Support Stack Simplification',
      ],
    },
    {
      subhead: 'Transformation-oriented efficiency plays',
      items: [
        'Cost-To-Serve Compression',
        'Digital Labor Deployment',
        'Process Reengineering at Scale',
        'AI Driven Cost Containment',
        'End-to-End Value Chain Optimization',
        'Strategic Cost Restructuring',
        'Run-Rate Reduction Initiatives',
      ],
    },
    {
      subhead: 'Executive-ready framing',
      items: [
        'Unlocking trapped value through surgical cost alignment',
        'Infusing liquidity via precision-tuned support model transformation',
        'From bloated to bold: Rearchitecting cost structure for scale',
        'Turning cost centers into value engines',
        'Aligning support functions to strategic intent, not inertia',
      ],
    },
  ],
};

const operationalEfficienciesContent: SectionContent = {
  id: 'operational-efficiencies',
  title: 'Operational Efficiencies',
  subheading: 'Increase throughput with clear roles, cadence, and automation.',
  groups: [
    {
      subhead: 'Core operational Efficiency Levers',
      items: [
        'Throughput Maximization',
        'Cycle Time Compression',
        'Lean Process Enablement',
        'Workflow Streamlining',
        'Touchpoint Reduction',
        'Operational Load Balancing',
        'Process Velocity Uplift',
        'Waste Elimination',
      ],
    },
    {
      subhead: 'Intelligent Automation & Digital',
      items: [
        'Digital Twin Deployment',
        'Hyper Automation Strategy',
        'AI-Augmented Operations',
        'Bot-Driven Task Execution',
        'Cognitive Workflow Integration',
        'Intelligent Exception Handling',
        'Digital Labor Scaling',
        'Offshore/Onshore Productivity Gains',
      ],
    },
    {
      subhead: 'Cross-Functional Optimization',
      items: [
        'End-to-End Process Harmonization',
        'Functional Interface Simplification',
        'Cross-Silo Efficiency Plays',
        'Enterprise Throughput Engineering',
        'Span-of-Control Realignment',
        'Ops Stack Consolidation',
        'Platform Rationalization',
        'Strategic Headcount Calibration',
      ],
    },
    {
      subhead: 'Transformation-Oriented Efficiencies',
      items: [
        'Run-Rate Efficiency Expansion',
        'Cost-to-Serve Optimization',
        'Agility Driven Ops Restructuring',
        'Performance Uplift via Process Rewire',
        'Efficiency-Led Growth Enablement',
        'Structural Ops Reset',
        'Throughput-First Transformation',
      ],
    },
  ],
};

interface CollapsibleGroupProps {
  subhead: string;
  items: string[];
  groupId: string;
}

function CollapsibleGroup({ subhead, items, groupId }: CollapsibleGroupProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(mobile);
      if (!mobile) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <section className="fw-group" data-collapsible aria-expanded={isExpanded}>
      <button
        className="fw-group__head"
        type="button"
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={groupId}
      >
        <span className="fw-group__title">{subhead}</span>
        <span className="fw-group__chev" aria-hidden="true">
          <ChevronDown size={18} />
        </span>
      </button>
      <ul className="fw-list" id={groupId} style={{ display: isExpanded ? 'grid' : 'none' }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

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

  const renderSection = (content: SectionContent) => (
    <section
      id={content.id}
      aria-labelledby={`${content.id}-title`}
      className="mb-16 pb-16 border-b border-gray-200 scroll-mt-32"
    >
      <div className="max-w-6xl">
        <h2 id={`${content.id}-title`} className="text-4xl font-bold text-[#38495D] mb-4">
          {content.title}
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {content.subheading}
        </p>

        <div className="fw-group-grid">
          {content.groups.map((group, idx) => (
            <CollapsibleGroup
              key={idx}
              subhead={group.subhead}
              items={group.items}
              groupId={`${content.id}-group-${idx}`}
            />
          ))}
        </div>
      </div>
    </section>
  );

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
        {renderSection(gtmStrategyContent)}
        {renderSection(costOptimizationContent)}
        {renderSection(operationalEfficienciesContent)}
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
