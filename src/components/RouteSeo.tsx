import { useLocation } from 'react-router-dom';
import Seo from './Seo';
import { ROUTE_META, DEFAULT_META } from '../seo/metadata';

// Renders per-route <title>/meta from the central ROUTE_META map, based on the
// current path. Mounted once in App. Insight detail pages (/insights/:slug)
// render their own <Seo> from the loaded article, so they're skipped here to
// avoid conflicting tags.
export default function RouteSeo() {
  const { pathname } = useLocation();

  if (pathname.startsWith('/insights/')) return null;

  const normalized = pathname !== '/' && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;
  const meta = ROUTE_META[normalized] || DEFAULT_META;

  return (
    <Seo
      title={meta.title}
      description={meta.description}
      canonical={normalized}
      ogDescription={meta.ogDescription}
      twitterDescription={meta.twitterDescription}
    />
  );
}
