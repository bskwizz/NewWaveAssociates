import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface PricingPackagingCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function PricingPackagingCaseStudy({ onNavigate }: PricingPackagingCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Go-to-Market & Growth Optimization",
        page: "hub-gtm-growth"
      }}
      title="Pricing & Packaging Transformation for $150M SaaS"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
      executiveSummary="Pricing practices were inconsistent and eroded margin. New Wave re-architected packaging, pricing, and governance—enabling disciplined approvals, better value alignment, and improved unit economics."
      opportunity={{
        content: `
          <ul>
            <li>Unstructured discounting and outdated tiers</li>
            <li>No Deal Desk or pricing guardrails</li>
            <li>Limited visibility into ASP and renewal trends</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Redesigned pricing architecture and tiering model</li>
            <li>Established Deal Desk and approval matrix with data-driven playbooks</li>
            <li>Instrumented reporting on ASP, renewals, and margins</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>ASP ↑ 20% | Churn ↓ 10% | Gross margin ↑ 4 pts</li>
            <li>Approval time ↓ 35%</li>
            <li>3-year ROI > 300% | Incremental ARR +$5M YoY</li>
          </ul>
        `
      }}
      authorBio="Jason Lee, Founding Partner at New Wave Associates, specializes in go-to-market optimization and revenue operations transformation for growth-stage companies."
      ctaText="Ready to optimize your pricing strategy? Let's discuss your growth opportunities."
    />
  );
}
