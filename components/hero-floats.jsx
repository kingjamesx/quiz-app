const HeroFloats = props => {
  const { p, span, className } = props;
  const classes =
    'absolute bg-white text-center rounded-[16px] px-5 z-20 flex flex-col ' +
    className;
  return (
    <div className={classes}>
      <p className="font-extrabold text-2xl text-accent-2 font-mont md:font-bold md:text-[2rem]">
        {p}
      </p>
      <span className="text-xs md:text-base">{span}</span>
    </div>
  );
};

export default HeroFloats;
