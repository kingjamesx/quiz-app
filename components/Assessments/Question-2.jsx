import { useState } from 'react';
import QuestionHeaders from './UI/h-questions';
import InputLabel from './UI/input-label';

const OPTIONS = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'CSS' },
  { id: 3, label: 'Javascript' },
  { id: 4, label: 'Python' },
  { id: 5, label: 'UI' },
  { id: 6, label: 'Adobe suite' },
  { id: 7, label: 'Webflow Bubble Wordpress' },
  { id: 8, label: 'Excel' },
  { id: 9, label: 'Ruby' },
  { id: 10, label: 'Vue' },
  { id: 11, label: 'React' },
  { id: 12, label: 'PHP' },
];

const QuestionTwo = () => {
  const [checked, setChecked] = useState([]);

  const handleCheckChange = data => {
    const currentIndex = checked.indexOf(data);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(data);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <QuestionHeaders para="Select all that apply">
        What languages/programs do you know?
      </QuestionHeaders>
      <div className="grid grid-cols-1 max-w-[27rem] mx-auto justify-center gap-7 md:gap-5 md:grid-cols-3 xl:grid-cols-6 xl:max-w-none">
        {OPTIONS.map(option => (
          <div key={option.id}>
            <InputLabel
              htmlFor={option.id}
              className={`px-5 h-14 ${
                checked.includes(option) ? 'bg-primary-2/500' : 'bg-primary-2/0'
              } md:h-[8.125rem]`}
            >
              <input
                type="checkbox"
                id={option.id}
                onChange={() => handleCheckChange(option)}
                hidden
              />
              <p className="text-sm text-center xl:text-xl">{option.label}</p>
            </InputLabel>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionTwo;
