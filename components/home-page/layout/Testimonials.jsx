import React from 'react';
import Image from 'next/image';
import testimonialPattern from '../../../public/images/testimonial-pattern.png';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import Testimonial_data from '@/components/testimonials/data';

// const Testimonial_data = [{}, {}, {}];

const Testimonials = () => {
  return (
    <section className="z-[1] relative px-5 sm:px-10 lg:px-20 py-[60px] md:py-[100px]">
      <Image
        className="h-[300px] md:h-auto absolute z-[-10] md:mt-[-275px] mx-[-20px] sm:mx-[-40px] lg:mx-[-80px]"
        src={testimonialPattern}
        alt="testimonial-bg"
      />
      <div className="py-5 md:py-10 flex flex-col items-center justify-center">
        <div className="text-center">
          <h5 className="md:text-base text-accent-2 ">TESTIMONIALS</h5>
          <h2 className="text-primary  text-2xl md:text-[40px] font-bold mb-5 md:mb-10">
            What others have to say
          </h2>
        </div>

        <div className="w-full flex-col flex lg:flex-row sm:justify-center sm:items-center gap-4">
          {Testimonial_data.map(testimonial => (
            <TestimonialCard img={testimonial.img} name={testimonial.name} result={testimonial.test_result} percent={testimonial.test_percent} testimonial={testimonial.testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
