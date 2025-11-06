import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#38495D] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <img
            src="/New Wave Associates Horizontal.png"
            alt="New Wave Associates"
            className="h-24 mb-4"
          />
          <p className="text-sm text-gray-300 w-full md:w-1/4 leading-relaxed">
            New Wave Associates is a strategy & general management growth consultancy that brings operator-grade expertise to help companies evolve smarter, leaner, and faster.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-300">
            © New Wave Associates LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">Find Us Online</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#01A3DB] transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
