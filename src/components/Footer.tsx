import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#38495D] text-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-3 flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}Copy of New Wave Associates Horizontal copy.png`}
              alt="New Wave Associates Logo"
              className="h-20 w-auto mb-1"
            />
            <p className="text-xs text-gray-300 w-full md:w-auto max-w-md leading-relaxed">
              New Wave Associates is a strategy & general management growth consultancy that brings operator-grade expertise to help companies evolve. Smarter. Leaner. Faster.
            </p>
          </div>
          <div className="flex items-center gap-3">
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
        <div className="pt-3 border-t border-white/10">
          <p className="text-xs text-gray-300">
            © New Wave Associates LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
