/*
  # Add author bio to "Operational Rigor Is the Foundation for AI"

  1. Changes
    - `insights` table — set author_bio for slug: operational-rigor-foundation-for-ai

  2. Notes
    - The InsightDetailPage already renders author_bio under an "About the Author" heading
      when this field is non-empty, so no frontend changes are needed.
*/

UPDATE insights
SET author_bio = 'Bryan Skwirut is Managing Partner at New Wave Associates, where he works with leadership teams to strengthen execution across complex operating environments. His work centers on operational transformation, post-acquisition integration, and building structured operating models that scale.

Bryan has spent significant time designing and deploying deterministic automation and AI-enabled workflows inside real operating contexts, including billing operations, service delivery, and financial processes. His perspective reflects hands-on experience implementing agents within structured workflows rather than observing them from the outside.

His writing focuses on how organizations adopt automation in practice: through operational rigor, disciplined sequencing, and systems that reinforce consistent execution over time.'
WHERE slug = 'operational-rigor-foundation-for-ai';
