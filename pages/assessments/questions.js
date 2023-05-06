import QuestionOne from '@/components/Assessments/Question-1';
import QuestionTwo from '@/components/Assessments/Question-2';
import Buttons from '@/components/Assessments/UI/Button';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Questions = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  // const [formData, setFormData] = useState({
  //   questionOne: null,
  //   questionTwo: '',
  // });

  const progress = (page / 16) * 100;

  const goBack = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      router.back();
    }
  };

  const QuestionPages = () => {
    return (
      <>
        {page === 1 && <QuestionOne />}
        {page === 2 && <QuestionTwo />}
      </>
    );
  };

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
          <span>{page}/16</span>
          <button
            className="text-primary-2/400"
            onClick={() => setPage(page + 1)}
          >
            Skip
          </button>
        </div>
        <form action="">
          <QuestionPages />
          <div className="flex justify-between mt-32 mb-16 mx-auto max-w-[27rem] xl:max-w-none">
            <Buttons type="button" label="Back" onClick={goBack} />
            <Buttons
              type="button"
              label="Next"
              onClick={() => setPage(page + 1)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Questions;
