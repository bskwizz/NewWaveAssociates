/*
  # Executive Network Leads Table

  ## Summary
  Stores applications submitted from the /executive-network page's
  "Tell Us About Your Experience" form (recordLead source = 'executive_network').
  Kept separate from contact_leads so network applications can be triaged on
  their own, with dedicated columns instead of a packed message blob.

  ## New table: executive_network_leads
  Columns:
  - id                uuid PK
  - first_name        text NOT NULL DEFAULT ''
  - last_name         text NOT NULL DEFAULT ''
  - email             text NOT NULL
  - phone             text nullable
  - company           text nullable
  - linkedin          text nullable   (required by the form; stored here)
  - title             text nullable   (current or most recent title)
  - practice_area     text nullable   (primary Leadership Practice Area)
  - additional_areas  text nullable
  - engagement_type   text nullable   (Fractional / Interim / Project-Based / Open to Multiple Models)
  - industries        text nullable
  - location          text nullable
  - travel            text nullable   (willingness to travel)
  - availability      text nullable
  - website_url       text nullable   (named website_url, not website, to avoid
                                        colliding with the honeypot field named "website")
  - summary           text nullable   (brief executive summary)
  - additional_info   text nullable
  - source            text NOT NULL DEFAULT 'executive_network'
  - page_url          text nullable
  - created_at        timestamptz DEFAULT now()

  ## Security
  - RLS enabled (insert + select via service role only, no public reads),
    mirroring contact_leads.
*/

CREATE TABLE IF NOT EXISTS executive_network_leads (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name       text NOT NULL DEFAULT '',
  last_name        text NOT NULL DEFAULT '',
  email            text NOT NULL,
  phone            text,
  company          text,
  linkedin         text,
  title            text,
  practice_area    text,
  additional_areas text,
  engagement_type  text,
  industries       text,
  location         text,
  travel           text,
  availability     text,
  website_url      text,
  summary          text,
  additional_info  text,
  source           text NOT NULL DEFAULT 'executive_network',
  page_url         text,
  created_at       timestamptz DEFAULT now()
);

ALTER TABLE executive_network_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert executive network leads"
  ON executive_network_leads
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can select executive network leads"
  ON executive_network_leads
  FOR SELECT
  TO service_role
  USING (true);
