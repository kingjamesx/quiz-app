import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Qualities from '@/components/Qualities';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // bg-land-pattern bg-left-top bg-no-repeat bg-contain
  return (
    <main className=" flex flex-col justify-between">
      <section className="mx-auto w-full">
        <Header />
        <Hero />
        <Qualities />
      </section>
    </main>
  );
}
