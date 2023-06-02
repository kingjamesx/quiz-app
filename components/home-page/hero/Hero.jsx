import Image from 'next/image';
import arrow from '../../../public/icons/arrow.svg';
import bulb from '../../../public/icons/bulb.svg';
import illustration from '../../../public/images/Illustration.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroIllustration from './hero-illustration';

const h1Variant = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const illustVariant = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const pVariant = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const btnVariant = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="mt-16 flex flex-col justify-between overflow-hidden pb-20 md:ml-auto md:w-full md:max-w-[60rem] md:flex-row md:pl-10 xl:max-w-none xl:pl-20">
      <div className="overflow-hidden md:min-w-[20rem] xl:w-[38rem]">
        <motion.h1
          variants={h1Variant}
          initial="hidden"
          animate="visible"
          className="relative mb-6 w-[20rem] pl-5 text-[2rem] font-bold md:min-w-[20rem] md:pl-0 xl:w-full xl:text-6xl"
        >
          <span className="text-accent-2">Unlock</span> your tech career
          potential
          <span className="absolute right-[0.5rem] top-[3.7rem] w-[1.5rem] md:right-[1rem] md:top-[3.3rem] md:w-[2rem] xl:right-[3.5rem] xl:top-[4.3rem] xl:w-auto">
            <Image src={bulb} alt="light-bulb" />
          </span>{' '}
          today
        </motion.h1>
        <motion.div variants={illustVariant} initial="hidden" animate="visible">
          <Image
            src={illustration}
            alt="illustration"
            className="mb-8 ml-auto w-full max-w-[35rem] md:hidden"
          />
        </motion.div>
        <motion.p
          variants={pVariant}
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
          <motion.div
            variants={btnVariant}
            initial="hidden"
            animate="visible"
            className="mr-auto flex w-full max-w-[30rem] gap-2.5 px-5 text-sm md:w-auto md:max-w-none md:flex-col md:gap-5 md:px-0 xl:flex-row xl:text-lg"
          >
            <Link
              href="/assessments"
              className="flex w-full items-center justify-center gap-1 rounded-[20px] bg-primary-2/400 py-1.5 text-white hover:bg-primary-2/500 md:gap-2.5 md:py-3"
            >
              <p>Take the test</p>
              <Image src={arrow} alt="arrow" />
            </Link>
            <Link
              href="/"
              className="xl:py-auto w-full rounded-[20px] border border-primary-2/400 py-2.5 text-center text-primary-2/400 hover:bg-Primary-2/50"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
      <HeroIllustration className="hidden md:block md:justify-self-end" />
    </div>
  );
};

export default Hero;
