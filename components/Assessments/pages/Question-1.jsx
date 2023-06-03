import QuestionHeaders from '../UI/h-questions';
import OptionButton from '../UI/option-button';

const QuestionOne = props => {
  const { QUESTIONS, question, setQuestion } = props;

  const handleClick = id => {
    setQuestion(id);
  };

  return (
    <>
      <QuestionHeaders>{QUESTIONS.prompts}</QuestionHeaders>
      <div className="mx-auto w-full text-center text-xl">
        <div className="mx-auto grid max-w-[27rem] grid-cols-2 justify-center gap-7 md:gap-5 xl:max-w-none xl:grid-cols-4">
          {QUESTIONS.options.map(option => (
            <div key={option.id}>
              <OptionButton
                onClick={() => {
                  handleClick(option.id);
                }}
                className="h-[6.25rem] xl:h-[12.5rem]"
                id={option.id}
                question={question}
              >
                {option.option}
              </OptionButton>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionOne;
