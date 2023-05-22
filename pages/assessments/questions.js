import Buttons from '@/components/Assessments/UI/Button';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { QUESTIONS } from '@/components/helpers/question-bank';
import QuestionPages from '@/components/Assessments/pages/question-pages';

const Questions = () => {
  const [page, setPage] = useState(1);
  const [questionOne, setQuestionOne] = useState();
  const [questionTwo, setQuestionTwo] = useState([]);
  const [questionThree, setQuestionThree] = useState();
  const [questionFour, setQuestionFour] = useState();

  const router = useRouter();
  const progress = (page / QUESTIONS.length) * 100;

  const goBack = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      router.back();
    }
  };

  const switchPage = () => {
    setPage(page + 1);
  };

  // const QuestionPages = () => {
  //   return (
  //     <>
  //       {page === 1 && (
  //         <QuestionOne QUESTIONS={QUESTIONS[page - 1]} page={page} />
  //       )}
  //       {page === 2 && (
  //         <QuestionTwo QUESTIONS={QUESTIONS[page - 1]} page={page} />
  //       )}
  //       {page === 3 && (
  //         <QuestionThree QUESTIONS={QUESTIONS[page - 1]} page={page} />
  //       )}
  //     </>
  //   );
  // };

  return (
    <section className="mx-auto md:max-w-none">
      <Header />
      <div className="w-[87%] mt-20 mx-auto">
        <div className="h-2 rounded-xl bg-Primary-2/50 mb-2">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-accent-2 rounded-xl transition-all"
          ></div>
        </div>
        <div className="flex gap-5 items-end flex-col text-lg font-bold mb-5 md:gap-10">
          <span>
            {page}/{QUESTIONS.length}
          </span>
          <button className="text-primary-2/400" onClick={switchPage}>
            Skip
          </button>
        </div>
        {/* <form action=""> */}
        {/* <QuestionPages /> */}
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
        />
        <div className="flex justify-between mt-32 mb-16 mx-auto max-w-[27rem] xl:max-w-none">
          <Buttons type="button" label="Back" onClick={goBack} />
          <Buttons type="button" label="Next" onClick={switchPage} />
        </div>
        {/* </form> */}
      </div>
    </section>
  );
};

export default Questions;
