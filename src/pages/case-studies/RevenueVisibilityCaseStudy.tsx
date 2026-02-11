import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface RevenueVisibilityCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function RevenueVisibilityCaseStudy({ onNavigate }: RevenueVisibilityCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Go-to-Market & Growth Optimization",
        page: "hub-gtm-growth"
      }}
      title="Revenue Visibility & Leakage Mitigation for $1B MSP"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop"
      executiveSummary="Inconsistent reporting and margin discipline led to revenue leakage and mis-priced contracts. New Wave standardized financial data structures and instituted governance to restore margin clarity and recover lost value."
      opportunity={{
        content: `
          <ul>
            <li>Fragmented systems and inconsistent GL mappings</li>
            <li>Legacy contracts under water with no margin thresholds</li>
            <li>Lack of consolidated ARR and profitability visibility</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Standardized item master and pricing discipline across entities</li>
            <li>Built margin segmentation and cost-to-serve analytics</li>
            <li>Implemented executive dashboards and forecast governance</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>~$3M annual leakage mitigated</li>
            <li>EBITDA ↑ $0.5M in Year 1</li>
            <li>6–10 FTE efficiency gain</li>
            <li>3-year ROI 350%–500%</li>
          </ul>
        `
      }}
      authorBio="Jason Lee, Founding Partner at New Wave Associates, specializes in go-to-market optimization and revenue operations transformation for growth-stage companies."
      ctaText="Want to stop revenue leakage? Let's discuss your operational opportunities."
    />
  );
}
