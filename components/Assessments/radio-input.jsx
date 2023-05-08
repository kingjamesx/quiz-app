import InputLabel from './UI/input-label';

const RadioInput = props => {
  const { label, className, option, onChange, onSelect } = props;

  const classes =
    `text-sm px-7 text-center md:px-0 md:text-base md:w-52 ` + className;

  return (
    <div>
      <InputLabel
        htmlFor={option}
        className={`h-[6.25rem] ${
          onSelect === option ? 'bg-primary-2/500' : 'bg-primary-2/0'
        } xl:h-[12.5rem]`}
      >
        <input
          type="radio"
          name="question1-option"
          id={option}
          value={option}
          onChange={() => onChange(option)}
          hidden
        />
        <p className={classes}>{label}</p>
      </InputLabel>
      {/* <label
        htmlFor={option}
        className={`rounded-r-[1.25rem] h-[6.25rem] rounded-bl-[1.25rem] flex justify-center items-center ${
          onSelect === option ? 'bg-primary-2/500' : 'bg-primary-2/0'
        } xl:h-[12.5rem]`}
      >
        
      </label> */}
    </div>
  );
};

export default RadioInput;
