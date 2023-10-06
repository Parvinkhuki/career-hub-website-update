import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Social from './Social';
import { AuthContext } from './Authprovider';

const Login = () => {

    const {signIn}=useContext(AuthContext)
    const [error, seterror]=useState("")
    const navigate=useNavigate()
    const location=useLocation()
 
     const onSubmit=(e)=>{
         e.preventDefault()
    
     const email= e.target.email.value
     const password= e.target.password.value
 
 
 
     if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
         return  seterror("Min 8 characters, at least 1 uppercase letter, one lowercase letter, 1 num and 1 special character")
       }
 
     seterror("")
     
     signIn(email, password)
     .then(res=>{
         console.log(res.user)
         navigate(location.state? location.state:'/')

     })
     .catch(err=>{
         seterror(err.message)
     })
     }
 




    return (
        <>
        <div className='max-h-screen w-4/5 mt-36 m-auto  border  text-center bg-blue-100 p-32 my-10 '>
        <h1 className='text-4xl font-bold'>Sign in</h1>
           <form onSubmit={onSubmit}>
               <br />
               <input type="email" required placeholder='Email address' name='email' className='p-2 border w-3/4 my-4' />
               <br />
               <input type="password" placeholder='password' name='password' required className='p-2 border w-3/4 my-4' />
               <br />
               <p className='text-red-600'>{error}</p>
               <p className='text-right w-[85%] my-4'>forget password?</p>
               <button className='w-3/4 text-white btn bg-[darkblue]' type='submit' >sign in</button>
               <p className='my-8'>don't have any account? <NavLink to='/register' className='text-[darkblue] font-bold'>Register</NavLink></p>
           </form>
           <br/><hr />
      <Social></Social>
       </div>
       </>
    );
};

export default Login;