import {
  MutableRefObject, RefObject, useCallback, useEffect, useRef,
} from 'react';

const defaultOptions: IntersectionObserverInit = { threshold: 0, root: null };

export type ObserverCallback = (
  isVisible: boolean, currentObserver: IntersectionObserver | null
) => void;

export default function useIntersectionObserver<ElementType extends HTMLElement>(
  callback: ObserverCallback,
  options: Partial<IntersectionObserverInit> = defaultOptions,
) {
  const ref = useRef<ElementType>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => callback(entry.isIntersecting, observerRef.current));
  }, [callback]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(onIntersect, { ...defaultOptions, ...options });
    if (ref.current) {
      observerRef.current.observe(ref.current);
    }
    return () => observerRef.current?.disconnect();
  }, [options, onIntersect]);

  return ref;
}
