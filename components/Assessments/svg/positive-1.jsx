import useWindowResize from '@/components/hooks/window-resize';
import { useState } from 'react';

const PostiveOne = props => {
  const { question } = props;
  const [hover, setHover] = useState(false);
  const windowSize = useWindowResize();
  const md = 768;

  let fill = 'none';

  if (hover) {
    fill = '#CDE6E6';
  }

  if (question === 'Positive-1') {
    fill = '#048481';
  }

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
        <circle cx="18" cy="18" r="16.5" stroke="#048481" strokeWidth="3" />
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
        <circle cx="12" cy="12" r="10.5" stroke="#048481" strokeWidth="3" />
      </svg>
    );
  };

  return windowSize >= md ? <BigSvg /> : <SmallSvg />;
};

export default PostiveOne;
