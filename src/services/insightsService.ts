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
  featured: boolean;
  published: boolean;
  image_url?: string;
  created_at: string;
  updated_at: string;
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
      return data;
    }
  } catch (e) {
    console.error('Supabase fetch failed:', e);
  }

  try {
    const all = await fetchFallbackInsights();
    return all.find((i) => i.slug === slug) ?? null;
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
      return data;
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
