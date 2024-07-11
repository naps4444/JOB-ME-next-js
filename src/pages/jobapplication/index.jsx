import React from 'react'

const index = () => {
  return (
    <div>

    <div className='w-full mx-auto  '>
        <form className='bg-[#DBF7FD] rounded-lg  p-8 lg:p-20 w-full lg:w-10/12 mx-auto flex flex-col gap-5'>

            <div className='grid grid-cols-1 gap-5 lg:gap-11 lg:grid-cols-2 w-full'>
                <div className='w-full'>
                <label>First name*</label>
                <input type="text"  className=' w-full outline-none h-11 text-sm px-2 rounded-lg border' />
                </div>

                <div className='w-full'>
                <label>Last name*</label>            
                <input type="text"  className=' w-full  outline-none h-11 text-sm px-2 rounded-lg border' />
                </div>

            </div>

            <div className='grid grid-cols-1 gap-5 lg:gap-11 lg:grid-cols-2 w-full'>
                <div className='w-full'>
                <label>Email address*</label> 
                <input type="email"  className=' w-full  outline-none h-11 text-sm px-2 rounded-lg border' />
                </div>

                <div className='w-full'>
                <label>Phone number*</label>            
                <input type="number"  className='w-full  outline-none h-11 text-sm px-2 rounded-lg border' />
                </div>

            </div>

      
            <div className='w-full '>
              <label>Cover letter*</label>   
              <textarea rows={7} cols={100}  className='w-full rounded-lg px-2 text-sm py-1 border outline-none'/>

                </div>

                <div className='w-full lg:w-6/12 flex flex-col rounded-lg'>
                  <label>Upload CV/Resume*</label>
                  <input type="file" placeholder='No file chosen' className='bg-white rounded-lg outline-none border border-gray-500' />
                </div>

                <div>
                  <p className='font-semibold'>File type should not be larger than 12MB. Supported file types: doc. docx. pdf. </p>
                  <div className='flex gap-2 mt-2'>
                  <input type="checkbox" />

                  <p className='text-[gray]'>I agree to the <span className='text-[#0dcaf0]'> Term & Conditions</span></p>
                  </div>
                </div>

                <div>
                  <button className='bg-[#0dcaf0] text-white rounded-xl py-2 px-4 hover:bg-white hover:text-black'>
                    Apply Now
                  </button>
                </div>
                
        </form>


                  

          

      </div>
        

    </div>
  )
}

export default index