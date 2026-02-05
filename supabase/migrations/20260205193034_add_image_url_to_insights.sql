/*
  # Add image_url to insights table

  1. Changes
    - Add `image_url` column to `insights` table to store hero/featured image URL
    - Column is optional (nullable) to maintain backward compatibility
  
  2. Notes
    - Images will be used as hero images in article detail pages
    - Also used as card images in the insights listing page
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'insights' AND column_name = 'image_url'
  ) THEN
    ALTER TABLE insights ADD COLUMN image_url text;
  END IF;
END $$;