import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import icons from '../../public/images/icons and avatars.png';
import iconsSmall from '../../public/images/icons and avatars-mobile.png';

const Assessments = () => {
  return (
    <section className="max-w-[30rem] mx-auto md:max-w-none relative">
      <Header />
      <Image
        src={icons}
        alt="icons"
        className="absolute top-[50%] left-[50%] translate-x-[-40%] translate-y-[5%] -z-10 hidden md:block xl:translate-x-[-50%]"
      />
      <Image
        src={iconsSmall}
        alt="icons"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[5%] -z-10 md:hidden"
      />
      <div className="text-center mx-auto z-50 md:w-[55rem] md:mt-0">
        <h1 className="font-bold font-mont mt-24 mb-20 text-[2rem] md:text-[4rem] md:mb-10 xl:text-[5rem]">
          What kind of <span className="text-accent-2">techie</span> are you?
        </h1>
        <p className="text-lg mx-auto mb-20 md:w-[35rem]">
          Start the test to get career recommendations and resources
          personalised for you
        </p>
        <Link
          href="assessments/questions"
          className="bg-primary-2/400 hover:bg-primary-2/500 text-white px-7 py-3 rounded-[20px]"
        >
          Start your assessment
        </Link>
      </div>
    </section>
  );
};

export default Assessments;
