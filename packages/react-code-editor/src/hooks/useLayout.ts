import { useState, useEffect } from "react";

export function useLayout() {
  const [isVertical, setIsVertical] = useState(true);
  const [splitPosition, setSplitPosition] = useState(50);

  const toggleLayout = () => {
    setIsVertical(!isVertical);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && !isVertical) {
        setIsVertical(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isVertical]);

  return { isVertical, toggleLayout, splitPosition, setSplitPosition };
}
