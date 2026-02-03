import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface PageHeaderProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export default function PageHeader({ onNavigate, currentPage }: PageHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Our Services', page: 'our-services' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Contact Us', page: 'contact-us' },
  ];

  const handleNavigate = (page: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <div className="w-full py-4 md:py-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => handleNavigate('home')} className="hover:opacity-80 transition-opacity">
            <img
              src="/new_wave_associates_horizontal.png"
              alt="New Wave Associates"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => {
              const isContactUs = item.page === 'contact-us';

              if (isContactUs) {
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavigate(item.page)}
                    className="px-6 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`text-sm font-medium transition-all hover:text-[#01A3DB] relative group whitespace-nowrap ${
                    currentPage === item.page ? 'text-[#01A3DB]' : 'text-[#38495D]'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01A3DB] transition-all group-hover:w-full"></span>
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#38495D] hover:text-[#01A3DB] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <nav className="flex flex-col">
              {navItems.map((item) => {
                const isContactUs = item.page === 'contact-us';

                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavigate(item.page)}
                    className={`px-6 py-4 text-left transition-all ${
                      isContactUs
                        ? 'bg-[#f05e00] text-white font-semibold hover:bg-[#d94f00]'
                        : currentPage === item.page
                        ? 'text-[#01A3DB] bg-gray-50'
                        : 'text-[#38495D] hover:bg-gray-50 hover:text-[#01A3DB]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
