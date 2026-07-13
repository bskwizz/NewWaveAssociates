import { useEffect, useRef, useState } from 'react';

// Fires once when the referenced element first scrolls into view. Returns the
// ref to attach and a boolean that flips true (and stays true) on first sight.
// Falls back to true immediately if IntersectionObserver is unavailable.
export function useInViewOnce<T extends Element>(
  options: IntersectionObserverInit = { threshold: 0.25 }
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}
