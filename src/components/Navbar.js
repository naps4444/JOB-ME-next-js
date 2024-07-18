// "use client"
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Cookies from 'js-cookie';
// import logout from '../../utils/logout';

// const Navbar = () => {
//   const [userToken, setUserToken] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     // Only run on the client side
//     const token = Cookies.get("token");
//     setUserToken(token);
//   }, []);

//   return (
//     <div className='sticky top-0 z-50'>
//       <nav className="bg-[#FFFFFFCC] py-1 lg:py-2 shadow-lg">
//         <div className="w-11/12 container mx-auto">
//           <div className="flex justify-between items-center">
//             <div className="flex space-x-7">
//               <div>
//                 <Link href="/" className="flex items-center py-4 px-2">
//                   <Image src="/JOBME.png" width={75} height={100} alt='logo' className='w-auto h-auto' />
//                 </Link>
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-1 gap-4">
//               <Link href="/" className="py-4 px-2 text-black text-hover transition duration-300">Home</Link>
//               <Link href="/joblisting" className="py-4 px-2 text-black text-hover transition duration-300">Job Listings</Link>
//               <Link href="/contacts" className="py-4 px-2 text-black text-hover transition duration-300">Contact Us</Link>
//             </div>

//             {
//               userToken ? (
//                 <button onClick={logout} className='hidden lg:block'>
//                   LOGOUT
//                 </button>
//               ) : (
//                 <div className='hidden md:flex justify-center gap-3'>
//                   <Link href="/login" className='flex justify-center items-center w-16 h-10 my-auto rounded-lg btn-color text-white hover:bg-white hover:text-black ease-in-out duration-500'>
//                     Log In
//                   </Link>
//                   <Link href="/signup" className='flex justify-center items-center w-16 ml-2 h-10 my-auto rounded-lg hover-btn hover:text-white ease-in-out duration-500'>
//                     Sign Up
//                   </Link>
//                 </div>
//               )
//             }

//             <div className="md:hidden flex items-center">
//               <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 <svg className="w-6 h-6 text-gray-500 hover:text-gray-900"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor">
//                   {isMenuOpen ? (
//                     <path d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mb-2`}>
//           <Link href="/" className="block py-2 px-4 text-sm text-black text-hover">Home</Link>
//           <Link href="/joblisting" className="block py-2 px-4 text-sm text-black text-hover">Job Listings</Link>
//           <Link href="/contacts" className="block py-2 px-4 text-sm text-black text-hover">Contact Us</Link>

//           {
//             userToken ? <button onClick={logout} className="block py-2 px-4 text-sm text-black text-hover">
//             LOGOUT
//           </button> : (
//               <>
//                 <Link href="/login" className="block py-2 px-4 text-sm text-black text-hover">Log In</Link>
//                 <Link href="/signup" className="block py-2 px-4 text-sm text-black text-hover">Sign Up</Link>
//               </>
//             )
//           }
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar;




















'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import logout from '../../utils/logout';
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import ProfileModal from './ProfileModal';
import LogOutModal from './LogOutModal';

const Navbar = () => {
  const [userToken, setUserToken] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Only run on the client side
    const token = Cookies.get("token");
    setUserToken(token);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const [show, setShow] = useState(false)

  const [show1, setShow1] = useState(false)


  const toggleShow = ()=>{
    setShow(!show)
  }
  const toggleShow1 = ()=>{
    setShow1(!show1)
  }

  return (
    <div className='sticky top-0 z-50' ref={menuRef}>
      <nav className="bg-[#FFFFFFCC] py-1 lg:py-2 shadow-lg">
        <div className="w-11/12 container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-7">
              <div>
                <Link href="/" className="flex items-center py-4 px-2" onClick={handleLinkClick}>
                  <Image src="/JOBME.png" width={75} height={100} alt='logo' className='w-auto h-auto' />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-1 gap-4">
            {userToken ? (
 null 
) : (
  <Link href="/" className="py-4 px-2 text-black text-hover transition duration-300">Home</Link>
  
)}
              
              <Link href="/joblisting" className="py-4 px-2 text-black text-hover transition duration-300">Job Listings</Link>
              
{userToken ? (
  <Link href="/appliedjobs" className="py-4 px-2 text-black text-hover transition duration-300">Applied Jobs</Link>  
) : (
  null
  
)}
              <Link href="/contacts" className="py-4 px-2 text-black text-hover transition duration-300">Contact Us</Link>
            </div>

            {userToken ? (
              <div className='hidden lg:block'>
                <div className='grid justify-center bg-white py-1 border border-b-slate-950 w-[125px] rounded-3xl'>
        <div className='grid grid-cols-3 w-16 -ml-2 gap- justify-center items-center mx-auto'>
          
          <Link onClick={toggleShow} href="">
          
            <div className=''>
            <FaUserAlt size={27}/>
            </div>
            {show && <div className='absolute' style={{right: '0px', top: '0px'}}>
              <Image src="/profileICON.svg" width="20" height="20" alt=''/>
              
            </div>}
            </Link>
            


            <div className='flex flex-col justify-center items-center ml-3'>
            
            <RxDividerVertical height={100}/>

            <RxDividerVertical height={100} className='-mt-2'/>

            <RxDividerVertical height={100} className='-mt-2'/>

            <RxDividerVertical height={100} className='-mt-2'/> </div>


        <Link onClick={toggleShow1} href="">
            <div  className='ml-2' >
            <MdLogout size={30} color='#F31313'/>
            </div>
            {show1 && <div className='absolute' style={{right: '0px', top: '0px'}}>
              <LogOutModal/>
              
            </div>}

            </Link>


        </div>
    </div>

              </div>
              
            ) : (
              <div className='hidden lg:flex justify-center gap-3'>
                <Link href="/login" className='flex justify-center items-center w-16 h-10 my-auto rounded-lg btn-color text-white hover:bg-white hover:text-black ease-in-out duration-500'>
                  Log In
                </Link>
                <Link href="/signup" className='flex justify-center items-center w-16 ml-2 h-10 my-auto rounded-lg hover-btn hover:text-white ease-in-out duration-500'>
                  Sign Up
                </Link>
              </div>
            )}

            <div className="lg:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6 text-gray-500 hover:text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mb-2`}>
          

          {userToken ? (
 null 
) : (
  <Link href="/" className="block py-2 px-4 text-sm text-black text-hover" onClick={handleLinkClick}>Home</Link>
  
)}



          <Link href="/joblisting" className="block py-2 px-4 text-sm text-black text-hover" onClick={handleLinkClick}>Job Listings</Link>


          {userToken ? (
  <Link href="/appliedjobs" className="block py-2 px-4 text-sm text-black text-hover" onClick={handleLinkClick}>Applied Jobs</Link>  
) : (
  null
  
)}





          <Link href="/contacts" className="block py-2 px-4 text-sm text-black text-hover" onClick={handleLinkClick}>Contact Us</Link>

          {userToken ? (
            <button onClick={() => { logout(); handleLinkClick(); }} className="block py-2 px-4 text-sm text-black text-hover">
              LOGOUT
            </button>
          ) : (
            <>
              <Link href="/login" className="block py-2 px-4 text-sm text-black text-hover" onClick={handleLinkClick}>Log In</Link>
              <Link href="/signup" className="block py-2 px-4 text-sm text-black text-hover" onClick={handleLinkClick}>Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



