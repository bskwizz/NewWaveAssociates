/*
  # Add content_type column to insights

  1. Changes
    - `insights` table: adds `content_type` column (text, default 'Article')
      - Allows labeling insights as 'Article', 'White Paper', etc.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insights' AND column_name = 'content_type'
  ) THEN
    ALTER TABLE insights ADD COLUMN content_type text NOT NULL DEFAULT 'Article';
  END IF;
END $$;
