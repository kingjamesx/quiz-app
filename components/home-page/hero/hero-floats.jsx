import { motion } from 'framer-motion';

const floatsVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

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
      <p className="font-extrabold text-2xl text-accent-2 md:font-bold md:text-[2rem]">
        {p}
      </p>
      <span className="text-xs md:text-base">{span}</span>
    </motion.div>
  );
};

export default HeroFloats;
