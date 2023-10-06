import React, {  useContext } from 'react';
import { AuthContext } from './Authprovider';

const Social = () => {

    const {googleSignIn,githubSignIn}=useContext(AuthContext)
    
    const hendleGoogleSignIn=media=>{
        media()
        .then(res=>{
            console.log("fine")
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    const hendleGithubSignIn=media=>{
        media()
        .then(res=>{
            console.log("fine")
        })
        .catch(err=>{
            console.log(err.message)
        })
    }





    return (
        <>
        <div className="divider">continue with</div>
        <div className="flex justify-around">
            <button
               
                className="btn text-[darkblue] font-bold" onClick={()=>{hendleGoogleSignIn(googleSignIn)}}>Google</button>
           <button
               
                className="btn text-[darkblue] font-bold" onClick={()=>{hendleGithubSignIn(githubSignIn)}}>Github</button>

        </div>
    </>
    );
};

export default Social;