import Image from 'next/image';
import arrow from '../public/icons/arrow.svg';
import bulb from '../public/icons/bulb.svg';
import HeroIllustration from './hero-illustration';
import illustration from '../public/images/Illustration.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col mt-16 justify-between pb-20 md:max-w-[60rem] md:ml-auto md:w-full md:pl-10 md:flex-row xl:pl-20 xl:max-w-none">
      <div className="md:min-w-[20rem] xl:w-[38rem]">
        <h1 className="font-bold text-[2rem] font-mont mb-6 relative pl-5 w-[20rem] md:pl-0 md:min-w-[20rem] xl:w-full xl:text-6xl">
          <span className="text-accent-2">Unlock</span> your tech career
          potential
          <span className="absolute top-[3.7rem] right-[0.5rem] w-[1.5rem] md:right-[1rem] md:top-[3.3rem] md:w-[2rem] xl:top-[4.3rem] xl:right-[3.5rem] xl:w-auto">
            <Image src={bulb} alt="light-bulb" />
          </span>{' '}
          today
        </h1>
        <Image
          src={illustration}
          alt="illustration"
          className="max-w-[35rem] ml-auto w-full mb-8 md:hidden"
        />
        <p className="text-sm mb-6 px-4 max-w-[30rem] w-full mr-auto md:w-[20rem] md:px-0 md:max-w-none xl:w-full xl:text-lg">
          Being a beginner and not knowing where you’ll fit can be confusing.{' '}
          <span className="block mt-5">
            So take this 5 minute quiz to figure out your ideal role in the ever
            evolving world of technology.{' '}
          </span>
        </p>
        <div className="flex gap-2.5 text-sm px-5 max-w-[30rem] mr-auto w-full md:max-w-none md:px-0 md:gap-5 md:flex-col md:w-auto xl:flex-row xl:text-lg">
          <Link
            href="/"
            className="bg-primary-2/400 text-white flex justify-center py-1.5 rounded-[20px] items-center gap-1 w-full md:py-2.5 md:gap-2.5"
          >
            <p>Take the test</p>
            <Image src={arrow} alt="arrow" />
          </Link>
          <Link
            href="/"
            className="text-primary-2/400 border border-primary-2/400 text-center rounded-[20px] w-full py-2.5 xl:py-auto"
          >
            Learn more
          </Link>
        </div>
      </div>
      <HeroIllustration className="hidden md:block md:justify-self-end" />
    </div>
  );
};

export default Hero;