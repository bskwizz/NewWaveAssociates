// Single source of truth for the "Find the Right Leader" guided intake options.
// Reuses the six approved practice-area names from ./practiceAreas.
import {
  Package,
  Handshake,
  TrendingUp,
  Workflow,
  ClipboardList,
  GitMerge,
  type LucideIcon,
} from 'lucide-react';
import { type PracticeAreaName } from './practiceAreas';

export interface PracticeAreaCardData {
  name: PracticeAreaName;
  description: string;
  icon: LucideIcon;
}

// Step 1 - Leadership Practice Area (exact names + order).
export const PRACTICE_AREA_CARDS: PracticeAreaCardData[] = [
  {
    name: 'Procurement',
    description:
      'Executive procurement leadership, supplier strategy, cost management, and procurement capability.',
    icon: Package,
  },
  {
    name: 'Strategic Sourcing',
    description:
      'Category strategy, sourcing events, complex negotiations, vendor selection, and supplier performance.',
    icon: Handshake,
  },
  {
    name: 'Revenue Operations',
    description:
      'Forecasting, pipeline governance, CRM performance, pricing, sales operations, and commercial execution.',
    icon: TrendingUp,
  },
  {
    name: 'Transformation Office',
    description:
      'Transformation governance, portfolio prioritization, executive reporting, benefits realization, and enterprise change.',
    icon: Workflow,
  },
  {
    name: 'Project Management Office',
    description:
      'Portfolio governance, critical-program leadership, delivery predictability, risk management, and executive visibility.',
    icon: ClipboardList,
  },
  {
    name: 'M&A Integration',
    description:
      'Integration planning, Day One readiness, carve-outs, synergy realization, and post-close execution.',
    icon: GitMerge,
  },
];

// Step 2 - Company size.
export const COMPANY_SIZES = [
  'Fewer than 10',
  '10 to 50',
  '51 to 200',
  '201 to 1,000',
  '1,001 to 5,000',
  'More than 5,000',
  'I am not sure',
];

// Step 3 - Time commitment / engagement model.
export interface EngagementModel {
  name: string;
  description: string;
}
export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    name: 'Full-Time Interim Leadership',
    description:
      'A leader steps into a critical role with substantial or full-time capacity during a vacancy, transition, or urgent business need.',
  },
  {
    name: 'Fractional Leadership',
    description: 'Ongoing executive leadership on a part-time or defined-capacity basis.',
  },
  {
    name: 'Project-Based Leadership',
    description:
      'Accountable leadership for a defined initiative, transformation, integration, or business outcome.',
  },
  {
    name: 'Not Sure Yet',
    description: 'New Wave can help determine the most appropriate engagement structure.',
  },
];

// Step 5 - Desired start timing.
export const START_TIMINGS = [
  'Immediately',
  'Within 1 to 2 Weeks',
  'Within 30 Days',
  'More Than 30 Days From Now',
  'I Am Still Deciding',
];

// Step 4 - Skill taxonomy, keyed by practice area.
export const SKILLS_BY_PRACTICE_AREA: Record<PracticeAreaName, string[]> = {
  Procurement: [
    'Procurement Strategy',
    'Chief Procurement Officer Leadership',
    'Spend Visibility',
    'Cost Reduction',
    'Vendor Consolidation',
    'Contract Management',
    'Supplier Relationship Management',
    'Procurement Transformation',
    'Procurement Operating Model',
    'Procurement Organization Design',
    'Working Capital',
    'Procure-to-Pay',
  ],
  'Strategic Sourcing': [
    'Category Strategy',
    'Strategic Sourcing',
    'RFP Leadership',
    'Supplier Negotiation',
    'Vendor Selection',
    'Supplier Performance',
    'Contract Negotiation',
    'Direct Materials Sourcing',
    'Indirect Sourcing',
    'Technology Sourcing',
    'Professional Services Sourcing',
    'Sourcing Governance',
  ],
  'Revenue Operations': [
    'Revenue Operations',
    'Sales Operations',
    'Revenue Forecasting',
    'Pipeline Management',
    'CRM Optimization',
    'Pricing and Packaging',
    'Revenue Analytics',
    'Customer Retention',
    'Sales Process Design',
    'Marketing and Sales Alignment',
    'Customer Success Operations',
    'Revenue Leakage',
  ],
  'Transformation Office': [
    'Transformation Office Build-Out',
    'Enterprise Transformation',
    'Transformation Governance',
    'Portfolio Prioritization',
    'Executive Decision Cadence',
    'Benefits Realization',
    'Change Management',
    'Transformation Roadmap',
    'Stakeholder Alignment',
    'Transformation Reporting',
    'Risk Management',
    'Capability Building',
  ],
  'Project Management Office': [
    'PMO Build-Out',
    'Portfolio Management',
    'Program Management',
    'Project Governance',
    'Program Recovery',
    'Executive Reporting',
    'Delivery Methodology',
    'Resource Planning',
    'Risk and Dependency Management',
    'Project Prioritization',
    'Agile Delivery',
    'PMO Transformation',
  ],
  'M&A Integration': [
    'M&A Integration',
    'Integration Management Office',
    'Day One Readiness',
    'Integration Planning',
    'Synergy Realization',
    'Carve-Out Management',
    'Divestiture Management',
    'Stranded Cost Reduction',
    'Operating Model Integration',
    'Functional Integration',
    'Post-Close Governance',
    'Transition Services Agreements',
  ],
};
