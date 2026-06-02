import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadEnv as viteLoadEnv } from 'vite';
import { createClient } from '@supabase/supabase-js';

// Regenerates public/insights.json from Supabase (the source of truth the app
// reads at runtime) so the prerenderer and sitemap stay in sync with published
// articles. Safety: if credentials are missing or Supabase returns nothing, the
// existing insights.json is left untouched (an offline/failed build never wipes
// content). Preserves pdf_url values that live only in the JSON — mirrors
// mergeJsonPdfUrl in src/services/insightsService.ts (e.g. hidden-tax).

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_FILE = join(ROOT, 'public', 'insights.json');

function loadEnv() {
  // Use Vite's loader so we read the SAME env files the app does — .env,
  // .env.local, .env.[mode], .env.[mode].local (with Vite's precedence) — not
  // just .env. Otherwise creds in .env.local would be missed and the sync would
  // silently skip, shipping a stale insights.json. Explicit process.env wins
  // (e.g. CI-injected vars).
  const mode = process.env.NODE_ENV || 'production';
  const fromFiles = viteLoadEnv(mode, ROOT, 'VITE_');
  return { ...fromFiles, ...process.env };
}

function readExisting() {
  try {
    const data = JSON.parse(readFileSync(OUT_FILE, 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function main() {
  const env = loadEnv();
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn('[sync-insights] Supabase credentials not found — keeping existing insights.json');
    return;
  }

  const existing = readExisting();
  const existingBySlug = new Map(existing.map((i) => [i.slug, i]));

  const sb = createClient(url, key);
  const { data, error } = await sb
    .from('insights')
    .select('*')
    .eq('published', true)
    .order('publish_date', { ascending: false });

  if (error) {
    console.warn(`[sync-insights] Supabase error (${error.message}) — keeping existing insights.json`);
    return;
  }
  if (!data || data.length === 0) {
    console.warn('[sync-insights] Supabase returned no published insights — keeping existing insights.json');
    return;
  }

  // Preserve pdf_url that exists only in the JSON when Supabase's is empty.
  const merged = data.map((row) => {
    if (!row.pdf_url) {
      const prior = existingBySlug.get(row.slug);
      if (prior?.pdf_url) return { ...row, pdf_url: prior.pdf_url };
    }
    return row;
  });

  writeFileSync(OUT_FILE, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`[sync-insights] wrote ${merged.length} published insights to public/insights.json`);
}

main().catch((err) => {
  // Never fail the build over a sync hiccup — keep the existing file.
  console.warn(`[sync-insights] unexpected error (${err.message}) — keeping existing insights.json`);
});
