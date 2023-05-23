const NegativeTwo = props => {
  const { question } = props;

  let fill = 'none';

  if (question === 'Negative-2') {
    fill = '#048481';
  }

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

export default NegativeTwo;
