import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface PartnershipTransitionCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function PartnershipTransitionCaseStudy({ onNavigate }: PartnershipTransitionCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Integration & Consolidation",
        page: "hub-integration-consolidation"
      }}
      title="Partnership Launch & Transition"
      heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop"
      executiveSummary="A newly formed joint venture required rapid transition of people, processes, and assets to enable independent operation. New Wave Associates led the design and execution of a structured launch framework that stabilized service delivery while accelerating time-to-value."
      opportunity={{
        content: `
          <ul>
            <li>Fragmented asset inventory and lack of separation readiness</li>
            <li>Overlapping systems and dependencies between partner organizations</li>
            <li>Unclear ownership of in-flight initiatives and customer contracts</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Created a Transition Management Office (TMO) to govern the separation</li>
            <li>Designed a phased cutover plan addressing people, systems, and data</li>
            <li>Executed asset transfer and operational readiness testing in parallel</li>
            <li>Implemented communication and escalation channels to ensure continuity</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>Seamless transition with no service disruption</li>
            <li>100% of critical assets transferred within 90 days</li>
            <li>Accelerated operational independence and accountability</li>
            <li>Delivered measurable ROI through faster post-launch stabilization</li>
          </ul>
        `
      }}
      authorBio="Bryan Skwirut, Managing Partner at New Wave Associates, specializes in partnership transitions and complex organizational separations."
      ctaText="Planning a partnership transition? Let's discuss your integration strategy."
    />
  );
}
