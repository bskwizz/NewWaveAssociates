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
  const [isHeroSticky, setIsHeroSticky] = useState(false);
  const [activeLabel, setActiveLabel] = useState('gtm-strategy');

  useEffect(() => {
    const hero = document.getElementById('flywheel-hero');
    const labels = Array.from(document.querySelectorAll('.flywheel-hero__label'));
    const sections = [
      document.getElementById('gtm-strategy'),
      document.getElementById('cost-optimization'),
      document.getElementById('operational-efficiencies'),
    ].filter(Boolean) as HTMLElement[];

    const headerH = 64;

    function setProgress(pct: number) {
      document.documentElement.style.setProperty(
        '--nw-progress',
        String(Math.max(0, Math.min(100, pct)))
      );
    }

    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const heroBottom = rect.top + rect.height;
        const shouldStick = heroBottom <= headerH + 8;
        setIsHeroSticky(shouldStick);
      }

      const first = sections[0];
      const last = sections[sections.length - 1];
      if (first && last) {
        const top = first.getBoundingClientRect().top + window.scrollY - headerH;
        const bottom = last.getBoundingClientRect().bottom + window.scrollY - headerH;
        const total = Math.max(1, bottom - top);
        const y = window.scrollY + window.innerHeight * 0.3;
        const pct = ((y - top) / total) * 100;
        setProgress(pct);
      }
    };

    const tabMap: Record<string, Element> = {
      'gtm-strategy': labels.find((a) => a.getAttribute('data-target') === 'gtm-strategy')!,
      'cost-optimization': labels.find((a) => a.getAttribute('data-target') === 'cost-optimization')!,
      'operational-efficiencies': labels.find(
        (a) => a.getAttribute('data-target') === 'operational-efficiencies'
      )!,
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const link = tabMap[id];
          if (!link) return;
          if (entry.isIntersecting) {
            setActiveLabel(id);
          }
        });
      },
      { root: null, rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((sec) => io.observe(sec));

    const img = hero?.querySelector('.flywheel-hero__img') as HTMLImageElement;
    if (img && !img.complete) {
      img.addEventListener('load', () => requestAnimationFrame(onScroll));
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLabelClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerH = 64;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
    window.scrollTo({ top: y, behavior: prefersReduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', '#' + targetId);
  };

  const renderSection = (content: SectionContent) => (
    <section
      id={content.id}
      aria-labelledby={`${content.id}-title`}
      className="mb-16 pb-16 border-b border-gray-200"
      style={{ scrollMarginTop: '180px' }}
    >
      <div className="max-w-6xl">
        <h2 id={`${content.id}-title`} className="text-4xl font-bold text-[#38495D] mb-4">
          {content.title}
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">{content.subheading}</p>

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
    <div className="pt-16">
      <div
        id="flywheel-hero"
        className={`flywheel-hero ${isHeroSticky ? 'is-sticky' : ''}`}
        aria-label="New Wave Flywheel"
      >
        <div className="flywheel-hero__inner">
          <div className="flywheel-hero__media">
            <img
              className="flywheel-hero__img"
              src="/FlyWheel New Wave Associates.png"
              alt="New Wave Flywheel"
            />
            <div className="flywheel-hero__line-overlay" aria-hidden="true"></div>
          </div>

          <nav className="flywheel-hero__labels" aria-label="Flywheel sections">
            <a
              href="#gtm-strategy"
              className={`flywheel-hero__label ${activeLabel === 'gtm-strategy' ? 'is-active' : ''}`}
              data-target="gtm-strategy"
              onClick={(e) => handleLabelClick(e, 'gtm-strategy')}
            >
              GTM Strategy
            </a>
            <a
              href="#cost-optimization"
              className={`flywheel-hero__label ${activeLabel === 'cost-optimization' ? 'is-active' : ''}`}
              data-target="cost-optimization"
              onClick={(e) => handleLabelClick(e, 'cost-optimization')}
            >
              Cost Optimization
            </a>
            <a
              href="#operational-efficiencies"
              className={`flywheel-hero__label ${activeLabel === 'operational-efficiencies' ? 'is-active' : ''}`}
              data-target="operational-efficiencies"
              onClick={(e) => handleLabelClick(e, 'operational-efficiencies')}
            >
              Operational Efficiencies
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
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
