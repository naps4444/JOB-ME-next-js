import React from 'react'
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import Image from 'next/image';

const JobApplyCard = () => {
  return (
    <div className='container w-11/12 mx-auto flex items-center'>
        <div className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 lg:w-full p-5 mx-auto mt-5 '>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                <div className='flex justify-center items-center py-3 w-14 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                        <Image src="/gmaillogo.png" width={45} sizes='2' height={55} alt='gmail logo' className='w-auto h-auto' />

                    </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-semibold'>Digital Marketer</h1>
                    <p>Google</p>
                </div>
                

                </div>






                <div className='flex flex-col '>
                    <div className='rounded  px-1 py-1 bg-[#0DCAF01F] flex justify-center items-center w-14'>
                        <p className='text-[#0dcaf0] text-xs'>Full Time</p>
                    </div>

                    <div className='flex gap-2 items-center mt-4'>
                <GoClock className='icon-color' size={20}/>
                <p className='text-gray-600'>Posted 24 hours ago</p>

                </div>
                </div>




                



                <div className='flex flex-col gap-4'>
                    
                    
                        
                        <div className='flex items-center gap-2'>
                            <SlLocationPin className='text-gray-600' />
                            <p className='text-gray-600' >United Kingdom</p>
                        </div>

                        
                    <div>
                        <p>$ 30k - 35k</p>
                    </div>
                        
                    </div>



                    <div className='flex  w-36'>
                    <button className='btn-color h-10  text-white p-2 px-5 rounded-lg hover:bg-white hover:text-black ease-in-out duration-500'>
                        Apply Now
                    </button>
                </div>



                </div>
                
            </div>
        </div>
  )
}

export default JobApplyCard