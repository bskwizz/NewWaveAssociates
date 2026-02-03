import CTABar from '../components/CTABar';
import PageHeader from '../components/PageHeader';
import LogoScroller from '../components/LogoScroller';

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

        <PageHeader onNavigate={onNavigate} currentPage="home" />

        <div className="relative flex items-start" style={{ paddingTop: '2.5rem' }}>
          <div className="w-full flex flex-col">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div id="hero-rotator" className="hero-rotator text-left">
                  <div className="inline-block mb-2">
                    <div>
                      <p className="text-black text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2 animate-fade-in" style={{
                        letterSpacing: '0.25em'
                      }}>
                        The New Playbook<br />For Operational Leaders
                      </p>
                      <div className="h-[2px] bg-[#f05e00]"></div>
                    </div>
                  </div>
                  <div className="space-y-4 text-left mt-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                      We bring <em className="font-semibold not-italic">operator-grade expertise</em> in procurement, revenue operations, and transformation excellence to help lower and middle market companies protect margins, extract value from their vendor communities, and prepare for the future.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-visible">
                  <img
                    src="/new_wave_process_graphic_(1).png"
                    alt="New Wave Associates Process"
                    className="w-full h-auto scale-125 origin-center reveal-animation"
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#00a4dd] mt-12" style={{height: '75px'}}></div>
            <div className="w-full flex items-center justify-center py-8">
              <LogoScroller logos={[
                '/osg_logo.png',
                '/bridgeview_eye_logo.png',
                '/medius.png',
                '/neweratechnology.png',
                '/trustage.png',
                '/tenet_health_logo.png',
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
