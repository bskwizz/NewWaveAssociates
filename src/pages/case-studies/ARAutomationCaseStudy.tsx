import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface ARAutomationCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function ARAutomationCaseStudy({ onNavigate }: ARAutomationCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to AI & Intelligent Automation",
        page: "hub-ai-automation"
      }}
      title="AR Automation for a $1B Tech Reseller"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop"
      executiveSummary="Manual receivables processes limited visibility, slowed collections, and extended DSO. New Wave implemented an AI-enabled AR automation solution with prioritized outreach, automated dunning, and streamlined cash application, improving liquidity and reducing working-capital drag."
      opportunity={{
        content: `
          <ul>
            <li>Manual collections and fragmented dispute management</li>
            <li>Long DSO and high cost-to-collect</li>
            <li>Lack of credit visibility and forecasting</li>
            <li>Inefficient reconciliation across entities</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Deployed intelligent collections prioritization and automated reminders</li>
            <li>Centralized dispute tracking with real-time collaboration</li>
            <li>Automated cash application through remittance matching</li>
            <li>Integrated credit-risk analytics and performance reporting</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>DSO reduced 5–15 days</li>
            <li>Cost-to-collect lowered 40%–60%</li>
            <li>FTE efficiency ≈ 50% gain</li>
            <li>Payback 6–9 months | 3-year ROI 300%–500%</li>
          </ul>
        `
      }}
      authorBio="Craig Keller, Founding Partner at New Wave Associates, specializes in finance automation and digital transformation for middle-market companies."
      ctaText="Ready to accelerate your collections? Let's discuss how to optimize your AR."
    />
  );
}
