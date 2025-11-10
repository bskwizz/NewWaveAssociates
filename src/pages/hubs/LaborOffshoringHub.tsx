interface LaborOffshoringHubProps {
  onNavigate: (page: string) => void;
}

export default function LaborOffshoringHub({ onNavigate }: LaborOffshoringHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero">
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · Labor Strategy & Offshoring
          </div>
          <h1>Labor Strategy & Offshoring Case Studies</h1>
          <p>
            Hybrid global delivery and digital labor at scale — expanding capacity while maintaining quality and driving 20-40% efficiency gains.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <div className="cs-card__img" style={{ background: '#e9f4fa' }}></div>
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Global Delivery</p>
            <h3 className="cs-card__title">Offshore Strategy for FinTech Platform</h3>
            <p className="cs-card__text">Established hybrid operating model combining near-shore and offshore delivery to expand capacity and reduce costs.</p>
            <p className="cs-card__meta">Outcome: 35% labor-efficiency gains, resilient 24/7 delivery coverage.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-labor'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
