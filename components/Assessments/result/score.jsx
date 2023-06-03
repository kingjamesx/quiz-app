import Image from 'next/image';
import Sparkle from '../svg/sparkle';
import score from '../../../public/images/score.png';
import Lightbulb from '../svg/lightbulb';
import Palette from '../svg/palette';

const Score = () => {
  return (
    <section className="relative mb-20 mt-20 text-center">
      <h1 className="mb-10 text-[2.5rem] font-bold text-primary">
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
      <p className="relative mx-auto w-max text-[5rem] font-bold text-accent-2">
        Creative
        <span className="absolute -right-10 top-2.5">
          <Sparkle />
        </span>
      </p>
      <span className="absolute bottom-60 right-48">
        <Lightbulb />
      </span>
      <span className="absolute bottom-20 left-28">
        <Palette />
      </span>
    </section>
  );
};

export default Score;
