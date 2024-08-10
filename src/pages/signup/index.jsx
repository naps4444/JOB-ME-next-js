// "use client"

// import Link from 'next/link';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { useForm } from 'react-hook-form';
// import { IoEye } from "react-icons/io5";
// import { AiFillEyeInvisible } from "react-icons/ai";
// import { useRouter } from 'next/router';
// import toast, { Toaster } from 'react-hot-toast';
// import Loader from '@/components/loader/Loader';

// const SignUp = () => {
//   const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter()
  
//   const [formError, setFormError] = useState("");
//   const [show, setShow] = useState(false);
//   const [show2, setShow2] = useState(false);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const formData = {
//         firstname: data.firstname,
//         lastname: data.lastname,
//         email: data.email,
//         password: data.password
//       };
//       const res = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });
//       setLoading(false);
//       if (res.status === 409) {
//         setFormError("User already exists");
//         setLoading(false);
//       }
//       const responseData = await res.json();
//       if (res.ok) {
//         setLoading(false);
//         toast.success("Registration Successful");
//         console.log(formData);
//         reset();
//         setFormError("");


//         router.push('/login')
        
//       } else {
//         console.error("User registration failed", responseData);
//       }
//     } catch (error) {
//       console.log(error, "Something went wrong");
//       setLoading(false);
//     }
//   };

//   const toggle = () => setShow(!show);
//   const toggle2 = () => setShow2(!show2);

//   const password = watch("password");
//   const passToggle = show ? 'text' : 'password';
//   const passToggle2 = show2 ? 'text' : 'password';

//   return (
//     <div className="sign-bg flex justify-center items-center mx-auto py-10">
//       <Toaster position='top-center' />
//       <div className='bg-[#ffffffe7] w-full md:w-8/12 lg:w-6/12 py-5 rounded-3xl'>
//         <div className='w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 mx-auto mt-5 my-auto'>
//           <div className='flex justify-center mx-auto'>
//             <Link href="/">
//               <Image src="/JOBMEN.svg" width={75} height={75} alt='jobme logo' className='w-16 h-auto' />
//             </Link>
//           </div>
//           <div className='text-center mt-3'>
//             <h1 className='text-lg font-semibold'>Sign Up!</h1>
//             <h2 className='text-base'>Register to hit your dream job!</h2>
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-7 gap-6'>
//             {formError && <p className='text-red-500 font-semibold'>{formError}</p>}
//             <div>
//               <div className='w-full border rounded-lg bg-transparent'>
//                 <input {...register("firstname", { required: true })} type="text" placeholder={` ${errors.firstname ? " " : "First Name"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
//               </div>
//               {errors.firstname && errors.firstname.type === "required" && <span className='text-red-500 py-1 pl-2'>Firstname is required</span>}
//             </div>
//             <div>
//               <div className='w-full border rounded-lg bg-transparent'>
//                 <input {...register("lastname", { required: true })} type="text" placeholder={` ${errors.lastname ? " " : "Last Name"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
//               </div>
//               {errors.lastname && errors.lastname.type === "required" && <span className='text-red-500 py-1 pl-2'>Lastname is required</span>}
//             </div>
//             <div>
//               <div className='w-full border rounded-lg bg-transparent'>
//                 <input {...register("email", {
//                   required: "Email address is required",
//                   pattern: {
//                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                     message: "Please enter a valid email address"
//                   }
//                 })} type="email" placeholder={` ${errors.email ? " " : "Email"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
//               </div>
//               {errors.email && errors.email.type === "required" && <span className='text-red-500 py-1 pl-2'>Email address is required</span>}
//             </div>
//             <div>
//               <div className='w-full border rounded-lg bg-transparent relative'>
//                 <input {...register("password", {
//                   required: true,
//                   minLength: 4,
//                   maxLength: 12
//                 })} type={passToggle} placeholder={` ${errors.password ? " " : "Password"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
//                 {show ? <IoEye onClick={toggle} className='absolute right-3 top-3' /> : <AiFillEyeInvisible onClick={toggle} className='absolute right-3 top-3' />}
//               </div>
//               {errors.password && errors.password.type === "required" && <span className='text-red-500 py-1 pl-2'>Password is required</span>}
//               {errors.password && errors.password.type === "minLength" && <span className='text-red-500 py-1 pl-2'>Minimum length of password is 4</span>}
//               {errors.password && errors.password.type === "maxLength" && <span className='text-red-500 py-1 pl-2'>Maximum length of password is 12</span>}
//             </div>
//             <div>
//               <div className='w-full border rounded-lg bg-transparent relative'>
//                 <input {...register("confrimPassword", {
//                   required: "Confirm Password is required",
//                   validate: value => value === password
//                 })} type={passToggle2} placeholder={` ${errors.confrimPassword ? " " : "Confirm Password"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
//                 {show2 ? <IoEye onClick={toggle2} className='absolute right-3 top-3' /> : <AiFillEyeInvisible onClick={toggle2} className='absolute right-3 top-3' />}
//               </div>
//               {errors.confrimPassword && errors.confrimPassword.type === "required" && <span className='text-red-500 py-1 pl-2'>Confirm Password is required</span>}
//               {errors.confrimPassword && errors.confrimPassword.type === "validate" && <span className='text-red-500 py-1 pl-2'>The passwords do not match</span>}
//             </div>
//             <button type='submit' className=' btn-color flex justify-center items-center rounded-lg text-white mt-2 py-2 w-full hover:bg-white hover:text-black'>
//               <div className='flex justify-center items-center mx-auto'>
//               {  loading  ? <Loader text="Signing up..."/> : <p className='text-base'>Sign Up</p>
            
