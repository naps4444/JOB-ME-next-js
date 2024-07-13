import React from 'react'
import DropDown from '../HomeComponent/DropDown'
import JobApplyCard from '../homecomponent/JobListingCard'

const JobListing = () => {
  return (
    <div>
      <div className='grad-div h-12'>
        <span className='hidden'>jjjj</span>

      </div>
      <div>
        <DropDown/>

        <div>
          <JobApplyCard/>
        



        </div>
      </div>
      
    </div>
  )
}

export default JobListing