import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface AllboundGTMCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function AllboundGTMCaseStudy({ onNavigate }: AllboundGTMCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Go-to-Market & Growth Optimization",
        page: "hub-gtm-growth"
      }}
      title="Allbound Go-to-Market Model for $150M SaaS"
      heroImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop"
      executiveSummary="Disjointed inbound, outbound, and partner motions created conversion friction. New Wave implemented an Allbound Go-to-Market model with unified journey stages, role clarity, and RevOps instrumentation."
      opportunity={{
        content: `
          <ul>
            <li>Redundant roles across sales and marketing</li>
            <li>Poor handoffs and limited visibility</li>
            <li>Disconnected data across systems</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Defined seven-stage customer journey from lead to expansion</li>
            <li>Standardized handoffs and SLAs across functions</li>
            <li>Integrated RevOps tools for attribution and forecasting</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>Sales cycle ↓ 18% | ARR ↑ 10% YoY</li>
            <li>CAC ↓ 20% | Sales productivity ↑ 15%</li>
            <li>Sustainable Go-to-Market architecture for scale</li>
          </ul>
        `
      }}
      authorBio="Jason Lee, Managing Partner at New Wave Associates, specializes in go-to-market optimization and revenue operations transformation for growth-stage companies."
      ctaText="Ready to optimize your go-to-market strategy? Let's discuss your growth opportunities."
    />
  );
}
