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
    { label: 'The Flywheel', page: 'flywheel', hasDropdown: true, dropdownItems: [
      { label: 'GTM Strategy', anchor: 'gtm-strategy' },
      { label: 'Cost Optimization', anchor: 'cost-optimization' },
      { label: 'Operational Efficiencies', anchor: 'operational-efficiencies' }
    ]},
    { label: 'Capabilities', page: 'capabilities' },
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
    <nav className="fixed top-0 left-0 right-0 bg-[#f5f5f5] backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/New Wave Associates Square-2.png"
              alt="New Wave Associates Logo"
              className="h-12 w-auto"
            />
            <span className="text-[#38495D] font-semibold text-lg hidden sm:inline">New Wave Associates</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.page}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setDropdownOpen(item.page)}
                onMouseLeave={() => item.hasDropdown && setDropdownOpen(null)}
              >
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`text-sm font-medium transition-all hover:text-[#01A3DB] relative group flex items-center gap-1 ${
                    currentPage === item.page ? 'text-[#01A3DB]' : 'text-[#38495D]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01A3DB] transition-all group-hover:w-full"></span>
                </button>
                {item.hasDropdown && dropdownOpen === item.page && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem.anchor}
                        onClick={() => handleDropdownNavigation(item.page, dropdownItem.anchor)}
                        className="w-full text-left px-4 py-2 text-sm text-[#38495D] hover:bg-gray-50 hover:text-[#01A3DB] transition-colors"
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
              <div key={item.page}>
                <button
                  onClick={() => {
                    if (!item.hasDropdown) {
                      onNavigate(item.page);
                      setMobileMenuOpen(false);
                    } else {
                      setDropdownOpen(dropdownOpen === item.page ? null : item.page);
                    }
                  }}
                  className={`text-left text-sm font-medium transition-colors hover:text-[#01A3DB] flex items-center gap-1 ${
                    currentPage === item.page ? 'text-[#01A3DB]' : 'text-[#38495D]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.hasDropdown && dropdownOpen === item.page && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem.anchor}
                        onClick={() => {
                          handleDropdownNavigation(item.page, dropdownItem.anchor);
                          setMobileMenuOpen(false);
                          setDropdownOpen(null);
                        }}
                        className="text-left text-sm text-[#38495D] hover:text-[#01A3DB] transition-colors"
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
