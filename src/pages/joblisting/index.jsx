import React from 'react'
import DropDown from '../HomeComponent/DropDown'
import JobApplyCard from '../HomeComponent/JobApplyCard'
import Link from 'next/link'
import Card from '../HomeComponent/Card'

const JobListing = () => {
  return (
    <div>
      <div className='grad-div h-12'>
        <span className='hidden'>not empty</span>

      </div>
      <div>
        <DropDown/>   
      </div>

      <div className='mt-10 lg:hidden'>
        <Card/>

      </div>

      <div className='mt-10 hidden lg:block'>
          <JobApplyCard/>
          
      </div>






      
    </div>
  )
}

export default JobListing