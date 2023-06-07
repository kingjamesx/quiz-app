import useWindowResize from '@/components/hooks/window-resize';
import { useState } from 'react';

const NegativeThree = props => {
  const { question } = props;
  const [hover, setHover] = useState(false);
  const windowSize = useWindowResize();
  const md = 768;

  let fill = 'none';

  if (hover) {
    fill = '#FCD5B6';
  }

  if (question === 'Negative-3') {
    fill = '#CC6B1F';
  }

  const BigSvg = () => {
    return (
      <svg
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="28.5" stroke="#CC6B1F" strokeWidth="3" />
      </svg>
    );
  };

  const SmallSvg = () => {
    return (
      <svg
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="18.5" stroke="#CC6B1F" strokeWidth="3" />
      </svg>
    );
  };

  return windowSize >= md ? <BigSvg /> : <SmallSvg />;
};

export default NegativeThree;
