import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface PMOCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function PMOCaseStudy({ onNavigate }: PMOCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Project Management Office",
        page: "hub-transformation-office"
      }}
      title="Project Management Office Build-Out for a Healthcare Platform"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
      executiveSummary="A technology SaaS company needed a standardized Project Management Office framework to ensure consistent delivery quality, predictable timelines, and cross-department coordination for enterprise-scale implementations, especially as they brought on their largest client (>500K ARR). The goal was to transform delivery from reactive firefighting to proactive execution with visibility and accountability."
      opportunity={{
        content: `
          <p>While revenue was strong, the leadership team recognized that their informal approach to managing initiatives was no longer sustainable.</p>
          <p>Key challenges included:</p>
          <ul>
            <li>No formal Project Management Office structure governing project delivery or customer communication</li>
            <li>Project plans tracked inconsistently across consultants, leading to scope drift and timeline slippage</li>
            <li>Technical resources lacked coordinated scheduling or accountability</li>
            <li>Leadership lacked visibility into project status, risk, and resource utilization</li>
            <li>Go-live dates often missed due to poor cross-functional alignment</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <p>New Wave Associates took a pragmatic, phased approach to building the Project Management Office capability:</p>
          <ul>
            <li>Designed and operationalized a full Project Management Office structure using a core delivery platform</li>
            <li>Built standardized project templates, milestone definitions, and communication cadences</li>
            <li>Created a resource bench of technical SMEs to support integrations (NetSuite, HubSpot, Avalara, etc)</li>
            <li>Established project governance including kickoff protocols, weekly stand-ups, risk logs, and executive steering cadence</li>
            <li>Defined UAT readiness gates and formal go-live checklists to ensure accountability and predictability</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <p>Within 3 months, the company had a fully functioning Project Management Office that transformed how they managed strategic initiatives:</p>
          <ul>
            <li>Established scalable delivery framework supporting enterprise client growth</li>
            <li>Enabled predictable, data-driven project execution for all implementations</li>
            <li>Strengthened cross-functional collaboration between PS, Integration, & CS</li>
            <li>Reduced delivery risk and enhanced customer retention & referenceability</li>
            <li>Formed the foundation for future automation and AI-driven delivery insights</li>
          </ul>
        `
      }}
      authorBio="Jason Lee, Founding Partner at New Wave Associates, specializes in PMO design and delivery excellence for SaaS and technology companies."
      ctaText="Need help establishing or optimizing your Project Management Office? Let's discuss your specific challenges."
    />
  );
}
