import React, { useEffect } from "react"
import { useQuery } from "react-query"

type user={
    name:string
}

type users=user[]

/* const getData=async ():Promise<users>=> {
       
    return fetch('',{
    })
    .then((res)=>res.json())
    .then((data)=>data)
} */

export const Home=()=> {

    
     

    /* const queryKey=['q']
    const {isLoading,data,refetch,error,isFetching}=useQuery(queryKey,getData,{
        
    })

    console.log(isLoading,isFetching);
    if(error) {
        console.log(error);
    }
    
    let users=data||[];

    const elements=users?.map((el,key)=><h2 key={key} >{el.name}</h2>)  */



    return (
        <div>
            {/* {
                isLoading?<p>loading...</p>:elements
            }
            <button onClick={()=>refetch()} >refetch?</button> */}
           <h1>home</h1>
        </div>
    )

}