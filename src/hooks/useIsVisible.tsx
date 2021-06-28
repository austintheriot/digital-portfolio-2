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
 * and then triggers a state change. Re-triggers state change when
 * element goes out of view.
 */
export function useIsVisible<ElementType extends HTMLElement>(
  threshold: number = DEFAULT_THRESHOLD,
): [ref: RefObject<ElementType>, isVisible: boolean] {
  const [isVisible, setIsVisible] = useStateIfMounted(false);
  const handleVisibility: ObserverCallback = (visibility) => setIsVisible(visibility);
  const options = useMemo(() => ({ threshold }), []);
  const ref = useIntersectionObserver<ElementType>(handleVisibility, options);
  return [ref, isVisible];
}
