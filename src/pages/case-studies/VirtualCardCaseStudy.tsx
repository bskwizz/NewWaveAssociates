import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface VirtualCardCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function VirtualCardCaseStudy({ onNavigate }: VirtualCardCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to SG&A Cost Optimization",
        page: "hub-sga-optimization"
      }}
      title="Virtual Card Implementation & Rebate Program"
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop"
      executiveSummary="Finance leadership sought to optimize payment processing costs and unlock rebate revenue through deployment of a virtual-card (VC) program. New Wave Associates led the end-to-end implementation — spanning bank partnership selection, procurement integration, vendor enablement, and change management — establishing a recurring rebate revenue stream and measurable working-capital improvement."
      opportunity={{
        content: `
          <ul>
            <li>Dispersed payment methods with no rebate capture or tracking</li>
            <li>Manual AP workflows and limited visibility into supplier adoption</li>
            <li>Opportunity to monetize card payments and improve cash management</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Evaluated multiple issuing banks and selected preferred VC partner</li>
            <li>Designed a phased rollout covering supplier segmentation, enrollment, and enablement</li>
            <li>Integrated VC payments into the ERP and procurement ecosystem</li>
            <li>Established KPIs for adoption, rebate yield, and cycle-time reduction</li>
            <li>Delivered executive dashboards to monitor supplier participation and realized value</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>Achieved $4.5M annual rebate value within first 12 months</li>
            <li>Reduced AP cycle time by 35% through automation and digital processing</li>
            <li>Improved working-capital position and supplier transparency</li>
            <li>Institutionalized VC program as enterprise standard for future acquisitions</li>
          </ul>
        `
      }}
      authorBio="Craig Keller, Managing Partner at New Wave Associates, specializes in finance transformation and payment optimization for middle-market companies."
      ctaText="Ready to unlock rebate value? Let's discuss virtual card implementation."
    />
  );
}
