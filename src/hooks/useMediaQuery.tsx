import { useEffect, useState } from 'react';

/**
 * Updates state when a mediaQuery matches.
 */
export const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaMatch.onchange = handler;
    return () => {
      mediaMatch.onchange = null;
    };
  });
  return matches;
};
