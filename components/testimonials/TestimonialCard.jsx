import React from 'react';
import Image from 'next/image';


const TestimonialCard = ({img, name, result, percent, testimonial}) => {
  return (
    <div className="overflow-y-scroll w-full h-[340px] sm:-h-[290px] sm:w-[359px] md:h-[357px] py-4 md:py-5 px-4 rounded-[20px] bg-white border-[#E8E6E6] border">
      <div className="flex gap-[10.8px] md:gap-3 items-center">
        <Image src={img} className="w-12 h-12 md:w-[60px] md:h-[60px] bg-slate-300 rounded-full" />
        <div className="">
          <p className="md:text-lg font-bold mb-2">{name}</p>
          <p className="text-xs md:text-sm">{result} ({percent})</p>
        </div>
      </div>
      <p className="mt-[18px] md:mt-[22px] text-sm leading-6 md:text-base italic">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;
