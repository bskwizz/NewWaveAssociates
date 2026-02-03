import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const navItems = [
    { label: 'The Flywheel', page: 'flywheel' },
    { label: 'Services', page: 'capabilities' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Contact Us', page: 'contact-us' },
  ];

  const handleDropdownNavigation = (page: string, anchor: string) => {
    onNavigate(page);
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between" style={{ minHeight: '120px' }}>
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group relative z-10 py-4"
          >
            <img
              src="/New Wave Associates Horizontal.png"
              alt="New Wave Associates"
              style={{ height: '100px', width: 'auto' }}
            />
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
          </div>
        )}
      </div>
    </nav>
  );
}
