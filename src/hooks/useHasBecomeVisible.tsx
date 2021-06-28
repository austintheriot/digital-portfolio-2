import { RefObject, useMemo } from 'react';
import useIntersectionObserver, {
  ObserverCallback,
} from './useIntersectionObserver';
import useStateIfMounted from './useStateIfMounted';

/**
 * Triggers when even the smallest fraction of the element comes into view.
 */
const DEFAULT_THRESHOLD = 0 as const;

/**
 * Waits for the given threshold of a component to come into view,
 * and then triggers a state change. Stops listening after the
 * state is updated, so no more re-renders occur after the component
 * becomes visible.
 */
export function useHasBecomeVisible<ElementType extends HTMLElement>(
  threshold: number = DEFAULT_THRESHOLD,
): [ref: RefObject<ElementType>, hasBecomeVisible: boolean] {
  const [hasBecomeVisible, setHasBecomeVisible] = useStateIfMounted(false);
  const handleVisibility: ObserverCallback = (visibility, observer) => {
    if (visibility) {
      setHasBecomeVisible(visibility);
      // stop listening after visibility becomes true
      observer?.disconnect();
    }
  };
  const options = useMemo(() => ({ threshold }), []);
  const ref = useIntersectionObserver<ElementType>(handleVisibility, options);
  return [ref, hasBecomeVisible];
}
