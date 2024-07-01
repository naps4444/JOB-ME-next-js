import React from 'react'
import Image from 'next/image'

const Cvcomponent = () => {
  return (
    <div className='bg-[#DBF7FD] flex justify-center items-center '>
      
    <div className='mx-auto w-10/12 container'>
    <div className='  grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div className=' mx-auto'>
            <h1 className='text-xl  md:text-2xl md:w-8/12 lg:w-full xl:w-8/12 font-semibold '>Get Jobs that match your Qualifications and Skill Set</h1>

            <p className='mt-10 md:w-10/12 lg:w-full'>Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla aliquam a. In ac in ornare donec consectetur. Nam semper gravida enim dolor velit aliquam ut ac. </p>

            <button className='btn-color text-white mt-5 py-1 px-2 rounded-lg'>Upload Your CV</button>
        </div>

        <div className='hidden lg:block lg:w-full '>
          <Image src='/cv.png' width={700} height={100} alt='smiling man pointing towards a content' className='w-full h-full ' />


        </div>
    </div>
    </div>
    
    </div>
  )
}

export default Cvcomponent