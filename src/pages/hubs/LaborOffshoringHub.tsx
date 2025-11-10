interface LaborOffshoringHubProps {
  onNavigate: (page: string) => void;
}

export default function LaborOffshoringHub({ onNavigate }: LaborOffshoringHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?global,team,operations')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · Labor Strategy & Offshoring
          </div>
          <h1>Labor Strategy & Offshoring Case Studies</h1>
          <p>
            Hybrid operating models combining near-shore, off-shore, and digital labor—built to expand capacity and reduce cost without sacrificing quality.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?support,operations,service" alt="Global delivery model for support functions" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Global Delivery</p>
            <h3 className="cs-card__title">Global Delivery for Support Functions</h3>
            <p className="cs-card__text">Shifted tier-1/2 work to blended teams with quality SLAs and clear playbooks.</p>
            <p className="cs-card__meta">Outcome: 30–40% labor efficiency gain.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-labor'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?vendor,ecosystem,contract" alt="Vendor ecosystem and performance framework" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Vendor Model</p>
            <h3 className="cs-card__title">Vendor Ecosystem & Performance Framework</h3>
            <p className="cs-card__text">Rationalized suppliers; built scorecards, QBRs, and outcome-based contracts.</p>
            <p className="cs-card__meta">Outcome: quality up, TCO down.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-labor'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?automation,robot,process" alt="Digital labor and automation uplift" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Digital Labor</p>
            <h3 className="cs-card__title">Digital Labor Uplift</h3>
            <p className="cs-card__text">Introduced bot-driven workflows and re-leveled roles to focus on expert work.</p>
            <p className="cs-card__meta">Outcome: cycle-time compression and accuracy.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-labor'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
