import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;

const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// scripts/prerender.mjs stamps <html data-prerendered-path="/the/route">.
// If the served HTML was prerendered for THIS exact path, hydrate over it
// (preserves SEO markup, no flash). Otherwise (dev, or the 404.html "?p="
// fallback landing on index.html for a different route) do a clean render to
// avoid hydration mismatches.
const stripSlash = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p);
const prerenderedPath = document.documentElement.dataset.prerenderedPath;
const matches =
  prerenderedPath !== undefined &&
  stripSlash(prerenderedPath) === stripSlash(window.location.pathname) &&
  root.hasChildNodes();

if (matches) {
  hydrateRoot(root, tree);
} else {
  root.innerHTML = '';
  createRoot(root).render(tree);
}
