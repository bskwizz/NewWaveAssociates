// Per-route SEO metadata, keyed by react-router path (no trailing slash).
// Rendered centrally by <RouteSeo /> (see src/components/RouteSeo.tsx) so every
// page gets a unique <title> + meta description without editing each page.
//
// /insights/:slug is intentionally NOT listed here — InsightDetailPage renders
// its own <Seo> from the loaded article (title/excerpt).

export interface RouteMeta {
  title: string;
  description: string;
}

const BRAND = 'New Wave Associates';

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: `${BRAND} | Operational Transformation & Procurement Consulting`,
    description:
      'New Wave Associates brings operator-grade expertise in procurement, revenue operations, and transformation to help lower and middle market companies protect margins and grow.',
  },
  '/solutions': {
    title: `Leadership Solutions | ${BRAND}`,
    description:
      'Experienced fractional and interim executive leadership in procurement, sourcing, revenue operations, transformation, PMO, and M&A integration. Deeply vetted operators who step in and deliver measurable results.',
  },
  '/results': {
    title: `Results | ${BRAND}`,
    description:
      'Proven executive leadership outcomes: $60M+ in documented cost savings, 35+ M&A supported, and measurable results delivered through fractional, interim, and project-based leaders.',
  },
  '/about': {
    title: `About Us | ${BRAND}`,
    description:
      'Meet New Wave Associates — operators-turned-advisors who bring hands-on procurement, revenue operations, and transformation expertise to the lower and middle market.',
  },
  '/executive-network': {
    title: `Join the New Wave Executive Network | ${BRAND}`,
    description:
      "Join New Wave Associates' curated network of experienced fractional, interim, and project-based leaders across Procurement, Strategic Sourcing, Revenue Operations, Transformation Office, Project Management Office, and M&A Integration.",
  },
  '/insights': {
    title: `Insights | ${BRAND}`,
    description:
      'Articles and perspectives on operational rigor, procurement, revenue operations, AI, and transformation from the New Wave Associates team.',
  },
  '/contact': {
    title: `Contact Us | ${BRAND}`,
    description:
      'Get in touch with New Wave Associates to discuss procurement, revenue operations, and transformation challenges facing your business.',
  },
  '/privacy': {
    title: `Privacy Policy | ${BRAND}`,
    description: 'How New Wave Associates collects, uses, and protects your information.',
  },
  '/terms': {
    title: `Terms of Service | ${BRAND}`,
    description: 'The terms governing use of the New Wave Associates website.',
  },

  // Case studies (legacy paths)
  '/case-study-pmo': {
    title: `PMO & Transformation Office Case Study | ${BRAND}`,
    description:
      'How New Wave Associates stood up a program management office to drive transformation outcomes and accountability.',
  },
  '/case-study-operating-model': {
    title: `Operating Model Redesign Case Study | ${BRAND}`,
    description:
      'Redesigning an operating model to improve accountability, efficiency, and margin performance.',
  },
  '/case-study-pricing': {
    title: `Pricing Strategy Case Study | ${BRAND}`,
    description:
      'A pricing strategy engagement that recovered margin and improved revenue performance.',
  },
  '/case-study-merger': {
    title: `Merger Integration Case Study | ${BRAND}`,
    description:
      'Guiding a merger integration to capture synergies and reduce operational complexity.',
  },
  '/case-study-data': {
    title: `Data & Insights Case Study | ${BRAND}`,
    description:
      'Turning fragmented data into decision-ready insights that drive operational performance.',
  },
  '/case-study-platform': {
    title: `Platform Modernization Case Study | ${BRAND}`,
    description:
      'Modernizing core platforms to reduce technical debt and unlock operational efficiency.',
  },
  '/case-study-ai': {
    title: `AI Enablement Case Study | ${BRAND}`,
    description:
      'Deploying AI to automate work and accelerate decisions with operational rigor.',
  },
  '/case-study-gtm': {
    title: `Go-to-Market Strategy Case Study | ${BRAND}`,
    description:
      'A go-to-market transformation that improved revenue visibility and growth.',
  },
  '/case-study-labor': {
    title: `Labor Strategy Case Study | ${BRAND}`,
    description:
      'Rebalancing labor strategy and offshoring to reduce cost while protecting quality.',
  },
  '/case-study-sga': {
    title: `SG&A Optimization Case Study | ${BRAND}`,
    description:
      'Optimizing SG&A spend to protect margin without sacrificing capability.',
  },

  // Case studies (nested paths)
  '/case-studies/automation-ap-makeover': {
    title: `Accounts Payable Automation Case Study | ${BRAND}`,
    description:
      'An accounts payable makeover that automated invoice processing and reduced cost-to-serve.',
  },
  '/case-studies/automation-ar-acceleration': {
    title: `Accounts Receivable Acceleration Case Study | ${BRAND}`,
    description:
      'Accelerating accounts receivable to improve cash flow and reduce days sales outstanding.',
  },
  '/case-studies/gtm-pricing-packaging': {
    title: `Pricing & Packaging Case Study | ${BRAND}`,
    description:
      'Redesigning pricing and packaging to capture value and grow revenue.',
  },
  '/case-studies/gtm-allbound-model': {
    title: `Allbound GTM Model Case Study | ${BRAND}`,
    description:
      'Building an allbound go-to-market model that blends inbound and outbound for predictable growth.',
  },
  '/case-studies/gtm-vertical-incubation': {
    title: `Vertical Incubation Case Study | ${BRAND}`,
    description:
      'Incubating a new vertical go-to-market motion to open growth in an adjacent market.',
  },
  '/case-studies/gtm-revenue-visibility': {
    title: `Revenue Visibility Case Study | ${BRAND}`,
    description:
      'Establishing revenue visibility and forecasting discipline to support confident decisions.',
  },
  '/case-studies/integration-multisite-system': {
    title: `Multisite System Integration Case Study | ${BRAND}`,
    description:
      'Integrating systems across multiple sites to standardize operations and data.',
  },
  '/case-studies/integration-partnership-transition': {
    title: `Partnership Transition Case Study | ${BRAND}`,
    description:
      'Managing a partnership transition to protect continuity and capture value.',
  },
  '/case-studies/integration-agreements-standardization': {
    title: `Agreements Standardization Case Study | ${BRAND}`,
    description:
      'Standardizing agreements to reduce risk and simplify vendor management.',
  },
  '/case-studies/integration-catalog-rationalization': {
    title: `Catalog Rationalization Case Study | ${BRAND}`,
    description:
      'Rationalizing the product and vendor catalog to cut complexity and cost.',
  },
  '/case-studies/integration-techstack-bi': {
    title: `Tech Stack & BI Integration Case Study | ${BRAND}`,
    description:
      'Consolidating the tech stack and business intelligence for unified reporting.',
  },
  '/case-studies/labor-itmsp-offshoring': {
    title: `IT MSP Offshoring Case Study | ${BRAND}`,
    description:
      'Offshoring IT managed services to reduce cost while maintaining service quality.',
  },
  '/case-studies/labor-healthcare-offshoring': {
    title: `Healthcare Offshoring Case Study | ${BRAND}`,
    description:
      'A healthcare offshoring engagement that lowered cost and scaled capacity.',
  },
  '/case-studies/labor-healthcare-review': {
    title: `Healthcare Organization Review Case Study | ${BRAND}`,
    description:
      'An organization review that aligned healthcare labor structure with operational goals.',
  },
  '/case-studies/sga-subcontracting-capture': {
    title: `Subcontracting Capture Case Study | ${BRAND}`,
    description:
      'Capturing subcontracting spend to protect margin and improve control.',
  },
  '/case-studies/sga-virtual-card': {
    title: `Virtual Card Program Case Study | ${BRAND}`,
    description:
      'Launching a virtual card program to improve spend control and capture rebates.',
  },

  // Hubs
  '/hub-project-management-office': {
    title: `Project Management Office Case Studies | ${BRAND}`,
    description:
      'Representative Project Management Office case studies from New Wave Associates: experienced operators who stepped into leadership roles, established accountability, and delivered measurable business outcomes.',
  },
  '/hub-revenue-operations': {
    title: `Revenue Operations Case Studies | ${BRAND}`,
    description:
      'Representative Revenue Operations case studies from New Wave Associates: experienced operators who stepped into leadership roles, established accountability, and delivered measurable business outcomes.',
  },
  '/hub-ma-integration': {
    title: `M&A Integration Case Studies | ${BRAND}`,
    description:
      'Representative M&A Integration case studies from New Wave Associates: experienced operators who stepped into leadership roles, established accountability, and delivered measurable business outcomes.',
  },
  '/hub-strategic-sourcing': {
    title: `Strategic Sourcing Case Studies | ${BRAND}`,
    description:
      'Representative Strategic Sourcing case studies from New Wave Associates: experienced operators who stepped into leadership roles, established accountability, and delivered measurable business outcomes.',
  },
  '/hub-procurement': {
    title: `Procurement Case Studies | ${BRAND}`,
    description:
      'Representative Procurement case studies from New Wave Associates: experienced operators who stepped into leadership roles, established accountability, and delivered measurable business outcomes.',
  },
  '/hub-transformation-office': {
    title: `Transformation Office Case Studies | ${BRAND}`,
    description:
      'Representative Transformation Office case studies from New Wave Associates: experienced operators who stepped into leadership roles, established accountability, and delivered measurable business outcomes.',
  },
};

export const DEFAULT_META: RouteMeta = ROUTE_META['/'];
