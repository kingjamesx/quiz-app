import useWindowResize from '@/components/hooks/window-resize';
import { useState } from 'react';

const PositiveTwo = props => {
  const { question } = props;
  const [hover, setHover] = useState(false);
  const windowSize = useWindowResize();
  const md = 768;

  let fill = 'none';

  if (hover) {
    fill = '#CDE6E6';
  }

  if (question === 'Positive-2') {
    fill = '#048481';
  }

  const BigSvg = () => {
    return (
      <svg
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="22.5" stroke="#048481" strokeWidth="3" />
      </svg>
    );
  };

  const SmallSvg = () => {
    return (
      <svg
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="14.5" stroke="#048481" strokeWidth="3" />
      </svg>
    );
  };

  return windowSize >= md ? <BigSvg /> : <SmallSvg />;
};

export default PositiveTwo;
