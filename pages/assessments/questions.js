import QuestionOne from '@/components/Assessments/Question-1';
import QuestionTwo from '@/components/Assessments/Question-2';
import Header from '@/components/Header';
import { useState } from 'react';

const Questions = () => {
  const [page, setPage] = useState(1);

  const progress = (page / 16) * 100;

  const QuestionPages = () => {
    return (
      <>
        {page === 1 && <QuestionOne page={page} setPage={setPage} />}
        {page === 2 && <QuestionTwo page={page} setPage={setPage} />}
      </>
    );
  };

  return (
    <section className="max-w-[30rem] mx-auto md:max-w-none">
      <Header />
      <div className="w-[87%] mt-20 mx-auto">
        <div className="h-2 rounded-xl bg-Primary-2/50 mb-2">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-accent-2 rounded-xl transition-all"
          ></div>
        </div>
        <div className="flex gap-5 items-end flex-col text-lg font-bold mb-5 md:gap-10">
          <span>{page}/16</span>
          <button
            className="text-primary-2/400"
            onClick={() => setPage(page + 1)}
          >
            Skip
          </button>
        </div>
        {QuestionPages()}
      </div>
    </section>
  );
};

export default Questions;
