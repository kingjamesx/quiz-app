const PositiveTwo = props => {
  const { question } = props;

  let fill = 'none';

  if (question === 'Positive-2') {
    fill = '#CC6B1F';
  }

  return (
    <svg
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

export default PositiveTwo;