//             }
//             </div>
//             </button>
//           </form>
//           <div className='flex flex-col mt-8 gap-2 justify-center items-center'>
//             <div>
//               <p>Or continue with</p>
//             </div>
//             <div className='flex gap-2'>
//               <Image src="/fblogo.png" width={25} height={25} alt='facebook logo' />
//               <Image src="/gmaillogo.png" width={25} height={25} alt='gmail logo' />
//               <Image src="/linklogo.png" width={25} height={25} alt='linkedin logo' />
//             </div>
//             <div>
//               <p>Already have an account? <span><Link href="/login" className='text-[#0dcaf0] hover:text-black'>Log in</Link></span></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;



"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { IoEye } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '@/components/loader/Loader';
import Cookies from 'js-cookie';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const [formError, setFormError] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password
      };
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      setLoading(false);
      if (res.status === 409) {
        setFormError("User already exists");
        setLoading(false);
      }
      const responseData = await res.json();
      if (res.ok) {
        setLoading(false);
        toast.success("Registration Successful");
        console.log(formData);
        reset();
        setFormError("");

        Cookies.set("lastName", responseData.user.lastname);

        router.push('/login');
        
      } else {
        console.error("User registration failed", responseData);
      }
    } catch (error) {
      console.log(error, "Something went wrong");
      setLoading(false);
    }
  };

  const toggle = () => setShow(!show);
  const toggle2 = () => setShow2(!show2);

  const password = watch("password");

  const evaluatePasswordStrength = (password) => {
    const lengthCriteria = password.length >= 12;
    const upperCriteria = /[A-Z]/.test(password);
    const lowerCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [lengthCriteria, upperCriteria, lowerCriteria, numberCriteria, specialCriteria].filter(Boolean).length;

    switch (criteriaMet) {
      case 5:
        return "Very Strong";
      case 4:
        return "Strong";
      case 3:
        return "Medium";
      case 2:
      case 1:
        return "Weak";
      default:
        return "";
    }
  };

  const passToggle = show ? 'text' : 'password';
  const passToggle2 = show2 ? 'text' : 'password';

  return (
    <div className="sign-bg flex justify-center items-center mx-auto py-10">
      <Toaster position='top-center' />
      <div className='bg-[#ffffffe7] w-full md:w-8/12 lg:w-6/12 py-5 rounded-3xl'>
        <div className='w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 mx-auto mt-5 my-auto'>
          <div className='flex justify-center mx-auto'>
            <Link href="/">
              <Image src="/JOBMEN.svg" width={75} height={75} alt='jobme logo' className='w-16 h-auto' />
            </Link>
          </div>
          <div className='text-center mt-3'>
            <h1 className='text-lg font-semibold'>Sign Up!</h1>
            <h2 className='text-base'>Register to hit your dream job!</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-7 gap-6'>
            {formError && <p className='text-red-500 font-semibold'>{formError}</p>}
            <div>
              <div className='w-full border rounded-lg bg-transparent'>
                <input {...register("firstname", { required: true })} type="text" placeholder={` ${errors.firstname ? " " : "First Name"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
              </div>
              {errors.firstname && errors.firstname.type === "required" && <span className='text-red-500 py-1 pl-2'>Firstname is required</span>}
            </div>
            <div>
              <div className='w-full border rounded-lg bg-transparent'>
                <input {...register("lastname", { required: true })} type="text" placeholder={` ${errors.lastname ? " " : "Last Name"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
              </div>
              {errors.lastname && errors.lastname.type === "required" && <span className='text-red-500 py-1 pl-2'>Lastname is required</span>}
            </div>
            <div>
              <div className='w-full border rounded-lg bg-transparent'>
                <input {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                })} type="email" placeholder={` ${errors.email ? " " : "Email"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
              </div>
              {errors.email && errors.email.type === "required" && <span className='text-red-500 py-1 pl-2'>Email address is required</span>}
            </div>
            <div>
              <div className='w-full border rounded-lg bg-transparent relative'>
                <input {...register("password", {
                  required: true,
                  minLength: 12
                })} type={passToggle} placeholder={` ${errors.password ? " " : "Password"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' onChange={(e) => setPasswordStrength(evaluatePasswordStrength(e.target.value))} />
                {show ? <IoEye onClick={toggle} className='absolute right-3 top-3' /> : <AiFillEyeInvisible onClick={toggle} className='absolute right-3 top-3' />}
              </div>
              {errors.password && errors.password.type === "required" && <span className='text-red-500 py-1 pl-2'>Password is required</span>}
              {errors.password && errors.password.type === "minLength" && <span className='text-red-500 py-1 pl-2'>Minimum length of password is 12</span>}
              <div className="text-sm mt-2">
                Password Strength: {passwordStrength}
              </div>
            </div>
            <div>
              <div className='w-full border rounded-lg bg-transparent relative'>
                <input {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: value => value === password
                })} type={passToggle2} placeholder={` ${errors.confirmPassword ? " " : "Confirm Password"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />
                {show2 ? <IoEye onClick={toggle2} className='absolute right-3 top-3' /> : <AiFillEyeInvisible onClick={toggle2} className='absolute right-3 top-3' />}
              </div>
              {errors.confirmPassword && errors.confirmPassword.type === "required" && <span className='text-red-500 py-1 pl-2'>Confirm Password is required</span>}
              {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span className='text-red-500 py-1 pl-2'>The passwords do not match</span>}
            </div>
            <button type='submit' className='btn-color flex justify-center items-center rounded-lg text-white mt-2 py-2 w-full hover:bg-white hover:text-black'>
              <div className='flex justify-center items-center mx-auto'>
                {loading ? <Loader text="Signing up..." /> : <p className='text-base'>Sign Up</p>}
              </div>
            </button>
          </form>
          <div className='flex flex-col gap-1 text-center mt-5'>
          <div>
              <p>Or continue with</p>
            </div>
            <div className="flex mx-auto gap-2">
              <Image
                src="/fblogo.png"
                width={25}
                height={25}
                alt="facebook logo"
              />
              <Image
                src="/gmaillogo.png"
                width={25}
                height={25}
                alt="gmail logo"
              />
              <Image
                src="/linklogo.png"
                width={25}
                height={25}
                alt="linkdln logo"
              />
            </div>
            <p className=''>Already have an account? <span className='text-[#0dcaf0] hover:text-black'><Link href="/login">Log in</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
