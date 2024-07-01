import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    
    <nav className="bg-white shadow-lg">
      <div className="w-11/12 md:w-10/12 lg:w-10/12 container mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2 ">
              <Image src="/JOBME.png" width={75} height={100} alt='logo' />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1 gap-4">
            <Link href="/" className="py-4 px-2 text-black text-hover transition duration-300">Home</Link>
            <Link href="/about" className="py-4 px-2 text-black text-hover transition duration-300">Job Listings</Link>
            <Link href="/contact" className="py-4 px-2 text-black text-hover transition duration-300">Contact Us</Link>
          </div>

          <div className='hidden md:flex justify-center gap-1'>
            <Link href="/login">
            <button className='w-16 h-10 my-auto rounded btn-color text-white hover:bg-white hover:text-black'>Log In</button>
            </Link>

            <Link href="/signup">
            <button className='w-16 ml-2 h-10 my-auto rounded hover-btn hover:text-white'>Sign Up</button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-gray-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mb-2`}>
        <Link href="/" className="block py-2 px-4 text-sm text-black text-hover">Home</Link>
        <Link href="/about" className="block py-2 px-4 text-sm text-black text-hover">Job Listings</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm text-black text-hover">Contact Us</Link>

        <Link href="/login" className="block py-2 px-4 text-sm text-black text-hover">Log In</Link>
        <Link href="/signup" className="block py-2 px-4 text-sm text-black text-hover">Sign Up</Link>

        
      
      </div>
    </nav>
    </>
  )
}

export default Navbar