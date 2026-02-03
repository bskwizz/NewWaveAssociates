import { ArrowUp, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

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
  title: 'Go-to-Market Strategy',
  subheading: 'We design adaptive frameworks that align revenue teams, tech, processes, and data around one unified motion.',
  groups: [
    {
      subhead: 'Go-to-Market Strategy Levers',
      items: [
        'Segment-Specific Value Propositions',
        'Perfect-Customer-Profile Driven Targeting',
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
        'Modular Go-to-Market Architecture',
        'Agile Campaign Orchestration',
        'Go-to-Market Stack Rationalization',
        'Lead-to-Cash Process Engineering',
        'Go-to-Market Governance Framework',
        'Performance-Based Resource Allocation',
      ],
    },
    {
      subhead: 'Go-to-Market Redesign & Transformation',
      items: [
        'Zero-Based Go-to-Market Planning',
        'Cost-to-Acquire Optimization',
        'Digital Channel Expansion',
        'Sales Enablement Modernization',
        'Pipeline Velocity Uplift',
        'Go-to-Market Tech Stack Refresh',
      ],
    },
    {
      subhead: 'Executive-Ready Framing',
      items: [
        'Engineering precision into every commercial motion',
        'Rewiring the revenue engine for modern buyer behavior',
        'Aligning Go-to-Market architecture to strategic growth vectors',
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

interface FlywheelPageProps {
  onNavigate: (page: string) => void;
}

export default function FlywheelPage({ onNavigate }: FlywheelPageProps) {
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
    <div>
      <div id="flywheel-hero" ref={vantaRef} className="flywheel-hero fw-glow" aria-label="New Wave Flywheel">
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, #38495d 100%, transparent 0),
                            radial-gradient(1px 1px at 70% 60%, #01a3db 100%, transparent 0),
                            radial-gradient(1px 1px at 40% 80%, #38495d 100%, transparent 0)`,
          backgroundSize: '120px 120px, 160px 160px, 200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>

        <PageHeader onNavigate={onNavigate} currentPage="flywheel" />

        <div className="relative flex items-start" style={{ minHeight: 'calc(100vh - 16rem)', paddingTop: '2rem' }}>
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="flywheel-hero__media relative">
                  <img
                    className={`flywheel-hero__img transition-opacity duration-1000 ${
                      fadeInImage ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ maxWidth: '240%', width: '240%', margin: '0 auto' }}
                    src={`${import.meta.env.BASE_URL}new_new_wave_flywheel.pdf%20copy%20copy.png`}
                    alt="New Wave Flywheel"
                  />
            <div
              className={`flywheel-overlay flywheel-overlay--gtm transition-opacity duration-1400 ${
                fadeInGtm ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            <a
              href="#gtm-strategy"
              className="flywheel-hotspot flywheel-hotspot--gtm"
              aria-label="Go to Go-to-Market Strategy"
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
            <div
              className={`flywheel-overlay flywheel-overlay--cost transition-opacity duration-1400 ${
                fadeInCost ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
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
            <div
              className={`flywheel-overlay flywheel-overlay--ops transition-opacity duration-1400 ${
                fadeInOps ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
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
                <div className="hero-rotator text-left pt-8">
                  <div className="mb-6">
                    <div className="inline-block">
                      <p className="text-black text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2 animate-fade-in text-left" style={{
                        letterSpacing: '0.25em'
                      }}>
                        Interim<br />Leadership Practice Areas
                      </p>
                      <div className="h-[2px] bg-[#f05e00]"></div>
                    </div>
                  </div>

                  <div className="space-y-6 text-left max-w-xl">
                    <p className="text-gray-700 text-base leading-relaxed">
                      We embed in the trenches with leaders to achieve specific, pragmatic goals quickly.
                    </p>

                    <p className="text-gray-700 text-base leading-relaxed">
                      Our interim leadership services are informed by decades of combined experience; our entire team has served as director, VP, and C-level executives in house.
                    </p>

                    <p className="text-gray-700 text-base leading-relaxed">
                      We modernize core business operations through process redesign, data integration, post-merger integration, and performance governance to scale cross-functional execution at speed and quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-8">
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
