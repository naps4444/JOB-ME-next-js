import React from 'react'
import Image from 'next/image'

const SectionOne = () => {
  return (

    <div className='bg-[#F5F3F3] '>
    <div className='container mx-auto pt-7 pb-7 w-10/12 lg:w-11/12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-20'>
            <div className=' hidden lg:block ml-0 w-full'>
                <Image  src="/dmimg1.png" width={400} height={100} alt='4 developers coding'  className='xl:w-full ml-0 '/>
            </div>

            <div className='w-full mx-auto lg:mr-0'>
                <h3 className='font-bold lg:w-9/12 text-lg'>Find Millions of Job
                Opportunities Right for You!</h3>

                <p className='mt-4 xl:mt-6'>Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.</p>

                <button className='mt-4 btn-color text-white px-2 py-2 rounded 
                hover:bg-white hover:text-black xl:mt-6 ease-in-out duration-500'>Discover More</button>
               
                
            </div>

        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-20 mt-10'>
            <div className=' w-full mx-auto lg:mr-0'>
                <h3 className='font-bold lg:w-4/6 text-lg'>
                Looking to be one of the World’s Best
                Talents?
                </h3>

                <p className='mt-4 xl:mt-6'>
                Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.
                </p>

                <button className='mt-4 btn-color text-white px-2 py-2 rounded 
                hover:bg-white hover:text-black xl:mt-6 ease-in-out duration-500'>Discover More</button>

            </div>

            <div className='mx-auto hidden lg:flex justify-end w-full  mr-0 '>
            <Image src="/dmimg2.png" width={400} height={100} alt='a woman coding on her laptop' className='xl:w-full  ' />

            </div>

        </div>
    </div>
    </div>
  )
}

export default SectionOne