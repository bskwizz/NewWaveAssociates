const UNLOCK_KEY = 'nwa_lead_unlocked_until';
const EMAIL_KEY = 'nwa_lead_email';
const UNLOCK_DAYS = 180;

const LEAD_ENDPOINT = 'https://uodxsqqlszmonludxrlr.supabase.co/functions/v1/lead';

export function isUnlocked(): boolean {
  try {
    const val = localStorage.getItem(UNLOCK_KEY);
    if (!val) return false;
    return new Date(val) > new Date();
  } catch {
    return false;
  }
}

export function getSavedEmail(): string | null {
  try {
    return localStorage.getItem(EMAIL_KEY);
  } catch {
    return null;
  }
}

export function persistUnlock(email: string): void {
  try {
    const until = new Date();
    until.setDate(until.getDate() + UNLOCK_DAYS);
    localStorage.setItem(UNLOCK_KEY, until.toISOString());
    localStorage.setItem(EMAIL_KEY, email);
  } catch {
    // localStorage unavailable (private mode / disabled): non-fatal.
  }
}

export function clearUnlock(): void {
  try {
    localStorage.removeItem(UNLOCK_KEY);
    localStorage.removeItem(EMAIL_KEY);
  } catch {
    // localStorage unavailable (private mode / disabled): non-fatal.
  }
}

export type LeadSource =
  | 'contact_form'
  | 'executive_network'
  | 'download_pdf'
  | 'print_pdf'
  | 'subscribe_insights_header'
  | 'subscribe_insights_footer';

export interface LeadPayload {
  email: string;
  company?: string;
  source: LeadSource;
  article_slug?: string;
  page_url?: string;
  pdf_url?: string;
  name?: string;
  phone?: string;
  reason?: string;
  timeline?: string;
  message?: string;
  // Additional source-specific fields merged into the POST body as-is (e.g. the
  // Executive Network application's structured columns). Keys should match what
  // the edge function reads for that source.
  fields?: Record<string, string | undefined>;
}

export async function recordLead(payload: LeadPayload): Promise<void> {
  const body: Record<string, string | null> = {
    email: payload.email,
    company: payload.company ?? null,
    source: payload.source,
    article_slug: payload.article_slug ?? null,
    page_url: payload.page_url ?? window.location.href,
    pdf_url: payload.pdf_url ?? null,
    name: payload.name ?? null,
    phone: payload.phone ?? null,
    reason: payload.reason ?? null,
    timeline: payload.timeline ?? null,
    message: payload.message ?? null,
  };

  // Merge any source-specific fields (e.g. executive_network columns).
  if (payload.fields) {
    for (const [key, value] of Object.entries(payload.fields)) {
      body[key] = value ?? null;
    }
  }

  const response = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    const err = new Error(`Lead capture failed: ${response.status} ${text}`);
    if (import.meta.env.DEV) console.error('[LEAD FAIL]', err);
    throw err;
  }

  if (import.meta.env.DEV) {
    console.log('[LEAD OK]', { source: payload.source, email: payload.email, article_slug: payload.article_slug ?? null });
  }
}
