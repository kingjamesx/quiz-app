import { useState } from 'react';

const RadioInput = props => {
  const { label, className, option, onChange, onSelect } = props;

  const classes =
    `text-sm px-7 text-center py-5 md:px-0 md:text-base md:py-10 md:w-52 ` +
    className;

  return (
    <div
      className={`rounded-r-[1.25rem] rounded-bl-[1.25rem] flex items-center ${
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
