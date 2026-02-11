import CaseStudyTemplate from '../../components/CaseStudyTemplate';

interface CatalogRationalizationCaseStudyProps {
  onNavigate: (page: string) => void;
}

export default function CatalogRationalizationCaseStudy({ onNavigate }: CatalogRationalizationCaseStudyProps) {
  return (
    <CaseStudyTemplate
      onNavigate={onNavigate}
      backLink={{
        text: "Back to Integration & Consolidation",
        page: "hub-integration-consolidation"
      }}
      title="Product Catalog Rationalization"
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop"
      executiveSummary="A global services provider faced SKU duplication, inconsistent pricing, and poor margin visibility across its catalog. New Wave Associates streamlined and standardized the product catalog to enable consistent quoting, cleaner reporting, and margin governance."
      opportunity={{
        content: `
          <ul>
            <li>Thousands of redundant SKUs across business units</li>
            <li>Inconsistent cost models and discount practices</li>
            <li>No unified catalog structure aligned to financial reporting</li>
            <li>Difficulty comparing product performance and profitability</li>
          </ul>
        `
      }}
      approach={{
        content: `
          <ul>
            <li>Consolidated catalog data across systems into a single master structure</li>
            <li>Aligned cost and revenue mapping to standard financial categories</li>
            <li>Simplified pricing tiers and eliminated redundant SKUs</li>
            <li>Embedded catalog governance to maintain structure post-launch</li>
          </ul>
        `
      }}
      outcome={{
        content: `
          <ul>
            <li>SKU count reduced by 60%</li>
            <li>Margin reporting standardized across all business units</li>
            <li>Accelerated quoting accuracy and speed by 40%</li>
            <li>Improved COGS-to-revenue visibility and decision-making</li>
          </ul>
        `
      }}
      authorBio="Bryan Skwirut, Managing Partner at New Wave Associates, specializes in catalog management and pricing optimization for technology distributors."
      ctaText="Ready to rationalize your product catalog? Let's discuss your simplification opportunities."
    />
  );
}
