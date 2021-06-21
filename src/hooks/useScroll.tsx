import { MutableRefObject, useRef } from 'react';

// custom hook to scroll to an element indicated in url
export const useScroll = <T extends HTMLElement>(): [
	executeScroll: () => void,
	htmlElRef: MutableRefObject<T | null>,
] => {
  const htmlElRef = useRef<T | null>(null);
  const executeScroll = () => window.scrollTo({
    left: 0,
    top: (htmlElRef.current?.offsetTop || 0) - 50,
    behavior: 'auto',
  });

  return [executeScroll, htmlElRef];
};
