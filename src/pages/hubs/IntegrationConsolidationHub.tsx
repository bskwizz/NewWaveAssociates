interface IntegrationConsolidationHubProps {
  onNavigate: (page: string) => void;
}

export default function IntegrationConsolidationHub({ onNavigate }: IntegrationConsolidationHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('capabilities'); }}>Capabilities</a> · Integration & Consolidation
          </div>
          <h1>Integration & Consolidation Case Studies</h1>
          <p>
            IMOs, one-platform operating models, and synergy capture—from Day-1 readiness to Year-1 value realization.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop" alt="Integration Management Office for platform roll-up" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">IMO / Synergies</p>
            <h3 className="cs-card__title">IMO for a Multi-Site Platform Roll-Up</h3>
            <p className="cs-card__text">Built Day-100 blueprint, synergy tracking, and cross-functional playbooks.</p>
            <p className="cs-card__meta">Outcome: accelerated synergy realization.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-merger'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop" alt="Product catalog harmonization" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Catalog & SKUs</p>
            <h3 className="cs-card__title">Product Catalog Harmonization</h3>
            <p className="cs-card__text">Standardized SKUs and pricing across acquired entities to enable unified reporting.</p>
            <p className="cs-card__meta">Outcome: margin clarity and quoting speed.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-merger'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=900&fit=crop" alt="Financial systems consolidation" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Finance Ops</p>
            <h3 className="cs-card__title">Financial Systems Consolidation</h3>
            <p className="cs-card__text">Migrated disparate GLs into a controlled model with common COA and close cadence.</p>
            <p className="cs-card__meta">Outcome: one source of truth.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-merger'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop" alt="Unified go-to-market motion post-merger" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">GTM Unification</p>
            <h3 className="cs-card__title">Unified GTM Motion Post-Merger</h3>
            <p className="cs-card__text">Aligned territories, comp plans, and handoffs across Sales, CS, and Marketing.</p>
            <p className="cs-card__meta">Outcome: higher conversion and retention.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-merger'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&h=900&fit=crop" alt="Operational continuity during consolidation" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Continuity</p>
            <h3 className="cs-card__title">Operational Continuity Through Consolidation</h3>
            <p className="cs-card__text">Playbooks for service transitions, comms, and risk burn-down across BUs.</p>
            <p className="cs-card__meta">Outcome: zero disruption to customers.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-operating-model'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
