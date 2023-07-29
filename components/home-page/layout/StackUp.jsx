import React from 'react';
import Link from 'next/link';
import arrow from '../../../public/icons/arrow.svg';
import Image from 'next/image';
import Button from '@/components/Auth/Button/Button';

const StackUp = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-[100px] bg-primary-2/0">
      <div className="mt-10 flex flex-col justify-center items-center mb-10">
        <h3 className="text-[40px] font-[700] mb-4">
          Ready to see how you stack up?
        </h3>
        <p className="font-lg text-center w-[900px]">
          Take a few minutes to test your skills and see where you place. Click
          the link below to get started. We can't wait to see your results!
        </p>
      </div>

      <Link
          href="/assessments"
          className="mb-10 flex w-max px-8 items-center justify-center gap-1 rounded-[20px] bg-primary-2/400 py-1.5 font-bold text-white hover:bg-primary-2/500 md:gap-2.5 md:py-[18px]"
        >
          <p>Take the test</p>
          <Image src={arrow} alt="arrow" />
        </Link>
      {/* <a href="" className="">Take the test */}
      {/* </a> */}
    </section>
  );
};

export default StackUp;
