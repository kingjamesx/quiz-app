import React from "react";
import Articles from "../public/icons/articles.svg";
import Communities from "../public/icons/communities.svg";
import Learning from "../public/icons/learning.svg";
import Qualities from "../public/icons/qualities.svg";
import Skills from "../public/icons/skills.svg";
import Menu from "../public/icons/menu.svg";

import Image from "next/image";
const Dropdown = () => {
  return (
    <section className="bg-white rounded-[20px] px-[24px] py-[40px] flex flex-col gap-4 shadow-lg">
      <div className="flex gap-[16px] items-center hover:bg-[#fef9f4] hover:scale-[1.05] p-2 rounded">
        <span className="w-[44px]  flex justify-center">
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
      <div className="flex gap-[16px] hover:bg-[#fef9f4] hover:scale-[1.05] p-2 rounded">
        <span className="w-[44px]  flex justify-center">
          {" "}
          <Image src={Communities} alt="communities" />
        </span>
        <span>
          <p>Communities</p>
          <p className="text-sm">
            Check out the best and biggest communities in the tech industry{" "}
          </p>
        </span>
      </div>{" "}
      <div className="flex gap-[16px] hover:bg-[#fef9f4] hover:scale-[1.05] p-2 rounded">
        <span className="w-[44px]  flex justify-center">
          <Image src={Qualities} alt="qualities" />
        </span>
        <span>
          <p>Qualities</p>
          <p className="text-sm">All the qualities you need to excel in tech</p>
        </span>
      </div>{" "}
      <div className="flex gap-[16px] hover:bg-[#fef9f4] hover:scale-[1.05] p-2 rounded">
        <span className="w-[44px]  flex justify-center">
          <Image src={Skills} alt="skill" />
        </span>
        <span>
          <p>Skills</p>
          <p className="text-sm">
            A breakdown of the most in-demand skills an career recommendations
          </p>
        </span>
      </div>{" "}
      <div className="flex gap-[16px] hover:bg-[#fef9f4] hover:scale-[1.05] p-2 rounded">
        <span className="w-[44px]  flex justify-center">
          <Image src={Learning} alt="learning" />
        </span>
        <span>
          <p>Learning</p>
          <p className="text-sm">Read about the latest developments in tech</p>
        </span>
      </div>{" "}
      <div className="flex gap-[16px] hover:bg-[#fef9f4] hover:scale-[1.05] p-2 rounded">
        <span className="w-[44px]  flex justify-center">
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
    <nav className="px-20 flex justify-between pt-[40px] cursor-pointer items-center ">
      <p className="text-2xl lg:text-[40px] font-bold ">Assesify</p>
      <ul className="hidden lg:flex  items-center gap-[48px] text-[20px]">
        <li>About</li>
        <span className="dropdown">
          <li>Resources</li>{" "}
          <span className="hidden dropdownContent absolute">
            <Dropdown />
          </span>
        </span>

        <li>Blog</li>
        <li>Contact us</li>
      </ul>
      <button className="hidden lg:block text-lg bg-[#F58025] hover:bg-[#CC6B1F] px-[32px] py-[18px] rounded-[20px] font-bold">
        Get Started
      </button>
      <span className=" lg:hidden ">
        <Image src={Menu} alt="menu" />
      </span>
    </nav>
  );
};

export default Header;
