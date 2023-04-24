import RadioInput from '@/components/Assessments/radio-input';
import Header from '@/components/Header';

const Questions = () => {
  return (
    <section>
      <Header />
      <div className="w-[87%] mt-20 mx-auto">
        <div className="h-2 rounded-xl bg-Primary-2/50 mb-2">
          <div className="h-full w-[20%] bg-accent-2 rounded-xl"></div>
        </div>
        <div className="flex gap-10 items-end flex-col text-lg font-bold mb-5">
          <span>4/16</span>
          <button className="text-primary-2/400">Skip</button>
        </div>
        <h2 className="text-center text-[2rem] font-bold font-mont mb-16">
          How much do you know of tech?
        </h2>
        <form action="" className="text-xl text-center">
          <div className="flex justify-between items-center flex-wrap mb-10">
            <RadioInput
              label="I’ve built a simple/ small project"
              className="py-10"
            />
            <RadioInput
              label="I have basic some technical skills"
              className="py-10"
            />
            <RadioInput label="I just know their names" className="py-10" />
            <RadioInput
              label="I have no idea"
              className="flex justify-center items-center h-full"
            />
          </div>
          <div className="flex justify-between">
            <button className="bg-primary-2/400 text-white p-2.5 px-4 rounded-[20px]">
              Back
            </button>
            <button className="bg-primary-2/400 text-white py-2.5 px-4 rounded-[20px]">
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Questions;
