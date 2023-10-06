import { useEffect, useState } from "react";
import Job from "./job";

const Jobs = () => {
    const [jobs, setjobs]= useState([])
    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
     .then(res=>res.json())
     .then (data=>setjobs(data))
    

    },[jobs])
    return (
        <div className="max-w-screen-2xl mx-auto my-8">
           <div>
            <h1 className="text-center w-full text-5xl font-bold my-14">Job Catgories</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 px-6 mt-7 gap-5 mx-auto items-center">
           {
               jobs.slice(0,dataLength).map((job)=><Job key={job.id} job={job}></Job>
            )}
            
           </div>
           <div className={dataLength === jobs.length && 'hidden' }>
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn btn-primary bg-[darkblue] text-white flex  items-center mx-auto  my-7">Show All Jobs</button>
            </div>
           </div>
        </div>
    );
};

export default Jobs;