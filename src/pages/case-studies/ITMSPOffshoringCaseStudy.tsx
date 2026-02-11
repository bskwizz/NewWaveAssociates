import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface ITMSPOffshoringCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function ITMSPOffshoringCaseStudy({ onNavigate }: ITMSPOffshoringCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Labor Strategy & Offshoring",
        page: "hub-labor-offshoring"
      }}
      title="IT MSP Offshoring & Global Delivery"
      heroImage="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&h=900&fit=crop"
      executiveSummary="A multi-entity managed services organization needed to lower delivery costs and scale consistently across operating centers. New Wave designed a hybrid global delivery model, harmonized processes, and established governance to unlock meaningful cost reduction and execution speed—grounded in a unified operating framework with $10M+ cost savings expected as the program progresses."
      opportunity={{
        content: `
          <ul>
            <li>Fragmented operating centers with redundant processes and tools</li>
            <li>Inconsistent performance reporting and accountability</li>
            <li>Elevated delivery costs and limited scalability across entities</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Designed a unified operating model integrating people, process, and systems across centers</li>
            <li>Implemented governance (cadence, dashboards, KPI/OKR alignment) to drive accountability and transparency</li>
            <li>Sequenced migrations to minimize disruption; standardized role definitions and handoffs</li>
            <li>Established a pathway for global labor mix (on/near/offshore) aligned to SLA tiers and data-security constraints</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>$10M+ cost savings expected as implementation completes (WIP)</li>
            <li>Reduced redundancy and improved cross-center consistency</li>
            <li>Stronger visibility to utilization, cycle times, and service quality via executive dashboards</li>
          </ul>
        `
      }}
      authorBio="Hunter New, Managing Partner at New Wave Associates, specializes in global delivery models and operational transformation for service organizations."
      ctaText="Ready to scale with a global delivery model? Let's discuss your opportunities."
    />
  );
}
