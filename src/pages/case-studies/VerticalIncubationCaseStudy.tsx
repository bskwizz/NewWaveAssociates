import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface VerticalIncubationCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function VerticalIncubationCaseStudy({ onNavigate }: VerticalIncubationCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Go-to-Market & Growth Optimization",
        page: "hub-gtm-growth"
      }}
      title="Vertical Incubation & Expansion for $4B SaaS"
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop"
      executiveSummary="Growth plateaued in core segments. New Wave introduced a vertical Go-to-Market framework linking product, marketing, and sales with segment-specific plays that drove incremental ARR and margin expansion."
      opportunity={{
        content: `
          <ul>
            <li>Generic messaging and limited industry differentiation</li>
            <li>No repeatable vertical sales framework</li>
            <li>Weak feedback loop between product and field teams</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Developed five vertical ICP playbooks and aligned sales assets</li>
            <li>Enabled partner co-marketing and performance tracking</li>
            <li>Integrated adoption and NPS metrics into rev dashboards</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>$25M incremental ARR</li>
            <li>Win rate ↑ 14 pts | NPS ↑ 37%</li>
            <li>3-year ROI ≈ 4×</li>
          </ul>
        `
      }}
      authorBio="Jason Lee, Founding Partner at New Wave Associates, specializes in go-to-market optimization and revenue operations transformation for growth-stage companies."
      ctaText="Ready to expand into new verticals? Let's discuss your market opportunities."
    />
  );
}
