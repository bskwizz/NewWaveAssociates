interface SGAOptimizationHubProps {
  onNavigate: (page: string) => void;
}

export default function SGAOptimizationHub({ onNavigate }: SGAOptimizationHubProps) {
  return (
    <div className="pt-32">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <button onClick={() => onNavigate('case-studies')} className="hover:underline cursor-pointer bg-transparent border-none px-4 py-2 -mx-4 -my-2 font-inherit text-inherit rounded hover:bg-gray-100/50 transition-colors">Case Studies</button> · SG&A Cost Optimization
          </div>
          <h1>SG&A Cost Optimization Case Studies</h1>
          <p>
            Shared services, zero-based design, and workflow re-engineering to simplify support functions and free cash for growth.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop" alt="SG&A Optimization" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">SG&A Optimization</p>
            <h3 className="cs-card__title">Sub-Contracting Takeout & Capture</h3>
            <p className="cs-card__text">Internalized subcontracted delivery and established governance to sustain cost savings.</p>
            <p className="cs-card__meta">Outcome: $12M+ annual savings | 25% utilization lift | 8 pt margin gain</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/sga-subcontracting-capture'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop" alt="Payment Optimization" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Payment Optimization</p>
            <h3 className="cs-card__title">Virtual Card Implementation & Rebate Program</h3>
            <p className="cs-card__text">Implemented a virtual-card program to capture rebates and streamline AP processing.</p>
            <p className="cs-card__meta">Outcome: $4.5M annual rebate value | 35% cycle-time reduction | Working-capital gain</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/sga-virtual-card'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
