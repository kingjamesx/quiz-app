import arrow from '../../../public/icons/arrow.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FloatInTop } from './animation';


const HeroCta = () => {
  return (
    <>
      <motion.div
        variants={FloatInTop}
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
    </>
  );
};

export default HeroCta;
