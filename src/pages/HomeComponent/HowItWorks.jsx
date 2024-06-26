import React from 'react'
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div>
        <div className='w-10/12 container text-center mx-auto mt-10'>
        <h1 className='text-xl font-semibold'>How It Works?</h1>

        <div className='flex justify-center mt-5'>
        <Image src="/howworks.png" width={1000} height={100} alt='stepper image' />
        </div>

        </div>

        <div className='grid grid-cols-4 container justify-start text-center text-xs w-10/12 mx-auto'>
            <div className='text-left xl:text-center 2xl:text-right'>
                <h1>Create an account/Login</h1>
            </div>

            <div>
                <h1 className='text-center'>Complete your profile</h1>
            </div>

            <div>
                <h1>Find best Jobs</h1>
            </div>

            <div className='text-right xl:text-center 2xl:text-left 2xl:pl-10'>
                <h1>Apply for Jobs</h1>
            </div>
        </div>

       
    </div>
  )
}

export default HowItWorks