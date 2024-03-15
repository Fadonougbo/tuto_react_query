import ky from "ky"
import React from "react"
import { Form, Link, useLoaderData } from "react-router-dom"

const block=new Promise((res,rej)=> {

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

export const Home=()=> {


    const loaderData=useLoaderData() as DataType[];

    console.log(loaderData);

    const unorderLists=loaderData.map((element)=> {

        const {id,usermail,username,userphone}=element

      

            return (

                <ul className="inline-block bg-green-400 m-4 p-2 rounded min-w-32 h-36 text-2xl" key={id} >
                        <li>name: {username} </li>
                        <li>phone: {userphone}</li>
                        <li>mail: {usermail}</li>
                        <li className="flex justify-center items-center my-2 w-full" >
                            <Link to={`/update/${id}`} className="bg-purple-700 mx-4 px-2 text-lg text-white" >Edite</Link>
                            <Form action={`/delete/${id} `} method="POST">
                                <button  className="bg-red-700 px-2 text-lg text-white" >
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
        </div>

    )

}

export const homeLoader=async ()=> {

    console.log('ok');
    const data=await ky.get('http://localhost:3000/data').json<DataType[]>()

    return data;

}