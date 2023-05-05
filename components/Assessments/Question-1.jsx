import { useRouter } from 'next/router';
import Buttons from './UI/Button';
import RadioInput from './radio-input';
import { useState } from 'react';
const QuestionOne = props => {
  const { page, setPage } = props;
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const handleChange = id => {
    if (selected === id) {
      return setSelected(selected);
    }

    setSelected(id);
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold font-mont mb-10 md:mb-16 md:text-[2rem]">
        How much do you know of tech?
      </h2>
      <form action="" className="text-xl text-center">
        <div className="flex justify-between items-center flex-wrap gap-y-10 md:gap-y-0 mx-auto md:max-w-[50rem] xl:max-w-none">
          <RadioInput
            label="I’ve built a simple/ small project"
            className="py-5 md:py-10"
            option={1}
            onChange={handleChange}
            onSelect={selected}
          />
          <RadioInput
            label="I have basic some technical skills"
            className="py-5 md:py-10"
            option={2}
            onChange={handleChange}
            onSelect={selected}
          />
          <RadioInput
            label="I just know their names"
            className="py-5 md:py-10"
            option={3}
            onChange={handleChange}
            onSelect={selected}
          />
          <RadioInput
            label="I have no idea"
            className="flex justify-center items-center h-full"
            option={4}
            onChange={handleChange}
            onSelect={selected}
          />
        </div>
      </form>
      <div className="flex justify-between mt-10 mx-auto md:max-w-[50rem] xl:max-w-none">
        <Buttons type="button" label="Back" onClick={() => router.back()} />
        <Buttons type="button" label="Next" onClick={() => setPage(page + 1)} />
      </div>
    </>
  );
};

export default QuestionOne;
