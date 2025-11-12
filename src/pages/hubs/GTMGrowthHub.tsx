interface GTMGrowthHubProps {
  onNavigate: (page: string) => void;
}

export default function GTMGrowthHub({ onNavigate }: GTMGrowthHubProps) {
  return (
    <div className="pt-32">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <button onClick={() => onNavigate('capabilities')} className="hover:underline cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit">Services</button> · Go-to-Market & Growth Optimization
          </div>
          <h1>Go-to-Market & Growth Optimization Case Studies</h1>
          <p>
            Revenue architecture, demand activation, and conversion velocity—aligned to ICP, segment clarity, and margin discipline.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop" alt="Pricing & Packaging" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Pricing & Packaging</p>
            <h3 className="cs-card__title">Pricing & Packaging Transformation for $150M SaaS</h3>
            <p className="cs-card__text">Rebuilt packaging, pricing guardrails, and Deal Desk to align value with margin discipline.</p>
            <p className="cs-card__meta">Outcome: +20% ASP, −10% churn, faster approvals with less discount variance.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/gtm-pricing-packaging'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop" alt="GTM Architecture" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Go-to-Market Architecture</p>
            <h3 className="cs-card__title">Allbound Go-to-Market Model for $150M SaaS</h3>
            <p className="cs-card__text">Unified inbound/outbound/partner motions with a single customer-journey model and RevOps cadence.</p>
            <p className="cs-card__meta">Outcome: +10% ARR YoY, −20% CAC, faster cycle times.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/gtm-allbound-model'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop" alt="Vertical GTM" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Vertical Go-to-Market</p>
            <h3 className="cs-card__title">Vertical Incubation & Expansion for $4B SaaS</h3>
            <p className="cs-card__text">Built a vertical incubation framework and launched five industry plays with product + field alignment.</p>
            <p className="cs-card__meta">Outcome: +$25M ARR, faster cycles, tighter discount discipline.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/gtm-vertical-incubation'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop" alt="Revenue Integrity" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Revenue Integrity</p>
            <h3 className="cs-card__title">Revenue Visibility & Leakage Mitigation for $1B MSP</h3>
            <p className="cs-card__text">Standardized item master, unified reporting, and minimum-margin governance to stop silent leakage.</p>
            <p className="cs-card__meta">Outcome: ~$3M leakage recovered, +$500k EBITDA year 1, 6–10 FTE overhead saved.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/gtm-revenue-visibility'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
