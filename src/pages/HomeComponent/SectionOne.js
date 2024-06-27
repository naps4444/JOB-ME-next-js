import React from 'react'
import Image from 'next/image'

const SectionOne = () => {
  return (

    <div className='bg-[#F5F3F3] '>
    <div className='container mx-auto pt-7 pb-7 lg:w-10/12 xl:w-10/12'>
        <div className='lg:grid lg:grid-cols-2 '>
            <div className='mx-auto hidden lg:block'>
                <Image src="/dmimg1.png" width={400} height={100} />
            </div>

            <div className=' w-5/6 mx-auto lg:w-4/6 my-auto'>
                <h3 className='font-semibold text-lg'>Find Millions of Job
                Opportunities Right for You!</h3>

                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.</p>

                <button className='mt-4 btn-color text-white px-2 py-2 rounded 
                hover:bg-white hover:text-black'>Discover More</button>
               
                
            </div>

        </div>

        <div className='lg:grid lg:grid-cols-2 mt-14 lg:mt-0'>
            <div className=' w-5/6 mx-auto lg:w-4/6 my-auto'>
                <h3 className='font-semibold text-lg'>
                Looking to be one of the World’s Best
                Talents?
                </h3>

                <p className='mt-4 '>
                Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.
                </p>

                <button className='mt-4 btn-color text-white px-2 py-2 rounded 
                hover:bg-white hover:text-black'>Discover More</button>

            </div>

            <div className='mx-auto hidden lg:block'>
            <Image src="/dmimg2.png" width={400} height={100} />

            </div>

        </div>
    </div>
    </div>
  )
}

export default SectionOne