import React from 'react';

const Qualities = () => {
  return (
    <section className="px-20 pt-[200px] flex justify-between items-center">
      {/* left side */}
      <div className="flex">
        <div className=" flex flex-col gap-[88px] mt-[100px] items-end">
          <div className="qualities">Creativity</div>
          <div className="qualities">Analytical thinking</div>
          <div className="qualities">Curiosity</div>
          <div className="qualities">Persistence</div>
        </div>
        <div className="h-[590px] w-2.5 bg-[#292627] rounded-lg"></div>
        <div className="flex flex-col gap-[88px] mt-10">
          <div className="qualities_right">Problem solving</div>
          <div className="qualities_right">Communication</div>
          <div className="qualities_right">Passion for technology</div>
          <div className="qualities_right">People skills</div>
        </div>
      </div>
      {/* right side */}
      <div className="">
        <p className="text-[#048481]">Qualities</p>
        <h4 className="font-[700] font-mont text-[40px] text-[#292627]">Tech Skills</h4>
        <p className="text-lg leading-6 mt-4 text-[#5D5658] max-w-[600px]">
          What exactly makes one become good in tech? From creativity to problem
          solving, learn about the qualities that will help you excel in your
          chosen field
        </p>
        <div className="mt-10">
            <p className="text-[#F58025]">Learn More</p>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
