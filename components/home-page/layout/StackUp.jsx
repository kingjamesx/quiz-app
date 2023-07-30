import React from 'react';
import Link from 'next/link';
import arrow from '../../../public/icons/arrow.svg';
import Image from 'next/image';
import Button from '@/components/Auth/Button/Button';

const StackUp = () => {
  return (
    <section className="flex flex-col justify-center items-center px-5 md:px-10 lg:px-20 py-[60px] md:py-[100px] bg-primary-2/0">
      <div className="my-5 md:my-10 text-center flex flex-col justify-center items-center">
        <h3 className="text-2xl md:leading-[56px] md:text-[40px] font-[700] mb-3 md:mb-4">
          Ready to see how you stack up?
        </h3>
        <p className="text-sm md:text-lg text-center lg:w-[900px]">
          Take a few minutes to test your skills and see where you place. Click
          the link below to get started. We can't wait to see your results!
        </p>
      </div>

      <Link
          href="/assessments"
          className="mb-10 flex w-max px-8 items-center justify-center gap-1 rounded-[20px] bg-primary-2/400 py-1.5 font-bold text-sm md:text-lg text-white hover:bg-primary-2/500 md:gap-2.5 md:py-[18px]"
        >
          <p>Take the test</p>
          <Image className='w-5 h-5 md:h-auto md:w-auto' src={arrow} alt="arrow" />
        </Link>
      {/* <a href="" className="">Take the test */}
      {/* </a> */}
    </section>
  );
};

export default StackUp;
