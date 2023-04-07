import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='px-8 bg-land-pattern bg-left-top bg-no-repeat bg-contain flex flex-col justify-between h-[100vh] '>
      <section className='max-w-[1200px] mx-auto w-full'>
      <Header/>
          <h1 className='text-2xl'>Lets make magic</h1>
      </section>
    </main>
  )
}
