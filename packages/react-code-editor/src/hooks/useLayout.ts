import { useState, useEffect } from 'react';

export function useLayout() {
  const [isVertical, setIsVertical] = useState(false);
  const [key, setKey] = useState(0);

  const toggleLayout = () => {
    setIsVertical(!isVertical);
    setKey(prev => prev + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && !isVertical) {
        setIsVertical(true);
        setKey(prev => prev + 1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [isVertical]);

  return { isVertical, toggleLayout, key };
}