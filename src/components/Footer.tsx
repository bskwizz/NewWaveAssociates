import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY, ROUTES, LLM_RESOURCES, PRACTICE_AREA_LINKS } from '../data/company';

const linkClass =
  'text-sm text-gray-300 hover:text-white transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#38495D]';
const headingClass = 'text-sm font-bold uppercase tracking-wide text-white mb-4';

export default function Footer() {
  return (
    <footer className="bg-[#38495D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              to={ROUTES.home}
              className="-mt-8 sm:-mt-10 -ml-3 inline-block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#38495D]"
            >
              <img
                src="/New Wave Associates Horizontal.png"
                alt="New Wave Associates"
                className="h-32 sm:h-40 w-auto"
              />
            </Link>
            <p className="-mt-10 sm:-mt-12 text-sm text-gray-300 leading-relaxed max-w-xs">
              Move forward with
              <br />
              experienced leadership.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">{COMPANY.brandLine}</p>
          </div>

          {/* Leadership Solutions */}
          <nav aria-label="Leadership Solutions">
            <h2 className={headingClass}>Leadership Solutions</h2>
            <ul className="space-y-2.5">
              {PRACTICE_AREA_LINKS.map((area) => (
                <li key={area.name}>
                  <Link to={area.solutionsHref} className={linkClass}>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Results */}
          <nav aria-label="Results">
            <h2 className={headingClass}>Results</h2>
            <ul className="space-y-2.5">
              <li>
                <Link to={ROUTES.results} className={linkClass}>
                  Results
                </Link>
              </li>
              {PRACTICE_AREA_LINKS.map((area) => (
                <li key={area.name}>
                  <Link to={area.hubHref} className={linkClass}>
                    {area.name} Case Studies
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className={headingClass}>Company</h2>
            <ul className="space-y-2.5">
              <li>
                <Link to={ROUTES.about} className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link to={ROUTES.contact} className={linkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to={ROUTES.privacy} className={linkClass}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to={ROUTES.terms} className={linkClass}>
                  Terms
                </Link>
              </li>
              {/* Static AI-readable resources: plain anchors so they serve raw, in the same tab. */}
              <li>
                <a href={LLM_RESOURCES.info} className={linkClass}>
                  LLM Information
                </a>
              </li>
              <li>
                <a href={LLM_RESOURCES.faq} className={linkClass}>
                  LLM FAQ
                </a>
              </li>
              <li>
                <a href={LLM_RESOURCES.index} className={linkClass}>
                  LLM Index
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Legal bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-xs text-gray-300">
              © {COMPANY.copyrightYear} {COMPANY.legalName}. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-3 md:justify-end">
              <a
                href={`mailto:${COMPANY.email}`}
                aria-label={`Email ${COMPANY.name}`}
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#01A3DB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#38495D]"
              >
                <Mail size={18} />
              </a>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${COMPANY.name} on LinkedIn`}
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#01A3DB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#38495D]"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
