import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";

const Loggedin = () => {
  return (
    <div className='grid justify-center bg-white py-2 border border-b-slate-950 w-32 rounded-3xl'>
        <div className='grid grid-cols-3 w-16 -ml-2 gap- justify-center items-center mx-auto'>
            <div className=''>
            <FaUserAlt size={27}/>
            </div>
            <div className='flex flex-col justify-center items-center ml-3'>
            
            <RxDividerVertical height={100}/>

            <RxDividerVertical height={100} className='-mt-2'/>

            <RxDividerVertical height={100} className='-mt-2'/>

            <RxDividerVertical height={100} className='-mt-2'/> </div>

            <div className='ml-2'>
            <MdLogout size={30} color='#F31313'/>
            </div>

        </div>
    </div>
  )
}

export default Loggedin