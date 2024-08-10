" use client";
import Link from "next/link";
import Image from "next/image";
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import DropDown from "../HomeComponent/DropDown";
import withAuth from "@/components/Hoc/withAuth";
import { useState, useEffect, useContext } from "react";
import Loader from "@/components/loader/Loader";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import AppContext from "@/context/AppContext";
import useFetch from "../../../hooks/useFetch";
import { formatDistanceToNow } from "date-fns";

const Joblisting = () => {
  const { selectedJobType, selectedIndustry, selectedMode, selectedLocation } =
    useContext(AppContext);
  const { allJobs: jobs, error, loading } = useFetch("/api/jobs/jobupload");
  console.log("All jobs page", jobs);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;


  if (loading) {
    return (<div className="flex justify-center items-center py-[100px]"> 
         <Loader/>
      </div>
      );
  }

  // job filtering
  const filteredJobs = jobs.filter((job) => {
    return (
      (selectedJobType ? job.employmentType === selectedJobType : true) &&
      (selectedIndustry ? job.industry === selectedIndustry : true) &&
      (selectedMode ? job.employmentType === selectedMode : true) &&
      (selectedLocation ? job.location === selectedLocation : true)
    );
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div>
        <div className="gradiant-bg"></div>
        <div>
          <DropDown/>
        </div>
        {/* LARGE CARD */}
        <div className="hidden lg:block">
          <div>
            {currentJobs &&
              currentJobs.map((job) => (
                <div
                  key={job.id}
                  className="container gap-16 grid md:grid-cols-4 justify-between items-center mx-auto w-11/12 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-5 p-5  "
                >
                  <div className="flex justify-start items-center gap-3 w-44 lg:w-64 ">
                    <Image
                      src={job.logoUrl}
                      width={65}
                      height={65}
                      alt="google icon"
                      className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-2"
                    />

                    <div className="text-lg">
                      <h4 className="font-semibold">{job.title}</h4>
                      {job.company}
                    </div>
                  </div>
                  {/* FULL TIME DIV */}
                  <div className="flex flex-col justify-start items-start gap-1 ml-14 w-48">
                    <span className="rounded-md bg-[#0dcaf024] text-[#0dcaf0] px-3 py-1.5 ">
                      {job.employmentType}
                    </span>
                    <p className="flex justify-start items-center gap-1  text-[#00000080] ">
                    <GoClock className='icon-color' size={20} />
                      Posted{" "}
                      {/* {formatDistanceToNow( new Date(job?.createdAt), {
                  addSuffix: true,
                })} */}
                      {job?.createdAt
                        ? formatDistanceToNow(new Date(job.createdAt), {
                            addSuffix: true,
                          })
                        : "Invalid date"}
                      {/* formatDistanceToNow(new Date(job?.createdAt), {addSuffix: true})} : " " */}
                    </p>
                  </div>
                  {/* LOCATION DIV */}
                  <div className="flex flex-col justify-start items-start gap-4 w-44 ml-14 ">
                    <p className="flex justify-start items-center gap-1  text-[#00000080]">
                    <SlLocationPin className=' text-[#00000080]' />
                      {job.location}
                    </p>
                    <p className="font-medium ml-1">{job.salary}</p>
                  </div>
                  {/* BUTTON DIV */}

                  <Link
                    href={`/joblisting/${job._id}`}
                    className=" btn bg-[#0dcaf0] hover:bg-cyan-600 mx-auto rounded-xl px-3 py-3 text-white text-lg text-center mb-5 "
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* SMALL CARD */}
        <div className="block lg:hidden">
          <div>
            {currentJobs &&
              currentJobs.map((job) => (
                <div
                  key={job.id}
                  className="container mx-auto justify-center w-11/12  my-7"
                >
                  <div className="border rounded-t-lg w-[300px] h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 mx-auto md:w-80">
                    <h3 className="font-semibold mb-2 text-xl md:text-[22px]">
                      {job.title}
                    </h3>
                    <p className="flex justify-start items-center gap-2 text-[#00000080] ">
                    <GoClock className='icon-color' size={20} />
                      Posted{" "}
                      
                      {job?.createdAt
                        ? formatDistanceToNow(new Date(job.createdAt), {
                            addSuffix: true,
                          })
                        : "Invalid date"}
                    </p>
                    <div className="flex justify-between mt-3 mb-3">
                      <span className="bg-[#0dcaf0af] mb-1 text-white w-18 rounded-md p-1 ">
                        {job.employmentType}
                      </span>
                      <p className="font-medium">{job.salary}</p>
                    </div>
                    <hr className="" />
                    <div className="flex mb-7 ">
                      <Image
                        src={job.logoUrl}
                        width={60}
                        height={60}
                        alt="google icon"
                        className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 rounded-md mt-4 "
                      />
                      <div className="ml-3 mt-3">
                        <h4>{job.company}</h4>
                        <p className="flex justify-start items-center gap-2  text-[#00000080]">
                        <SlLocationPin className=' text-[#00000080]' />
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/joblisting/${job._id}`}
                      className="btn w-20 bg-[#0dcaf0] hover:bg-cyan-600 mx-auto rounded-md p-2 text-white md:w-[100px] lg:text-xl "
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
                // <div key={job.id}>
                //   <p>{job.title}</p>
                //   <Image src={job.logoUrl} alt="company logo" width={40} height={40} />
                // </div>
              ))}
          </div>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div>
              <nav
                aria-label="Pagination"
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              >
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    aria-current={
                      currentPage === index + 1 ? "page" : undefined
                    }
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === index + 1
                        ? "bg-[#0DCAF0] text-white"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    } focus:z-20 focus:outline-offset-0`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Joblisting);