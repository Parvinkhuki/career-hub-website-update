import {Link} from 'react-router-dom'

const AppiedDetails = ({job}) => {
    const {id,logo,job_title,company_name,salary }=job
    return (
   
        <div>
              <div >
            <div className="card bg-base-100 shadow-xl my-6">
  <figure className="px-10 pt-10">
    <img src={logo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{job_title}</h2>
    <p className="font-semibold">{company_name}</p>
    <p  className="font-semibold" >salary: {salary}</p>

    <div className="card-actions">
   <Link to={`/details/${id}`}> <button className="btn btn-primary text-white bg-[darkblue]"> show details</button></Link>
    </div>
  </div>
</div>
        </div>
        
        </div>
    );
};

export default AppiedDetails;