import { useEffect, useRef } from 'react';

interface VantaWavesOptions {
  waveHeight?: number;
  waveSpeed?: number;
  zoom?: number;
}

declare global {
  interface Window {
    VANTA: {
      WAVES: (options: any) => {
        destroy: () => void;
      };
    };
  }
}

export function useVantaWaves(options: VantaWavesOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = Math.min(window.innerWidth, window.innerHeight) < 768;

    if (reduceMotion || isMobile) {
      if (containerRef.current) {
        containerRef.current.style.background = 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFD 100%)';
      }
      return;
    }

    const initVanta = () => {
      if (!window.VANTA || !containerRef.current) return;

      try {
        const baseOptions = {
          el: containerRef.current,
          color: 0x01A3DB,
          backgroundColor: 0xFFFFFF,
          shininess: 35.0,
          waveHeight: 16.0,
          waveSpeed: 0.65,
          zoom: 1.05,
          scale: 1.0,
          scaleMobile: 1.0,
          ...options,
        };

        vantaRef.current = window.VANTA.WAVES(baseOptions);
      } catch (error) {
        console.warn('Vanta initialization failed:', error);
        if (containerRef.current) {
          containerRef.current.style.background = 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFD 100%)';
        }
      }
    };

    if (window.VANTA) {
      initVanta();
    } else {
      const checkVanta = setInterval(() => {
        if (window.VANTA) {
          clearInterval(checkVanta);
          initVanta();
        }
      }, 100);

      setTimeout(() => clearInterval(checkVanta), 5000);
    }

    return () => {
      if (vantaRef.current) {
        try {
          vantaRef.current.destroy();
        } catch (error) {
          console.warn('Vanta cleanup failed:', error);
        }
      }
    };
  }, [options.waveHeight, options.waveSpeed, options.zoom]);

  return containerRef;
}
