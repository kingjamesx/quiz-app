import React from 'react'
import Input from '@/components/Auth/Input/Input'
import Button,{GButton} from '@/components/Auth/Button/Button'
import Image from 'next/image'
import illustration from '@/public/images/auth-illustration.png'
import Left from '@/public/icons/Left arrow.svg'
import Right from '@/public/icons/Right arrow.svg'
const index = () => {
  return (
    <div className='flex '>
        <section className='basis-[45%] p-10'>
            <p className='text-[32px] font-bold'>Awaskill</p>
             <h3 className='mt-[80px] text-[40px] font-bold'>Welcome back!</h3>
             <p>Log in to see your saved results and recommended resources.</p>
             <form action="" >
                <Input label='Email' placeholder='enter your email' type='Email'/>
                <Input label='Password' placeholder='********' type='Password'/>
                <a href='#' className='mt-1 flex justify-end text-[#F58025]'>forgot password?</a>
             <span className='flex gap-2'> <input type="checkbox" className= ' text-red-600 bg-gray-100 border-gray-300 rounded  focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' /> <p>Keep me signed in</p></span> 
             <Button name='Sign in'/>
                <div className='flex justify-between items-center mt-[52px]'><span className='w-[45%] block border-[#E8E6E6] border-b'></span>OR<span className='w-[45%] block border-[#E8E6E6] border-b'></span></div>
                <GButton/>
                <p className='mt-[98px] text-center'> <span className="text-[#F58025] ">Create an account</span>  to get started</p>
             </form>
        </section>
        <section className='bg-[#FCD5B6] basis-[55%] p-10'>
          <span className='w-[400px] mx-auto my-10 block'><Image src={illustration} /></span> 
          <p className='italic'>“When I started my journey in tech I had no idea what to do.
             A friend recommended this website and 
             I’m so glad I took the test and figured out what works for me.
              Design is challenging as hell but I absolutely love it”</p>
              <div className='flex justify-between items-center mt-5'>
                <span>
                    <h3 className='font-bold'>Tati Ahmed</h3>
                    <p>Creative (80%)</p>
                </span>
                <span className='flex justify-between items-center gap-[100px]'>
                <Image src={Left}/>
                <Image src={Right}/>
                </span>
              </div>
        </section>
    </div>
  )
}

export default index