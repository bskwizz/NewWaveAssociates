/*
  # Normalize Lead Capture Tables

  ## Summary
  This migration brings the lead capture schema into alignment with the
  frontend recordLead() contract. Two separate tables handle the two distinct
  lead types: insight engagements and contact-form submissions.

  ## Changes to existing table: insight_leads
  - Rename `slug` → `article_slug` (clearer semantic name, mirrors frontend payload)
  - Rename `url`  → `page_url`    (matches snake_case contract)
  - Add `company`  text nullable   (company name from modal)
  - Add `pdf_url`  text nullable   (source PDF for download/print leads)

  ## New table: contact_leads
  Stores submissions from the Contact Us page form.
  Columns:
  - id          uuid PK
  - name        text NOT NULL
  - email       text NOT NULL
  - phone       text nullable
  - company     text nullable
  - reason      text nullable
  - timeline    text nullable
  - message     text nullable
  - source      text NOT NULL DEFAULT 'contact_form'
  - page_url    text nullable
  - created_at  timestamptz DEFAULT now()

  ## Security
  - RLS enabled on contact_leads (insert only via service role, no public reads)
  - insight_leads RLS already enabled; new columns inherit existing policies
*/

-- ── insight_leads: safe column renames + additions ──────────────────────────

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insight_leads' AND column_name = 'slug'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insight_leads' AND column_name = 'article_slug'
  ) THEN
    ALTER TABLE insight_leads RENAME COLUMN slug TO article_slug;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insight_leads' AND column_name = 'url'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insight_leads' AND column_name = 'page_url'
  ) THEN
    ALTER TABLE insight_leads RENAME COLUMN url TO page_url;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insight_leads' AND column_name = 'company'
  ) THEN
    ALTER TABLE insight_leads ADD COLUMN company text;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insight_leads' AND column_name = 'pdf_url'
  ) THEN
    ALTER TABLE insight_leads ADD COLUMN pdf_url text;
  END IF;
END $$;

-- ── contact_leads: new table ─────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS contact_leads (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL DEFAULT '',
  email      text NOT NULL,
  phone      text,
  company    text,
  reason     text,
  timeline   text,
  message    text,
  source     text NOT NULL DEFAULT 'contact_form',
  page_url   text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert contact leads"
  ON contact_leads
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can select contact leads"
  ON contact_leads
  FOR SELECT
  TO service_role
  USING (true);
