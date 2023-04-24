const RadioInput = props => {
  const { label, className } = props;
  const classes = 'w-[17rem] ' + className;
  return (
    <div className="h-[136px] bg-primary-2/0 rounded-r-[1.25rem] rounded-bl-[1.25rem]">
      <label htmlFor="option1">
        <input type="radio" name="question1" id="option1" hidden />
        <p className={classes}>{label}</p>
      </label>
    </div>
  );
};

export default RadioInput;
