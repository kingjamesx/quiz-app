import React from 'react';
import Image from 'next/image';
import testimonialPattern from '../../../public/images/testimonial-pattern.png';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import Testimonial_data from '@/components/testimonials/data';

// const Testimonial_data = [{}, {}, {}];

const Testimonials = () => {
  return (
    <section className="z-[1] mx-auto relative px-20 py-[100px]">
      <Image
        className="absolute z-[-10] mt-[-245px] mx-[-80px]"
        src={testimonialPattern}
        alt="testimonial-bg"
      />
      <div className="py-10 flex flex-col items-center justify-center">
        <div className="text-center">
          <h5 className="text-accent-2 ">TESTIMONIALS</h5>
          <h2 className="text-primary  text-[40px] font-bold mb-10">
            What others have to say
          </h2>
        </div>

        <div className="flex justify-center items-center gap-4">
          {Testimonial_data.map(testimonial => (
            <TestimonialCard img={testimonial.img} name={testimonial.name} result={testimonial.test_result} percent={testimonial.test_percent} testimonial={testimonial.testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
