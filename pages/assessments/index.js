import Header from '@/components/Header';
import Link from 'next/link';

const Assessments = () => {
  return (
    <section className="max-w-[30rem] mx-auto md:max-w-none px-4">
      <Header />
      <div className="text-center mx-auto md:w-[55rem] md:mt-0">
        <h1 className="font-bold font-mont mt-10 mb-20 text-[2rem] md:text-[4rem] md:mb-10 xl:text-[5rem]">
          What kind of <span className="text-accent-2">techie</span> are you?
        </h1>
        <p className="text-lg mx-auto mb-20 md:w-[35rem]">
          Start the test to get career recommendations and resources
          personalised for you
        </p>
        <Link
          href="assessments/questions"
          className="bg-primary-2/400 text-white px-7 py-3 rounded-[20px]"
        >
          Start your assessment
        </Link>
      </div>
    </section>
  );
};

export default Assessments;
