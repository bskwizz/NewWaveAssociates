// Shared capabilities data — single source of truth for the six core offerings.
// Used by the /case-studies listing (CapabilitiesPage) and the homepage
// "What We Do" grid (HomePage). `hubRoute` is the react-router path key for the
// matching hub page (e.g. "hub-gtm-growth" -> /hub-gtm-growth).

export interface Capability {
  id: string;
  title: string;
  points: string[];
  outcome: string;
  hubRoute: string;
}

export const capabilities: Capability[] = [
  {
    id: 'cap-transformation-office',
    title: 'Project Management Office',
    points: [
      'Establish a unified governance engine that aligns strategy, funding, and delivery across functions.',
      'Implement portfolio dashboards and KPI frameworks that convert project data into executive visibility.',
      'Standardize tools, templates, and cadence to create a predictable delivery rhythm and stronger accountability.',
    ],
    outcome: 'Faster decision-making, reduced execution risk, and sustained delivery predictability across enterprise initiatives.',
    hubRoute: 'hub-transformation-office',
  },
  {
    id: 'cap-gtm-growth',
    title: 'Go-to-Market & Growth Optimization',
    points: [
      'Redesign commercial architecture around Perfect-Customer-Profile, segment clarity, and measurable revenue pathways.',
      'Activate demand through channel-mix optimization, pricing discipline, and campaign velocity modeling.',
      'Embed an agile Go-to-Market operating rhythm that unites marketing, sales, and customer success.',
    ],
    outcome: 'Accelerated pipeline velocity, higher conversion rates, and sustained top-line growth.',
    hubRoute: 'hub-gtm-growth',
  },
  {
    id: 'cap-integration-consolidation',
    title: 'Integration & Consolidation',
    points: [
      'Build integration management offices (IMOs) that synchronize culture, process, and technology post-deal.',
      'Harmonize product catalogs, financial systems, and go-to-market motions to capture synergy value.',
      'Execute structured day-100, day-200, and year-one playbooks to maintain business continuity.',
    ],
    outcome: 'Faster synergy realization, unified enterprise visibility, and minimal disruption during transition.',
    hubRoute: 'hub-integration-consolidation',
  },
  {
    id: 'cap-labor-offshoring',
    title: 'Labor Strategy & Offshoring',
    points: [
      'Evaluate current org design to identify functions suitable for global delivery or automation.',
      'Establish hybrid operating models combining near-shore, offshore, and digital labor.',
      'Create performance-based vendor frameworks that preserve quality while lowering total cost.',
    ],
    outcome: 'Expanded capacity, 20–40% labor-efficiency gains, and resilient delivery coverage across time zones.',
    hubRoute: 'hub-labor-offshoring',
  },
  {
    id: 'cap-sga-optimization',
    title: 'SG&A Cost Optimization',
    points: [
      'Diagnose enterprise support-function cost structures against benchmarks and strategic intent.',
      'Consolidate duplicative functions and deploy shared-service or CoE models where scale exists.',
      'Re-engineer high-cost workflows using automation and zero-based design.',
    ],
    outcome: 'Reduced run-rate spend, leaner support operations, and liberated capital for reinvestment in growth.',
    hubRoute: 'hub-sga-optimization',
  },
  {
    id: 'cap-ai-automation',
    title: 'AI & Intelligent Automation',
    points: [
      'Identify automation opportunities across the enterprise using data-driven maturity assessments.',
      'Deploy AI-enabled workflows that eliminate manual friction and enhance decision accuracy.',
      'Build automation governance and performance dashboards to sustain adoption.',
    ],
    outcome: '10× process speed, measurable error reduction, and scalable intelligence embedded in daily operations.',
    hubRoute: 'hub-ai-automation',
  },
];
