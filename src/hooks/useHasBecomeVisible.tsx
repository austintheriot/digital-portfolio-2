import { RefObject, useEffect, useMemo } from 'react';
import useIntersectionObserver, { ObserverCallback } from './useIntersectionObserver';
import useStateIfMounted from './useStateIfMounted';

/**
 * Triggers when even the smallest fraction of the element comes into view.
 */
const DEFAULT_THRESHOLD = 0 as const;

export function useHasBecomeVisible<T extends HTMLElement>(threshold: number = DEFAULT_THRESHOLD):
[ref: RefObject<T>, hasBecomeVisible: boolean] {
  const [hasBecomeVisible, setHasBecomeVisible] = useStateIfMounted(false);
  const handleVisibility: ObserverCallback = (visibility, observer) => {
    if (visibility) {
      setHasBecomeVisible(visibility);
      // stop listening after visibility becomes true
      observer?.disconnect();
    }
  };
  const options = useMemo(() => ({ threshold }), []);
  const ref = useIntersectionObserver<T>(handleVisibility, options);
  return [ref, hasBecomeVisible];
}
