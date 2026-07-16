// No-op analytics stub for the Find the Right Leader flow.
//
// The site has no analytics provider configured. These call sites exist so that
// PII-free flow events can be wired to a real provider later without touching
// the flow logic. NEVER pass names, emails, phone numbers, LinkedIn URLs, or
// free-text descriptions here — only non-sensitive properties (step number,
// practice area, engagement model, company-size range, start-timing range).
export type FlowEvent =
  | 'find_leader_started'
  | 'find_leader_step_completed'
  | 'find_leader_back_clicked'
  | 'find_leader_skills_skipped'
  | 'find_leader_submitted'
  | 'find_leader_submission_failed';

export function trackFlowEvent(event: FlowEvent, props?: Record<string, string | number>): void {
  if (import.meta.env.DEV) {
    console.debug('[find-leader]', event, props ?? {});
  }
}
