import { useState, useEffect } from 'react';

function useWindowResize() {
  const [windowSize, setWindowSize] = useState(
    window.innerWidth
//     {
//     width: window.innerWidth,
//     height: window.innerHeight
//   }
  );

  useEffect(() => {
    // Update windowSize state when the window is resized
    const handleResize = () => {
      setWindowSize(
        window.innerWidth
    //     {
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   }
      );
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to only run the effect once

  return windowSize;
}

export default useWindowResize;