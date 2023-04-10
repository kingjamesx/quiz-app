import Image from 'next/image';
import woman from '../public/images/woman.png';
import background from '../public/images/Background.png';
import HeroFloats from './hero-floats';

const HeroIllustration = props => {
  const { className } = props;
  const classes = 'relative ' + className;
  return (
    <div className={classes}>
      <Image
        src={woman}
        alt="woman"
        className="top-[2.6rem] left-0 bg-no-repeat bg-contain z-40 relative max-w-[37rem] w-[100%] md:w-[25rem] md:top-[5.9rem] xl:top-[5.2rem] xl:w-[29rem]"
      />
      <Image
        src={background}
        alt="background"
        className="absolute top-0 right-0 z-10 max-w-[25rem] w-[71.5%] md:w-[20rem] xl:w-[22rem]"
      />
      <HeroFloats
        p="100k+"
        span="Total assessments"
        className="-top-[1rem] left-[2rem] shadow-float gap-4 py-2.5 md:top-0 md:-left-[1rem]"
      />
      <HeroFloats
        p="85%"
        span="Accuracy"
        className="top-[0.5rem] right-0 gap-2.5 py-2.5 md:top-[1rem] md:right-[1rem]"
      />
      <HeroFloats
        p="500+"
        span="Daily tests"
        className="-bottom-[1rem] left-[2.5rem] z-[60] gap-2.5 py-2.5 md:bottom-[0.5rem] md:left-[0.5rem] xl:left-[2.5rem] xl:-bottom-[1.2rem]"
      />
    </div>
  );
};

export default HeroIllustration;
