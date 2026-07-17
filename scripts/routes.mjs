import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Single source of truth for the site's routes.
// Kept in sync by hand with the <Route> declarations in src/App.tsx.
// Consumed by both scripts/prerender.mjs and scripts/generate-sitemap.mjs.

export const STATIC_ROUTES = [
  // Main pages
  '/',
  '/solutions',
  '/results',
  '/about',
  '/leadership-network',
  '/leadership-network/apply',
  '/find-a-leader/new',
  '/insights',
  '/contact',
  '/privacy',
  '/terms',

  // Case studies (legacy paths)
  '/case-study-pmo',
  '/case-study-operating-model',
  '/case-study-pricing',
  '/case-study-merger',
  '/case-study-data',
  '/case-study-platform',
  '/case-study-ai',
  '/case-study-gtm',
  '/case-study-labor',
  '/case-study-sga',

  // Case studies (nested paths)
  '/case-studies/automation-ap-makeover',
  '/case-studies/automation-ar-acceleration',
  '/case-studies/gtm-pricing-packaging',
  '/case-studies/gtm-allbound-model',
  '/case-studies/gtm-vertical-incubation',
  '/case-studies/gtm-revenue-visibility',
  '/case-studies/integration-multisite-system',
  '/case-studies/integration-partnership-transition',
  '/case-studies/integration-agreements-standardization',
  '/case-studies/integration-catalog-rationalization',
  '/case-studies/integration-techstack-bi',
  '/case-studies/labor-itmsp-offshoring',
  '/case-studies/labor-healthcare-offshoring',
  '/case-studies/labor-healthcare-review',
  '/case-studies/sga-subcontracting-capture',
  '/case-studies/sga-virtual-card',

  // Hubs
  '/hub-project-management-office',
  '/hub-revenue-operations',
  '/hub-ma-integration',
  '/hub-strategic-sourcing',
  '/hub-procurement',
  '/hub-transformation-office',
];

// Read insight slugs from a public/insights.json so /insights/<slug> routes
// stay in sync with content. Falls back to an empty list if the file is
// missing or malformed (the static routes are still prerendered).
export function getInsightRoutes(publicDir) {
  try {
    const raw = readFileSync(join(publicDir, 'insights.json'), 'utf8');
    const data = JSON.parse(raw);
    const items = Array.isArray(data) ? data : data.insights || [];
    return items
      .filter((item) => item && item.slug && item.published !== false)
      .map((item) => `/insights/${item.slug}`);
  } catch (err) {
    console.warn(`[routes] could not read insights.json from ${publicDir}: ${err.message}`);
    return [];
  }
}

export function getAllRoutes(publicDir) {
  return [...STATIC_ROUTES, ...getInsightRoutes(publicDir)];
}
