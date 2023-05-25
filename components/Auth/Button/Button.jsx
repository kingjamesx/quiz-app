import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-[#F58025] w-full text-white rounded-[20px] h-[56px] mt-[40px]'>{name}</button>
    </div>
  )
}

export default Button

export const GButton=()=>{
    return(
        <div>
            <button className='border border-[#E8E6E6] w-full  rounded-[20px] h-[56px] mt-[40px]'>Sign in with google</button>
        </div>
    )
}