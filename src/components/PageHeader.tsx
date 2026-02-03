interface PageHeaderProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export default function PageHeader({ onNavigate, currentPage }: PageHeaderProps) {
  const navItems = [
    { label: 'Our Services', page: 'our-services' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Contact Us', page: 'contact-us' },
  ];

  return (
    <div className="w-full py-8 relative z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-opacity">
            <img
              src="/new_wave_associates_horizontal.png"
              alt="New Wave Associates"
              className="h-[108px] md:h-[126px] w-auto"
            />
          </button>

          <div className="flex items-center gap-12">
            {navItems.map((item) => {
              const isContactUs = item.page === 'contact-us';

              if (isContactUs) {
                return (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className="px-6 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
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
                    currentPage === item.page ? 'text-[#01A3DB]' : 'text-[#38495D]'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01A3DB] transition-all group-hover:w-full"></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
