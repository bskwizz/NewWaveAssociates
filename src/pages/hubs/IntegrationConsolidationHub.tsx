interface IntegrationConsolidationHubProps {
  onNavigate: (page: string) => void;
}

export default function IntegrationConsolidationHub({ onNavigate }: IntegrationConsolidationHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero">
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · Integration & Consolidation
          </div>
          <h1>Integration & Consolidation Case Studies</h1>
          <p>
            IMOs, one-platform operating models, and synergy capture — harmonizing culture, process, and technology to realize deal value post-merger.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <div className="cs-card__img" style={{ background: '#e9f4fa' }}></div>
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Post-Merger Integration</p>
            <h3 className="cs-card__title">Platform Consolidation for Tech Acquisition</h3>
            <p className="cs-card__text">Built integration management office to synchronize systems and capture synergy value while maintaining business continuity.</p>
            <p className="cs-card__meta">Outcome: faster synergy realization, unified enterprise visibility.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-merger'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
