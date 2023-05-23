const PositiveThree = props => {
  const { question } = props;

  let fill = 'none';

  if (question === 'Positive-3') {
    fill = '#CC6B1F';
  }

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="28.5" stroke="#048481" strokeWidth="3" />
    </svg>
  );
};

export default PositiveThree;
