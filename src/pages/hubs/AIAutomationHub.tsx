interface AIAutomationHubProps {
  onNavigate: (page: string) => void;
}

export default function AIAutomationHub({ onNavigate }: AIAutomationHubProps) {
  return (
    <div className="pt-16">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?ai,automation,intelligence')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies'); }}>Case Studies</a> · AI & Intelligent Automation
          </div>
          <h1>AI & Intelligent Automation Case Studies</h1>
          <p>
            AI-enabled workflows, adoption governance, and measurable cycle-time compression—automation that sticks.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?llm,nlp,classification" alt="AI-augmented operations" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">AI-Augmented Ops</p>
            <h3 className="cs-card__title">Cognitive Triage & Routing</h3>
            <p className="cs-card__text">Deployed LLM-driven classification and routing to eliminate manual queues.</p>
            <p className="cs-card__meta">Outcome: 10× speed, fewer errors.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-ai'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?robotics,process,automation" alt="Automation modernization" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Automation Stack</p>
            <h3 className="cs-card__title">RPA to Intelligent Automation Refresh</h3>
            <p className="cs-card__text">Modernized bot fleet, added governance, and instrumented performance dashboards.</p>
            <p className="cs-card__meta">Outcome: sustainable automation ROI.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-ai'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://source.unsplash.com/1600x900/?data,observability,monitoring" alt="Automation observability and governance" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Governance & Observability</p>
            <h3 className="cs-card__title">Automation Governance & Observability</h3>
            <p className="cs-card__text">Established adoption governance and metrics to track performance and reliability.</p>
            <p className="cs-card__meta">Outcome: resilient, scalable automation.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-ai'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
