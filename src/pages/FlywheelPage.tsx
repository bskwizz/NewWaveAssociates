import { ArrowUp, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
  const miniNavInitialized = useRef(false);

  useEffect(() => {
    const hero = document.getElementById('flywheel-hero');
    if (hero) {
      hero.classList.remove('is-sticky');
    }
    document.documentElement?.style?.removeProperty('--nw-progress');

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (miniNavInitialized.current) return;
    miniNavInitialized.current = true;

    const sectionIds = ['gtm-strategy', 'cost-optimization', 'operational-efficiencies'];
    const links = sectionIds.map(id => document.querySelector('.flywheel-mininav__link[href="#' + id + '"]'));

    sectionIds.forEach(id => {
      const sec = document.getElementById(id);
      if (sec) {
        sec.classList.add('fw-section');
        const h2 = sec.querySelector('h2');
        if (h2) h2.classList.add('reveal');
      }
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          links.forEach(a => a && a.classList.remove('is-active'));
          const active = document.querySelector('.flywheel-mininav__link[href="#' + id + '"]');
          active && active.classList.add('is-active');

          const h2 = entry.target.querySelector('h2.reveal');
          if (h2) h2.classList.add('is-visible');
        }
      });
    }, { root: null, rootMargin: '-35% 0px -55% 0px', threshold: [0.25, 0.5, 0.75] });

    sectionIds.forEach(id => {
      const sec = document.getElementById(id);
      if (sec) io.observe(sec);
    });

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    links.forEach(a => {
      if (!a) return;
      a.addEventListener('click', (e) => {
        const targetId = a.getAttribute('href')?.slice(1);
        if (!targetId) return;
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        e.preventDefault();
        const headerH = 64;
        const y = targetEl.getBoundingClientRect().top + window.scrollY - headerH - 8;
        window.scrollTo({ top: y, behavior: prefersReduced ? 'auto' : 'smooth' });
        history.replaceState(null, '', '#' + targetId);
      });
    });

    return () => {
      io.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = (content: SectionContent) => (
    <section
      id={content.id}
      aria-labelledby={`${content.id}-title`}
      className="mb-16 pb-16 border-b border-gray-200"
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
      <div id="flywheel-hero" className="flywheel-hero" aria-label="New Wave Flywheel">
        <div className="flywheel-hero__inner">
          <div className="flywheel-hero__media">
            <img
              className="flywheel-hero__img"
              src="/FlyWheel New Wave Associates.png"
              alt="New Wave Flywheel"
            />
            <a
              href="#gtm-strategy"
              className="flywheel-hotspot flywheel-hotspot--gtm"
              aria-label="Go to GTM Strategy"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('gtm-strategy');
                if (target) {
                  const headerH = 64;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            ></a>
            <a
              href="#cost-optimization"
              className="flywheel-hotspot flywheel-hotspot--cost"
              aria-label="Go to Cost Optimization"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('cost-optimization');
                if (target) {
                  const headerH = 64;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            ></a>
            <a
              href="#operational-efficiencies"
              className="flywheel-hotspot flywheel-hotspot--ops"
              aria-label="Go to Operational Efficiencies"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('operational-efficiencies');
                if (target) {
                  const headerH = 64;
                  const y = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            ></a>
          </div>
        </div>
      </div>

      <nav className="flywheel-mininav" aria-label="Flywheel quick navigation">
        <a href="#gtm-strategy" className="flywheel-mininav__link is-active">GTM Strategy</a>
        <a href="#cost-optimization" className="flywheel-mininav__link">Cost Optimization</a>
        <a href="#operational-efficiencies" className="flywheel-mininav__link">Operational Efficiencies</a>
      </nav>

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
