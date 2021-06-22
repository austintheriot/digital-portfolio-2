import { MutableRefObject, useRef } from 'react';

/**
 * Scrolls smoothly to a givenelement.
 */
export const useSmoothScroll = <T extends HTMLElement>():
  [executeSmoothScroll: () => void, htmlElRef: MutableRefObject<T | null>] => {
  const htmlElRef = useRef<T | null>(null);
  const executeSmoothScroll = () => window.scrollTo({
    left: 0,
    top: (htmlElRef.current?.offsetTop || 0) - 50,
    behavior: 'smooth',
  });

  return [executeSmoothScroll, htmlElRef];
};
