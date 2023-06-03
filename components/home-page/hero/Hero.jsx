import Image from 'next/image';
import illustration from '../../../public/images/Illustration.png';
import { motion } from 'framer-motion';
import HeroIllustration from './hero-illustration';
import { animationX } from './animation';
import HeroCta from './hero-cta';

const floatIn = animationX('-100vw', 1);
const floatInDelayed = animationX('-100vw', 1.5);
const floatInRight = animationX('100vw', 1);

const Hero = () => {
  return (
    <div className="mt-16 flex flex-col justify-between overflow-hidden pb-20 md:ml-auto md:w-full md:max-w-[60rem] md:flex-row md:pl-10 xl:max-w-none xl:pl-20">
      <div className="overflow-hidden md:min-w-[20rem] xl:w-[38rem]">
        <motion.h1
          variants={floatIn}
          initial="hidden"
          animate="visible"
          className="relative mb-6 w-[20rem] pl-5 text-[2rem] font-bold md:min-w-[20rem] md:pl-0 xl:w-full xl:text-6xl"
        >
          <span className="text-accent-2">Unlock</span> your tech career{' '}
          potential today
        </motion.h1>
        {/* Illustration for Mobile Screens only */}
        <motion.div variants={floatInRight} initial="hidden" animate="visible">
          <Image
            src={illustration}
            alt="illustration"
            className="mx-auto mb-8 w-full max-w-[35rem] md:hidden"
          />
        </motion.div>
        <motion.p
          variants={floatInDelayed}
          initial="hidden"
          animate="visible"
          className="mb-6 mr-auto w-full max-w-[30rem] px-4 text-sm md:w-[20rem] md:max-w-none md:px-0 xl:w-full xl:text-lg"
        >
          Being a beginner and not knowing where you’ll fit can be confusing.{' '}
          <span className="mt-5 block">
            So take this 5 minute quiz to figure out your ideal role in the ever
            evolving world of technology.{' '}
          </span>
        </motion.p>
        <div className="overflow-y-hidden">
          <HeroCta />
        </div>
      </div>
      {/* Illustration for Desktop and Tablet Screens only */}
      <HeroIllustration className="hidden md:block md:justify-self-end" />
    </div>
  );
};

export default Hero;
