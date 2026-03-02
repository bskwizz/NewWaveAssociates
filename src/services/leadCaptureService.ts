import { supabase } from '../lib/supabaseClient';

const UNLOCK_KEY = 'nwa_lead_unlocked_until';
const EMAIL_KEY = 'nwa_lead_email';
const UNLOCK_DAYS = 180;

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

export interface LeadPayload {
  email: string;
  source: 'download_pdf' | 'subscribe_header' | 'subscribe_footer';
  slug?: string;
  url?: string;
}

export async function recordLead(payload: LeadPayload): Promise<void> {
  try {
    const { error } = await supabase.from('insight_leads').insert([{
      email: payload.email,
      source: payload.source,
      slug: payload.slug ?? null,
      url: payload.url ?? window.location.href,
      created_at: new Date().toISOString(),
    }]);
    if (error) {
      console.error('Lead capture failed:', error.message);
    }
  } catch (e) {
    console.error('Lead capture error:', e);
  }
}
