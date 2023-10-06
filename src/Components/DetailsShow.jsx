import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "./function";

const DetailsShow = () => {
    const {id}=useParams()
    const intId=parseInt(id)
    const alljobs= useLoaderData()
    const job = alljobs.find(job=>job.id===intId)

  console.log(id,alljobs,job)

  const handleApplyJob = () =>{
   saveJobApplication(intId)
  
   
}



    return (
        <div>
            <h1 className="text-center text-[darkblue] font-bold text-4xl mt-11">Job Details</h1>
         <div className="card w-[80%] lg:w-[50%] my-5  mx-auto  bg-base-100 shadow-xl">
  <div className="card-body">

    <h2 className="card-title">{job.job_title
}</h2>
 <span>Job Type:  {job.job_type



}</span>
<h2 className="font-bold text-[darkblue]  text-xl">company Detail
</h2> <span className="text-lg font-bold">{job.company_name

}</span>
    <p>phone:  {job.contact_information.phone
}</p>
<p>Email:  {job.contact_information.email
}</p>
<p> address:  {job.contact_information. address
}</p>
<h2 className="font-bold text-xl text-[darkblue] ">job description
</h2> <span>{job.job_description
}</span>
<h2 className="font-bold text-[darkblue]  text-xl">job-responsibility
</h2> <span>{job.job_responsibility

}</span>
<h2 className="font-bold text-[darkblue]  text-xl">educational-requirements

</h2> <span>{job.educational_requirements


}</span>
<h2 className="font-bold text-[darkblue]  text-xl">experiences

</h2> <span>{job.experiences

}</span>
<h2 className="font-bold text-[darkblue]  text-xl">location
</h2> <span>{job.location

}</span>
    <div className="card-actions justify-end">
     <NavLink to='/applied'> <button onClick={handleApplyJob} className="btn btn-primary bg-[darkblue] text-white">Apply Now</button></NavLink>
    </div>
    {/* <div className="card-actions justify-start">
     <NavLink> <button className="btn btn-primary bg-[darkblue] text-white">Apply Now</button></NavLink>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default DetailsShow;