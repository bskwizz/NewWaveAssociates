import { useState, useEffect } from 'react';
import CTABar from '../components/CTABar';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const heroSlides = [
  {
    title: 'Experience',
    subtext: 'Operators first. Consultants second. We install the discipline that turns strategy into measurable lift.',
  },
  {
    title: 'Partnership',
    subtext: 'We work inside your world, not above it. Your team, your systems — stronger when we exit.',
  },
  {
    title: 'Growth',
    subtext: "Clarity, cadence, and measurable outcomes — that's how growth compounds.",
  },
  {
    title: 'Actionable Insights',
    subtext: 'Data becomes decisions. Decisions become outcomes. Outcomes compound.',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#0B4F6C] via-[#01497C] to-[#01A3DB]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ${
                index === currentSlide && !isTransitioning
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="max-w-2xl">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                  {slide.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
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
