import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { getAllRoutes } from './routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'docs');

const NAV_TIMEOUT = 30000; // per-route navigation timeout
const CONTENT_TIMEOUT = 15000; // wait for React content to render
const WATCHDOG = 5 * 60 * 1000; // overall safety timeout

function outFileFor(route) {
  // "/" -> docs/index.html ; "/services" -> docs/services/index.html
  const rel = route === '/' ? 'index.html' : join(route.replace(/^\//, ''), 'index.html');
  return join(OUT_DIR, rel);
}

async function prerenderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(NAV_TIMEOUT);

  // Speed up: images/fonts/media don't affect the captured HTML.
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (['image', 'media', 'font'].includes(req.resourceType())) req.abort();
    else req.continue();
  });

  const url = baseUrl.replace(/\/$/, '') + route;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: NAV_TIMEOUT });

  // Wait until React has rendered real content.
  await page.waitForSelector('#root h1, #root h2', { timeout: CONTENT_TIMEOUT });

  // Insight detail pages load async; wait for the "Loading article" state to clear.
  if (route.startsWith('/insights/')) {
    await page.waitForFunction(
      () => !document.body.innerText.includes('Loading article'),
      { timeout: CONTENT_TIMEOUT }
    );
  }

  // Strip any Vanta/three.js canvas (post-mount, non-deterministic) and stamp
  // the sentinel used by main.tsx to decide hydrate vs. clean render.
  await page.evaluate((p) => {
    document.querySelectorAll('canvas').forEach((c) => c.remove());
    document.documentElement.setAttribute('data-prerendered-path', p);
  }, route);

  const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));
  await page.close();

  const outFile = outFileFor(route);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html, 'utf8');
  return outFile;
}

async function main() {
  const server = await preview({
    root: ROOT,
    preview: { port: 4188, strictPort: false },
    logLevel: 'warn',
  });
  const baseUrl = server.resolvedUrls?.local?.[0];
  if (!baseUrl) throw new Error('Could not resolve Vite preview URL');
  console.log(`[prerender] preview server at ${baseUrl}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const routes = getAllRoutes(join(ROOT, 'public'));
  console.log(`[prerender] ${routes.length} routes`);

  const failures = [];
  for (const route of routes) {
    try {
      const out = await prerenderRoute(browser, baseUrl, route);
      console.log(`[prerender] ✓ ${route} -> ${out.replace(ROOT + '/', '')}`);
    } catch (err) {
      console.error(`[prerender] ✗ ${route}: ${err.message}`);
      failures.push(route);
    }
  }

  await browser.close();
  // Close the preview server once. Vite versions differ in which method exists;
  // prefer server.close(), fall back to httpServer.close(). Swallow "not
  // running" if it was already torn down.
  try {
    if (typeof server.close === 'function') await server.close();
    else await new Promise((res) => server.httpServer.close(() => res()));
  } catch (err) {
    if (err?.code !== 'ERR_SERVER_NOT_RUNNING') throw err;
  }

  if (failures.length) {
    console.error(`[prerender] ${failures.length} route(s) failed: ${failures.join(', ')}`);
    process.exitCode = 1;
  } else {
    console.log(`[prerender] done — ${routes.length} routes prerendered`);
  }
}

const watchdog = setTimeout(() => {
  console.error('[prerender] watchdog timeout exceeded');
  process.exit(1);
}, WATCHDOG);
watchdog.unref();

main()
  .then(() => clearTimeout(watchdog))
  .catch((err) => {
    console.error('[prerender] fatal:', err);
    process.exit(1);
  });
