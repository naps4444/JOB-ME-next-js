// import React, { useState, useEffect } from 'react'
// import Card from './Card'
// import Loader from "@/components/loader/Loader";


// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/jobs/jobupload');
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       jobs: data.data || [], // Ensure jobs is not undefined
//     },
//   };
  
// }

// const LatestJob = ({ jobs }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (jobs && jobs.length > 0) {
//       setLoading(false);
//     }
//   }, [jobs]);

//   if (loading) {
//     return <div className='mx-auto flex justify-center items-center p-24'> <Loader /> </div> ;
//   }


//   return (
//     <div className='container mx-auto w-11/12 mt-10'>
//         <div className='flex flex-col justify-center w-10/12 mx-auto '>
//             <h1 className='text-center text-xl font-semibold'>Latest Job Listing</h1>
//             <p className='text-center mt-5 '>Lorem ipsum dolor sit amet consectetur. Augue lacus senectus at amet viverra ultrices eget. Tincidunt tristique viverra facilisis arcu non nulla faucibus. Adipiscing blandit nunc lobortis pretium. Tempus viverra vitae nisl imperdiet auctor mattis viverra egestas mattis.</p>
//         </div>

        

//         <div className=''>

//         {jobs.map((job) => (
//           <Card key={job.id} job={job}/>
//         ))
//       }

//         </div>


        
        
//     </div>
    
//   )
// }

// export default LatestJob







import React, { useState, useEffect } from 'react';
import Card from './Card';
import Loader from "@/components/loader/Loader";

export async function getServerSideProps() {
  const res = await fetch('/api/jobs/jobupload');
  const data = await res.json();
  // console.error('Error fetching jobs:', error);
    
    
    return {
      props: {
        jobs: data.data || [], // Ensure jobs is not undefined
      },
    };    

}
  
   


const LatestJob = ({ jobs }) => {
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
    <div className='container mx-auto w-11/12 mt-10'>
      <div className='flex flex-col justify-center w-10/12 mx-auto'>
        <h1 className='text-center text-xl font-semibold'>Latest Job Listing</h1>
        <p className='text-center mt-5'>
          Lorem ipsum dolor sit amet consectetur. Augue lacus senectus at amet viverra ultrices eget. Tincidunt tristique viverra facilisis arcu non nulla faucibus. Adipiscing blandit nunc lobortis pretium. Tempus viverra vitae nisl imperdiet auctor mattis viverra egestas mattis.
        </p>
      </div>

      <div className=''>
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default LatestJob;
