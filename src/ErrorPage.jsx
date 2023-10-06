import { NavLink, useRouteError, } from "react-router-dom";

const ErrorPage = () => {
  const error =useRouteError()
  console.log(error)
    return (
    <>
  <NavLink  >
  <div className="h-[100%] flex justify-center item-center my-auto text-center"> 
     <div>
     <h1 className="text-6xl font-bold my-4">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i><br />
        <i>{error.status}</i>
      </p>
     </div>

    </div>
  </NavLink>
  <NavLink to="/"><button className="btn btn-primary bg-[darkBlue] flex mx-auto justify-center">go home</button></NavLink>
    </>
    );
};

export default ErrorPage;