import ListingPageLayout from '../../components/ListingPageLayout';

interface LaborOffshoringHubProps {
  onNavigate: (page: string) => void;
}

export default function LaborOffshoringHub({ onNavigate }: LaborOffshoringHubProps) {
  return (
    <ListingPageLayout
      onNavigate={onNavigate}
      categoryLabel="Case Studies"
      title="Labor Strategy & Offshoring"
      subtitle="Hybrid operating models combining near-shore, off-shore, and digital labor—built to expand capacity and reduce cost without sacrificing quality."
    >
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
    </ListingPageLayout>
  );
}
