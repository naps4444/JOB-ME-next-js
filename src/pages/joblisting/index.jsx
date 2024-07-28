// import React from 'react'
// import DropDown from '../HomeComponent/DropDown'
// import JobApplyCard from '../HomeComponent/JobApplyCard'
// import Link from 'next/link'
// import Card from '../HomeComponent/Card'
// import { useState, useEffect } from 'react'
// import { set } from 'mongoose'

// export async function getServerSideProps(){
//   const res = await fetch('http://localhost:3000/api/jobs/jobupload');
//   const data = await res.json();
//   console.log(data);



//   return{
//     props: {
//       jobs: data.data
//     }
//   }
// }

// const JobListing = ({jobs}) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (jobs && jobs.length > 0) {
//       setLoading(false);
//     }
//   }, [jobs]);

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       <div className='grad-div h-12'>
//         <span className='hidden'>not empty</span>

//       </div>
//       <div>
//         <DropDown/>   
//       </div>

//       <div className='mt-10 lg:hidden'>
//         <Card/>

//       </div>

//       <div className='mt-10 hidden lg:block'>
//           {/* <JobApplyCard/> */}
          
//       </div>

//       <div className='w-6/12 mx-auto '>
//         {
//           jobs.map((job) => {
//             <div key={job.id}>
//               <p>{job.company}</p>
//             </div>

//           })
//         }
//       </div>






      
//     </div>
//   )
// }

// export default JobListing








import React, { useState, useEffect } from 'react';
import DropDown from '../HomeComponent/DropDown';
import JobApplyCard from '../HomeComponent/JobApplyCard';
import Card from '../HomeComponent/Card';
import Loader from '@/components/loader/Loader';
import withAuth from '@/components/Hoc/withAuth';



export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/jobs/jobupload');
  const data = await res.json();
  console.log(data);

  return {
    props: {
      jobs: data.data || [], // Ensure jobs is not undefined
    },
  };
  
}

const JobListing = ({ jobs }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (jobs && jobs.length > 0) {
      setLoading(false);
    }
  }, [jobs]);

  if (loading) {
    return (
    <div className='mx-auto flex justify-center items-center p-24'>
      <Loader />
    </div>
    );
  }

  return (
    <div>
      <div className='grad-div h-12'>
        <span className='hidden'>not empty</span>
      </div>
      <div>
        <DropDown />
      </div>
      <div className='mt-10 lg:hidden'>
      {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
       
      </div>
      <div className='mt-10 hidden lg:block'>
        {jobs.map((job) => (
          <JobApplyCard key={job.id} job={job} />
        ))}
        
      </div>
      {/* <div className='w-6/12 mx-auto'>
        {jobs.map((job) => (
          <div key={job.id}>
            <p>{job.title}</p>
            <p>{job.company}</p>
            <Image src={job.logoUrl} width={25} height={25} alt=''/>
            <p>{job.description}</p>
            <p>{job.employmentType}</p>
            <p>{job.location}</p>
            <p>{job.experience}</p>
            <p>{job.salary}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default withAuth (JobListing);
