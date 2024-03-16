import ky from "ky"
import React from "react"
import { useQuery,useMutation,useQueryClient,useQueries,useIsFetching, useInfiniteQuery } from "@tanstack/react-query"
import { Form, Link, useLoaderData } from "react-router-dom"

export const block=new Promise((res,rej)=> {

    setTimeout(()=> {
        res(true)
    },4000)

})

export type DataType={
    id:string,
    username:string,
    userphone:string,
    usermail:string,
    active:string
}

export const homeLoader=async ()=> {

  
    const data=await ky.get('http://localhost:3000/data').json<DataType[]>()

    return data

}

export const homeLoader2=async ()=> {

  
    const data=await ky.get('http://localhost:3000/data').json<DataType[]>()

    return data

}



const fetchSpecifiqueData=async (id)=>{

    const data=await ky.get(`http://localhost:3000/data/${id}`).json<DataType[]>()

    return data;
}

const postTodo=async (element)=>{
    
    const data=await ky.post('http://localhost:3000/data',{
        json:element
    }).json()

    

    return data;

}

export const infinitQuery=async ({pageParam})=> {

    console.log(pageParam);
    const data=await ky.get(`http://localhost:3000/data?_limit=3&_start=1`).json()

    return data

}

export const Home=()=> {

    /* const idLists=['654c','0c77','2859']



        const response=useQueries({
            queries:idLists.map((id)=> {
                return {
                    queryKey:['posts keys',id],
                    queryFn:()=>fetchSpecifiqueData(id),
                }
            })
        })

      console.log(response[0].data) */


    //const queryClient = useQueryClient()


    /* const {data:data2,fetchNextPage}=useInfiniteQuery({
        queryKey:['infinit query test'],
        queryFn:infinitQuery,
        initialPageParam:2,
        getNextPageParam: (lastPage, pages) =>4,
    }) */

    const mutation=useMutation({
        mutationKey:['mutation key'],
        mutationFn:postTodo
    })

    console.log(mutation.data);


/* 
    {
        username:'testuser',
        usermail:'testmail',
        userphone:'testphone',
        active:'1'
    } */


     const globalFetching = useIsFetching()

    //console.log(globalFetching);

    const {isLoading,isPending,error,data,isSuccess,isFetching,isStale,refetch,fetchStatus}=useQuery({
        queryKey:['posts keys'],
        queryFn:homeLoader2,
        //staleTime:5000,
        refetchOnWindowFocus:true,
        networkMode:'always',
        //initialData:[]
        
    })

   


    if(error) {
        console.log('error',error);
    }

    /* console.log(`loading=> ${isLoading}`,`fetching => ${isFetching}`,data,`pending=> ${isPending}`,`success=>${isSuccess}`); */

    if(isFetching) {
        //console.log(`fetching => ${isFetching}`,fetchStatus);
    }

    if(isStale) {
        //console.log(`stale=> ${isStale}`);
    }

    if(isPending||isLoading) {

        return <h1>Wait...</h1>
    }
 

    const elements=data


    //const loaderData=useLoaderData() as DataType[];

    const unorderLists=elements?.map((element)=> {

        const {id,usermail,username,userphone}=element

            return (

                <ul className="inline-block bg-green-400 m-4 p-2 rounded min-w-32 h-36 text-2xl" key={id} >
                        <li>name: {username} </li>
                        <li>phone: {userphone}</li>
                        <li>mail: {usermail}</li>
                        <li className="flex justify-center items-center my-2 w-full" >
                            <Link to={`/update/${id}`} className="bg-purple-700 mx-4 px-2 rounded text-lg text-white" >
                                Edite
                            </Link>
                            <Form action={`/delete/${id} `} method="POST">
                                <button  className="bg-red-700 px-2 rounded text-lg text-white" >
                                    delete
                                </button>
                            </Form>
                            
                        </li>
                </ul>
            )
       


    })

    return (
        
        <div className="flex w-full overflow-x-hidden" >
            <section className="flex flex-wrap justify-evenly w-full" >
                {unorderLists.length>0?unorderLists:<h1>Empty</h1>}
            </section>
            <button onClick={()=>refetch()} >refetch</button>
            <button onClick={()=>mutation.mutate({
            username:'testuser',
            usermail:'testmail',
            userphone:'testphone',
            active:'1'
        })} >add mutation data </button>
        </div>

    )

}

