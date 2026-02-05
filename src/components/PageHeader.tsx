import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  {
    label: 'Our Services',
    path: '/services',
    isActive: (p: string) => p === '/services',
  },
  {
    label: 'Case Studies',
    path: '/case-studies',
    isActive: (p: string) =>
      p === '/case-studies' ||
      p.startsWith('/case-studies/') ||
      p.startsWith('/case-study-') ||
      p.startsWith('/hub-'),
  },
  {
    label: 'Insights',
    path: '/insights',
    isActive: (p: string) => p.startsWith('/insights'),
  },
  {
    label: 'About Us',
    path: '/about-us',
    isActive: (p: string) => p === '/about-us',
  },
  {
    label: 'Contact Us',
    path: '/contact-us',
    isActive: (p: string) => p === '/contact-us',
  },
];

export default function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/new_wave_associates_horizontal.png"
              alt="New Wave Associates"
              className="h-[80px] sm:h-[100px] lg:h-[126px] w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => {
              const active = item.isActive(pathname);
              const isContactUs = item.path === '/contact-us';

              if (isContactUs) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-5 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all hover:text-[#01A3DB] relative group ${
                    active ? 'text-[#01A3DB]' : 'text-[#38495D]'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01A3DB] transition-all group-hover:w-full"></span>
                </Link>
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
              const active = item.isActive(pathname);
              const isContactUs = item.path === '/contact-us';

              if (isContactUs) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-5 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left text-sm font-medium transition-colors hover:text-[#01A3DB] ${
                    active ? 'text-[#01A3DB]' : 'text-[#38495D]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
