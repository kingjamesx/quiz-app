const PostiveOne = props => {
  const { question } = props;

  let fill = 'none';

  if (question === 'Positive-1') {
    fill = '#CC6B1F';
  }

  return (
    <svg
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

export default PostiveOne;
