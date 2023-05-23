const NegativeThree = props => {
  const { question } = props;

  let fill = 'none';

  if (question === 'Negative-3') {
    fill = '#048481';
  }

  return (
    <svg
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

export default NegativeThree;
