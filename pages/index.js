import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Qualities from '@/components/Qualities';
import Footer from '@/components/Footer';
import HeaderHero from '@/components/Header-Hero';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <section className="mx-auto w-full">
        <HeaderHero />
        <Qualities />
        <Footer />
      </section>
    </main>
  );
}
