import React from 'react'
import Card from './Card'


const LatestJob = () => {
  return (
    <div className='container mx-auto w-10/12 mt-10'>
        <div className='flex flex-col justify-center w-10/12 mx-auto '>
            <h1 className='text-center text-xl font-semibold'>Latest Job Listing</h1>
            <p className='text-center mt-5 '>Lorem ipsum dolor sit amet consectetur. Augue lacus senectus at amet viverra ultrices eget. Tincidunt tristique viverra facilisis arcu non nulla faucibus. Adipiscing blandit nunc lobortis pretium. Tempus viverra vitae nisl imperdiet auctor mattis viverra egestas mattis.</p>
        </div>

        <Card/>

        
        
    </div>
  )
}

export default LatestJob