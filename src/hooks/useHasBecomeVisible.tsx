import { RefObject, useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import useStateIfMounted from './useStateIfMounted';

export function useHasBecomeVisible<T extends HTMLElement>():
[ref: RefObject<T>, hasBecomeVisible: boolean] {
  const [isVisible, setIsVisible] = useStateIfMounted(false);
  const handleVisibility = (visibility: boolean) => setIsVisible(visibility);
  const ref = useIntersectionObserver<T>(handleVisibility);
  const [hasBecomeVisible, setHasBecomeVisible] = useStateIfMounted(false);
  useEffect(() => {
    if (isVisible && !hasBecomeVisible) {
      setHasBecomeVisible(true);
    }
  }, [isVisible]);
  return [ref, hasBecomeVisible];
}
