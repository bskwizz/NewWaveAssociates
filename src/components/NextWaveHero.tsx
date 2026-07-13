import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Buzzwords that scroll through after the fixed "Your Next Wave:" lead-in.
const WORDS = [
  'An acquisition.',
  'A turnaround.',
  'Rapid growth.',
  'A leadership gap.',
  'An integration.',
  'A transformation.',
  'An exit.',
];

// Hold each word this long before advancing.
const ROTATE_MS = 2000;

export default function NextWaveHero() {
  const [index, setIndex] = useState(0);

  // The previously-shown word. Read during render (holds the last committed
  // index) so the outgoing word can roll *up and out* while every other word
  // waits *below* — giving a true one-directional ticker roll.
  const prevRef = useRef(0);
  const prevIndex = prevRef.current;
  useEffect(() => {
    prevRef.current = index;
  }, [index]);

  // Advance the word on a timer. Respects reduced motion by never starting it,
  // and guards SSR/prerender where window is absent.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Brand wave mark, bled off the bottom-right corner as a soft watermark. */}
      <img
        src="/new_wave_associates_logo_only.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-[74%] sm:top-[60%] -translate-y-1/2 -right-16 sm:-right-24 lg:-right-28 w-[440px] sm:w-[620px] lg:w-[780px] opacity-[0.08]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 pt-20 sm:pt-32 lg:pt-40 pb-[288px] sm:pb-24 lg:pb-28">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-x-4">
          <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#38495D] leading-tight">
            Your Next Wave:
          </span>

          {/* All words share one grid cell, clipped so each word rolls up and
              out of the line while the next rises into place from below. */}
          <span className="grid overflow-hidden py-1 -my-1">
            {WORDS.map((word, i) => (
              <span
                key={word}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#f05e00] leading-tight will-change-transform transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  i === index
                    ? 'opacity-100 translate-y-0 blur-0'
                    : i === prevIndex
                    ? 'opacity-0 -translate-y-full blur-[3px]'
                    : 'opacity-0 translate-y-full blur-[3px]'
                }`}
              >
                {word}
              </span>
            ))}
          </span>
        </div>

        <p className="text-gray-700 text-xl sm:text-2xl font-normal mt-4 sm:mt-5 leading-relaxed">
          Get immediate access to top-tier operating experts<br />to unlock your market potential.
        </p>

        <div className="mt-6 sm:mt-7">
          <Link
            to="/contact-us"
            className="inline-block px-7 py-3.5 bg-[#f05e00] text-white text-base font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
