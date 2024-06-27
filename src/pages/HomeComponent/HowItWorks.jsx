import React from 'react'
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div>
        <div className='w-10/12 container text-center mx-auto'>
        <h1>How It Works?</h1>

        <div className='flex justify-center'>
        <Image src="/howworks.png" width={1000} height={100} />
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

        <div className='w-10/12 xl:w-8/12 2xl:w-6/12 mx-auto'>
            
        <ol className="flex gap-12 md:gap-28 lg:gap-44 xl:gap-52 justify-center placeholder:items-center w-full text-xs text-gray-900 font-medium sm:text-base">
      <li className="flex w-full relative text-indigo-600   after:content-['']  after:w-11/12 after:h-0.5 after:-z-20 after:bg-[#0dcaf01b] after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-8">
         <div className="block whitespace-nowrap z-10">
             <span className="w-6 h-6 bg-[#0dcaf01b] border-2 border-transparent rounded-md  flex justify-center items-center mx-auto mb-3 text-sm text-white md:w-16 md:h-16 md:p-2 lg:w-16 lg:h-16 xl:w-24 xl:h-24">
                  <Image className='' src="/vector.svg" width={100} height={100} />
                </span> <h1 className=''>Create an account/Login</h1>
         </div>
      </li>
      <li className="flex w-full relative text-indigo-600   after:content-['']  after:w-11/12 after:h-0.5 after:-z-20 after:bg-[#0dcaf01b] after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-8">
         <div className="block whitespace-nowrap z-10">
             <span className="w-6 h-6 bg-[#0dcaf01b] border-2 border-transparent rounded-md  flex justify-center items-center mx-auto mb-3 text-sm text-white md:w-16 md:h-16 md:p-2 lg:w-16 lg:h-16 xl:w-24 xl:h-24">
                  <Image className='' src="/vector3.svg" width={100} height={100} />
                </span> Step 1
         </div>
      </li>
      <li className="flex w-full relative text-indigo-600   after:content-['']  after:w-11/12 after:h-0.5 after:-z-20 after:bg-[#0dcaf01b] after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-8">
         <div className="block whitespace-nowrap z-10">
             <span className="w-6 h-6 bg-[#0dcaf01b] border-2 border-transparent rounded-md  flex justify-center items-center mx-auto mb-3 text-sm text-white md:w-16 md:h-16 md:p-2 lg:w-16 lg:h-16 xl:w-24 xl:h-24">
                  <Image className='' src="/vector2.svg" width={100} height={100} />
                </span> Step 1
         </div>
      </li>
    
      <li className="flex w-full relative text-indigo-600   after:content-['']  after:w-0 after:h-0.5 after:-z-20 after:bg-[#0dcaf01b] after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-8">
         <div className="block whitespace-nowrap z-10">
             <span className="w-6 h-6 bg-[#0dcaf01b] border-2 border-transparent rounded-md  flex justify-center items-center mx-auto mb-3 text-sm text-white md:w-16 md:h-16 md:p-2 lg:w-16 lg:h-16 xl:w-24 xl:h-24">
                  <Image className='' src="/vector4.svg" width={100} height={100} />
                </span> Step 1
         </div>
      </li>
     
     
      </ol>
        </div>


{/* 
        <div className='container  relative w-10/12'>
         <div className='grid grid-cols-4 mx-auto '>
         <div className='z-10'>
                <Image src="/cr1.png" width={100} height={100} />
            </div>
            <div>
                <Image src="/cr2.png" width={100} height={100} />
            </div>
            <div>
                <Image src="/cr3.png" width={100} height={100} />
            </div>
            <div>
                <Image src="/cr4.png" width={100} height={100} />
            </div>
         </div>

        <hr className='btn-color h-0.5 absolute bottom-2' />
        </div> */}
        
        
    </div>
  )
}

export default HowItWorks