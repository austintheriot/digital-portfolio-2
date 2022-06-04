import { useRef, useEffect } from 'react';

/**
 * Stores the previous value given to it.
 */
// eslint-disable @typescript-eslint/no-unnecessary-type-constraint
const usePrevious = <Value extends unknown>(value: Value) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
