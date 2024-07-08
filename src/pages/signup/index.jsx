import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { IoEye } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import toast, {Toaster} from 'react-hot-toast';

const SignUp = () => {
 const {register, handleSubmit, formState:{errors}, reset, watch} = useForm();
 const [loading, setLoading] = useState(false)
const [regError, setRegError] = useState("")


const onSubmit = async (data)=>{
  //  console.log(data);

   try {
    const formData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password
    }
    console.log(formData);
    const res = await fetch("api/authuser", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    console.log(res);

    if(res.ok){
      
        toast.success("Registration Successful")
        reset()
      
    

      //toast here 

    } else{
      const errorData = await res.json()
      console.error("user registration failed", errorData)
    }
    
   } catch (error) {
    console.log(error, "Something went wrong");
    
   }

}



 const [show, setShow] = useState(false)
 const [show2, setShow2] = useState(false)

const toggle = () => {
  setShow(!show)
}
const toggle2 = () => {
  setShow2(!show2)
}

const password = watch("password")


 const passTogle = show ? 'text' : 'password'
  const passTogle2 = show2 ? 'text' : 'password'


  return (
    <div className="sign-bg  flex justify-center items-center mx-auto py-10 ">
      <Toaster
            position='top-center'
            
            />
      <div className='bg-[#ffffffe7] w-full md:w-8/12 lg:w-6/12  py-5 rounded-3xl'>
      <div className=' w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 mx-auto mt-5 my-auto'>
      
        <Link href="/">
          <div className='flex justify-center mx-auto'>
        <Image src="/JOBMEN.svg" width={75} height={75} alt={"home logo"} />

          </div>
        </Link>

          <div className='text-center mt-5'>
            <h1 className='text-lg font-semibold'>Sign Up!</h1>
            <h2 className='text-base font-medium mt-2'>Register to hit your dream job!</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col mt-7 gap-6'>

          {regError && <p className='text-red-500 font-semibold'>
            {regError}</p>}

      <div>
            <div className='w-full border rounded-lg bg-transparent'>
            <input {...register("firstname", {
                required: true
              })} type="text" placeholder={` ${errors.firstname ? " " : "First Name"}`}  className='w-full p-2 rounded-lg bg-transparent outline-none' />

</div>
       {errors.firstname && errors.firstname.type === "required" && <span className='text-red-500 py-1 pl-2'>Firstname is required</span>}


      </div>






      <div>
        
            <div className='w-full border rounded-lg bg-transparent'>
            <input {...register("lastname", {
                required: true
              })} type="text" placeholder={` ${errors.lastname ? " " : "Last Name"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />

</div>

      {errors.lastname && errors.lastname.type === "required" && <span className='text-red-500 py-1 pl-2'>Last name is required</span>}

              
      </div>






      <div>
        
            <div className='w-full border rounded-lg bg-transparent'>
            <input {...register("email",
                 {required: true,
                  pattern: { 
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    messsage: " Please enter a valid email address "
                  }
                 })} type="email" placeholder={` ${errors.email ? " " : "Email"}`} className='w-full p-2 rounded-lg bg-transparent outline-none' />

</div>

     {errors.email && errors.email.type === "required" && <span className='text-red-500 py-1 pl-2'>Email Address is required</span>}


              
      </div>



      <div>
        
            <div className='w-full border rounded-lg bg-transparent relative'>
            <input {...register("password", 
                 {required: true,
                  minLength: 4,
                  maxLength: 12,
                 })} type={passTogle}  placeholder={` ${errors.password ? " " : "Password"}`}  className='w-full p-2 rounded-lg bg-transparent outline-none' />


            
            {show ? <IoEye  onClick={toggle} className='absolute right-3 top-3'/> : <AiFillEyeInvisible onClick={toggle} className='absolute right-3 top-3'/>}

            </div>
            
              {errors.password && errors.password.type === "required" && <span className='text-red-500 py-1 pl-2'>Password is required</span>}
              {errors.password && errors.password.type === "minLength" && <span className='text-red-500 py-1 pl-2'>minimum length of password is 4</span>}
              {errors.password && errors.password.type === "maxLength" && <span className='text-red-500 py-1 pl-2'>maximum length of password is 12</span>}

          
      </div>


      <div>

        

            <div className='w-full border rounded-lg bg-transparent relative'>
            <input {...register("confrimPassword", 
                 {required: " Confrim Password is required",
                  validate: value => value === password
                 })}  type={passTogle2}  placeholder={` ${errors.confrimPassword ? " " : "Confrim Password"}`}  className='w-full p-2 rounded-lg bg-transparent outline-none' />

            {show2 ? <IoEye  onClick={toggle2} className='absolute right-3 top-3'/> : <AiFillEyeInvisible onClick={toggle2} className='absolute right-3 top-3'/>}
            </div>
            {errors.confrimPassword && errors.confrimPassword.type === "required" && <span className='text-red-500 py-1 pl-2'>Confirm Password is required</span>}
            {errors.confrimPassword && errors.confrimPassword.type === "validate" && <span className='text-red-500 py-1 pl-2'>The password does not match</span>}
            


              
      </div>


            {/* <div className='flex justify-between -mt-4'>
              <div className='flex gap-2'>
              <input type="checkbox" />
              <p>Remember me</p>
              </div>


              <div>
              <Link href="#" className='text-[#0dcaf0] hover:text-black'>Forgot Password?</Link>
              </div>
            </div> */}

            <button type='sumbmit' className='btn-color rounded-lg text-white mt-2 py-1 w-full hover:bg-white hover:text-black'>Sign Up</button>
          </form>


          <div className='flex flex-col mt-8 gap-2 justify-center items-center'>
            <div>
              <p>Or continue with</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/fblogo.png" width={25} height={25} alt='facebook logo'/>
              <Image src="/gmaillogo.png" width={25} height={25} alt='gmail logo' />
              <Image src="/linklogo.png" width={25} height={25} alt='linkdln logo'/>
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