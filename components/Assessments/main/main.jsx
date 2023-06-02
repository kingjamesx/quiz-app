import Link from 'next/link';
import ResizeFloatingImage from './resize-floating-image';

const AssessmentMain = () => {
  return (
    <div className="relative md:mt-10 xl:mt-20">
      <ResizeFloatingImage />
      <div className="z-50 mx-auto mt-12 w-[20rem] text-center md:mt-0 md:w-[25rem] xl:w-[50rem]">
        <h1 className="mb-12 font-mont text-[2rem] font-bold md:mb-10 md:text-[2.5rem] xl:text-[5rem]">
          What kind of <span className="text-accent-2">techie</span> are you?
        </h1>
        <p className="mx-auto mb-20 text-sm md:w-[25rem] md:text-lg xl:w-[35rem]">
          Start the test to get career recommendations and resources
          personalised for you
        </p>
        <Link
          href="assessments/questions"
          className="rounded-[20px] bg-primary-2/400 px-7 py-3 text-white hover:bg-primary-2/500"
        >
          Start your assessment
        </Link>
      </div>
    </div>
  );
};

export default AssessmentMain;
