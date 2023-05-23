const OptionButton = props => {
  const { children, className, onClick, id, question } = props;

  const classes =
    `${
      id === question ? 'bg-primary-2/500' : 'bg-primary-2/0'
    } flex justify-center items-center rounded-r-[1.25rem] rounded-bl-[1.25rem] ` +
    className;

  return (
    <button className={classes} onClick={onClick}>
      <p className="px-7 text-center text-sm md:w-52 md:px-0 md:text-base">
        {children}
      </p>
    </button>
  );
};

export default OptionButton;
