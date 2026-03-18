import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#38495D] text-white py-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 order-2 md:order-1">
            <img
              src="/New Wave Associates Horizontal.png"
              alt="New Wave Associates Logo"
              className="h-24 w-auto"
            />
          </div>
          <div className="flex items-center gap-3 order-1 md:order-2 mt-4 md:mt-0">
            <span className="text-sm text-gray-300">Find Us Online</span>
            <a
              href="https://www.linkedin.com/company/new-wave-associates/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#01A3DB] transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-2">
          <div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-xs text-gray-300">
              © 2026 New Wave Associates LLC. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-300 md:justify-end">
              <Link to="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
