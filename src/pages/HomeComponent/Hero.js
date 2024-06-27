import React from 'react'
import Image from 'next/image'
import DropDown from './DropDown'

const Hero = () => {
  return (
    <div className=' section-11 md:section-1 h-36  -mt-2 md:h-64 lg:h-96 md:mt-0 flex flex-col justify-center'>
        <div className='flex justify-center md:mt-10'>
        <h1 className='text-white font-medium mx-auto text-xl w-9/12 lg:text-3xl text-center md:w-5/12'>SECURE JOBS AS AN AMAZING TALENT!</h1>
        </div>

        <div className='mx-auto md:mt-6 lg:hidden mt-2'>
            <button className='btn-color hover:bg-white hover:text-black text-white px-2 py-1 rounded'>
                Find Jobs
            </button>
        </div>



        <div className='hidden lg:block mt-5  lg:mt-16'>
        <DropDown/>            
        </div>       

        
    </div>
  )
}

export default Hero