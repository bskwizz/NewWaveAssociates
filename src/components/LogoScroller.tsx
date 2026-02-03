import { useEffect, useRef } from 'react';

interface LogoScrollerProps {
  logos?: string[];
}

export default function LogoScroller({ logos = [] }: LogoScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerInner = scroller.querySelector('.logo-scroller-inner') as HTMLElement;
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      scrollerInner.appendChild(duplicatedItem);
    });
  }, [logos]);

  const placeholderLogos = logos.length > 0 ? logos : [
    'Logo 1',
    'Logo 2',
    'Logo 3',
    'Logo 4',
    'Logo 5',
    'Logo 6',
  ];

  return (
    <div className="logo-scroller-wrapper w-full flex items-center overflow-hidden">
      <div ref={scrollerRef} className="logo-scroller w-full">
        <div className="logo-scroller-inner flex gap-12 items-center">
          {placeholderLogos.map((logo, index) => (
            <div
              key={index}
              className="logo-scroller-item flex-shrink-0 flex items-center justify-center"
              style={{ width: '160px', height: '80px' }}
            >
              {typeof logo === 'string' && !logo.startsWith('/') && !logo.startsWith('http') ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200">
                  <span className="text-gray-400 text-sm font-medium">{logo}</span>
                </div>
              ) : (
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .logo-scroller {
          width: 100%;
          overflow: hidden;
        }

        .logo-scroller-inner {
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .logo-scroller-inner:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-scroller-inner {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
