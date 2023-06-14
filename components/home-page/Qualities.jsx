import React from 'react';
import Image from 'next/image';
import arrow from '../../public/icons/arrow-right-orange.svg';
import techskillIllustration from '../../public/images/techskills-Illustration.png';

const Qualities = () => {
  return (
    <section className="border-t bg-techskills-pattern bg-cover px-20 pb-[100px] mt-[100px] pt-[100px] flex flex-col-reverse md:flex-row justify-between items-center">
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
      <div className="relative">
        <Image className='w-[200px] md:w-auto absolute z-[-1] right-[40px] top-[-80px]' src={techskillIllustration} alt='Illustration'/>
        <p className="text-[#048481]">Qualities</p>
        <h4 className="font-[700] text-[40px] text-[#292627]">Tech Skills</h4>
        <p className="text-lg leading-6 mt-4 text-[#5D5658] max-w-[600px]">
          What exactly makes one become good in tech? From creativity to problem
          solving, learn about the qualities that will help you excel in your
          chosen field
        </p>
        <div className="mt-10 flex items- gap-3">
            <p className="text-[#F58025]">Learn More</p>
            <Image src={arrow} alt='Arrow right Svg' />
        </div>
      </div>
    </section>
  );
};

export default Qualities;
