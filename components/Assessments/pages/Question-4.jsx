import QuestionHeaders from '../UI/h-questions';

const QuestionFour = props => {
  const { QUESTIONS } = props;
  
  return (
    <>
      <QuestionHeaders>{QUESTIONS.prompts}</QuestionHeaders>
      <div>
        <p className="text-xl font-bold">Completely</p>
        <p className="text-xl font-bold">Hardly</p>
      </div>
    </>
  );
};

export default QuestionFour;
