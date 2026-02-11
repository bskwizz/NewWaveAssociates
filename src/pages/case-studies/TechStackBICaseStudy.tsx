import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface TechStackBICaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function TechStackBICaseStudy({ onNavigate }: TechStackBICaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Integration & Consolidation",
        page: "hub-integration-consolidation"
      }}
      title="Tech Stack Consolidation & BI Foundation"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
      executiveSummary="A rapidly scaling enterprise needed to unify its fragmented technology stack and analytics foundation. New Wave Associates designed and executed a tech stack consolidation roadmap, integrating critical systems and establishing a BI framework for decision-ready insights."
      opportunity={{
        content: `
          <ul>
            <li>Multiple redundant systems with overlapping functionality</li>
            <li>No single source of truth for operational and financial data</li>
            <li>Reporting delays and inconsistent KPIs across business units</li>
            <li>High technology spend and underutilized licenses</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Conducted enterprise-wide application inventory and rationalization</li>
            <li>Defined future-state architecture integrating key platforms</li>
            <li>Built BI layer for consistent KPI reporting and drill-down analytics</li>
            <li>Created governance playbooks for new tool adoption and decommissioning</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>Reduced application footprint by 40%</li>
            <li>Improved reporting latency from days to hours</li>
            <li>Consolidated data pipelines for unified insight delivery</li>
            <li>Achieved measurable savings through software decommissioning</li>
          </ul>
        `
      }}
      authorBio="Jason Lee, Managing Partner at New Wave Associates, specializes in technology rationalization and business intelligence transformation."
      ctaText="Ready to consolidate your tech stack? Let's discuss your modernization opportunities."
    />
  );
}
