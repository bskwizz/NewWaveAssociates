interface GTMGrowthHubProps {
  onNavigate: (page: string) => void;
}

export default function GTMGrowthHub({ onNavigate }: GTMGrowthHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('capabilities'); }}>Capabilities</a> · GTM & Growth Optimization
          </div>
          <h1>GTM & Growth Optimization Case Studies</h1>
          <p>
            Revenue architecture, demand activation, and conversion velocity—aligned to ICP, segment clarity, and margin discipline.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop" alt="GTM redesign for B2B services" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">ICP & Pipeline</p>
            <h3 className="cs-card__title">GTM Redesign for a B2B Services Firm</h3>
            <p className="cs-card__text">Segmented ICPs, rebuilt value props, and re-sequenced funnel to lift qualified pipeline.</p>
            <p className="cs-card__meta">Outcome: +28% SQLs, higher win rate.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-gtm'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop" alt="Pricing normalization and channel mix optimization" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Pricing & Channels</p>
            <h3 className="cs-card__title">Pricing Normalization & Channel Mix</h3>
            <p className="cs-card__text">Instituted pricing guardrails and channel strategy tied to margin thresholds.</p>
            <p className="cs-card__meta">Outcome: ARR uplift with disciplined CAC.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-pricing'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop" alt="Campaign velocity and orchestration" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Demand Velocity</p>
            <h3 className="cs-card__title">Campaign Velocity & Orchestration</h3>
            <p className="cs-card__text">Introduced agile cadence and channel-mix optimization for consistent demand generation.</p>
            <p className="cs-card__meta">Outcome: stable MQL flow, faster cycle time.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-gtm'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop" alt="Lead-to-cash process engineering" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">RevOps</p>
            <h3 className="cs-card__title">Lead-to-Cash Process Engineering</h3>
            <p className="cs-card__text">Rewired L2C workflows to reduce friction across Marketing, Sales, and Finance.</p>
            <p className="cs-card__meta">Outcome: higher conversion, cleaner data.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-gtm'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
