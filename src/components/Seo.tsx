import { Helmet } from 'react-helmet-async';

const SITE = 'https://www.newwaveassociates.com';
const DEFAULT_IMAGE = '/New Wave Associates Square.png';

interface SeoProps {
  /** Page <title>. Keep it unique per page. */
  title: string;
  /** Meta description (~150–160 chars). Keep it unique per page. */
  description: string;
  /** Canonical path, e.g. "/services" or "/" for home (no trailing slash). */
  canonical: string;
  /** Absolute or root-relative OG image path. */
  image?: string;
  /** Open Graph type. "website" for most pages, "article" for insights. */
  type?: 'website' | 'article';
}

export default function Seo({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
}: SeoProps) {
  // GitHub Pages serves directory index files with a trailing slash (e.g.
  // /services -> 301 -> /services/). Canonicalize to that final 200 URL so the
  // canonical + og:url don't point at a redirect. Home stays "/".
  const path = canonical === '/' || canonical.endsWith('/') ? canonical : `${canonical}/`;
  const url = SITE + path;
  const imageUrl = image.startsWith('http') ? image : SITE + image;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="New Wave Associates" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
