import Link from "next/link";
import UpdateStatusModal from "@/components/Modal/UpdateStatusModal";
import { useState } from "react";

const Appliedjobs = () => {
  const [showStatus, setShowStatus] = useState(false);

  const showUserStatus = () => {
    setShowStatus(true);
  };


    return (
      <div className="">
        <UpdateStatusModal show={showStatus} setShow={setShowStatus} />
        <div className=" container w-11/12  mx-auto ">
          <h1 className="border-2 border-[#0dcaf0] p-2 text-lg rounded-lg text-center font-semibold my-6 w-8/12 md:w-4/12">
            My Job Applications
          </h1>
          <p className="font-semibold mb-4">View and manage your job status</p>

          <hr className="border-gray-400 mb-2" />

          <div className="container grid grid-cols-1 md:grid-cols-2 md:items-start">
            <div className="mb-3">
              <h3 className="font-semibold">Digital Marketer</h3>
              <p>Google </p>
              <p>United Kingdom </p>
              <p>
                <span className="font-semibold">Date of Application:</span>
                February 20, 2024
              </p>
            </div>
            <div className="flex justify-start md:justify-end items-center gap-3 md:gap-8">
              <Link
                onClick={showUserStatus}
                href=""
                className="text-[#0dcaf0] hover:bg-cyan-400 hover:text-white border border-gray-400 rounded-lg p-1 px-2 lg:p-2"
              >
                Update Status
              </Link>
              <Link
                href="/joblisting"
                className="text-white bg-green-700 hover:bg-green-600 rounded-lg p-1 px-2 lg:p-2"
              >
                Applied
              </Link>
            </div>
          </div>

          <hr className="border-gray-400 mb-6 mt-4 md:mt-0" />
        </div>
      </div>
    );
}
 
export default Appliedjobs;