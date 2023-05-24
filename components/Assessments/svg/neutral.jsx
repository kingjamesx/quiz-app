import useWindowResize from '@/components/hooks/window-resize';

const Neutral = props => {
  const { question } = props;
  const windowSize = useWindowResize();
  const md = 768;

  let fill = 'none';

  if (question === 'Neutral') {
    fill = '#91888B';
  }

  const BigSvg = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10.5" stroke="#91888B" strokeWidth="3" />
      </svg>
    );
  };

  const SmallSvg = () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="6.5" stroke="#91888B" strokeWidth="3" />
      </svg>
    );
  };

  return windowSize >= md ? <BigSvg /> : <SmallSvg />;
};

export default Neutral;
