import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface AgreementsStandardizationCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function AgreementsStandardizationCaseStudy({ onNavigate }: AgreementsStandardizationCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Integration & Consolidation",
        page: "hub-integration-consolidation"
      }}
      title="Agreements Standardization"
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop"
      executiveSummary="The organization's fragmented contract management approach caused billing errors, misaligned renewals, and revenue leakage. New Wave Associates standardized agreement templates, approval processes, and data capture to create a unified contract framework that improved financial accuracy and customer trust."
      opportunity={{
        content: `
          <ul>
            <li>Inconsistent contract terms and structures across multiple business units</li>
            <li>Lack of centralized repository or version control</li>
            <li>Manual renewals and pricing discrepancies</li>
            <li>No linkage between agreement data and billing or CRM systems</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Built a standardized agreement library with defined templates and metadata</li>
            <li>Introduced a structured intake and approval process with digital workflows</li>
            <li>Integrated agreement data into CRM and billing systems for visibility</li>
            <li>Trained cross-functional teams on governance and contract lifecycle ownership</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>Eliminated duplicate and outdated agreement versions</li>
            <li>Reduced contract processing time by 50%</li>
            <li>Improved billing accuracy and revenue recognition</li>
            <li>Increased renewal predictability through automation and reporting</li>
          </ul>
        `
      }}
      authorBio="Bryan Skwirut, Founding Partner at New Wave Associates, specializes in contract management and revenue operations optimization."
      ctaText="Ready to standardize your agreements? Let's discuss your contract optimization opportunities."
    />
  );
}
