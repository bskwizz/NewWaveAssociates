import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createClient } from '@supabase/supabase-js';

// Regenerates public/insights.json from Supabase (the source of truth the app
// reads at runtime) so the prerenderer and sitemap stay in sync with published
// articles. Safety: if credentials are missing or Supabase returns nothing, the
// existing insights.json is left untouched (an offline/failed build never wipes
// content). Preserves pdf_url values that live only in the JSON — mirrors
// mergeJsonPdfUrl in src/services/insightsService.ts (e.g. hidden-tax).

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ENV_FILE = join(ROOT, '.env');
const OUT_FILE = join(ROOT, 'public', 'insights.json');

function loadEnv() {
  const env = { ...process.env };
  if (existsSync(ENV_FILE)) {
    for (const line of readFileSync(ENV_FILE, 'utf8').split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const val = trimmed.slice(eq + 1).trim().replace(/^['"]|['"]$/g, '');
      if (!(key in env)) env[key] = val;
    }
  }
  return env;
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
