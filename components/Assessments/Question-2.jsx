import Buttons from './UI/Button';

const QuestionTwo = props => {
  const { page, setPage } = props;
  return (
    <>
      <h1>Question 2</h1>
      <div className="flex justify-between mt-10">
        <Buttons type="button" label="Back" onClick={() => setPage(page - 1)} />
        <Buttons type="button" label="Next" onClick={() => setPage(page + 1)} />
      </div>
    </>
  );
};

export default QuestionTwo;
