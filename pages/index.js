import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-land-pattern bg-left-top bg-no-repeat bg-contain flex flex-col justify-between">
      <section className="mx-auto w-full">
        <Header />
        {/* <h1 className="text-2xl">Lets make magic</h1> */}
        <Hero />
      </section>
    </main>
  );
}
