import { debounce } from 'lodash';
import { useEffect } from 'react';
import useStateIfMounted from './useStateIfMounted';

/**
 * HACKY: unmount and remount animations to get new dimension calculations.
 */
export default function useRerenderOnResize() {
  const [show, setShow] = useStateIfMounted(true);
  useEffect(() => {
    const toggleShow = () => setShow((bool) => !bool);
    const onResize = debounce(
      () => {
        toggleShow();
        setTimeout(toggleShow, 0);
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
