import Image from 'next/image';
import woman from '../../../public/images/woman.png';
import background from '../../../public/images/Background.png';
import HeroFloats from './hero-floats';
import { motion } from 'framer-motion';
import { animationX } from './animation';

const floatInRight = animationX('100vw', 1);

const HeroIllustration = props => {
  const { className } = props;
  const classes = 'relative ' + className;
  return (
    <div className={classes}>
      <motion.div variants={floatInRight} initial="hidden" animate="visible">
        <Image
          src={woman}
          alt="woman"
          priority
          className="relative left-0 top-[2.6rem] z-40 w-[100%] max-w-[37rem] bg-contain bg-no-repeat md:top-[5.9rem] md:w-[25rem] xl:top-[5.2rem] xl:w-[29rem]"
        />
        <Image
          src={background}
          alt="background"
          className="absolute right-0 top-0 z-10 w-[71.5%] max-w-[25rem] md:w-[20rem] xl:w-[22rem]"
        />
      </motion.div>
      <HeroFloats
        p="100k+"
        span="Total assessments"
        className="-top-[1rem] left-[2rem] gap-4 py-2.5 shadow-float md:-left-[1rem] md:top-0"
      />
      <HeroFloats
        p="85%"
        span="Accuracy"
        className="right-0 top-[0.5rem] gap-2.5 py-2.5 md:right-[1rem] md:top-[1rem]"
      />
      <HeroFloats
        p="500+"
        span="Daily tests"
        className="-bottom-[1rem] left-[2.5rem] z-[60] gap-2.5 py-2.5 md:bottom-[0.5rem] md:left-[0.5rem] xl:-bottom-[1.2rem] xl:left-[2.5rem]"
      />
    </div>
  );
};

export default HeroIllustration;
