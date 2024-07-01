import React from 'react'
import Image from 'next/image'

const Testy = () => {
  return (
    <div className='container w-10/12 flex flex-col justify-center items-center mx-auto h-[450px] p-2'>
        <div className='text-center mt-6'>
            <h1 className='text-base text-[#0dcaf0]'>Testimonials</h1>
            <h1 className='text-xl'>Feedbacks from clients</h1>
        </div>

        <div className='bg-[#F5F3F399] p-6 mt-5'>
            <div className='w-72 flex flex-col justify-center items-center text-center'>
                <Image src="/testy1.png" width={100} height={100} alt='profile picture' />

                <p>“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”</p>

                <h1 className='text-lg text-[#0dcaf0]'>Alice Shata</h1>

                <h1>South Africa</h1>
            </div>
        </div>
    </div>
  )
}

export default Testy