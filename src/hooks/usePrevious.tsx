import { useRef, useEffect } from 'react';

const usePrevious = <Value extends unknown>(value: Value) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
