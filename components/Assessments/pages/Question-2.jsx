import QuestionHeaders from '../UI/h-questions';

const QuestionTwo = props => {
  const { QUESTIONS, question, setQuestion } = props;

  const handleCheckChange = id => {
    const currentIndex = question.indexOf(id);
    const newChecked = [...question];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setQuestion(newChecked);
  };

  return (
    <>
      <QuestionHeaders para={QUESTIONS.instruction}>
        {QUESTIONS.prompts}
      </QuestionHeaders>
      <div className="mx-auto grid max-w-[27rem] grid-cols-1 justify-center gap-7 md:grid-cols-3 md:gap-5 xl:max-w-none xl:grid-cols-6">
        {QUESTIONS.options.map(option => (
          <button
            key={option.id}
            className={`${
              question.includes(option.id)
                ? 'bg-primary-2/500'
                : 'bg-primary-2/0'
            } flex h-14 items-center justify-center rounded-r-[1.25rem] rounded-bl-[1.25rem] px-5 md:h-[8.125rem]`}
            onClick={() => {
              handleCheckChange(option.id);
            }}
          >
            <p className="px-7 text-center text-sm md:w-52 md:px-0 md:text-base">
              {option.option}
            </p>
          </button>
        ))}
      </div>
    </>
  );
};

export default QuestionTwo;
