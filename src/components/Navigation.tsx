import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Industries', page: 'industries' },
    { label: 'Capabilities', page: 'capabilities' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Contact Us', page: 'contact-us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-[#01A3DB] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">NW</span>
            </div>
            <span className="text-[#38495D] font-semibold text-lg">New Wave Associates</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-all hover:text-[#01A3DB] relative group ${
                  currentPage === item.page ? 'text-[#01A3DB]' : 'text-[#38495D]'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01A3DB] transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button className="px-5 py-2 border-2 border-[#01A3DB] text-[#01A3DB] rounded-full text-sm font-medium hover:bg-[#01A3DB] hover:text-white transition-all">
              Newsletter
            </button>
          </div>

          <button
            className="md:hidden text-[#38495D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-medium transition-colors hover:text-[#01A3DB] ${
                  currentPage === item.page ? 'text-[#01A3DB]' : 'text-[#38495D]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="px-5 py-2 border-2 border-[#01A3DB] text-[#01A3DB] rounded-full text-sm font-medium hover:bg-[#01A3DB] hover:text-white transition-all w-fit">
              Newsletter
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
