interface TransformationOfficeHubProps {
  onNavigate: (page: string) => void;
}

export default function TransformationOfficeHub({ onNavigate }: TransformationOfficeHubProps) {
  return (
    <div className="pt-32">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <button onClick={() => onNavigate('capabilities')} className="hover:underline cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit">Services</button> · Transformation Office
          </div>
          <h1>Transformation Office Case Studies</h1>
          <p>
            Project Management Office builds and turnarounds: unified governance, portfolio visibility, and predictable delivery that reduces risk and accelerates time-to-value.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop" alt="Project Management Office build-out for healthcare platform" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Project Management Office / Governance</p>
            <h3 className="cs-card__title">Project Management Office Build-Out for a Healthcare Platform</h3>
            <p className="cs-card__text">Stood up a unified governance engine, executive dashboards, and cadence within 60 days.</p>
            <p className="cs-card__meta">Outcome: predictable delivery, visible burn-down of risk.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-pmo'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
