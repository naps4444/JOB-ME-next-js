import React from 'react'

const DropDown = () => {
  return (
    <div className='section-2 h-16 flex items-center'>
        <div className='container flex flex-col md:flex-row mx-auto justify-center gap-4 xl:gap-10'>

            <div className='lg:px-3 lg:py-2 bg-white rounded-lg'>
            <select className='rounded-lg'>
            <option>Select Job Type</option>
            </select>
            </div>

            <div className='lg:px-3 lg:py-2 bg-white rounded-lg'>
            <select className='rounded-lg'>
            <option>Select Industry</option>
            </select>
            </div>

            <div className='lg:px-3 lg:py-2 bg-white rounded-lg'>
            <select className='rounded-lg'>
            <option>Select Mode of Work</option>
            </select>
            </div>

            <div className='lg:px-3 lg:py-2 bg-white rounded-lg'>
            <select className='rounded-lg'>
            <option>Select Mode of Work</option>
            </select>
            </div>

            <div className='btn-color hover:bg-white hover:text-black px-1 lg:px-3 lg:py-2 text-white rounded-lg'>
                    <button>Find Jobs</button>
            </div> 
                
            
        </div>
    </div>
  )
}

export default DropDown