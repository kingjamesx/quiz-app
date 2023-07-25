import React from 'react';
import Image from 'next/image';
import testimonialPattern from '../../../public/images/testimonial-pattern.png';
import TestimonialCard from '@/components/testimonials/TestimonialCard';

const Testimonial_data = [{}, {}, {}];

const Testimonials = () => {
  return (
    <section className="z-[1] relative px-20 py-[100px] w-screen">
      <Image className='absolute z-[-10] mt-[-245px] mx-[-80px]' src={testimonialPattern} alt="testimonial-bg" />
      <div className="py-10">
        <div className="flex flex-col items-center justify-center w-full"></div>
        <h5 className="text-accent-2 ">TESTIMONIALS</h5>
        <h2 className="text-primary  text-[40px] font-bold mb-10">
          What others have to say
        </h2>

        <div className="flex justify- items-center gap-4">
          {Testimonial_data.map(testimonial => (
            <TestimonialCard />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
