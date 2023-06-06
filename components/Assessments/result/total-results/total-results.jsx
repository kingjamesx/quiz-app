import Facebook from '../../svg/facebook';
import Whatsapp from '../../svg/whatsapp';
import Twitter from '../../svg/twitter';
import Link from '../../svg/link';
import Shapes from './shapes';

const TotalResults = () => {
  return (
    <section className="bg-total-results-pattern bg-no-repeat pt-20 text-center">
      <h2 className="text-2xl font-bold text-primary md:text-[2.5rem]">
        Total Results
      </h2>
      <Shapes />
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-accent-2 md:text-[2.5rem]">
          3,000+
        </h2>
        <p className="text-base text-primary md:text-lg">Shares</p>
      </div>
      <div className="mx-auto flex w-max gap-5">
        <Facebook />
        <Whatsapp />
        <Twitter />
        <Link />
      </div>
    </section>
  );
};

export default TotalResults;
