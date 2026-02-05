import CTABar from '../components/CTABar';
import PageHeader from '../components/PageHeader';
import LogoScroller from '../components/LogoScroller';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="overflow-x-clip">
      <div className="hero relative min-h-screen lg:h-screen overflow-x-clip" style={{
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

        <PageHeader onNavigate={onNavigate} currentPage="home" />

        <div className="relative flex items-start pt-6 sm:pt-8 lg:pt-[2.5rem]">
          <div className="w-full flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 items-center">
                <div id="hero-rotator" className="hero-rotator text-left order-1">
                  <div className="inline-block mb-2">
                    <div>
                      <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2 animate-fade-in" style={{
                        letterSpacing: '0.25em'
                      }}>
                        The New Playbook<br />For Operational Leaders
                      </p>
                      <div className="h-[2px] bg-[#f05e00]"></div>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-left mt-4 sm:mt-5 lg:mt-6">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      We bring <em className="font-semibold not-italic">operator-grade expertise</em> in procurement, revenue operations, and transformation excellence to help lower and middle market companies protect margins, extract value from their vendor communities, and prepare for the future.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-visible order-2">
                  <img
                    src="/new_wave_process_graphic_(1).png"
                    alt="New Wave Associates Process"
                    className="w-full h-auto scale-110 sm:scale-115 md:scale-110 lg:scale-115 xl:scale-125 origin-center reveal-animation"
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#00a4dd] mt-8 sm:mt-10 lg:mt-12 h-12 sm:h-16 lg:h-[75px]"></div>
            <div className="w-full flex items-center justify-center py-6 sm:py-7 lg:py-8 overflow-hidden">
              <LogoScroller logos={[
                '/osg_logo.png',
                '/bridgeview_eye_logo.png',
                '/medius.png',
                '/neweratechnology.png',
                '/trustage.png',
                '/tenet_health_logo.png',
                '/hydrochem_logo.png',
                '/netsuite_logo.png',
                '/sentinel_logo.png',
              ]} />
            </div>
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
