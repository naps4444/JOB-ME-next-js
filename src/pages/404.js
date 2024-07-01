"use client"
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Link from 'next/link';


export default function NotFound () {

  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.replace('/')
      
    }, 3000)
  }, [router])


   
  return (
    <div className='not-found  mx-auto'>
      <main className="flex flex-col-reverse container mx-auto md:flex-row justify-center min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-start">OOOps!</h1>
          <h3 className='font-bold text-xl md:text-start mt-5'>Page not found</h3>
          <p className="text-base leading-7 justify-start text-gray-600">This page doesn’t exist, we suggest you go back to home.</p>
          <div className="mt-4 flex justify-center  md:justify-start gap-x-6">
            <Link
              href="/"
              className="rounded-lg btn-color text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back to home
            </Link>
            
          </div>
        </div>

        <div>
          <Image src="/error.png" width={400} height={100} alt='error image' />

        </div>
      </main>
        
        <Footer/>
    </div>
  );
}

