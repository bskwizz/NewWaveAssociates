interface TransformationOfficeHubProps {
  onNavigate: (page: string) => void;
}

export default function TransformationOfficeHub({ onNavigate }: TransformationOfficeHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?project,governance,meeting')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · Transformation Office
          </div>
          <h1>Transformation Office Case Studies</h1>
          <p>
            PMO/IMO builds and turnarounds: unified governance, portfolio visibility, and predictable delivery that reduces risk and accelerates time-to-value.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?dashboard,analytics,enterprise" alt="PMO build-out for healthcare platform" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">PMO / Governance</p>
            <h3 className="cs-card__title">PMO Build-Out for a Healthcare Platform</h3>
            <p className="cs-card__text">Stood up a unified governance engine, executive dashboards, and cadence within 60 days.</p>
            <p className="cs-card__meta">Outcome: predictable delivery, visible burn-down of risk.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-pmo'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
