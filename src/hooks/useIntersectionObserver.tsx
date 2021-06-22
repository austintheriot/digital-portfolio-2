import { useCallback, useEffect, useRef } from 'react';

const defaultOptions: IntersectionObserverInit = { threshold: 0, root: null };

export default function useIntersectionObserver<ElementType extends HTMLElement>(
  callback: (isInView: boolean) => void,
  options: Partial<IntersectionObserverInit> = defaultOptions,
) {
  const ref = useRef<ElementType>(null);

  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => callback(entry.isIntersecting));
  }, [callback]);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { ...defaultOptions, ...options });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [options, onIntersect]);

  return ref;
}
