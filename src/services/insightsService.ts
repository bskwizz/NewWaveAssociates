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

export async function getAllPublishedInsights(): Promise<Insight[]> {
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .eq('published', true)
    .order('publish_date', { ascending: false });

  if (error) {
    console.error('Error fetching insights:', error);
    return [];
  }

  return data || [];
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching insight:', error);
    return null;
  }

  return data;
}

export async function getFeaturedInsight(): Promise<Insight | null> {
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .eq('published', true)
    .eq('featured', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching featured insight:', error);
    return null;
  }

  return data;
}
