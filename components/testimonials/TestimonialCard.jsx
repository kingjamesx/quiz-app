import React from 'react';
import Image from 'next/image';

const TestimonialCard = () => {
  return (
    <div className="w-[359px]  py-5 px-4 rounded-[20px] bg-white border-[#E8E6E6] border">
      <div className="flex gap-3 items-center">
        <Image className="w-[60px] h-[60px] bg-slate-300 rounded-full" />
        <div className="">
          <p className="text-lg font-bold mb-2">Tati Ahmed</p>
          <p className="text-sm">Creative (80%)</p>
        </div>
      </div>
      <p className="mt-[22px] text-base italic">
        “When I started my journey in tech I had no
        idea what to do. A friend recommended this website and I’m so glad I
        took the test and figured out what works for me. Design is challenging
        as hell but I absolutely love it”
      </p>
    </div>
  );
};

export default TestimonialCard;
