import { MutableRefObject, useRef } from 'react';

/**
 * Scrolls immediately to a given element.
 */
export const useScroll = <ElementType extends HTMLElement>(): [
	executeScroll: () => void,
	htmlElRef: MutableRefObject<ElementType | null>,
] => {
  const htmlElRef = useRef<ElementType | null>(null);
  const executeScroll = () => window.scrollTo({
    left: 0,
    top: (htmlElRef.current?.offsetTop || 0) - 50,
    behavior: 'auto',
  });

  return [executeScroll, htmlElRef];
};
