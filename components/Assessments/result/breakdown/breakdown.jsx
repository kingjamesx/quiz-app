import Careers from './careers';
import Others from './other-careers';
import Wand from '../../svg/wand';

const Breakdown = () => {
  return (
    <section className="relative mb-20 ml-6 leading-6 md:mx-auto md:max-w-[60rem] xl:ml-12 xl:max-w-none">
      <h2 className="mb-3 text-2xl font-bold leading-[3.5rem] text-primary md:mx-12 md:mb-7 md:text-[2.5rem] xl:mx-auto">
        Breakdown
      </h2>
      <h3 className="mb-3 text-lg font-bold leading-9 text-primary md:mx-12 md:text-2xl xl:mx-auto">
        Description (70%)
      </h3>
      <p className="mb-10 mr-5 text-sm text-secondary md:mx-12 md:text-lg xl:mx-auto xl:w-[76rem]">
        Flexibility, empathy, problem solving, originality and risk taking are
        traits you resonate with. You are good at giving elaborate and detailed
        descriptions of thoughts and ideas, as well as communicating them
        effectively. Coming up with new ideas to problems and looking at them
        from different viewpoints and angles. You enjoy creating and sharing
        experiences and are inquisitive.
      </p>
      <div className="flex flex-wrap gap-10 md:mx-12 xl:mx-auto xl:flex-nowrap xl:gap-5">
        <Careers />
        <Others />
      </div>
      <span className="absolute bottom-20 right-56 hidden md:block">
        <Wand />
      </span>
    </section>
  );
};

export default Breakdown;
