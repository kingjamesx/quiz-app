import Selector from '../svg/selector';

const OptionButton = props => {
  const { children, className, onClick, id, question } = props;

  const classes =
    `${
      id === question ? 'border-primary-2/400' : 'border-transparent'
    } flex justify-center bg-primary-2/0 items-center rounded-r-[1.25rem] border-2 relative rounded-bl-[1.25rem] hover:bg-Primary-2/50 ` +
    className;

  return (
    <button className={classes} onClick={onClick}>
      {id === question && (
        <span className="absolute left-0 top-0">
          <Selector />
        </span>
      )}
      <p className="px-7 text-center text-sm md:w-52 md:px-0 md:text-base">
        {children}
      </p>
    </button>
  );
};

export default OptionButton;
