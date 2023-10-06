import { useEffect, useState } from "react";
import { useLoaderData, } from "react-router-dom";
import { getStoredJobApplication } from "./Components/function";
import AppiedDetails from "./Components/AppiedDetails";

const Applied = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    // const [deleteJobs, setdeleteJJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {


            //  const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
          
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    // const hendleDelete=()=>
    // {
    //     setdeleteJJobs([])
    // }
    return (
        <div>
            <h2 className=" text-center text-4xl font-bold text-[darkblue]">applied
            job: {appliedJobs.length}</h2>
            <details className="dropdown mb-32 text-right justify-end">
                <summary className="m-12 btn bg-[darkblue] btn-primary">filter by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
           
             <div className="grid md:grid-cols-2 gap-5 mx-7">
             {
                    displayJobs.map(job => <AppiedDetails key={job.id} job={job} ></AppiedDetails>
                    )
                }
             </div>
           
       </div>
    );
};

export default Applied;