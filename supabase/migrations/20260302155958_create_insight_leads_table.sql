/*
  # Create insight_leads table

  ## Summary
  Creates a table to capture email leads from insight article interactions.

  ## New Tables
  - `insight_leads`
    - `id` (uuid, primary key)
    - `email` (text, required) - captured email address
    - `source` (text, required) - how the lead was captured: 'download_pdf', 'subscribe_header', 'subscribe_footer'
    - `slug` (text, nullable) - article slug where the capture happened
    - `url` (text, nullable) - full URL of the page
    - `created_at` (timestamptz) - timestamp of capture

  ## Security
  - RLS enabled - only service role can insert/read
  - Anonymous users can INSERT (for lead capture)
  - Only authenticated/service role can SELECT
*/

CREATE TABLE IF NOT EXISTS insight_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source text NOT NULL,
  slug text,
  url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE insight_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert insight leads"
  ON insight_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view insight leads"
  ON insight_leads
  FOR SELECT
  TO authenticated
  USING (true);
