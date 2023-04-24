const RadioInput = props => {
  const { label, className } = props;
  const classes =
    'w-[10rem] text-sm px-7 flex justify-center items-center h-full md:px-0 md:w-[10rem] md:text-base xl:w-[17rem] ' +
    className;
  return (
    <div className="bg-primary-2/0 rounded-r-[1.25rem] rounded-bl-[1.25rem] h-[136px]">
      <label htmlFor="option1">
        <input type="radio" name="question1" id="option1" hidden />
        <p className={classes}>{label}</p>
      </label>
    </div>
  );
};

export default RadioInput;
