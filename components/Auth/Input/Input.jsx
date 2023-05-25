import React from 'react'
import openEeye from '@/public/icons/openEye.svg'
import Image from 'next/image'
const Input = ({label,placeholder,type}) => {
  return (
    <div>
          
          {type=='Password'?<div className='mt-5'> <label htmlFor="" className='block mb-1'>{label}</label> <div className='flex items-center w-full border rounded-[20px] h-[56px] px-3 '>
               <input type={type} placeholder={placeholder} className='w-[95%] outline-none'/>
               <span><Image src={openEeye}/></span>
          </div></div>:
             <div className='mt-5'>
             <label htmlFor="" className='block mb-1'>{label}</label>   
 <input type={type} placeholder={placeholder}  className='w-full h-[56px] border border-[#E8E6E6] rounded-[20px] px-3'/>
             </div>
               }
    </div>
  )
}

export default Input