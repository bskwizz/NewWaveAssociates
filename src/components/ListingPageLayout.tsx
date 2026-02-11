import { ReactNode } from 'react';
import PageHeader from './PageHeader';
import CTABar from './CTABar';

interface ListingPageLayoutProps {
  onNavigate: (page: string) => void;
  categoryLabel: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function ListingPageLayout({
  onNavigate,
  categoryLabel,
  title,
  subtitle,
  children
}: ListingPageLayoutProps) {
  return (
    <div className="overflow-x-clip">
      <div className="hero relative min-h-screen overflow-x-clip" style={{
        background: `radial-gradient(1200px 600px at 15% -10%, rgba(1,163,219,0.25), transparent 50%),
                     radial-gradient(800px 400px at 85% 110%, rgba(56,73,93,0.25), transparent 50%),
                     linear-gradient(180deg, #f7f9fb 0%, #eef3f7 100%)`
      }}>
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, #38495d 100%, transparent 0),
                            radial-gradient(1px 1px at 70% 60%, #01a3db 100%, transparent 0),
                            radial-gradient(1px 1px at 40% 80%, #38495d 100%, transparent 0)`,
          backgroundSize: '120px 120px, 160px 160px, 200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>

        <PageHeader />

        <div className="relative pt-6 sm:pt-8 lg:pt-[2.5rem] pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
            <div className="text-center mb-12">
              <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-3" style={{
                letterSpacing: '0.25em'
              }}>
                {categoryLabel}
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                {title}
              </h1>
              <p className="text-black text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                {subtitle}
              </p>
              <button
                onClick={() => onNavigate('contact-us')}
                className="mt-6 px-8 py-3 bg-[#f05e00] text-white font-semibold rounded hover:bg-[#d95500] transition-colors"
              >
                Get in touch
              </button>
            </div>

            <div className="space-y-12">
              {children}
            </div>
          </div>
        </div>
      </div>

      <CTABar
        text="Ready to discuss how we can help your organization?"
        buttonText="Contact Us"
        onButtonClick={() => onNavigate('contact-us')}
      />
    </div>
  );
}
