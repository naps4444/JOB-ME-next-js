// {import withAuth from '@/components/Hoc/withAuth';
// import React, {useState} from 'react'
// import { useForm } from 'react-hook-form'
// import toast, { Toaster } from 'react-hot-toast';

// const jobApplicationIndex = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [formError, setFormError] = useState("");

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const formData = {
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email: data.email,
//         phonenumber: data.phonenumber,
//         cover: data.cover,
//         resume: data.resume
//       };
//       const res = await fetch("/api/auth/jobapplication", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });
//       setLoading(false);
//       if (res.ok) {
//         setLoading(false);
//         //toast here
//         toast.success("Job Applied Successful");
//         console.log(formData);
//         reset();
//         setFormError("");
//       } else {
//         console.error("Submission failed", responseData);
//       }
//     } catch (error) {
//       console.log(error, "Something went wrong");
//       setLoading(false)
//     }

//   }


  

//   return (
//     <div>

//     <div className='w-full mx-auto  '>
//     <Toaster position='top-center' />
//         <form onSubmit={handleSubmit(onSubmit)} className='bg-[#DBF7FD] rounded-lg  p-8 lg:p-20 w-full lg:w-10/12 mx-auto flex flex-col gap-5'>
//         {formError && <p className='text-red-500 font-semibold'>{formError}</p>}

//             <div className='grid grid-cols-1 gap-5 lg:gap-11 lg:grid-cols-2 w-full'>
//                 <div className='w-full'>
//                 <label>First name*</label>
//                 <input type="text"  className=' w-full outline-none h-11 text-sm px-2 rounded-lg border' />
//                 </div>

//                 <div className='w-full'>
//                 <label>Last name*</label>            
//                 <input type="text"  className=' w-full  outline-none h-11 text-sm px-2 rounded-lg border' />
//                 </div>

//             </div>

//             <div className='grid grid-cols-1 gap-5 lg:gap-11 lg:grid-cols-2 w-full'>
//                 <div className='w-full'>
//                 <label>Email address*</label> 
//                 <input type="email"  className=' w-full  outline-none h-11 text-sm px-2 rounded-lg border' />
//                 </div>

//                 <div className='w-full'>
//                 <label>Phone number*</label>            
//                 <input type="number"  className='w-full  outline-none h-11 text-sm px-2 rounded-lg border' />
//                 </div>

//             </div>

      
//             <div className='w-full '>
//               <label>Cover letter*</label>   
//               <textarea rows={7} cols={100}  className='w-full rounded-lg px-2 text-sm py-1 border outline-none'/>

//                 </div>

//                 <div className='w-full lg:w-6/12 flex flex-col rounded-lg'>
//                   <label>Upload CV/Resume*</label>
//                   <input type="file" placeholder='No file chosen' className='bg-white rounded-lg outline-none border border-gray-500' />
//                 </div>

//                 <div>
//                   <p className='font-semibold'>File type should not be larger than 12MB. Supported file types: doc. docx. pdf. </p>
//                   <div className='flex gap-2 mt-2'>
//                   <input type="checkbox" />

//                   <p className='text-[gray]'>I agree to the <span className='text-[#0dcaf0]'> Term & Conditions</span></p>
//                   </div>
//                 </div>

//                 <div>
//                   <button className='bg-[#0dcaf0] text-white rounded-xl py-2 px-4 hover:bg-white hover:text-black'>
//                     Apply Now
//                   </button>
//                 </div>
                
//         </form>


                  

          

//       </div>
        

//     </div>
//   )
// }

// export default withAuth (jobApplicationIndex)}



import withAuth from '@/components/Hoc/withAuth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useAppContext } from '@/context/AppContext';

const JobApplication = () => {
  const { userId, jobId } = useAppContext();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = {
        userId,  // Include userId
        jobId,   // Include jobId
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phonenumber: data.phonenumber,
        cover: data.cover,
        resume: data.resume
      };
      const res = await fetch("/api/auth/jobapplication", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: JSON.stringify(formData)
      });
      setLoading(false);
      if (res.ok) {
        toast.success("Job Applied Successfully");
        reset();
        setFormError("");
      } else {
        console.error("Submission failed", await res.json());
      }
    } catch (error) {
      console.log(error, "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className='w-full mx-auto'>
      <Toaster position='top-center' />

      <div className='w-10/12 mx-auto'>
      <p>User ID: {userId}</p>
      <p>Job ID: {jobId}</p>
      
    </div>


      <form onSubmit={handleSubmit(onSubmit)} className='bg-[#DBF7FD] rounded-lg p-8 lg:p-20 w-full lg:w-10/12 mx-auto flex flex-col gap-5'>
        {formError && <p className='text-red-500 font-semibold'>{formError}</p>}

        <div className='grid grid-cols-1 gap-5 lg:gap-11 lg:grid-cols-2 w-full'>
          <div className='w-full'>
            <label>First name*</label>
            <input 
              type="text" 
              {...register('firstName', { required: true })}
              className='w-full outline-none h-11 text-sm px-2 rounded-lg border' 
            />
            {errors.firstName && <span className='text-red-500'>First name is required</span>}
          </div>

          <div className='w-full'>
            <label>Last name*</label>
            <input 
              type="text" 
              {...register('lastName', { required: true })}
              className='w-full outline-none h-11 text-sm px-2 rounded-lg border' 
            />
            {errors.lastName && <span className='text-red-500'>Last name is required</span>}
          </div>
        </div>

        <div className='grid grid-cols-1 gap-5 lg:gap-11 lg:grid-cols-2 w-full'>
          <div className='w-full'>
            <label>Email address*</label>
            <input 
              type="email" 
              {...register('email', { required: true })}
              className='w-full outline-none h-11 text-sm px-2 rounded-lg border' 
            />
            {errors.email && <span className='text-red-500'>Email address is required</span>}
          </div>

          <div className='w-full'>
            <label>Phone number*</label>
            <input 
              type="number" 
              {...register('phonenumber', { required: true })}
              className='w-full outline-none h-11 text-sm px-2 rounded-lg border' 
            />
            {errors.phonenumber && <span className='text-red-500'>Phone number is required</span>}
          </div>
        </div>

        <div className='w-full'>
          <label>Cover letter*</label>
          <textarea 
            rows={7} 
            cols={100} 
            {...register('cover', { required: true })}
            className='w-full rounded-lg px-2 text-sm py-1 border outline-none' 
          />
          {errors.cover && <span className='text-red-500'>Cover letter is required</span>}
        </div>

        <div className='w-full lg:w-6/12 flex flex-col rounded-lg'>
          <label>Upload CV/Resume*</label>
          <input 
            type="file" 
            {...register('resume', { required: true })}
            className='bg-white rounded-lg outline-none border border-gray-500' 
          />
          {errors.resume && <span className='text-red-500'>Resume is required</span>}
        </div>

        <div>
          <p className='font-semibold'>File type should not be larger than 12MB. Supported file types: doc, docx, pdf.</p>
          <div className='flex gap-2 mt-2'>
            <input type="checkbox" {...register('terms', { required: true })} />
            <p className='text-[gray]'>I agree to the <span className='text-[#0dcaf0]'>Terms & Conditions</span></p>
            {errors.terms && <span className='text-red-500'>You must agree to the terms</span>}
          </div>
        </div>

        <div>
          <button type='submit' className='bg-[#0dcaf0] text-white rounded-xl py-2 px-4 hover:bg-white hover:text-black'>
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default withAuth(JobApplication);