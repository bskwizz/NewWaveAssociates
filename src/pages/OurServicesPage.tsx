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
  subheading?: string;
  bullets?: string[];
  groups: SectionGroup[];
  image?: string;
}

const gtmStrategyContent: SectionContent = {
  id: 'gtm-strategy',
  title: 'Strategic Sourcing',
  bullets: [
    'Spend Cube Development and AP Baseline',
    'Market Event Oversight and Execution',
    'Talent Assessment and Operating Model Redesign',
    'GPO Interaction Model Development',
  ],
  groups: [],
  image: '/strategic_sourcing_flow_diagram.png',
};

const costOptimizationContent: SectionContent = {
  id: 'cost-optimization',
  title: 'Revenue and Demand Acceleration',
  bullets: [
    'Revenue Source and Gap Diagnostic',
    'Pricing and Packaging Strategy Development',
    'Define and Communicate Go-to-Market Objectives (Offerings, Pricing, Demand and Lead Generation)',
  ],
  groups: [],
  image: '/revenue_growth_through_digital_acceleration.png',
};

const operationalEfficienciesContent: SectionContent = {
  id: 'operational-efficiencies',
  title: 'Integrations and Divestitures',
  bullets: [
    'Integration, Divestiture Management, and Transformation Office Leadership (IMO, DMO, TMO)',
    'Cost and Revenue Synergy Execution and Capture',
    'Stranded Cost Management and Mitigation',
    'Current, Interim, and Future-State Operating Model Execution',
  ],
  groups: [],
  image: '/integration_and_divestiture_in_motion.png',
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

interface OurServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function OurServicesPage({ onNavigate }: OurServicesPageProps) {
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

    const hero = document.getElementById('our-services-hero');
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

  const renderSection = (content: SectionContent) => {
    const isFlipped = content.id === 'cost-optimization';

    const textContent = (
      <div className="flex flex-col justify-center">
        <div className="text-left mb-2 sm:mb-3">
          <div className="inline-block mb-2">
            <div>
              <h2
                id={`${content.id}-title`}
                className="text-black text-xs sm:text-sm lg:text-base font-bold uppercase mb-2"
                style={{ letterSpacing: '0.2em' }}
              >
                {content.title}
              </h2>
              <div className="h-[2px] bg-[#f05e00]"></div>
            </div>
          </div>
        </div>

        {content.subheading && (
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-5 sm:mb-6 lg:mb-8 leading-relaxed text-left">{content.subheading}</p>
        )}

        {content.bullets && content.bullets.length > 0 && (
          <ul className="space-y-2 sm:space-y-2 lg:space-y-3 text-left">
            {content.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#f05e00] mr-2 sm:mr-2 lg:mr-3 mt-1 flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {content.groups.length > 0 && (
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
        )}
      </div>
    );

    const imageContent = content.image && (
      <div className="flex items-center justify-center">
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    );

    return (
      <section
        id={content.id}
        aria-labelledby={`${content.id}-title`}
        className="mb-8 sm:mb-10 lg:mb-16 pb-8 sm:pb-10 lg:pb-16 border-b border-gray-200"
      >
        <div className="max-w-6xl">
          <div className={content.image ? 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 items-center' : ''}>
            {isFlipped ? (
              <>
                <div className="order-1 md:order-1">{imageContent}</div>
                <div className="order-2 md:order-2">{textContent}</div>
              </>
            ) : (
              <>
                <div className="order-2 md:order-1">{textContent}</div>
                <div className="order-1 md:order-2">{imageContent}</div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <div id="our-services-hero" ref={vantaRef} className="flywheel-hero fw-glow flex flex-col min-h-[100svh] overflow-hidden lg:overflow-visible lg:min-h-screen" aria-label="New Wave Flywheel" style={{ position: 'relative' }}>
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, #38495d 100%, transparent 0),
                            radial-gradient(1px 1px at 70% 60%, #01a3db 100%, transparent 0),
                            radial-gradient(1px 1px at 40% 80%, #38495d 100%, transparent 0)`,
          backgroundSize: '120px 120px, 160px 160px, 200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>

        <div className="relative z-10 flex-1 flex flex-col">
          <PageHeader />

          <div className="relative flex items-center lg:items-start flex-1 pt-8 pb-4 sm:pt-12 sm:pb-6 lg:pt-16 lg:pb-0 lg:min-h-0">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 w-full">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 lg:items-center">
                <div className="hero-rotator text-left order-1 lg:order-2">
                  <div className="inline-block mb-1 lg:mb-2">
                    <div>
                      <p className="text-black text-xs sm:text-sm lg:text-base font-bold uppercase mb-1 lg:mb-2 animate-fade-in" style={{
                        letterSpacing: '0.2em'
                      }}>
                        Interim<br />Leadership Practice Areas
                      </p>
                      <div className="h-[2px] bg-[#f05e00]"></div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 lg:space-y-6 text-left max-w-xl mt-6 lg:mt-6">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      We embed in the trenches with leaders to achieve specific, pragmatic goals quickly.
                    </p>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Our interim leadership services are informed by decades of combined experience; our entire team has served as director, VP, and C-level executives in house.
                    </p>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed hidden lg:block">
                      We modernize core business operations through process redesign, data integration, post-merger integration, and performance governance to scale cross-functional execution at speed and quality.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed order-2 lg:hidden -mt-4 sm:-mt-5">
                  We modernize core business operations through process redesign, data integration, post-merger integration, and performance governance to scale cross-functional execution at speed and quality.
                </p>

                <div className="flywheel-hero__media relative order-3 lg:order-1 mt-6 lg:mt-0">
                  <img
                    className="flywheel-hero__img opacity-100"
                    style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}
                    src={`${import.meta.env.BASE_URL}final_new_wave_flywheel.pdf.png`}
                    alt="New Wave Flywheel"
                  />
            <div
              className="flywheel-overlay flywheel-overlay--gtm opacity-0"
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
              className="flywheel-overlay flywheel-overlay--cost opacity-0"
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
              className="flywheel-overlay flywheel-overlay--ops opacity-0"
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
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] flex justify-center lg:translate-y-[calc(15%+144px)]">
          <img
            src={`${import.meta.env.BASE_URL}wave_graphic_our_services.svg`}
            alt=""
            className="block w-full h-auto max-w-[1600px] mx-auto"
          />
        </div>
      </div>

      <div className="bg-gray-50 pt-5 sm:pt-6 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 w-full">
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
