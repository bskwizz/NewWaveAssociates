import CTABar from '../components/CTABar';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {

  return (
    <div>
      <div className="hero relative h-screen" style={{
        background: `radial-gradient(1200px 600px at 15% -10%, rgba(1,163,219,0.25), transparent 50%),
                     radial-gradient(800px 400px at 85% 110%, rgba(56,73,93,0.25), transparent 50%),
                     linear-gradient(180deg, #f7f9fb 0%, #eef3f7 100%)`,
        overflow: 'visible'
      }}>
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, #38495d 100%, transparent 0),
                            radial-gradient(1px 1px at 70% 60%, #01a3db 100%, transparent 0),
                            radial-gradient(1px 1px at 40% 80%, #38495d 100%, transparent 0)`,
          backgroundSize: '120px 120px, 160px 160px, 200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>
        <div className="relative h-full flex items-center">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div id="hero-rotator" className="hero-rotator text-center">
                  <p className="hero-subtext text-xl md:text-2xl text-[#38495D] leading-relaxed is-visible mb-8">
                    We bring <em className="font-semibold not-italic">operator-grade expertise</em> in procurement, revenue operations, and transformation excellence to help lower and middle market companies and small providers protect margins, extract value from their vendor communities, and prepare for the future.
                  </p>
                  <div className="inline-block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f05e00] to-[#ff8c42] blur-xl opacity-30"></div>
                      <p className="relative text-[#f05e00] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2 animate-fade-in" style={{
                        textShadow: '0 0 20px rgba(240, 94, 0, 0.3)',
                        letterSpacing: '0.25em'
                      }}>
                        The New Playbook for Operational Leaders
                      </p>
                      <div className="h-[2px] bg-gradient-to-r from-[#f05e00] via-[#ff8c42] to-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/path-to-your-image.jpg"
                    alt="Hero image"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#00a4dd] mt-12" style={{height: '60px'}}></div>
          </div>
        </div>
      </div>

      <CTABar
        text="Learn more about New Wave solutions for your unique growth opportunity"
        buttonText="Contact Us"
        onButtonClick={() => onNavigate('contact-us')}
      />
    </div>
  );
}
