const UNLOCK_KEY = 'nwa_lead_unlocked_until';
const EMAIL_KEY = 'nwa_lead_email';
const UNLOCK_DAYS = 180;

const LEAD_ENDPOINT = 'https://vmxghbrjuyvyzxaavmus.functions.supabase.co/lead';

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
  }
}

export function clearUnlock(): void {
  try {
    localStorage.removeItem(UNLOCK_KEY);
    localStorage.removeItem(EMAIL_KEY);
  } catch {
  }
}

export type LeadSource =
  | 'download_pdf'
  | 'subscribe_insights_header'
  | 'subscribe_insights_footer';

export interface LeadPayload {
  email: string;
  company?: string;
  source: LeadSource;
  article_slug?: string;
  page_url?: string;
  pdf_url?: string;
}

export async function recordLead(payload: LeadPayload): Promise<void> {
  const body: Record<string, string | null> = {
    email: payload.email,
    company: payload.company ?? null,
    source: payload.source,
    article_slug: payload.article_slug ?? null,
    page_url: payload.page_url ?? window.location.href,
    pdf_url: payload.pdf_url ?? null,
  };

  const response = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    const err = new Error(`Lead capture failed: ${response.status} ${text}`);
    console.error(err);
    throw err;
  }
}
