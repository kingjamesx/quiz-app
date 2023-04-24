import Header from '@/components/Header';
import Link from 'next/link';

const Assessments = () => {
  return (
    <section>
      <Header />
      <div className="text-center w-[55rem] mx-auto">
        <h1 className="font-bold text-[5rem] font-mont mt-10 mb-10">
          What kind of <span className="text-accent-2">techie</span> are you?
        </h1>
        <p className="text-lg w-[35rem] mx-auto mb-20">
          Start the test to get career recommendations and resources
          persolanlised for you
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
