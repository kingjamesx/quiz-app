const NegativeOne = props => {
  const { question } = props;

  let fill = 'none';

  if (question === 'Negative-1') {
    fill = '#048481';
  }
  
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

export default NegativeOne;
