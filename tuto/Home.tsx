import { keepPreviousData, useIsFetching, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Link,Outlet,useLoaderData, useNavigate, useNavigation } from "react-router-dom"

import ky from 'ky'
import { useRef, useState } from "react"


type DataType={
    name:string,
    age:number
}

type UserDataType={
    username:string,
    usermail:string,
    userphone:string,
    id:string,
    active:'string'
}

type UserProductType={
    limit:number,
    skip:number,
    total:number,
    products:{title:string,id:number}[]
}

const Waiter=new Promise((resolve,reject)=> {

    setTimeout(()=> {
        
        resolve('okok');
    },3000)

})

export const HomeLoader=async ()=> {



    return {name:'doe',age:13}
}

export const Home=()=> {

    //const loaderData=useLoaderData() as DataType


    const client=useQueryClient()


    const [skip,setSkip]=useState(0)

    const [page,setPage]=useState(0)

    const {data,error,isLoading,isFetched,isSuccess,status,refetch,fetchStatus,isPlaceholderData}=useQuery({ 
        
        queryKey:['user_data',skip],
        queryFn:()=>ky.get(`https://dummyjson.com/products?limit=10&skip=${skip}`).json<UserProductType>(),
        staleTime:9000,
        retryDelay:4000,
        retry:5,
        
        //placeholderData: keepPreviousData,
        initialData:{
            limit:2,
            skip:2,
            total:1,
            products:[{title:'testokok',id:90}]
          }
        //networkMode:'online',
    
    })

    //console.log(fetchStatus,'fetchStatus');
    
    console.log(data,'data');
    
    //console.log(error,'error');

    //console.log(isLoading,'isLoading');

    //console.log(isFetched,'isFetched');

    //console.log(isSuccess,'isSuccess');

    //console.log(status,'status');

    if(error) {
        console.log('Nous avons une erreur');
    }

    let userData:JSX.Element[]=[]

    /* if(isSuccess) {

        userData=data.map((data)=> {
            const {id}=data
            return <ul key={id}  >
                        <li  >{data.username}</li>
                    </ul>
        })

    } */

    if(isSuccess) {

        userData=data.products.map((data)=> {
            const {id}=data
            return <ul key={id}  >
                        <li  >{data.title}</li>
                    </ul>
        })

    }

    const {mutate,reset}=useMutation({

        mutationKey:['user_data_mutation'],

        mutationFn:()=>ky.patch('http://localhost:3000/data/1',{
            json:{username:`${Date.now()}ok2`}
        }).json<UserDataType[]>(),

        onSuccess(data, variables, context) {

            /* console.log(data,'mutation data');

            console.log(variables,'mutation variable');

            console.log(context,'mutation context'); */
            //reset() 
            
        },

    })

    

    const update=()=> {
        mutate()
       
    }

    const fetching=useIsFetching()

    const next=()=> {
        setSkip((oldSkipState)=>oldSkipState+10)
        setPage((oldPage)=>oldPage+1)
 

    }

    const previous=()=> {
        setSkip((oldSkipState)=>oldSkipState-10)
        setPage((oldPage)=>oldPage-1)
 

    }

    console.log(isPlaceholderData);

  
    return <>
        <h1>Home</h1>
        <h1>Current page {page}</h1>
        <nav>
            <Link to={'/about/1'} >about</Link>
            <button className="bg-green-600 mx-4 p-1 border-none rounded-sm text-white" onClick={update} >
                update
            </button>

            <button className="bg-amber-600 mx-4 p-1 border-none rounded-sm text-white" onClick={previous}  >
                previous
            </button>

            <button className="bg-blue-600 mx-4 p-1 border-none rounded-sm text-white" onClick={next} disabled={skip===30} >
                next
            </button>

            {fetching?<h1>Fetching . . .</h1>:''}
        </nav>
        {userData}
        <Outlet />
    </>
}