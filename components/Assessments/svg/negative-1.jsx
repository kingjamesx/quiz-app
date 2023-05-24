import useWindowResize from '@/components/hooks/window-resize';

const NegativeOne = props => {
  const { question } = props;
  const windowSize = useWindowResize();
  const md = 768;

  let fill = 'none';

  if (question === 'Negative-1') {
    fill = '#048481';
  }
  // console.log(windowSize);
  const BigSvg = () => {
    return (
      <svg
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
