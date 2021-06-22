import {
  Dispatch, SetStateAction, useCallback, useEffect, useRef, useState,
} from 'react';

export default function useStateIfMounted<S>(defaultState: S) {
  const isMounted = useRef(true);
  const [state, setState] = useState<S>(defaultState);
  const setStateIfMounted: Dispatch<SetStateAction<S>> = useCallback(
    ((newState) => isMounted.current && setState(newState)), [],
  );
  useEffect(() => () => { if (isMounted.current) isMounted.current = false; }, []);
  return [state, setStateIfMounted] as const;
}
