import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";

const ProfileModal = () => {
  return (
    <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true" style={{right: '0px', top: '0px'}}>
      {/* 
        Background backdrop, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      */}
      <div className="fixed inset-0 bg-gray-100 bg-opacity-35 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen right-0">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* 
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          */}
          <div className=" transform absolute py-2 right-16 top-12 px-7 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-3/12">
            <div className="bg-white pb-4 pt-5 sm:p-6 sm:pb-4 w-full flex flex-col gap-3">
              <h1 className='mx-auto text-center font-semibold text-xl'>Account Information</h1>

              <div className='flex items-center gap-2'>
                <FaRegUser />
                <Link href="" >My Profile</Link>
              </div>

              <div className='flex items-center gap-2'>
                <MdOutlineSettings />
                <Link href="" >Settings</Link>
              </div>

              <div className='flex items-center gap-2'>
              <RxQuestionMarkCircled />
                <Link href="" >Help Centre</Link>
              </div>


              <div className='border-y-[1px] border-black flex gap-2 items-center py-2 mx-auto'>
              <Image src="/modelimg.svg" width={25} height={25} className='w-auto h-auto' alt='' />
              
              <div className='flex flex-col'>
                <h1>Alicia Kayla</h1>
                <p>aliciakayla5@gmail.com</p>
              </div>

            </div>
              
            </div>





            
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
