import { useState, useEffect } from 'react';
import CTABar from '../components/CTABar';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const heroSlides = [
  {
    title: 'Grow',
    subtext: 'New Wave Associates accelerates portfolio growth by unlocking new revenue engines and enabling businesses to scale with precision and purpose.',
  },
  {
    title: 'Optimize',
    subtext: 'New Wave Associates drives operational excellence by streamlining complexity, expanding margins, and strengthening enterprise value across the portfolio.',
  },
  {
    title: 'Transform',
    subtext: 'New Wave Associates leads bold transformation by aligning people, processes, and technology to create lasting impact and outperform expectations.',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 180);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="hero relative h-screen overflow-hidden" style={{
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
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center" aria-live="polite">
          <div id="hero-rotator" className="hero-rotator max-w-2xl">
            <h1 className={`hero-title text-6xl md:text-7xl font-bold text-[#38495D] mb-6 leading-tight ${isVisible ? 'is-visible' : ''}`}>
              {heroSlides[currentSlide].title}
            </h1>
            <p className={`hero-subtext text-xl md:text-2xl text-[#38495D] leading-relaxed ${isVisible ? 'is-visible' : ''}`}>
              {heroSlides[currentSlide].subtext}
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#01A3DB] w-8' : 'bg-[#38495D]/30'
              }`}
            />
          ))}
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
