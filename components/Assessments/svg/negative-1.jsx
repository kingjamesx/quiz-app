import useWindowResize from '@/components/hooks/window-resize';
import { useState } from 'react';

const NegativeOne = props => {
  const { question } = props;
  const [hover, setHover] = useState(false);
  const windowSize = useWindowResize();
  const md = 768;

  let fill = 'none';

  if (hover) {
    fill = '#FCD5B6';
  }

  if (question === 'Negative-1') {
    fill = '#CC6B1F';
  }
  // console.log(windowSize);
  const BigSvg = () => {
    return (
      <svg
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="16.5" stroke="#CC6B1F" strokeWidth="3" />
      </svg>
    );
  };

  const SmallSvg = () => {
    return (
      <svg
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10.5" stroke="#CC6B1F" strokeWidth="3" />
      </svg>
    );
  };

  return windowSize >= md ? <BigSvg /> : <SmallSvg />;
};

export default NegativeOne;
