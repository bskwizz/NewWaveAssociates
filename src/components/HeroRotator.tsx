import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Rotating headline lines, each split into segments so a phrase can be
// emphasized (bold) against the lighter base weight. Always leads with the
// first line so the prerendered first paint is deterministic.
const HEADLINES = [
  [
    { t: 'When the path' },
    { t: "isn't clear,", br: true },
    { t: 'we build', bold: true, br: true },
    { t: ' one.' },
  ],
  [
    { t: 'Small team, senior operators, outsized ' },
    { t: 'results', bold: true },
    { t: '.' },
  ],
  [
    { t: 'We ' },
    { t: 'own the outcome', bold: true },
    { t: ',' },
    { t: 'not just the', br: true },
    { t: 'recommendation.', br: true },
  ],
];

// Photo panel images. Placeholder paths for now; licensed, optimized ~1200px
// webp files get dropped into /public at these same names.
const HERO_IMAGES = [
  {
    src: '/hero-1.webp',
    alt: 'Operations team reviewing performance data together in a modern office',
  },
  {
    src: '/hero-2.webp',
    alt: 'Senior operator leading a working session at a whiteboard',
  },
  {
    src: '/hero-3.webp',
    alt: 'Procurement and finance leaders collaborating over a contract',
  },
];

// Hold each frame this long before advancing.
const ROTATE_MS = 4500;

export default function HeroRotator() {
  const [index, setIndex] = useState(0);

  // Single source of truth: one timer advances the headline, the photo, and the
  // overlay together. Respects reduced motion by never starting the timer.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HEADLINES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 items-center">
      {/* Left column: eyebrow, rotating headline, subhead, CTA */}
      <div id="hero-rotator" className="hero-rotator text-left order-1">
        <div className="inline-block mb-2">
          <div>
            <p
              className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2"
              style={{ letterSpacing: '0.25em' }}
            >
              The New Playbook<br />For Operational Leaders
            </p>
            <div className="h-[2px] bg-[#f05e00]"></div>
          </div>
        </div>

        {/* Rotating headline. All lines share one grid cell so the container sizes
            to the tallest line and swaps never reflow the column. */}
        <div className="grid mt-5 sm:mt-6 lg:mt-7">
          {HEADLINES.map((line, i) => (
            <h2
              key={i}
              aria-hidden={i !== index}
              className={`col-start-1 row-start-1 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight text-[#38495D] transition-opacity duration-500 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {line.map((seg, j) => (
                <Fragment key={j}>
                  {seg.br && <br />}
                  {seg.bold ? (
                    <strong className="font-extrabold">{seg.t}</strong>
                  ) : (
                    seg.t
                  )}
                </Fragment>
              ))}
            </h2>
          ))}
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4 sm:mt-5 lg:mt-6 max-w-xl">
          Operator-grade expertise in procurement, revenue operations, and transformation,
          for companies that need margins protected and growth unlocked.
        </p>

        <div className="mt-5 sm:mt-6 lg:mt-7">
          <Link
            to="/contact-us"
            className="inline-block px-5 py-2.5 bg-[#f05e00] text-white text-sm font-semibold rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Right column: rotating navy-duotone photo panel with orange trend line */}
      <div className="relative order-2">
        <div
          className="relative w-full rounded-lg overflow-hidden shadow-xl bg-[#38495D]"
          style={{ aspectRatio: '4 / 3' }}
        >
          {HERO_IMAGES.map((img, i) => (
            <div
              key={i}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'grayscale(1)' }}
                fetchPriority={i === 0 ? 'high' : 'low'}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              {/* Navy duotone: a brand-navy layer blended over the grayscale photo. */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: '#38495D', mixBlendMode: 'color' }}
              />
              {/* Gentle tint to unify the panel while keeping faces legible. */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(56,73,93,0.22)' }}
              />
            </div>
          ))}

          {/* Orange trend-line motif (brand image). Remounts on each rotation
              (key={index}) so it replots with a left-to-right reveal over the
              new photo. Decorative, so aria-hidden with empty alt. */}
          <img
            key={index}
            src="/hero-trendline.png"
            alt=""
            aria-hidden="true"
            className="hero-trendline absolute bottom-5 right-5 w-[58%] max-w-[420px] h-auto pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
}
