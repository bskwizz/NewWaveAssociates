interface AIAutomationHubProps {
  onNavigate: (page: string) => void;
}

export default function AIAutomationHub({ onNavigate }: AIAutomationHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero">
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · AI & Intelligent Automation
          </div>
          <h1>AI & Intelligent Automation Case Studies</h1>
          <p>
            AI-enabled workflows, adoption governance, and measurable cycle-time compression — embedding scalable intelligence that drives 10× process speed improvements.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <div className="cs-card__img" style={{ background: '#e9f4fa' }}></div>
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Intelligent Automation</p>
            <h3 className="cs-card__title">AI Transformation for Insurance Provider</h3>
            <p className="cs-card__text">Identified automation opportunities, deployed AI-enabled workflows, and built governance frameworks to sustain adoption.</p>
            <p className="cs-card__meta">Outcome: 10× process speed, measurable error reduction.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-ai'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
