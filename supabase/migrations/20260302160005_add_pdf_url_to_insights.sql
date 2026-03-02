/*
  # Add pdf_url column to insights table

  ## Summary
  Adds optional PDF URL field to insights so articles/whitepapers can have downloadable PDFs.

  ## Changes
  - `insights` table: new nullable `pdf_url` column for downloadable PDF links
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insights' AND column_name = 'pdf_url'
  ) THEN
    ALTER TABLE insights ADD COLUMN pdf_url text;
  END IF;
END $$;
