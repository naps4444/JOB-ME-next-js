import React from 'react'
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import Image from 'next/image';

const Card = () => {
  return (
    <div className='container h-96 flex items-center'>
        <div className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 p-5 mx-auto mt-5 '>
            <div className=''>
                <div>
                    <h1 className='text-xl font-semibold'>Digital Marketer</h1>
                </div>
                <div className='flex gap-2 items-center mt-4'>
                <GoClock className='icon-color' size={20}/>
                <p className='text-gray-600'>Posted 24 hours ago</p>

                </div>
                <div className='flex justify-between mt-4'>
                    <div className='rounded  px-1 py-1 bg-[#0DCAF01F]'>
                        <p className='text-[#0dcaf0] text-xs'>Full Time</p>
                    </div>
                    <div>
                        <p>$ 30k - 35k</p>
                    </div>
                </div>
                <hr className='mt-4'/>
                <div className='flex items-center gap-4 mt-4'>
                    <div className='flex justify-center items-center p-2 rounded shadow-md'>
                        <Image src="/gmaillogo.png" width={35} height={55} alt='gmail logo' className='w-auto h-auto' />

                    </div>
                    <div>
                        <div>
                            <h1 className='text-lg font-semibold'>Google</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SlLocationPin className='text-gray-600' />
                            <p className='text-gray-600' >United Kingdom</p>
                        </div>
                        
                    </div>
                </div>
                <div className='mt-4'>
                    <button className='btn-color text-white p-2 px-3 rounded-lg hover:bg-white hover:text-black ease-in-out duration-500'>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card