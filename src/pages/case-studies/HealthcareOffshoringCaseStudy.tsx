import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface HealthcareOffshoringCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function HealthcareOffshoringCaseStudy({ onNavigate }: HealthcareOffshoringCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Labor Strategy & Offshoring",
        page: "hub-labor-offshoring"
      }}
      title="Offshore Model for Healthcare Operations"
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=900&fit=crop"
      executiveSummary="A national provider needed to reduce administrative cost and stabilize capacity. New Wave established a compliant captive BPO model—standing up facilities, technology, regulatory coverage, and recruiting—to centralize non-clinical operations and deliver $20M ARR savings while improving service delivery metrics."
      opportunity={{
        content: `
          <ul>
            <li>Above-peer operating expense driven by decentralized admin functions</li>
            <li>Limited shared-service centralization and inconsistent processes</li>
            <li>Pressure to create room for growth investments via operating model change</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Built a compliant captive BPO including facilities, tech stack, regulatory readiness, and recruiting</li>
            <li>Centralized non-clinical operations into a shared-services construct with performance governance</li>
            <li>Implemented reporting to track service metrics and value capture over time</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>$20M ARR savings with improved service delivery metrics</li>
            <li>Repeatable shared-services framework and governance cadence for scaling</li>
            <li>Increased transparency into cost-to-serve and throughput</li>
          </ul>
        `
      }}
      authorBio="Hunter New, Managing Partner at New Wave Associates, specializes in global delivery models and operational transformation for healthcare organizations."
      ctaText="Ready to scale with an offshore model? Let's discuss your cost reduction opportunities."
    />
  );
}
