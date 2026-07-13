// Single source of truth for the six Leadership Practice Areas and their URL
// slugs. Used by the Results page filter (parsing/serializing the
// ?practiceArea= query param) and by the Solutions "View {area} Results" links,
// so the names and slugs never drift apart.

export const PRACTICE_AREAS = [
  'Procurement',
  'Strategic Sourcing',
  'Revenue Operations',
  'Transformation Office',
  'Project Management Office',
  'M&A Integration',
] as const;

export type PracticeAreaName = (typeof PRACTICE_AREAS)[number];

const SLUG_BY_NAME: Record<PracticeAreaName, string> = {
  Procurement: 'procurement',
  'Strategic Sourcing': 'strategic-sourcing',
  'Revenue Operations': 'revenue-operations',
  'Transformation Office': 'transformation-office',
  'Project Management Office': 'project-management-office',
  'M&A Integration': 'ma-integration',
};

const NAME_BY_SLUG: Record<string, PracticeAreaName> = Object.fromEntries(
  Object.entries(SLUG_BY_NAME).map(([name, slug]) => [slug, name as PracticeAreaName])
);

export function practiceAreaSlug(name: PracticeAreaName): string {
  return SLUG_BY_NAME[name];
}

// Returns the matching practice-area name, or null for a missing/unknown slug
// (so callers can fall back to the "All" default).
export function practiceAreaFromSlug(slug: string | null | undefined): PracticeAreaName | null {
  return (slug && NAME_BY_SLUG[slug]) || null;
}
