import { supabase } from '../lib/supabaseClient';

export interface Insight {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  author_bio: string;
  publish_date: string;
  read_time: string;
  content_type: string;
  featured: boolean;
  published: boolean;
  image_url?: string;
  pdf_url?: string;
  created_at: string;
  updated_at: string;
}

interface InsightJsonEntry {
  slug: string;
  pdf_url?: string;
  [key: string]: unknown;
}

let jsonCachePromise: Promise<InsightJsonEntry[]> | null = null;

function fetchJsonInsights(): Promise<InsightJsonEntry[]> {
  if (!jsonCachePromise) {
    jsonCachePromise = fetch('/insights.json')
      .then((res) => (res.ok ? res.json() : []))
      .catch(() => []);
  }
  return jsonCachePromise;
}

async function fetchFallbackInsights(): Promise<Insight[]> {
  try {
    const res = await fetch('/insights.json');
    if (!res.ok) return [];
    const json: Insight[] = await res.json();
    return json
      .filter((i) => i.published)
      .sort(
        (a, b) =>
          new Date(b.publish_date).getTime() -
          new Date(a.publish_date).getTime(),
      );
  } catch {
    return [];
  }
}

async function mergeJsonPdfUrl(insight: Insight): Promise<Insight> {
  if (insight.pdf_url) return insight;
  try {
    const jsonEntries = await fetchJsonInsights();
    const match = jsonEntries.find((e) => e.slug === insight.slug);
    if (match?.pdf_url) {
      return { ...insight, pdf_url: match.pdf_url };
    }
  } catch {
  }
  return insight;
}

export async function getAllPublishedInsights(): Promise<Insight[]> {
  try {
    const { data, error } = await supabase
      .from('insights')
      .select('*')
      .eq('published', true)
      .order('publish_date', { ascending: false });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (e) {
    console.error('Supabase fetch failed:', e);
  }

  return fetchFallbackInsights();
}

export async function getInsightBySlug(
  slug: string,
): Promise<Insight | null> {
  try {
    const { data, error } = await supabase
      .from('insights')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (!error && data) {
      return mergeJsonPdfUrl(data);
    }
  } catch (e) {
    console.error('Supabase fetch failed:', e);
  }

  try {
    const all = await fetchFallbackInsights();
    const found = all.find((i) => i.slug === slug) ?? null;
    return found;
  } catch {
    return null;
  }
}

export async function getFeaturedInsight(): Promise<Insight | null> {
  try {
    const { data, error } = await supabase
      .from('insights')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .maybeSingle();

    if (!error && data) {
      return mergeJsonPdfUrl(data);
    }
  } catch (e) {
    console.error('Supabase fetch failed:', e);
  }

  try {
    const all = await fetchFallbackInsights();
    return all.find((i) => i.featured) ?? null;
  } catch {
    return null;
  }
}
