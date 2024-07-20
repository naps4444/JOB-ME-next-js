
import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';



const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = {
        name: data.name,
        email: data.email,
        phonenumber: data.phonenumber,
        subject: data.subject,
        message: data.message
      };
      const res = await fetch("/api/auth/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      setLoading(false);
      if (res.ok) {
        setLoading(false);
        //toast here
        toast.success("Message sent Successful");
        console.log(formData);
        reset();
        setFormError("");
      } else {
        console.error("Submission failed", responseData);
      }
    } catch (error) {
      console.log(error, "Something went wrong");
      setLoading(false)
    }

  }



  return (
    <>
    <div className='relative'>
    <Toaster position='top-center' />
      
    <div className='w-full  z-10  '> 
      <div className='contact-bg flex flex-col justify-center items-center  h-36 lg:h-64 text-white '>
        <h1 className='text-2xl'>Get In Touch With Us</h1>
        <h2>We want to hear from you</h2>
      </div>
    </div>
      <div className='w-9/12 mx-auto z-20 -mt-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-[#DBF7FD] rounded-lg py-8 px-2 flex flex-col  gap-3 xl:gap-10 xl:px-0'>
        {formError && <p className='text-red-500 font-semibold'>{formError}</p>}
          <div className='flex flex-col gap-3 xl:gap-10 justify-between '>
            <div className='flex flex-col lg:flex-row gap-3 xl:gap-10 w-full mx-auto lg:w-11/12 justify-center items-center'>
           
           
            <div className='w-full'>            
              <input {...register("name", { required: true })} type="text" placeholder={` ${errors.name ? " " : "Name*"}`} className='w-full mx-auto outline-none h-11 text-sm px-2 rounded-lg border ' />             
              {errors.name && errors.name.type === "required" && <span className='text-red-500 py-1 pl-2'>Name is required</span>} 
            </div>


            {/* gap */}


            <div className='w-full'>            
              <input {...register("email", { required: true })} type="email" placeholder={` ${errors.email ? " " : "Email*"}`} className='w-full outline-none h-11 text-sm px-2 rounded-lg border ' />
              {errors.email && errors.email.type === "required" && <span className='text-red-500 py-1 pl-2'>Email is required</span>}
              </div>


            </div>



            {/* gap */}



            <div className='flex flex-col lg:flex-row gap-3 xl:gap-10 lg:gap-5 w-full mx-auto lg:w-11/12 justify-center items-center'>

            <div className='w-full'>              
              <input {...register("phonenumber", { required: true })} type="phone" placeholder={` ${errors.phonenumber ? " " : "Phone number*"}`} className='w-full outline-none h-11 text-sm px-2 rounded-lg border' />   
              {errors.phonenumber && errors.phonenumber.type === "required" && <span className='text-red-500 py-1 pl-2'> Phone Number is required</span>}

            </div>      


            {/* gap */}



            <div className='w-full'>        
              <input {...register("subject", { required: true })} type="text" placeholder={` ${errors.subject ? " " : "Subject*"}`} className='w-full outline-none h-11 text-sm px-2 rounded-lg border' />

              {errors.subject && errors.subject.type === "required" && <span className='text-red-500 py-1 pl-2'>subject is required</span>}
              </div>



            </div>
            </div>
            <div className='flex flex-col justify-center w-full items-center'>
              <textarea {...register("message", { required: true })} rows={7} cols={104} placeholder={` ${errors.message ? " " : "Message*"} `} className='w-full lg:w-[92%] rounded-lg px-2 text-sm py-1 border outline-none'/>
              {errors.message && errors.message.type === "required" && <span className='text-red-500 py-1 pl-2'>message is required</span>}

            </div>

            <div className='w-full lg:w-11/12 mx-auto'>
              <button className='bg-[#0DCAF0] text-white py-2 rounded-xl w-full hover:bg-white hover:text-black ease-in-out duration-500'>{loading ? "Sending..." : "Send Message"}</button>
            </div>
            

            

          

        </form>
      </div>

      <div className='flex flex-col lg:flex-row mx-auto w-10/12 gap-6 justify-center items-center mt-10 '>
        <div className='box text-center w-[365px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4'>
          <div className='flex justify-center items-center'>
            <Image src="/Frame117.png" alt='image' width={100} height={100}  className='w-24 h-auto' />
          </div>
          <div className='mt-3'>
            <h1 className='text-xl font-bold'>Call Us</h1>
            <p className='font-medium text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
            <p className='text-[#0dcaf0] mt-1'>+44567890239</p>
          </div>
        </div>

        <div className='box text-center w-[365px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4'>
          <div className='flex justify-center items-center'>
            <Image src="/Frame119.png" alt='image' width={100} height={100} className='w-24 h-auto'  />
          </div>
          <div className='mt-3'>
            <h1 className='text-xl font-bold'>Email Us</h1>
            <p className='font-medium text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
            <p className='text-[#0dcaf0] mt-1'>Commando22@gmail.com</p>
          </div>
        </div>

        <div className='box text-center w-[365px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4'>
          <div className='flex justify-center items-center'>
            <Image src="/Frame120.png" alt='image' width={100} height={100} className='w-24 h-auto'  />
          </div>
          <div className='mt-3'>
            <h1 className='text-xl font-bold'>Location</h1>
            <p className='font-medium text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
            <p className='text-[#0dcaf0] mt-1'>23 shinghai street Lagos, Nigeria</p>
          </div>
        </div>






        
      </div>

      
    </div>
    
    </>
  )
}

export default  Contact