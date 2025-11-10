interface GTMGrowthHubProps {
  onNavigate: (page: string) => void;
}

export default function GTMGrowthHub({ onNavigate }: GTMGrowthHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero">
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · GTM & Growth Optimization
          </div>
          <h1>GTM & Growth Optimization Case Studies</h1>
          <p>
            Revenue architecture, demand activation, and conversion velocity — building commercial engines that drive predictable, scalable growth.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <div className="cs-card__img" style={{ background: '#e9f4fa' }}></div>
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Revenue Growth</p>
            <h3 className="cs-card__title">GTM Transformation for SaaS Platform</h3>
            <p className="cs-card__text">Redesigned commercial architecture and activated demand channels to accelerate pipeline velocity and improve conversion rates.</p>
            <p className="cs-card__meta">Outcome: 40% increase in qualified pipeline, sustained growth trajectory.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-gtm'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
