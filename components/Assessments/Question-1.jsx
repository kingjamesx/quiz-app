import RadioInput from './radio-input';
import { useState } from 'react';

const OPTIONS = [
  { id: 1, label: 'I’ve built a simple/ small project' },
  { id: 2, label: 'I have basic some technical skills' },
  { id: 3, label: 'I just know their names' },
  { id: 4, label: 'I have no idea' },
];

const QuestionOne = () => {
  const [selected, setSelected] = useState(null);

  const handleChange = id => {
    if (selected === id) {
      return setSelected(selected);
    }

    setSelected(id);
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold font-mont mb-10 md:mb-16 md:text-[2rem]">
        How much do you know of tech?
      </h2>
      <div className="text-xl text-center mx-auto">
        <div className="grid grid-cols-2 max-w-[27rem] mx-auto justify-center gap-7 md:gap-5 xl:grid-cols-4 xl:max-w-none">
          {OPTIONS.map(option => (
            <RadioInput
              label={option.label}
              option={option.id}
              onChange={handleChange}
              onSelect={selected}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionOne;
