import { useState } from 'react';

const RadioInput = props => {
  const { label, className, option, onChange, onSelect } = props;

  const classes =
    `w-[10rem] text-sm px-7 flex justify-center items-center h-full md:px-0 md:w-[10rem] md:text-base xl:w-[17rem] ` +
    className;

  return (
    <div
      className={`rounded-r-[1.25rem] rounded-bl-[1.25rem] h-[136px] ${
        onSelect === option ? 'bg-primary-2/500' : 'bg-primary-2/0'
      }`}
    >
      <label htmlFor={option}>
        <input
          type="radio"
          name="question1-option"
          id={option}
          value={option}
          onChange={() => onChange(option)}
          hidden
        />
        <p className={classes}>{label}</p>
      </label>
    </div>
  );
};

export default RadioInput;
