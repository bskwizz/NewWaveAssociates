import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import EmailCaptureModal from './EmailCaptureModal';
import { persistUnlock, recordLead } from '../services/leadCaptureService';

type NavVariant = 'link' | 'primary' | 'secondary';

interface NavItem {
  label: string;
  path: string;
  isActive: (p: string) => boolean;
  variant: NavVariant;
}

const navItems: NavItem[] = [
  {
    label: 'Solutions',
    path: '/solutions',
    isActive: (p: string) => p === '/solutions',
    variant: 'link',
  },
  {
    label: 'Results',
    path: '/results',
    isActive: (p: string) =>
      p === '/results' ||
      p === '/case-studies' ||
      p.startsWith('/case-studies/') ||
      p.startsWith('/case-study-') ||
      p.startsWith('/hub-'),
    variant: 'link',
  },
  {
    label: 'Insights',
    path: '/insights',
    isActive: (p: string) => p.startsWith('/insights'),
    variant: 'link',
  },
  {
    label: 'About',
    path: '/about',
    isActive: (p: string) => p === '/about',
    variant: 'link',
  },
  {
    label: 'Join Our Network',
    path: '/executive-network',
    isActive: (p: string) => p === '/executive-network',
    variant: 'secondary',
  },
  {
    label: 'Contact',
    path: '/contact',
    isActive: (p: string) => p === '/contact',
    variant: 'primary',
  },
];

export default function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const { pathname } = useLocation();
  async function handleSubscribeSubmit(email: string) {
    persistUnlock(email);
    await recordLead({ email, source: 'subscribe_header', url: window.location.href });
  }

  return (
    <>
    <div className="w-full pt-6 pb-3 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/new_wave_associates_horizontal_trimmed.png"
              alt="New Wave Associates"
              className="h-11 sm:h-12 lg:h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const active = item.isActive(pathname);

              if (item.variant === 'primary') {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-6 py-3 bg-[#f05e00] text-white text-base font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.variant === 'secondary') {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-6 py-3 border border-[#01A3DB] text-[#01A3DB] text-base font-semibold rounded-md hover:bg-[#01A3DB] hover:text-white transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-all hover:text-[#01A3DB] relative group ${
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

              if (item.variant === 'primary') {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-5 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f05e00] focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.variant === 'secondary') {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-5 py-2.5 border border-[#01A3DB] text-[#01A3DB] text-sm font-semibold rounded-md hover:bg-[#01A3DB] hover:text-white transition-all shadow-sm hover:shadow-md text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A3DB] focus-visible:ring-offset-2"
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

    {showSubscribeModal && (
      <EmailCaptureModal
        context="subscribe_header"
        onSubmit={handleSubscribeSubmit}
        onClose={() => setShowSubscribeModal(false)}
      />
    )}
    </>
  );
}
