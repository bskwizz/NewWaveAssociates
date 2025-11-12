interface IntegrationConsolidationHubProps {
  onNavigate: (page: string) => void;
}

export default function IntegrationConsolidationHub({ onNavigate }: IntegrationConsolidationHubProps) {
  return (
    <div className="pt-32">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <button onClick={() => onNavigate('capabilities')} className="hover:underline cursor-pointer bg-transparent border-none px-4 py-2 -mx-4 -my-2 font-inherit text-inherit rounded hover:bg-gray-100/50 transition-colors">Services</button> · Integration & Consolidation
          </div>
          <h1>Integration & Consolidation Case Studies</h1>
          <p>
            IMOs, one-platform operating models, and synergy capture—from Day-1 readiness to Year-1 value realization.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop" alt="System Integration" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">System Integration</p>
            <h3 className="cs-card__title">Multi-Site System Integration</h3>
            <p className="cs-card__text">Consolidated systems and unified data models to enable cross-enterprise visibility.</p>
            <p className="cs-card__meta">Outcome: 60% improvement in data reliability, zero downtime during cutover.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/integration-multisite-system'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop" alt="Asset Transition" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Asset Transition</p>
            <h3 className="cs-card__title">Partnership Launch & Transition</h3>
            <p className="cs-card__text">Led a complex launch and asset transition with zero downtime and faster operational readiness.</p>
            <p className="cs-card__meta">Outcome: Complete transition in 90 days; accelerated ROI realization.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/integration-partnership-transition'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop" alt="Contract Governance" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Contract Governance</p>
            <h3 className="cs-card__title">Agreements Standardization</h3>
            <p className="cs-card__text">Standardized contract structure and workflows to improve billing accuracy and renewal visibility.</p>
            <p className="cs-card__meta">Outcome: 50% faster contract processing and improved revenue integrity.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/integration-agreements-standardization'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop" alt="Catalog Optimization" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Catalog Optimization</p>
            <h3 className="cs-card__title">Product Catalog Rationalization</h3>
            <p className="cs-card__text">Streamlined product catalog for consistent pricing and financial alignment.</p>
            <p className="cs-card__meta">Outcome: 60% SKU reduction and faster quoting accuracy.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/integration-catalog-rationalization'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop" alt="Technology Integration" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Technology Integration</p>
            <h3 className="cs-card__title">Tech Stack Consolidation & BI Foundation</h3>
            <p className="cs-card__text">Unified systems and BI frameworks to drive faster, data-informed decisions.</p>
            <p className="cs-card__meta">Outcome: 40% tech footprint reduction, reporting latency cut to hours.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/integration-techstack-bi'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
