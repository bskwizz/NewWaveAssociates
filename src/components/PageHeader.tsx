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
    { label: 'Insights', page: 'insights' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Contact Us', page: 'contact-us' },
  ];

  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-opacity">
            <img
              src="/new_wave_associates_horizontal.png"
              alt="New Wave Associates"
              className="h-[80px] sm:h-[100px] lg:h-[126px] w-auto"
            />
          </button>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => {
              const isContactUs = item.page === 'contact-us';
              const isActive = currentPage === item.page ||
                              (item.page === 'insights' && currentPage?.startsWith('insights/'));

              if (isContactUs) {
                return (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className="px-5 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`text-sm font-medium transition-all hover:text-[#01A3DB] relative group ${
                    isActive ? 'text-[#01A3DB]' : 'text-[#38495D]'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01A3DB] transition-all group-hover:w-full"></span>
                </button>
              );
            })}
          </div>

          <button
            className="lg:hidden text-[#38495D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
            {navItems.map((item) => {
              const isContactUs = item.page === 'contact-us';
              const isActive = currentPage === item.page ||
                              (item.page === 'insights' && currentPage?.startsWith('insights/'));

              if (isContactUs) {
                return (
                  <button
                    key={item.page}
                    onClick={() => {
                      onNavigate(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className="px-5 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium transition-colors hover:text-[#01A3DB] ${
                    isActive ? 'text-[#01A3DB]' : 'text-[#38495D]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
