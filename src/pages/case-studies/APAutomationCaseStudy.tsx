import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface APAutomationCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function APAutomationCaseStudy({ onNavigate }: APAutomationCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to AI & Intelligent Automation",
        page: "hub-ai-automation"
      }}
      title="AP Automation & Payments for a $1B Tech Reseller"
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=900&fit=crop"
      executiveSummary="Accounts payable relied on manual, error-prone workflows that slowed payment cycles and obscured cash visibility. New Wave deployed an enterprise-grade automation platform covering invoice ingestion, matching, approvals, and payments—reducing cost-per-invoice to near-world-class levels and delivering payback within nine months."
      opportunity={{
        content: `
          <ul>
            <li>Manual entry, inconsistent reconciliation, and limited auditability</li>
            <li>High processing cost and excessive headcount</li>
            <li>Limited cash forecasting accuracy and discount capture</li>
            <li>Frequent vendor inquiries and slow issue resolution</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Implemented end-to-end invoice automation (capture → match → approve → pay)</li>
            <li>Introduced vendor self-service portal and automated exception handling</li>
            <li>Embedded compliance, segregation of duties, and role-based approvals</li>
            <li>Delivered dashboards for visibility into cash flow and performance metrics</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>Processing cost reduced to ≈ $1–$2 per invoice</li>
            <li>Labor efficiency improved ≈ 65%</li>
            <li>Vendor satisfaction and forecasting accuracy significantly improved</li>
            <li>Payback 6–9 months | 3-year ROI 400%–600%</li>
          </ul>
        `
      }}
      authorBio="Craig Keller, Founding Partner at New Wave Associates, specializes in finance automation and digital transformation for middle-market companies."
      ctaText="Ready to automate your AP process? Let's discuss how to improve your efficiency."
    />
  );
}
