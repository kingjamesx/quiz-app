import { motion } from 'framer-motion';
import { floatsVariant } from './animation';

const HeroFloats = props => {
  const { p, span, className } = props;
  const classes =
    'absolute bg-white text-center rounded-[16px] px-5 z-20 flex flex-col ' +
    className;
  return (
    <motion.div
      variants={floatsVariant}
      initial="hidden"
      animate="visible"
      className={classes}
    >
      <p className="text-2xl font-extrabold text-accent-2 md:text-[2rem] md:font-bold">
        {p}
      </p>
      <span className="text-xs md:text-base">{span}</span>
    </motion.div>
  );
};

export default HeroFloats;
