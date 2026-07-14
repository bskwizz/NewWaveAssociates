// Single source of truth for the six Leadership Practice Areas: display name,
// URL slug (the ?practiceArea= value used by the Results filter and the
// Solutions deep-links), and the existing case-study hub route each maps to.
// Used by the Solutions "View {area} Results" links, the Results filter, the
// filtered context message, and the Results card "Explore {area} Case Studies"
// CTAs, so names, slugs, and routes never drift apart.

export const PRACTICE_AREAS = [
  'Procurement',
  'Strategic Sourcing',
  'Revenue Operations',
  'Transformation Office',
  'Project Management Office',
  'M&A Integration',
] as const;

export type PracticeAreaName = (typeof PRACTICE_AREAS)[number];

interface PracticeAreaMeta {
  slug: string;
  /** Existing (legacy-named) case-study hub route. Preserved to avoid breaking links. */
  hubPath: string;
}

const META: Record<PracticeAreaName, PracticeAreaMeta> = {
  Procurement: { slug: 'procurement', hubPath: '/hub-procurement' },
  'Strategic Sourcing': { slug: 'strategic-sourcing', hubPath: '/hub-strategic-sourcing' },
  'Revenue Operations': { slug: 'revenue-operations', hubPath: '/hub-revenue-operations' },
  'Transformation Office': { slug: 'transformation-office', hubPath: '/hub-transformation-office' },
  'Project Management Office': { slug: 'project-management-office', hubPath: '/hub-project-management-office' },
  'M&A Integration': { slug: 'ma-integration', hubPath: '/hub-ma-integration' },
};

const NAME_BY_SLUG: Record<string, PracticeAreaName> = Object.fromEntries(
  (Object.entries(META) as [PracticeAreaName, PracticeAreaMeta][]).map(([name, m]) => [m.slug, name])
);

export function practiceAreaSlug(name: PracticeAreaName): string {
  return META[name].slug;
}

export function practiceAreaHubPath(name: PracticeAreaName): string {
  return META[name].hubPath;
}

// Returns the matching practice-area name, or null for a missing/unknown slug
// (so callers can fall back to the "All" default).
export function practiceAreaFromSlug(slug: string | null | undefined): PracticeAreaName | null {
  return (slug && NAME_BY_SLUG[slug]) || null;
}
