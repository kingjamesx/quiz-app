import useHandleChange from '../hooks/use-handle-change';
import QuestionHeaders from './UI/h-questions';
import RadioInput from './radio-input';

const OPTIONS = [
  { id: 1, label: 'I’ve built a simple/ small project' },
  { id: 2, label: 'I have basic some technical skills' },
  { id: 3, label: 'I just know their names' },
  { id: 4, label: 'I have no idea' },
];

const QuestionOne = () => {
  const { handleChange, selected } = useHandleChange();

  return (
    <>
      <QuestionHeaders>How much do you know of tech?</QuestionHeaders>
      <div className="text-xl text-center mx-auto">
        <div className="grid grid-cols-2 max-w-[27rem] mx-auto justify-center gap-7 md:gap-5 xl:grid-cols-4 xl:max-w-none">
          {OPTIONS.map(option => (
            <RadioInput
              key={option.id}
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
