import React from 'react'
import Image from 'next/image'
import Card from '../HomeComponent/Card'

const index = () => {
  return (
    <div className='w-11/12 mx-auto  '>
      <div className=' px-2 py-2 flex flex-col lg:flex-row gap-24'>


      
      <div className='lg:w-5/12'>
        <div className='bg-[#DBF7FD] rounded-md px-3 lg:px-6 py-8 lg:mt-3'>
          <div>
            <div className='flex justify-center items-center bg-[#FFFFFF]  w-16 h-16 rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>            
            <Image src="/gmaillogo.png" width={25} height={25} className='w-12' alt=''/>            
            </div>

            <div className='mt-2'>            
            <h1 className='text-lg lg:text-3xl font-semibold'>Digital Marketer</h1>
            </div>

            <div className='mt-5'>
              <p className='lg:text-xl'>
              Lorem ipsum dolor sit amet consectetur. Et ultrices tellus convallis quam. Sed opi commodo proin gravida magnis pretium senectus aliquet.
              </p>
            </div>



          </div>




          <div className='lg:w-[280px] mt-5'>
            <h1 className='text-lg font-semibold'>Job Information:</h1>

            <div className='bg-[#FFFFFF] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg p-2 lg:px-4 lg:py-3 mt-2 flex flex-col gap-3'>
              <div className='flex justify-start items-center font-semibold gap-2'>
                <Image src="/profilecheck.svg" width={20} height={20} alt=''/>
                <p>
                Employment Type: <span className='text-[#0DCAF0]'>Full Time</span>
                </p>
              </div>
              <div className='flex justify-start items-center font-semibold gap-2'>
              <Image src="/loc-img.svg" width={20} height={20} alt=''/>
                <p>
                Location: <span className='text-[#0DCAF0]'>United Kingdom</span>
                </p>
              </div>
              <div className='flex justify-start items-center font-semibold gap-2'>
              <Image src="/time-img.svg" width={20} height={20} alt='' />
                <p>
                Date Posted: <span className='text-[#0DCAF0]'>13th April, 2024.</span>
                </p>
              </div>
              <div className='flex justify-start items-center font-semibold gap-2'>
              <Image src="/work-img.svg" width={20} height={20} alt='' />
                <p>
                Experience: <span className='text-[#0DCAF0]'>3+ Years</span>
                </p>
              </div>
              <div className='flex justify-start items-center font-semibold gap-2'>
              <Image src="/dollar-img.svg" width={20} height={20} alt='' />
                <p>
                Salary: <span className='text-[#0DCAF0]'>30k - 35k per annum</span>
                </p>
              </div>

            </div>


          </div>

        </div>





        <div className='map'></div>
      </div>

      <div className='lg:w-8/12'>
      <div>
        <h1 className='text-3xl font-semibold'>Job Description:</h1>
        <p className='mt-5 lg:text-xl'>Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac elementum vel. Viverra pellentesque risus tristique mauris metus. Imperdiet purus nulla mi consequat nulla.</p>
        <p className='lg:text-xl'>Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac elementum vel. Viverra pellentesque risus tristique mauris metus. Imperdiet purus nulla mi consequat nulla.</p>

      </div>


      <div className='flex flex-col gap-2 mt-6'>
      <h1 className='text-xl font-semibold'>Duties & Responsibilities:</h1>
      <div className='flex gap-2 items-center mt-3'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      
      </div>




      <div className='flex flex-col gap-2 mt-6'>
      <h1 className='text-xl font-semibold'>Skills & Qualifications:</h1>
      <div className='flex gap-2 items-center mt-3'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Image src="/bluecheck.svg" width={20} height={20} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      
      </div>


      <div className='mt-5'>
        <button className='bg-[#0DCAF0] text-white hover:bg-[white] hover:text-black py-2 px-5 rounded-lg'>
          Apply Now
        </button>
      </div>





      </div>
      </div>


      <div>
        <div>
          <h1 className='text-center text-xl font-semibold mt-9'>Related Jobs</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet quam commodo est pulvinar vitae.</p>
        </div>

        <div className='flex flex-col lg:flex-row'>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default index