const InputLabel = props => {
  const { children, htmlFor, className } = props;
  const classes =
    'rounded-r-[1.25rem] rounded-bl-[1.25rem] flex justify-center items-center ' +
    className;
  return (
    <label htmlFor={htmlFor} className={classes}>
      {children}
    </label>
  );
};

export default InputLabel;
