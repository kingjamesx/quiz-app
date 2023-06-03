import Recommendations from './careers';
import Others from './other-careers';

const Breakdown = () => {
  return (
    <section className="mb-20 ml-12 leading-6">
      <h2 className="mb-7 text-[2.5rem] font-bold leading-[3.5rem] text-primary">
        Breakdown
      </h2>
      <h3 className="mb-3 text-2xl font-bold leading-9 text-primary">
        Description (70%)
      </h3>
      <p className="mb-10 mr-12 text-lg text-secondary md:w-[76rem]">
        Flexibility, empathy, problem solving, originality and risk taking are
        traits you resonate with. You are good at giving elaborate and detailed
        descriptions of thoughts and ideas, as well as communicating them
        effectively. Coming up with new ideas to problems and looking at them
        from different viewpoints and angles. You enjoy creating and sharing
        experiences and are inquisitive.
      </p>
      <div className="flex gap-5">
        <Recommendations />
        <Others />
      </div>
    </section>
  );
};

export default Breakdown;
