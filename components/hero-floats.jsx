const HeroFloats = props => {
  const { p, span, className } = props;
  const classes =
    'absolute bg-white text-center rounded-[16px] px-5 py-2.5 z-20 ' +
    className;
  return (
    <div className={classes}>
      <p className="font-extrabold md:font-bold text-2xl md:text-[2rem] text-accent-2 font-mont">
        {p}
      </p>
      <span className="text-xs md:text-base">{span}</span>
    </div>
  );
};

export default HeroFloats;
