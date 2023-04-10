import Image from 'next/image';
import arrow from '../public/icons/arrow.svg';
import bulb from '../public/icons/bulb.svg';
import HeroIllustration from './hero-illustration';
import illustration from '../public/images/Illustration.png';

const Hero = () => {
  return (
    <div className="md:pl-20 flex flex-col md:flex-row mt-16 justify-between pb-20">
      <div className="md:w-[38rem]">
        <h1 className="font-bold text-[2rem] md:text-6xl font-mont mb-6 relative pl-5 md:pl-0 w-[20rem] md:w-auto">
          <span className="text-accent-2">Unlock</span> your tech career
          potential
          <span className="absolute top-[3.7rem] md:top-[4.3rem] right-[0.5rem] md:right-[3.5rem] w-[1.5rem] md:w-auto">
            <Image src={bulb} alt="light-bulb" />
          </span>{' '}
          today
        </h1>
        <Image
          src={illustration}
          alt="illustration"
          className="md:hidden max-w-[40rem] ml-auto w-full mb-12"
        />
        <p className="text-sm md:text-lg mb-6 px-4 max-w-[30rem] w-max md:w-auto mr-auto md:max-w-none">
          Being a beginner and not knowing where you’ll fit can be confusing.{' '}
          <span className="block mt-5">
            So take this 5 minute quiz to figure out your ideal role in the ever
            evolving world of technology.{' '}
          </span>
        </p>
        <div className="flex gap-2.5 md:gap-5 text-sm md:text-lg px-5 max-w-[30rem] md:max-w-none mr-auto w-full md:w-auto">
          <button className="bg-primary-2/400 text-white flex justify-center py-1.5 md:py-2.5 rounded-[20px] items-center gap-1 md:gap-2.5 w-full">
            <p>Take the test</p>
            <Image src={arrow} alt="arrow" />
          </button>
          <button className="text-primary-2/400 border border-primary-2/400 rounded-[20px] w-full">
            Learn more
          </button>
        </div>
      </div>
      <HeroIllustration className="hidden md:block" />
    </div>
  );
};

export default Hero;
