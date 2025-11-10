interface TransformationOfficeHubProps {
  onNavigate: (page: string) => void;
}

export default function TransformationOfficeHub({ onNavigate }: TransformationOfficeHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero">
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · Transformation Office
          </div>
          <h1>Transformation Office Case Studies</h1>
          <p>
            Impact stories from PMO/IMO builds and turnarounds — unified governance, portfolio visibility,
            and predictable delivery that reduces risk and accelerates time-to-value.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <div className="cs-card__img" style={{ background: '#e9f4fa' }}></div>
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">PMO / Governance</p>
            <h3 className="cs-card__title">PMO Build-Out for Healthcare Platform</h3>
            <p className="cs-card__text">Designed a unified governance engine, portfolio dashboards, and cadence that cut noise and improved executive visibility within 60 days.</p>
            <p className="cs-card__meta">Outcome: predictable delivery, visible burn-down of risk.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-pmo'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
