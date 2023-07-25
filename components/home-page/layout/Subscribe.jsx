import React from 'react';
import Button from '@/components/Auth/Button/Button';

const Subscribe = () => {
  return (
    <section className="py-[120px] px-20">
      <h3 className="font-bold text-[40px] mb-1.5">Subscribe to our news letter</h3>
      <div className="flex items-center gap-2">
        <p className="w-[580px] text-lg text-secondary">
          Stay up to date wth the latest news, announcements, and articles Enter
          your email Subscribe
        </p>
        <form action="" className="flex items-center gap-2">
            <input type="text" className="w-[410px] border border-[#E8E6E6] p-4 rounded-[20px]" placeholder='Enter your email' />
            {/* <Button name='Subscribe' /> */}
            <button className="text-white bg-primary-2/400 font-bold text-lg py-[18px] px-8 rounded-[20px]">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
