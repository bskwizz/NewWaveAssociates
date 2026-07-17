// Canonical company facts: single source of truth for the footer and any
// component that references company-level information.
//
// MAINTENANCE: The AI-readable resources in public/ are hand-maintained static
// files that mirror these facts. When anything below changes (routes, practice
// areas, brand statements, metrics, industries, contact info), also update:
//   - public/llms.txt
//   - public/llminfo.md
//   - public/faqsforllms.md
// Practice-area names, slugs, and hub routes live in ./practiceAreas.ts.

import {
  PRACTICE_AREAS,
  practiceAreaSlug,
  practiceAreaHubPath,
} from './practiceAreas';

export const COMPANY = {
  name: 'New Wave Associates',
  legalName: 'New Wave Associates LLC',
  shortName: 'New Wave',
  domain: 'https://www.newwaveassociates.com',
  email: 'hello@newwaveassociates.com',
  linkedin: 'https://www.linkedin.com/company/new-wave-associates/',
  copyrightYear: 2026,
  brandLine: 'Ready When You Are.',
  brandDescription: 'Move forward with experienced leadership.',
} as const;

export const BRAND_STATEMENTS = [
  'Executive Leadership. On Demand.',
  'Operators. Not Consultants.',
  'Results. Not Recommendations.',
  'We Own the Outcome.',
  'Ready When You Are.',
] as const;

// Internal react-router routes (client-side navigation).
export const ROUTES = {
  home: '/',
  solutions: '/solutions',
  results: '/results',
  about: '/about',
  // Keys keep the executiveNetwork name for internal stability; the public
  // path is now /leadership-network (old /executive-network paths redirect).
  executiveNetwork: '/leadership-network',
  executiveNetworkApply: '/leadership-network/apply',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const;

// Static, AI-readable resources served from public/ (plain <a>, not <Link>).
export const LLM_RESOURCES = {
  index: '/llms.txt', // Footer label: LLM Index
  info: '/llminfo.md', // Footer label: LLM Information
  faq: '/faqsforllms.md', // Footer label: LLM FAQ
} as const;

// Per-practice-area links: the Solutions capability section (anchor) and the
// dedicated case-study hub page.
export const PRACTICE_AREA_LINKS = PRACTICE_AREAS.map((name) => ({
  name,
  solutionsHref: `${ROUTES.solutions}#${practiceAreaSlug(name)}`,
  hubHref: practiceAreaHubPath(name),
}));
