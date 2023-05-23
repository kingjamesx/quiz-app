import QuestionHeaders from '../UI/h-questions';
import NegativeOne from '../svg/negative-1';
import NegativeTwo from '../svg/negative-2';
import NegativeThree from '../svg/negative-3';
import Neutral from '../svg/neutral';
import PostiveOne from '../svg/positive-1';
import PositiveTwo from '../svg/positive-2';
import PositiveThree from '../svg/positive-3';

const QuestionFour = props => {
  const { QUESTIONS, setQuestion, question } = props;

  return (
    <>
      <QuestionHeaders>{QUESTIONS.prompts}</QuestionHeaders>
      <div className="mx-auto flex w-max flex-col items-center md:flex-row md:gap-5 xl:gap-12">
        <p className="hidden text-xl font-bold md:block">Completely</p>
        <div className="mb-5 flex items-center gap-1 md:mb-0 md:gap-5 xl:gap-12">
          <button
            onClick={() => {
              setQuestion('Positive-3');
            }}
          >
            <PositiveThree question={question} />
          </button>
          <button
            onClick={() => {
              setQuestion('Positive-2');
            }}
          >
            <PositiveTwo question={question} />
          </button>
          <button
            onClick={() => {
              setQuestion('Positive-1');
            }}
          >
            <PostiveOne question={question} />
          </button>
          <button
            onClick={() => {
              setQuestion('Neutral');
            }}
          >
            <Neutral question={question} />
          </button>
          <button
            onClick={() => {
              setQuestion('Negative-1');
            }}
          >
            <NegativeOne question={question} />
          </button>
          <button
            onClick={() => {
              setQuestion('Negative-2');
            }}
          >
            <NegativeTwo question={question} />
          </button>
          <button
            onClick={() => {
              setQuestion('Negative-3');
            }}
          >
            <NegativeThree question={question} />
          </button>
        </div>
        <p className="hidden text-xl font-bold md:block">Hardly</p>
        <div className="flex w-full justify-between">
          <p className="md:hidden">Completely</p>
          <p className="md:hidden">Hardly</p>
        </div>
      </div>
    </>
  );
};

export default QuestionFour;
