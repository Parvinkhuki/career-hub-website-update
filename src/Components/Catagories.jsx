import { useEffect, useState } from "react";
import Catagory from "./Catagory";

const Catagories = () => {
    const [catagory, setCatagory]= useState([])
    useEffect(()=>{
        fetch('categories.json')
     .then(res=>res.json())
     .then (data=>setCatagory(data))
     console.log(catagory)

    },[])
    return (
        <div className="max-w-screen-2xl mx-auto">
           <div>
            <h1 className="text-center w-full text-5xl font-bold mt-8">Job Catgories</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 px-6 mt-7 gap-5 mx-auto items-center">
           {
                catagory.map((catagory)=><Catagory key={catagory.id} catagory={catagory}></Catagory>
            )}
           </div>
           </div>
        </div>
    );
};

export default Catagories;