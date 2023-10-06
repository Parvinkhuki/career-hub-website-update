import { NavLink } from "react-router-dom";
import './Nav.css'
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
const Nav = () => {


const {logOut,user}=useContext(AuthContext)

   const style=({ isActive}) => {
        return {
          backgroundColor: isActive ? "darkBlue"  : "",
          fontWeight: isActive ? "bold" : "",
     
        };
      }
    const links=<>
   <li><NavLink to="/" style={style}>Home</NavLink></li>
        <li><NavLink to="/jobs" style={style}>Jobs</NavLink></li>
        <li><NavLink to="/applied" style={style}>Applied Jobs</NavLink></li>
        
  </>
    return (
      <div className="max-w-screen-2xl mx-auto">
          <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
             </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><span className="] text-[darkblue] p-2 rounded font-bold">CAREER</span>Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                {links}
          </ul>
        </div>
        <div className="navbar-end">
        {  user?
  <div className="flex justify-center items-center gap-2">
    <div><p className='text-xs md:text-base font-bold'>{user.displayName
}</p>
      </div>
      <div className="dropdown dropdown-buttom">
   
   <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
       <div className="w-10 rounded-full">
         <img src={user.photoURL?user.photoURL:"https://i.ibb.co/9V4yRRD/8380015.jpg"
} />
       </div>  
    </label>
 <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
 
   <li> <NavLink  className="btn bg-[darkBlue] text-white" onClick={logOut}>LogOut</NavLink> </li>
 </ul>
</div>
    </div>:
        <NavLink to='/login' className="btn bg-[darkBlue] text-white">Login</NavLink> 
      
        }
        </div>
      </div>
      </div>
    );
};

export default Nav;
