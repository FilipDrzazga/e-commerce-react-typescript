import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [mediaMatches, setMediaMatches] = useState(false);
  useEffect(() => {
    const isMatches = window.matchMedia(query);
    if (isMatches.matches !== mediaMatches) {
      setMediaMatches(isMatches.matches);
    }
    const callback = () => setMediaMatches(isMatches.matches);
    addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, [mediaMatches, query]);
};

export default useMediaQuery;
