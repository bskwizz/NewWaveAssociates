interface AIAutomationHubProps {
  onNavigate: (page: string) => void;
}

export default function AIAutomationHub({ onNavigate }: AIAutomationHubProps) {
  return (
    <div className="pt-32">
      <section className="cs-hero has-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop')" }}>
        <div className="wrap">
          <div className="cs-breadcrumbs">
            <button onClick={() => onNavigate('capabilities')} className="hover:underline cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit">Services</button> · AI & Intelligent Automation
          </div>
          <h1>AI & Intelligent Automation Case Studies</h1>
          <p>
            AI-enabled workflows, adoption governance, and measurable cycle-time compression—automation that sticks.
          </p>
        </div>
      </section>

      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=900&fit=crop" alt="AP Automation" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">AP Automation</p>
            <h3 className="cs-card__title">AP Automation & Payments for a $1B Tech Reseller</h3>
            <p className="cs-card__text">Deployed an enterprise AP platform (OCR → match → approve → pay) with auditability and vendor self-service.</p>
            <p className="cs-card__meta">Outcome: Processing cost ↓ to $1–$2/invoice, ~65% FTE efficiency, 6–9 month payback.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/automation-ap-makeover'); }}>Read full case →</a>
        </article>

        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop" alt="AR Automation" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">AR Automation</p>
            <h3 className="cs-card__title">AR Automation for a $1B Tech Reseller</h3>
            <p className="cs-card__text">Prioritized collections, automated dunning, cash application, and dispute resolution with credit analytics.</p>
            <p className="cs-card__meta">Outcome: 40–60% cost-to-collect reduction, DSO ↓ 5–15 days, 6–9 month payback.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-studies/automation-ar-acceleration'); }}>Read full case →</a>
        </article>
      </section>
    </div>
  );
}
