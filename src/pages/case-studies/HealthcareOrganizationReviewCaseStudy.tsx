import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface HealthcareOrganizationReviewCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function HealthcareOrganizationReviewCaseStudy({ onNavigate }: HealthcareOrganizationReviewCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Labor Strategy & Offshoring",
        page: "hub-labor-offshoring"
      }}
      title="Enterprise Labor & Organizational Review"
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop"
      executiveSummary="A national health plan required an enterprise labor and organizational review to realign cost structure to strategic priorities. New Wave benchmarked 22+ functional areas, analyzed productivity and span-of-control, and delivered a financially sequenced cost takeout roadmap—identifying $150M+ in operational savings potential."
      opportunity={{
        content: `
          <ul>
            <li>Unbalanced labor model and functional inefficiencies across regions</li>
            <li>Decentralized governance with limited standardization</li>
            <li>No unified baseline to compare productivity or cost-to-serve per function</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Conducted end-to-end organizational review with external benchmarking</li>
            <li>Assessed throughput, utilization, span-of-control, and function-level cost structures</li>
            <li>Built a prioritized cost takeout roadmap and implementation playbooks by function/region</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>$150M+ operational savings potential identified with sequenced plan to capture value</li>
            <li>10–15% EBITDA improvement potential with targeted initiatives</li>
            <li>Standardized KPIs and governance cadence to sustain performance</li>
          </ul>
        `
      }}
      authorBio="Hunter New, Founding Partner at New Wave Associates, specializes in organizational design and labor strategy for healthcare and service organizations."
      ctaText="Ready to optimize your organizational model? Let's discuss your cost reduction opportunities."
    />
  );
}
