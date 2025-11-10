interface SGAOptimizationHubProps {
  onNavigate: (page: string) => void;
}

export default function SGAOptimizationHub({ onNavigate }: SGAOptimizationHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero">
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · SG&A Cost Optimization
          </div>
          <h1>SG&A Cost Optimization Case Studies</h1>
          <p>
            Shared services, zero-based design, and workflow re-engineering — reducing run-rate spend while liberating capital for growth reinvestment.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <div className="cs-card__img" style={{ background: '#e9f4fa' }}></div>
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Cost Optimization</p>
            <h3 className="cs-card__title">SG&A Transformation for Enterprise Client</h3>
            <p className="cs-card__text">Diagnosed cost structures, consolidated duplicative functions, and re-engineered high-cost workflows using automation.</p>
            <p className="cs-card__meta">Outcome: 25% reduction in run-rate spend, leaner operations.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-sga'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
