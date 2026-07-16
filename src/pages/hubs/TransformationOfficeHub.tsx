import ListingPageLayout from '../../components/ListingPageLayout';

interface TransformationOfficeHubProps {
  onNavigate: (page: string) => void;
}

export default function TransformationOfficeHub({ onNavigate }: TransformationOfficeHubProps) {
  return (
    <ListingPageLayout
      onNavigate={onNavigate}
      categoryLabel="Results"
      ctaButtonText="Find a PMO Leader"
      title="Project Management Office Results"
      subtitle="Explore representative Project Management Office case studies demonstrating how experienced New Wave operators have stepped into critical leadership roles, established accountability, and delivered measurable business outcomes."
    >
      <section className="cs-grid">
        <article className="cs-card">
          <img className="cs-card__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop" alt="Project Management Office build-out for healthcare platform" />
          <div className="cs-card__body">
            <p className="cs-card__eyebrow">Project Management Office / Governance</p>
            <h3 className="cs-card__title">Project Management Office Build-Out for a Healthcare Platform</h3>
            <p className="cs-card__text">Stood up a unified governance engine, executive dashboards, and cadence within 60 days.</p>
            <p className="cs-card__meta">Outcome: predictable delivery, visible burn-down of risk.</p>
          </div>
          <a className="cs-card__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('case-study-pmo'); }}>View Case Study →</a>
        </article>
      </section>
    </ListingPageLayout>
  );
}
