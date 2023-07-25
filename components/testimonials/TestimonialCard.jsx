import React from 'react';
import Image from 'next/image';


const TestimonialCard = ({img, name, result, percent, testimonial}) => {
  return (
    <div className="w-[359px] h-[357px] py-5 px-4 rounded-[20px] bg-white border-[#E8E6E6] border">
      <div className="flex gap-3 items-center">
        <Image src={img} className="w-[60px] h-[60px] bg-slate-300 rounded-full" />
        <div className="">
          <p className="text-lg font-bold mb-2">{name}</p>
          <p className="text-sm">{result} ({percent})</p>
        </div>
      </div>
      <p className="mt-[22px] text-base italic">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;
