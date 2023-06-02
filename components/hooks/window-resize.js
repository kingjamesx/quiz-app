import { useState, useEffect } from 'react';

function useWindowResize() {
  const [windowSize, setWindowSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Update windowSize state when the window is resized
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowResize;
