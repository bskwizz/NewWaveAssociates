interface SGAOptimizationHubProps {
  onNavigate: (page: string) => void;
}

export default function SGAOptimizationHub({ onNavigate }: SGAOptimizationHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?cost,efficiency,backoffice')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · SG&A Cost Optimization
          </div>
          <h1>SG&A Cost Optimization Case Studies</h1>
          <p>
            Shared services, zero-based design, and workflow re-engineering to simplify support functions and free cash for growth.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?office,shared,services" alt="Shared services realignment" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Shared Services</p>
            <h3 className="cs-card__title">Shared Services Realignment</h3>
            <p className="cs-card__text">Consolidated duplicative functions into a CoE model with tiered SLAs.</p>
            <p className="cs-card__meta">Outcome: run-rate reduction and clarity of ownership.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-sga'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?process,engineering,workflow" alt="Workflow re-engineering across back office" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Process Engineering</p>
            <h3 className="cs-card__title">End-to-End Workflow Re-Engineering</h3>
            <p className="cs-card__text">Mapped high-cost paths and redesigned handoffs with automation and rules.</p>
            <p className="cs-card__meta">Outcome: cost-to-serve compression.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-sga'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
