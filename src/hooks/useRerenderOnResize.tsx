import { debounce } from 'lodash';
import { useEffect, useRef } from 'react';
import useStateIfMounted from './useStateIfMounted';

/**
 * HACKY: unmount and remount animations to get new dimension calculations.
 * Only do this when the new WIDTH does not equal the prev WIDTH
 * -- do not re-render when new height does not equal prev height
 * (this prevents mobile bug, since mobile height adjusts frequently on scroll)
 */
export default function useRerenderOnResize() {
  const [show, setShow] = useStateIfMounted(true);
  const prevWidth = useRef(window.innerWidth);

  useEffect(() => {
    const toggleShow = () => setShow((bool) => !bool);
    const onResize = debounce(
      () => {
        if (prevWidth.current !== window.innerWidth) {
          prevWidth.current = window.innerWidth;
          toggleShow();
          setTimeout(toggleShow, 0);
        }
      },
      500,
      { leading: false },
    );
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return [show];
}
