const Neutral = props => {
  const { question } = props;

  let fill = 'none';

  if (question === 'Neutral') {
    fill = '#91888B';
  }

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

export default Neutral;
