import { useState } from 'react';
import { useRouter } from 'next/router';
import Buttons from '../UI/Button';
import { QUESTIONS } from '../../helpers/question-bank';
import QuestionPages from './question-pages';
import { ButtonLabel } from './question-layout-logic';

const QuestionLayout = () => {
  const [page, setPage] = useState(1);
  const [questionOne, setQuestionOne] = useState();
  const [questionTwo, setQuestionTwo] = useState([]);
  const [questionThree, setQuestionThree] = useState();
  const [questionFour, setQuestionFour] = useState();
  const [questionFive, setQuestionFive] = useState();

  const progress = (page / QUESTIONS.length) * 100;

  const label = ButtonLabel(page);

  const router = useRouter();

  const goBack = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      router.back();
    }
  };

  const answers = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
  ];

  const switchPage = () => {
    if (page !== QUESTIONS.length) setPage(page + 1);
    if (page === QUESTIONS.length) console.log(answers);
  };

  return (
    <>
      <div className="mx-auto mt-20 w-[87%]">
        <div className="mb-2 h-2 rounded-xl bg-Primary-2/50">
          <div
            style={{ width: `${progress}%` }}
            className="h-full rounded-xl bg-accent-2 transition-all"
          ></div>
        </div>
        <div className="mb-5 flex flex-col items-end gap-5 text-lg font-bold md:gap-10">
          <span>
            {page}/{QUESTIONS.length}
          </span>
          <button className="text-primary-2/400" onClick={switchPage}>
            Skip
          </button>
        </div>
        <QuestionPages
          QUESTIONS={QUESTIONS}
          page={page}
          questionOne={questionOne}
          setQuestionOne={setQuestionOne}
          questionTwo={questionTwo}
          setQuestionTwo={setQuestionTwo}
          questionThree={questionThree}
          setQuestionThree={setQuestionThree}
          questionFour={questionFour}
          setQuestionFour={setQuestionFour}
          questionFive={questionFive}
          setQuestionFive={setQuestionFive}
        />
        <div className="mx-auto mb-16 mt-32 flex max-w-[27rem] justify-between xl:max-w-none">
          <Buttons type="button" label="Back" onClick={goBack} />
          <Buttons type="button" label={label} onClick={switchPage} />
        </div>
      </div>
    </>
  );
};

export default QuestionLayout;
