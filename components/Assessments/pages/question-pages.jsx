import QuestionOne from './Question-1';
import QuestionTwo from './Question-2';
import QuestionThree from './Question-3';
import QuestionFour from './Question-4';

const QuestionPages = props => {

  const {
    QUESTIONS,
    page,
    questionOne,
    setQuestionOne,
    questionTwo,
    setQuestionTwo,
    questionThree,
    setQuestionThree,
    questionFour,
    setQuestionFour,
  } = props;

  return (
    <>
      {page === 1 && (
        <QuestionOne
          QUESTIONS={QUESTIONS[page - 1]}
          page={page}
          question={questionOne}
          setQuestion={setQuestionOne}
        />
      )}
      {page === 2 && (
        <QuestionTwo
          QUESTIONS={QUESTIONS[page - 1]}
          page={page}
          question={questionTwo}
          setQuestion={setQuestionTwo}
        />
      )}
      {page === 3 && (
        <QuestionThree
          QUESTIONS={QUESTIONS[page - 1]}
          page={page}
          question={questionThree}
          setQuestion={setQuestionThree}
        />
      )}
      {page === 4 && (
        <QuestionFour
          QUESTIONS={QUESTIONS[page - 1]}
          page={page}
          question={questionFour}
          setQuestion={setQuestionFour}
        />
      )}
    </>
  );
};

export default QuestionPages;
