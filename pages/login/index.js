import React from 'react';
import Input from '@/components/Auth/Input/Input';
import Button, { GButton } from '@/components/Auth/Button/Button';
import Image from 'next/image';
import illustration from '@/public/images/auth-illustration.png';
import Left from '@/public/icons/Left arrow.svg';
import Right from '@/public/icons/Right arrow.svg';
import Head from 'next/head';
const index = () => {
  return (
    <div className="flex ">
      <Head>
        <title>Awaskill || Login</title>
        <meta property="og:image" content="/images/home-page.png" />
        <meta name="description" content="Login - Welcome" />
      </Head>
      <section className="basis-[45%] p-10">
        <p className="text-[32px] font-bold">Awaskill</p>
        <h3 className="mt-[80px] text-[40px] font-bold">Welcome back!</h3>
        <p>Log in to see your saved results and recommended resources.</p>
        <form action="">
          <Input label="Email" placeholder="enter your email" type="Email" />
          <Input label="Password" placeholder="********" type="Password" />
          <a href="#" className="mt-1 flex justify-end text-[#F58025]">
            forgot password?
          </a>
          <span className="flex gap-2">
            {' '}
            <input
              type="checkbox"
              className=" rounded border-gray-300 bg-gray-100 text-red-600  focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
            />{' '}
            <p>Keep me signed in</p>
          </span>
          <Button name="Sign in" />
          <div className="mt-[52px] flex items-center justify-between">
            <span className="block w-[45%] border-b border-[#E8E6E6]"></span>OR
            <span className="block w-[45%] border-b border-[#E8E6E6]"></span>
          </div>
          <GButton />
          <p className="mt-[98px] text-center">
            {' '}
            <span className="text-[#F58025] ">Create an account</span> to get
            started
          </p>
        </form>
      </section>
      <section className="basis-[55%] bg-[#FCD5B6] p-10">
        <span className="mx-auto my-10 block w-[400px]">
          <Image src={illustration} />
        </span>
        <p className="italic">
          “When I started my journey in tech I had no idea what to do. A friend
          recommended this website and I’m so glad I took the test and figured
          out what works for me. Design is challenging as hell but I absolutely
          love it”
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span>
            <h3 className="font-bold">Tati Ahmed</h3>
            <p>Creative (80%)</p>
          </span>
          <span className="flex items-center justify-between gap-[100px]">
            <Image src={Left} />
            <Image src={Right} />
          </span>
        </div>
      </section>
    </div>
  );
};

export default index;
