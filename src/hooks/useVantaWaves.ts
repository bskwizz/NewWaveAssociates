import { useEffect, useRef } from 'react';

interface VantaWavesOptions {
  waveHeight?: number;
  waveSpeed?: number;
  zoom?: number;
}

declare global {
  interface Window {
    THREE?: any;
    VANTA?: {
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
    if (!containerRef.current) {
      console.log('No container ref');
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    console.log('Vanta init check:', { reduceMotion, hasVanta: !!window.VANTA });

    if (reduceMotion) {
      if (containerRef.current) {
        containerRef.current.style.background = 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFD 100%)';
      }
      return;
    }

    const initVanta = () => {
      if (!window.THREE) {
        console.log('THREE.js not available');
        return;
      }
      if (!window.VANTA) {
        console.log('VANTA not available');
        return;
      }
      if (!containerRef.current) {
        console.log('Container ref lost');
        return;
      }

      try {
        console.log('Initializing Vanta WAVES with THREE', window.THREE);
        const baseOptions = {
          el: containerRef.current,
          THREE: window.THREE,
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
        console.log('Vanta initialized successfully');
      } catch (error) {
        console.error('Vanta initialization failed:', error);
        if (containerRef.current) {
          containerRef.current.style.background = 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFD 100%)';
        }
      }
    };

    if (window.VANTA && window.THREE) {
      initVanta();
    } else {
      console.log('Waiting for VANTA and THREE to load...');
      let attempts = 0;
      const checkVanta = setInterval(() => {
        attempts++;
        if (window.VANTA && window.THREE) {
          console.log('VANTA and THREE loaded after', attempts, 'attempts');
          clearInterval(checkVanta);
          initVanta();
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkVanta);
        console.log('VANTA/THREE load timeout after', attempts, 'attempts');
      }, 5000);
    }

    return () => {
      if (vantaRef.current) {
        try {
          vantaRef.current.destroy();
          console.log('Vanta destroyed');
        } catch (error) {
          console.warn('Vanta cleanup failed:', error);
        }
      }
    };
  }, [options.waveHeight, options.waveSpeed, options.zoom]);

  return containerRef;
}
