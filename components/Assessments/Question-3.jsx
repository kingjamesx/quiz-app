import useHandleChange from '../hooks/use-handle-change';
import QuestionHeaders from './UI/h-questions';
import RadioInput from './radio-input';

const OPTIONS = [
  { id: 1, label: 'Movies' },
  { id: 2, label: 'Video games' },
  { id: 3, label: 'Reading/ Writing' },
  { id: 4, label: 'Boardgames/ Puzzles' },
];

const QuestionThree = () => {
  const { handleChange, selected } = useHandleChange();

  return (
    <>
      <QuestionHeaders>
        What’s your favourite thing to do for fun?
      </QuestionHeaders>
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

export default QuestionThree;
