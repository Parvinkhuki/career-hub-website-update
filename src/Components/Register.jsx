import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Social from './Social';
import { AuthContext } from './Authprovider';


const Register = () => {
    const {signup}=useContext(AuthContext)
   const [error, seterror]=useState("")
   const location = useLocation()
   const navigate=useNavigate()

    const onSubmit=(e)=>{
        e.preventDefault()
    const name = e.target.name.value
    const photo=e.target.photo.value
    const email= e.target.email.value
    const password= e.target.password.value

    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
        return  seterror("Min 8 characters, at least 1 uppercase letter, one lowercase letter, 1 num and 1 special character")
      }

    seterror("")
    
    signup(email, password)
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
        <h1 className='text-4xl font-bold'>Register</h1>
           <form onSubmit={onSubmit}>
               <br />
               <input type="text" placeholder='name' name='name' className='p-2 border w-3/4 my-4' />
               <br />
               <input type="text" placeholder='photo url' name='photo' className='p-2 border w-3/4 my-4' />
               <br />
               <input type="email" required placeholder='Email address' name='email' className='p-2 border w-3/4 my-4' />
               <br />
               <input type="password" required placeholder='password' name='password' className='p-2 border w-3/4 my-4' />
               <br />
               <p className='text-red-600'>{error}</p>
              
               <button className='w-3/4 text-white btn bg-[darkblue]' type='submit'>Register</button> 
               <p className='my-8'>do you have an account? <NavLink to='/login' className='text-[darkblue] font-bold'> Sign In </NavLink></p> 
           </form>
            <br/><hr />
            <Social></Social>
   
      </div>
      </>
    );
};

export default Register;