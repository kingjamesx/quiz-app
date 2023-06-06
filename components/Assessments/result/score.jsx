import Image from 'next/image';
import Sparkle from '../svg/sparkle';
import score from '../../../public/images/score.png';
import Lightbulb from '../svg/lightbulb';
import Palette from '../svg/palette';

const Score = () => {
  return (
    <section className="relative mb-20 mt-20 text-center">
      <h1 className="mx-5 mb-10 text-2xl font-bold text-primary md:mx-auto md:text-[2.5rem]">
        You scored high as a...
      </h1>
      <div className="mx-auto mb-5 w-max">
        <Image
          src={score}
          alt="score"
          priority
          className="h-[21.875rem] w-[21.875rem] md:h-auto md:w-auto"
        />
      </div>
      <p className="relative mx-auto w-max text-[2.5rem] font-bold text-accent-2 md:text-[5rem]">
        Creative
        <span className="absolute -right-5 top-1.5 md:-right-10 md:top-2.5">
          <Sparkle />
        </span>
      </p>
      <span className="absolute bottom-60 right-48 hidden md:block">
        <Lightbulb />
      </span>
      <span className="absolute bottom-20 left-28 hidden md:block">
        <Palette />
      </span>
    </section>
  );
};

export default Score;
