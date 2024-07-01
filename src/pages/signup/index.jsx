import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const SignUp = () => {
  return (
    <div className='sign-bg  flex justify-center items-center mx-auto py-10'>
      <div className='bg-[#ffffffc6] w-full md:w-8/12 lg:w-6/12  py-5 rounded-3xl'>
      <div className=' w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 mx-auto mt-5 my-auto'>
          <div className='flex justify-center mx-auto'>
        <Link href="/">
        <Image src="/jobme.png" width={75} height={75} />

        </Link>
          </div>

          <div className='text-center mt-5'>
            <h1 className='text-lg font-semibold'>Sign Up!</h1>
            <h2 className='text-base font-medium mt-2'>Register to hit your dream job!</h2>
          </div>

          <form className=' flex flex-col mt-7 gap-6'>


            <div className='w-full border rounded-lg bg-transparent'>
            <input type="text" placeholder='First name' className='w-full p-2 rounded-lg bg-transparent' />
            </div>

            <div className='w-full border rounded-lg bg-transparent'>
            <input type="text" placeholder='Last name' className='w-full p-2 rounded-lg bg-transparent' />
            </div>

            <div className='w-full border rounded-lg bg-transparent'>
            <input type="email" placeholder='Email Address' className='w-full p-2 rounded-lg bg-transparent' />
            </div>


            <div className='w-full border rounded-lg bg-transparent'>
            <input type="password" placeholder='Password' className='w-full p-2 rounded-lg bg-transparent' />
            </div>

            <div className='w-full border rounded-lg bg-transparent'>
            <input type="password" placeholder='Confirm password' className='w-full p-2 rounded-lg bg-transparent' />
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-2'>
              <input type="checkbox" />
              <p>Remember me</p>
              </div>


              <div>
              <Link href="#" className='text-[#0dcaf0] hover:text-black'>Forgot Password?</Link>
              </div>
            </div>

            <button className='btn-color rounded-lg text-white mt-2 py-1 w-full hover:bg-white hover:text-black'>Sign Up</button>
          </form>


          <div className='flex flex-col mt-8 gap-2 justify-center items-center'>
            <div>
              <p>Or continue with</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/fblogo.png" width={25} height={25} />
              <Image src="/gmaillogo.png" width={25} height={25} />
              <Image src="/linklogo.png" width={25} height={25} />
            </div>

            <div>
              <p>Already have an account? <span> <Link href="/login" className='text-[#0dcaf0] hover:text-black'>Log in</Link></span> </p>
            </div>
          </div>





      </div>

      </div>
    </div>
  )
}

export default SignUp