import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface SubcontractingCaptureCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function SubcontractingCaptureCaseStudy({ onNavigate }: SubcontractingCaptureCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to SG&A Cost Optimization",
        page: "hub-sga-optimization"
      }}
      title="Sub-Contracting Takeout & Capture"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
      executiveSummary="A diversified services organization relied heavily on third-party subcontractors for delivery, driving inflated SG&A and eroding margin. New Wave Associates designed and executed a take-out and capture program to internalize high-value delivery work, renegotiate vendor relationships, and institute formal governance — producing multimillion-dollar recurring savings."
      opportunity={{
        content: `
          <ul>
            <li>More than 40% of total delivery costs tied to subcontracted resources</li>
            <li>Redundant scopes between internal and external teams</li>
            <li>Absence of vendor visibility, utilization tracking, or standardized agreements</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Conducted enterprise-wide subcontractor spend and utilization analysis</li>
            <li>Identified internalization opportunities based on complexity, criticality, and ROI</li>
            <li>Built transition plans and talent pipelines to backfill vendor capacity</li>
            <li>Established vendor scorecards, quarterly business reviews, and KPI governance</li>
            <li>Created an ongoing performance-management loop across SG&A functions</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>Annualized SG&A savings of $12M+ through vendor consolidation and insourcing</li>
            <li>Internal labor utilization up 25%, with margin per engagement up 8 points</li>
            <li>Framework institutionalized across all business units for recurring cost capture</li>
          </ul>
        `
      }}
      authorBio="Craig Keller, Managing Partner at New Wave Associates, specializes in SG&A optimization and operational efficiency for services organizations."
      ctaText="Ready to optimize your subcontractor spend? Let's discuss cost reduction opportunities."
    />
  );
}
