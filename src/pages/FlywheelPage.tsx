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
  subheading: 'We design adaptive frameworks that align revenue teams, tech, processes, and data around one unified motion.',
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
      subhead: 'Executive-Ready Framing',
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
  subheading: 'We deliver measurable reductions in SG&A, COGS, and operational overhead to unlock EBITDA expansion without sacrificing growth.',
  groups: [
    {
      subhead: 'Cash Infusion & Liquidity Unlock',
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
      subhead: 'Cost Takeout via Strategic Alignment',
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
      subhead: 'Transformation-Oriented Efficiency Plays',
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
      subhead: 'Executive-Ready Framing',
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
  subheading: 'We re-engineer workflows across systems, teams, and processes to deliver scalability, speed, and confidence in execution.',
  groups: [
    {
      subhead: 'Core Operational Efficiency Levers',
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
  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeInGtm, setFadeInGtm] = useState(false);
  const [fadeInCost, setFadeInCost] = useState(false);
  const [fadeInOps, setFadeInOps] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFadeInImage(true);
    setTimeout(() => setFadeInGtm(true), 300);
    setTimeout(() => setFadeInCost(true), 600);
    setTimeout(() => setFadeInOps(true), 900);

    const hero = document.getElementById('flywheel-hero');
    if (hero) {
      hero.classList.remove('is-sticky');
    }
    document.documentElement?.style?.removeProperty('--nw-progress');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

    const heroBar = document.querySelector('.fw-progress--hero .fw-progress__bar') as HTMLElement;
    const heroWrap = document.querySelector('.fw-progress--hero') as HTMLElement;
    const first = document.getElementById('gtm-strategy');
    const last = document.getElementById('operational-efficiencies');
    const miniNav = document.querySelector('.flywheel-mininav') as HTMLElement;

    const setProgress = (pct: number) => {
      const pctStr = Math.min(100, Math.max(0, pct)) + '%';
      if (heroBar) heroBar.style.width = pctStr;
      if (miniNav) miniNav.style.setProperty('--fw-progress', pctStr);
    };

    const calcProgress = () => {
      if (!first || !last) return;
      const top = first.getBoundingClientRect().top + window.scrollY;
      const bottom = last.getBoundingClientRect().bottom + window.scrollY;
      const total = Math.max(1, bottom - top);
      const y = window.scrollY + window.innerHeight * 0.25;
      const pct = ((y - top) / total) * 100;
      setProgress(pct);
    };

    const toggleHandoff = () => {
      if (!miniNav || !heroWrap) return;
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nw-header-h')) || 64;
      const navTop = miniNav.getBoundingClientRect().top;
      const isSticky = navTop <= headerH + 1;
      heroWrap.classList.toggle('is-hidden', isSticky);
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      if (!prefersReduced) {
        const y = window.scrollY || 0;
        const t = clamp(y / 1200, 0, 1);
        const shiftX = (t * 6).toFixed(2) + 'px';
        const shiftY = (t * 8).toFixed(2) + 'px';
        document.documentElement.style.setProperty('--glow-shift-x', shiftX);
        document.documentElement.style.setProperty('--glow-shift-y', shiftY);
      }

      calcProgress();
      if (miniNav) {
        toggleHandoff();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
        <p className="text-xl text-gray-700 mb-8 leading-relaxed text-left w-full md:w-1/2">{content.subheading}</p>

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
      <div id="flywheel-hero" ref={vantaRef} className="flywheel-hero fw-glow" aria-label="New Wave Flywheel">
        <div className="flywheel-hero__inner hero-content">
          <div className="flywheel-hero__media">
            <img
              className={`flywheel-hero__img transition-opacity duration-1000 ${
                fadeInImage ? 'opacity-100' : 'opacity-0'
              }`}
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
            >
              <span className={`flywheel-label transition-opacity duration-700 ${
                fadeInGtm ? 'opacity-100' : 'opacity-0'
              }`}>GTM Strategy</span>
            </a>
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
            >
              <span className={`flywheel-label transition-opacity duration-700 ${
                fadeInCost ? 'opacity-100' : 'opacity-0'
              }`}>Cost Optimization</span>
            </a>
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
            >
              <span className={`flywheel-label transition-opacity duration-700 ${
                fadeInOps ? 'opacity-100' : 'opacity-0'
              }`}>Operational Efficiency</span>
            </a>
          </div>
        </div>
      </div>

      <div className="fw-progress fw-progress--hero" aria-hidden="true">
        <div className="fw-progress__bar"></div>
      </div>

      <div className="bg-gray-50 -mt-24 pt-32">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {renderSection(gtmStrategyContent)}
          {renderSection(costOptimizationContent)}
          {renderSection(operationalEfficienciesContent)}
        </div>
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
