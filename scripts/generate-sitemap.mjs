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
  if (route === '/insights' || route === '/case-studies') {
    return { changefreq: 'weekly', priority: '0.9' };
  }
  if (route.startsWith('/insights/')) return { changefreq: 'weekly', priority: '0.7' };
  if (['/services', '/about-us', '/contact-us'].includes(route)) {
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
    return [
      '  <url>',
      `    <loc>${SITE}${route}</loc>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = join(PUBLIC_DIR, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`[sitemap] wrote ${routes.length} URLs to ${outPath}`);
