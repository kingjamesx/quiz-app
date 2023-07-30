import React from 'react';
import Button from '@/components/Auth/Button/Button';

const Subscribe = () => {
  return (
    <section className="py-20 md:py-[120px] px-5 md:px-20">
      <h3 className="font-bold text-2xl md:leading-[56px] md:text-[40px] mb-4">Subscribe to our news letter</h3>
      <div className="lg:flex items-center gap-2">
        <p className="md:w-[580px] mb-5 md:mb-0 text-sm md:text-lg text-secondary">
          Stay up to date with the latest news, announcements, and articles
        </p>
        <form action="" className="relative flex items-center gap-2">
            <input type="text" className="placeholder:text-xs md:placeholder:text-lg relative h-11 md:h-12 w-full md:w-[410px] border border-[#E8E6E6] py-1 px-4 md:px-4 md:py-4 rounded-[20px]" placeholder='Enter your email' />
            {/* <Button name='Subscribe' /> */}
            <button className="absolute right-1 md:relative text-white bg-primary-2/400 font-bold text-xs md:text-lg py-2 md:py-[18px] px-4 md:px-8 rounded-[20px]">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
