import { useEffect, useRef, useState } from 'react';

export function useIntersection(opts?: IntersectionObserverInit) {
  const ref = useRef<Element | null>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setIntersecting(e.isIntersecting), opts);
    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return [ref, isIntersecting] as const;
}
