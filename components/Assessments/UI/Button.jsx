const Buttons = props => {
  const { type, label, onClick } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary-2/400 text-white p-2.5 px-4 rounded-[20px]"
    >
      {label}
    </button>
  );
};

export default Buttons;
