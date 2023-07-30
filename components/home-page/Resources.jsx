import React from 'react';
import Image from 'next/image';
import IllustrationInstalling from '../../public/images/Illustration-Installing.png';
import coolkids from '../../public/images/coolkids.png';

const resources = [
  {
    image: IllustrationInstalling,
    bg: '#0FD7D7',
    category: 'General',
    time: '10',
    title: 'Curated blend of the best learning resources',
    content:
      "Whether you're a beginner or an experienced techie, there's always something new to learn. Explore some of these resources and see what you can learn.",
  },
  {
    image: coolkids,
    bg: '#FFF7DA',
    category: 'COMMUNITY',
    time: '10',
    title: 'The best communities for you',
    content:
      'Joining a tech community can be a great way to connect with like-minded individuals, expand your network and gain access to valuable resources,',
  },
];
const Resources = () => {
  return (
    <>
    <section className=" pl-5 xl:pl-[120px] py-[72px] border-t md:flex items-center gap-0 md:gap-[60px]">
      {/* Left side */}
      <div className="">
        <p className="text-accent-2 text-xs lg:text-base">RESOURCES</p>
        <h4 className="font-[700] text-2xl lg:text-[40px] text-[#292627]">
          Insights
        </h4>
        <p className="text-sm lg:text-lg leading-6 mt-3 text-[#5D5658] lg:w-[450px]">
          Unlock new insights by diving into our curated collection of articles,
          resources, and communities
        </p>
        <div className="mt-10">
          <p className="text-[#F58025] hidden md:flex justify-start">
            See all articles
          </p>
        </div>
      </div>
      {/* right side */}
      <div className=" z-[10] flex items-center overflow-x-scroll">
        {resources.map(resource => (
          <div className="bg-white mr-4 md:mr-10 w-[294px] sm:w-[418px] h-[564px] px-3 md:px-4 pt-3 md:pt-4 pb-8 border rounded-[20px]">
            <Image
              className=""
              style={{ background: `${resource.bg}` }}
              src={resource.image}
              alt="Installing Illustration"
            />
            <div className="mt-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-max px-2 py-1 rounded-[10px] uppercase text-white bg-accent-2 font-700 text-[10px]">
                  {resource.category}
                </div>
                <p className="text-[10px] text-secondary">
                  {resource.time} mins read
                </p>
              </div>
              <p className="text-base md:text-xl leading-6 font-[700] w-[270px] lg:w-[386px] mb-3">
                {resource.title}
              </p>
              <p className="text-sm md:text-sm w-[270px] md:w-[386px] text-secondary md:leading-6">
                {resource.content}
              </p>
            </div>
          </div>
        ))}

        {/* <div className="w-[418px] h-[564px] px-4 pt-4 pb-8 border rounded-[20px]">
          <Image src={IllustrationInstalling} alt="Installing Illustration" />
          <div className="mt-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-max px-2 py-1 rounded-[10px] uppercase text-white bg-accent-2 font-700 text-[10px]">
                General
              </div>
              <p className="text-[10px] text-secondary">10 mins read</p>
            </div>
            <p className="text-xl leading-6 font-[700] w-[386px] mb-3">
              Curated blend of the best learning resources
            </p>
            <p className="text-sm text-secondary leading-6">
              Whether you're a beginner or an experienced techie, there's always
              something new to learn. Explore some of these resources and see
              what you can learn.
            </p>
          </div>
        </div> */}
      </div>
    </section>
      <div className="mt-5">
        <p className="text-sm text-[#F58025] flex md:hidden justify-center">See all articles</p>
      </div>
    </>
  );
};

export default Resources;
