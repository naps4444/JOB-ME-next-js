import { useState, useEffect } from "react";
import { fetchAppliedJobs } from "../../../service/allJobsApplication.js"
import Cookies from "js-cookie";
import { format } from "date-fns";
import UpdateStatusModal from "@/components/Modal/UpdateStatusModal.js";

const AppliedJobs = () => {
  const userId = Cookies.get("userId");
  console.log(userId);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);


  
  useEffect(() => {
    const loadAppliedJobs = async () => {
      try {
        const data = await fetchAppliedJobs(userId);
        setAppliedJobs(data.appliedJobs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAppliedJobs();
  }, [userId]);


  const handleUpdateStatus = async (applicationId, newStatus) => {
    try {
      // Call API to update status
      const response = await fetch(`/api/jobs/submitapplication`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ applicationId, status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update status');

      // Update state with new status
      setAppliedJobs((prev) =>
        prev.map((job) =>
          job.applicationId === applicationId ? { ...job, status: newStatus } : job
        )
      );
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      setShowModal(false);
    }
  };



  if (error)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        Error: {error}
      </div>
    );
  if (loading)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        Loading...
      </div>
    );
  if (!appliedJobs)
    return (
      <div className="w-11/12 mx-auto container flex justify-center py-14">
        No Data
      </div>
    );

  return (
    <div className="container mx-auto w-11/12 py-6">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 p-3 rounded-lg w-full md:w-[54%] text-center self-center lg:w-[40%] xl:w-[33%] border-2 border-[#0dcaf0]">
        My Job Applications
      </h2>
    {appliedJobs && appliedJobs.length > 1 &&  <p className="mb-8 font-semibold text-xl">View and manage your job status</p>}
      <div className="space-y-14">
        {appliedJobs.length < 1 && 
        <div className="pt-8 pb-56 md:pb-[31rem] lg:pb-56"> 
          <p className="text-xl font-semibold text-center md:text-left">No Applied Jobs Yet! </p>  </div>}
        {appliedJobs.map((job) => (
          <div
            key={job.applicationId}
            className="bg-white border-t border-b border-black p-4 grid grid-cols-1 md:grid-cols-2"
          >
            <div>
              <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
              <p className="font-semibold">{job.company}</p>
              <p className="font-semibold">{job.location}</p>
              <p className="font-semibold">
                Date of application: {format(new Date(job.appliedAt), "MMMM d, yyyy")}
              </p>
            </div>
            <div className="flex items-start md:items-center pt-5 md:pt-0 justify-start md:justify-end gap-3">
              <button
                onClick={() => { setSelectedJob(job); setShowModal(true); }}
                className="text-[#0DCAF0] border border-gray-200 rounded-lg p-2"
              >
                Update Status
              </button>
              <p className={`rounded-md px-3 py-2 font-semibold ${
                job.status === "Applied" ? "bg-green-700 text-white" :
                job.status === "Not hired" ? "bg-red-700 text-white" :
                job.status === "Interviewing" ? "bg-yellow-500 text-white" :
                "bg-gray-700 text-white"}`}
              >
                {job.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <UpdateStatusModal
          job={selectedJob}
          show={showModal}
          setShow={setShowModal}
          handleUpdateStatus={handleUpdateStatus}
        />
      )}
    </div>
  );
};

export default AppliedJobs;