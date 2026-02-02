interface PageHeaderProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export default function PageHeader({ onNavigate, currentPage }: PageHeaderProps) {
  const navItems = [
    { label: 'The Flywheel', page: 'flywheel' },
    { label: 'Services', page: 'capabilities' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Contact Us', page: 'contact-us' },
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-opacity">
            <img
              src={`${import.meta.env.BASE_URL}new_wave_associates_logo_only.png`}
              alt="New Wave Associates"
              className="h-16 md:h-20 w-auto"
            />
          </button>

          <div className="flex items-center gap-8">
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
        </div>
      </div>
    </div>
  );
}
