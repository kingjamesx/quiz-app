import React from 'react';
import Articles from '../../public/icons/articles.svg';
import Communities from '../../public/icons/communities.svg';
import Learning from '../../public/icons/learning.svg';
import Qualities from '../../public/icons/qualities.svg';
import Skills from '../../public/icons/skills.svg';
import Menu from '../../public/icons/menu.svg';

import Image from 'next/image';
import Link from 'next/link';
const Dropdown = () => {
  return (
    <section className="flex flex-col gap-4 rounded-[20px] bg-white px-[24px] py-[40px] shadow-lg">
      <div className="flex items-center gap-[16px] rounded p-2 hover:scale-[1.05] hover:bg-[#fef9f4] ">
        <span className="flex  w-[44px] justify-center">
          <Image
            src={Articles}
            alt="articles"
            className="border border-red-500 "
          />
        </span>
        <span>
          <p>Articles</p>
          <p className="text-sm">Read about the latest developments in tech</p>
        </span>
      </div>
      <div className="flex gap-[16px] rounded p-2 hover:scale-[1.05] hover:bg-[#fef9f4]">
        <span className="flex  w-[44px] justify-center">
          {' '}
          <Image src={Communities} alt="communities" />
        </span>
        <span>
          <p>Communities</p>
          <p className="text-sm">
            Check out the best and biggest communities in the tech industry{' '}
          </p>
        </span>
      </div>{' '}
      <div className="flex gap-[16px] rounded p-2 hover:scale-[1.05] hover:bg-[#fef9f4]">
        <span className="flex  w-[44px] justify-center">
          <Image src={Qualities} alt="qualities" />
        </span>
        <span>
          <p>Qualities</p>
          <p className="text-sm">All the qualities you need to excel in tech</p>
        </span>
      </div>{' '}
      <div className="flex gap-[16px] rounded p-2 hover:scale-[1.05] hover:bg-[#fef9f4]">
        <span className="flex  w-[44px] justify-center">
          <Image src={Skills} alt="skill" />
        </span>
        <span>
          <p>Skills</p>
          <p className="text-sm">
            A breakdown of the most in-demand skills an career recommendations
          </p>
        </span>
      </div>{' '}
      <div className="flex gap-[16px] rounded p-2 hover:scale-[1.05] hover:bg-[#fef9f4]">
        <span className="flex  w-[44px] justify-center">
          <Image src={Learning} alt="learning" />
        </span>
        <span>
          <p>Learning</p>
          <p className="text-sm">Read about the latest developments in tech</p>
        </span>
      </div>{' '}
      <div className="flex gap-[16px] rounded p-2 hover:scale-[1.05] hover:bg-[#fef9f4]">
        <span className="flex  w-[44px] justify-center">
          <Image src={Articles} alt="articles" />
        </span>
        <span>
          <p>Articles</p>
          <p className="text-sm">
            Platforms and courses with learning materials for you
          </p>
        </span>
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <nav className="relative z-[100] flex cursor-pointer items-center justify-between px-20 pt-[40px]">
      <Link href="/" className="text-2xl font-bold lg:text-[40px] ">
        Awaskill
      </Link>
      <ul className="hidden items-center  gap-[48px] text-[20px] lg:flex">
        <li>About</li>
        <span className="dropdown">
          <li>Resources</li>{' '}
          <span className="dropdownContent absolute hidden">
            <Dropdown />
          </span>
        </span>

        <li>Blog</li>
        <li>Contact us</li>
      </ul>
      <button className="hidden rounded-[20px] bg-[#F58025] px-[32px] py-[18px] text-lg font-bold hover:bg-[#CC6B1F] lg:block">
        Get Started
      </button>
      <span className=" lg:hidden ">
        <Image src={Menu} alt="menu" />
      </span>
    </nav>
  );
};

export default Header;
