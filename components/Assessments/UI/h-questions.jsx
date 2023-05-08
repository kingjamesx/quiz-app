const QuestionHeaders = props => {
  const { children, para } = props;
  return (
    <div className="mb-10 md:mb-16 text-center ">
      <h2 className="text-2xl font-bold mb-4 md:text-[2rem]">{children}</h2>
      {para && <p className="text-sm md:text-lg">{para}</p>}
    </div>
  );
};

export default QuestionHeaders;
