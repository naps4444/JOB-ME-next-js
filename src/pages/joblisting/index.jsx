import React from 'react'
import DropDown from '../HomeComponent/DropDown'
import JobApplyCard from '../homecomponent/JobListingCard'

const JobListing = () => {
  return (
    <div>
      <div className='grad-div h-12'>
        <span className='hidden'>not empty</span>

      </div>
      <div>
        <DropDown/>   
      </div>
      <div>
          <JobApplyCard/>
      </div>
      
    </div>
  )
}

export default JobListing