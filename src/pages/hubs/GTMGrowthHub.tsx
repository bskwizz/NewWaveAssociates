interface GTMGrowthHubProps {
  onNavigate: (page: string) => void;
}

export default function GTMGrowthHub({ onNavigate }: GTMGrowthHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?growth,marketing,data')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · GTM & Growth Optimization
          </div>
          <h1>GTM & Growth Optimization Case Studies</h1>
          <p>
            Revenue architecture, demand activation, and conversion velocity—aligned to ICP, segment clarity, and margin discipline.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?b2b,sales,team" alt="GTM redesign for B2B services" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">ICP & Pipeline</p>
            <h3 className="cs-card__title">GTM Redesign for a B2B Services Firm</h3>
            <p className="cs-card__text">Segmented ICPs, rebuilt value props, and re-sequenced funnel to lift qualified pipeline.</p>
            <p className="cs-card__meta">Outcome: +28% SQLs, higher win rate.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-gtm'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?pricing,charts" alt="Pricing normalization and channel mix optimization" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Pricing & Channels</p>
            <h3 className="cs-card__title">Pricing Normalization & Channel Mix</h3>
            <p className="cs-card__text">Instituted pricing guardrails and channel strategy tied to margin thresholds.</p>
            <p className="cs-card__meta">Outcome: ARR uplift with disciplined CAC.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-pricing'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?campaign,marketing,analytics" alt="Campaign velocity and orchestration" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Demand Velocity</p>
            <h3 className="cs-card__title">Campaign Velocity & Orchestration</h3>
            <p className="cs-card__text">Introduced agile cadence and channel-mix optimization for consistent demand generation.</p>
            <p className="cs-card__meta">Outcome: stable MQL flow, faster cycle time.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-gtm'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?crm,salesforce,revops" alt="Lead-to-cash process engineering" />
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
