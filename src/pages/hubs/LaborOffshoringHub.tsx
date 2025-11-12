interface LaborOffshoringHubProps {
  onNavigate: (page: string) => void;
}

export default function LaborOffshoringHub({ onNavigate }: LaborOffshoringHubProps) {
  return (
    <div className="pt-32">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <button onClick={() => onNavigate('capabilities')} className="hover:underline cursor-pointer bg-transparent border-none px-4 py-2 -mx-4 -my-2 font-inherit text-inherit rounded hover:bg-gray-100/50 transition-colors">Services</button> · Labor Strategy & Offshoring
          </div>
          <h1>Labor Strategy & Offshoring Case Studies</h1>
          <p>
            Hybrid operating models combining near-shore, off-shore, and digital labor—built to expand capacity and reduce cost without sacrificing quality.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&h=900&fit=crop" alt="Labor Strategy" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Labor Strategy</p>
            <h3 className="cs-card__title">IT MSP Offshoring & Global Delivery</h3>
            <p className="cs-card__text">Designed a hybrid global delivery model to reduce cost and increase throughput for a multi-entity MSP.</p>
            <p className="cs-card__meta">Outcome: Unified operating model with $10M+ cost savings expected (program WIP).</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/labor-itmsp-offshoring'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=900&fit=crop" alt="Offshoring" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Offshoring</p>
            <h3 className="cs-card__title">Offshore Model for Healthcare Operations</h3>
            <p className="cs-card__text">Built a compliant captive BPO and centralized non-clinical operations to materially reduce cost-to-serve.</p>
            <p className="cs-card__meta">Outcome: $20M ARR savings through captive BPO model.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/labor-healthcare-offshoring'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop" alt="Organizational Review" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Organizational Review</p>
            <h3 className="cs-card__title">Enterprise Labor & Organizational Review</h3>
            <p className="cs-card__text">Assessed functional performance, span of control, and regional variance; delivered a cost takeout roadmap.</p>
            <p className="cs-card__meta">Outcome: Identified $150M+ in operational savings potential.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/labor-healthcare-review'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
