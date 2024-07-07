import React from 'react'

const DropDown = () => {
  return (
    <div className='section-2 lg:h-16 py-2 flex items-center'>
        <div className='container w-11/12  flex md:flex-row mx-auto justify-start lg:justify-between gap-4 flex-wrap '>

            <div className=' px-5 xl:px-28 py-2 xl:w-44 flex justify-center bg-white rounded'>
            <select className='rounded  '>
            <option>Select Job Type</option>
            </select>
            </div>

            <div className=' px-5 xl:px-28 py-2 xl:w-44 flex justify-center bg-white rounded'>
            <select className='rounded '>
            <option>Select Industry</option>
            </select>
            </div>

            <div className=' px-5 xl:px-28 py-2 xl:w-48 flex justify-center bg-white rounded'>
            <select className='rounded '>
            <option>Select Mode of Work</option>
            </select>
            </div>

            <div className=' px-5 xl:px-28 py-2 xl:w-48 flex justify-center bg-white rounded'>
            <select className='rounded '>
            <option>Select Mode of Work</option>
            </select>
            </div>

            <div className='btn-color flex justify-center items-center hover:bg-white hover:text-black px-1 lg:px-3 lg:py-2 text-white rounded-lg ease-in-out duration-500'>
                    <button className='mx-auto'>Find Jobs</button>
            </div> 
                
            
        </div>
    </div>
  )
}

export default DropDown