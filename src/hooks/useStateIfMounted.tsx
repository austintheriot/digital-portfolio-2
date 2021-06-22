import {
  Dispatch, SetStateAction, useCallback, useEffect, useRef, useState,
} from 'react';

/**
 * Updates state ifa component is still mounted to the DOM.
 * Prevents memory leaks when state is updated asynchronously.
 */
export default function useStateIfMounted<S>(defaultState: S) {
  const isMounted = useRef(true);
  const [state, setState] = useState<S>(defaultState);
  const setStateIfMounted: Dispatch<SetStateAction<S>> = useCallback(
    ((newState) => isMounted.current && setState(newState)), [],
  );
  useEffect(() => () => { if (isMounted.current) isMounted.current = false; }, []);
  return [state, setStateIfMounted] as const;
}
