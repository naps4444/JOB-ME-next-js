import React from 'react'
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';


const JobApplyCard = ({job}) => {
    if (!job) {
        return null; // or return some fallback UI
      }
      const postedTime = formatDistanceToNow(new Date(job.createdAt), { addSuffix: true });
  return (
    <div className='container w-11/12 mx-auto flex items-center'>
        <div className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 lg:w-full p-5 mx-auto mt-5 '>
            <div className='relative grid grid-cols-4 w-full '>
                <div className='flex gap-2 items-center'>
                <div className='flex justify-center items-center py-3 w-14 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                        <Image src={job.logoUrl} width={25} height={25} alt={job.title} />

                    </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-semibold'>{job.title}</h1>
                    <p>{job.company}</p>
                </div>
                

                </div>






                <div className='flex flex-col ml-16 xl:ml-[95px] lg:w-44'>
                    <div className='rounded  px-1 py-1 bg-[#0DCAF01F] flex justify-center items-center w-16'>
                        <p className='text-[#0dcaf0] text-xs'>{job.employmentType}</p>
                    </div>

                    <div className='flex gap-2 items-center mt-4'>
                <GoClock className='icon-color' size={20}/>
                <p className='text-gray-600'>{postedTime}</p>

                </div>
                </div>




                



                <div className='ml-[75px] xl:ml-[140px] flex flex-col gap-4'>
                    
                    
                        
                        <div className='flex items-center gap-2'>
                            <SlLocationPin className='text-gray-600' />
                            <p className='text-gray-600' >{job.location}</p>
                        </div>

                        
                    <div>
                        <p>{job.salary}</p>
                    </div>
                        
                    </div>



                    <div className='flex  w-36 absolute right-0 '>
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