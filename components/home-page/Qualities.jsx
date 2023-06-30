import React from 'react';
import Image from 'next/image';
import arrow from '../../public/icons/arrow-right-orange.svg';
import techskillIllustration from '../../public/images/techskills-Illustration.png';

const Qualities = () => {
  return (
    <section className="border-t bg-techskills-pattern bg-cover px-5 xl:px-20 sm:px-10 pb-[100px] lg:mt-[100px] pt-[120px] lg:pt-[100px] flex flex-col-reverse lg:flex-row justify-between items-center">
      {/* left side */}
      <div className="flex">
        <div className=" flex flex-col gap-[88px] mt-[100px] items-end">
          <div className="qualities">Creativity</div>
          <div className="qualities">Analytical thinking</div>
          <div className="qualities">Curiosity</div>
          <div className="qualities">Persistence</div>
        </div>
        <div className="h-[590px] w-2 lg:w-2.5 bg-[#292627] rounded-lg"></div>
        <div className="flex flex-col gap-[88px] mt-10">
          <div className="qualities_right">Problem solving</div>
          <div className="qualities_right">Communication</div>
          <div className="qualities_right">Passion for technology</div>
          <div className="qualities_right">People skills</div>
        </div>
      </div>
      {/* right side */}
      <div className="relative">
        <Image className='w-[200px] h-[200px] md:h-auto md:w-auto absolute z-[-1] right-5 md:right-[40px] top-[5px] md:top-[-80px]' src={techskillIllustration} alt='Illustration'/>
        <p className="text-[#048481] text:xs lg:text-base">Qualities</p>
        <h4 className="font-[700] text-2xl leading-9 lg:text-[40px] md:leading-[56px] text-[#292627]">Tech Skills</h4>
        <p className="text-sm lg:text-lg leading-6 mt-4 text-[#5D5658] md:max-w-[600px]">
          What exactly makes one become good in tech? From creativity to problem
          solving, learn about the qualities that will help you excel in your
          chosen field
        </p>
        <div className="mt-10 flex items- gap-3">
            <p className="text-[#F58025] text-sm font-[700] md:font-[400] md:text-base">Learn more</p>
            <Image className='w-5 h-5 md:w-6 md:h-6' src={arrow} alt='Arrow right Svg' />
        </div>
      </div>
    </section>
  );
};

export default Qualities;