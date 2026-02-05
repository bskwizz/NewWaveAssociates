/*
  # Create Insights Table

  1. New Tables
    - `insights`
      - `id` (uuid, primary key) - Unique identifier for each insight article
      - `title` (text) - Article title
      - `slug` (text, unique) - URL-friendly identifier for routing
      - `category` (text) - Article category/topic (e.g., "Transformation", "Procurement")
      - `excerpt` (text) - Brief summary for list views
      - `content` (text) - Full article content in markdown/HTML format
      - `author` (text) - Author name
      - `author_bio` (text) - Author biography for "About the Author" section
      - `publish_date` (date) - Publication date
      - `read_time` (text) - Estimated reading time (e.g., "8 min read")
      - `featured` (boolean) - Whether article should be featured
      - `published` (boolean) - Whether article is published and visible
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `insights` table
    - Add policy for public read access to published insights only
    - This is a public-facing blog/insights section, so authenticated users are not required

  3. Indexes
    - Unique index on slug for efficient lookups
    - Index on published column for filtering
    - Index on featured column for featured article queries
*/

CREATE TABLE IF NOT EXISTS insights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  author_bio text NOT NULL,
  publish_date date DEFAULT CURRENT_DATE,
  read_time text DEFAULT '5 min read',
  featured boolean DEFAULT false,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE insights ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published insights"
  ON insights
  FOR SELECT
  USING (published = true);

CREATE INDEX IF NOT EXISTS idx_insights_published ON insights(published);
CREATE INDEX IF NOT EXISTS idx_insights_featured ON insights(featured);
CREATE INDEX IF NOT EXISTS idx_insights_slug ON insights(slug);
