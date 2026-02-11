import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface MultisiteSystemIntegrationCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function MultisiteSystemIntegrationCaseStudy({ onNavigate }: MultisiteSystemIntegrationCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Integration & Consolidation",
        page: "hub-integration-consolidation"
      }}
      title="Multi-Site System Integration"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop"
      executiveSummary="A multi-site organization faced inconsistent systems, data fragmentation, and siloed processes following a series of mergers. New Wave Associates designed and executed a system integration strategy that harmonized core applications, aligned data models, and improved operational continuity across the enterprise."
      opportunity={{
        content: `
          <ul>
            <li>Multiple, disconnected systems across clinical, billing, and operations functions</li>
            <li>Redundant workflows leading to data inaccuracy and rework</li>
            <li>Leadership lacked visibility into enterprise-wide performance</li>
            <li>Integration delays created risk for ongoing transformation efforts</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Developed an enterprise integration roadmap with phased system consolidation</li>
            <li>Standardized master data, security protocols, and reporting hierarchies</li>
            <li>Facilitated API-based connectivity between financial and operational systems</li>
            <li>Stood up centralized governance for change control and issue resolution</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>Improved data consistency and reporting speed by 60%</li>
            <li>Consolidated 9 core systems into 3 unified platforms</li>
            <li>Enhanced continuity for daily operations with zero downtime at go-live</li>
            <li>Enabled leadership to track real-time operational performance across all sites</li>
          </ul>
        `
      }}
      authorBio="Hunter New, Managing Partner at New Wave Associates, specializes in system integration and technology consolidation for multi-site enterprises."
      ctaText="Ready to consolidate your systems? Let's discuss your integration opportunities."
    />
  );
}
