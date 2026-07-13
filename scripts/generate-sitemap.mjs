import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { getAllRoutes } from './routes.mjs';

const SITE = 'https://www.newwaveassociates.com';
const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Per-route SEO metadata. Canonical form uses NO trailing slash (home = "/"),
// matching the react-router paths and the <link rel="canonical"> tags.
function metaFor(route) {
  if (route === '/') return { changefreq: 'monthly', priority: '1.0' };
  if (route === '/insights' || route === '/results') {
    return { changefreq: 'weekly', priority: '0.9' };
  }
  if (route.startsWith('/insights/')) return { changefreq: 'weekly', priority: '0.7' };
  if (['/solutions', '/about', '/contact'].includes(route)) {
    return { changefreq: 'monthly', priority: '0.9' };
  }
  if (route === '/privacy' || route === '/terms') {
    return { changefreq: 'yearly', priority: '0.3' };
  }
  // Case studies and hubs
  return { changefreq: 'monthly', priority: '0.7' };
}

const routes = getAllRoutes(PUBLIC_DIR);

const urls = routes
  .map((route) => {
    const { changefreq, priority } = metaFor(route);
    // GitHub Pages serves these at a trailing slash (e.g. /services/), 301-ing
    // the no-slash form. List the final 200 URL so the sitemap matches the
    // canonical tags and doesn't point at redirects. Home stays "/".
    const loc = route === '/' ? `${SITE}/` : `${SITE}${route}/`;
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

// AI-readable static resources (served raw from public/, no trailing slash).
const RESOURCE_PATHS = ['/llms.txt', '/llminfo.md', '/faqsforllms.md'];
const resourceUrls = RESOURCE_PATHS.map((path) =>
  [
    '  <url>',
    `    <loc>${SITE}${path}</loc>`,
    '    <changefreq>monthly</changefreq>',
    '    <priority>0.5</priority>',
    '  </url>',
  ].join('\n')
).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${resourceUrls}
</urlset>
`;

const outPath = join(PUBLIC_DIR, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`[sitemap] wrote ${routes.length + RESOURCE_PATHS.length} URLs to ${outPath}`);
