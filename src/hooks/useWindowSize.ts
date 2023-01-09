import { useState, useEffect } from "react";
import { breakpoints } from "../../styles/utils/media";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
  isMobileScreen: boolean | undefined;
  isSmallScreen: boolean | undefined;
  isSmallestScreen: boolean | undefined;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    isMobileScreen: undefined,
    isSmallScreen: undefined,
    isSmallestScreen: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobileScreen: window.innerWidth <= breakpoints.mobile,
        isSmallScreen: window.innerWidth <= breakpoints.desktop,
        isSmallestScreen: window.innerWidth <= breakpoints.smallest,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
