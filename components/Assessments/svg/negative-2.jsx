import useWindowResize from '@/components/hooks/window-resize';

const NegativeTwo = props => {
  const { question } = props;
  const windowSize = useWindowResize();
  const md = 768;

  let fill = 'none';

  if (question === 'Negative-2') {
    fill = '#048481';
  }

  const BigSvg = () => {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="22.5" stroke="#CC6B1F" strokeWidth="3" />
      </svg>
    );
  };

  const SmallSvg = () => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="14.5" stroke="#CC6B1F" strokeWidth="3" />
      </svg>
    );
  };

  return windowSize >= md ? <BigSvg /> : <SmallSvg />;
};

export default NegativeTwo;
